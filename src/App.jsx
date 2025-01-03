import { useState, useRef } from 'react';
import Values from 'values.js';
import './App.css';
import FormColor from './components/FormColor/FormColor.jsx';
import DisplayColors from './components/DisplayColors/DisplayColors.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';

function App() {
  const [list, setList] = useState(new Values('red').all(10));
  const displayRef = useRef(null); // ref para DisplayColors

  const handleScrollToColors = () => {
    if (displayRef.current) {
      displayRef.current.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  return (
    <div>
      <FormColor setList={setList} onGenerate={handleScrollToColors} />
      <div ref={displayRef}>
        {/* <DisplayColors list={list} /> */}
        {list.length > 0 && <DisplayColors list={list} />}
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
