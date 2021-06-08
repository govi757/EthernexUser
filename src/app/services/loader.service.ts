import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  private showLoader$: BehaviorSubject<any> = new BehaviorSubject(false);

  getLoaderState(): Observable<any> {
    return this.showLoader$.asObservable();
  }

  setLoaderState(profile: any) {
    this.showLoader$.next(profile);
  }

}
