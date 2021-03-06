import { ProducDeleteComponent } from './components/product/produc-delete/produc-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreatComponent } from './components/product/product-creat/product-creat.component';
import { HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component';

const routes: Routes = [
  {
  path:"",
  component: HomeComponent

},{
  path:"products",
  component: ProductCrudComponent
},{
  path: "products/create",
  component: ProductCreatComponent
  
},{
  path: "products/update/:id",
component: ProductUpdateComponent
},
{
  path: "products/delete/:id",
component: ProducDeleteComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
    
})
export class AppRoutingModule { }

