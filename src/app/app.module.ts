import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectorComponent } from './components/selector/selector.component';
import { GridComponent } from './components/grid/grid.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';


import { ReportService } from './services/report.service';
@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    GridComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
