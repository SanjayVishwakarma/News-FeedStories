import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { EmplyeeService } from '../../../services/emplyee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy, DoCheck {

  employeeList: any = [];
  constructor(private emplyeeService: EmplyeeService) { }
  ngOnChanges(): void {
  }

  ngOnInit(): void {
    this.employeeList = this.emplyeeService.getEmplyee();
  }

  ngDoCheck(): void {
  }

  ngOnDestroy(): void {
  }
}
