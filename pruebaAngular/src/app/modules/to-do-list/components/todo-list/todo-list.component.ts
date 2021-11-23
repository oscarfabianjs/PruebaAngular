import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedDataService } from '../../../../shared/services/shared-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  toDoForm: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });
  constructor(private sharedData:SharedDataService) { }

  ngOnInit(): void {

  }

  addItem(){
    const inputValue = this.toDoForm.controls['description'].value;
    const item = {
      description: inputValue
    }

    this.sharedData.dataSource.unshift(item);
    this.sharedData.changeData(this.sharedData.dataSource);

    console.log('Agregar nuevo item: ' + inputValue);

    this.toDoForm.patchValue({
      description:''
    });

  }



}
