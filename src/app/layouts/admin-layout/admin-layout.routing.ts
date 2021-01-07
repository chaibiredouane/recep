import { Routes } from '@angular/router';
import { BoxArrivalComponent } from '../../box-arrival/box-arrival.component';
import { CentriComponent } from '../../centri/centri.component';
import { FormEncodingComponent } from '../../form-encoding/form-encoding.component';
import { InconsistencyComponent } from '../../inconsistency/inconsistency.component';
import { NcReportComponent } from '../../nc-report/nc-report.component';
import { OpenBoxComponent } from '../../open-box/open-box.component';

import { ExpectedSampleComponent } from '../../expected-sample/expected-sample.component';
import { DragDropComponent } from '../../drag-drop/drag-drop.component';
import { NcInfoComponent } from '../../nc-info/nc-info.component';
import { NcConditionComponent } from '../../nc-condition/nc-condition.component';
import { NcDataComponent } from '../../nc-data/nc-data.component';
import { SamplesComponent } from '../../samples/samples.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'nc_info',          component: NcInfoComponent },
    { path: 'nc_condition',     component: NcConditionComponent },
    { path: 'nc_data',          component: NcDataComponent },
    { path: 'samples',          component: SamplesComponent },
    { path: 'expected',         component: ExpectedSampleComponent },
    { path: 'box_arrival',      component: BoxArrivalComponent },
    { path: 'open_boxes',       component: OpenBoxComponent },
    { path: 'form',             component: FormEncodingComponent },
    { path: 'nc_report',        component: NcReportComponent },
    { path: 'inconsistencies',  component: InconsistencyComponent },
    { path: 'centrifugation',   component: CentriComponent },
    { path: 'drag_drop',        component: DragDropComponent },
    
    // { path: 'samples',          component: DialogBoxComponent },
];
