Ext.define('ResumeViewer.store.JobDuties', {
    extend: 'Ext.data.Store',
    requires: 'ResumeViewer.model.JobDuty',
    model: 'ResumeViewer.model.JobDuty',
    autoLoad: true,
    alias: 'store.jobduties',
    storeId: 'jobdutiesStore'
});
