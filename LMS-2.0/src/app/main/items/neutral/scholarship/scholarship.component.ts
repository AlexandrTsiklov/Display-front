import { Component, ViewEncapsulation } from "@angular/core";
import { SCHOLARSHIP_DATA } from "./scholarship-data";

@Component({
    selector: 'app-scholarship',
    templateUrl: './scholarship.component.html',
    styleUrls: ['./scholarship.component.css']
})
export class ScholarshipComponent {
    public scholarshipData = SCHOLARSHIP_DATA
    public name: string = 'Стипендия'
    public category: string = 'all'

    filterFrames(category: string) {
        this.category = category
    }
}
