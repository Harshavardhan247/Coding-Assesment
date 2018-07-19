import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  totalProducts: Product[];
  products: Product[];
  totalItems: number
  displayedItems: number;
  page: number = 1;
  pageSize = 10;
  router: any;

  constructor(private productService: ProductService) { }


  ngOnInit() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.totalProducts = data;
      this.totalItems = this.totalProducts.length;
      this.products = this.totalProducts.slice(0, this.pageSize);
    });
  }

  openProduct(productId: number){
    console.log(productId);

  }

  changePage(event: number) {
    this.products = this.totalProducts.slice((event - 1) * this.pageSize , (event) * this.pageSize);
  }

}
