import PageTemplate from '@components/page-template/index.tsx';
import markdown from './React Router.md?raw';

export default function Reference() {
  return (
    <>
      <PageTemplate markdown={markdown}></PageTemplate>
    </>
  );
}
