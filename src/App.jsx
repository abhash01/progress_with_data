import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Progress from './Progress';

function App() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 1);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [progress]);

  return (
    <>
      <Progress progress={progress} color={'lightgreen'} />
      <Progress progress={progress} color={'lightred'} />
      <Progress progress={progress} color={'lightblue'} />
      <Progress progress={progress} color={'orange'} />
    </>
  );
}

export default App;
