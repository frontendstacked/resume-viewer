Ext.define('ResumeViewer.store.Jobs', {
    extend: 'Ext.data.Store',
    requires: 'ResumeViewer.model.Job',
    model: 'ResumeViewer.model.Job',
    autoLoad: true,
    alias: 'store.jobs',
    storeId: 'jobsStore'
});
