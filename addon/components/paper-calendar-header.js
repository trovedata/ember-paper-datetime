import Ember from 'ember';
import layout from '../templates/components/paper-calendar-header';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: ['paper-calendar-header']
});
