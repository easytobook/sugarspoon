define (require) ->
  TestRunner = require './base'


  class MochaTestRunner extends TestRunner

    constructor: ->
      @engine = window.mochaPhantomJS or window.mocha
