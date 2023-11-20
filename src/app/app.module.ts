import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { RendersComponent } from './renders/renders.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { FormsModule } from '@angular/forms';
import { NewComponentComponent } from './shared/new-component/new-component.component';
import { SharedModule } from './shared/shared.module';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent,
    RendersComponent,
    DiretivasComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
