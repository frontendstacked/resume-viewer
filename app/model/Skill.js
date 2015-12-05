Ext.define('ResumeViewer.model.Skill', {
    extend: 'Ext.data.Model',
    alias: 'model.skill',
    id: 'skillModel',
    fields: [
        { name: 'name', type: 'string' },
        { name: 'type', type: 'string' },
        { name: 'level', type: 'int' }
    ]
});
