import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmplyeeService {

  constructor() { }

  getEmplyee() {
     var tableData = [
      { id: 1, name: 'John Doe', age: 30, date: '2024-07-17' },
      { id: 2, name: 'Jane Smith', age: 25, date: '2024-05-12' },
      { id: 3, name: 'Sam Brown', age: 40, date: '2024-06-19' },
      { id: 4, name: 'John Doe', age: 30, date: '2024-04-11' },
      { id: 5, name: 'Jane Smith', age: 25, date: '2024-03-10' },
      { id: 6, name: 'Sam Brown', age: 40, date: '2024-01-26' }
     ];
    return tableData;
  }
}
