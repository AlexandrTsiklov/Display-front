import { Routes } from "@angular/router";
import { CoursesComponent } from "./main/items/courses/courses.component";
import { ScheduleComponent } from "./main/items/neutral/schedule/schedule.component";
import { GradeComponent } from "./main/items/neutral/grade/grade.component";
import { ScholarshipComponent } from "./main/items/neutral/scholarship/scholarship.component";
import { LiteratureComponent } from "./main/items/neutral/literarute/literature.component";
import { OrdersComponent } from "./main/items/neutral/orders/orders.component";
import { ProfileMainComponent } from "./main/profile/profile-main/profile-main.component";
import { ProfileEditComponent } from "./main/profile/profile-edit.component.ts/profile-edit.component";
import { CourseContentComponent } from "./main/items/courses/course-content/course-content.component";
import { CourseTaskComponent } from "./main/items/courses/course-content/task/task-component";


export const ROUTES: Routes = [
    { path: '', redirectTo: 'news', pathMatch: 'full' },
    { path: 'courses', component: CoursesComponent },
    { path: 'courses/:shortName', component: CourseContentComponent },
    { path: 'courses/:shortName/:number', component: CourseTaskComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'scholarship', component: ScholarshipComponent },
    { path: 'grade', component: GradeComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'literature', component: LiteratureComponent },
    { path: 'profile', component: ProfileMainComponent },
    { path: 'profile/edit', component: ProfileEditComponent },
]
