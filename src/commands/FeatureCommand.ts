import { pascalCase, paramCase } from "change-case"
import * as path from "path"
import * as utils from "./utils"

export class FeatureCommand {
  command = "generate:feature"
  describe = "Creates a new feature."

  builder(yargs: any) {
    return yargs
      .option("n", {
        alias: "name",
        describe: "Name of the feature.",
        demand: true
      })
      .option("d", {
        alias: "dir",
        describe: "Directory where the feature should be created."
      })
  }

  async handler(argv: any) {
    let directory = argv.dir
    if(!directory)
        directory = "./src"

    const name = pascalCase(argv.name)
    const selector = paramCase(name)
    const folders = ["assets", "components", "models", "services", "pages"]

    for (const folder in folders) {
        console.log(path.join(directory, 'features', selector, folder))
    }
  }
}
