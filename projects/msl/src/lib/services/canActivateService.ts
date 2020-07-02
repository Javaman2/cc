import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { EventService } from "../services/event.service";

@Injectable({
  providedIn: "root",
})
export class canActivateService implements CanActivate {
  user = "";
  constructor(private es: EventService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //return this.rs.getIdentityInfo();
    return true;
  }
}
