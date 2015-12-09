Ext.define('ResumeViewer.view.jobs.HistoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.jobs-history',

    onRender: function () {
        var viewModel = this.getViewModel(), // triggers autoload of configured stores
            view = this.getView(),
            jobs = [],
            tpl = new Ext.XTemplate(
                '<ul class="fes-res-jobs">',
                '<tpl for=".">',
                    '<li>',
                        '<h2 class="fes-res-jobs-org">{org}</h2>',
                        '<h3 class="fes-res-jobs-position">{position}</h3>',
                        '<h4 class="fes-res-jobs-dateline">{dateline}</h4>',
                        '<ul class="fes-res-jobs-duty-list">',
                        '<tpl for="jobdutys">',
                            '<li>{desc}</li>',
                        '</tpl>',
                        '</ul>',
                    '</li>',
                '</tpl>',
                '</ul>'
            );

        viewModel.getStore('jobs').on('load', function (store) {
            for (var i = 0; i < store.getCount(); i += 1) {
                jobs.push(store.getAt(i).data);
            }
            tpl.overwrite(view.body, jobs);
        });


    }

});
