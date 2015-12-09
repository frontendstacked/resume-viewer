
Ext.define("ResumeViewer.view.education.Education",{
    extend: "Ext.panel.Panel",
    xtype: 'educationpanel',

    bodyPadding: 15,
    data: {},

    tpl: new Ext.XTemplate(
        '<h4>Currently pursuing a bachelor\'s degree in computer science with a focus in Web development. I’ve taken all required CS courses at Strayer with a 3.8 GPA, but recently, successfully transferred to Penn State World Campus and plan to finish my degree there.</h4>'
    )
});
