import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-grade-term',
    templateUrl: './term.component.html',
    styleUrls: ['./term.component.css']
})

export class TermComponent {
    @Input('term') term: {
        numberOfTerm: string,
        averageScore: string,
        subjects: {
            name: string,
            kindOfTest: string,
            rating: string,
            score: string
        }[]
    }
}
