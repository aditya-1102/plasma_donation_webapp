import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  private userData=new BehaviorSubject('');
  currentData=this.userData.asObservable();
  private productId=new BehaviorSubject('');
  currentId=this.productId.asObservable();


  constructor() { }
  updateMessage(item:any){
    this.userData.next(item);
  }
  updateId(item:any){
    this.productId.next(item);
  }
}
