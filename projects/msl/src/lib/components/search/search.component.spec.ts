import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SearchComponent } from "./search.component";

describe("SearchComponent", () => {
   // console.info("Search Component Test");
   let component: SearchComponent;
   let fixture: ComponentFixture<SearchComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [SearchComponent],
         imports: [FontAwesomeModule],
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(SearchComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it("should create", () => {
      expect(component).toBeTruthy();
   });
});
