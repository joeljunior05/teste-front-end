//Framework artifacts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Other artifacts
import { HomeComponent } from './home/home.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

const routes: Routes = [
  { path: 'video/:id', component: VideoDetailComponent },
  { path: 'home', component: HomeComponent, data: {} },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

