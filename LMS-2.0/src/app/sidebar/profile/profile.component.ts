import { Component, ElementRef, HostListener } from '@angular/core';
import { AvatarManagerService } from "../../avatar-manager.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  dropdownIsVisible = false

  constructor(private el: ElementRef, public avatarManagerService: AvatarManagerService) {}

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.dropdownIsVisible = false
    }
  }

  toggleDropdown() {
    this.dropdownIsVisible = !this.dropdownIsVisible
  }
}
