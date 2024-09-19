import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { UserMenuComponent } from '../user-menu/user-menu.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, UserMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  // pageTitle: string | undefined;
  pageTitle: any;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.pageTitle = this.route.snapshot.data['title'];
    this.pageTitle = this.route.snapshot;
    console.log('ICI : ', this.route.snapshot.data);
  }

}
