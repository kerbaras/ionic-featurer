export const componentTemplate = (name, selector) =>
  `import { Component } from "@angular/core"

@Component({
  selector: "${selector}",
  templateUrl: "${selector}.component.html"
})
export class ${name}Component {}`