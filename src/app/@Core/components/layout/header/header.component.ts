import { IconComponent } from '@Shared/components/icon/icon.component';
import { Component } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { CheckInOutSelectComponent } from '../check-in-out-select/check-in-out-select.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconComponent, SearchInputComponent, CheckInOutSelectComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
