Ext.define('ResumeViewer.model.JobDuty', {
    extend: 'ResumeViewer.model.Base',
    fields: [
        {
            name: 'job_id',
            type: 'int',
            reference: 'Job'
        },
        {
            name: 'desc',
            type: 'string'
        }
    ],
    idPrimary: 'job_id',
    proxy: {     // Ext.util.ObjectTemplate
        type: 'ajax',
        url: 'resources/data/resume_content.json',
        reader: {
            type: 'json',
            rootProperty: 'duties'
        }
    }

});
