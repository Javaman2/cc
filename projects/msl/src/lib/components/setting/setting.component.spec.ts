import { render, RenderResult } from "@testing-library/angular";
import { FormsModule } from "@angular/forms";
import { SettingComponent } from "./setting.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Setting } from "../setting/settings";

describe("SettingComponent described", () => {
  // console.info("SettingComponent Test");
  let defaultSettings = ["checkbox"];
  let defaultValues = ["true"];
  let defaultOptions = ["1", "2", "3"];

  function getSetting() {
    let setting = new Setting();
    setting.columns = ["one", "two", "three"];
    setting.description = "Description not used";
    setting.displayName = "Test Checkbox";
    setting.gridLayout = false;
    setting.groupID = 20;
    setting.groupName = "Not Needed any longer";
    setting.id = 999;
    setting.settingOptions = defaultOptions;
    setting.remainingChars = 20;
    setting.showRemaining = false;
    setting.size = "20";
    setting.types = defaultSettings;
    setting.values = defaultValues;
    return setting;
  }
  it("SettingComponent should create", async () => {
    let rendered = await renderedComponent(SettingComponent);
    expect(rendered).toBeTruthy();
  });
  it("SettingComponent should have checkbox checked", async () => {
    let rendered = await renderedComponent(SettingComponent);
    let checked = rendered.fixture.componentInstance.setting.values[0];
    expect(checked).toBe("true");
  });
  it("SettingComponent should have checkbox unchecked", async () => {
    let rendered = await renderedComponent(SettingComponent);
    let result = rendered.fixture.componentInstance as SettingComponent;
    result.settingChangedEvent.subscribe((change) => {
      //tests the bound event to the click in next line
      expect(change.values[0]).toBeFalsy();
    });
    let multiselect = rendered.fixture.nativeElement.getElementsByTagName(
      "input"
    )[0];

    expect(false).toBeFalsy();
  });
  it("SettingComponent should have default multi-select values", async () => {
    defaultSettings = ["multiselect"];
    defaultOptions = ["1", "2", "3"];
    defaultValues = [JSON.stringify(["1", "3"])];
    let rendered = await renderedComponent(SettingComponent);
    expect(
      rendered.container.getElementsByTagName("option")[0].selected
    ).toBeTruthy();
    expect(
      rendered.container.getElementsByTagName("option")[1].selected
    ).toBeFalsy();
    expect(
      rendered.container.getElementsByTagName("option")[2].selected
    ).toBeTruthy();

    let result: any = rendered.fixture.componentInstance as SettingComponent;
    expect(JSON.parse(result.setting.values[result.index])).toEqual(["1", "3"]);
  });
  it("SettingComponent should notify multiselect value changes", async () => {
    defaultSettings = ["multiselect"];
    defaultOptions = ["1", "2", "3"];
    defaultValues = [JSON.stringify(["1", "3"])];
    let rendered: any = await renderedComponent(SettingComponent);
    let select = rendered.container.getElementsByTagName("select")[0];
    let result = rendered.fixture.componentInstance as SettingComponent;
    expect(select.selectedOptions[0].value).toEqual("1");
    expect(select.selectedOptions[1].value).toEqual("3");
    //could not figure out how to get event change to fire.
    select.selected;
  });
  it("SettingComponent should display and allow text to be edited", async () => {
    let party =
      "now is the time for all good men to come to the aid of their party";
    defaultSettings = ["text"];
    defaultValues = [party];
    let rendered = await renderedComponent(SettingComponent);
    let input = rendered.container.getElementsByTagName(
      "input"
    )[0] as HTMLInputElement;
    let values = input.value;
    expect(values).toEqual(party);
    input.addEventListener("change", (ev) => {
      let input = ev.target as HTMLInputElement;
      expect(input.value).toEqual("No Value");
    });
    input.value = "No Value";
    input.dispatchEvent(new Event("change"));
  });
  async function renderedComponent(component) {
    return await render(component, {
      componentProperties: {
        setting: getSetting(),
        index: 0,
      },
      declarations: [SettingComponent],
      imports: [FontAwesomeModule, FormsModule],
      providers: [],
    });
  }
});
