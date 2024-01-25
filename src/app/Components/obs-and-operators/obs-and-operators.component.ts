import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, from, fromEvent, map, merge, of, take } from 'rxjs';

@Component({
  selector: 'app-obs-and-operators',
  standalone: true,
  imports: [],
  templateUrl: './obs-and-operators.component.html',
  styleUrl: './obs-and-operators.component.scss',
})
export class ObsAndOperatorsComponent implements OnInit,OnDestroy {


  // non null assertion operator => !
  // sub!:Subscription;
  // obs = new Observable((observer) => {
  //   console.log('Observable Starts');
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  //   // setTimeout(() => {
  //   //   observer.error('error emitted');
  //   // }, 3500);
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next('5');
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 5000);
  // });

  ngOnInit(): void {
    // this.sub=this.obs.subscribe({
    //   next:(val)=>{

    //     console.log(val);

    //   },
    //   error:(err)=>{

    //     console.log(err);
    //     console.log("Error");


    //   },
    //   complete:()=>{
    //     console.log("Completed");

    //   }
    // })

    // const obs1=new Observable(observer=>{
    //   observer.next("Observable One")
    // });
    // const obs2=new Observable(observer=>{
    //   observer.next("Observable Two")
    // });
    // const obs3=merge(obs1, obs2);

    // obs3.subscribe(data=>{console.log(data);
    // })

    // create
    // from([2,5,8,9]).subscribe(data=>{console.log(data)})
    // of(5,8,10,16).subscribe(data=>{console.log(data)})
    // of([5,8,10,16]).subscribe(data=>{console.log(data)})


    // map
    // let obs=of("Hello World");

    // obs.pipe(map(data=>data.toUpperCase())).subscribe(data=>{console.log(data)})
    // obs.pipe(map(data=>data.toUpperCase().includes('E'))).subscribe(data=>{console.log(data)})

    // fromEvent
    // const obs1=fromEvent(document,'click');
    // obs1.subscribe(()=>
    // console.log("You clicked document")

    // )

    // obs1.pipe(take(2)).subscribe(()=> console.log("You clicked document"));




  }

  ngOnDestroy(): void {

    // this.sub.unsubscribe();
    // console.log("Obs stopped");


  }
}
