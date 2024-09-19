import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CampaignService } from '../../shared/services/campaign.service';
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
  readonly targetedPage = signal(1);
  readonly numberPerPage = signal(5);
  
  readonly campaignService = inject(CampaignService);
  readonly rawPageCampaign = toSignal(this.campaignService.getCampaignListWithPage(this.targetedPage(), this.numberPerPage()), {
    initialValue: {
      "first": 0,
      "prev": 0,
      "next": 0,
      "last": 0,
      "pages": 0,
      "items": 0,
      "data": []
  },
  });
  readonly loading = computed(() => !this.rawPageCampaign());
  
}
