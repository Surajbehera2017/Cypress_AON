import { defineConfig } from "cypress";

export default defineConfig({
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 100000,
    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    env: {

    },

    e2e: {
        'baseUrl': 'https://checkout.stripe.dev/preview',
        testIsolation: false
    }

})