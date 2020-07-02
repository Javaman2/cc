import { HtmlElementService } from "../../services/html-element-service.service";

import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpErrorResponse } from "@angular/common/http";
import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ElementRef,
  Inject,
} from "@angular/core";

@Component({
  selector: "mg-errors",
  templateUrl: "./error-handler.component.html",
  styleUrls: ["./error-handler.component.css"],
})
export class ErrorHandlerComponent implements OnInit, AfterViewInit {
  error: HttpErrorResponse;
  errorKeys: string[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: ElementRef,
    private HtmlElementService: HtmlElementService
  ) {
    this.error = data;
  }
  copyToClipboard() {
    let ele = this.ref.nativeElement as HTMLElement;
    let div = ele.querySelector("div");
    this.HtmlElementService.copyToClipBoardWithAck(div);
  }
  close() {}
  ngOnInit(): void {}
  ngAfterViewInit() {}
}
