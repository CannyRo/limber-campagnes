import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBorderAll, faBookmark, faCalendarDays, faChartSimple, faHouse, faMagnet, faNewspaper, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { NavActiveDirective } from '../../directives/nav-active.directive';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, RouterLink, NavActiveDirective, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  faHouse = faHouse;
  faBorderAll = faBorderAll;
  faPaperclip = faPaperclip;
  faBookmark = faBookmark;
  faCalendarDays = faCalendarDays;
  faNewspaper = faNewspaper;
  faMagnet = faMagnet;
  faChartSimple = faChartSimple;


}
