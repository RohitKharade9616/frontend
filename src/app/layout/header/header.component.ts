import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'src/app/device-detector.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   isMobile: boolean = false;
    isTablet: boolean = false;
    isDesktop: boolean = false;
    constructor(private deviceService:DeviceDetectorService) { }
  
    ngOnInit(): void {
      this.isMobile = this.deviceService.isMobile();
      this.isTablet = this.deviceService.isTablet();
      this.isDesktop = this.deviceService.isDesktop();
    }
}
