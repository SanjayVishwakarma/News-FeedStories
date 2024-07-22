import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { ManageStoryComponent } from './components/manage-story/manage-story.component';

const routes: Routes = [{ path: '', component: ManageStoryComponent },
  { path: 'home', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
