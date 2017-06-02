import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['../../app.component.css', './dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  dataStore: any;
  fields: any;
  gridLength: any;

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    // makes ONE network request, returns an array of JSON
    // as long as we get an array of JSON we can use this grid
    let data = this.reportService.getData();
    this.dataStore = data;

    this.fields = Object.keys(this.dataStore[0]);
    this.gridLength = this.dataStore.length;
  }



}
