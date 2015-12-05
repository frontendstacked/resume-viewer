Ext.define('ResumeViewer.view.skills.PanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.skills-panel',

    init: function () {
        var viewModel = this.getViewModel(); // triggers data load
    },

    onSkillsLoad: function (store, records, successful, eOpts ) {
        console.log('Query: %o', store.getAt(0).get('name'));

        var view = this.getView();

        for (var i = 0; i < records.length; i += 1) {
            view.add(new ResumeViewer.view.skills.Gauge({
                xtype: 'skillsgauge',
                title: records[i].get('name'),
                background: 'rgba(0,0,0,0)',
                cls: 'fes-raised',
                margin: 15,
                width: 200,
                height: 150,
                store: {
                    data: [
                        {
                            level: records[i].get('level')
                        }
                    ]
                }
            }));
        }
    }

});
