import { Component, Input, OnInit } from '@angular/core';


import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterModule], 
  selector: 'app-selection-loader',
    //templateUrl: './selection-loader.component.html',

  template: `
    <div [ngStyle]="getMyStyles()" class="skelt-load loader"></div>
  `,
  styleUrls: ['./selection-loader.component.css']
})
export class SelectionLoaderComponent implements OnInit {
  @Input() Cwidth;
  @Input() Cheight;
  @Input() circle;

  constructor() { }

  ngOnInit() {
  }

  getMyStyles() {
    const myStyles = {
        'width': this.Cwidth ? this.Cwidth : '%',
        'height': this.Cheight ? this.Cheight : '%',
        'border-radius': this.circle ? '50%' : ''
    };
    return myStyles;
}

}
