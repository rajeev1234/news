import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UserService]
})
export class AppComponent implements OnInit {
  fileToUpload: File = null;
  news_subscribe;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.news_subscribe = {
      email: '',
    };
    }
  registerUser() {
    this.userService.registerUser(this.news_subscribe).subscribe(
      responce => {
        alert('Hey your ' + this.news_subscribe.email + '  has been Subscribed');
        console.log(this.news_subscribe);
      },
      error => console.log('error', error )
    );
  }
  Input(event) {
    console.log(event);
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

  uploadFileToActivity() {
    this.userService.postFile(this.fileToUpload).subscribe(data => {
      console.log(this.fileToUpload);
      // do something, if upload success
      }, error => {
        console.log(error);
      });
  }
}
