import { Component, Input } from '@angular/core';
import * as AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() img: string = "";
  @Input() title: string = "";
  @Input() color: string = "";

  ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
}
