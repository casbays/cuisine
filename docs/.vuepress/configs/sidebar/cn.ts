import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarCN: SidebarConfig = {
    '/usages': [
        {
            text: 'Usage',
            children: [{
                text: 'Login',
                link: '/usages/login.md'
            }, {
                text: 'Home',
                link: '/usages/dashboard.md'
            }, {
                text: 'Mission Center',
                link: '/usages/task.md'
            }, {
                text: 'Fund',
                link: '/usages/fund.md'
            }, {
                text: 'Investor Relations',
                link: '/usages/ir.md'
            }, {
                text: 'Pre-investment',
                link: '/usages/preivs.md'
            }, {
                text: 'Post-investment',
                link: '/usages/postivs.md'
            }, {
                text: 'Report Center',
                link: '/usages/report.md'
            }],
        },
    ],
    '/references': [
        {
            text: 'Reference',
            children: [{
                text: 'Portfolio Review',
                link: '/references/review.md'
            }],
        }
    ]
}
