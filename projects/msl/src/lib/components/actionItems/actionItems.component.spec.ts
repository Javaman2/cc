import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from "@angular/core/testing";
import { ActionItemsComponent } from "./actionItems.component";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { ChangeDetectorRef } from "@angular/core";

describe("ActionItemsComponent", () => {
  // console.info("Action Items Component Test");
  let component: ActionItemsComponent;
  let fixture: ComponentFixture<ActionItemsComponent>;
  let cdf: ChangeDetectorRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionItemsComponent, FaIconComponent],
      imports: [],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    component = getComponent();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(`should have these icons : ${getIcons()}`, () => {
    let icons = getIcons();
    icons.forEach((iconName) => {
      let value = component[iconName];
      expect(value).toBeTruthy();
    });
  });
  it("should have event emitters", () => {
    component.onDelete.subscribe((data) => {
      if (data != "yes") {
        console.log("actionItemsComponent Failure 450");
      }
    });
    component.onDelete.emit("yes");
    expect(component.onDelete).toBeTruthy();
  });

  function getComponent() {
    let loc = jasmine.createSpyObj("Location", ["back"]);
    let cdf: ChangeDetectorRef;
    let component = new ActionItemsComponent(cdf);
    return component;
  }
  function getIcons() {
    let component = getComponent();
    let keys = Object.keys(component);
    let icons = keys.filter((item) => item.includes("icon"));
    return icons;
  }
});
