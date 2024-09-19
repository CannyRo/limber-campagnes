export interface Campaign {
  id: number;
  title: string;
  description: DescriptionCampaign;
  mainKeywords: string[];
  secondaryKeywords: string[];
  dateStart: string;
  dateStop: string;
  campaignParents: number | null;
  currentShare: number;
  futurShare: number;
  targetsNum: number;
  contacts: number;
  createBy: Person;
}
export type CampaignList = Campaign[];

export interface RawCampaign {
  first: number;
  prev: number;
  next: number;
  last: number;
  pages: number;
  items: number;
  data: CampaignList;
}

export interface DescriptionCampaign {
  goals: string;
  targets: string[];
  keyMessages: string[];
  keywords: string[];
  dateStart: string;
  dateStop: string;
}

export interface Person {
  firstname: string;
  lastname: string;
  avatar: string | null;
}
