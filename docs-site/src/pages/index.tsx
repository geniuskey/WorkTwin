import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            문서 보기
          </Link>
          <Link
            className="button button--primary button--lg"
            to="pathname:///slides/"
            style={{marginLeft: '1rem'}}>
            슬라이드 ▶
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="내 메일함으로 만드는 업무 에이전트"
      description="수년간 쌓인 이메일함을 학습해 나를 대신해 검색·응답하는 개인 전용 에이전트 WorkTwin. RAG 메일 검색, 답장 스킬, 역할별 서브에이전트까지 개념과 아키텍처를 정리했습니다.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
