import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Holiday } from '../interface/holiday';
import { HolidayService } from '../services/holiday.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {
  holidays: Holiday[];

  @Input()
  result$: Observable<{ response: any}>;

  constructor(private holidayService: HolidayService) { 
    this.result$ = holidayService.resolveHolidays();
  }

  ngOnInit(): void {
    this.result$.subscribe(res => {
      this.holidays = res.response.holidays;
      return this.holidays;
    });
  }
}