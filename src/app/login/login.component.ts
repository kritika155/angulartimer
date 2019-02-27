import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
i:any;
  constructor() { }

  ngOnInit()
   {
            console.log("ngOnInitlogin");
            function a()
            {
              for(this.i=1;this.i<=100;this.i++)
                  {
                    console.log(this.i);
                  }
            }
            
            setTimeout(a,2000);
  }

}
