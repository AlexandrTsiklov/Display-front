import { Component } from '@angular/core';
import { PROFILE_DATA } from "../profile-main-data";
import { AvatarManagerService } from "../../../avatar-manager.service";

@Component({
    selector: 'app-profile-main',
    templateUrl: './profile-main.component.html',
    styleUrls: ['./profile-main.component.css']
})

export class ProfileMainComponent {
    profileData = PROFILE_DATA

    constructor(public avatarManagerService: AvatarManagerService) {
    }
}
