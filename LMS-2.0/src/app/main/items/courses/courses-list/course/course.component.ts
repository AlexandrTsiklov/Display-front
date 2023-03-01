import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-courses-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent {
    Math = Math;
    @Input('course') course: { name: string, shortName: string, maxScore: string, score: string }
}
