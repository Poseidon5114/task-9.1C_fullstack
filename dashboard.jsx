
import React from 'react';
import Article from './article';
import Tutorials from './tutorial';
import Email from './email';
import Footer from './footer';

function Dashboard() {
  return (
    <div>
      <Article />
      <Tutorials />
      <Email />
      <Footer />
    </div>
  );
}

export default Dashboard;