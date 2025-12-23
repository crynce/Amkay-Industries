
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imagePrompt: string;
  imageUrl?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export enum Section {
  HERO = 'hero',
  PRODUCTS = 'products',
  ABOUT = 'about',
  ASSISTANT = 'assistant',
  CONTACT = 'contact'
}
