
// import { useState } from 'react';
// import Values from 'values.js';
// import { FormWrapper, StyledForm, StyledInput, StyledButton, ErrorMessage,InputGroup,Title  } from './StyleFormColor';
// const FormColor = ({ setList, onGenerate }) => {
//     const [color, setColor] = useState('blue');
//     const [error, setError] = useState(false);
  
//     const handleGenerator = (e) => {
//       e.preventDefault();

//       try {
//         let colors = new Values(color).all(5); // Divide el total de colores en un porcentaje, Ahora muestra 41. Si es 10 muestra 21
//         setList(colors); 
//         setError(false);
//         onGenerate(); // llama al desplazamiento
//       } catch (error) {
//         console.log(error);
//         setError(true);
//         setList([]);
//       }
//     };
  
//     return (
//       <FormWrapper>
//         <StyledForm onSubmit={handleGenerator}>
//           <div>
//             <Title>Generador de Colores</Title>
//             <InputGroup>
//               <StyledInput
//                 type="text"
//                 placeholder="#fff"
//                 onChange={(e) => setColor(e.target.value)}
//               />
//               <StyledButton type="submit">Generar</StyledButton>
//             </InputGroup>
//           </div>
//           {error && <ErrorMessage>No existe ese color, <br /> ingresá un nombre o código correcto</ErrorMessage>}
//         </StyledForm>
//       </FormWrapper>
//     );
//   };
  
//   export default FormColor;
  

// import { useState } from 'react';
// import Values from 'values.js';
// import { FormWrapper, StyledForm, StyledInput, StyledButton, ClearButton, ErrorMessage, InputGroup, Title } from './StyleFormColor';

// const FormColor = ({ setList, onGenerate }) => {
//   const [color, setColor] = useState(''); 
//   const [error, setError] = useState(false);

//   const handleGenerator = (e) => {
//     e.preventDefault();

//     try {
//       let colors = new Values(color).all(5);
//       setList(colors);
//       setError(false); 
//       onGenerate();
//     } catch (error) {
//       console.log(error);
//       setError(true);
//       setList([]);
//     }
//   };

//   const handleClear = () => {
//     setList([]); 
//     setColor('#fff'); 
//     setError(false); 
//   };

//   return (
//     <FormWrapper>
//       <StyledForm onSubmit={handleGenerator}>
//         <div>
//           <Title>Generador de Colores</Title>
//           <InputGroup>
//             <StyledInput
//               type="text"
//               placeholder="#fff"
//               value={color} // vincula el valor del input con el estado
//               onChange={(e) => setColor(e.target.value)}
//             />
//             <StyledButton type="submit">Generar</StyledButton>
//             <ClearButton onClick={handleClear}>Limpiar búsqueda</ClearButton>
//           </InputGroup>
//         </div>
//         {error && <ErrorMessage>No existe ese color, <br /> ingresá un nombre o código correcto</ErrorMessage>}
//       </StyledForm>
//     </FormWrapper>
//   );
// };

// export default FormColor;


// import { useState } from 'react';
// import Values from 'values.js';
// import { 
//   FormWrapper, 
//   StyledForm, 
//   StyledInput, 
//   StyledButton, 
//   ClearButton, 
//   ErrorMessage, 
//   InputGroup, 
//   Title 
// } from './StyleFormColor';

// const FormColor = ({ setList, onGenerate }) => {
//   const [color, setColor] = useState(''); 
//   const [error, setError] = useState(false);

//   const handleGenerator = (e) => {
//     e.preventDefault();

//     try {
//       let colors = new Values(color.trim()).all(5); // Elimina espacios al inicio y al final
//       setList(colors);
//       setError(false); 
//       onGenerate();
//     } catch (error) {
//       console.log(error);
//       setError(true);
//       setList([]);
//     }
//   };

//   const handleClear = () => {
//     setList([]); 
//     setColor(''); // Restablece el color a un string vacío
//     setError(false); 
//   };

//   return (
//     <FormWrapper>
//       <StyledForm onSubmit={handleGenerator}>
//         <div>
//           <Title>Generador de Colores</Title>
//           <InputGroup>
//             <StyledInput
//               type="text"
//               placeholder="#fff"
//               value={color} // Vincula el valor del input con el estado
//               onChange={(e) => setColor(e.target.value.trimStart())} // Elimina espacios al inicio
//             />
//             <StyledButton type="submit">Generar</StyledButton>
//             <ClearButton onClick={handleClear}>Limpiar búsqueda</ClearButton>
//           </InputGroup>
//         </div>
//         {error && <ErrorMessage>No existe ese color, <br /> ingresá un nombre o código correcto</ErrorMessage>}
//       </StyledForm>
//     </FormWrapper>
//   );
// };

// export default FormColor;

import { useState } from 'react';
import Values from 'values.js';
import { 
  FormWrapper, 
  StyledForm, 
  StyledInput, 
  StyledButton, 
  ClearButton, 
  InputGroup, 
  Title 
} from './StyleFormColor';

const FormColor = ({ setList, onGenerate, setMessage }) => {
  const [color, setColor] = useState('');
  const [placeholder, setPlaceholder] = useState('#fff');

  const handleGenerator = (e) => {
    e.preventDefault();

    if (!color.trim()) {
      setMessage('Debes ingresar un nombre en inglés o un código válido para obtener la gama de colores');
      setList([]);
      setTimeout(() => {
        setMessage('');
        setList(new Values('#fff').all(10)); 
      }, 3000);
      return;
    }

    try {
      let colors = new Values(color.trim()).all(5);
      setList(colors);
      setMessage('');
      onGenerate();
    } catch (error) {
      console.log(error);
      setMessage('No existe ese color, ingresá un nombre en ingles o código correcto');
      setList([]);
      setTimeout(() => {
        setMessage('');
        setList(new Values('#fff').all(10)); 
      }, 2000);
    }
  };

  const handleClear = () => {
    setList([]);
    setColor('');
    setPlaceholder('#fff');
    setMessage('Ingresá un nuevo código o nombre del color en inglés para obtener la nueva gama de colores');

    setTimeout(() => {
      setList(new Values('#fff').all(10)); 
      setMessage('');
    }, 2000);
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleGenerator}>
        <div>
          <Title>Generador de Colores</Title>
          <InputGroup>
            <StyledInput
              type="text"
              placeholder={placeholder} 
              value={color}
              onChange={(e) => setColor(e.target.value.trimStart())}
            />
            <StyledButton type="submit">Generar</StyledButton>
            <ClearButton type="button" onClick={handleClear}>
              Limpiar búsqueda
            </ClearButton>
          </InputGroup>
        </div>
      </StyledForm>
    </FormWrapper>
  );
};

export default FormColor;
