import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEN: NavbarConfig = [
    {
        text: '指南',
        link: '/zh'
    },
    {
        text: '使用',
        children: [{
            text: '小炒',
            link: '/usages/login.md'
        }, {
            text: '干锅',
            link: '/usages/dashboard.md'
        }]
    },
    {
        text: '参考',
        children: [{
            text: '投资复盘',
            link: '/zh/references/review.md'
        }]
    }
]
