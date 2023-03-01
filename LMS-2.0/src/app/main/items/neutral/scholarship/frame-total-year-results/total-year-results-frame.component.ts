import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-scholarship-total-year-results-frame',
    template: `
      <div class="scholarship-canvas__scholarship-total-year-results-frame">
        Всего начислений за {{ year }} год:  <span class="green-money">{{ sum }}</span> руб.
      </div>`,
    styles: [`
        .scholarship-canvas__scholarship-total-year-results-frame {
            margin-bottom: var(--frame-margin-bottom);
            font-size: var(--frame-font-size);
            font-weight: 550;
            color: var(--text-color-dark-gray);
        }

        .green-money {
            font-size: calc(var(--frame-font-size) + 2px);
            color: #06b906;
        }
    `]
})
export class TotalYearResultsFrameComponent {
    @Input('year') year: string;
    @Input('sum') sum: string;
}
