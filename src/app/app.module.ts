import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurProductsComponent } from './pages/our-products/our-products.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TitleComponent } from './components/title/title.component';
import { CardComponent } from './components/card/card.component';
import { DoubleCardComponent } from './components/double-card/double-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    OurProductsComponent,
    EventsComponent,
    ContactUsComponent,
    WelcomeComponent,
    SubscribeComponent,
    TestimonialComponent,
    TitleComponent,
    CardComponent,
    DoubleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
