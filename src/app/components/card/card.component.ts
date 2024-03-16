import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  card_type:string='input';


  constructor() { }

  @Output() digitado = new EventEmitter();

  ngOnInit(){
    this.digitado.emit('Olá mundo')
  }

  
  

  getTexto(){
    let text:HTMLTextAreaElement|null=document.querySelector('textarea')
    let texto=text?.value
    console.log(texto)
    this.digitado.emit(texto)
  }
  

}
