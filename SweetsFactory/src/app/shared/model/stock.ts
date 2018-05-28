export class Stock {
    // id: number;
    categoryName: string;
    stockNumber: number;

    constructor(categoryName: string, stockNumber: number) {
        this.categoryName = categoryName;
        this.stockNumber = stockNumber;
    }
}