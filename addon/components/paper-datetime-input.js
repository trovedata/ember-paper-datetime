import Ember from 'ember';
import layout from '../templates/components/paper-datetime-input';

const {
  Component,
  computed,
  get
} = Ember;

export default Component.extend({
  layout,

  datetime: computed.alias('value'),
  format: 'L LT',
  position: 'target bottom',

  actions: {
    selectDate({ moment }) {
      let datetime = get(this, 'datetime');

      if (datetime) {
        datetime = datetime.clone();

        datetime.set({
          month: moment.month(),
          date: moment.date(),
          year: moment.year()
        });
      } else {
        datetime = moment;
      }

      get(this, 'onChange')(datetime);
    }
  }
});
