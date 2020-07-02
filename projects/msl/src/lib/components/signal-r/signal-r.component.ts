import {
  Component,
  OnInit,
  AfterViewChecked,
  AfterViewInit,
} from "@angular/core";
import { SignalRService } from "../../services/signalr.service";

@Component({
  selector: "mg-signal-r",
  templateUrl: "./signal-r.component.html",
  styleUrls: ["./signal-r.component.css"],
})
export class SignalRComponent implements OnInit, AfterViewInit {
  constructor(private sr: SignalRService) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.sr.startConnection();
  }
}
