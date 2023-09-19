import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarCN: NavbarConfig = [
    {
        text: '指南',
        link: '/'
    },
    {
        text: '家常菜',
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
        }]
    },
    {
        text: '私房菜',
        children: [{
            text: 'Portfolio Review',
            link: '/references/review.md'
        }]
    },
    {
        text: '菜系',
        children: [{
            text: '粤菜',
            link: '/references/review.md'
        }, {
            text: '川菜',
            link: '/references/review.md'
        }, {
            text: '苏菜',
            link: '/references/review.md'
        }, {
            text: '浙菜',
            link: '/references/review.md'
        }, {
            text: '闽菜',
            link: '/references/review.md'
        }, {
            text: '湘菜',
            link: '/references/review.md'
        }, {
            text: '徽菜',
            link: '/references/review.md'
        }]
    }
]
