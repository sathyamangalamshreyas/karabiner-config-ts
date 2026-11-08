import { writeToProfile } from "karabiner.ts";

import { hyperRules } from "./layers/hyper";
import { appLayer } from "./layers/apps";
import { systemLayer } from "./layers/system";
import { windowsLayer } from "./layers/windows";

writeToProfile("main", [
  ...hyperRules(),
  appLayer(),
  systemLayer(),
  windowsLayer(),
]);
