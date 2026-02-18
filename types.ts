
export interface NavItem {
  label: string;
  path: string;
  dropdown?: NavItem[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  description: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
  category: 'classroom' | 'sports' | 'events' | 'campus';
}
