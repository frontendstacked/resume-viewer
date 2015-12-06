Ext.define('ResumeViewer.store.Skills', {
    extend: 'Ext.data.Store',
    requires: 'ResumeViewer.model.Skill',
    model: 'ResumeViewer.model.Skill',
    alias: 'store.skills',
    storeId: 'skillsStore',
    //autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'resources/data/skills.json',
        reader: {
            type: 'json',
            rootProperty: 'skills'
        }
    }
});
