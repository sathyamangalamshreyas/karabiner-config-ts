import {
  ifVar,
  map,
  rule,
  to$,
} from 'karabiner.ts'

export function systemLayer() {
  return rule('System layer').manipulators([
    // System layer + P -> Shutdown
    map('p', '', 'any')
      .condition(ifVar('system_layer'))
      .toVar('system_layer', 0)
      .to$(
        "osascript -e 'tell application \"System Events\" to shut down'",
      ),

    // System layer + R -> Restart
    map('r', '', 'any')
      .condition(ifVar('system_layer'))
      .toVar('system_layer', 0)
      .to$(
        "osascript -e 'tell application \"System Events\" to restart'",
      ),

    // System layer + T -> Empty Trash
    map('t', '', 'any')
      .condition(ifVar('system_layer'))
      .toVar('system_layer', 0)
      .to$(
        "osascript -e 'tell application \"Finder\" to empty trash'",
      ),

    // System layer + L -> Lock Screen
    map('l', '', 'any')
      .condition(ifVar('system_layer'))
      .toVar('system_layer', 0)
      .to('q', ['left_control', 'left_command']),
  ])
}
