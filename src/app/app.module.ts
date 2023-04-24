import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPrintModule } from 'ngx-print';
import {MatDialogModule} from '@angular/material/dialog'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { BlogComponent } from './blog/blog.component';
import { HtmlComponent } from './html/html.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CssComponent } from './css/css.component';
import { JsBasicComponent } from './js-basic/js-basic.component';
import { JsIntermediateComponent } from './js-intermediate/js-intermediate.component';
import { ResultsComponent } from './results/results.component';
import { GetAnswersPipe } from './get-answers.pipe';
import { NamesComponent } from './names/names.component';
import { ChangeStyleDirective } from './change-style.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    BlogComponent,
    HtmlComponent,
    PageNotFoundComponent,
    CssComponent,
    JsBasicComponent,
    JsIntermediateComponent,
    ResultsComponent,
    GetAnswersPipe,
    NamesComponent,
    ChangeStyleDirective,


  ],
  imports: [
    BrowserModule,
    NgxPrintModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'' ,component:BlogComponent},
      {path:'html' ,component:HtmlComponent},
      {path:'blog',component:BlogComponent},
      {path:'wordpress',component:CssComponent},
      {path:'JsBasic',component:JsBasicComponent},
      {path:'JsIntermediate',component:JsIntermediateComponent},
      {path:'results',component:ResultsComponent},
      {path:'names',component:NamesComponent},
      {path: '**', component: PageNotFoundComponent},
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
