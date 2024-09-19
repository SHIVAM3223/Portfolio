export interface Experience {
  id: string;
  company: string;
  location: string;
  description: string;
  position: string;
  url?: string;
  startDate: string;
  endDate: string;
  remote: boolean;
  highlights: string[];
}
