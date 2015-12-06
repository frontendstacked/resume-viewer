Ext.define('ResumeViewer.view.skills.PanelModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.skills-panel',

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
