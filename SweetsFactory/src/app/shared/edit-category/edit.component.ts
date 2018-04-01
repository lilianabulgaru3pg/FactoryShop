import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Product } from '../model/product';
import { Category, CategoryType } from '../model/category';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})

export class EditComponent implements OnInit {
  @ViewChild('editReveal') editCategoryReveal: ElementRef;
  editCategoryName: string;
  @Input() categoryModel: CategoryType;
  editCategoryModal: FoundationSites.Reveal;

  constructor(public categoryService: CategoryService, myElement: ElementRef) { }

  ngOnInit(): void {}

  ngOnChanges(changes: any) {
    console.log(changes);
  }

  saveEditedCategory() {
    this.categoryService.editCategory(this.categoryModel.categoryId, this.editCategoryName);
    this.editCategoryModal.close();
  }

  openModal() {
    let options = {};
    let $editCategoryElement = $(this.editCategoryReveal.nativeElement);
    this.editCategoryModal = new Foundation.Reveal($editCategoryElement, options);
    this.editCategoryName = this.categoryModel.name;
    this.editCategoryModal.open();
  }
  close() { 
    this.editCategoryModal.close();
  }
}