import { Component } from '@angular/core';

import {
  faArrowTrendUp,
  faArrowTrendDown,
  faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  faArrowTrendUp = faArrowTrendUp;
  faArrowTrendDown = faArrowTrendDown;
  faAngleDoubleUp = faAngleDoubleUp;
}
