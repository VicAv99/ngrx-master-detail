import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
