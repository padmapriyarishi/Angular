import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataBindingComponent } from '../components/data-binding/data-binding.component';
import { DirectivesSampleComponent } from '../components/directives-sample/directives-sample.component';

import { OddComponent } from '../components/comp-communication/odd/odd.component';
import { EvenComponent } from '../components/comp-communication/even/even.component';
import { GameControlComponent } from '../components/comp-communication/game-control/game-control.component';
import { CompCommunicationComponent } from '../components/comp-communication/comp-communication.component';

import { ServicesPractComponent } from '../components/services-assignment/services-pract/services-pract.component';
import { ActiveUsersComponent } from '../components/services-assignment/active-users/active-users.component';
import { InactiveUsersComponent } from '../components/services-assignment/inactive-users/inactive-users.component';

import { FormsTdComponent } from '../components/forms-td/forms-td.component';
import { FormsReactiveComponent } from '../components/forms-reactive/forms-reactive.component';




@NgModule({
  declarations: [
    DataBindingComponent,
    DirectivesSampleComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    CompCommunicationComponent,
    FormsTdComponent,
    ServicesPractComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    FormsReactiveComponent,
    CompCommunicationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
