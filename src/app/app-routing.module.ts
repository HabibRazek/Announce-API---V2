import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAnnounceComponent } from './Announce/list-announce/list-announce.component';
import { AddAnnounceComponent } from './Announce/add-announce/add-announce.component';

const routes: Routes = [
  { path: 'list-announce', component: ListAnnounceComponent },
  { path: '', redirectTo: '/list-announce', pathMatch: 'full' },
  {path: 'add-announce', component: AddAnnounceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
