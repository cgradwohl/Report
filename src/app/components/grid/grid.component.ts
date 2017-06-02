import { Component, OnInit, Input } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { SelectorsComponent } from '../selectors/selectors.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['../../app.component.css', './grid.component.css'],
  inputs: ['selection', 'length', 'names']
})
export class GridComponent implements OnInit {

  @Input() more: any;

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    // this.reportService.getSelection();
  }

}
