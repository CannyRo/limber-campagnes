import { Component, computed, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { CampaignService } from '../../../shared/services/campaign.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear, faPencil, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PageItems } from '../../../shared/models/campaign.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-campaign-list',
  standalone: true,
  imports: [FontAwesomeModule, JsonPipe, ReactiveFormsModule,],
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

  readonly foo = computed(() => ({
    pageNumber: Number(this.targetedPage()),
    itemsByPage: Number(this.numberPerPage()),
  }));

  readonly rawCampaign = toSignal(
    toObservable(this.foo).pipe(
    switchMap((foo) => this.campaignService.getCampaignListWithPage(foo))), 
    {
    initialValue: {
      "first": 0,
      "prev": 0,
      "next": 0,
      "last": 0,
      "pages": 0,
      "items": 0,
      "data": [],
  },
  });

  readonly currentCampaignList = computed(()=> {
    console.log(' rawCampaign => ',this.rawCampaign);
    return this.rawCampaign;
  })
  readonly loading = computed(() => !this.rawCampaign());
  
  options = ["5", "10", "20"];

  onOptionChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log("Nombre de résultat par page demandé : ", selectedValue);
    this.numberPerPage.set(selectedValue);
    this.foo().itemsByPage = Number(selectedValue);
  }

  previousPage(event :Event) {
    if(this.rawCampaign().prev > 1){
      const newValue = this.rawCampaign().next - 2;
      this.targetedPage.set(newValue.toString());
      this.foo().pageNumber = newValue;
    }
  }
  nextPage(event :Event) {
    if(this.rawCampaign().next <= this.rawCampaign().last){
      const newValue = this.rawCampaign().next;
      this.targetedPage.set(newValue.toString());
      this.foo().pageNumber = newValue;
    }
  }


}
