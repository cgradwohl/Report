import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectorsComponent } from './components/selectors/selectors.component';
import { GridComponent } from './components/grid/grid.component';


import { ReportService } from './services/report.service';
@NgModule({
  declarations: [
    AppComponent,
    SelectorsComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
