exports.config = {

    host: 'localhost',
    port: 4444,

    specs: [
        'test.js'
    ],

    capabilities: [{
        browserName: 'phantomjs'
    }],
    //services: ['phantomjs'],
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    waitforTimeout: 60000,
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