import ReactMarkdown from 'react-markdown';
import { Link, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

export function BlogTab() {
  return (
    <Layout>
      <div style={{ fontSize: '2rem' }}>
        Here is some writing I've done in the past.
        <p><Link to="building-a-livestreamed-murder-mystery-game-with-amazon-ivs-and-timed-metadata">Building a Livestreamed Murder Mystery Game with Amazon IVS and Timed Metadata</Link> - Oct 9, 2020</p>
        <p><Link to="mastering-technical-interviews-a-human-approach">Mastering Technical Interviews: A Human Approach</Link> - Mar 4, 2017</p>
      </div>
    </Layout>
  );
}
