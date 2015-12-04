Ext.define('ResumeViewer.view.skills.SkillsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.skills-skills',

    onAfterRender: function () {
        // sets stores
        var me = this,
            gauges = me.getView().query('polar'),
            i, gauge;

        me.store = Ext.create('Ext.data.JsonStore', {
            fields: ['html'],
            data: [
                { html: 5 }
            ]
        });

        for (i = 0; i < gauges.length; i++) {
            gauge = gauges[i];
            gauge.setStore(me.store);
        }
    },
    onSkillAxisLabelRender: function (axis, label, layoutContext) {
        if (label === 0) return 'Beginner';
        if (label === 3) return 'Intermediate';
        if (label === 7) return 'Expert';
        return ' ';
    }
});
