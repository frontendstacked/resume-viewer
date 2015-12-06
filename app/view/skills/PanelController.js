Ext.define('ResumeViewer.view.skills.PanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.skills-panel',

    init: function () {
        var viewModel = this.getViewModel(); // triggers data load
    },

    onSkillsLoad: function (store, records, successful, eOpts ) {
        console.log('Query: %o', store.getAt(0).get('name'));

        var view = this.getView(),
            storeRecords = store.getData(),
            typeColors = [
                'black',
                'rgba(255,0,255, 0.9)',
                'rgba(150,50,255, 0.9)',
                'rgba(100,200,250, 0.9)'
            ];

        console.log(store.getCount());

        for (var i = 0; i < store.getCount(); i += 1) {

            view.add(new ResumeViewer.view.skills.Gauge({
                xtype: 'skillsgauge',
                colors: [
                    typeColors[3],
                    'rgba(175,200,255, 0.2)'
                ],
                title: store.getAt(i).get('name'),
                background: 'rgba(0,0,0,0)',
                cls: 'fes-raised fes-gauge',
                margin: 15,
                width: 210,
                height: 150,
                store: {
                    data: [
                        {
                            level: store.getAt(i).get('level')
                        }
                    ]
                }
            }));
        }
    }

});
