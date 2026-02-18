
import { JobOpening, GalleryImage } from './types';
import home from './images/home.jpg';

export const SCHOOL_NAME = "Mike-Jane Academy";
export const SCHOOL_ADDRESS = "31 derufe Road,Agunfoye,Igbogbo ikorodu,Lagos Nigeria";
export const SCHOOL_PHONE = "+234 808 342 5296";
export const SCHOOL_EMAIL = "info@mikejane-ikorodu.edu.ng";

export const GALLERY_IMAGES: GalleryImage[] = [
  
  { url: "https://picsum.photos/id/1/1200/600", caption: "Advanced Science Laboratory", category: 'classroom' },
  { url: "https://picsum.photos/id/2/1200/600", caption: "Mike-Jane Main Entrance", category: 'campus' },
  { url: "https://picsum.photos/id/3/1200/600", caption: "Annual Inter-House Sports", category: 'events' },
  { url: "https://picsum.photos/id/4/1200/600", caption: "Modern School Library", category: 'classroom' },
  { url: "https://picsum.photos/id/5/1200/600", caption: "Ikorodu Campus Sports Field", category: 'sports' },
  { url: "https://picsum.photos/id/6/1200/600", caption: "Creative Arts Studio", category: 'classroom' },
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "1",
    title: "Secondary School Mathematics Teacher",
    department: "Science",
    type: "Full-time",
    description: "Seeking an experienced educator to lead our SSCE Mathematics curriculum."
  },
  {
    id: "2",
    title: "Primary Class Teacher (Year 3)",
    department: "Primary",
    type: "Full-time",
    description: "Passionate elementary educator needed for our vibrant Year 3 cohort."
  },
  {
    id: "3",
    title: "School Nurse",
    department: "Administration",
    type: "Contract",
    description: "Registered nurse required for on-campus health management."
  }
];

export const YEARBOOK_VALID_ID = "MJ2024-GRAD";
