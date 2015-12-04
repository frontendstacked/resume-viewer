Ext.define('ResumeViewer.model.Skills', {
    extend: 'Ext.data.Model',
    alias: 'model.skills',
    fields: [
        { name: 'name', type: 'string' },
        { name: 'type', type: 'string' },
        { name: 'level', type: 'int' }
    ],

    proxy: {
        type: 'ajax',
        url: 'resources/data/skills.json',
        reader: {
            type: 'json',
            rootProperty: 'skills'
        }
    }
});
