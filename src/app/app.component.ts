import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Star Rating';

  arr: any[] = [];
  index: number = 0;

  constructor() {
    this.arr = [
      { value: 1, color: 'black' },
      { value: 2, color: 'black' },
      { value: 3, color: 'black' },
      { value: 4, color: 'black' },
      { value: 5, color: 'black' },
    ];
  }

  onClickItem(index: number) {
    this.index = index;
    this.manipulateArr(index);
  }

  onMouseHover(index: number) {
    this.manipulateArr(index);
  }

  onMouseLeave() {
    this.manipulateArr(this.index);
  }

  manipulateArr(index) {
    this.arr.forEach((item, i) => {
      if (i <= index - 1) {
        item.color = 'green';
      } else {
        item.color = 'black';
      }
    });
  }
}
