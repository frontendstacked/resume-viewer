
Ext.define('ResumeViewer.view.skills.Skills',{
    extend: 'Ext.grid.Panel',
    xtype: 'skills-tester',
    requires: [
        // 'ResumeViewer.view.skills.SkillsController',
        // 'ResumeViewer.view.skills.SkillsModel',
        'ResumeViewer.store.Skills'
    ],

    model: 'skills',

    // controller: 'skills-skills',
    // viewModel: {
    //     type: 'skills-skills'
    // },

    title: 'Skills at a Glance',

    store: {
        type: 'skills'
    },
    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Type', dataIndex: 'type', flex: 1 },
        { text: 'Level', dataIndex: 'level'}
    ]




    // layout: {
    //     type: 'hbox',
    //     pack: 'center'
    // },
    // items: [
    //     {
    //         xtype: 'gridpanel',
    //         title: 'Test Skills Json',
    //         store: {
    //             type: 'skills',
    //             fields: ['name', 'type', 'level']
    //         },
    //         // store:  {
    //         //     type: 'skills',
    //         //     data: [
    //         //         { name:'fag', type:'homo', level: 1 }
    //         //     ]
    //         // },
    //         columns: [
    //             { text: 'Name',  dataIndex: 'name' },
    //             { text: 'Type', dataIndex: 'type', flex: 1 },
    //             { text: 'Level', dataIndex: 'level'}
    //         ]
    //     }
    //     // ,
    //     // {
    //     //     xtype: 'polar',
    //     //     height: 200,
    //     //     width: 200,
    //     //     axes: {
    //     //         title: 'HTML',
    //     //         type: 'numeric',
    //     //         position: 'gauge',
    //     //         maximum: 7,
    //     //         majorTickSteps: 2
    //     //         // ,
    //     //         // renderer: 'onSkillAxisLabelRender'
    //     //     },
    //     //     series: {
    //     //         type: 'gauge',
    //     //         angleField: 'html',
    //     //         donut: 50
    //     //     }

    //     // }
    // ]
});
