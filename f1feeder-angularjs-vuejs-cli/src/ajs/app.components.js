import angular from 'angular';
import Vue from 'vue';

import DriverOverview from '../containers/driverOverview.vue';

export default angular
  .module('myApp.components', [])
  .directive('driverOverview', createVueComponent =>
    createVueComponent(Vue.component('driverOverview', DriverOverview)),
  )
  .name;
