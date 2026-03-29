import { useState } from 'react';
import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// import Counter from './To-Do list/Hooks/Counter/index.jsx'
// import Toggle from './To-Do list/Hooks/Toggle/index.jsx'
// import Form from './To-Do list/Hooks/Form/index.jsx'
// import TODO from './To-Do list/TODO/index.jsx'

// import PracticeTODO from './To-Do list/Hooks/TODO/practiceTodo.jsx';

// import WeatherApp from './To-Do list/WeatherApp/index.jsx';

// import UseRef from './To-Do list/Hooks/useRef/index.jsx'
import StopWatch from './To-Do list/Hooks/StopWatch/index.jsx'

const queryClient = new QueryClient();

function App() {
  return (
<StopWatch/>

//         <QueryClientProvider client={queryClient}>
//     <WeatherApp/>
//     </QueryClientProvider>

  );
}

export default App;
