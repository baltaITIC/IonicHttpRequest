import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpRequestProvProvider} from '../../providers/http-request-prov/http-request-prov'
import { User } from '../../models/user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
user : User;
userName : string = "";
  constructor(
    public navCtrl: NavController,
    public httpReq : HttpRequestProvProvider) {

  }

  ionViewWillLoad(){
  }

  searchUser(){
    
    this.httpReq.getGitUser(this.userName)
      .subscribe(
        (data) => {
          this.user = data;
        }, 
        (error) =>{}
      );
  }

}
