import { Injectable } from '@angular/core';

@Injectable()
export class ReportService {

  constructor() { }


  getData() {
    // normally make a network request to an API endpoint
    // here I assume the endpoint returns an array of JSON
    const obj = [
      {
        "name": "Italy",
        "plan": "33 Italy",
        "forecast": "44",
        "best case": [
          "33",
          "33.5"
        ],
        "monthly plan": "66",
        "commits": [
          "77",
          "77.5"
        ],
        "comments": "comment comment and comment"
      },
      {
        "name": "Belgium",
        "plan": "33 Belgium",
        "forecast": "44",
        "best case": [
          "33",
          "33.5"
        ],
        "monthly plan": "66",
        "commits": [
          "77",
          "77.5"
        ],
        "comments": "comment comment and comment"
      },
      {
        "name": "China",
        "plan": "33 China",
        "forecast": "44",
        "best case": [
          "33",
          "33.5"
        ],
        "monthly plan": "66",
        "commits": [
          "77",
          "77.5"
        ],
        "comments": "comment comment and comment"
      },
      {
        "name": "Japan",
        "plan": "33 Japan",
        "forecast": "44",
        "best case": [
          "33",
          "33.5"
        ],
        "monthly plan": "66",
        "commits": [
          "77",
          "77.5"
        ],
        "comments": "comment comment and comment"
      },
      {
        "name": "USA",
        "plan": "33 USA",
        "forecast": "44",
        "best case": [
          "33",
          "33.5"
        ],
        "monthly plan": "66",
        "commits": [
          "77",
          "77.5"
        ],
        "comments": "comment comment and comment"
      }
    ];



    return obj;
  };


}
