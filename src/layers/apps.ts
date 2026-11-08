import { ifVar, map, rule } from "karabiner.ts";

export function appLayer() {
  return rule("Apps layer").manipulators([
    // Apps layer + T → rcmd: Right Command + T -> Terminal
    map("t", "", "any")
      .condition(ifVar("apps_layer"))
      .toVar("apps_layer", 0)
      .to("t", ["right_command"]),

    // Apps layer + Z → rcmd: Right Command + Z -> Zed Editor
    map("z", "", "any")
      .condition(ifVar("apps_layer"))
      .toVar("apps_layer", 0)
      .to("z", ["right_command"]),

    // Apps layer + B → rcmd: Right Command + B -> Zen Browser
    map("b", "", "any")
      .condition(ifVar("apps_layer"))
      .toVar("apps_layer", 0)
      .to("b", ["right_command"]),

    // Apps layer + K → rcmd: Right Command + K -> KeePassXC
    map("k", "", "any")
      .condition(ifVar("apps_layer"))
      .toVar("apps_layer", 0)
      .to("k", ["right_command"]),

    // Apps layer + M → rcmd: Right Command + M -> Apple Mail
    map("m", "", "any")
      .condition(ifVar("apps_layer"))
      .toVar("apps_layer", 0)
      .to("m", ["right_command"]),

    // Apps layer + S → rcmd: Right Command + S -> Shottr
    map("s", "", "any")
      .condition(ifVar("apps_layer"))
      .toVar("apps_layer", 0)
      .to("s", ["right_command"]),

    // Apps layer + N → rcmd: Right Command + N -> Stickier Note
    map("n", "", "any")
      .condition(ifVar("apps_layer"))
      .toVar("apps_layer", 0)
      .to("n", ["right_command"]),

    // Apps layer + O → rcmd: Right Command + O -> Obsidian
    map("o", "", "any")
      .condition(ifVar("apps_layer"))
      .toVar("apps_layer", 0)
      .to("o", ["right_command"]),

    // Apps layer + R → rcmd: Right Command + R -> Raindrop io
    map("r", "", "any")
      .condition(ifVar("apps_layer"))
      .toVar("apps_layer", 0)
      .to("r", ["right_command"]),
  ]);
}
