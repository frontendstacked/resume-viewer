Ext.define('ResumeViewer.view.qualifications.SummaryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.qualifications-summary',

    onRender: function () {
        var viewModel = this.getViewModel(), // triggers autoload of configured stores
            view = this.getView(),
            store = viewModel.getStore('qualifications'),
            items = [],
            tpl = new Ext.XTemplate(
                '<ul class="fes-res-qualifications">',
                '<tpl for=".">',
                    '<li>{desc}</li>',
                '</tpl>',
                '</ul>'
            );

        // viewModel.getStore('qualifications').on('load', function (store) {
        for (var i = 0; i < store.getCount(); i += 1) {
            items.push(store.getAt(i).data);
        }
        tpl.overwrite(view.body, items);
        // });
    }
});
