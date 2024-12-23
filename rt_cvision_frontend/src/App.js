import React from 'react';
import './App.css'
import HomePage from './pages/home/home';
import WelcomePage from './pages/welcome/welcom-page';
import ServicePage from './pages/service/services';
import ProcessorPage from './pages/processor/processor';
import ProcessorParamsPage from './pages/params/update-params';
import ServiceParamsPage from './pages/params/service-params';
import Layout from './components/ui/common/layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TenantServices from './pages/landing/landing';

import ProcessorAccordion from './components/ui/panel/accordion';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/" element={<Layout />}>
          <Route path=":tenantID/livestream" element={<HomePage />} />
          <Route path=":tenantID/services" element={<TenantServices />} />
          <Route path=":tenantID/services/:serviceID" element={<ServicePage />} />
          <Route path=':tenantID/services/:serviceID/:processorName' element={<ProcessorPage />} />
          <Route path=':tenantID/services/:serviceID/:processorName/params' element={<ProcessorParamsPage />} />
          <Route path=":tenantID/models" />
          <Route path=":tenantID/deploy" />
          <Route path=':tenantID/accordian' element={<ProcessorAccordion />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;