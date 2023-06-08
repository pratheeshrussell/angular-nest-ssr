import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Title } from '@angular/platform-browser';
import { DataFetcherResolver } from './resolvers/data-fetcher.resolver';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path:'home',
    title: 'Home Page',
    resolve: {welcomeData:DataFetcherResolver},
    component: HomeComponent
  },{
    path:'about',
    title: () => {
      return 'About Page'
    },
    loadComponent: () => 
    import('./pages/about/about.component').then(mod => mod.AboutComponent)
  },{
    path:'**',
    title: 'Not Found',
    component:NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
