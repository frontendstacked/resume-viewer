Ext.define('ResumeViewer.view.jobs.HistoryModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.jobs-history',

    stores: {
        jobDuties: {
            source: 'jobdutiesStore',
            sorters: [{
                property: 'id',
                order: 'ASC'
            }],
            listeners: {
                load: {
                    fn: function (store) {
                        // console.log('jobduties store loaded');
                    }
                }
            }
        },
        jobs: {
            source: 'jobsStore',
            sorters: [{
                property: 'id',
                order: 'ASC'
            }],
            listeners: {
                load: {
                    fn: function (store) {
                        // console.log('jobs store loaded: %o', store.getData());
                    }
                }
            }
        }
    }
});
