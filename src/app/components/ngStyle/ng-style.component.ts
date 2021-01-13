import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    
  <div class="container">
      <p>
        ngStyle works!
      </p>
  </div>
      `,
  styles: [
  ]
})
export class NgstyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
