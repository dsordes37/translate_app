import { Component, EventEmitter, OnInit, Output, Input, OnChanges, SimpleChanges} from '@angular/core';
import { langs } from 'src/data/langs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Output() text= new EventEmitter();

  @Output() newFromLang= new EventEmitter();

  @Input() fromLang:string='0';

  @Input() detecLang:any='0';

  processChange:any;

  textLengh:number=0;

  langList=langs;

  lang0=this.langList[0];
  lang1=this.langList[1];
  lang2=this.langList[2];
  lang3=this.langList[3];

  btStatus=[false ,true, false, false]

  listVisible=false


  constructor() { }

  ngOnInit(): void {
    this.run()
    this.countTextLengh()
    this.select_lang(this.fromLang)

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.select_lang(this.fromLang)
  }

  run(){
    let source:any=this.getSource();
    this.text.emit(source.value);
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

  select_lang(id:any){
    if(id=='0'){
      this.btStatus=[true, false, false, false]
    }else if(id=='1'){
      this.btStatus=[false, true, false, false]
    }else if(id=='2'){
      this.btStatus=[false, false, true, false]
    }else{
      this.btStatus=[false,false, false, true]
      this.lang3=this.langList[id]
      
    }

   
  }


  
  emitLang(id:any){
    this.newFromLang.emit(this.langList[id].id)
    if(id!=0){
      this.detecLang=''
    }
  }

  showAndHideList(){
    if(this.listVisible){
      this.listVisible=false
    }else{
      this.listVisible=true
    }
  }

  
  
}

