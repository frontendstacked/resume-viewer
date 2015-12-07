Ext.define('ResumeViewer.view.skills.PanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.skills-panel',

    init: function () {
        Ext.data.StoreManager.lookup('skillsStore').load();
    },
    onSkillsLoad: function (store, records, successful, eOpts ) {
        this.refresh();
    },
    // TODO: can updateLayout do this better?
    refresh: function () {
        this.getView().removeAll();
        this.addPanels();
    },
    addPanels: function () {
        var view = this.getView(),
            store = this.getStore('skills'),
            storeRecords = store.getData(),
            typeColors = [
                'black',
                'rgba(255,0,255, 0.9)',
                'rgba(150,50,255, 0.9)',
                'rgba(100,200,250, 0.9)'
            ],
            calcedColumnWidth = 1 / 2,
            panelWidth = this.getView().body.getWidth();

        // NOTE: These are ROUGHED IN breakpoints (win.innerHeight - 320)
        // TODO: figure out Ext JS way of handling this
        if (panelWidth > 580 && panelWidth < 779) {
            calcedColumnWidth = 1 / 3;
        } else if (panelWidth > 780 && panelWidth < 979) {
            calcedColumnWidth = 1 / 4;
        } else if (panelWidth > 980 && panelWidth < 1179) {
            calcedColumnWidth = 1 / 5;
        } else if (panelWidth > 1180 && panelWidth < 1379) {
            calcedColumnWidth = 1 / 6;
        } else if (panelWidth > 1380) {
            calcedColumnWidth = 1 / 7;
        }

        for (var i = 0; i < store.getCount(); i += 1) {

            view.add(new ResumeViewer.view.skills.Gauge({
                xtype: 'skillsgauge',
                plugins: 'responsive',
                colors: [
                    typeColors[3],
                    'rgba(175,200,255, 0.2)'
                ],
                title: store.getAt(i).get('name'),
                background: 'rgba(0,0,0,0)',
                cls: 'fes-raised fes-gauge',
                margin: '5%',
                // padding: '0 15',
                width: 190,
                columnWidth: calcedColumnWidth,
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
