import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

import { WorkshopsTableComponent } from './workshops-table/workshops-table.component';
import { WorkshopFormComponent } from './workshop-form/workshop-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { WorkshopUpdatePosterComponent } from './workshop-update-poster/workshop-update-poster.component';

import { GlxImgPreviewModule } from '@galaxy/commons/components/img-preview/img-preview.module';
import { GlxImgPreviewComponent } from '@galaxy/commons/components/img-preview/img-preview.component';
import { GlxInputFileModule } from '@galaxy/commons/components/input-file/input-file.module';
import { MatIconModule } from '@angular/material/icon';

const COMPONENTS = [
  WorkshopsTableComponent,
  WorkshopFormComponent,
  WorkshopUpdatePosterComponent
];

const MATERIAL_MODULES = [
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  // MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule
];

const ANGULAR_MODULES = [
  ReactiveFormsModule
];

const LIB_MODULES = [
  GlxImgPreviewModule,
  GlxInputFileModule
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    ...MATERIAL_MODULES,
    ...ANGULAR_MODULES,
    ...LIB_MODULES,
    CommonModule
  ]
})
export class AdminComponentsModule { }
