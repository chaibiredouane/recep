import { Subject } from 'rxjs';
import { User } from '../models/user.model';
import { Injectable } from "@angular/core";

@Injectable()
export class UserService{
    private users:User[]=[
        {firstName: 'Redouane',lastName: 'CHAIBI',userName: 'rchaibi',password:'rchaibi123',email:'redouane@chaibi.com',lastConnexion:new Date()},
        {firstName: 'test',lastName: 'test',userName: 'test',password:'test',email:'test@chaibi.com',lastConnexion:new Date()},
        {firstName: 'Test',lastName: 'RECEPTION',userName: 'reception',password:'123',email:'reception@test.com',lastConnexion:new Date()},
        {firstName: 'Redouane',lastName: 'CHAIBI',userName: 'rchaibi',password:'rchaibi123',email:'redouane@chaibi.com',lastConnexion:new Date()},
        {firstName: 'Test1',lastName: 'RECEPTION',userName: 'reception',password:'123',email:'reception@test.com',lastConnexion:new Date()},
        {firstName: 'Redouane1',lastName: 'CHAIBI',userName: 'rchaibi',password:'rchaibi123',email:'redouane@chaibi.com',lastConnexion:new Date()},
        {firstName: 'Test1',lastName: 'RECEPTION',userName: 'reception',password:'123',email:'reception@test.com',lastConnexion:new Date()},
        {firstName: 'Redouane2',lastName: 'CHAIBI',userName: 'rchaibi',password:'rchaibi123',email:'redouane@chaibi.com',lastConnexion:new Date()},
        {firstName: 'Test2',lastName: 'RECEPTION',userName: 'reception',password:'123',email:'reception@test.com',lastConnexion:new Date()},
        {firstName: 'Redouane2',lastName: 'CHAIBI',userName: 'rchaibi',password:'rchaibi123',email:'redouane@chaibi.com',lastConnexion:new Date()},
        {firstName: 'Test3',lastName: 'RECEPTION',userName: 'reception',password:'123',email:'reception@test.com',lastConnexion:new Date()},
        {firstName: 'Redouane3',lastName: 'CHAIBI',userName: 'rchaibi',password:'rchaibi123',email:'redouane@chaibi.com',lastConnexion:new Date()},
        {firstName: 'Test3',lastName: 'RECEPTION',userName: 'reception',password:'123',email:'reception@test.com',lastConnexion:new Date()},
        {firstName: 'Redouane4',lastName: 'CHAIBI',userName: 'rchaibi',password:'rchaibi123',email:'redouane@chaibi.com',lastConnexion:new Date()},
        {firstName: 'Test4',lastName: 'RECEPTION',userName: 'reception',password:'123',email:'reception@test.com',lastConnexion:new Date()},
        {firstName: 'Redouane4',lastName: 'CHAIBI',userName: 'rchaibi',password:'rchaibi123',email:'redouane@chaibi.com',lastConnexion:new Date()},
        {firstName: 'Test4',lastName: 'RECEPTION',userName: 'reception',password:'123',email:'reception@test.com',lastConnexion:new Date()}
    ];
    constructor(){
        
    }
    
     subject=new Subject<User[]>();

     getuser(userName:string)
     {
       return this.users.find(x => x.userName == userName);
     }  
     getUsers() {
      return this.users;
     }

     emitSubject(){
         this.subject.next(this.users);
     }


  
  saveToServer(){
      this.users= [
        {firstName: 'Redouane',lastName: 'CHAIBI',userName: 'rchaibi',password:'rchaibi123',email:'redouane@chaibi.com',lastConnexion:new Date()},
        {firstName: 'Test',lastName: 'RECEPTION',userName: 'reception',password:'123',email:'reception@test.com',lastConnexion:new Date()}
    ];
    // this.httpClient.put('https://http-redouane-default-rtdb.europe-west1.firebasedatabase.app/messages.json',
    // this.posts).subscribe(
    //   ()=>{console.log(' Enregistrement réussi !');},
    //   (error)=>{console.log(' Reeur lors de l enregistrement ' + error);}
    // );
  }

  getFromServer(){
    return this.users;
    // this.httpClient.get<any[]>('https://http-redouane-default-rtdb.europe-west1.firebasedatabase.app/messages.json')
    // .subscribe(
    //   (response)=>{this.posts=response;
    //     this.emitPostSubject();},
    //   (error)=>{console.log('Erroe :' + error)}
    // );
  }
}