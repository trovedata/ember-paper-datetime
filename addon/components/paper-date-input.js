import Ember from 'ember';
import layout from '../templates/components/paper-date-input';

const {
  Component,
  computed,
  get
} = Ember;

export default Component.extend({
  layout,

  date: computed.alias('value'),
  format: 'L',

  actions: {
    selectDate({ moment }) {
      let date = get(this, 'date');

      if (date) {
        date = date.clone();

        date.set({
          month: moment.month(),
          date: moment.date(),
          year: moment.year()
        });
      } else {
        date = moment;
      }

      get(this, 'onChange')(date);
    }
  }
});
