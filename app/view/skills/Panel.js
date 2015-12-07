
Ext.define('ResumeViewer.view.skills.Panel', {
    extend: 'Ext.panel.Panel',
    xtype: 'skillssummary',
    title: 'Skills Charts',

    requires: [
        'Ext.layout.container.Column'
    ],

    controller: 'skills-panel',
    viewModel: {
        type: 'skills-panel'
    },

    layout: {
        type: 'column'
    },

    scrollable: true,
    listeners: [
        {
            resize: {
                fn: function () {
                    Ext.Function.defer(this.controller.refresh, 100, this.controller);
                }
            }
        }
    ]

});
