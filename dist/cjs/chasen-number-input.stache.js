/*chasen-number-input@0.1.6#chasen-number-input.stache!can@2.3.29#view/stache/system*/
var stache = require('can/view/stache/stache');
var mustacheCore = require('can/view/stache/mustache_core');
require('bootstrap/less/bootstrap.less!');
var renderer = stache([
    {
        'tokenType': 'start',
        'args': [
            'can-import',
            true
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['from']
    },
    {
        'tokenType': 'attrValue',
        'args': ['bootstrap/less/bootstrap.less!']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['from']
    },
    {
        'tokenType': 'end',
        'args': [
            'can-import',
            true
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n']
    },
    {
        'tokenType': 'start',
        'args': [
            'form',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['form-inline']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'form',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n  ']
    },
    {
        'tokenType': 'start',
        'args': [
            'div',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['form-group']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'div',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'start',
        'args': [
            'div',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['input-group']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'div',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n      ']
    },
    {
        'tokenType': 'start',
        'args': [
            'div',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['input-group-btn']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'div',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n        ']
    },
    {
        'tokenType': 'start',
        'args': [
            'button',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['btn btn-primary']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'attrStart',
        'args': ['type']
    },
    {
        'tokenType': 'attrValue',
        'args': ['button']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['type']
    },
    {
        'tokenType': 'special',
        'args': ['#eq value min']
    },
    {
        'tokenType': 'attrStart',
        'args': ['disabled']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['disabled']
    },
    {
        'tokenType': 'special',
        'args': ['/eq']
    },
    {
        'tokenType': 'attrStart',
        'args': ['($click)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['decrement']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['($click)']
    },
    {
        'tokenType': 'end',
        'args': [
            'button',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n            -\n        ']
    },
    {
        'tokenType': 'close',
        'args': ['button']
    },
    {
        'tokenType': 'chars',
        'args': ['\n      ']
    },
    {
        'tokenType': 'close',
        'args': ['div']
    },
    {
        'tokenType': 'chars',
        'args': ['\n      ']
    },
    {
        'tokenType': 'start',
        'args': [
            'input',
            true
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['type']
    },
    {
        'tokenType': 'attrValue',
        'args': ['number']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['type']
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['form-control']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'attrStart',
        'args': ['{($value)}']
    },
    {
        'tokenType': 'attrValue',
        'args': ['value']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['{($value)}']
    },
    {
        'tokenType': 'end',
        'args': [
            'input',
            true
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n      ']
    },
    {
        'tokenType': 'start',
        'args': [
            'div',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['input-group-btn']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'end',
        'args': [
            'div',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n        ']
    },
    {
        'tokenType': 'start',
        'args': [
            'button',
            false
        ]
    },
    {
        'tokenType': 'attrStart',
        'args': ['class']
    },
    {
        'tokenType': 'attrValue',
        'args': ['btn btn-primary']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['class']
    },
    {
        'tokenType': 'attrStart',
        'args': ['type']
    },
    {
        'tokenType': 'attrValue',
        'args': ['button']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['type']
    },
    {
        'tokenType': 'special',
        'args': ['#eq value max']
    },
    {
        'tokenType': 'attrStart',
        'args': ['disabled']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['disabled']
    },
    {
        'tokenType': 'special',
        'args': ['/eq']
    },
    {
        'tokenType': 'attrStart',
        'args': ['($click)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['increment']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['($click)']
    },
    {
        'tokenType': 'end',
        'args': [
            'button',
            false
        ]
    },
    {
        'tokenType': 'chars',
        'args': ['\n            +\n        ']
    },
    {
        'tokenType': 'close',
        'args': ['button']
    },
    {
        'tokenType': 'chars',
        'args': ['\n      ']
    },
    {
        'tokenType': 'close',
        'args': ['div']
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
    },
    {
        'tokenType': 'close',
        'args': ['div']
    },
    {
        'tokenType': 'chars',
        'args': ['\n  ']
    },
    {
        'tokenType': 'close',
        'args': ['div']
    },
    {
        'tokenType': 'chars',
        'args': ['\n']
    },
    {
        'tokenType': 'close',
        'args': ['form']
    },
    {
        'tokenType': 'chars',
        'args': ['\n']
    },
    {
        'tokenType': 'done',
        'args': []
    }
]);
module.exports = function (scope, options, nodeList) {
    var moduleOptions = { module: module };
    if (!(options instanceof mustacheCore.Options)) {
        options = new mustacheCore.Options(options || {});
    }
    return renderer(scope, options.add(moduleOptions), nodeList);
};