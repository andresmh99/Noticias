import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopNewsPage } from './TopNews';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { TopNewsPageRoutingModule } from './TopNews-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TopNewsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TopNewsPage]
})
export class TopNewsPageModule {}
