
import React, { useRef, useState } from 'react';
import FormColor from '../../components/FormColor/FormColor.jsx';
import DisplayColors from '../../components/DisplayColors/DisplayColors.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Values from 'values.js';

const Home = () => {
  const [list, setList] = useState(new Values('red').all(10));
  const [message, setMessage] = useState('');
  const displayRef = useRef(null);

  const handleScrollToColors = () => {
    if (displayRef.current) {
      displayRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <FormColor setList={setList} onGenerate={handleScrollToColors} setMessage={setMessage} />
      <div ref={displayRef}>
        <DisplayColors list={list} message={message} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
