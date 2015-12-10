
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
            // TODO: Get this to work on skills-panel controller. Handlers
            // are currently looked for on main controller for some reason.
            resize: {
                fn: function (panel) {
                    Ext.Function.defer(this.controller.refresh, 100, this.controller);
                }
            }
        }
    ]

});
