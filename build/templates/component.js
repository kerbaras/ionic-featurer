"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentTemplate = function (name, selector) {
    return "import { Component } from \"@angular/core\"\n\n@Component({\n  selector: \"" + selector + "\",\n  templateUrl: \"" + selector + ".component.html\"\n})\nexport class " + name + "Component {}";
};
//# sourceMappingURL=component.js.map