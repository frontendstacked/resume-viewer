Ext.define('ResumeViewer.view.skills.PanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.skills-panel',

    init: function () {
        var viewModel = this.getViewModel(); // triggers data load
    },

    onSkillsLoad: function (store, records, successful, eOpts ) {
        var view = this.getView(),
            storeRecords = store.getData(),
            typeColors = [
                'black',
                'rgba(255,0,255, 0.9)',
                'rgba(150,50,255, 0.9)',
                'rgba(100,200,250, 0.9)'
            ],
            calcedColumnWidth = 1 / 2,
            screenWidth;

        // NOTE: These are ROUGHED IN breakpoints
        // TODO: figure out Ext JS way of handling this
        if (window.innerWidth > 768 && window.innerWidth < 999) {
            calcedColumnWidth = 1 / 3;
        } else if (window.innerWidth > 1000 && window.innerWidth < 1199) {
            calcedColumnWidth = 1 / 4;
        } else if (window.innerWidth > 1200 && window.innerWidth < 1399) {
            calcedColumnWidth = 1 / 5;
        } else if (window.innerWidth > 1400 && window.innerWidth < 1599) {
            calcedColumnWidth = 1 / 6;
        } else if (window.innerWidth > 1600 && window.innerWidth < 1899) {
            calcedColumnWidth = 1 / 7;
        } else if (window.innerWidth > 1900) {
            calcedColumnWidth = 1 / 8;
        }

        view.removeAll();

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
                margin: '2%',
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
