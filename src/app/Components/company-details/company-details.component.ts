import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  currentcompany = {
    company_id:0,
    company_name:'',
    turnover:'',
    ceo:'',
    board_of_directors:'',
    write_up:'',
    sector_id:0
  };
  message = '';
  listdata:any;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getCompany(this.route.snapshot.paramMap.get('id'));
  

   // this.message = '';
  //  this.getCompany(this.route.snapshot.paramMap.get('id'));
  }
  // ngOnInit{
  // const data={ company_id:this.currentcompany.company_id,
  //   num_of_shares:this.currentcompany.num_of_shares,
  //   open_date:this.currentcompany.open_date,
  //   price_per_share:this.company.price_per_share,
  //   remarks:this.company.remarks,
  //   company_id:this.company.company_id
  // };



  getCompany(id) {
    this.companyService.get(id)
      .subscribe(
        data => {
         // this.currentcompany = data;
          console.log(data);
          this.listdata = [];
          for(let key in data){
              this.listdata.push(data[key]);

          }
          
            this.currentcompany.company_id=this.listdata[0];
            this.currentcompany.board_of_directors=this.listdata[1];
            this.currentcompany.ceo=this.listdata[2];
            this.currentcompany.company_name=this.listdata[3];
            this.currentcompany.turnover=this.listdata[4];
            this.currentcompany.write_up=this.listdata[5];
            this.currentcompany.sector_id=this.listdata[6];
            
            
          
          console.log(this.listdata);

        },
        error => {
          console.log(error);
        });
  }




  updateCompany() {
    const data={ company_id:this.currentcompany.company_id,
      company_name:this.currentcompany.company_name,
      turnover:this.currentcompany.turnover,
	    ceo:this.currentcompany.ceo,
	    board_of_directors:this.currentcompany.board_of_directors,
      write_up:this.currentcompany.write_up,
      sector_id:this.currentcompany.sector_id
    };
    console.log(this.currentcompany.company_id,data);
    this.companyService.update(this.currentcompany.company_id,data)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Company was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  // deleteCompany() {
  //   this.companyService.delete(this.currentcompany.company_id)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.router.navigate(['/company']);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
}
