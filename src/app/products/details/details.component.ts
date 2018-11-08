import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() group: FormGroup;
  @Output() saved = new EventEmitter();

  saveProduct() {
    this.saved.emit(this.group.value);
  }

}
