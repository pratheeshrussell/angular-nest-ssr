import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MetaTagServiceService {
  constructor(private meta: Meta, private platformTitle: Title) { }

  setMetaTag(property:string,content:string){
    this.meta.getTag
    if(this.meta.getTag(`property="${property}"`) == null){
      this.meta.addTag({property, content});
    }else{
      this.meta.updateTag({property, content});
    }
  }

  setTitle(title:string){
    this.platformTitle.setTitle(title);
  }

  generateRandomText(length:number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
}
