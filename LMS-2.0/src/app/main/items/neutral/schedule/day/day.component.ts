import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-schedule-day',
    templateUrl: 'day.component.html',
    styleUrls: ['./day.component.css']
})
export class DayComponent {
    @Input('day') day: {
        name: string,
        russianName: string,
        lessons: {
            number: number,
            type: string,
            name: string,
            professorPost: string,
            professorName: string,
            classroom: string
        }[]
    }
}
