import { NgModule } from "@angular/core"
import { IonicPageModule } from "ionic-angular"
import { ProfileSettingsPage } from "./profile-settings"

@NgModule({
  declarations: [ProfileSettingsPage],
  entryComponents: [ProfileSettingsPage],
  imports: [IonicPageModule.forChild(ProfileSettingsPage)]
})
export class ProfileSettingsPageModule {}