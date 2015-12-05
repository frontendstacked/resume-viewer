
Ext.define('ResumeViewer.view.skills.Panel',{
    extend: 'Ext.panel.Panel',
    xtype: 'skillssummary',

    controller: 'skills-panel',
    viewModel: {
        type: 'skills-panel'
    },

    layout: {
        type: 'table',
        columns: 4
    },

    scrollable: true

});
