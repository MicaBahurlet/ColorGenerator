
// import SingleColors from '../SingleColor/SingleColor.jsx';
// import { ColorsContainer } from './StyleDisplayColors';
// import ScrollToTop from '../ScrollToTop/ScrollToTop.jsx';

// const DisplayColors = ({ list }) => {
//     return (
//         <ColorsContainer>
//             {list.map((color, index) => (
//                 <SingleColors key={index} hexColor={color.hex} />
//             ))}
//             <ScrollToTop />
//         </ColorsContainer>

//     );
// };

// export default DisplayColors;

// import SingleColors from '../SingleColor/SingleColor.jsx';
// import { ColorsContainer, MessageContainer } from './StyleDisplayColors';
// import ScrollToTop from '../ScrollToTop/ScrollToTop.jsx';

// const DisplayColors = ({ list, message }) => {
//     return (
//       <>
//         {message && (
//           <MessageContainer>{message}</MessageContainer>
//         )}
//         <ColorsContainer>
//           {list.map((color, index) => (
//             <SingleColors key={index} hexColor={color.hex} />
//           ))}
//           <ScrollToTop />
//         </ColorsContainer>
//       </>
//     );
//   };
  
//   export default DisplayColors;

import SingleColors from '../SingleColor/SingleColor.jsx';
import { ColorsContainer, MessageContainer } from './StyleDisplayColors';
import ScrollToTop from '../ScrollToTop/ScrollToTop.jsx';

const DisplayColors = ({ list, message }) => {
    return (
      <>
        {message && (
          <MessageContainer>{message}</MessageContainer>
        )}
        <ColorsContainer>
          {list.map((color, index) => (
            <SingleColors key={index} hexColor={color.hex} />
          ))}
          <ScrollToTop />
        </ColorsContainer>
      </>
    );
  };
  
export default DisplayColors;

  

