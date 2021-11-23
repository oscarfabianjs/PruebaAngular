import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ToDoItem } from '../../modules/to-do-list/model-todo-item';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  dataSource: ToDoItem[] = [
    { description: 'task1' },
    { description: 'task2' },
    { description: 'task3' },
    { description: 'task4' },
    { description: 'task5' },
    { description: 'task6' },
    { description: 'task7' },
    { description: 'task8' },
    { description: 'task9' },
  ];

  constructor(private httpClient: HttpClient) {}
  apiServiceUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  @Output() dataSourceEmit: EventEmitter<any> = new EventEmitter();

  changeData(dataSource: ToDoItem[]): void {
    this.dataSourceEmit.emit(dataSource);
  }

  getData(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(this.apiServiceUrl);
  }
}
