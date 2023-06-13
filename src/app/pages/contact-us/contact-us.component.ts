import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as AOS from 'aos'; //AOS - 1
import { getAnalytics, logEvent } from "firebase/analytics";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    AOS.init();
    this.title.setTitle('Contact Us');
    this.meta.updateTag({ name: 'description', content: 'GelaToh crème liqueur ice cream and cakes is a registered black female owned and managed company. GelaToh is the first company to manufacture and supply its own branded alcoholic ice cream. We manufacture and sell a varity of alcoholic ice cream flours and birthday/wedding cakes.' });
    const analytics = getAnalytics();
    logEvent(analytics, 'page_title', { page_title: 'Contact Us' });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
}
