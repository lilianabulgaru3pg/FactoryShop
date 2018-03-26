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
    emptyCategoryName = false;
    categoryName: string;
    header: string = "Categories";
    reveal: any;

    ngOnInit(): void {
        this.reveal = $('.reveal');
        this.reveal.foundation();
    }

    constructor(private categoryService: CategoryService) {
        this.stocks = categoryService.stock;
        categoryService.categoryAnnounced$.subscribe(
            newCategories => {
                this.stocks = categoryService.stock;
            }
        )
    }

    saveNewCategory() {
        if (this.categoryName !== undefined && this.categoryName !== ' ') {
            this.categoryService.saveCategory(this.categoryName);
            this.reveal.foundation('close');
            this.categoryName = '';
        } else {
            this.emptyCategoryName = true;
        }
    }

    close() {
        this.categoryName = '';
    }
}

