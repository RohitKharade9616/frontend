import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'src/app/device-detector.service';
import { productData } from 'src/app/product-list';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productData=productData
  
    isMobile: boolean = false;
    isTablet: boolean = false;
    isDesktop: boolean = false;
    constructor(private deviceService:DeviceDetectorService) { }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktop = this.deviceService.isDesktop();
    console.log("data",this.productData)
  }

}
