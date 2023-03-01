import { Component } from "@angular/core";

@Component({
    selector: 'app-literature',
    templateUrl: './literature.component.html',
    styleUrls: ['./literature.component.css']
})
export class LiteratureComponent {
    currentDate: Date = new Date();
}
