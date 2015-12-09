
Ext.define("ResumeViewer.view.qualifications.Summary",{
    extend: "Ext.panel.Panel",
    xtype: "qualificationspanel",
    requires: [
        "ResumeViewer.view.qualifications.SummaryController",
        "ResumeViewer.view.qualifications.SummaryModel",
        "ResumeViewer.store.Qualifications"
    ],
    controller: 'qualifications-summary',
    viewModel: {
        type: 'qualifications-summary'
    },
    scrollable: true,
    listeners: {
        render: 'onRender'
    }

});
