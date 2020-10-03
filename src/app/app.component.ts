import { Component } from '@angular/core';
import{ GlobalConstants } from './common/global-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab42';


   // i: number = 0;

  // ol = (<HTMLInputElement>document.getElementById("ol"));



  btnClick(b: number) {
    (<HTMLInputElement>document.getElementById("txt")).value = (<HTMLInputElement>document.getElementById("txt")).value + b;

  };



  btnClear() {
    (<HTMLInputElement>document.getElementById("txt")).value = '';


  };



  btnSum() {

    (<HTMLInputElement>document.getElementById("txt")).value = (<HTMLInputElement>document.getElementById("txt")).value + '+';

  };



  btnSub() {

    (<HTMLInputElement>document.getElementById("txt")).value = (<HTMLInputElement>document.getElementById("txt")).value + "-";

  };



  btnMult() {

    (<HTMLInputElement>document.getElementById("txt")).value = (<HTMLInputElement>document.getElementById("txt")).value + '*';

  };



  btnDiv() {

    (<HTMLInputElement>document.getElementById("txt")).value = (<HTMLInputElement>document.getElementById("txt")).value + '/';

  };



  btnAnswer() {


    // let i: number = 0;
    let ol = (<HTMLInputElement>document.getElementById("ol"));
    GlobalConstants.i++;
    (<HTMLInputElement>document.getElementById("txt")).value = (<HTMLInputElement>document.getElementById("txt")).value + "=" + eval((<HTMLInputElement>document.getElementById("txt")).value);
    let liLast = document.createElement('li');
    let val: string = (<HTMLInputElement>document.getElementById("txt")).value;
    liLast.innerHTML = val;
    (<HTMLInputElement>document.getElementById("txt")).value = '';
    ol.append(liLast);
    if (GlobalConstants.i == 4) {
      ol.removeChild(ol.childNodes[0]);
      GlobalConstants.i = 3;
    }


  };

}
