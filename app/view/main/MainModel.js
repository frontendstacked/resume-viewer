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
        }
    },
    stores: {
        // TODO: Store this data externally where it will be easier to edit
        navItems: {
            type: 'tree',
            root: {
                expanded: true,
                children: [
                    {
                        text: 'Bio',
                        leaf: true,
                        data: {
                            url: '/resources/bio.html',
                            view: 'biopanel',
                            type: 'panel'
                        }
                    },
                    {
                        text: 'Qualifications',
                        leaf: true,
                        data: {
                            view: 'qualificationspanel',
                            type: 'panel'
                        }
                    },
                    {
                        text: 'Skills',
                        leaf: true,
                        data: {
                            view: 'skillssummary',
                            type: 'skillssummary'
                        }
                    },
                    {
                        text: 'Samples',
                        children: [
                            {
                                text: 'PBS LearningMedia',
                                children: [
                                    {
                                        text: 'Teacher Tools',
                                        leaf: true,
                                        data: {
                                            url: 'http://www.pbslearningmedia.org/tools/',
                                            view: 'teachertoolspanel',
                                            type: 'panel'
                                        }
                                    },
                                    {
                                        text: 'Student Homepage',
                                        leaf: true,
                                        data: {
                                            url: 'http://www.pbslearningmedia.org/student/',
                                            view: 'studenthomepagepanel',
                                            type: 'panel'
                                        }
                                    }
                                ],
                                data: {
                                    url: 'http://www.pbslearningmedia.org',
                                    view: 'pbslmpanel',
                                    type: 'panel'
                                }
                            }
                        ],
                        data: {
                            url: '',
                            view: 'samplespanel',
                            type: 'panel'
                        }
                    },
                    {
                        text: 'Work Experience',
                        leaf: true,
                        data: {
                            url: '',
                            view: 'workexperiencepanel',
                            type: 'panel'
                        }
                    },
                    {
                        text: 'Education',
                        leaf: true,
                        data: {
                            url: '',
                            view: 'educationpanel',
                            type: 'panel'
                        }
                    }
                ]
            }
        }
    }
    //TODO - add data, formulas and/or methods to support your view
});
