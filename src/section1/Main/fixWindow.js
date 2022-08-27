import '../../scss/section1/other.scss';
import { useState } from 'react';

const FixWindow = ({ afterClearError }) => {
    const [Idx, setIdx] = useState(0);
    const pos = [
        {},
        { right: '50px', bottom: '25px' },
        { left: '200px', bottom: '70px' },
        { left: '20px', bottom: '150px' },
        { top: '90px', left: '90px' },
    ];
    function getPos() {
        // console.log(Idx, pos[Idx]);
        return pos[Idx];
    }
    function onHover() {
        let len = pos.length;

        setIdx((e) => {
            e++;
            return e % len;
        });
    }

    return (
        <div id="error-modal">
            <div className="bar"></div>
            <div className="text">
                Oops! We found a bug...
                <br /> Should I fix it ?
            </div>
            <div className="choice">
                <div style={getPos()} onMouseEnter={onHover}>
                    Yes
                </div>
                <div onClick={afterClearError}>No</div>
            </div>
        </div>
    );
};

export default FixWindow;
