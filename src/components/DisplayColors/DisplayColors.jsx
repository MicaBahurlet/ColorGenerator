
import SingleColors from '../SingleColor/SingleColor.jsx';
import { ColorsContainer } from './StyleDisplayColors';

const DisplayColors = ({ list }) => {
    return (
        <ColorsContainer>
            {list.map((color, index) => (
                <SingleColors key={index} hexColor={color.hex} />
            ))}
        </ColorsContainer>
    );
};

export default DisplayColors;
