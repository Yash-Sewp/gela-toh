import { Component } from '@angular/core';
import * as AOS from 'aos'; //AOS - 1
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }

  openNav() {
    var nav = document.getElementById('navbar__mobile');

    if (nav) {
      nav.style.width = '100%';
    }
  }

  closeNav() {
    var nav = document.getElementById('navbar__mobile');

    if (nav) {
      nav.style.width = '0';
    }
  }
}
