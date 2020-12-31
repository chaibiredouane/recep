import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { ExpectedSampleComponent } from '../../expected-sample/expected-sample.component';
import { DataTablesModule } from 'angular-datatables';
import { OpenBoxComponent } from '../../open-box/open-box.component';
import { BoxArrivalComponent } from '../../box-arrival/box-arrival.component';
import { FormEncodingComponent } from '../../form-encoding/form-encoding.component';
import { NcReportComponent } from '../../nc-report/nc-report.component';
import { InconsistencyComponent } from '../../inconsistency/inconsistency.component';
import { CentriComponent } from '../../centri/centri.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DialogBoxComponent } from '../../dialog-box/dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { DragDropComponent } from '../../drag-drop/drag-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    DataTablesModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    DragDropModule
  ],
  declarations: [
    UpgradeComponent,
    ExpectedSampleComponent,
    OpenBoxComponent,
    BoxArrivalComponent,
    FormEncodingComponent,
    NcReportComponent,
    InconsistencyComponent,
    CentriComponent,
    DialogBoxComponent,
    DragDropComponent
  ],
  entryComponents: [
    DialogBoxComponent
  ]
})

export class AdminLayoutModule {}
