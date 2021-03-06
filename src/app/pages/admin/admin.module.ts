import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgaModule } from '../../theme/nga.module';
import { AdminComponent } from './admin.component';
import { routing } from './admin.routing';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    HttpModule,
    Ng2SmartTableModule,
    NgaModule,
  ],
  declarations: [
    AdminComponent,
  ],
  providers: [

  ],
})
export class AdminModule {}
