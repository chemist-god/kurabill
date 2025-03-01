
export type MedicationBubble = {
    id: number;
    type: string;
    icon: string;
    position: { top?:string; left?: string; right?: string; bottom?: string };
  };
  
  export type CountryProfile = {
    id: number;
    country: string;
    flag: string;
    image: string;
    position: { top: string; left?: string; right?: string };
  };