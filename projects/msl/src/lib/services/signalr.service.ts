import { Injectable, EventEmitter, inject } from "@angular/core";
import * as signalR from "@microsoft/signalr";
import { getPackedSettings } from "http2";
import { from, Observable, Subscription } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SignalRService {
  constructor() {}
  data: any;

  private hubConnection: signalR.HubConnection;
  public startConnection = () => {
    this.connect();
    this.hubConnection.on("newData", (data) => {
      this.data;
      console.log(data);
    });
  };

  private connect() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:8180/Hub/ClientStatus")
      .configureLogging(signalR.LogLevel.Debug)
      .build();
    console.log({ hubConnectionObject: this.hubConnection });

    this.hubConnection.start().catch((err) =>
      console.log({
        SignalRService: "Error while starting connection: ",
        Error: err,
      })
    );
  }
}
