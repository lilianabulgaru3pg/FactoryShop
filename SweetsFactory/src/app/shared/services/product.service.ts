import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { PRODUCTS } from '../../mock-products';
import { Subject } from 'rxjs';
import { SharingService } from './sharing.service';

@Injectable()
export class ProductService {
    products: Product[];
    private productAnnouncedSource = new Subject<Product[]>();
    productAnnounced$ = this.productAnnouncedSource.asObservable();

    constructor(private sharingService: SharingService) {
        if (this.sharingService.hasProductData()) {
            this.products = this.sharingService.getProductData();
        } else {
            this.products = PRODUCTS;
        }
    }

    productStatus(product: Product): string {
        return product.stock != 0 ? 'available' : 'out of stock'
    }

    getProducts() {
        return this.products;
    }

    getProductsForCategory(categoryId: number): Array<Product> {
        var categoryProducts = new Array<Product>();
        this.products.forEach(product => {
            if (categoryId === product.category) {
                categoryProducts.push(product);
            }
        });
        return categoryProducts;
    }

    saveNewProduct(newproduct: Product) {
        let newId = Math.floor(Math.random() * 100) + 40;
        newproduct.id = newId;
        this.products.push(newproduct);
        this.sharingService.setProductData(this.products);
        this.productAnnouncedSource.next(this.products);
    }

    editProduct(product: Product) {
        this.products.forEach(elem => {
            if (elem.id === product.id) {
                elem.name = product.name;
                elem.category = product.category;
                elem.stock = product.stock;
                elem.price = product.price;
                elem.img = product.img;
                return;
            }
        });

        this.sharingService.setProductData(this.products);
        this.productAnnouncedSource.next(this.products);
    }

    deleteProduct(product: Product) {
        let index: number = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
        this.sharingService.setProductData(this.products);
        this.productAnnouncedSource.next(this.products);
    }
}