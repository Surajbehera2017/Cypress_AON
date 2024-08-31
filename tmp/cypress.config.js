"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cypress_1 = require("cypress");
exports.default = (0, cypress_1.defineConfig)({
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 100000,
    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    env: {},
    e2e: {
        'baseUrl': 'https://checkout.stripe.dev/preview'
    }
});
