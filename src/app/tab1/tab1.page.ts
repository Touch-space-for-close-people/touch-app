import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  public title = 'Home';
  public showShareIdea = false;

  constructor() {
  }

  public onChooseIdeaCard(event: { title: string }): void {
    this.title = event.title;
    this.showShareIdea = true;
  }
}
