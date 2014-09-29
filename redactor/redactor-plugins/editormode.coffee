window.RedactorPlugins = {} unless window.RedactorPlugins?

RedactorPlugins.editormode = ->

  init: ->
   button = @button.add 'editor-mode-button', 'Editor Mode'
   @button.setAwesome('editor-mode-button', 'fa-toggle-off')
   @editormode.state = 'off'
   @button.addCallback button, @editormode.show

  show: ->

    if @editormode.state == 'off'
      @button.setAwesome('editor-mode-button', 'fa-toggle-on')
      @editormode.state = 'on'
    else
      @button.setAwesome('editor-mode-button', 'fa-toggle-off')
      @editormode.state = 'off'

    @$editor.toggleClass('redactor-dark')

  state: 'on'