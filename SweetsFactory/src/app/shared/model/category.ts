import { Product } from "./product";

export class Category {
    id: number;
    name: string;
}

export class CategoryType {
    name: string;
    categoryId: number;
    products: Array<Product>;
}