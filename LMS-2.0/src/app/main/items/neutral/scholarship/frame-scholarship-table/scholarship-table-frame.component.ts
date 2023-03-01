import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-scholarship-table-frame',
    templateUrl: './scholarship-table-frame.component.html',
    styleUrls: ['./scholarship-table-frame.component.css']
})
export class ScholarshipTableFrameComponent {
    @Input('name') name: string;
    @Input('monthSum') monthSum: string;
    @Input('scholarshipRecording') scholarshipRecording: {
        year: string,
        category: string,
        month: string,
        sum: string,
        date: string
    }[];
}
