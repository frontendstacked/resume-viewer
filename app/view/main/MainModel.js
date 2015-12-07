/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ResumeViewer.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    formulas: {
        selectedNodePath: function (get) {
            var selection = get('treelist.selection'),
                path;
            if (selection) {
                path = selection.getPath('text');
                path = path.replace(/^\/Root/, '');
                return 'Selected: ' + path;
            } else {
                return 'No node selected';
            }
        },
        selectedNodeUrl: function (get) {
            var selection = get('treelist.selection'),
                url;
            if (selection && selection.data.url) {
                url = selection.data.url;
                return url;
            } else {
                return '';
            }
        },
        selectedNodeDesc: function (get) {
            var selection = get('treelist.selection'),
                desc;
            if (selection && selection.data.desc) {
                desc = selection.data.desc;
                return desc;
            } else {
                return 'Sorry, no description available.';
            }
        },
        selectedNodePanel: function (get) {
            var selection = get('treelist.selection');
            console.log(selection);
            // return {
            //     title: 'ATDHVSGHLVDJ0',
            //     xtype: 'skillssummary',
            //     cls: 'fes-raised',
            //     html: 'HTML'
            // };
        }
    },
    stores: {
        navItems: {
            type: 'tree',
            root: {
                expanded: true,
                children: [
                    {
                        text: 'Bio',
                        url: '/resources/bio.html',
                        leaf: true
                    },
                    {
                        text: 'Qualifications',
                        expanded: false,
                        leaf: true
                    },
                    {
                        text: 'Skills',
                        leaf: true
                    },
                    {
                        text: 'Samples',
                        children: [
                            {
                                text: 'PBS LearningMedia',
                                url: 'http://www.pbslearningmedia.org',
                                children: [
                                    {
                                        text: 'Teacher Tools',
                                        url: 'http://www.pbslearningmedia.org/tools/',
                                        leaf: true
                                    },
                                    {
                                        text: 'Student Homepage',
                                        url: 'http://www.pbslearningmedia.org/student/',
                                        leaf: true,
                                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text: 'Work Experience',
                        leaf: true
                    },
                    {
                        text: 'Education',
                        leaf: true
                    }
                ]
            }
        }
    }
    //TODO - add data, formulas and/or methods to support your view
});
