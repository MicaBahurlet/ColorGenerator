import React, { useRef } from 'react';
import FormColor from '../../components/FormColor/FormColor.jsx';
import DisplayColors from '../../components/DisplayColors/DisplayColors.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Values from 'values.js';

const Home = () => {
  const [list, setList] = React.useState(new Values('red').all(10));
  const displayRef = useRef(null);

  const handleScrollToColors = () => {
    if (displayRef.current) {
      displayRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <FormColor setList={setList} onGenerate={handleScrollToColors} />
      <div ref={displayRef}>
        {list.length > 0 && <DisplayColors list={list} />}
        <Footer />
      </div>
    </>
  );
};

export default Home;
