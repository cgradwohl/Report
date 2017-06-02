import { Component, OnInit, Input } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { SelectorsComponent } from '../selectors/selectors.component';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['../../app.component.css', './grid.component.css'],
  inputs: ['selection', 'length', 'names', 'data']
})
export class GridComponent implements OnInit {

  @Input() data: any;
  @Input() names: any;
  col: any;
  header: any;


  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    // initialize grid with one columns
    this.col = 'three';

    //initialize header with first 5 names
    this.header = this.names.slice(0,5);

  }

}
