import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Stock } from '../shared/model/stock';
import { Category } from '../shared/model/category';

@Component({
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    stocks: Stock[];
    categoryName: string;
    header: string = "Categories";
    ngOnInit(): void {
        $('.reveal').foundation();
    }

    constructor(private categoryService: CategoryService) {
        this.stocks = categoryService.stock;
        categoryService.categoryAnnounced$.subscribe(
            newCategories => {
                console.log("aicii", newCategories);
            }
        )
    }

    saveNewCategory() {
        if (this.categoryName) {
            this.categoryService.saveCategory(this.categoryName);
        }
    }
}

