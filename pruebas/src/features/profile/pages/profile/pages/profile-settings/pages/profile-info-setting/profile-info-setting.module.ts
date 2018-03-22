import { NgModule } from "@angular/core"
import { IonicPageModule } from "ionic-angular"
import { ProfileInfoSettingPage } from "./profile-info-setting"

@NgModule({
  declarations: [ProfileInfoSettingPage],
  entryComponents: [ProfileInfoSettingPage],
  imports: [IonicPageModule.forChild(ProfileInfoSettingPage)]
})
export class ProfileInfoSettingPageModule {}