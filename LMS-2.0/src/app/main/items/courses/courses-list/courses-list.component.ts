import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {
    @Input('showSemesterHeader') showSemesterHeader: boolean
    @Input('semesterData') semesterData: {
        semester: number,
        courses: { name: string, shortName: string, maxScore: string, score: string }[]
    }
}
