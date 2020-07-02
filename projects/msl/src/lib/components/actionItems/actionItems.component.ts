import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from "@angular/core";

import {
  faBolt,
  faShare,
  faUndo,
  faTimesCircle,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "mg-action-items",
  templateUrl: "./actionItems.component.html",
  styleUrls: ["./actionItems.component.css"],
})
export class ActionItemsComponent {
  @Output() onBack = new EventEmitter<any>();
  @Output() onEdit = new EventEmitter<any>();
  @Output() onSave = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onClose = new EventEmitter<any>();

  @Input() model: any;

  iconBolt = faBolt;
  iconEditItem = faEdit;
  iconPerson = faShare;
  iconRemoveItem = faTimesCircle;
  iconSaveItem = faSave;
  iconUndo = faUndo;

  @Input() showEditIcon = true;
  @Input() showSaveIcon = true;
  @Input() showBackIcon = true;
  @Input() showDeleteIcon = true;
  @Input() showCloseButton = false;

  spinSaveIcon = false;
  showInvalidState = false;

  //** Location from Angular Common  */
  constructor(private cdf: ChangeDetectorRef) {}

  public showEditIconOnly() {
    this.showSaveIcon = false;
    this.showDeleteIcon = false;
    this.showBackIcon = false;
    this.cdf.detectChanges();
  }
  public showSaveDeleteOnly() {
    this.showSaveIcon = true;
    this.showDeleteIcon = true;
    this.showBackIcon = false;
    this.showEditIcon = true;
    this.cdf.detectChanges();
  }

  onBackClicked() {
    this.onEdit.emit(this.model);
  }

  onEditClicked() {
    this.onEdit.emit(this.model);
  }
  onSaveClicked() {
    this.onSave.emit(this.model);
  }
  onDeleteClicked() {
    this.onDelete.emit(this.model);
  }
  onCloseClicked() {
    this.onClose.emit(this.model);
  }
}
