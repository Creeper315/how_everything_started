import '../scss/section3/section3.scss';
import bk from '../img/ljj5.jpeg';
import { useState, useEffect, useRef } from 'react';

const Main = () => {
    const [Show, setShow] = useState(0);
    const btn = useRef();
    const bkimg = useRef();

    useEffect(() => {
        console.log('hi');
        // playSound();
    }, []);

    function setImgClass(mode) {
        if (mode === 'blur') bkimg.current.classList.add('blur');
        if (mode === 'clear') bkimg.current.classList.remove('blur');
    }
    return (
        <div id="section3-contain">
            <img alt="img" src={bk} ref={bkimg} />

            <div
                className="window"
                onMouseEnter={() => setImgClass('blur')}
                onMouseLeave={() => setImgClass('clear')}
            >
                {Show === 0 && (
                    <>
                        <span>Lily 我也喜欢你，我们可以在一起吗 ~</span>
                        <div className="btns">
                            <button onClick={() => setShow(1)}>同意</button>
                            <button onClick={() => setShow(2)}>拒绝</button>
                        </div>
                    </>
                )}
                {Show === 1 && <span>💗你想去开一下门吗 \ ^_^ *~</span>}
                {Show === 2 && (
                    <span>
                        💔我先把花花和礼物放在门口啦~记着去取哦，遇到你其实是一段很好的回忆~
                    </span>
                )}
            </div>
        </div>
    );
};

export default Main;
