Ext.define('ResumeViewer.model.Base', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' }

    ]
    //,
    // schema: {
    //     // namespace: 'ResumeViewer.model',  // generate auto entityName

    //     proxy: {     // Ext.util.ObjectTemplate
    //         type: 'ajax',
    //         url: 'resources/data/resume_content.json',
    //         reader: {
    //             type: 'json',
    //             rootProperty: '{entityName:lowercase}s'
    //         }
    //     }
    // }
});
