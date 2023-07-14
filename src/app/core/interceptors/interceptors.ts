import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpErrorInterceptor } from '../interceptors/http-error/http-error';
import { RequestFormatInterceptor } from '../interceptors/request-format/request-format';

export const interceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestFormatInterceptor,
    multi: true,
  },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
];