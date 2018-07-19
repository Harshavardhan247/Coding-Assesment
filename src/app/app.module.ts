import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { ViewComponent } from './components/view/view.component';
import { ProductService } from './service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './components/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TruncatePipe } from './pipes/truncate.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    NgbModule.forRoot()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
