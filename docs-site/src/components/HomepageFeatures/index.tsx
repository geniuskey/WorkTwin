import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: ReactNode;
  description: ReactNode;
};

const gradient = (id: string) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#9B82FF" />
      <stop offset="1" stopColor="#2BEAD0" />
    </linearGradient>
  </defs>
);

const FeatureList: FeatureItem[] = [
  {
    title: '아는 것 — 받은 메일함 → RAG',
    icon: (
      <svg viewBox="0 0 48 48" className={styles.featureSvg} role="img" aria-label="메일함 검색">
        {gradient('f1')}
        <rect x="6" y="11" width="28" height="20" rx="3" fill="none" stroke="url(#f1)" strokeWidth="2.5" />
        <path d="M6.8 12.5 20 22l13.2-9.5" fill="none" stroke="url(#f1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="8" fill="none" stroke="url(#f1)" strokeWidth="2.5" />
        <path d="M38 38l5 5" stroke="url(#f1)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    description: (
      <>
        받은 메일함을 로컬 DB와 RAG 벡터 DB로 색인해, 수 기가바이트 규모의
        메일함도 챗봇으로 검색·대화할 수 있게 합니다.
      </>
    ),
  },
  {
    title: '답하는 것 — 보낸 메일함 → 답장 스킬',
    icon: (
      <svg viewBox="0 0 48 48" className={styles.featureSvg} role="img" aria-label="자동 답장">
        {gradient('f2')}
        <path d="M42 6 20 28" fill="none" stroke="url(#f2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 6 28 42l-8-14-14-8z" fill="none" stroke="url(#f2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description: (
      <>
        보낸 메일함을 분석해 답장·리뷰 기준을 추출하고, 반복적인 패턴은 agent
        skill로 만들어 나 대신 답장하게 합니다.
      </>
    ),
  },
  {
    title: '맡은 것 — 메일함 전체 → 역할과 서브에이전트',
    icon: (
      <svg viewBox="0 0 48 48" className={styles.featureSvg} role="img" aria-label="역할별 서브에이전트">
        {gradient('f3')}
        <circle cx="24" cy="9" r="5.5" fill="none" stroke="url(#f3)" strokeWidth="2.5" />
        <circle cx="9" cy="38" r="5.5" fill="none" stroke="url(#f3)" strokeWidth="2.5" />
        <circle cx="24" cy="38" r="5.5" fill="none" stroke="url(#f3)" strokeWidth="2.5" />
        <circle cx="39" cy="38" r="5.5" fill="none" stroke="url(#f3)" strokeWidth="2.5" />
        <path d="M24 14.5v8M9 32.5v-4h30v4M24 22.5v10" fill="none" stroke="url(#f3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description: (
      <>
        메일함 분석으로 나의 업무 역할을 정의하고, 역할별 업무와 액션을
        정리해 각 역할을 독립된 sub-agent로 승격시킵니다.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">{icon}</div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
