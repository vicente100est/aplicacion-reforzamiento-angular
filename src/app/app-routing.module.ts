import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostsModule } from './pages/posts/posts.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'posts',
    loadChildren: './pages/posts/posts.module#PostsModule' //<--- vieja
//    loadChildren: () => import('./pages/posts/posts.module#PostsModule').then( m => m.PostsModule )
// la de arriba es la nueva forma pero no jaló jeje
  },
  {
    path: '**',
    redirectTo: 'home'
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
