"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargonaut = require("yargonaut");
var yargs = require("yargs");
var FeatureCommand_1 = require("./commands/FeatureCommand");
yargonaut
    .style("blue")
    .style("yellow", "required")
    .helpStyle("green")
    .errorsStyle("red");
yargs
    .usage("Usage: $0 <command> [options]")
    .command(new FeatureCommand_1.FeatureCommand())
    .demandCommand(1)
    .strict()
    .alias("v", "version")
    .help("h")
    .alias("h", "help")
    .argv;
//# sourceMappingURL=index.js.map