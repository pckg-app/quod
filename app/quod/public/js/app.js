import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VeeValidate from "vee-validate/dist/vee-validate.min";

Vue.config.debug = true;
Vue.config.silent = false;
Vue.config.devtools = true;
Vue.config.performance = true;

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VeeValidate);

import auth from "./store/auth.js";
import router from './router.js';

// auth components
Vue.component('pckg-auth-advanced', () => import('../../../../vendor/pckg/auth/src/Pckg/Auth/View/advanced.vue'));
Vue.component('pckg-auth-full', () => import('../../../../vendor/pckg/auth/src/Pckg/Auth/View/basic.vue'));

// helpers
Vue.component('pckg-modal', () => import('../../../../vendor/pckg/helpers-js/webpack/modal.vue'));
Vue.component('form-group', () => import('../../../../vendor/pckg/helpers-js/webpack/form-group.vue'));
Vue.component('pckg-htmleditor', () => import ("../../../../vendor/pckg/helpers-js/vue/pckgHtmleditor.vue"));
//Vue.component('htmlbuilder-validator-error', () => import("../../../../vendor/pckg/htmlbuilder/src/Pckg/Htmlbuilder/View/htmlbuilderValidatorError.vue"));

window.$dispatcher = new Vue();

window.$vue = new Vue({
    el: '#vue-app',
    router,
    store: new Vuex.Store({
        modules: {
            auth
        }
    }),
    computed: {
        containerClass: function () {
            if (!this.$route.meta || !this.$route.meta.tags || !this.$route.meta.tags.container) {
                return null;
            }

            return 'container ' + this.$route.meta.tags.container;
        },
        layoutComponent: function () {
            if (!this.$route.meta || Object.keys(this.$route.meta).length === 0) {
                return 'layout-blank';
            }

            if (this.$route.meta.tags && Object.values(this.$route.meta.tags).indexOf('auth:out') >= 0) {
                return 'layout-blank';
            }

            return 'layout-backend';
        },
        isLoggedIn: function () {
            return this.$store.getters['auth/isLoggedIn'];
        },
        user: function () {
            return this.$store.state.auth.user;
        }
    }
});

//import '../../../../src/fonts/css/all.min.css';
