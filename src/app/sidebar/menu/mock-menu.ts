import MenuItem from './menuItem';

export const menu: MenuItem[] = [
    {
        title: "General",
        subItems: [{
            title: "Home", iconClass: "fa-home",
            subItems: [
                { title: "Dashboard", link: "Dashboard" },
                { title: "Dashboard2", link: "Dashboard2" },
                { title: "Dashboard3", link: "Dashboard3" }
            ]
        },
        {
            title: "Forms", iconClass: "fa-edit",
            subItems: [
                { title: "General Form", link: "GeneralForm" },
                { title: "Advanced Components", link: "AdvancedComponents" },
                { title: "Form Validation", link: "FormValidation" },
                { title: "Form Wizard", link: "FormWizard" },
                { title: "Form Upload", link: "FormUpload" },
                { title: "Form Buttons", link: "FormButtons" }
            ]
        },
        {
            title: "UI Elements", iconClass: "fa-desktop",
            subItems: [
                { title: "General Elements", link: "GeneralElements" },
                { title: "Media Gallery", link: "MediaGallery" },
                { title: "Typography", link: "Typography" },
                { title: "Icons", link: "Icons" },
                { title: "Glyphicons", link: "Glyphicons" },
                { title: "Widgets", link: "Widgets" },
                { title: "Invoice", link: "Invoice" },
                { title: "Inbox", link: "Inbox" },
                { title: "Calendar", link: "Calendar" }
            ]
        },
        {
            title: "Tables", iconClass: "fa-table",
            subItems: [
                { title: "Tables", link: "Tables" },
                { title: "Table Dynamic", link: "TableDynamic" }
            ]
        },
        {
            title: "Data Presentation", iconClass: "fa-bar-chart-o",
            subItems: [
                { title: "Chart JS", link: "ChartJS" },
                { title: "Chart JS2", link: "ChartJS2" },
                { title: "Moris JS", link: "MorisJS" },
                { title: "ECharts", link: "ECharts" },
                { title: "Other Charts", link: "OtherCharts" }
            ]
        },
        {
            title: "Layouts", iconClass: "fa-clone",
            subItems: [
                { title: "Fixed Sidebar", link: "FixedSidebar" },
                { title: "Fixed Footer", link: "Fixed Footer" }
            ]
        }
        ]
    },
    {
        title: "Live On",
        subItems: [
            {
                title: "Additional Pages", iconClass: "fa-bug",
                subItems: [
                    { title: "E-commerce", link: "E-commerce" },
                    { title: "Projects", link: "Projects" },
                    { title: "Project Detail", link: "Project Detail" },
                    { title: "Contacts", link: "Contacts" },
                    { title: "Profile", link: "Profile" }
                ]
            },
            {
                title: "Extras", iconClass: "fa fa-windows",
                subItems: [
                    { title: "403 Error", link: "403 Error" },
                    { title: "404 Error", link: "404 Error" },
                    { title: "500 Error", link: "500 Error" },
                    { title: "Plain Page", link: "Plain Page" },
                    { title: "Login Page", link: "Login Page" },
                    { title: "Pricing Tables", link: "Pricing Tables" }
                ]
            },
            {
                title: "Multilevel Menu", iconClass: "fa fa-sitemap",
                subItems: [
                    { title: "Level One", link: "#level1_2" },
                    {
                        title: "Level One",
                        subItems: [
                            { title: "Level Two", link: "#level2_1" },
                            { title: "Level Two", link: "#level2_1", },
                            { title: "Level Two", link: "#level2_1", }
                        ]
                    },
                    { title: "Level One", link: "#level1_2" }
                ]
            },
            {
                title: "Landing Page", iconClass: "fa fa-laptop",
                label: "Coming Soon", labelClass: "label-success",
                link: "javascript:void(0)"
            }
        ]
    }
];