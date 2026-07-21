import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'WorkTwin',
  tagline: '내 메일함으로 만드는, 나보다 나를 잘 아는 업무 에이전트',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://geniuskey.github.io',
  baseUrl: '/WorkTwin/',

  organizationName: 'geniuskey',
  projectName: 'WorkTwin',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/geniuskey/WorkTwin/tree/main/docs-site/',
          routeBasePath: '/docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'WorkTwin',
      logo: {
        alt: 'WorkTwin Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: '문서',
        },
        {
          to: '/docs/seminar/seminar-talk',
          position: 'left',
          label: '세미나',
        },
        {
          href: 'https://github.com/geniuskey/WorkTwin',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '문서',
          items: [
            {label: '소개', to: '/docs/intro'},
            {label: '아키텍처', to: '/docs/architecture'},
            {label: '로드맵', to: '/docs/roadmap'},
          ],
        },
        {
          title: '자료',
          items: [
            {label: '세미나 발표 자료', to: '/docs/seminar/seminar-talk'},
            {
              label: '원본 아이디어 메모 (draft.txt)',
              href: 'https://github.com/geniuskey/WorkTwin/blob/main/draft.txt',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub', href: 'https://github.com/geniuskey/WorkTwin'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WorkTwin. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
