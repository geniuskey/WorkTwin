import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: '개요',
      items: ['intro', 'background-motivation', 'core-concept'],
    },
    {
      type: 'category',
      label: '아키텍처',
      items: ['architecture'],
    },
    {
      type: 'category',
      label: '핵심 기능',
      items: [
        'features/mailbox-sync-rag',
        'features/sent-mail-persona-analysis',
        'features/auto-reply-skill',
        'features/role-extraction-subagents',
        'features/chatbot-inbox-search',
      ],
    },
    {
      type: 'category',
      label: '프라이버시',
      items: ['privacy-local-first'],
    },
    {
      type: 'category',
      label: '로드맵',
      items: ['roadmap'],
    },
    {
      type: 'category',
      label: '발표 자료',
      items: ['talk-notes'],
    },
  ],
};

export default sidebars;
