import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopNewsPage } from './TopNews';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { TopNewsPageRoutingModule } from './TopNews-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TopNewsPageRoutingModule
  ],
  declarations: [TopNewsPage]
})
export class TopNewsPageModule {}
