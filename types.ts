import { LucideIcon } from 'lucide-react';

export interface BusinessInfo {
  name: string;
  address: string;
  cityStateZip: string;
  phone: string;
  phoneDisplay: string;
  mapsUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Hours {
  day: string;
  time: string;
}