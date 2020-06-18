import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Holiday } from '../interface/holiday';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  private readonly URL = 'https://calendarific.com/api/v2/holidays?api_key=8829d7682226a8bd6c6d4bd3e22d1b507f42de86&country=US&year=2020';

  constructor(private http: HttpClient) {}

  resolveHolidays(): Observable<{ response: any }> {
    console.log('Holiday request sent!');

    return this.http.get<{ response: any }>(this.URL).pipe(
        map((res: Response) => res.response.json())
      );
      // .catch((error: Response) => {
      //   return Observable.throw('Something went wrong!');
      // });
  }
}