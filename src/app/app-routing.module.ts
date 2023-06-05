import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  {
    path:'home',
    title: 'Home Page',
    component: HomeComponent
  },{
    path:'about',
    title: () => {
      // we can't directly use DI
      const title = inject(Title);
      const currentTitle = title.getTitle();
      if(currentTitle.toLowerCase().startsWith('about')){
        return currentTitle;
      }
      return 'About Page'
    },
    loadComponent: () => 
    import('./pages/about/about.component').then(mod => mod.AboutComponent)
  },{
    path:'**',
    redirectTo:'/home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
