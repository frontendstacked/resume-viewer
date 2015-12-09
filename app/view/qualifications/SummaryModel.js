Ext.define('ResumeViewer.view.qualifications.SummaryModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.qualifications-summary',
    stores: {
        qualifications: {
            source: 'qualificationsStore',
            listeners: {
                load: {
                    fn: function () {
                        // console.log('qual store loaded.');
                    }
                }
            }
        }
    }

});
