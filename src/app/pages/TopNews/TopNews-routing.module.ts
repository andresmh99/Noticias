import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNewsPage } from './TopNews';

const routes: Routes = [
  {
    path: '',
    component: TopNewsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopNewsPageRoutingModule {}
