import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEN: NavbarConfig = [
    {
        text: '指南',
        link: '/zh'
    },
    {
        text: '使用',
        children: [{
            text: '登录',
            link: '/zh/usages/login.md'
        }, {
            text: '首页',
            link: '/zh/usages/dashboard.md'
        }, {
            text: '任务中心',
            link: '/zh/usages/task.md'
        }, {
            text: '基金',
            link: '/zh/usages/fund.md'
        }, {
            text: '投资者关系',
            link: '/zh/usages/ir.md'
        }, {
            text: '投前协作',
            link: '/zh/usages/preivs.md'
        }, {
            text: '投后管理',
            link: '/zh/usages/postivs.md'
        }, {
            text: '报表中心',
            link: '/zh/usages/report.md'
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
