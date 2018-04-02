import { Injectable } from '@angular/core';

@Injectable()
export class SharingService {
    categoryStorageName: string = "categoryData";

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

    cleanAll() {
        localStorage.clear()
    }
}