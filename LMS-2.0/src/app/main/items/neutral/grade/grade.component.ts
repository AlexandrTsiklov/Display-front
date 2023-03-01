import { Component } from "@angular/core";
import { GRADE_DATA } from "./grade-data";

@Component({
    selector: 'app-grade',
    templateUrl: './grade.component.html',
    styleUrls: ['./grade.component.css']
})
export class GradeComponent {
    currentDate: Date = new Date();
    gradeData = GRADE_DATA
    filterStatus: string = 'all'

    getTermByNumber = () => {
        for(let term of GRADE_DATA.terms) {
            console.log(this.filterStatus)
            if (term.numberOfTerm === this.filterStatus) {
                return term
            }
        }
        return GRADE_DATA.terms[0]
    }
}
