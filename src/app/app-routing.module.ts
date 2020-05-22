import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesSampleComponent } from './components/directives-sample/directives-sample.component';
import { CompCommunicationComponent } from './components/comp-communication/comp-communication.component';
import { FormsTdComponent } from './components/forms-td/forms-td.component';
import { ServicesPractComponent } from './components/services-assignment/services-pract/services-pract.component';
import { FormsReactiveComponent } from './components/forms-reactive/forms-reactive.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'directives',
    component: DirectivesSampleComponent
  },
  {
    path: 'comp-communication',
    component: CompCommunicationComponent
  },
  {
    path: 'template-driven',
    component: FormsTdComponent
  },
  {
    path: 'services',
    component: ServicesPractComponent
  },
  {
    path: 'reactive-forms',
    component: FormsReactiveComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
