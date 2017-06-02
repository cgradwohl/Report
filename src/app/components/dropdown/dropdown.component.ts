import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['../../app.component.css', './dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  fields: any;

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    let fields = this.reportService.getFields();
    this.fields = fields;
    console.log(fields);
  }



}
