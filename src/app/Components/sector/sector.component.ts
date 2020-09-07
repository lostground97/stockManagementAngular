import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CompanyPriceDetails } from '../../models/company-price-data';
import { Company } from '../../models/company-data';
import { Sector } from '../../models/sector-data';
import { SectorCompare } from '../../models/sector-compare-data';
import { SectorService } from '../../services/sector.service';
import Utils from '../../helpers/utils';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {
//  @Input()
  sectors : Sector[] = [];
  companies : Company[] = [];
  selectedSector: Sector = new Sector();
  compareSector1;
  compareSector2;
  startDate: Date = new Date();
  endDate;
  showGraph: boolean = false;
  compareSectorData1: SectorCompare = new SectorCompare();
  compareSectorData2: SectorCompare = new SectorCompare();

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType = 'bar';
  public barChartLegend = true;

  public avgChartLabels = ['Highest Average'];
  public highChartLabels = ['Highest High'];
  public lowChartLabels = ['Lowest Low'];

  public avgChartData = [];
  public highChartData = [];
  public lowChartData = [];

  constructor(private sectorService: SectorService ) {
    sectorService.fetchSectors().subscribe(data => {
      this.sectors = data as Sector[];
    });
  }

  onStartDateChange(event) {
    var date = new Date(event.value);
    this.startDate = date;
  }

  onEndDateChange(event) {
    var date = new Date(event.value);
    this.endDate = date;
  }

  selectSector(id) {
    this.sectorService.fetchSectorCompanies(id).subscribe(data => {
      this.companies = data.companies as Company[];
      this.selectedSector.sectorId = data.sectorId;
      this.selectedSector.sectorName = data.sectorName;
      this.selectedSector.brief = data.brief;
    });
  }

  handleCompareSector() {
    const id1 = this.compareSector1;
    const id2 = this.compareSector2;

    this.fetchSectorCompare(id1, id2, this.startDate, this.endDate);
  }

  fetchSectorCompare(id1, id2, startDate, endDate) {
    const sDate = Utils.convertDate(startDate);
    const eDate = Utils.convertDate(endDate);
    this.avgChartData = [];
    this.highChartData = [];
    this.lowChartData = [];

    this.sectorService.fetchSectorWithPrices(id1, sDate, eDate).subscribe(data => {
      this.compareSectorData1.sectorId = data.sectorId;
      this.compareSectorData1.sectorName = data.sectorName;
      this.compareSectorData1.brief = data.brief;
      this.compareSectorData1.noOfCompanies = data.noOfCompanies;
      this.compareSectorData1.highestAvg = data.highestAvg;
      this.compareSectorData1.highestHigh = data.highestHigh;
      this.compareSectorData1.lowestLow = data.lowestLow;

      var avgChart = {
        data: [data.highestAvg.stockPrice],
        label: "Sector 1 -" + data.highestAvg.companyName
      }
      this.avgChartData.push(avgChart);

      var highChart = {
        data: [data.highestHigh.stockPrice],
        label: "Sector 1 - " + data.highestHigh.companyName
      }
      this.highChartData.push(highChart);

      var lowChart = {
        data: [data.lowestLow.stockPrice],
        label: "Sector 1 - " + data.lowestLow.companyName
      }
      this.lowChartData.push(lowChart);
      this.showGraph = true;
    });

    this.sectorService.fetchSectorWithPrices(id2, sDate, eDate).subscribe(data => {
      this.compareSectorData2.sectorId = data.sectorId;
      this.compareSectorData2.sectorName = data.sectorName;
      this.compareSectorData2.brief = data.brief;
      this.compareSectorData2.noOfCompanies = data.noOfCompanies;
      this.compareSectorData2.highestAvg = data.highestAvg;
      this.compareSectorData2.highestHigh = data.highestHigh;
      this.compareSectorData2.lowestLow = data.lowestLow;
      var avgChart = {
        data: [data.highestAvg.stockPrice],
        label: "Sector 2 - " + data.highestAvg.companyName
      }
      this.avgChartData.push(avgChart);

      var highChart = {
        data: [data.highestHigh.stockPrice],
        label: "Sector 2 - " + data.highestHigh.companyName
      }
      this.highChartData.push(highChart);

      var lowChart = {
        data: [data.highestHigh.stockPrice],
        label: "Sector 2 - " + data.highestHigh.companyName
      }
      this.lowChartData.push(lowChart);
      this.showGraph = true;
    });
  }

  ngOnInit(): void {
  }

}
