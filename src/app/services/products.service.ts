import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductIdxInfo } from '../interfaces/productIdx.interface';
import { ProductInfo } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  loading = true;
  products: ProductIdxInfo[] = [];
  filteredProducts: ProductIdxInfo[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts(){
    return new Promise<void>((resolve, reject) => {
      this.http.get<ProductIdxInfo[]>('https://angular-html-e9f1f-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: ProductIdxInfo[]) => {
          this.products = resp;
          this.loading = false;
          resolve();
      });
    });

  }

  getProduct<ProductInfo>(id: string){
    return this.http.get<ProductInfo>(`https://angular-html-e9f1f-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  searchProduct(filter:string){
    if(this.products.length === 0){
      this.loadProducts().then(() => {
          this.productFilter(filter);
      });
    }else{
      this.productFilter(filter);
    }
  }

  private productFilter(filter: string){
    this.filteredProducts = [];
    filter = filter.toLowerCase();

    this.products.forEach(prod => {
      const titleLower = prod.titulo!.toLowerCase();
      const categoryLower = prod.categoria!.toLowerCase();

      if(categoryLower.indexOf(filter) >= 0 ||
      titleLower.indexOf(filter) >=0 ){
        this.filteredProducts.push(prod);
      }
    });
    // this.filteredProducts = this.products.filter(product => {
    //   return true;
    // });
  }
}
