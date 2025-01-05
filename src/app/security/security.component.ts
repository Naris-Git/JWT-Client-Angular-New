import { Component, OnInit } from '@angular/core';
import { JwtclientService } from '../jwtclient.service';
import { interval, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

pageRefresh$:Observable<string> | undefined;
  authRequest={
    "userName": "kiran",
    "password": "k@123"
};

  constructor(private service:JwtclientService){

  }

   autoRefresh=2000;
  ngOnInit(): void {
  
    // interval(this.autoRefresh).pipe(
    //   switchMap(()=> )
    // );
    

   
    this.getAccessToken(this.authRequest)


  }
  data1:any;    
  userdata:any=[];
  public getAccessToken(authRequest: { userName: string; password: string; }):any{
        let resp= this.service.generateToken(authRequest);
   return resp.subscribe((data)=>{
      console.log("Token data from backend"+data);
      this.getUserDeatails(data);
      //this.data1=data;

    }) 
  }
  finaldata:any;
  public getUserDeatails(d: string | Object){
   let d1= this.service.welcome(d);
   d1.subscribe((val)=>{
      this.finaldata=val;
this.userdata=this.finaldata;
      console.log("userdata",this.userdata)

   })

  }


}
