import { Component, OnInit } from '@angular/core';
import { FAQ } from 'src/app/faq';

@Component({
  selector: 'app-frequently-ask-que',
  templateUrl: './frequently-ask-que.component.html',
  styleUrls: ['./frequently-ask-que.component.css']
})
export class FrequentlyAskQueComponent implements OnInit {
  faq_data=FAQ
  constructor() { }

  ngOnInit(): void {
  }

}
