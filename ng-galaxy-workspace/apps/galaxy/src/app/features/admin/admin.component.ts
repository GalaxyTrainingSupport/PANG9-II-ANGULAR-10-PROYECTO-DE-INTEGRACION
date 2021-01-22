import { Component, OnInit } from '@angular/core';
import { MenuOption } from './commons/interfaces/menu-option.interface';
import { GlxSession } from '@galaxy/commons/services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  menuOptions: MenuOption[] = [];

  constructor(private session: GlxSession) {
  }

  ngOnInit(): void {
    this.menuOptions = this.session.user.getMenuOptions();
  }

}
