# WorkTwin 문서 사이트

[Docusaurus](https://docusaurus.io/) 기반 문서/세미나 자료 사이트입니다.

## 로컬 개발

```bash
pnpm install
pnpm start
```

## 빌드

```bash
pnpm build
```

`build/` 디렉터리에 정적 파일이 생성됩니다.

## 배포

`main` 브랜치에 `docs-site/` 변경사항이 푸시되면 [`.github/workflows/deploy-docs.yml`](../.github/workflows/deploy-docs.yml)가 자동으로 빌드 후 GitHub Pages에 배포합니다. 별도의 `gh-pages` 브랜치나 수동 `deploy` 명령은 사용하지 않습니다.
