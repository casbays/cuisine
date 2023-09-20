import { defaultTheme } from 'vuepress'

import { searchProPlugin } from "vuepress-plugin-search-pro"

import {
    navbarEN,
    navbarCN,
    sidebarEN,
    sidebarCN,
} from './configs/index'

module.exports = {
    port: 8080,
    base: '/cuisine',
    head: [
        [
            'link', { rel: 'icon', href: '/zongzi.png' }
        ]
    ],
    locales: {
        '/en': {
            logo: '/zongzi.png',
            lang: 'English',
            title: 'Chinese cuisine',
            description: 'Life is in the world, eat and drink'
        },
        '/': {
            logo: '/zongzi.png',
            lang: '简体中文',
            title: '粽食',
            description: '人生在世，吃喝二字',
        },
    },
    plugins: [
        searchProPlugin({
            indexContent: true,
            hotReload: true,
            customFields: [
                {
                    getter: ({ frontmatter }) => frontmatter.tag as string[],
                    formatter: `Tag: $content`,
                },
            ],
        })
    ],
    theme: defaultTheme({
        logo: '/zongzi.png',
        locales: {
            '/': {
                selectLanguageName: '简体中文',
                selectLanguageText: '简体中文',
                navbar: navbarCN,
                sidebar: sidebarCN
            },
            '/en': {
                selectLanguageName: 'English',
                selectLanguageText: 'English',
                navbar: navbarEN,
                sidebar: sidebarEN
            }
        }
    }),
}
