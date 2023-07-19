import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
{path:'home', component:HomeComponent, data: {title:'Home'}},
{path:'about', component:AboutComponent, data: {title:'About'}},
{path:'product', component:ProductsComponent, data: {title:'Product'}},
{path:'service', component:ServiceComponent, data: {title:'Service'}},
{path:'contact', component:ContactComponent, data: {title:'Contact'}},
{path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
