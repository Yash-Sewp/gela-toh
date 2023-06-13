import { Component } from '@angular/core';
import * as AOS from 'aos'; //AOS - 1
import { Meta, Title } from '@angular/platform-browser';
import { getAnalytics, logEvent } from "firebase/analytics";

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss']
})
export class OurProductsComponent {
  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    AOS.init();
    this.title.setTitle('Our Products');
    this.meta.updateTag({ name: 'description', content: 'GelaToh crème liqueur ice cream and cakes is a registered black female owned and managed company. GelaToh is the first company to manufacture and supply its own branded alcoholic ice cream. We manufacture and sell a varity of alcoholic ice cream flours and birthday/wedding cakes.' });
    const analytics = getAnalytics();
    logEvent(analytics, 'page_title', { page_title: 'Our Products' });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
}
