import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
name:any={};
arr:any;
  constructor() { }

  ngOnInit()
   {
            console.log("on ngOnInit login");
            this.name="kritika";
            this.arr=[0,1,2,3];
            console.log(JSON.stringify(this.arr));
            
            var i=0;
            (
              function a()
              {
                if(i++>100)
                return;
                setTimeout(function()
                {document.write(i+"<br/>");
                a();
              },2000);
            })();
                
          
          
  }

}
