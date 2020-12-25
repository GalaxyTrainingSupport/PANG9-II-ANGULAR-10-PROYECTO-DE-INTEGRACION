import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Workshop } from '@galaxy/commons/models/workshop.model';

@Component({
  selector: 'app-workshops-table',
  templateUrl: './workshops-table.component.html',
  styleUrls: ['./workshops-table.component.scss']
})
export class WorkshopsTableComponent implements OnChanges {

  displayedColumns: string[] = ['name', 'instructor', 'date', 'start', 'end', 'actions'];
  dataSource: MatTableDataSource<Workshop[]> = new MatTableDataSource([]);
  @Input() workshops: Workshop[] = [];
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();
  @Output() remove: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.workshops.currentValue) {
      this.dataSource = new MatTableDataSource(changes.workshops.currentValue);
      console.log(this.workshops)
    }
  }



}
