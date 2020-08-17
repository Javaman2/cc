import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatExpansionModule } from "@angular/material/expansion";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";




import { NgModule } from "@angular/core";
import { MslComponent } from "./msl.component";
import { ActionItemsComponent } from "../lib/components/actionItems/actionItems.component";
import { ButtonComponent } from "../lib/components/button/button.component";
import { DialogComponent } from "../lib/components/dialog/dialog.component";
import { MessageComponent } from "../lib/components/dialog/message/message.component";
import { ErrorHandlerComponent } from "../lib/components/error-handler/error-handler.component";
import { ErrorsComponent } from "../lib/components/errors/errors.component";
import { ExpanderComponent } from "../lib/components/expander/expander.component";
import { MaterialTableComponent } from "../lib/components/material-table/material-table.component";
import { SearchComponent } from "../lib/components/search/search.component";
import { SettingComponent } from "../lib/components/setting/setting.component";
import { SignalRComponent } from "../lib/components/signal-r/signal-r.component";
import { DialogService } from "../lib/services/dialog.service";
import { EventService } from "../lib/services/event.service";
import { HtmlElementService } from "../lib/services/html-element-service.service";
import { SignalRService } from "../lib/services/signalr.service";

@NgModule({
  declarations: [
    MslComponent,
    ActionItemsComponent,
    ButtonComponent,
    DialogComponent,
    MessageComponent,
    ErrorHandlerComponent,
    ErrorsComponent,
    ExpanderComponent,
    MaterialTableComponent,
    SearchComponent,
    SettingComponent,
    SignalRComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    MatDialogModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  exports: [
    MslComponent,
    ActionItemsComponent,
    ButtonComponent,
    DialogComponent,
    MessageComponent,
    ErrorHandlerComponent,
    ErrorsComponent,
    ExpanderComponent,
    MaterialTableComponent,
    SearchComponent,
    SettingComponent,
    SignalRComponent,
  ],
  providers: [DialogService, EventService, HtmlElementService, SignalRService],
})
export class MslModule {}
