import { Component } from "@angular/core";
import { SCHEDULE_DATA } from "./schedule-data";

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
    currentDate: Date = new Date();
    scheduleData = SCHEDULE_DATA
}
