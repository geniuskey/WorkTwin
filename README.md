# WorkTwin

내 이메일함을 학습해 나를 대신해 메일 맥락을 검색·이해·응답하는 개인 전용 에이전트를 만드는 프로젝트입니다.

- 문서 및 발표 자료: https://geniuskey.github.io/WorkTwin/
- 발표 슬라이드: https://geniuskey.github.io/WorkTwin/slides/
- 원본 아이디어 메모: [`draft.txt`](./draft.txt)

이 저장소는 현재 아이디어를 정리한 **문서/발표 자료 단계**이며, 아직 앱 코드는 포함되어 있지 않습니다. 문서 사이트 소스는 [`docs-site/`](./docs-site)에 [Docusaurus](https://docusaurus.io/)로 구성되어 있고, `main` 브랜치에 `docs-site/` 변경이 푸시되면 GitHub Actions([`deploy-docs.yml`](./.github/workflows/deploy-docs.yml))가 자동으로 GitHub Pages에 배포합니다.

## 문서 사이트 로컬 실행

```bash
cd docs-site
pnpm install
pnpm start
```
