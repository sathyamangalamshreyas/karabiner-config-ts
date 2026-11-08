import {
  ifVar,
  map,
  rule,
} from 'karabiner.ts'

export function hyperRules() {
  return [
    // Caps Lock → custom Hyper: ⌃⇧⌥
    rule('Caps Lock → Hyper').manipulators([
      map('caps_lock', '', 'any')
        .to([
          {
            set_variable: {
              name: 'hyper_caps_lock',
              value: 1,
            },
          },
          {
            key_code: 'left_control',
            modifiers: ['left_shift', 'left_option'],
          },
        ])
        .toAfterKeyUp({
          set_variable: {
            name: 'hyper_caps_lock',
            value: 0,
          },
        }),
    ]),

    // Right Shift ×2 → Caps Lock
    rule('Right Shift ×2 → Caps Lock').manipulators([
      {
        type: 'basic',

        from: {
          key_code: 'right_shift',
          modifiers: {
            optional: ['any'],
          },
        },

        conditions: [
          {
            type: 'variable_if',
            name: 'right_shift_pressed',
            value: 1,
          },
        ],

        to: [
          {
            key_code: 'caps_lock',
            hold_down_milliseconds: 100,
          },
        ],
      },

      {
        type: 'basic',

        from: {
          key_code: 'right_shift',
          modifiers: {
            optional: ['any'],
          },
        },

        to: [
          {
            set_variable: {
              name: 'right_shift_pressed',
              value: 1,
            },
          },
          {
            key_code: 'right_shift',
            lazy: true,
          },
        ],

        to_delayed_action: {
          to_if_invoked: [
            {
              key_code: 'right_shift',
            },
            {
              set_variable: {
                name: 'right_shift_pressed',
                value: 0,
              },
            },
          ],

          to_if_canceled: [
            {
              set_variable: {
                name: 'right_shift_pressed',
                value: 0,
              },
            },
          ],
        },

        to_if_held_down: [
          {
            key_code: 'right_shift',
          },
        ],

        parameters: {
          'basic.to_if_held_down_threshold_milliseconds': 300,
          'basic.to_delayed_action_delay_milliseconds': 300,
        },
      },
    ]),

    // Hyper + A → Sticky Apps layer
    rule('Hyper → Apps layer').manipulators([
      map('a', '', 'any')
        .condition(ifVar('hyper_caps_lock'))
        .to([
          {
            set_variable: {
              name: 'apps_layer',
              value: 1,
            },
          },
          {
            set_variable: {
              name: 'system_layer',
              value: 0,
            },
          },
          {
            set_variable: {
              name: 'windows_layer',
              value: 0,
            },
          },
        ]),
    ]),

    // Hyper + S → Sticky System layer
    rule('Hyper → System layer').manipulators([
      map('s', '', 'any')
        .condition(ifVar('hyper_caps_lock'))
        .to([
          {
            set_variable: {
              name: 'apps_layer',
              value: 0,
            },
          },
          {
            set_variable: {
              name: 'system_layer',
              value: 1,
            },
          },
          {
            set_variable: {
              name: 'windows_layer',
              value: 0,
            },
          },
        ]),
    ]),

    // Hyper + W -> Sticky Windows layer
    rule('Hyper → Windows layer').manipulators([
      map('w', '', 'any')
        .condition(ifVar('hyper_caps_lock'))
        .to([
          {
            set_variable: {
              name: 'apps_layer',
              value: 0,
            },
          },
          {
            set_variable: {
              name: 'system_layer',
              value: 0,
            },
          },
          {
            set_variable: {
              name: 'windows_layer',
              value: 1,
            },
          },
        ]),
    ]),
  ]
}
