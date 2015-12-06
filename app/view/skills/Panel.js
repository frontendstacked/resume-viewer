
Ext.define('ResumeViewer.view.skills.Panel',{
    extend: 'Ext.panel.Panel',
    xtype: 'skillssummary',

    controller: 'skills-panel',
    viewModel: {
        type: 'skills-panel'
    },

    layout: {
        type: 'column'
    },

    scrollable: true,
    listeners: [
        { resize: 'onSkillsPanelResize' }
    ]

});
