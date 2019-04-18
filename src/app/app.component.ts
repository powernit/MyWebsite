import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myWebsite';
  a = [1,2,3,4];
  b = [22,33,1,45,6];

  addMore(){
    this.a = this.a.concat(this.b);
  }
  reset(){
    this.a = [1,2,3,4];
  }
}
