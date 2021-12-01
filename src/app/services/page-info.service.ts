import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageInfo } from '../interfaces/page-info.interface';
import { TeamInfo } from '../interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {
  info: PageInfo = {};
  team: TeamInfo[] = [];
  loaded = false;

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo(){
    this.http.get('assets/data/data-page.json')
      .subscribe((resp: PageInfo) => {
        this.loaded = true;
        this.info = resp;
      });
  }

  private loadTeam() {
    this.http.get<TeamInfo[]>('https://angular-html-e9f1f-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: TeamInfo[]) => {
        this.team = resp;
      });
  }
}
