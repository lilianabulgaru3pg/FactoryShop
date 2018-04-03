import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Stock } from '../shared/model/stock';
import { Category, CategoryType } from '../shared/model/category';

@Component({
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    categoryTypes: Array<CategoryType>;
    newCategoryName: string;
    header: string = "Categories";
    newCategoryModal: FoundationSites.Reveal;
    @ViewChild('newCategoryReveal') newCategoryReveal: ElementRef;

    ngOnInit(): void {
        let options = {};
        let $newCategoryElement = $(this.newCategoryReveal.nativeElement);
        this.newCategoryModal = new Foundation.Reveal($newCategoryElement, options);
    }

    constructor(public categoryService: CategoryService, myElement: ElementRef) {
        this.categoryTypes = this.categoryService.categoryTypes;
        this.categoryService.categoryAnnounced$.subscribe(
            newCategories => {
                this.categoryTypes = this.categoryService.categoryTypes;
            }
        )
    }
    openNewCategoryModal() {
        this.newCategoryModal.open();
    }

    saveNewCategory() {
        let newCategory = new Category();
        newCategory.name = this.newCategoryName;
        let newId = Math.floor(Math.random() * 100) + 4;
        newCategory.id = newId
        this.categoryService.saveCategory(Object.assign({},newCategory));
        this.newCategoryModal.close();
        this.newCategoryName = '';
    }

    close() {
        this.newCategoryName = '';
        this.newCategoryModal.close();
    }
}

