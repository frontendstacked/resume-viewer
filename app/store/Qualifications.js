Ext.define('ResumeViewer.store.Qualifications', {
    extend: 'Ext.data.Store',

    alias: 'store.qualifications',
    storeId: 'qualificationsStore',

    fields: [
        'desc'
    ],

    data: { items: [
        { desc: "A New Media specialist with 15 years of experience developing for the Web, the past 8 years focusing primarily on the Front End side of Web development in the fast-paced News/Media industry"},
        { desc: "Experience collaborating with Editorial, Marketing, Advertising, Design, and Technical teams to produce rich, interactive features for PBS, Washington Post.Newsweek Interactive and the Washington Redskins"},
        { desc: "Experience recommending and implementing software and workflow best practices for scalable, modular JavaScript, Less/CSS and Grunt for responsive, enterprise-level desktop and mobile Web projects" },


        { desc: "Passion for using traditionally-considered, Front End technologies for the full stack of projects; currently using Node, Express, MongoDB on the Back End while experimenting with different JS frameworks on the Front End" },
        { desc: "Passion for JavaScript design patterns & frameworks (Ext JS, Backbone, Angular, React)" },
        { desc: "Experience with various Front End responsive frameworks such as Twitter Bootstrap and Foundation" },
        { desc: "Experience developing and maintaining projects using popular JavaScript frameworks" },
        { desc: "Experience in project planning, representing the Front End (HTML/CSS/JavaScript) side of Web Development" },
        { desc: "Experience contributing to the Back End side of projects in Django, .Net and Java environments" },
        { desc: "Experience with Objective-C in native mobile apps, demonstrated with the Foreign Policy Wide Angle iPhone app" },
        { desc: "Highly creative, pixel perfectionist with a talent for design and strong enthusiasm for collaborating with different teams to create unique, yet enjoyable and intuitive user experiences" },
        { desc: "Agile software development evangelist, certified ScrumMaster with Scrum Alliance, Inc." },

        { desc: "Possesses expertise in HTML/CSS/JavaScript development for high-traffic, enterprise-level Web sites, demonstrated at Slate Magazine and PBS"},
        { desc: "Possesses expertise in Object Oriented JavaScript and ActionScript with strong knowledge of related programming design patterns as demonstrated in various media players and interactive features for Slate Magazine and other properties of The Slate Group."},
        { desc: "Demonstrated knowledge of Python and the Django framework on PBS's LearningMedia site, Slate Magazine’s SlateV, The Hive, and MySlate productions in addition to various Washington Redskins’ microsites such as WOW Redskins and Redskins Health & Wellness."},
        { desc: "Demonstrated understanding of GIS technologies, QGIS and Tilemill, with Slate’s Map of the Week."}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
