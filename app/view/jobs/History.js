
Ext.define("ResumeViewer.view.jobs.History",{
    extend: "Ext.panel.Panel",
    xtype: 'jobhistorypanel',

    requires: [
        "ResumeViewer.view.jobs.HistoryController",
        "ResumeViewer.view.jobs.HistoryModel",
        "ResumeViewer.store.Jobs",
        "ResumeViewer.model.Job"
    ],
    controller: "jobs-history",
    viewModel: {
        type: "jobs-history"
    },
    cls: 'fes-res-jobs',
    scrollable: true,
    listeners: {
        render: 'onRender'
    }
});
