import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'WorkTwin',
  tagline: '내 메일함으로 만드는, 나보다 나를 잘 아는 업무 에이전트',
  favicon: 'img/favicon.svg',

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

  headTags: [
    {tagName: 'meta', attributes: {property: 'og:type', content: 'website'}},
    {tagName: 'meta', attributes: {property: 'og:site_name', content: 'WorkTwin'}},
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'WorkTwin',
        alternateName: '내 메일함으로 만드는 업무 에이전트',
        url: 'https://geniuskey.github.io/WorkTwin/',
        description:
          '수년간 쌓인 이메일함을 학습해 나를 대신해 메일 맥락을 검색·이해·응답하는 개인 전용 에이전트 WorkTwin의 개념·아키텍처·로드맵 문서.',
        inLanguage: 'ko',
      }),
    },
  ],

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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          // 슬라이드는 라우트가 아닌 정적 파일이라 자동 수집되지 않으므로 직접 추가한다.
          createSitemapItems: async ({defaultCreateSitemapItems, ...rest}) => {
            const items = await defaultCreateSitemapItems(rest);
            return [
              ...items.map((item) =>
                item.url === 'https://geniuskey.github.io/WorkTwin/'
                  ? {...item, priority: 1.0}
                  : item,
              ),
              {
                url: 'https://geniuskey.github.io/WorkTwin/slides/',
                changefreq: 'weekly' as const,
                priority: 0.8,
              },
            ];
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/og-image.png',
    metadata: [
      {name: 'keywords', content: 'WorkTwin, 이메일 에이전트, 메일함 RAG, 벡터 DB, agent skill, sub-agent, 업무 자동화, AI 에이전트, 로컬 우선'},
      {property: 'og:image:width', content: '1200'},
      {property: 'og:image:height', content: '630'},
      {property: 'og:image:alt', content: 'WorkTwin — 내 메일함으로 만드는, 나보다 나를 잘 아는 에이전트'},
    ],
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
          to: '/docs/talk-notes',
          position: 'left',
          label: '발표 노트',
        },
        {
          to: 'pathname:///slides/',
          position: 'left',
          label: '슬라이드',
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
            {label: '슬라이드', to: 'pathname:///slides/'},
            {label: '발표 노트', to: '/docs/talk-notes'},
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
