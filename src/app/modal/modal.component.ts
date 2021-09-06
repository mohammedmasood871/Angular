import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() isModalOpen: boolean = false;
  @Output() saveEvent = new EventEmitter<{ [key: string]: number | null }>();
  @Output() cancelEvent = new EventEmitter<boolean>();
  modalData = { item1: 1, item2: 2, item3: 3 };
  constructor() {}

  ngOnInit(): void {}
  onSave() {
    this.saveEvent.emit(this.modalData);
  }
  onCancel() {
    this.cancelEvent.emit(false);
  }
}
