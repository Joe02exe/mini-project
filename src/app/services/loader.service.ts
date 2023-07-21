import { Injectable } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {


  private loading: boolean = false;

  setLoading(loading: boolean) {
    setTimeout(() => {
      this.loading = loading; 
    });
  }

  getLoading(): boolean {
    return this.loading;
  }
}