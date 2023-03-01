import { Component, OnInit } from '@angular/core';
import { PROFILE_DATA } from "../profile-main-data";
import { AvatarManagerService } from "../../../avatar-manager.service";
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.component.html',
    styleUrls: ['./profile-edit.component.css'],
    animations: [
        trigger('expandedPanel', [
            state('initial', style({ height: 0 })),
            state('expanded', style({ height: '*' })),
            transition('initial <=> expanded', animate('0.3s')),
        ]),
    ],
})

export class ProfileEditComponent implements OnInit {
    profileData = PROFILE_DATA
    images: { name: string, url: string, active: boolean }[]
    defaultNumber = PROFILE_DATA.phoneNumber
    defaultEmail = PROFILE_DATA.email
    saveNumberButtonIsActive = false
    saveEmailButtonIsActive = false
    public indexOfActiveImage: number = 0
    public image: { name: string; url: string; active: boolean }

    constructor(public avatarManagerService: AvatarManagerService) {
        this.images = this.avatarManagerService.IMAGES
    }

    ngOnInit() {
        this.image = this.images[this.indexOfActiveImage]
    }

    activateSaveButton1() {
        if (this.defaultNumber != PROFILE_DATA.phoneNumber || this.defaultEmail != PROFILE_DATA.email) {
            this.saveNumberButtonIsActive = true;
        } else {
            this.saveNumberButtonIsActive = false;
        }
    }

    spinCarouselBack() {
        if(this.indexOfActiveImage - 1 < 0) {
            this.indexOfActiveImage = this.images.length -1
        } else {
            this.indexOfActiveImage--
        }
        this.image = this.images[this.indexOfActiveImage]
    }

    spinCarouselForward() {
        if(this.indexOfActiveImage + 1 == this.images.length) {
            this.indexOfActiveImage = 0
        } else {
            this.indexOfActiveImage++
        }
        this.image = this.images[this.indexOfActiveImage]
    }
}
