import '../scss/section2/section2.scss';
import ImgShow from './imgShow';
import Background from './background';
import { useRef, useState } from 'react';

const Section2 = () => {
    const containerRef = useRef();
    const [Section2Finish, setSection2Finish] = useState(false);

    return (
        <div id="section2-main" ref={containerRef}>
            <ImgShow {...{ Section2Finish, containerRef }} />
            <Background {...{ containerRef, setSection2Finish }} />
        </div>

        // <div id="stage1">
        //     <div className="para">
        //         hi
        //         <p>asdf</p>
        //         <p>asdf</p>
        //         <p>asdf</p>
        //     </div>
        // </div>
    );
};

export default Section2;
