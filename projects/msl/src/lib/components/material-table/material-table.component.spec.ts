import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";

import { ActionItemsComponent } from "../actionItems/actionItems.component";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { MaterialTableComponent } from "./material-table.component";
import { SearchComponent } from "../search/search.component";

describe("MaterialTableComponent", () => {
  // console.info("Material Table Component Test");
  let component: MaterialTableComponent;
  let fixture: ComponentFixture<MaterialTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActionItemsComponent,
        FaIconComponent,
        MaterialTableComponent,
        SearchComponent,
      ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatTooltipModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    let EventService = jasmine.createSpyObj("EventService", ["dummy"]);
    let RestangularService = jasmine.createSpyObj("RestangularService", [
      "dummy",
    ]);
    let cdf = jasmine.createSpyObj("ChangeDetectorRef", ["dummy"]);

    component = new MaterialTableComponent(EventService, cdf);
  });

  it("should compile", () => {
    expect(component).toBeTruthy();
  });
  it("should have no datasource data", () => {
    expect(component.dataSource.data.length).toBe(0);
  });
  it("show state should be false", () => {
    expect(component.show).toBe(false);
  });
  it("should show backIcon", () => {
    expect(component.showBackIcon).toBe(true);
  });
  it("should show deleteIcon", () => {
    expect(component.showDeleteIcon).toBe(true);
  });
  it("should show editIcon", () => {
    expect(component.showEditIcon).toBe(true);
  });
  it("should show saveIcon", () => {
    expect(component.showSaveIcon).toBe(true);
  });
});
