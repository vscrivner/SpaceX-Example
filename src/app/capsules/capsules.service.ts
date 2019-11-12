import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICapsule } from './capsule.model';

@Injectable({
  providedIn: 'root'
})
export class CapsulesService {

  constructor(private http: HttpClient) { }

  getCapsules(): Observable<ICapsule[]> {
    return this.http.get<ICapsule[]>('https://api.spacexdata.com/v3/capsules');
  }

  getCapsule(capsuleSerial): Observable<ICapsule> {
    return this.http.get<ICapsule>('https://api.spacexdata.com/v3/capsules/' + capsuleSerial);
  }
}
