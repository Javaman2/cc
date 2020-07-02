import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
  ElementRef,
} from "@angular/core";
import { inject } from "@angular/core/testing";

@Component({
  selector: "mg-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"],
})
export class MessageComponent implements OnInit, AfterViewInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ele: ElementRef
  ) {
    // get the injected dialog data
    this.data = data;
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
    (this.ele.nativeElement as HTMLElement).scrollIntoView();
  }
}
