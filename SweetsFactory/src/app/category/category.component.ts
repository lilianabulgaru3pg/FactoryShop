import { Component } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';

@Component({
    templateUrl: './category.component.html',
     styleUrls: ['./category.component.css']    
})
export class CategoryComponent {
    constructor(private categoryService: CategoryService) {
       
    }

}

