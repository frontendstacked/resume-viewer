/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ResumeViewer.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    requires: [
        'ResumeViewer.store.Personnel',
        'ResumeViewer.store.Skills',
        'Ext.ux.IFrame'
    ],
    layout: 'border',
    controller: 'main',
    viewModel: 'main',
    items: [
        {
            title: 'My Resume',
            region: 'north',
            xtype: 'toolbar',
            cls: 'application-menu',
            items: [
                {
                    iconCls: 'fa fa-flask',
                    padding: 0,
                    menu: {
                        shadow: false,
                        items: [
                            {
                                text: 'Other Experimental Apps (TK)',
                                handler: function () {
                                    Ext.Msg.show({
                                        title: 'Check back later',
                                        message: 'Sorry, Matt\'s site site is still under construction.',
                                        buttons: Ext.Msg.OK,
                                        shadow: false
                                    });
                                }
                            },
                            {
                                text: 'Matt\'s Site (TK)',
                                handler: function () {
                                    Ext.Msg.show({
                                        title: 'Check back later',
                                        message: 'Sorry, Matt\'s site site is still under construction.',
                                        buttons: Ext.Msg.OK,
                                        shadow: false
                                    });
                                }
                            }
                        ]
                    }
                },
                {
                    text: '<strong>Matt Dodson\'s Resume</strong>',
                    menu: {
                        shadow: false,
                        items: [
                            { text: 'About this Resume Viewer App ... &#160;&#160;&#160;&#160;' },
                            { text: 'Github Project', iconCls: 'fa fa-github', handler: function () {
                                window.open("http://github.com/frontendstacked/resume-viewer", "_blank");
                            }}
                        ]
                    }
                },
                {
                    text: 'File',
                    menu: {
                        shadow: false,
                        items: [
                            '&#160;In Word Format...',
                            { text: 'Save' },
                            { text: 'Print' }
                        ]
                    }
                },
                {
                    text: 'View',
                    menu: {
                        shadow: false,
                        items: [
                            { iconCls: 'fa fa-arrows-alt', text: 'Fullscreen', handler: 'onFullscreenClick' },
                            { iconCls: 'fa fa-code', text: 'Source Code', handler: function () {
                                window.open("http://github.com/frontendstacked/resume-viewer", "_blank");
                            }}
                        ]
                    }
                },
                {
                    text: 'Help',
                    menu: {
                        shadow: false,
                        items: [
                            { text: 'About This' }
                        ]
                    }
                },
                '->',
                {
                    text:   '<span class="fes-sm">a</span>' +
                            'Front End Stacked' +
                            '<span class="fes-sm-2">Work in Progress</span>' +
                            '<span class="fes-auth">by Matt Dodson</span>',
                    //iconCls: 'fa fa-briefcase',
                    cls: 'fes-mattd'
                }

            ]
        },
        {
            region: 'west',
            xtype: 'panel',
            title: 'Navigation',
            collapsible: true,
            width: 258,
            split: true,
            reference: 'treelistContainerWestNav',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            border: false,
            scrollable: 'y',
            items: [{
                xtype: 'treepanel',
                controller: 'main',
                viewmodel: 'main',
                id: 'nav-treepanel',
                rootVisible: false,
                useArrows: true,
                cls: 'fes-navtree',
                listeners: {
                    select: 'onNavItemSelect'
                },
                bind: '{navItems}'
            }]
        },
        {
            region: 'center',
            xtype: 'panel',
            id: 'centerRegion',
            frame: false,
            layout: 'fit',
            border: false,
            title: 'View Area'
        },
        {
            region: 'south',
            xtype: 'panel',
            title: 'Description',
            layout: 'fit',
            border: true,
            collapsible: true,
            split: true,
            height: 100,
            bind: {
                html: '{selectedNodeDesc}'
            }
        }
    ]
});
