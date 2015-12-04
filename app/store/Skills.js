Ext.define('ResumeViewer.store.Skills', {
    extend: 'Ext.data.Store',
    requires: 'ResumeViewer.model.Skills',
    model: 'ResumeViewer.model.Skills',
    alias: 'store.skills',
    autoLoad: true
});
