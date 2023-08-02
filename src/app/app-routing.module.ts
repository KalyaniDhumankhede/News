import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewslistComponent } from './newslist/newslist.component';

const routes: Routes = [
  {path:'',component:NewslistComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
