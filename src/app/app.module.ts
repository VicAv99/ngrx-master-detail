import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

// NGRX
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ListComponent } from './products/list/list.component';
import { DetailsComponent } from './products/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
