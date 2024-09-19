import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'campagnes',
    title: 'Campagnes',
    loadComponent:()=> import("./features/campaign/campaign.component").then(module => module.CampaignComponent)
  },
  { 
    path: '', 
    redirectTo: 'campagnes', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    title: 'Page introuvable',
    loadComponent:()=> import("./features/page-not-found/page-not-found.component").then(module => module.PageNotFoundComponent)
  },
];
