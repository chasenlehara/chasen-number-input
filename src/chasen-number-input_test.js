import QUnit from 'steal-qunit';
import { ViewModel } from './chasen-number-input';

// ViewModel unit tests
QUnit.module('chasen-number-input');

QUnit.test('Initializes the ViewModel', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('value'), 0, 'Default value is 0');
  QUnit.equal(vm.attr('max'), Infinity, 'Max value is infinity');
  QUnit.equal(vm.attr('min'), 0, 'Min value is 0');
});

QUnit.test('.increment', function() {
  var vm = new ViewModel();
  vm.increment();
  QUnit.equal(vm.attr('value'), 1, 'Value incremented');
});

QUnit.test('.decrement', function() {
  var vm = new ViewModel();
  vm.increment();
  vm.increment();
  vm.decrement();
  QUnit.equal(vm.attr('value'), 1, 'Value updated');
});
