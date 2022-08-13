import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Star Rating';

  arr: any[] = [];
  index: number = 0;

  constructor() {
    this.arr = [1, 2, 3, 4, 5];
  }

  onClickItem(index) {
    this.index = index;
  }
}
