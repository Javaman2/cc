import { ErrorModel } from "../components/errors/errorModel";
import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})

/**An Injectable service for subscription and notification or errors */
/** This Service works as the centralized event service
 *  To use this component: import it, declare it in CTOR, then fire the event
 *    1) import {  EventService } from '@gavia/services';
 *    2) private  EventService:  EventService,
 *    3) this. EventService.XYZEvent.emit(error);
 *    4) Or call any of the methods below.
 *  Note: The app.component contains the only needed mark up for the errors component.
 */
export class EventService {
  CloseErrorPopupEvent = new EventEmitter();
  ElapsedTimesEvent = new EventEmitter<string>();
  IdentityInfoEvent = new EventEmitter<string>();
  NavigationEndEvent = new EventEmitter();
  NavigationStartEvent = new EventEmitter();
  NewArbiterPost: EventEmitter<null> = new EventEmitter();
  NotifySaveStatusValidEvent = new EventEmitter<boolean>();
  OpenError: EventEmitter<object> = new EventEmitter();
  OpenErrorPopupEvent = new EventEmitter<{}>();
  PollingCountDown = new EventEmitter<object>();
  PollingHasStarted = new EventEmitter();
  PollingHasStopped = new EventEmitter();
  QuestionResponseEvent = new EventEmitter<boolean>();
  SaveCompletedEvent = new EventEmitter();
  SaveSpinnerStartEvent = new EventEmitter();
  SaveSpinnerStopEvent = new EventEmitter();
  ShowAddressComponentEvent = new EventEmitter();
  ShowSaveButtonEvent = new EventEmitter<boolean>();
  StartPolling = new EventEmitter();
  StartSaveSpinnerEvent = new EventEmitter();
  StopPollingTicker = new EventEmitter();
  settingSaveEvent: EventEmitter<object> = new EventEmitter();

  CloseErrorsPopup() {
    this.CloseErrorPopupEvent.emit();
  }
  NewArbiterRequestPost() {
    this.NewArbiterPost.emit();
  }
  TogglePolling() {
    this.StopPollingTicker.emit();
  }
  SaveCompleted() {
    this.SaveCompletedEvent.emit();
    this.StopSpinners;
  }
  ShowAddressComponent() {
    this.ShowAddressComponentEvent.emit();
  }
  ShowSaveButton(val: boolean) {
    this.ShowSaveButtonEvent.emit(val);
  }
  StartNavigationSpinner() {
    this.NavigationStartEvent.emit();
  }
  StartSaveSpinner() {
    this.StartSaveSpinnerEvent.emit();
  }
  StopNavigationSpinner() {
    setTimeout(() => {
      this.StopSpinners();
    }, 100);
  }
  StopSpinners() {
    this.SaveSpinnerStopEvent.emit();
    this.NavigationEndEvent.emit();
  }
}
