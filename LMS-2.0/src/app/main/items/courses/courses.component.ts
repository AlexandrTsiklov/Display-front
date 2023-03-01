import { Component } from "@angular/core";
import { COURSES_DATA } from "./courses-data";

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
    coursesData = COURSES_DATA
    currentDate: Date = new Date();
    coursesStatus: string = 'actual'
}
