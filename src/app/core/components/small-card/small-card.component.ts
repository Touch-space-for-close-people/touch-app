import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss'],
})
export class SmallCardComponent implements OnInit {

  @Input()
  public text: string;

  @Output()
  public clickedCard: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  public onClickCard(): void {
    this.clickedCard.emit();
  }
}
