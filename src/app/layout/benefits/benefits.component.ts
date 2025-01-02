import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'src/app/device-detector.service';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {
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
