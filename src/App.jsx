// import { useState, useRef } from 'react';
// import Values from 'values.js';
// import './App.css';
// import FormColor from './components/FormColor/FormColor.jsx';
// import DisplayColors from './components/DisplayColors/DisplayColors.jsx';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
// import Footer from './components/Footer/Footer.jsx';
// import MyNavbar from './components/NavBar/NavBar.jsx';

// function App() {
//   const [list, setList] = useState(new Values('red').all(10));
//   const displayRef = useRef(null); // ref para DisplayColors

//   const handleScrollToColors = () => {
//     if (displayRef.current) {
//       displayRef.current.scrollIntoView({ behavior: 'smooth' }); 
//     }
//   };

//   return (
//     <div>
//       {/* <MyNavbar /> */}
//       <FormColor setList={setList} onGenerate={handleScrollToColors} />
//       <div ref={displayRef}>
//         {/* <DisplayColors list={list} /> */}
//         {list.length > 0 && <DisplayColors list={list} />}
//         {/* <ScrollToTop /> */}
//         <Footer />  
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Asegúrate de importar BrowserRouter
import './App.css';
import FormColor from './components/FormColor/FormColor.jsx';
import DisplayColors from './components/DisplayColors/DisplayColors.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import Footer from './components/Footer/Footer.jsx';
import MyNavbar from './components/NavBar/NavBar.jsx';
import Values from 'values.js';

function App() {
  const [list, setList] = useState(new Values('red').all(10));
  const displayRef = useRef(null); // ref para DisplayColors

  const handleScrollToColors = () => {
    if (displayRef.current) {
      displayRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<FormColor setList={setList} onGenerate={handleScrollToColors} />} />
        <Route path="/colores" element={<DisplayColors list={list} />} />
      </Routes>
      <div ref={displayRef}>
        {list.length > 0 && <DisplayColors list={list} />}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
