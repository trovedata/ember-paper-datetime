import Ember from 'ember';
import layout from '../templates/components/paper-time';

const {
  get,
  set,
  computed,
  Component
} = Ember;

export default Component.extend({
  layout,

  datetime: null,
  use24Hour: false,

  hour: computed('datetime', function() {
    let datetime = get(this, 'datetime');

    return (datetime) ? datetime.hour() : null;
  }),

  displayHour: computed('hour', 'use24Hour', function() {
    let hour = get(this, 'hour');
    let use24Hour = get(this, 'use24Hour');

    if (!hour) {
      hour = 12;
    }

    if (use24Hour) {
      return hour;
    } else {
      let displayHour = hour % 12;

      displayHour = (displayHour > 0) ? displayHour : 12;

      return (displayHour < 10) ? `0${displayHour}` : displayHour;
    }
  }),

  minute: computed('datetime', function() {
    let datetime = get(this, 'datetime');

    return (datetime) ? datetime.minute() : null;
  }),

  displayMinute: computed('minute', function() {
    let minute = get(this, 'minute');

    if (!minute) {
      minute = 0;
    }

    return (minute < 10) ? `0${minute}` : minute;
  }),

  meridiem: computed('hour', function() {
    return (get(this, 'hour') < 12) ? 'AM' : 'PM';
  }),

  hours: computed(function() {
    let hours = [];

    for (let i = 1; i <= 12; i++) {
      hours.push(i);
    }

    return hours;
  }),

  minutes: ['0', '15', '30', '45'],

  actions: {
    setHour(direction) {
      let hour = parseInt(get(this, 'hour'));
      let datetime = get(this, 'datetime').clone();

      datetime.hour(hour + direction);

      get(this, 'onChange')(datetime);
    },

    setMinute(direction) {
      let minute = get(this, 'minute');
      let datetime = get(this, 'datetime').clone();

      datetime.minute(minute + direction);

      get(this, 'onChange')(datetime);
    },

    cycleMeridiem() {
      let currentMeridiem = get(this, 'meridiem');
      let datetime = get(this, 'datetime').clone();
      let method = (currentMeridiem === 'AM') ? 'add' : 'subtract';

      datetime[method](12, 'hours');

      get(this, 'onChange')(datetime);
    },

    showHours() {
      set(this, 'showHours', true);
    },

    showMinutes() {
      set(this, 'showMinutes', true);
    },

    selectHour(hour) {
      set(this, 'showHours', false);

      let datetime = get(this, 'datetime').clone();

      datetime.hour(hour);

      get(this, 'onChange')(datetime);
    },

    selectMinute(minute) {
      set(this, 'showMinutes', false);

      let datetime = get(this, 'datetime').clone();

      datetime.minute(minute);

      get(this, 'onChange')(datetime);
    }
  }
});
