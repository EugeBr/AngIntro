import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngIntro';
  message: string = 'Message From Typescript Component File';
  imgUrl: string = 'https://img.wattpad.com/4c34b7beae6a7e61099507b82ec20b48ec1fc3c0/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f76717a4a484a377965304d534d513d3d2d32352e313435616631376331666235343964373937333134343831323531352e6a7067?s=fit&w=720&h=720';
  bool: boolean = true;
  userName: string = "";
  buttonClick() {
    console.log('Button Click Event Worked');
  }
  onKeyup() {
    console.log(this.userName);
  }
}
