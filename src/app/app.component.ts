import { Component, ViewChild, ElementRef, ComponentRef } from '@angular/core';
import { BtnComponent } from './components/btn/btn.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showBtn1: boolean = true;
  showBtn2: boolean = true;
  showBtn3: boolean = true;
  showBtn4: boolean = true;

  title = 'demo-app';

}
