import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-idea-modal',
  templateUrl: './idea-modal.component.html',
  styleUrls: ['./idea-modal.component.scss'],
})
export class IdeaModalComponent implements OnInit {
  @Input()
  public trigger: string;

  @Output()
  public chooseIdeaCard: EventEmitter<{ title: string }> = new EventEmitter<{title: string}>();

  config: SwiperOptions = {
    speed: 400,
    slidesPerView: 'auto',
    zoom: false,
    grabCursor: true,
  };

  constructor() { }

  ngOnInit() {}

  onSwiper([swiper]) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }

  public onCardClick(event: any, title: string, modal: IonModal): void {
    this.chooseIdeaCard.emit({title});
    modal.dismiss();
  }

}
