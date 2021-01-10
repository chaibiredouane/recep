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
import { FormEncodingComponent } from '../../form-encoding/form-encoding.component';
import { NcReportComponent } from '../../nc-report/nc-report.component';
import { InconsistencyComponent } from '../../inconsistency/inconsistency.component';
import { CentriComponent } from '../../centri/centri.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DialogBoxComponent } from '../../dialog-box/dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropComponent } from '../../drag-drop/drag-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop'
import { NcInfoComponent } from '../../nc-info/nc-info.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NcConditionComponent } from '../../nc-condition/nc-condition.component';
import { DialogNcConditionComponent } from '../../dialog-nc-condition/dialog-nc-condition.component';
import { NcDataComponent } from '../../nc-data/nc-data.component';
import { DialogNcDataComponent } from '../../dialog-nc-data/dialog-nc-data.component';
import { SamplesComponent } from '../../samples/samples.component';
import { DialogSampleComponent } from '../../dialog-sample/dialog-sample.component';
import { BoxesComponent } from '../../boxes/boxes.component';
import { DialogNcInfoComponent } from '../../dialog-nc-info/dialog-nc-info.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { HelpComponent } from '../../help/help.component';

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
    DragDropModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  declarations: [
    UpgradeComponent,
    ExpectedSampleComponent,
    OpenBoxComponent,
    BoxesComponent,
    FormEncodingComponent,
    NcReportComponent,
    InconsistencyComponent,
    CentriComponent,
    DialogBoxComponent,
    DragDropComponent,
    NcInfoComponent,
    NcConditionComponent,
    DialogNcConditionComponent,
    NcDataComponent,
    DialogNcDataComponent,
    SamplesComponent,
    DialogSampleComponent,
    DialogNcInfoComponent,
    HelpComponent
  ],
  entryComponents: [
    DialogBoxComponent,
    DialogNcConditionComponent,
    DialogNcDataComponent,
    DialogSampleComponent,
    DialogNcInfoComponent
  ]
})

export class AdminLayoutModule {}
