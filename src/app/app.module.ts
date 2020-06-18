import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
import { TodosComponent } from './todos/todos.component';
import { PostsComponent } from './posts/posts.component';
import { HolidaysComponent } from './holidays/holidays.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    PostsComponent,
    HolidaysComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
