import { Product } from "./shared/model/product";
import { Category } from "./shared/model/category";

export const PRODUCTS: Product[] = [
    { id: 55, name: "Vanilla Ice cream", category: 1, price: 20, stock: 10, img: "" },
    { id: 25, name: "Chocolate Ice cream", category: 1, price: 22, stock: 22, img: "" },
    { id: 23, name: "Raspberry Ice cream", category: 1, price: 32, stock: 120, img: "" },
    { id: 26, name: "Raspberry Ice cream", category: 1, price: 12, stock: 110, img: "" },
    { id: 27, name: "Macaroon", category: 2, price: 10, stock: 50, img: "" },
    { id: 28, name: "Chocolate Cookies", category: 2, price: 20, stock: 10, img: "" },
    { id: 29, name: "Apple Pie", category: 3, price: 25, stock: 10, img: "" },
    { id: 30, name: "Cherry Pie", category: 3, price: 24, stock: 100, img: "" },
    { id: 31, name: "Lemon Meringue Pie", category: 3, price: 10, stock: 11, img: "" },
    { id: 32, name: "Pecan Pie", category: 3, price: 30, stock: 14, img: "" },
    { id: 33, name: "Mini Doughnuts", category: 4, price: 35, stock: 101, img: "" },
    { id: 34, name: "Sour Cherries", category: 4, price: 15, stock: 44, img: "" },
    { id: 35, name: "Wild Coconut", category: 4, price: 15, stock: 27, img: "" },
    { id: 36, name: "Choco love", category: 4, price: 12, stock: 0, img: "" },
];

export const CATEGORY: Category[] = [
    { id: 1, name: "Frozen desserts" },
    { id: 2, name: "Cookies" },
    { id: 3, name: "Pie" },
    { id: 4, name: "Doughnuts" }
];

