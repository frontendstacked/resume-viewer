
Ext.define('ResumeViewer.view.skills.Skills',{
    extend: 'Ext.grid.Panel',
    xtype: 'skillsgrid',
    requires: [
        'ResumeViewer.store.Skills'
    ],

    title: 'Skills at a Glance',

    store: {
        type: 'skills'
    },
    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Type', dataIndex: 'type', flex: 1 },
        { text: 'Level', dataIndex: 'level'}
    ],
    listeners: {
        render: {
            fn: function () {
                this.store.load();
            }
        }
    }
});
