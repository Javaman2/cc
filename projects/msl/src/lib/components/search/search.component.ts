import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "mg-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  @Input("Debug") debug: boolean = false;
  @Input("ShowClearButton") showClearButton: boolean = true;
  @Input("placeholder") placeholder: string = "Search";
  @Output("ClearSearchEvent") ClearSearchEvent: EventEmitter<
    null
  > = new EventEmitter();

  @Output("KeyUpEvent") KeyUpEvent: EventEmitter<
    HTMLInputElement
  > = new EventEmitter<HTMLInputElement>();
  @Output("SearchEvent") SearchEvent: EventEmitter<string> = new EventEmitter<
    string
  >();

  faSearch = faSearch;

  constructor() {}

  ngOnInit() {}
  onClearClicked(search) {
    if (this.debug) {
      this.log(search.value, "onClearClicked");
    }
    search.value = "";
    this.ClearSearchEvent.emit();
  }
  onSearchKeyUp(search, event) {
    if (this.debug) {
      this.log(search.value, `onSearchKeyUp ${event.code}:${search.value}`);
    }
    this.notifySearchEvent(event, search);
    this.KeyUpEvent.emit(search.value);
  }

  onSearchClicked(search) {
    if (this.debug) {
      this.log(search.value, `onSearchClicked${search.value}`);
    }
    if (!search.value) {
      setTimeout(() => {
        search.style.background = "";
      }, 1500);
      search.style.background = "lightPink";
      return;
    }

    this.notifySearch(search.value);
  }

  private notifySearchEvent(event: any, search: any) {
    if (this.debug) {
      this.log(search, `notifySearchEvent${search.value}`);
    }
    if (event.code === "Enter") {
      this.notifySearch(search.value);
    }
  }

  private notifySearch(search: any) {
    if (this.debug) {
      this.log(search.value, `notifySearch(${search.value}`);
      this.SearchEvent.emit(search.value);
    }
  }

  private log(search, event) {
    if (this.debug) {
      console.log({ SearchTerm: search, Event: event });
    }
  }
}
