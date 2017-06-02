import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['../../app.component.css', './selector.component.css']
})
export class SelectorComponent implements OnInit {
  more: Boolean;

  constructor(
    private reportService: ReportService
  ) { }

  // initialize the app with LESS selected
  ngOnInit() {
    this.more = false;
  }

  // gets called on radio button click event
  changeSelection(bool) {
    this.more = bool;
    console.log('HEYYYYY', this.more);
  }

}
