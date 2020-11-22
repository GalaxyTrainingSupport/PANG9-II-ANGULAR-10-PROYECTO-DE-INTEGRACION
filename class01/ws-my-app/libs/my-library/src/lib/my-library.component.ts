import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'glx-my-library',
  template: `
    <p>
      my-library works!
    </p>
  `,
  styles: [
  ]
})
export class MyLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
