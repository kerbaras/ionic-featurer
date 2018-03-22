import { NgModule } from "@angular/core"
import { IonicPageModule } from "ionic-angular"
import { NotificationsPage } from "./notifications"

@NgModule({
  declarations: [NotificationsPage],
  entryComponents: [NotificationsPage],
  imports: [IonicPageModule.forChild(NotificationsPage)]
})
export class NotificationsPageModule {}