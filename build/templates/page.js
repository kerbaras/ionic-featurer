"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageComponentTemplate = function (name, selector) {
    return "import { IonicPage } from \"ionic-angular\"\nimport { Component } from \"@angular/core\"\n\n@IonicPage()\n@Component({\n  templateUrl: \"" + selector + ".html\"\n})\nexport class " + name + "Page {}";
};
exports.pageModuleTemplate = function (name, selector) {
    return "import { NgModule } from \"@angular/core\"\nimport { IonicPageModule } from \"ionic-angular\"\nimport { " + name + "Page } from \"./" + selector + "\"\n\n@NgModule({\n  declarations: [" + name + "Page],\n  entryComponents: [" + name + "Page],\n  imports: [IonicPageModule.forChild(" + name + "Page)]\n})\nexport class " + name + "PageModule {}";
};
exports.pageHtmlTemplate = function (name) {
    return "<ion-header>\n  <ion-navbar>\n    <ion-title>" + name + "</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n</ion-content>\n";
};
exports.pageScssTemplate = function (selector) {
    return selector + " {\n}";
};
//# sourceMappingURL=page.js.map