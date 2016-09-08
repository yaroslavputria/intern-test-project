exports.config = {

    host: '127.0.0.1',
    port: 4444,

    specs: ['test/webdriver-test/test.js'],

    capabilities: [{ browserName: 'chrome' }],

    desiredCapabilities: [{
        browserName: 'chrome',
        version: '27.0',
        platform: 'XP',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        name: 'integration',
        build: process.env.TRAVIS_BUILD_NUMBER
    }],

    services: ['sauce'],
    user: "yaroslavputria",
    key: "e3f7b71c-1eb3-47b1-bc30-60dad6b75093",
    sauceConnect: true,
    logLevel: 'silent',
    coloredLogs: true,
    waitforTimeout: 30000,
    framework: 'mocha',
    reporters: ['spec'],
    reporterOptions: {
        outputDir: './'
    },

    mochaOpts: {
        ui: 'bdd'
    },

    onPrepare: function() {
        console.log('let\'s go');
    },
    onComplete: function() {
        console.log('that\'s it');
    }

};