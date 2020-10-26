import { Comment } from './comment';

export class Dish {
    id: string;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    highlight: string;
    description: string;
    comments : Comment[];
}