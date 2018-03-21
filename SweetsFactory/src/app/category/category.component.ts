import { Component } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Stock } from '../shared/model/stock';

@Component({
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent {
    stocks: Stock[];
    header: string = "Categories";

    constructor(private categoryService: CategoryService) {
        this.stocks = categoryService.stock;
    }
}

