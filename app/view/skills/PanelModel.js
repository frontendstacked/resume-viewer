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
                property: 'type',
                direction: 'ASC'
            }],
            listeners: {
                load: 'onSkillsLoad'
            }
        }
    }

    // stores: {
    //     skills: {
    //         model: 'ResumeViewer.model.Skill',
    //         sorters: [{
    //             property: 'type',
    //             direction: 'ASC'
    //         }]
    //     },
    //     staticSkills: {
    //         type: 'json',
    //         data: [
    //             {
    //                 type: 'language',
    //                 name: 'JavaScript',
    //                 level: 5
    //             },
    //             {
    //                 type: 'language',
    //                 name: 'CSS',
    //                 level: 4
    //             },
    //             {
    //                 type: 'language',
    //                 name: 'HTML',
    //                 level: 5
    //             }
    //         ]
    //         // model: 'ResumeViewer.model.Skill',
    //         // autoLoad: true,
    //         // listeners: {
    //         //     load: 'onSkillsLoad'
    //         // }
    //     }
    // }

});
