if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.editormode = function() {
  return {
    init: function() {
      var button;
      button = this.button.add('editor-mode-button', 'Editor Mode');
      this.button.setAwesome('editor-mode-button', 'fa-toggle-off');
      this.editormode.state = 'off';
      return this.button.addCallback(button, this.editormode.show);
    },
    show: function() {
      if (this.editormode.state === 'off') {
        this.button.setAwesome('editor-mode-button', 'fa-toggle-on');
        this.editormode.state = 'on';
      } else {
        this.button.setAwesome('editor-mode-button', 'fa-toggle-off');
        this.editormode.state = 'off';
      }
      return this.$editor.toggleClass('redactor-dark');
    },
    state: 'on'
  };
};
