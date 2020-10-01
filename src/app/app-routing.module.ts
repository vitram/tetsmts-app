import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { ChannelsComponent } from './pages/channels/channels.component';


const routes: Routes = [
  { path: '', redirectTo: '/channels', pathMatch: 'full' },
  { path: 'first', component: FirstComponent},
  { path: 'second', component: SecondComponent},
  { path: 'channels', component: ChannelsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
