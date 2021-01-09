import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { SampleService } from './services/sample.service';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';

import {  AgmCoreModule} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NcInfoService } from './services/ncInfo.service';
import { NcConditionService } from './services/ncCondotion.service';
import { NcDataService } from './services/ncData.service';
import { BoxService } from './services/box.service';
import { DialogNcInfoComponent } from './dialog-nc-info/dialog-nc-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  imports: [
    // DataTablesModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    NgxPaginationModule,
    MatPaginatorModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    SampleService,
    ToastrService,
    NcInfoService,
    NcConditionService,
    DatePipe,
    NcDataService,
    BoxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
