import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './sidebar/menu/menu.component';
import { ProfileComponent } from "./sidebar/profile/profile.component";
import { ItemLinksListComponent } from "./sidebar/menu/item-links-list/item-links-list.component";
import { ItemLinkComponent } from "./sidebar/menu/item-links-list/item-link/item-link.component";
import { GradeComponent } from "./main/items/neutral/grade/grade.component";
import { LiteratureComponent } from "./main/items/neutral/literarute/literature.component";
import { OrdersComponent } from "./main/items/neutral/orders/orders.component";
import { ScheduleComponent } from "./main/items/neutral/schedule/schedule.component";
import { CoursesComponent } from "./main/items/courses/courses.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./routes";
import { ScholarshipComponent } from "./main/items/neutral/scholarship/scholarship.component";
import { FinancialSupportFrameComponent } from "./main/items/neutral/scholarship/frame-financial-support/financial-support-frame.component";
import { TotalYearResultsFrameComponent } from "./main/items/neutral/scholarship/frame-total-year-results/total-year-results-frame.component";
import { ScholarshipTableFrameComponent } from "./main/items/neutral/scholarship/frame-scholarship-table/scholarship-table-frame.component";
import { TermComponent } from "./main/items/neutral/grade/term/term.component";
import { FormsModule } from "@angular/forms";
import { CourseComponent } from "./main/items/courses/courses-list/course/course.component";
import { CoursesListComponent } from "./main/items/courses/courses-list/courses-list.component";
import { DayComponent } from "./main/items/neutral/schedule/day/day.component";
import { ProfileMainComponent } from "./main/profile/profile-main/profile-main.component";
import { ProfileEditComponent } from "./main/profile/profile-edit.component.ts/profile-edit.component";
import { AvatarManagerService } from "./avatar-manager.service";
import {CourseContentComponent} from "./main/items/courses/course-content/course-content.component";
import {CourseTaskComponent} from "./main/items/courses/course-content/task/task-component";


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,

    ProfileComponent,

    MenuComponent,
    ItemLinksListComponent,
    ItemLinkComponent,

    ProfileMainComponent,
    ProfileEditComponent,

    CoursesComponent,
    CoursesListComponent,
    CourseComponent,
    CourseContentComponent,
    CourseTaskComponent,

    GradeComponent,
    TermComponent,

    LiteratureComponent,
    OrdersComponent,

    ScheduleComponent,
    DayComponent,

    ScholarshipComponent,
    TotalYearResultsFrameComponent,
    FinancialSupportFrameComponent,
    ScholarshipTableFrameComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        FormsModule
    ],
  providers: [AvatarManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
