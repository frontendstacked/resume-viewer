/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ResumeViewer.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    requires: [
        'ResumeViewer.store.Personnel'
    ],
//    title: 'Welcome to My Personal Site: Front End Stacked <small>(Don\'t snicker, it was a cheap domain)</small>',
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
                            { text: 'Matt\'s Site (TK)' }
                        ]
                    }
                },
                {
                    text: '<strong>Matt Dodson\'s Resume</strong>',
                    menu: {
                        shadow: false,
                        items: [
                            { text: 'About this Resume Viewer App ... &#160;&#160;&#160;&#160;' },
                            { text: 'Github Project' }
                        ]
                    }
                },
                {
                    text: 'Word File',
                    menu: {
                        shadow: false,
                        items: [
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
                            { iconCls: 'fa fa-arrows-alt', text: 'Fullscreen', handler: 'onFullscreenClick' }
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
                xtype: 'treelist',
                reference: 'treelist',
                controller: 'main',
                bind: '{navItems}'
            }]
        },
        {
            region: 'center',
            xtype: 'panel',
            frame: false,
            layout: 'fit',
            border: false,
            title: 'Use Navigation at Left',
            items: {
                xtype: 'tabpanel',
                border: false,
                title: 'Generic Panel',
                cls: 'fes-raised',
                margin: '25',
                // html: '<h3>This is a Panel</h3><p>Use this for styling this component</p>'//,
                // tbar: [
                //     { xtype: 'button', text: 'Button' }
                // ],
                // bbar: [
                //     { xtype: 'button', text: 'Button' }
                // ]//,
                activeTab: 'skillsGaugeTab',
                items: [
                    {
                        xtype: 'mainlist',
                        closable: true,
                        title: 'People'

                    },
                    {
                        xtype: 'panel',
                        title: 'Plain Panel',
                        closable: true,
                        frame: true,
                        html: '<h3>This is a Panel</h3><p>Use this for styling this component</p>'
                    },
                    {
                        xtype: 'skills-tester',
                        id: 'skillsTab',
                        closable: true,
                        padding: 15
                    },
                    {
                        xtype: 'skillssummary',
                        id: 'skillsGaugeTab',
                        closable: true,
                        title: 'Skills Summary',
                        background: 'transparent'
                    }
                ]
            },
            bind: {
                title: '{selectedNodePath}',
                html: '<iframe src="{selectedNodeUrl}" frameborder="0" width="100%" height="100%"></iframe>'
            }
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

    // requires: [
    //     'Ext.plugin.Viewport'
    //     //,
    //     // 'Ext.window.MessageBox',

    //     // 'ResumeViewer.view.main.MainController',
    //     // 'ResumeViewer.view.main.MainModel',
    //     // 'ResumeViewer.view.main.List'
    // ],

    // controller: 'main',
    // viewModel: 'main',

    // ui: 'navigation',

    // tabBarHeaderPosition: 1,
    // titleRotation: 0,
    // tabRotation: 0,

    // header: {
    //     layout: {
    //         align: 'stretchmax'
    //     },
    //     title: {
    //         bind: {
    //             text: '{name}'
    //         },
    //         flex: 0
    //     },
    //     iconCls: 'fa-th-list'
    // },

    // tabBar: {
    //     flex: 1,
    //     layout: {
    //         align: 'stretch',
    //         overflowHandler: 'none'
    //     }
    // },

    // responsiveConfig: {
    //     tall: {
    //         headerPosition: 'top'
    //     },
    //     wide: {
    //         headerPosition: 'left'
    //     }
    // },

    // defaults: {
    //     bodyPadding: 20,
    //     tabConfig: {
    //         plugins: 'responsive',
    //         responsiveConfig: {
    //             wide: {
    //                 iconAlign: 'left',
    //                 textAlign: 'left'
    //             },
    //             tall: {
    //                 iconAlign: 'top',
    //                 textAlign: 'center',
    //                 width: 120
    //             }
    //         }
    //     }
    // },

    // items: [{
    //     title: 'Home',
    //     iconCls: 'fa-home',
    //     // The following grid shares a store with the classic version's grid as well!
    //     items: [{
    //         xtype: 'mainlist'
    //     }]
    // }, {
    //     title: 'Users',
    //     iconCls: 'fa-user',
    //     bind: {
    //         html: '{loremIpsum}'
    //     }
    // }, {
    //     title: 'Groups',
    //     iconCls: 'fa-users',
    //     bind: {
    //         html: '{loremIpsum}'
    //     }
    // }, {
    //     title: 'Settings',
    //     iconCls: 'fa-cog',
    //     bind: {
    //         html: '{loremIpsum}'
    //     }
    // }]
});
