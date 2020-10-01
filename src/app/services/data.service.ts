import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageMap } from '@ngx-pwa/local-storage';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _jsonURL = 'assets/channels.json';
  constructor(private http: HttpClient, private storage: StorageMap) { 
  }

  public getChannelsData(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  public getSort(){
    return this.storage.get('sort').subscribe((sort) => {
      console.log(sort);
    });
  }

  public setSort(sort){
    this.storage.set('sort', sort).subscribe(() => {});
  }

  public getGenre(){
    return this.storage.get('genre').subscribe((sort) => {
      console.log(sort);
    });
  }

  public setGenre(genre){
    this.storage.set('genre', genre).subscribe(() => {});
  }

}
