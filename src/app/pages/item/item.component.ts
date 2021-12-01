import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProductInfo } from '../../interfaces/product.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  product: ProductInfo = {};
  id!: string;

  constructor(private route: ActivatedRoute,
    public productService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.productService.getProduct<ProductInfo>(params['id'])
        .subscribe((product: ProductInfo) => {
          this.id = params['id'];
          this.product = product;
        });
    });
  }

}
