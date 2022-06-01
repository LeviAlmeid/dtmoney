import React from 'react';
import ReactDOM from 'react-dom/client';

import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    // handles GET requests to /api/movies
    this.get("/transactions", () => {
      return[
        { 
          id: 1, 
          title: "Transaction 1", 
          amount: 400,
          type: 'depositi',
          category: 'food',
          createdAt: new Date() 
        }
      ]
    })

    // resets the namespace to the root
     // now this will pass through everything not handled to the current domain (e.g. localhost:3000)
  },
})



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);