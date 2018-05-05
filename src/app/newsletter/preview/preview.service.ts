import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class PreviewService {

  constructor(private http: HttpClient) {
  }

  registerUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/heading/', userData);
  }

  postFile(getHtmlEmailContent): Observable<any> {
    // const endpoint = 'http://127.0.0.1:8000/upload/';
    const formData: FormData = new FormData();
    formData.append('file', getHtmlEmailContent);
    return this.http.post('http://127.0.0.1:8000/html/', formData);
  }
   postHtmlFile(getDownloadHtmlLink): Observable<any> {
    // const endpoint = 'http://127.0.0.1:8000/upload/';
    const formData: FormData = new FormData();
    formData.append('file', getDownloadHtmlLink);
    return this.http.post('http://127.0.0.1:8000/newshtml/', formData);
  }
}
