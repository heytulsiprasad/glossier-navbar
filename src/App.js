import React from 'react';

import Layout from './components/Layout';
import Navbar from './containers/Navbar';
import Navlist from './containers/Navlist';

function App() {
  return (
    <Layout>
      <Navbar />
      <Navlist />
    </Layout>
  );
}

export default App;
