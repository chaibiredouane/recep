import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from './user.service';


@Injectable()
export class AuthService {
    public currentUserName='';
    currentUser:User;
    subject=new Subject<User>();
    constructor(private userService:UserService){ }

    public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public UserLoggedIn: BehaviorSubject<string> = new BehaviorSubject<string>('');
    emitSubject(){
        this.subject.next(this.currentUser);
    }

    signIn(userName:string,pw:string) 
    {
             this.currentUser=this.userService.getuser(userName);
             this.emitSubject();

                if(this.currentUser !=null  && this.currentUser.userName===userName 
                && this.currentUser.password===pw){
                   this.isUserLoggedIn.next(true);
                   this.currentUserName=this.currentUser.userName;
                }          
                else this.isUserLoggedIn.next(false);

                this.UserLoggedIn.next(this.currentUser.firstName);
    }

    
      signOut() {
        this.currentUser =null;
        this.isUserLoggedIn.next(false);
        this.emitSubject();
      }

      getUserName(){
        if(this.currentUser === null) {
          return null;
        }
        else { 
          // return this.currentUser.userName;
        }

      }

}
