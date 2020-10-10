import React, {Fragment} from 'react';

import Layout from './components/Layout';
import Navbar from './containers/Navbar';
import Navlist from './containers/Navlist';
import Sidebar from './containers/Sidebar';
import ModalProvider from './context/ModalContext/ModalProvider';

function App() {
  return (
    <Fragment>
      <ModalProvider>
        <Sidebar />
        <Layout>
          <Navbar />
          <Navlist />
        </Layout>
      </ModalProvider>
    </Fragment>
  );
}

export default App;
