import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() text= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.pushText()
  }

  pushText(){
    let source:any=document.querySelector('textarea')
    this.text.emit(source.value)
  }

}
