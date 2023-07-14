import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  
  @Injectable()
  export class RequestFormatInterceptor implements HttpInterceptor {
    intercept(
      request: HttpRequest<unknown>,
      next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
      if (!request.headers.has('Content-Type')) {
        request = request.clone({
          headers: request.headers.set('Content-Type', 'application/json'),
        });
      }
      return next.handle(request);
    }
  }