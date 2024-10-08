import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, ProductRoutingModule, SharedModule],
})
export class ProductModule {}
