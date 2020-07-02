import { MatDialogConfig } from "@angular/material/dialog";
import { MatDialog } from "@angular/material/dialog";
import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  ViewChild,
} from "@angular/core";
import { first } from "rxjs/operators";
import { CdkConnectedOverlay } from "@angular/cdk/overlay";
import { MessageComponent } from "./message/message.component";

@Component({
  selector: "mg-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"],
})
export class DialogComponent implements OnInit {
  //** listens to your emitter for data to display */
  @Input("Open") open: EventEmitter<any>;
  @Input("CloseDelay") delay: number = 2000;
  @Input("defaultMessage") defaultMessage = "DialogComponent Status:Listening";
  @ViewChild(CdkConnectedOverlay, { static: true })
  cdkConnectedOverlay: CdkConnectedOverlay;

  inboundMessage;

  constructor(private md: MatDialog) {}
  ngOnInit(): void {
    this.inboundMessage = this.defaultMessage;
    this.open.subscribe((data) => {
      this.openDialog(data);
    });
  }
  private openDialog(data: any) {
    let mc = this.getConfig(data);
    let mdRef = this.md.open(MessageComponent, mc);
    this.wait(mdRef);
  }
  private getConfig(data: any) {
    let mc = new MatDialogConfig();
    mc.data = data;
    mc.autoFocus = true;
    this.inboundMessage = `Message Received => ${data}`;
    return mc;
  }
  //** Allow user to dial in display time */
  private wait(mdRef) {
    setTimeout(() => {
      mdRef.close();
      this.inboundMessage = this.defaultMessage;
    }, this.delay);
  }
}
