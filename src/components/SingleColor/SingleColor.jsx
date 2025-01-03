
import { useState } from 'react';
import { StyledCard, ColorBox, ColorLabel, CopyButton } from './StyleSingleColor';
import { FaRegCopy, FaCheck } from 'react-icons/fa'; 

const SingleColor = ({ hexColor }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`#${hexColor}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // vuelve al ícono de copiar después de 2 segundos
    };

    return (
        <StyledCard>
            <ColorBox style={{ backgroundColor: `#${hexColor}` }} />
            <ColorLabel>
                #{hexColor}
                <CopyButton onClick={handleCopy}>
                    {copied ? <FaCheck /> : <FaRegCopy />}
                </CopyButton>
            </ColorLabel>
        </StyledCard>
    );
};

export default SingleColor;


