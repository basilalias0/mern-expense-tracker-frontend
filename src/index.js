import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import { store } from './Redux/store/store';


const queryClient = new QueryClient

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <QueryClientProvider client ={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
