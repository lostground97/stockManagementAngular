import { Component, OnInit } from '@angular/core';
import {CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companys: any;
  currentCompany = null;
  currentIndex = -1;
  name='';
  

  constructor(private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router)
  { }

  ngOnInit() {
    this.retrieveCompanys();
  }

  retrieveCompanys() {
    this.companyService.getAll()
      .subscribe(
        data => {
          this.companys = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveCompanys();
    this.currentCompany = null;
    this.currentIndex = -1;
  }

  setActiveCompany(company, index) {
    this.currentCompany = company;
    this.currentIndex = index;
  }


  searchCompany() {

   this.companyService.searchCompany(this.name)
      .subscribe(
        data => {
          this.companys = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  deleteCompany() {
    this.companyService.delete(this.currentCompany.company_id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/success/company']);
        },
        error => {
          console.log(error);
        });
  }
}