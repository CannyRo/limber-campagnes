import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CampaignListComponent } from './campaign-list/campaign-list.component';


@Component({
  selector: 'app-campaign',
  standalone: true,
  imports: [FontAwesomeModule, CampaignListComponent],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.scss'
})
export class CampaignComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  
}
