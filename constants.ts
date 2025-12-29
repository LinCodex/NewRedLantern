import { BusinessInfo, Hours, ServiceItem } from './types';
import { Footprints, Waves, Flame, Aperture } from 'lucide-react';

export const BUSINESS_INFO: BusinessInfo = {
  name: "New Red Lantern Foot Reflexology",
  address: "105 E Main St",
  cityStateZip: "Babylon, NY 11702",
  phone: "+16314185517",
  phoneDisplay: "(631) 418-5517",
  mapsUrl: "https://www.google.com/maps/place/New+Red+Lantern+Foot+Reflexology/@40.6971957,-73.3241132,17z/data=!4m16!1m9!3m8!1s0x89e9d3d8c2f8fd9f:0x5591986e048d109f!2sNew+Red+Lantern+Foot+Reflexology!8m2!3d40.6971957!4d-73.3215329!9m1!1b1!16s%2Fg%2F11h02dxnll!3m5!1s0x89e9d3d8c2f8fd9f:0x5591986e048d109f!8m2!3d40.6971957!4d-73.3215329!16s%2Fg%2F11h02dxnll?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
};

export const BUSINESS_HOURS: Hours[] = [
  { day: "Monday", time: "9:30 AM – 8:30 PM" },
  { day: "Tuesday", time: "9:30 AM – 8:30 PM" },
  { day: "Wednesday", time: "9:30 AM – 8:30 PM" },
  { day: "Thursday", time: "9:30 AM – 8:30 PM" },
  { day: "Friday", time: "9:30 AM – 8:30 PM" },
  { day: "Saturday", time: "9:30 AM – 8:30 PM" },
  { day: "Sunday", time: "9:30 AM – 8:30 PM" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'foot-reflexology',
    title: '',
    description: '',
    icon: Footprints
  },
  {
    id: 'body-work',
    title: '',
    description: '',
    icon: Waves
  },
  {
    id: 'hot-stone',
    title: '',
    description: '',
    icon: Flame
  },
  {
    id: 'traditional-cupping',
    title: '',
    description: '',
    icon: Aperture
  }
];