import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';

import { Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  registerUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/news/', userData);
  }
  // postFile(fileToUpload: File): Observable<any> {
  //   const formData: FormData = new FormData();
  //   return this.http.post('http://127.0.0.1:8000/upload/', FormData);
  // }
  postFile(fileToUpload: File): Observable<any> {
    // const endpoint = 'http://127.0.0.1:8000/upload/';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    return this.http.post('http://127.0.0.1:8000/upload/', formData);
}
}


