import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showTop = false;
  showBottom = false;
  showBoth = true;

  ngOnInit(): void {

  }

  toggle(which: string) {
    console.log("hi");
    if (which === 'showBoth') {
      this.showBoth = true;
    }
    if (which === 'showTop') {
      this.showTop = true;
      this.showBoth = false;
      this.showBottom = false;
    }
    if (which === 'showBottom') {
      this.showBottom = true;
      this.showTop = false;
      this.showBoth = false;
    }
  }
}
