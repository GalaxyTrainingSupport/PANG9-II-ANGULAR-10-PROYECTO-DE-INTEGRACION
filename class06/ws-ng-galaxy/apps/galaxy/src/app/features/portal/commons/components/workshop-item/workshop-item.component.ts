import { Component, Input, OnInit } from '@angular/core';
import { Workshop } from '../../../../../../../../../libs/galaxy-commons/src/lib/models/workshop.model';

@Component({
  selector: 'app-workshop-item',
  templateUrl: './workshop-item.component.html',
  styleUrls: ['./workshop-item.component.scss']
})
export class WorkshopItemComponent implements OnInit {

  @Input() workshop: Workshop;

  constructor() { }

  ngOnInit(): void {
  }
}
