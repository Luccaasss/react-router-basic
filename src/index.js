import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';

import App from './App';
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invocies";

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
