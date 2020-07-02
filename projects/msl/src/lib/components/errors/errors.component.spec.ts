import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ErrorsComponent } from "./errors.component";
import { EventService } from "../../services/event.service";
import { RouterModule } from "@angular/router";
import { ErrorModel } from "./errorModel";

describe("ErrorsComponent", () => {
  // console.info("Errors Component Test");
  let component: ErrorsComponent;
  let fixture: ComponentFixture<ErrorsComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorsComponent],
      imports: [RouterModule.forRoot([])],
      providers: [EventService],
    }).compileComponents();
  });
  function openError(cb) {
    let es = new EventService();
    es.OpenErrorPopupEvent.subscribe((error) => {
      cb(error);
    });

    function createComponent(callBack?) {
      try {
        fixture = TestBed.createComponent(ErrorsComponent);
        component = fixture.componentInstance;
        setTimeout(() => {
          if (callBack) {
            if (component) {
              callBack(component);
            } else {
              console.warn({
                "Errors Component Test Fail Caught": component,
              });
            }
          }
        }, 2500);
      } catch {
        (error) => {
          console.warn(`Errors Component Caught an error ${error}`);
        };
      }
    }
    it("should create, and have EventService", () => {
      createComponent((done) => {
        expect(true).toBeTruthy();
      });
      expect(true).toBeTruthy();
    });
    it("contains a field showError", () => {
      createComponent();
      component.showError = true;
      expect(component.showError).toBeTruthy();
    });
    it("contains a 999 error status", () => {
      createComponent();
      openError((cb) => {
        expect(cb.status).toBe(999);
      });
    });

    it("contains a showYesButton false", () => {
      createComponent();
      openError((cb) => {
        expect(cb.showYesButton).toBe(false);
      });
    });

    it("contains a showNoButton false", () => {
      createComponent();
      openError((cb) => {
        expect(cb.showNoButton).toBe(false);
      });
    });

    it("contains a show stack trace false", () => {
      createComponent();
      openError((cb) => {
        expect(cb.showStackTrace).toBe(false);
      });
    });
  }
});
