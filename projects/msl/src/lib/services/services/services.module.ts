import { CommonModule } from "@angular/common";
import { DialogService } from "./../dialog.service";
import { EventService } from "./../event.service";
import { HtmlElementService } from "./../html-element-service.service";
import { NgModule } from "@angular/core";
export { SignalRService } from "./../signalr.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [EventService, HtmlElementService],
})
export class ServicesModule {}
