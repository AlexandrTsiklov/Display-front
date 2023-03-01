import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { COURSES_CONTENT_DATA } from "../courses-content.data";

@Component({
    selector: 'app-courses-content-task',
    templateUrl: './task-component.html',
    styleUrls: ['./task-component.css']
})
export class CourseTaskComponent implements OnInit {
    public  coursesData = COURSES_CONTENT_DATA
    public task: { number: number, name: string, completed: string }

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        let shortName
        let number

        this.activatedRoute.params.subscribe((params: Params) => {
            shortName = params['shortName'];
            number = params['number'];
        })
        for (let course of this.coursesData) {
            if (course.shortName == shortName) {
                // @ts-ignore
                for (let task of course.tasks) {
                    if (task.number == number) {
                        // @ts-ignore
                        this.task = task
                    }
                }
            }
        }
    }
}
