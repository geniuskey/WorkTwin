import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '아는 것 — 받은 메일함 → RAG',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        받은 메일함을 로컬 DB와 RAG 벡터 DB로 색인해, 수 기가바이트 규모의
        메일함도 챗봇으로 검색·대화할 수 있게 합니다.
      </>
    ),
  },
  {
    title: '답하는 것 — 보낸 메일함 → 답장 스킬',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        보낸 메일함을 분석해 답장·리뷰 기준을 추출하고, 반복적인 패턴은 agent
        skill로 만들어 나 대신 답장하게 합니다.
      </>
    ),
  },
  {
    title: '맡은 것 — 메일함 전체 → 역할과 서브에이전트',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        메일함 분석으로 나의 업무 역할을 정의하고, 역할별 업무와 액션을
        정리해 각 역할을 독립된 sub-agent로 승격시킵니다.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
