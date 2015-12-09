Ext.define('ResumeViewer.model.Job', {
    extend: 'ResumeViewer.model.Base',
    fields: [
        {
            name: 'job_id',
            type: 'int'
        },
        {
            name: 'org',
            type: 'string'
        },
        {
            name: 'position',
            type: 'string'
        },
        {
            name: 'dateline',
            type: 'string'
        }
    ],
    idPrimary: 'job_id',
    proxy: {     // Ext.util.ObjectTemplate
        type: 'ajax',
        url: 'resources/data/resume_content.json',
        reader: {
            type: 'json',
            rootProperty: 'jobs'
        }
    }

});
