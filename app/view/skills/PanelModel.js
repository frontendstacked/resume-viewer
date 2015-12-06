Ext.define('ResumeViewer.view.skills.PanelModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.skills-panel',

    data: {
        gaugeWidth: 200,
        gaugeHeight: 150
    },

    stores: {
        skills: {
            source: 'skillsStore',
            sorters: [{
                property: 'type_id'
            }],
            listeners: {
                load: 'onSkillsLoad'
            }
        }
    }
});
