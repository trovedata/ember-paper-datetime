import Ember from 'ember';
import PowerCalendar from 'ember-power-calendar/components/power-calendar';
import moment from 'moment';
import layout from '../templates/components/paper-date';

const {
  computed,
  get,
  set
} = Ember;

export default PowerCalendar.extend({
  layout,
  classNames: ['paper-date'],

  navComponent: 'paper-date-nav',
  daysComponent: 'paper-date-days',

  years: computed('currentCenter', function() {
    let bufferLength = 4;
    let center = get(this, 'currentCenter');
    let year = center.year();
    let years = [];

    for (let i = (year - bufferLength); i <= (year + bufferLength); i++) {
      years.push(i);
    }

    return years;
  }),

  months: computed(function() {
    return moment.monthsShort();
  }),

  actions: {
    showYears() {
      set(this, 'showYears', true);
    },

    showMonths() {
      set(this, 'showMonths', true);
    },

    setCenterYear(year) {
      let center = get(this, 'currentCenter').clone();

      center.year(year);

      set(this, 'showYears', false);
      get(this, 'onCenterChange')({ moment: center });
    },

    setCenterMonth(month) {
      let center = get(this, 'currentCenter').clone();

      center.month(month);

      set(this, 'showMonths', false);
      get(this, 'onCenterChange')({ moment: center });
    }
  }
});
