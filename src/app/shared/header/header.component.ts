import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageInfoService } from '../../services/page-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public pageInfoService: PageInfoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  searchProduct(filter: string){
    if(filter.length < 1){
      return;
    }

    this.router.navigate(['/search', filter]);
  }

}
