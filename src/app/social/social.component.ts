import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  @Input() hotel: Hotel;

  public currentHotel: Hotel;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.currentHotel = this.hotel;
  }

}
