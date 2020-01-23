import Home from './source/pages/HomePage/HomePage';
import Calendar from './source/pages/CalendarPage/CalendarPage';
export default [
  { path: '/', exact: true, component: Home },
  { path: '/calendar', exact: true, component: Calendar }
];
