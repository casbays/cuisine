import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarCN: NavbarConfig = [
    {
        text: '指南',
        link: '/'
    },
    {
        text: '菜式',
        children: [{
            text: '下饭菜',
            link: '/recipes/ricepartner.md'
        }, {
            text: '快手菜',
            link: '/recipes/newbies.md'
        }, {
            text: '下酒菜',
            link: '/usages/dashboard.md'
        }, {
            text: '创意菜',
            link: '/usages/dashboard.md'
        }, {
            text: '凉菜',
            link: '/usages/dashboard.md'
        }]
    },
    {
        text: '家常',
        children: [{
            text: '热菜',
            link: '/references/review.md'
        }, {
            text: '凉菜',
            link: '/references/review.md'
        }, {
            text: '素菜',
            link: '/references/review.md'
        }, {
            text: '靓汤',
            link: '/references/review.md'
        }, {
            text: '粥品',
            link: '/references/review.md'
        }, {
            text: '点心',
            link: '/references/review.md'
        }, {
            text: '卤味',
            link: '/references/review.md'
        }, {
            text: '海鲜',
            link: '/references/review.md'
        }, {
            text: '瘦身',
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
