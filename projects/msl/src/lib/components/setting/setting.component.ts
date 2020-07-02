import { EventService } from "../../services/event.service";
import { HtmlElementService } from "../../services/html-element-service.service";

import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Input,
  AfterViewInit,
  Output,
  EventEmitter,
} from "@angular/core";
import { Setting } from "./settings";
import { text } from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: "mg-setting",
  templateUrl: "./setting.component.html",
  styleUrls: ["./setting.component.css"],
})
/**Each Setting automatically renders GUI based on input tags or label tags, originally designed for System and User settings, it now supports
 * any business object. E.G. See the settings-grid component
 */
export class SettingComponent implements OnInit, AfterViewInit {
  @Input("setting") setting: Setting;
  @Input("index") index = 0;
  /**Notifies user of this component when settings change */
  @Output("settingChangedEvent") settingChangedEvent: EventEmitter<
    Setting
  > = new EventEmitter();

  constructor(
    private es: EventService,
    private hts: HtmlElementService,
    private cdf: ChangeDetectorRef
  ) {}
  // HTML Bindings
  // Can be an array or single value can be one or more values
  currentValue;
  // is this an input select or label?
  currentType;
  // For HTMLSelectElement(s) options
  currentOptions;

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.setCurrentValues();
    }, 50);
  }
  private setCurrentValues() {
    try {
      this.currentType = this.setting.types[this.index];
      this.currentOptions = this.setting.settingOptions;
      this.currentValue = this.setting.values[this.index];
      if (this.setting.types.includes("multiselect")) {
        try {
          //this handles multi pre selected values
          this.currentValue = JSON.parse(this.setting.values[this.index]);
        } catch (error) {
          //this is a multiselect with just one value pre-selected, ok to proceed as value was already set.
        }
      }
    } catch (error) {
      console.log({ SettingComponent: error });
    }
  }
  /**Caller must subscribe to settingChangedEvent in EventService, to get all changes */
  notifyChange(changedSetting: Setting) {
    this.settingChangedEvent.emit(changedSetting);
    // console.log({
    //    ChangedSetting: changedSetting,
    //    SettingComponent:
    //       "To listen for changes subscribe to the settingChangedEvent found in EventService",
    //    EventService: EventService,
    // });
  }
  onCheckBoxChanged(checkBox, setting) {
    setting.values = [checkBox.checked];
    this.notifyChange(setting);
  }
  onDateTimeChanged(element: HTMLInputElement, setting) {
    setting.values = [element.value];
    this.notifyChange(setting);
  }
  onDurationChanged(element: HTMLInputElement, setting) {
    setting.values = [element.value];
    this.notifyChange(setting);
  }
  onGetSelected(opt) {
    let contains = JSON.stringify(this.currentValue).includes(opt);
    return contains;
  }
  onFocus(textEle: HTMLInputElement, setting) {
    textEle.selectionStart = 0;
    textEle.selectionEnd = textEle.value.length;
    textEle.select();
  }

  onSelectOptionChanged(element: HTMLSelectElement, setting: Setting) {
    let values = Array.from(element.selectedOptions).map((item) => item.text);
    setting.values = values;
    this.notifyChange(setting);
  }
  onRadioChanged(element: HTMLInputElement, setting) {
    setting.values = [element.checked];
    this.notifyChange(setting);
  }

  onTextChanged(element: HTMLInputElement, setting) {
    setting.values = [element.value];
    this.notifyChange(setting);
  }
  /**Sets the remaining characters allowed for text input */
  onTextKeyUp(
    element: HTMLInputElement,
    setting: Setting,
    groupName?,
    settings?
  ) {
    this.setRemainingCharacters(setting, element);
  }

  private setRemainingCharacters(setting: Setting, element: HTMLInputElement) {
    if (!setting.size) {
      setting.size = "200";
    }
    setting.remainingChars =
      Number.parseInt(setting.size) - element.value.length;
    if (setting.remainingChars < 0) {
      element.style.background = "red";
      setting.values[0] = setting.values[0].substring(
        0,
        Number.parseInt(setting.size)
      );
      setTimeout(() => {
        element.style.background = "";
        setting.remainingChars =
          Number.parseInt(setting.size) - element.value.length;
      }, 1000);
    } else {
      element.style.background = "";
    }
    this.cdf.detectChanges();
  }
}
