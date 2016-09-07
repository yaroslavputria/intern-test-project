exports.config = {

    /**
     * server configurations
     */
    host: 'http://hub-cloud.browserstack.com',
    port: 4444,

    /**
     * specify test files
     */
    specs: [
        'test/webdriver-test/test.js'
    ],
    // exclude: [
    //     'test/spec/multibrowser/**',
    //     'test/spec/mobile/**'
    // ],

    /**
     * capabilities
     */
    capabilities: [{
        'browserName' : 'Chrome',
        'os' : 'Windows',
        'os_version' : '7',
        'resolution' : '1280x1024'
        'browser_version' : '52.0',
        'build': 'myApp #' + process.env.TRAVIS_BUILD_NUMBER + '.' + process.env.TRAVIS_JOB_NUMBER,
        //'browserstack.local': 'true',
        'browserstack.debug': 'true'
    }],
    //services: ['phantomjs'],
    /**
     * test configurations
     */
    user: 'ihorpavlenko1',
    key:  'uXr97yr9u73mfmRtAyZh',
    desiredCapabilities: {
        'browserName' : 'Chrome',
        'os' : 'Windows',
        'os_version' : '7',
        'resolution' : '1280x1024',
        'browser_version' : '52.0',
        'build': 'myApp #' + process.env.TRAVIS_BUILD_NUMBER + '.' + process.env.TRAVIS_JOB_NUMBER,
        //'browserstack.local': 'true',
        'browserstack.debug': 'true'
    },
    sync: true,
    //logLevel: 'verbose',
    coloredLogs: true,
    //screenshotPath: 'shots',
    waitforTimeout: 15000,
    framework: 'mocha',

    reporters: ['spec'],
    reporterOptions: {
        outputDir: './'
    },

    mochaOpts: {
        ui: 'bdd'
    },

    /**
     * hooks
     */
    onPrepare: function() {
        console.log('let\'s go');
    },
    onComplete: function() {
        console.log('that\'s it');
    }

};
