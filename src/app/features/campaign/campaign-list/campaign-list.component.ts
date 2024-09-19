import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CampaignService } from '../../../shared/services/campaign.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear, faPencil, faShareNodes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-campaign-list',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './campaign-list.component.html',
  styleUrl: './campaign-list.component.scss'
})
export class CampaignListComponent {
  faGear = faGear;
  faPencil = faPencil;
  faShareNodes = faShareNodes;

  readonly targetedPage = signal('1');
  readonly numberPerPage = signal('5');
  
  readonly campaignService = inject(CampaignService);
  readonly campaignList = toSignal(this.campaignService.getCampaignList());
  readonly rawCampaign = toSignal(this.campaignService.getCampaignListWithPage(Number(this.targetedPage()), Number(this.numberPerPage())), {
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
  
  readonly currentCampaignList = computed(()=> {
    return this.rawCampaign().data;
  })
  readonly loading = computed(() => !this.rawCampaign());

}
