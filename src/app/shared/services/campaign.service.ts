import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Campaign, CampaignList, RawCampaign, PageItems } from '../models/campaign.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private readonly http = inject(HttpClient);
  private readonly DATA_API_URL = 'http://localhost:3000/campaigns';

  getCampaignList(): Observable<CampaignList> {
    return this.http.get<CampaignList>(this.DATA_API_URL);
  }

  // getCampaignListWithPage(PageItems: PageItems): Observable<RawCampaign> {
  //   console.log(PageItems);
  //   console.log(`${this.DATA_API_URL}?=${PageItems.pageNumber}&_per_page=${PageItems.itemsByPage}`);
  //   return this.http.get<RawCampaign>(`${this.DATA_API_URL}?_page=${PageItems.pageNumber}&_per_page=${PageItems.itemsByPage}`).pipe(
  //     map(res => console.log('RES =>', res)),
  //     catchError(this.handleError<any>('getCityData error'))
  //   );
  // }
  getCampaignListWithPage(PageItems: PageItems): Observable<RawCampaign> {
    return this.http.get<RawCampaign>(`${this.DATA_API_URL}?_page=${PageItems.pageNumber}&_per_page=${PageItems.itemsByPage}`);
  }
  // getCampaignListWithPage(pageNumber:number, itemsByPage:number): Observable<RawCampaign> {
  //   return this.http.get<RawCampaign>(`${this.DATA_API_URL}?_page=${pageNumber}&_per_page=${itemsByPage}`);
  // }

  getCampaingById(id:number): Observable<Campaign> {
    console.log(this.http.get<Campaign>(`${this.DATA_API_URL}/${id}`));
    return this.http.get<Campaign>(`${this.DATA_API_URL}/${id}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
