import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectorService {

  constructor() { }
  isMobile(): boolean {
    const userAgent = window.navigator.userAgent;
    return /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
  }

  // Check if the device is tablet
  isTablet(): boolean {
    const userAgent = window.navigator.userAgent;
    return /iPad|Android/i.test(userAgent);
  }

  // Check if the device is desktop
  isDesktop(): boolean {
    return !this.isMobile() && !this.isTablet();
  }

  // Detect the device based on screen width
  isMobileWidth(): boolean {
    return window.innerWidth <= 768; // You can adjust the threshold as per your requirement
  }

  isTabletWidth(): boolean {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
  }

  isDesktopWidth(): boolean {
    return window.innerWidth > 1024;
  }
}
