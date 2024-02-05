import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailsModelComponent } from './components/details-model/details-model.component';
import { CreateModelComponent } from './components/create-model/create-model.component';
import { UpdateModelComponent } from './components/update-model/update-model.component';

const routes: Routes = [
  { path: 'list', component: ListComponent},
  { path: 'model/:id', component: DetailsModelComponent},
  { path: 'update-model/:id', component: UpdateModelComponent},
  { path: 'create-model', component: CreateModelComponent},
  { path: '', redirectTo: "list", pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
