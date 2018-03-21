export const featureModuleTemplate = name => `import { NgModule } from "@angular/core"

@NgModule({
  declarations: [],
  entryComponents: [],
  exports: [],
  imports: [],
  providers: [],
  schemas: []
})
export class ${name}Module {}`
