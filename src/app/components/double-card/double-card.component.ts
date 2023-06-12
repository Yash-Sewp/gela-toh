import { Component, Input } from '@angular/core';
import * as AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-double-card',
  templateUrl: './double-card.component.html',
  styleUrls: ['./double-card.component.scss']
})
export class DoubleCardComponent {
  @Input() img: string = "";
  @Input() titleOne: string = "";
  @Input() titleTwo: string = "";
  @Input() colorOne: string = "";
  @Input() colorTwo: string = "";
  @Input() animation: string = "";

  ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
}
