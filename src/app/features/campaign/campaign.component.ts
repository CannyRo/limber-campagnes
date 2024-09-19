import { Component, computed, inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { CampaignService } from '../../shared/services/campaign.service';


@Component({
  selector: 'app-campaign',
  standalone: true,
  imports: [FontAwesomeModule, CampaignListComponent],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.scss'
})
export class CampaignComponent {
  faMagnifyingGlass = faMagnifyingGlass;

  readonly searchTerm = signal('');
  readonly campaignService = inject(CampaignService);
  readonly campaignList = toSignal(this.campaignService.getCampaignList(), {initialValue: []});

  readonly campaignListFiltered = computed(() => {
    console.log(this.campaignList().filter((campaign) => 
      campaign.title
        .toLowerCase()
        .includes(this.searchTerm().trim().toLowerCase())));
    return this.campaignList().filter((campaign) => 
      campaign.title
        .toLowerCase()
      .includes(this.searchTerm().trim().toLowerCase()) 
    );
  });
}
