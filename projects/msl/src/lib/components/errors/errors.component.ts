import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ErrorModel } from "./errorModel";
import { Router, Event, NavigationStart } from "@angular/router";
import { HtmlElementService } from "../../services/html-element-service.service";
import { EventService } from "../../services/event.service";

@Component({
  selector: "mg-errors",
  templateUrl: "./errors.component.html",
  styleUrls: ["./errors.component.css"],
  inputs: ["header", "content", "showError"],
})

/** This component is contained in the app.component.html allowing for automatic error notification, it listens to the event.service for events.
 *  To use this component: import it, declare it in CTOR, then fire the event
 *    1) import {  EventService } from '@gavia/services/event.service';
 *    2) In CTOR : private  EventService:  EventService,
 *    3) To Notify: this. EventService.ErrorEvent.emit(error);
 */
export class ErrorsComponent implements OnInit {
  error: HttpErrorResponse;
  showError: boolean = false;
  showNoButton: boolean = false;
  showStackTrace: boolean = false;
  showYesButton: boolean = false;
  stackTraceExists = false;

  constructor(
    private cdf: ChangeDetectorRef,
    private EventService: EventService,
    private HtmlElementService: HtmlElementService,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this.EventService.OpenErrorPopupEvent.subscribe((error) => {
      console.log(error);
      this.open(error);
    });
    this.EventService.CloseErrorPopupEvent.subscribe((close) => {
      let showError = (this.showError = false);
      let showStackTrace = (this.showStackTrace = false);
      let stackTraceExists = (this.stackTraceExists = false);
      this.cdf.detectChanges();
    });

    this.Router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.onShowErrorsClose();
      }
    });
  }
  onToggleStackTrace(event) {
    this.showStackTrace = !this.showStackTrace;
    let state = this.showStackTrace ? "Opened" : "Closed";
    this.HtmlElementService.animateWithAck(event, "animate-opacity", state);
  }
  onCopy(event) {
    this.onCopyToClipBoard("open-modal");
    this.HtmlElementService.animateWithAck(event, "animate-opacity", "Copied");
  }
  onCopyStackTrace(event) {
    this.onCopyToClipBoard("stackTrace");
    this.HtmlElementService.animateWithAck(event, "animate-opacity", "Copied");
  }
  onYesClicked() {
    this.EventService.QuestionResponseEvent.emit(true);
  }
  onNoClicked() {
    this.EventService.QuestionResponseEvent.emit(false);
  }
  /** dynamically applies animation specified, then changes text to ack text, default delay is 1500milliseconds */

  /** copy to clipboard uses getElementByID and the document execCommand "copy" */
  onCopyToClipBoard(elementID: string) {
    let element = document.getElementById(elementID);
    this.HtmlElementService.copyToClipBoard(element);
  }

  onShowErrorsClose() {
    this.EventService.CloseErrorsPopup();
  }

  onRetry() {
    window.location.replace(document.URL);
  }

  open(error: HttpErrorResponse) {
    this.error = error;
    this.showError = true;
    // error.stackTrace
    //   ? (this.stackTraceExists = true)
    //   : (this.stackTraceExists = false);
    // this.showNoButton = error.showNoButton;
    // this.showYesButton = error.showYesButton;
    // this.error.retry = error.retry;
    this.EventService.StopNavigationSpinner();
    this.cdf.detectChanges();
  }
}
