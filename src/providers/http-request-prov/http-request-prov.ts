import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { User } from '../../models/user';

/*
  Generated class for the HttpRequestProvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpRequestProvProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpRequestProvProvider Provider');
  }

  getGitUser(user : string):Observable<User> {
    return this.http.get<User>('https://api.github.com/users/'+ user);
     
  }

}
