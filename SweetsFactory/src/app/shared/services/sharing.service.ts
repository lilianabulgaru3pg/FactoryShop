import { Injectable } from '@angular/core';

@Injectable()
export class SharingService {
    categoryStorageName: string = "categoryData";
    userStorageName: string = "userData";
    productStorageName: string = "productData";

    constructor() { }

    setCategoryData(data: any) {
        localStorage.setItem(this.categoryStorageName, JSON.stringify(data));
    }

    getCategoryData() {
        let data = localStorage.getItem(this.categoryStorageName);
        return JSON.parse(data);
    }

    hasCategoryData(): boolean {
        return (localStorage.getItem(this.categoryStorageName) !== null);
    }

    clearCategoryData() {
        localStorage.removeItem(this.categoryStorageName);
    }

    setUserData(data: any) {
        localStorage.setItem(this.userStorageName, JSON.stringify(data));
    }

    getUserData() {
        let data = localStorage.getItem(this.userStorageName);
        return JSON.parse(data);
    }

    hasUserData(): boolean {
        return (localStorage.getItem(this.userStorageName) !== null);
    }

    clearUserData() {
        localStorage.removeItem(this.userStorageName);
    }

    cleanAll() {
        localStorage.clear()
    }

    setProductData(data: any) {
        localStorage.setItem(this.productStorageName, JSON.stringify(data));
    }

    getProductData() {
        let data = localStorage.getItem(this.productStorageName);
        return JSON.parse(data);
    }

    hasProductData(): boolean {
        return (localStorage.getItem(this.productStorageName) !== null);
    }

    clearProductData() {
        localStorage.removeItem(this.productStorageName);
    }
}