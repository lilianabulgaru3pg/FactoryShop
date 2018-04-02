import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Stock } from '../shared/model/stock';
import { Category } from '../shared/model/category';

@Component({
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    stocks: Stock[];
    emptyCategoryName: boolean = false;
    categoryName: string;
    header: string = "Categories";
    @ViewChild('reveal') reveal: ElementRef;

    ngOnInit(): void {
        let options = { /* Reveal Options, if any */ };
        let $revealElement = $(this.reveal.nativeElement);
        var elem = new Foundation.Reveal($revealElement, options);

        console.log(this.categoryName);
    }

    constructor(private categoryService: CategoryService, myElement: ElementRef) {
        this.stocks = categoryService.stock;
        categoryService.categoryAnnounced$.subscribe(
            newCategories => {
                this.stocks = categoryService.stock;
            }
        )
    }

    saveNewCategory() {
        if (this.categoryName !== undefined && this.categoryName !== '') {
            this.categoryService.saveCategory(this.categoryName);
            $(this.reveal.nativeElement).foundation('close');
            this.categoryName = '';
            this.emptyCategoryName = false;
        } else {
            this.emptyCategoryName = true;
        }
    }

    close() {
        this.categoryName = '';
        this.emptyCategoryName = false;
    }
}

