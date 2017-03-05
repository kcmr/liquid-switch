Polymer({
  is: 'liquid-switch',

  hostAttributes: {
    role: 'checkbox',
    tabindex: 0
  },

  properties: {
    checked: {
      type: Boolean,
      value: false,
      notify: true,
      observer: '_checkedChanged'
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
      }, 260);
    }
  },

  _setAnimationRunning: function() {
    this._animationRunning = false;
  },

  toggle: function(e) {
    if (e && e.type === 'keydown' && e.keyCode !== 32 || this._animationRunning) {
      return;
    }

    this.$.switch.classList.toggle('switch--off', this.checked);
    this._animationRunning = true;
    this.checked = !this.checked;
  }
});
