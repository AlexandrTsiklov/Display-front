import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { COURSES_CONTENT_DATA } from "./courses-content.data";

@Component({
    selector: 'app-course-content',
    templateUrl: 'course-content.component.html',
    styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {
    public coursesContentData = COURSES_CONTENT_DATA
    public courseName: string
    public tasks: never[] | ({ number: number; name: string; 'status:': string; status?: undefined; } | { number: number; name: string; status: string; 'status:'?: undefined; })[] | undefined
    public seminarsInfo: {
        professorName: string,
        professorEmail: string,
        professorPhone: string,
        photoUrl: string,
        link: string
    }
    public lecturesInfo: {
        professorName: string,
        professorEmail: string,
        professorPhone: string,
        photoUrl: string,
        link: string
    }

    public additionalMaterials: {
            number: number,
            name: string,
            type: string,
            photoUrl: string
    }[]

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            let shortName = params['shortName'];

            for (let courseContent of this.coursesContentData) {
                if (courseContent.shortName == shortName) {
                    this.courseName = courseContent.name
                    this.tasks = courseContent.tasks
                    // @ts-ignore
                    this.seminarsInfo = courseContent.seminarsInfo
                    // @ts-ignore
                    this.lecturesInfo = courseContent.lecturesInfo
                    // @ts-ignore
                    this.additionalMaterials = courseContent.additionalMaterials
                    console.log(courseContent.tasks)
                    break
                }
            }
        });
    }
}
