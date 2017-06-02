import { Injectable } from '@angular/core';

@Injectable()
export class ReportService {

  constructor() { }

  getFields() {
    // normally from network request
    const obj = {
      "name": "dude",
      "plan": "33",
      "forecast": "44",
      "best case": "55"
    }



    return Object.keys(obj);
  };

}
