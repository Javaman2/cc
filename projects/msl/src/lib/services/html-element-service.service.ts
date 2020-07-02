import { Injectable } from "@angular/core";

import { min } from "rxjs/operators";
import { ClassField } from "@angular/compiler";
import { elementEventFullName } from "@angular/compiler/src/view_compiler/view_compiler";

@Injectable({
  providedIn: "root",
})
/**Any HTMLElement manipulation requires caller to implement  'this.ChangeDetectorRef.detectChanges();' */
export class HtmlElementService {
  animateWithAck(
    event: any,
    animationName: string,
    ackText: string,
    delay?: number
  ) {
    delay = delay ? delay : 1500;
    var element = event.target as HTMLElement;
    this.animateElementWithAck(element, animationName, ackText, delay);
  }

  animateElementWithAck(
    element: HTMLElement,
    animationName: string,
    ackText: string,
    delay: number = 1500
  ) {
    let origText = element.textContent;
    let classes = Array.from(element.classList);
    element.classList.remove(animationName);
    element.classList.add(animationName);
    element.textContent = ackText;
    setTimeout(() => {
      element.textContent = origText;
      element.classList.remove(animationName);
      classes.map((item) => {
        element.classList.add(item);
      });
    }, delay);
  }
  //**document exec copy command using trickery*/
  copyToClipBoard(element: HTMLElement) {
    const el = document.createElement("textarea");
    el.value = element.textContent;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }

  copyToClipBoardWithAck(ele: HTMLElement, delay?) {
    this.copyToClipBoard(ele);
    this.animateElementWithAck(
      ele,
      "animate-opacity",
      "Copied to Clipboard",
      delay
    );
  }
  //** determines is class is in the class list */
  classContains(ele: HTMLElement, classString: string) {
    return ele.getAttribute("class").includes(classString);
  }
  //**Only changes opacity */
  disableElement(ele: HTMLDivElement) {
    ele.style.opacity = ".3";
  }
  //**changes opacity to default */
  enableElement(ele: HTMLDivElement) {
    ele.style.opacity = "default";
  }
  constructor() {}
  /**Changes element className to 'alert; don't forget this call on return  'this.ChangeDetectorRef.detectChanges(); */
  SetHTMLElementAlert(ele) {
    ele.className = "alert";
  }
  ResetHTMLElementAlert(ele) {
    ele.className = "";
  }
  /**Changes element className to 'alert'; don't forget this call on return  'this.ChangeDetectorRef.detectChanges(); */
  SetInputElementAlertWhenEmpty(event: any) {
    var ele = event.target as HTMLInputElement;
    ele.className = "";
    if (!ele.value) {
      this.SetHTMLElementAlert(ele);
    }
  }
  //**Removes class flashElement voids offset width, adds transparency in */
  flashElement(ele: HTMLElement) {
    if (!ele) return;
    try {
      ele.classList.remove("flashElement");
    } catch (err) {}
    // needed to reset element
    void ele.offsetHeight;
    ele.classList.add("flashElement");
  }
  //**Will change background to list pink for 1 second */
  flashWarning(elementID: string) {
    let ele = document.getElementById(elementID);
    ele.style.background = "lightPink";
    setTimeout(() => {
      ele.style.background = "";
    }, 1000);
  }
  //**Replace TextContent with text for time, default text:'Copied...' time:1500 */
  flashText(element: HTMLElement, text: string = "Copied...", time = 1500) {
    let html = element.innerHTML;
    element.textContent = text;
    setTimeout(() => {
      element.innerHTML = html;
    }, time);
  }
  HideElement(ele: HTMLElement): HTMLElement {
    ele.style.display = "none";
    return ele;
  }
  ShowElement(ele: HTMLElement): HTMLElement {
    ele.style.display = "block";
    return ele;
  }
  //**returns as hours:minutes dd/mm/yyyy*/
  dateToText(date) {
    if (!date) return;
    var { day, month, year, hours, minutes } = this.getDate(date);
    let mdy = [month, day, year].join("/");
    let result = `${hours}:${minutes} ${mdy}`;
    //"2020-05-01T10:20" (works for input type[datetime-local])
    return result;
  }
  //** deconstructs date to it's relative parts */
  private getDate(date: any) {
    var d = new Date(date),
      month = (d.getMonth() + 1).toString(),
      day = d.getDate().toString(),
      year = d.getFullYear().toString(),
      hours = d.getHours().toString(),
      minutes = d.getMinutes().toString();
    if (month.length < 2) month = "0" + month;
    if (hours.length < 2) hours = "0" + hours;
    if (minutes.length < 2) minutes = "0" + minutes;
    if (day.length < 2) day = "0" + day;
    return { day, month, year, hours, minutes };
  }
  getDateTimeString(date: any) {
    let { day, month, year, hours, minutes } = this.getDate(date);
    let formattedDate = `${month}/${day}/${year} ${hours}:${minutes}`;
    return formattedDate;
  }

  /**When restangular returns a result it appends 45+ properties, this removes them */
  removeRestangularFields(object) {
    if (!object) return;
    delete object["allUrl"];
    delete object["fromServer"];
    delete object["putElement"];
    delete object["addRestangularMethod"];
    delete object["all"];
    delete object["clone"];
    delete object["customDELETE"];
    delete object["customGET"];
    delete object["customGETLIST"];
    delete object["customOperation"];
    delete object["customPATCH"];
    delete object["customPOST"];
    delete object["customPUT"];
    delete object["description"];
    delete object["doDELETE"];
    delete object["doGET"];
    delete object["doGETLIST"];
    delete object["doPATCH"];
    delete object["doPOST"];
    delete object["doPUT"];
    delete object["get"];
    delete object["getList"];
    delete object["getParentList"];
    delete object["getRequestedUrl"];
    delete object["getRestangularUrl"];
    delete object["head"];
    delete object["one"];
    delete object["oneUrl"];
    delete object["options"];
    delete object["parentResource"];
    delete object["patch"];
    delete object["plain"];
    delete object["post"];
    delete object["put"];
    delete object["remove"];
    delete object["reqParams"];
    delete object["restangularCollection"];
    delete object["restangularized"];
    delete object["route"];
    delete object["save"];
    delete object["several"];
    delete object["trace"];
    delete object["withHttpConfig"];
    return object;
  }
}
