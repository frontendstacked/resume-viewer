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
        'Ext.tab.Panel',
        'Ext.ux.IFrame'
    ],
    layout: 'border',
    controller: 'main',
    viewModel: 'main',
    id: 'mainViewport',
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
                                iconCls: 'fes-menuitem-icon fa fa-flask',
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
                                iconCls: 'fes-menuitem-icon fa fa-home',
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
                    text: '<strong>Matt Dodson\'s Resume</strong>&#160;<small style="color:rgb(100,200,250)">Beta</small>',
                    menu: {
                        shadow: false,
                        items: [
                            {
                                text: 'About this Resume, Viewer App ... &#160;&#160;&#160;&#160;',
                                iconCls: 'fes-menuitem-icon fa fa-info',
                                handler: function () {
                                    Ext.Msg.show({
                                        title: 'Check back later',
                                        message: 'Coming soon',
                                        buttons: Ext.Msg.OK,
                                        shadow: false
                                    });
                                }
                            },
                            {
                                text: 'Github Project',
                                iconCls: 'fes-menuitem-icon fa fa-github',
                                handler: function () {
                                    window.open("http://github.com/frontendstacked/resume-viewer", "_blank");
                                }
                            }
                        ]
                    }
                },
                {
                    text: 'File',
                    menu: {
                        shadow: false,
                        items: [
                            '&#160;In Word Format...',
                            {
                                text: 'Download',
                                iconCls: 'fes-menuitem-icon fa fa-download',
                                handler: function () {
                                    Ext.Msg.show({
                                        title: 'Check back later',
                                        message: 'Save-able version coming soon!',
                                        buttons: Ext.Msg.OK,
                                        shadow: false
                                    });
                                }

                            },
                            {
                                text: 'Print',
                                iconCls: 'fes-menuitem-icon fa fa-print',
                                handler: function () {
                                    Ext.Msg.show({
                                        title: 'Check back later',
                                        message: 'Printable version coming soon!',
                                        buttons: Ext.Msg.OK,
                                        shadow: false
                                    });
                                }
                            }
                        ]
                    }
                },
                {
                    text: 'View',
                    menu: {
                        shadow: false,
                        items: [
                            { iconCls: 'fes-menuitem-icon fa fa-arrows-alt', text: 'Fullscreen', handler: 'onFullscreenClick' },
                            { iconCls: 'fes-menuitem-icon fa fa-code', text: 'Source Code', handler: function () {
                                window.open("http://github.com/frontendstacked/resume-viewer", "_blank");
                            }}
                        ]
                    }
                },
                {
                    text: 'Goto',
                    menu: {
                        shadow: false,
                        // TODO: REFACTOR THESE HANDLERS!!!
                        items: [
                            { iconCls: 'fes-menuitem-icon fa fa-home', text: 'Welcome',
                                handler: function () {
                                    var store = Ext.getCmp('mainViewport').getViewModel().getStore('navItems');
                                    Ext.getCmp('nav-treepanel').setSelection(store.getAt(0));
                                }
                            },
                            { iconCls: 'fes-menuitem-icon fa fa-newspaper-o', text: 'Bio',
                                handler: function () {
                                    var store = Ext.getCmp('mainViewport').getViewModel().getStore('navItems');
                                    Ext.getCmp('nav-treepanel').setSelection(store.getAt(1));
                                }
                            },
                            { iconCls: 'fes-menuitem-icon fa fa-certificate', text: 'Qualifications',
                                handler: function () {
                                    var store = Ext.getCmp('mainViewport').getViewModel().getStore('navItems');
                                    Ext.getCmp('nav-treepanel').setSelection(store.getAt(2));
                                }
                            },
                            { iconCls: 'fes-menuitem-icon fa fa-tachometer', text: 'Skills Charts',
                                handler: function () {
                                    var store = Ext.getCmp('mainViewport').getViewModel().getStore('navItems');
                                    Ext.getCmp('nav-treepanel').setSelection(store.getAt(3));
                                }
                            },
                            { iconCls: 'fes-menuitem-icon fa fa-list', text: 'Skills List',
                                handler: function () {
                                    var store = Ext.getCmp('mainViewport').getViewModel().getStore('navItems');
                                    Ext.getCmp('nav-treepanel').setSelection(store.getAt(4));
                                }
                            },
                            { iconCls: 'fes-menuitem-icon fa fa-file-code-o', text: 'Samples',
                                handler: function () {
                                    var store = Ext.getCmp('mainViewport').getViewModel().getStore('navItems');
                                    Ext.getCmp('nav-treepanel').setSelection(store.getAt(5));
                                }
                            },
                            { iconCls: 'fes-menuitem-icon fa fa-line-chart', text: 'Work Experience',
                                handler: function () {
                                    var store = Ext.getCmp('mainViewport').getViewModel().getStore('navItems');
                                    Ext.getCmp('nav-treepanel').setSelection(store.getAt(6));
                                }
                            },
                            { iconCls: 'fes-menuitem-icon fa fa-mortar-board', text: 'Education',
                                handler: function () {
                                    var store = Ext.getCmp('mainViewport').getViewModel().getStore('navItems');
                                    Ext.getCmp('nav-treepanel').setSelection(store.getAt(7));
                                }
                            },
                        ]
                    }
                },
                {
                    text: 'Help',
                    menu: {
                        shadow: false,
                        items: [
                            { text: 'About This',iconCls: 'fes-menuitem-icon fa fa-question' }
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
