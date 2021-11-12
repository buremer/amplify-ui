import { Component } from '@angular/core';

@Component({
  selector: 'amplify-error',
  templateUrl: './error.component.html',
})
export class AmplifyErrorComponent {
  public isVisible = true;

  public close() {
    this.isVisible = false;
  }
}