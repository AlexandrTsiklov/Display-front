import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-scholarship-financial-support-frame',
    template: `
      <div *ngFor="let recording of financialSupport" class="frame scholarship-canvas__financial-support-frame">
        <div class="scholarship-canvas__financial-support-text">
          <div class="scholarship-canvas__financial-support-text-name">{{ recording.name }}</div>
          <div class="scholarship-canvas__financial-support-text-date">{{ recording.date }}</div>
        </div>
        <div class="scholarship-canvas__financial-support-money">{{ recording.sum }} руб.</div>
      </div>
    `,
    styleUrls: ['./financial-support-frame.component.css']
})
export class FinancialSupportFrameComponent {
    @Input('financialSupport') financialSupport: {
        year: string,
        category: string,
        name: string,
        sum: string,
        date: string
    }[];
}
