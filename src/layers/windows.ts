import {
  ifVar,
  map,
  rule,
} from 'karabiner.ts'

export function windowsLayer() {
  return rule('Windows layer').manipulators([
    // Windows layer + H -> Rectangle: Left Half
    map('h', '', 'any')
      .condition(ifVar('windows_layer'))
      .toVar('windows_layer', 0)
      .to('left_arrow', ['left_control', 'left_option']),

    // Windows layer + L -> Rectangle: Right Half
    map('l', '', 'any')
      .condition(ifVar('windows_layer'))
      .toVar('windows_layer', 0)
      .to('right_arrow', ['left_control', 'left_option']),

    // Windows layer + M -> Rectangle: Maximize
    map('m', '', 'any')
      .condition(ifVar('windows_layer'))
      .toVar('windows_layer', 0)
      .to('return_or_enter', ['left_control', 'left_option']),

    // Windows layer + C -> Rectangle: Center
    map('c', '', 'any')
      .condition(ifVar('windows_layer'))
      .toVar('windows_layer', 0)
      .to('c', ['left_control', 'left_option']),

    // Windows layer + R -> Rectangle: Restore
    map('r', '', 'any')
      .condition(ifVar('windows_layer'))
      .toVar('windows_layer', 0)
      .to('delete_or_backspace', ['left_control', 'left_option']),
  ])
}
