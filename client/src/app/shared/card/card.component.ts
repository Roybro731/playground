import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  public header: string;

  @Input()
  description: string;

  @Input()
  logo: string;

  constructor() { }

}
