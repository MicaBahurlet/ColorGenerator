import { useState } from 'react';
import Values from 'values.js';
import { FormWrapper, StyledForm, StyledInput, StyledButton, ErrorMessage,InputGroup  } from './StyleFormColor';

const FormColor = ({ setList }) => {
    const [color, setColor] = useState('blue');
    const [error, setError] = useState(false);

    const handleGenerator = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10);
            setList(colors);
            setError(false);
        } catch (error) {
            console.log(error);
            setError(true);
        }
        console.log(color);
    };

    return (
        <FormWrapper>
            <StyledForm onSubmit={handleGenerator}>
                <div>
                    <h1>Generador de Colores</h1>
                    <InputGroup >
                        <StyledInput
                            type="text"
                            placeholder="#fff"
                            onChange={(e) => setColor(e.target.value)}
                        />
                        <StyledButton type="submit">Generar</StyledButton>
                    </InputGroup>
                </div>
                {error && <ErrorMessage>No existe ese color</ErrorMessage>}
            </StyledForm>
        </FormWrapper>
    );
};

export default FormColor;
