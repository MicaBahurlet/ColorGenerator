
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
  

import { useState } from 'react';
import Values from 'values.js';
import { FormWrapper, StyledForm, StyledInput, StyledButton, ClearButton, ErrorMessage, InputGroup, Title } from './StyleFormColor';

const FormColor = ({ setList, onGenerate }) => {
  const [color, setColor] = useState(''); 
  const [error, setError] = useState(false);

  const handleGenerator = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(5);
      setList(colors);
      setError(false); 
      onGenerate();
    } catch (error) {
      console.log(error);
      setError(true);
      setList([]);
    }
  };

  const handleClear = () => {
    setList([]); 
    setColor('#fff'); 
    setError(false); 
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleGenerator}>
        <div>
          <Title>Generador de Colores</Title>
          <InputGroup>
            <StyledInput
              type="text"
              placeholder="#fff"
              value={color} // vincula el valor del input con el estado
              onChange={(e) => setColor(e.target.value)}
            />
            <StyledButton type="submit">Generar</StyledButton>
            <ClearButton onClick={handleClear}>Limpiar búsqueda</ClearButton>
          </InputGroup>
        </div>
        {error && <ErrorMessage>No existe ese color, <br /> ingresá un nombre o código correcto</ErrorMessage>}
      </StyledForm>
    </FormWrapper>
  );
};

export default FormColor;
