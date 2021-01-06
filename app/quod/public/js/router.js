import VueRouter from "vue-router";
import dispatchPageLoaded from "../../../../vendor/pckg/helpers-js/webpack/middleware.dispatchPageLoaded.js";
import setSeoTags from "../../../../vendor/pckg/helpers-js/webpack/middleware.setSeoTags.js";
import gaPageLoad from "../../../../vendor/pckg/helpers-js/webpack/middleware.gaPageLoad.js";

const router = new VueRouter({
    mode: 'history',
    routes: Pckg.router.vueUrls || []
});

/**
 * Dispatch to $vue.
 * Apply SEO meta tags from meta.tags['seo:title']
 * Send event to GA.
 */
router.afterEach(function (to, from) {
    dispatchPageLoaded();
    let title = setSeoTags(to);
    gaPageLoad(to, title);
});

export default router;