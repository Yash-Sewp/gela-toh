import { Component, Input } from '@angular/core';
import * as AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() warning: string = "";
  @Input() tagLine: string = "";
  @Input() heading: string = "";
  @Input() subHeading: string = "";
  @Input() content: string = "";
  @Input() img: string = "";

  ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }

}
