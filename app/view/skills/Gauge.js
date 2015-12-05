
Ext.define('ResumeViewer.view.skills.Gauge',{
    extend: 'Ext.chart.PolarChart',
    xtype: 'skillsgauge',

    series: {
        type: 'gauge',
        angleField: 'level',
        colors: [
            'fuchsia',
            'rgba(175,198,255, 0.2)'
        ],
        donut: 30,
        maximum: 5,
        minimum: 1,
        //,
        // needle: true,
        needleLength: 95,
        // needleWidth: 4,
        // sectors: [1,2,3,4,5]
    }

});
