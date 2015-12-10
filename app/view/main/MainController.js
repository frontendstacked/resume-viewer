/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ResumeViewer.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'ResumeViewer.view.education.Education',
        'ResumeViewer.view.qualifications.Summary',
        'ResumeViewer.view.jobs.History',
        'ResumeViewer.view.jobs.HistoryController',
        'ResumeViewer.view.jobs.HistoryModel',
        'ResumeViewer.view.skills.Panel',
        'ResumeViewer.view.skills.PanelController',
        'ResumeViewer.view.skills.PanelModel',
        'ResumeViewer.view.skills.Skills',
        'ResumeViewer.view.skills.SkillsController',
        'ResumeViewer.view.skills.SkillsModel'
    ],

    alias: 'controller.main',

    beforeRender: function (main) {
        // TODO - welcome message goes here
        // Ext.Msg.show({
        //     title: 'Welcome!',
        //     message: 'Greetings and salutations.',
        //     buttons: Ext.Msg.OK,
        //     shadow: false
        // });
    },
    onNavItemSelect: function (treemodel, record, index) {
        var target = Ext.getCmp('centerRegion'),
            type = record.get('data').type,
            view = record.get('data').view,
            id = [target.id, view].join('-'),
            title = record.get('text'),
            src = record.get('data').url || null,
            html = record.get('data').html || null,
            items = record.get('data').items || null,
            requestedItem = target.queryById(id),
            visibleItems = target.query('> panel[hidden=false]');
        // TODO: Find out if a card layout manager could handle this better
        for (var i = 0; i < visibleItems.length; i += 1) {
            visibleItems[i].hide();
        }
        if (!requestedItem) {
            requestedItem = target.add(this.createConfig({
                type: type,
                id: id,
                title: title,
                src: src,
                html: html,
                items: items
            }));
        }
        requestedItem.show();
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    onFullscreenClick: function (menuItem) {
        if ( this.getFullscreenElement() ) {
            this.exitFullscreen();
            menuItem.setIconCls("fa fa-arrows-alt");
            menuItem.setText("Fullscreen");
        } else {
            this.enterFullscreen(document.body);
            menuItem.setIconCls("fa fa-close");
            menuItem.setText("Exit Fullscreen");
        }
    },
    //  Non-handlers
    createConfig: function (cfg) {
        var titleCmp = cfg.src? cfg.title + '&#160;&#160;<small>' + cfg.src + '</small>&#160;<a href="' + cfg.src + '" title="View in new tab" target="_blank"><span class="fa fa-expand fes-sample-expand"></span></a>' : cfg.title;
        baseConfig = {
            xtype: cfg.type,
            id: cfg.id,
            cls: 'fes-raised fes-center-firstchild',
            title: titleCmp,
            margin: 25,
            background: 'rgba(0,0,0,0)',
            closable: true,
            listeners: {
                close: {
                    fn: function () {
                        Ext.getCmp('nav-treepanel').setSelection(null);
                    }
                }
            }
        };
        if (cfg.html) {
            baseConfig.bodyPadding = '15 20';
            baseConfig.html = cfg.html;
        }
        if (cfg.items) {
            baseConfig.items = cfg.items;
        }
        if(cfg.selected) {
            baseConfig.selected = cfg.selected;
        }

        // view/xtype-specific modifications to base panel common configs
        switch (cfg.type) {
            case 'uxiframe':
                baseConfig.xtype = 'panel';
                baseConfig.layout = 'fit';
                baseConfig.items = {
                    xtype: 'uxiframe',
                    src: cfg.src
                };
                break;
        }
        return baseConfig;
    },
    // TODO: Conver Fullscreen Utils into Module ...............................
    /**
     * @param {HTMLElement} element Either the document object or a specific
     * element. (Chrome seems to need document.body)
     */
    enterFullscreen: function (el) {
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if(el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        } else if(el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        } else if(el.msRequestFullscreen) {
            el.msRequestFullscreen();
        } else {
            Ext.Msg.alert('Sorry, Fullscreen not supported.');
        }
    },
    exitFullscreen: function () {
        // Note: always call on document, regardless of element in fs mode
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if(document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    },
    // Not very useful stored as an upper-level var. Changes as you enter & exit fullscreen.
    getFullscreenElement: function () {
        return document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement;
    }});
