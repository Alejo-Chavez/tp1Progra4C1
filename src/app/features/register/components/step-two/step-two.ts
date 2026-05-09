import { Component, EventEmitter, Output , Input} from '@angular/core';
import { FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-two',
  imports: [ReactiveFormsModule],
  templateUrl: './step-two.html',

})
export class StepTwo {
   @Output() submit = new EventEmitter<void>();
   @Input() form!: FormGroup;
   @Output() prev = new EventEmitter<void>();
   @Input() loading: boolean = false;
}
