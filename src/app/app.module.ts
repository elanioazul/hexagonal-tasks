import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskService } from '@infraestructure/services/task/task.service';
import { TaskRepository } from '@core/repositories/task.repository';
import { TaskRepositoryImpl } from '@infraestructure/repositories/task.repository.impl';
import { interceptorProviders } from '@core/interceptors/interceptors';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers:[
    interceptorProviders,
    TaskService,
    { provide: TaskRepository, useClass: TaskRepositoryImpl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
