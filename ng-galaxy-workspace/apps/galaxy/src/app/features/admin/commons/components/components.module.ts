import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkshopsTableComponent } from './workshops-table/workshops-table.component';
import { WorkshopFormComponent } from './workshop-form/workshop-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkshopUpdatePosterComponent } from './workshop-update-poster/workshop-update-poster.component';
import { GlxImgPreviewModule, GlxInputFileModule } from '@galaxy/commons/components';
import { GlxDefaultImgModule } from '@galaxy/commons/pipes';
import { DashboardChartPieComponent } from './dashboard-chart-pie/dashboard-chart-pie.component';
import { DashboardFiltersFormComponent } from './dashboard-filters-form/dashboard-filters-form.component';
import { ChartsModule } from 'ng2-charts';

const COMPONENTS = [
  MenuComponent,
  WorkshopsTableComponent,
  WorkshopFormComponent,
  WorkshopUpdatePosterComponent,
  DashboardChartPieComponent,
  DashboardFiltersFormComponent
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  exports: [ ...COMPONENTS ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

    ChartsModule,
    GlxInputFileModule,
    GlxImgPreviewModule,
    GlxDefaultImgModule
  ]
})
export class ComponentsModule { }
