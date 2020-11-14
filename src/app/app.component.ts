import { Component } from '@angular/core';
//import { MapsService } from './services/maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'malibu';
  
  // lat: string = '';
  // long: string = '';
  // name: string = '';
  // // location: Object;

  // constructor(private map: MapsService) {}

  // // ngOnInit(): void {
  // //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  // //   //Add 'implements OnInit' to the class.
  // //   this.map.getLocation().subscribe(data => {
  // //     console.log(data);
  // //     this.lat = data.latitude;
  // //     this.long = data.longitude;
  // //     this.name = data.region_name;
  // //   })
  // // }
}
