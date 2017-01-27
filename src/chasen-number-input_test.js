import QUnit from 'steal-qunit';
import plugin from './chasen-number-input';

QUnit.module('chasen-number-input');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the chasen-number-input plugin');
});
