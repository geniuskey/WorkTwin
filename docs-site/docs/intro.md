---
title: 소개
description: WorkTwin이 무엇이고 이 문서를 어떻게 읽으면 좋은지 안내합니다.
---

# WorkTwin

**WorkTwin**은 내 이메일함을 학습 데이터로 삼아, 나 대신 메일 업무를 이해하고 처리할 수 있는 개인용 에이전트를 만드는 프로젝트입니다.

한 줄로 요약하면 이렇습니다.

> 수년간 쌓인 내 메일함에는 내가 어떤 일을 어떻게 해왔는지에 대한 기록이 가장 촘촘하게 담겨 있다. 이걸 그냥 두지 말고, **나를 대신할 수 있는 에이전트(WorkTwin)** 를 만드는 데 쓰자.

WorkTwin은 [Tauri](https://tauri.app/) 기반 데스크톱 앱으로 동작하며, 4개의 탭 — **동기화(Sync) · 메일함(Inbox) · 챗봇(Chatbot) · 설정(Settings)** — 으로 구성됩니다. 받은 메일함을 로컬 DB와 RAG(Retrieval-Augmented Generation) 벡터 DB로 색인해 수 기가바이트에 달하는 메일을 챗봇으로 검색·대화하고, 보낸 메일함을 분석해 나의 답장 스타일과 업무 역할을 추출한 뒤 이를 에이전트 스킬과 서브에이전트로 승격시키는 것이 핵심 아이디어입니다.

:::info 이 사이트의 성격
이 사이트는 **아이디어를 정리한 문서/발표 자료**이며, WorkTwin 앱 자체의 구현체는 아직 없습니다. 원본 아이디어 메모는 저장소의 [`draft.txt`](https://github.com/geniuskey/WorkTwin/blob/main/draft.txt)에서 확인할 수 있습니다.
:::

## 이 문서를 읽는 순서

이 문서는 아래 흐름으로 읽으면 가장 자연스럽습니다.

1. **[배경과 문제의식](./background-motivation.md)** — 왜 메일함을 다시 들여다봐야 하는가
2. **[핵심 개념](./core-concept.md)** — WorkTwin이라는 개념을 한 문장으로
3. **[아키텍처](./architecture.md)** — Tauri 4탭 구조와 데이터 파이프라인
4. **핵심 기능** — [메일함 동기화·RAG 색인](./features/mailbox-sync-rag.md), [보낸 메일함 페르소나 분석](./features/sent-mail-persona-analysis.md), [자동 답장 스킬](./features/auto-reply-skill.md), [역할 추출과 서브에이전트](./features/role-extraction-subagents.md), [메일함 챗봇 검색](./features/chatbot-inbox-search.md)
5. **[로컬 우선·프라이버시](./privacy-local-first.md)** — 민감한 이메일 데이터를 다루는 원칙
6. **[로드맵](./roadmap.md)** — 지금 정해진 것과 아직 열려 있는 것
7. **[발표 노트](./talk-notes.md)** — 위 내용을 발표 흐름으로 재구성한 버전 (바로 띄울 수 있는 [슬라이드](pathname:///slides/)도 함께 제공)

발표를 준비 중이라면 6번까지 훑어본 뒤 7번 발표 노트만 봐도 전체 맥락을 따라갈 수 있도록 구성했습니다.
