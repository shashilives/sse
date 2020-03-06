import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
  @Input() bgColor: string;

  @Output() close: EventEmitter<any> = new EventEmitter();

  @ViewChild("wrapper", { static: true }) wrapper: ElementRef;

  constructor() {
  }
  ngOnInit() {
    this.wrapper.nativeElement.style.background = this.bgColor;
  }

  onBtnClick() {
    this.close.emit(null);
    console.log();

  }
}
