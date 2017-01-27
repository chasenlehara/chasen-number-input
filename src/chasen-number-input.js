import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './chasen-number-input.less!';
import template from './chasen-number-input.stache!';

export const ViewModel = Map.extend({
  define: {
    value: {
      value: 0,
      type: 'number',
      set(value) {
        if (value > this.attr('max')) {
          return this.attr('max');
        }
        if (value < this.attr('min')) {
          return this.attr('min');
        }
        return value;
      }
    },
    max: {
      value: Infinity,
      type: 'number'
    },
    min: {
      value: 0,
      type: 'number'
    }
  },
  increment() {
    this.attr('value', this.attr('value') + 1);
  },
  decrement() {
    this.attr('value', this.attr('value') - 1);
  }
});

export default Component.extend({
  tag: 'chasen-number-input',
  viewModel: ViewModel,
  template
});
