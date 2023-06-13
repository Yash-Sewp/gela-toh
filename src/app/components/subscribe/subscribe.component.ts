import { Component } from '@angular/core';
import * as AOS from 'aos'; //AOS - 1
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
  ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm(environment.YOUR_SERVICE_ID, environment.YOUR_TEMPLATE_ID, e.target as HTMLFormElement, environment.YOUR_PUBLIC_KEY)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error: any) => {
        console.log(error.text);
      });
  }
}
