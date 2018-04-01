import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Stock } from '../shared/model/stock';
import { Category, CategoryType } from '../shared/model/category';

@Component({
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    emptyCategoryName: boolean = false;
    categoryTypes: Array<CategoryType>;
    newCategoryName: string;
    header: string = "Categories";
    @ViewChild('reveal') newCategoryReveal: ElementRef;

    ngOnInit(): void {
        let options = { /* Reveal Options, if any */ };
        let $newCategoryElement = $(this.newCategoryReveal.nativeElement);
        var newCategoryModal = new Foundation.Reveal($newCategoryElement, options);
    }

    constructor(public categoryService: CategoryService, myElement: ElementRef) {
        this.categoryTypes = this.categoryService.categoryTypes;
        this.categoryService.categoryAnnounced$.subscribe(
            newCategories => {
                console.log('aici3');
                this.categoryTypes = this.categoryService.categoryTypes;
            }
        )
    }

    saveNewCategory() {
        if (this.newCategoryName !== undefined && this.newCategoryName !== '') {
            this.categoryService.saveCategory(this.newCategoryName);
            $(this.newCategoryReveal.nativeElement).foundation('close');
            this.newCategoryName = '';
            this.emptyCategoryName = false;
            console.log('aici2');
        } else {
            console.log('aici');
            this.emptyCategoryName = true;
        }
    }

    close() {
        this.newCategoryName = '';
        this.emptyCategoryName = false;
    }
}

