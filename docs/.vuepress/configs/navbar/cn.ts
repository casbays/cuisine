import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarCN: NavbarConfig = [
    {
        text: '指南',
        link: '/'
    },
    {
        text: '家常菜',
        children: [{
            text: '小炒',
            link: '/usages/login.md'
        }, {
            text: '干锅',
            link: '/usages/dashboard.md'
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
