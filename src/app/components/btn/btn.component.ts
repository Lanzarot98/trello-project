import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'success' | 'primary' | 'danger' | 'light' | 'sky'=  'primary';

  mapColors = {
    success: {
      'bg-success-700': true,
      'hover:bg-success-800': true,
      'focus:ring-success-300': true,
      'text-white': true
    },
    primary: {
      'bg-primary-700': true,
      'hover:bg-primary-800': true,
      'focus:ring-primary-300': true,
      'text-white': true
    },
    danger: {
      'bg-danger-700': true,
      'hover:bg-danger-800': true,
      'focus:ring-danger-300': true,
      'text-white': true
    },
    light: {
      'bg-gray-200': true,
      'hover:bg-gray-500': true,
      'focus:ring-gray-50': true,
      'text-gray-700': true
    },
    sky: {
      'bg-sky-700': true,
      'hover:bg-sky-800': true,
      'focus:ring-sky-300': true,
      'text-white': true
    },
  }

  constructor() { }

  ngOnInit(): void {
  }

  // gray-light
  get colors() {
    const colors = this.mapColors[this.color];
    if (colors) {
      return colors;
    }
    return {};
    // return {
    //   'text-white': this.color === 'success' || this.color === 'primary' || this.color === 'red',
    //   'text-gray-700': this.color === 'gray-light',
    //   'bg-success-700': this.color === 'success',
    //   'hover:bg-success-800': this.color === 'success',
    //   'focus:ring-success-300': this.color === 'success',
    //   'bg-primary-700': this.color === 'primary',
    //   'hover:bg-primary-800': this.color === 'primary',
    //   'focus:ring-primary-300': this.color === 'primary',
    //   'bg-red-700': this.color === 'red',
    //   'hover:bg-red-800': this.color === 'red',
    //   'focus:ring-red-300': this.color === 'red',
    //   'bg-gray-200': this.color === 'gray-light',
    //   'hover:bg-gray-500': this.color === 'gray-light',
    //   'focus:ring-gray-50': this.color === 'gray-light',
    // }
  }

}
