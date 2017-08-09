import Ember from 'ember';
import layout from '../templates/components/paper-datetime';

const {
  Component,
  get
} = Ember;

export default Component.extend({
  layout,

  calendarComponent: 'paper-date',
  clockComponent: 'paper-time',
  datetime: null,

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
