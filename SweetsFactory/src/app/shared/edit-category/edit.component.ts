import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Product } from '../model/product';
import { Category, CategoryType } from '../model/category';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})

export class EditCategoryComponent implements OnInit {
  @Input() categoryModel: CategoryType;

  constructor(public categoryService: CategoryService, myElement: ElementRef) { }

  ngOnInit(): void {}

  ngOnChanges(changes: any) {
    console.log(this.categoryModel);
  }

  saveEditedCategory() {
    this.categoryService.editCategory(this.categoryModel);
  }

  close() {}
}