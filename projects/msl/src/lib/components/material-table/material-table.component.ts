import {
  Component,
  ViewChild,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
  EventEmitter,
  Output,
  Input,
  ViewChildren,
} from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource, MatTable } from "@angular/material/table";
import { EventService } from "../../services/event.service";
import { ActionItemsComponent } from "../actionItems/actionItems.component";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: "mg-material-table",
  templateUrl: "./material-table.component.html",
  styleUrls: ["./material-table.component.css"],
})
export class MaterialTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) MatTable: MatTable<any>;
  @ViewChild(SearchComponent)
  SearchComponent: SearchComponent;
  @ViewChildren(ActionItemsComponent)
  ActionItemsComponents: ActionItemsComponent[];

  filter: string;

  constructor(
    private EventService: EventService,
    private cdf: ChangeDetectorRef
  ) {}

  //** The data to inject */
  @Input() dataSource = new MatTableDataSource<any>();
  //** Material requires names of the columns to display */
  @Input() displayedColumns: string[];
  //** A presentable version of displayed columns */
  @Input() columnHeaders: string[];
  //** Default page size is 5 */
  @Input() pageSize = 5;
  //** Default is false */
  @Input() show = false;
  //** Default is true */
  @Input() showBackIcon = true;
  //** Default is true */
  @Input() showDeleteIcon = true;
  //** Default is true */
  @Input() showEditIcon = true;
  //** Default is true */
  @Input() showSaveIcon = true;
  //** Subscribe to this event to know what clicked */
  @Output() onActionItemsDeleteClickedEvent = new EventEmitter<any>();
  //** Subscribe to this event to know what clicked */
  @Output() onActionItemsEditClickedEvent = new EventEmitter<any>();
  //** Subscribe to this event to know what clicked */
  @Output() onActionItemsSaveClickedEvent = new EventEmitter<any>();
  //** Subscribe to this event to know what clicked */
  @Output() onRowClickedEvent = new EventEmitter<any>();

  ngAfterViewInit() {
    setTimeout(() => {
      this.EventService.StopNavigationSpinner();
    }, 1000);
    if (this.dataSource && this.displayedColumns && this.columnHeaders) {
      this.setData(this.dataSource);
    }
  }

  ngOnInit() {}

  getContent(thing, colIndex) {
    let data = thing[this.displayedColumns[colIndex]];
    return data;
  }

  hookEvents() {
    this.SearchComponent.ClearSearchEvent.subscribe(() => {
      this.filter = this.dataSource.filter = "";
      this.cdf.detectChanges();
    });
    this.SearchComponent.KeyUpEvent.subscribe((search) => {
      this.filter = this.dataSource.filter = search;
      this.cdf.detectChanges();
    });
    this.SearchComponent.SearchEvent.subscribe((search) => {
      this.filter = this.dataSource.filter = search;
      this.cdf.detectChanges();
    });
  }
  onButtonClick(thing, event) {}
  onEdit(event) {
    this.onActionItemsEditClickedEvent.emit(event);
  }
  onGetThing(thing) {}
  onSave(event) {
    this.onActionItemsSaveClickedEvent.emit(event);
  }
  onDelete(event) {
    this.onActionItemsDeleteClickedEvent.emit(event);
  }

  onSearchChanged(search, event) {
    this.filter = search.value;
    this.dataSource.filter = this.filter;
    this.cdf.detectChanges();
  }

  onResetFilter() {
    this.dataSource.filter = null;
  }
  onRowClicked(row) {
    this.onRowClickedEvent.emit(row);
  }
  //** Adds data to the the top of the grid */
  addToTop(row) {
    if (this.dataSource.data.length === 0) {
      this.dataSource.data = [row];
      this.showTable();
      return;
    } else {
      this.dataSource.data.unshift(row);
    }
    this.dataSource.data = [...this.dataSource.data];
    this.showTable();
  }
  //** resets the immutable data to show this data */
  update(data) {
    this.dataSource.data = data;
    this.dataSource.data = [...this.dataSource.data];
    this.showTable();
  }
  private showTable() {
    this.show = true;
    this.cdf.detectChanges();
  }
  //** Set the table's context and pagination details */
  setData(context) {
    setTimeout(() => {
      //allow change detector to run
      this.show = true;
      this.cdf.detectChanges();
      this.paginator.length = context.length;
      this.paginator.pageSize = this.pageSize;
      this.dataSource = new MatTableDataSource<any>();
      this.dataSource.data = context;
      this.dataSource.filter = this.filter;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.pipePaginator();
      this.hookEvents();
    }, 50);
  }

  private pipePaginator() {
    this.paginator.page.subscribe((pe) => {
      let data: PageEvent = pe;
      this.dataSource.filter = null;
      let start = data.pageIndex * data.pageSize;
      let end = start + data.pageSize;
    });
  }
}
