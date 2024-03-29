import { Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import { AudioApiService } from 'src/app/services/audio-api.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() text= new EventEmitter();

  @Input() fromLang:string='en';

  @Input() toLang:string='fr';

  processChange:any;

  textLengh:number=0;

  constructor(private service:AudioApiService) { }

  ngOnInit(): void {
    //this.run()
    this.processChange = this.debounce(() => this.saveInput());
    this.countTextLengh()
    
  }

  run(){
    let source:any=this.getSource();
    this.text.emit(source.value);
  }

  debounce(func:Function, timeout:number=300){
    let timer:any;
    return (...args:any[])=>{
      clearTimeout(timer);
      timer=setTimeout(()=>{func.apply(this, args);}, timeout);
    };
  }

  saveInput(){
    console.log('Salvando os dados');
  }

  countTextLengh(){
    let source:any=this.getSource();
    this.textLengh=source.value.length

  }

  getSource(){
    let source:any=document.querySelector('textarea');
    return source
  }


  copyText(){
    const source=this.getSource()
    navigator.clipboard.writeText(source.value)
  }

  async audio(){
    console.log("carregando...")
    await this.service.run()
    console.log("carregado")
  }


  
}

