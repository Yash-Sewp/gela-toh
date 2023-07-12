import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as AOS from 'aos'; //AOS - 1
import { getAnalytics, logEvent } from "firebase/analytics";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    AOS.init();
    this.title.setTitle('Events');
    this.meta.updateTag({ name: 'description', content: 'GelaToh crème liqueur ice cream and cakes is a registered black female owned and managed company. GelaToh is the first company to manufacture and supply its own branded alcoholic ice cream. We manufacture and sell a variety of alcoholic ice cream flavours and birthday/wedding cakes.' });
    const analytics = getAnalytics();
    logEvent(analytics, 'page_title', { page_title: 'Events' });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
}
