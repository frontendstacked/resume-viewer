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
            listeners: {
                endupdate: {
                    fn: function () {
                        Ext.getCmp('nav-treepanel').setSelection(this.getAt(0));
                    }
                }
            },
            root: {
                expanded: true,
                children: [
                    {
                        text: 'Welcome',
                        leaf: true,
                        data: {
                            type: 'panel',
                            view: 'welcomepanel',
                            html:   '<h1>Welcome and Thanks For Stopping By!</h1>' +
                                    '<h2>Please excuse my dust as I continue iterating on this early beta.</h2>' +
                                    '<p>In the meantime, please feel free to click around, using the "Navigation" tree on the left. I\'d suggest starting with "Skills Charts/List" or "Samples."</p>' +
                                    '<p>I\'ll be posting a "to-do" list here soon to let you know what kinds of features I plan on adding: things such as sorting and filtering the skills charts, a tab layout for samples, etc.</p>' +
                                    '<p>Right now, the skills charts\' load mask isn\'t displaying while they generate. Please give them a couple of seconds.</p>'
                        }
                    },
                    {
                        text: 'Bio',
                        leaf: true,
                        data: {
                            view: 'biopanel',
                            type: 'panel',
                            html:   '<h1>Matt\'s Bio</h1>' +
                                    '<p>Matt Dodson is a front end-focsed Web developer and Flash expatriate that is also competent in design and the back end area of the Web technology stack.</p>' +
                                    '<p>He started his career in 2001 as a Web designer for a small database consulting startup, but discovered an enjoyment for developing data-driven Flash and Web apps and found a niche in the DC-area non-profit sector designing and developing Web interfaces to FileMaker Pro databases.</p>' +
                                    '<p>In 2007, he took a Software Engineer position at The Washington Post, joining the development team supporting Slate Magazine. His primary role was focused on the front end area of the site’s technology stack while supporting editorial staff by designing and developing small, data-driven Flash interactives for various stories.</p>' +
                                    '<p>After Flash lost favor in 2010—coincidentally, after Steve Jobs’ famous open letter to Adobe that April—he shifted focus to learning how to create the same level of data-driven, interactive Web apps using native browser technologies. That’s been his primary area of interest ever since.</p>' +
                                    '<p>Matt was born in Washington, DC, grew up in Northern Virginia, and now lives in the District. He is a fan of Pink Floyd and the Washington Redskins. Growing up in a working class family, college after high school was never in the cards dealt to him, but he began putting himself through school at the local Strayer University at the turn of the decade and hopes to save up enough money to graduate from Penn State, where his transfer to their online program was recently accepted.</p>'
                        }
                    },
                    {
                        text: 'Qualifications',
                        leaf: true,
                        data: {
                            view: 'qualificationspanel',
                            type: 'qualificationspanel'
                        }
                    },
                    {
                        text: 'Skills Charts',
                        leaf: true,
                        data: {
                            view: 'skillssummary',
                            type: 'skillssummary'
                        }
                    },
                    {
                        text: 'Skills List',
                        leaf: true,
                        data: {
                            view: 'skillsgrid',
                            type: 'skillsgrid'
                        }
                    },
                    {
                        text: 'Samples',
                        children: [
                            {
                                text: 'PBS LearningMedia',
                                children: [
                                    {
                                        text: 'Favorites & Folders',
                                        leaf: true,
                                        data: {
                                            url: 'http://www.pbslearningmedia.org/favorites/',
                                            view: 'pbsfavoritespanel',
                                            type: 'uxiframe'
                                        }
                                    },
                                    {
                                        text: 'Teacher Tools',
                                        leaf: true,
                                        data: {
                                            url: 'http://www.pbslearningmedia.org/tools/',
                                            view: 'teachertoolspanel',
                                            type: 'uxiframe'
                                        }
                                    },
                                    {
                                        text: 'Student Homepage',
                                        leaf: true,
                                        data: {
                                            url: 'http://www.pbslearningmedia.org/student/',
                                            view: 'studenthomepagepanel',
                                            type: 'uxiframe'
                                        }
                                    }
                                ],
                                data: {
                                    url: 'http://www.pbslearningmedia.org',
                                    view: 'pbslmpanel',
                                    type: 'uxiframe'
                                }
                            },
                            {
                                text: 'Slate\'s Maps of the Week',
                                leaf: true,
                                data: {
                                    url: 'http://www.slate.com/authors.matt_dodson.html',
                                    view: 'slatemapspanel',
                                    type: 'uxiframe'
                                }
                            },
                            {
                                text: 'Monroe Street Market',
                                leaf: true,
                                data: {
                                    url: 'http://www.monroestreetmarket.com',
                                    view: 'hzmsmpanel',
                                    type: 'uxiframe'
                                }
                            }
                        ],
                        data: {
                            view: 'samplespanel',
                            type: 'panel',
                            html: '<h2>Please select item under the samples node to view it here.</h2>'
                        }
                    },
                    {
                        text: 'Work Experience',
                        leaf: true,
                        data: {
                            view: 'jobhistorypanel',
                            type: 'jobhistorypanel'
                        }
                    },
                    {
                        text: 'Education',
                        leaf: true,
                        data: {
                            view: 'educationpanel',
                            type: 'educationpanel'
                        }
                    }
                ]
            }
        }
    }
    //TODO - add data, formulas and/or methods to support your view
});
