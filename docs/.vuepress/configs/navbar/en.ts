import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEN: NavbarConfig = [
    {
        text: 'Guide',
        link: '/en'
    },
    {
        text: 'Feature',
        children: [{
            text: 'Rice partner',
            link: '/en/recipes/ricepartner.md'
        }, {
            text: 'Suitable for newbies',
            link: '/en/recipes/newbies.md'
        }, {
            text: 'Wine partner',
            link: '/usages/dashboard.md'
        }, {
            text: 'Originality',
            link: '/usages/dashboard.md'
        }]
    },
    {
        text: 'Homely',
        children: [{
            text: 'Hot',
            link: '/references/review.md'
        }, {
            text: 'Cold',
            link: '/references/review.md'
        }, {
            text: 'Vegetable',
            link: '/references/review.md'
        }, {
            text: 'Soup',
            link: '/references/review.md'
        }, {
            text: 'Gruel',
            link: '/references/review.md'
        }, {
            text: 'Dim sum',
            link: '/references/review.md'
        }, {
            text: 'Halogen',
            link: '/references/review.md'
        }, {
            text: 'Seafood',
            link: '/references/review.md'
        }, {
            text: 'Slimming',
            link: '/references/review.md'
        }]
    },
    {
        text: 'Region',
        children: [{
            text: 'Shandong',
            link: '/references/review.md'
        }, {
            text: 'Guangdong',
            link: '/references/review.md'
        }, {
            text: 'Sichuan',
            link: '/references/review.md'
        }, {
            text: 'Jiangsu',
            link: '/references/review.md'
        }, {
            text: 'Zhejiang',
            link: '/references/review.md'
        }, {
            text: 'Fujian',
            link: '/references/review.md'
        }, {
            text: 'Hunan',
            link: '/references/review.md'
        }, {
            text: 'Anhui',
            link: '/references/review.md'
        }]
    }
]
