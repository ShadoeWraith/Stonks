import { Component } from '@angular/core';
import {
  faGears,
  faTableColumns,
  faFolderOpen,
  faMagnifyingGlass,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  faGear = faGears;
  faTableColumns = faTableColumns;
  faFolderOpen = faFolderOpen;
  faMagnifyingGlass = faMagnifyingGlass;
  faArrowRightFromBracket = faArrowRightFromBracket;
}
