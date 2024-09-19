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
  
  export interface  DescriptionCampaign {
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
  }