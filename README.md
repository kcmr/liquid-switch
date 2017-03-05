# `<liquid-switch>`

_[Demo and API docs]()_

`<liquid-switch>` is a custom element that acts as a checkbox and has the appearance of a switch.

<!---
```html
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="liquid-switch.html">
    <style is="custom-style">
    liquid-switch {
      font-family: sans-serif;
      max-width: 300px;
      background-color: rgb(228, 225, 214);
      border-radius: 2px;
      padding: 10px;
    }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<liquid-switch checked>Switch label</liquid-switch>
```

## Installation and usage

1. Install the component using [Bower](http://bower.io/):
  ```bash
  $ bower kcmr/liquid-switch i -S
  ```
2. Import Web Components polyfill:
  ```js
  <script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
  ```
3. Import Custom Element:
  ```html
  <link rel="import" href="bower_components/liquid-switch/liquid-switch.html">
  ```
4. Use it!:
  ```html
  <liquid-switch checked>Switch label</liquid-switch>
  ```

## Styling

The following custom properties and mixins are available for styling.

__Note:__ all the values are unitless but border-radius.

Custom property | Description | Default
:-- | :-- | :--
--liquid-switch-switch-background-color | Background color of the switch | #f5f5f5
--liquid-switch-switch-width | Switch width | 40
--liquid-switch-switch-padding | Padding between switch and knob | 3
--liquid-switch-border-radius | border-radius of the switch | 10px
--liquid-switch-knob-color-on | Knob checked color | #7eb30f
--liquid-switch-knob-color-off | Knob unchecked color | #aeb5ae
--liquid-switch-knob-size | Size of the knob (width and height) | 16
--liquid-switch-bar | Empty mixin applied to the switch | {}
--liquid-switch-knob | Empty mixin applied to the knob | {}
