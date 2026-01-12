
export type Language = 'PT' | 'EN';

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  image: string;
}
