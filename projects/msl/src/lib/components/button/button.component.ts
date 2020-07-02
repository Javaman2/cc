import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  AfterViewInit,
} from "@angular/core";
import { HtmlElementService } from "../../services/html-element-service.service";
HtmlElementService;

@Component({
  selector: "mg-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent implements OnInit, AfterViewInit {
  @Input("class") class: string = "changeTransparency";
  @Input("disableOnClick") disableOnClick = true;
  @Input("elementToFlash") eleToFlash: HTMLElement;
  @Input() enableButton: EventEmitter<boolean> = new EventEmitter();
  @Output() click: EventEmitter<{}> = new EventEmitter();
  button: HTMLButtonElement;

  constructor(private HtmlElementService: HtmlElementService) {}

  ngOnInit() {
    //Allows use to control enable
    this.enableButton.subscribe((p) => {
      this.button.disabled = false;
      this.button.disabled = false;
    });
  }
  ngAfterViewInit() {}
  onClick(event: Event, button) {
    event.stopPropagation();
    this.button = button;
    this.click.emit({
      text: button.innerText,
      button: button,
      event: event,
    });
    if (this.disableOnClick) button.disabled = true;

    if (this.eleToFlash) {
      this.HtmlElementService.flashElement(this.eleToFlash);
    }
  }
}
