import PageTemplate from '@components/page-template/index.js';
import markdown from './02React Reference.md';

export default function Reference () {
  return (
    <>
      <PageTemplate markdown={markdown}>
      </PageTemplate>
    </>
  )
}