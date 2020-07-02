import {
  Component,
  OnInit,
  Input,
  ElementRef,
  AfterViewInit,
} from "@angular/core";

@Component({
  selector: "mg-expander",
  templateUrl: "./expander.component.html",
  styleUrls: ["./expander.component.css"],
})
export class ExpanderComponent implements OnInit, AfterViewInit {
  @Input("title") title: string = "The input property title was not set.";
  @Input("width") width: string = "50em";
  constructor(private ele: ElementRef) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.ele.nativeElement.style.width = this.width;
  }
}
