import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-my-common',
  templateUrl: './my-common.component.html',
  styleUrls: ['./my-common.component.scss']
})
export class MyCommonComponent {
  @Input() title: string = 'NPM lib';
}
