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
        if (localStorage.getItem(this.categoryStorageName) !== null) {
            return true;
        }
        return false;
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
        if (localStorage.getItem(this.userStorageName) !== null) {
            return true;
        }
        return false;
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
        if (localStorage.getItem(this.productStorageName) !== null) {
            return true;
        }
        return false;
    }

    clearProductData() {
        localStorage.removeItem(this.productStorageName);
    }
}