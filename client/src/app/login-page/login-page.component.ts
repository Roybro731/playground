import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public cardsContent;
  public userName: string;
  public password: string;

  
  constructor(){}

  ngOnInit(){
    this.cardsContent = [
      {header: "JavaScript",
       description:"JavaScript is the programming language of HTML and the Web.",
      logo:"../../assets/js.png"},
      {header: "NodeJS",
       description:"Node is designed to build scalable network applications.",
      logo:"../../assets/nodejs.png"},
      {header: "Angular",
       description:"Angular is a platform for building mobile and desktop web applications.",
      logo:"../../assets/angular.png"},
      {header: "MongoDB",
       description:"MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.",
      logo:"../../assets/mongo.jpg"},
    ]
  }
  
  public login(form: NgForm) {
    console.log('clicked on login!');
    // if (!this.validateForm){
    //   return;
    // }
    // console.log(this.userName, this.password);
  }

  private validateForm() {
    return (this.userName || this.password);
  }

}
