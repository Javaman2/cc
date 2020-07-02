import { HttpRequest, HttpErrorResponse } from "@angular/common/http";

export class ErrorModel {
  status: number;
  statusText: string;
  name: string;
  url: string;
  nextStep: string;
  message: string;
  stackTraceMessage: string;
  stackTrace: string;
  innerStackTraceMessage: string;
  innerStackTrace: string;
  request: HttpRequest<any>;
  retry: boolean;
  showYesButton: boolean = false;
  showNoButton: boolean = false;
  showStackTrace: boolean = false;

  constructor(error: HttpErrorResponse) {
    if (typeof error === "boolean") {
      return;
    }
    let nl = /[\r]+/g;
    this.status = error.status;
    this.statusText = error.statusText;
    this.name = error.name;
    this.url = error.url;
    this.message = error.message;
    //this.nextStep = error.nextStep;
    if (error.error) {
      if (!this.setStackTraceInfo(error, nl)) {
        this.statusText += " " + error.error;
      }
    }
    //this.request = error.request;
    //error.retry = true;
    // error.showYesButton
    //   ? (this.showYesButton = true)
    //   : (this.showYesButton = false);
    // error.showNoButton
    //   ? (this.showNoButton = true)
    //   : (this.showNoButton = false);

    this.parseError();
  }
  setStackTraceInfo(error: any, nl: RegExp) {
    let set = false;
    if (error.error.StackTrace) {
      this.stackTrace = error.error.StackTrace.replace(nl, "");
      this.stackTraceMessage = error.error.Message;
      this.showStackTrace = true;
      set = true;
    }
    if (error.error.StackTraceInner) {
      this.innerStackTrace = error.error.StackTraceInner.replace(nl, "");
      this.innerStackTraceMessage = error.error.StackTraceInner.Message;
      this.showStackTrace = true;
      set = true;
    }
    if (error.error.message) {
      this.message = error.error.message;
      set = true;
    }
    return set;
  }

  static Create(error) {
    let em = new ErrorModel(error);
    return em;
  }

  //  knownDBErrors() {
  //    //what,when,how to fix
  //    var dbs001 = [
  //       "Data may have been modified or deleted since entities were loaded.",
  //       "Occurs when backend changed without front end knowing",
  //       "Refresh the frontend"
  //    ];
  //    var dbs002 = [
  //       "403 Forbidden-You don't have authorization to view this page",
  //       "Navigating to : /Identity/Info",
  //       "Add this user to the authorization list.../debug/addAdmin"
  //    ];
  // }
  parseError() {
    switch (this.status) {
      case 0: {
        this.nextStep =
          "A status code of zero could mean 1) Authorization : check status above 2) The Server is not running or 3) The Server is having other issues";
      }
      case 403: {
        if (this.statusText == "Forbidden") {
          this.nextStep =
            "Contact your Administrator, you are not a part of the group granted access to this endpoint";
        }
      }
    }
  }
}
