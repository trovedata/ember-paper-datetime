import PowerCalendarNav from 'ember-power-calendar/components/power-calendar/nav';
import layout from '../templates/components/paper-date-nav';

export default PowerCalendarNav.extend({
  layout,
  tagName: 'nav',
  classNames: ['ember-power-calendar-nav']
});
