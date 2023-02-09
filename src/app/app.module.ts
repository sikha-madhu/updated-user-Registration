import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ColorComponentComponent } from './additionaldata/additionaldata';
import { DisplayDataComponent } from './display-data/display-data.component';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorComponentComponent,
    DisplayDataComponent,
    UserRegisterationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
