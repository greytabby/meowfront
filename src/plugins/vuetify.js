import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.teal.darken2,
        secondary: colors.blue.darken2,
        accent: colors.lime.darken3
      }
    }
  }
});
