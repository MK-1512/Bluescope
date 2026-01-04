import { Injectable, inject, makeStateKey, TransferState, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);
  private transferState = inject(TransferState);
  private platformId = inject(PLATFORM_ID);

  private SCHOOLS_KEY = makeStateKey<any>('schools-data');
  private jsonUrl = 'assets/data.json'; 

  getSchools(): Observable<any> {
    if (this.transferState.hasKey(this.SCHOOLS_KEY)) {
      const data = this.transferState.get(this.SCHOOLS_KEY, null);
      return of(data);
    }

    return this.http.get<any>(this.jsonUrl).pipe(
      tap(data => {
        if (isPlatformServer(this.platformId)) {
          this.transferState.set(this.SCHOOLS_KEY, data);
        }
      })
    );
  }
}