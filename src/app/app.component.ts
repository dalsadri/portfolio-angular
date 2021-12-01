import { ProductsService } from './services/products.service';
import { Component } from '@angular/core';
import { PageInfoService } from './services/page-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public infoPageService: PageInfoService,
    public productsService: ProductsService){}
}
