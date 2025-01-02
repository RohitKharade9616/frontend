import { Component, OnInit } from '@angular/core';
import { offerDetails } from '../../offer-data';  // Import the offerData
import { DeviceDetectorService } from 'src/app/device-detector.service';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  offerDetails=offerDetails
  panelState: string = 'closed';  // Initially closed
  selectedPanelIndex: number  = 0;

  isMobile: boolean = false;
  isTablet: boolean = false;
  isDesktop: boolean = false;
  constructor(private deviceService:DeviceDetectorService) { }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktop = this.deviceService.isDesktop();
    console.log("data",this.offerDetails)
  }

  onPanelToggle(index: number): void {
    this.selectedPanelIndex = index;
  }

}
