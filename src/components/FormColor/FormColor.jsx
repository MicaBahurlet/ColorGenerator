
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


  const colorTranslations = {
    rojo: 'red',
    azul: 'blue',
    verde: 'green',
    amarillo: 'yellow',
    negro: 'black',
    blanco: 'white',
    gris: 'gray',
    marrón: 'brown', 
    marron: 'brown', 
    púrpura: 'purple',
    purpura: 'purple',
    rosa: 'pink',
    naranja: 'orange',
    cian: 'cyan',
    magenta: 'magenta',
  };

  //  fn para eliminar tildes
  const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const handleGenerator = (e) => {
    e.preventDefault();

    // elimino tildes
    const normalizedColor = removeAccents(color).toLowerCase();

    const translatedColor = colorTranslations[normalizedColor] || colorTranslations[color.toLowerCase()] || normalizedColor;

    if (!translatedColor.trim()) {
      setMessage('Debes ingresar un nombre en inglés, español o un código válido para obtener la gama de colores');
      setList([]);
      setTimeout(() => {
        setMessage('');
        setList(new Values('#fff').all(5)); 
      }, 3000);
      return;
    }

    try {
      let colors = new Values(translatedColor.trim()).all(5); //  traducido
      setList(colors);
      setMessage('');
      onGenerate();
    } catch (error) {
      console.log(error);
      setMessage('No existe ese color, ingresá un nombre en inglés, español o código correcto');
      setList([]);
      setTimeout(() => {
        setMessage('');
        setList(new Values('#fff').all(5)); 
      }, 3000);
    }
  };

  const handleClear = () => {
    setList([]);
    setColor('');
    setPlaceholder('#fff');
    setMessage('Ingresá un nuevo código o nombre del color para obtener la nueva gama de colores');

    setTimeout(() => {
      setList(new Values('#fff').all(10)); 
      setMessage('');
    }, 3000);
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
