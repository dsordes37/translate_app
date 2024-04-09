import { Component, OnInit} from '@angular/core';
import { TranslateApiService } from 'src/app/services/translate-api.service';
import { translationModel } from 'src/app/models/translationModel';
import { langs } from 'src/data/langs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'translate_app';
  text:string='';
  translation?:translationModel;

  fromLang:number=3;
  toLang:number=4;

  langList=langs
  
  

  constructor(private service:TranslateApiService){
  }

  ngOnInit(){
    
  }

  ngOnChange(){
    
  }

  

  getText(valor:string){
    this.translate(this.langList[this.fromLang].code, this.langList[this.toLang].code, valor)
    
  }

  getFromLang(valor:number){
    if(this.langList[valor].id==this.toLang){
      this.switchLang()
    }else{
      this.fromLang=this.langList[valor].id
    }
    
  }

  getToLang(valor:number){
    if(this.langList[valor].id==this.fromLang){
      this.switchLang()
    }else{
      this.toLang=this.langList[valor].id
    }
  }

  switchLang(){
    let switchSpace=this.toLang
    this.toLang=this.fromLang
    this.fromLang=switchSpace
  }



  translate(fromLang:string, toLang:string, textToTranslate:string){
    if(textToTranslate===''){
      this.text=''
    }else{
      this.text='carregando...'
      this.service.getTranslation(fromLang, toLang, textToTranslate).subscribe({
        next:(response)=>{
          this.translation={
            responseData:{
              translatedText:response.responseData.translatedText
            }
          }
          this.text=this.translation.responseData.translatedText
        },
        error:()=>console.log('not found')
      })}
  }

  

  


}
