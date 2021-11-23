import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToDoItem } from '../../model-todo-item';
import { SharedDataService } from '../../../../shared/services/shared-data.service';


@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss'],
})
export class ListTableComponent implements OnInit {
  displayedColumns: string[] = ['description', 'actions'];
  dataSource = new MatTableDataSource<ToDoItem>();

  @Input() public item = new EventEmitter<any>();

  constructor(private sharedData:SharedDataService) {
    this.dataSource = new MatTableDataSource<ToDoItem>(this.sharedData.dataSource);

    this.sharedData.dataSourceEmit.subscribe((dataSource) => {
      this.dataSource= new MatTableDataSource<ToDoItem>(dataSource);
    });
  }

  ngOnInit(): void {

    this.sharedData.getData().subscribe(
      (data) =>
      {
        data.forEach((item)=>{
          this.sharedData.dataSource.push({description: item.title});
        });
        this.dataSource = new MatTableDataSource<ToDoItem>(this.sharedData.dataSource);


      });
  }

  editItem(item: ToDoItem) {


  }

  deleteItem(item: ToDoItem) {

    this.sharedData.dataSource = this.sharedData.dataSource.filter( function( e ) {
      return e !== item;
    } );

    this.dataSource = new MatTableDataSource<ToDoItem>(this.sharedData.dataSource);

    console.log('Item eliminado: ' + item);
  }

}
