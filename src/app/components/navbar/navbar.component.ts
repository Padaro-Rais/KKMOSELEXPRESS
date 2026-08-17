import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DataService } from '../../shared/services/data.service';
import { NavLink } from '../../shared/models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navLinks: NavLink[] = [];

  isScrolled = false;
  menuOpen = false;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.navLinks = this.dataService.navLinks;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 40;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('menu-open', this.menuOpen);
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.classList.remove('menu-open');
  }

}