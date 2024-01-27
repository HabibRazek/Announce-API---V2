import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAnnounceComponent } from './Announce/list-announce/list-announce.component'; 

const routes: Routes = [
  { path: 'list-announce', component: ListAnnounceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
