import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public userName: string;
  public password: string;
  
  constructor(){}

  public signUp() {
    console.log("sign up");
  }

}
