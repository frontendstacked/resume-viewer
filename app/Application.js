/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ResumeViewer.Application', {
    extend: 'Ext.app.Application',

    name: 'ResumeViewer',

    stores: [
        // TODO: add global / shared stores here
        'ResumeViewer.store.Skills',
        'ResumeViewer.store.Qualifications',
        'ResumeViewer.store.Jobs',
        'ResumeViewer.store.JobDuties'
    ],

    launch: function () {
        Ext.getDoc().dom.title = "Matthew Dodson Resume : Front End Developer";
        var link = document.createElement('link');
        link.type = 'image/png';
        link.rel = 'shortcut icon';
        link.href = '/favicon.ico'; //assumes favicon is in the app root as it should be
        document.getElementsByTagName('head')[0].appendChild(link);
        // TODO - Launch the application
        // ResumeViewer.model.Job.load(1, {
        //     callback: function (record) {
        //         console.log(record);
        //     }
        // });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
