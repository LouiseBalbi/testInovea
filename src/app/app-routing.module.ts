import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailsModelComponent } from './components/details-model/details-model.component';

const routes: Routes = [
  { path: 'list', component: ListComponent},
  { path: 'model/:id', component: DetailsModelComponent},
  { path: '', redirectTo: "list", pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
