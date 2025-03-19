import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

    @Input() inputText: string = '';
    @Output() outputValue: EventEmitter<string> = new EventEmitter<string>();

    message: string = "";

    sendMessage(){
      this.outputValue.emit(this.message);
    }
}
