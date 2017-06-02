import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['../../app.component.css', './selectors.component.css']
})
export class SelectorsComponent implements OnInit {

  // class properties
  more      : Boolean;
  dataStore : Array<any>;
  fields    : Array<String>;
  gridLength: Number;

  constructor(
    private reportService: ReportService
  ) { }


  ngOnInit() {
    // initialize the app with LESS selected
    this.more = false;

    // makes ONE network request, returns an array of JSON
    // as long as we get an array of JSON we can use this grid
    let data = this.reportService.getData();

    this.dataStore  = data;
    this.fields     = Object.keys(this.dataStore[0]);
    this.gridLength = this.dataStore.length;
  }

  // gets called on radio button click event
  changeSelection(bool) {
    this.more = bool;
  }

}
