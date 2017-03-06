Polymer({
  is: 'liquid-switch',

  hostAttributes: {
    role: 'checkbox',
    tabindex: 0
  },

  properties: {
    /**
     * Checked state.
     */
    checked: {
      type: Boolean,
      value: false,
      notify: true,
      observer: '_checkedChanged'
    },

    /**
     * Disables click or keydown interaction and prevents changing its checked state.
     */
    disabled: {
      type: Boolean,
      value: false,
      notify: true,
      observer: '_disabledChanged'
    },

    _animationRunning: {
      type: Boolean,
      value: false
    }
  },

  listeners: {
    'click': 'toggle',
    'keydown': 'toggle',
    'switch.animationend': '_setAnimationRunning'
  },

  _checkedChanged: function(checked) {
    this.setAttribute('aria-checked', checked);
    this.$.switch.classList.toggle('switch--on', this.checked);

    if (!this.$.switch.classList.contains('changed')) {
      this.async(function() {
        this.$.switch.classList.add('changed');
      }, 330);
    }
  },

  _disabledChanged: function(disabled) {
    this.setAttribute('aria-disabled', disabled);
  },

  _setAnimationRunning: function() {
    this._animationRunning = false;
  },

  /**
   * Changes checked property.
   */
  toggle: function(e) {
    if (e && e.type === 'keydown' && e.keyCode !== 32 || this._animationRunning || this.disabled) {
      return;
    }

    e.preventDefault();

    this.$.switch.classList.toggle('switch--off', this.checked);
    this._animationRunning = true;
    this.checked = !this.checked;
  }
});
