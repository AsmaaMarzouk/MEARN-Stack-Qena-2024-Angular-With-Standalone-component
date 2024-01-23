import { Component } from '@angular/core';
import { TrackInfo } from '../../Model/track-info';
import { TrackData } from '../../Model/track-data';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  userName:string = "Ali";
  userID:number=5;

  sayHello(){
    return "Hello"+this.userName;
  }

  track:TrackInfo=new TrackInfo("MEARN Track",42,"https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png");
  track1:TrackData={
    trackName:".NET Track",
    trackID:18,
    trackCourses:["Node js","Angular","React"]
  }
}
