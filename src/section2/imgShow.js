import '../scss/section2/imgShow.scss';

import a1 from '../img/show1/1.jpeg';
import a2 from '../img/show1/2.jpeg';
import a3 from '../img/show1/3.jpeg';
import a4 from '../img/show1/4.jpeg';
import a5 from '../img/show1/5.jpeg';
import a6 from '../img/show1/6.jpeg';

import b1 from '../img/show2/1.jpeg';
import b2 from '../img/show2/2.jpeg';
import b3 from '../img/show2/3.jpeg';
import b4 from '../img/show2/4.jpeg';
import b5 from '../img/show2/5.jpeg';
import b6 from '../img/show2/6.png';
import b7 from '../img/show2/7.png';
import b8 from '../img/show2/8.png';

import c1 from '../img/show3/1.jpeg';
import c2 from '../img/show3/2.png';
import c3 from '../img/show3/3.jpeg';
import c4 from '../img/show3/4.jpeg';
import c5 from '../img/show3/5.jpeg';
import c6 from '../img/show3/6.png';

import d1 from '../img/show4/1.png';
import d2 from '../img/show4/2.png';
import d3 from '../img/show4/3.png';
import d4 from '../img/show4/4.png';
import d5 from '../img/show4/5.png';
import d6 from '../img/show4/6.png';
import d7 from '../img/show4/7.png';
import d8 from '../img/show4/7.png';

import useSound from 'use-sound';
import mp3 from '../sound/no29.mp3';

import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ImgShow = ({ Section2Finish, containerRef }) => {
    const [playSound] = useSound(mp3);
    const navi = useNavigate();
    const show1 = [a1, a2, a3, a4, a5, a6];
    const show2 = [b1, b2, b3, b4, b5, b6, b7, b8];
    const show3 = [c1, c2, c3, c4, c5, c6];
    const show4 = [d1, d2, d3, d4, d5, d6, d7, d8];

    const imgIdx = useRef(0);
    const leftRight = useRef('right');
    const sunRef = useRef();

    const [Sun, setSun] = useState('');
    const [ImgInDisplay, setImgInDisplay] = useState([]);
    function timePromise(time, callback) {
        return new Promise((resolve) => {
            setTimeout(() => {
                callback();
                resolve();
            }, time);
        });
    }

    useEffect(() => {
        // console.log('ue');
        timeMain();
    }, []);

    useEffect(() => {
        if (Section2Finish === true) {
        }
    }, [Section2Finish]);

    async function onClickSun() {
        if (Section2Finish === false) {
            console.log('unfinished');
            return;
        }
        containerRef.current.classList.add('quit');
        await timePromise(1000, () => {
            playSound();
            navi('/section3');
        });
    }

    // {tx, ty, left/right, img-src}

    function nextImg(arrayOfImage) {
        if (leftRight.current === 'left') {
            leftRight.current = 'right';
        } else {
            leftRight.current = 'left';
        }
        // console.log(imgIdx.current, leftRight.current);
        let obj = {
            tx: (Math.random() - 0.5) * 0,
            ty: (Math.random() - 0.5) * 0,
            dir: leftRight.current,
            src: arrayOfImage[imgIdx.current],
        };
        imgIdx.current++;
        return (
            <div
                className="img-blur"
                key={Math.random().toFixed(5).toString()}
                style={{ transform: `translate(${obj.tx}px,${obj.ty}px)` }}
            >
                <div className={`img-fall-${obj.dir}`}>
                    <div className={`img-swing-${obj.dir}`}>
                        <img src={obj.src} alt="img" loading="lazy" />
                    </div>
                </div>
            </div>
        );
    }
    function nextQuickImg(arrayOfImage) {
        let src = arrayOfImage[imgIdx.current];
        imgIdx.current++;
        return (
            <div className="single-img">
                <img src={src} alt="img" loading="lazy" />
            </div>
        );
    }

    function reset() {
        imgIdx.current = 0;
        setImgInDisplay([]);
    }

    async function timeMain() {
        // let next = nextImg();
        // await timePromise(1500, () => {
        //     containerRef.current.children.push(next);
        // });
        function setNext(arrayOfImage) {
            return () => setImgInDisplay((e) => [...e, nextImg(arrayOfImage)]);
        }
        function setNextQuick(arrayOfImage) {
            return () => setImgInDisplay((e) => [nextQuickImg(arrayOfImage)]);
        }
        const duration = 1600;
        const durationQuick1 = 424;
        const durationQuick2 = 450;

        await timePromise(duration, setNext(show1));
        await timePromise(duration, setNext(show1));
        await timePromise(duration + 2, setNext(show1));
        await timePromise(duration, setNext(show1));
        await timePromise(duration + 2, setNext(show1));
        await timePromise(duration, setNext(show1));
        await timePromise(duration + 2, () => reset());

        await timePromise(durationQuick1 * 0.85, setNextQuick(show2));
        await timePromise(durationQuick1, setNextQuick(show2));
        await timePromise(durationQuick1, setNextQuick(show2));
        await timePromise(durationQuick1, setNextQuick(show2));
        await timePromise(durationQuick1, setNextQuick(show2));
        await timePromise(durationQuick1, setNextQuick(show2));
        await timePromise(durationQuick1, setNextQuick(show2));
        await timePromise(durationQuick1, setNextQuick(show2));
        await timePromise(durationQuick1, () => reset());

        await timePromise(0, setNext(show3));
        await timePromise(duration, setNext(show3));
        await timePromise(duration, setNext(show3));
        await timePromise(duration, setNext(show3));
        await timePromise(duration, setNext(show3));
        await timePromise(duration, setNext(show3));
        await timePromise(duration, () => reset());

        await timePromise(durationQuick1, setNextQuick(show4));
        await timePromise(durationQuick1, setNextQuick(show4));
        await timePromise(durationQuick1, setNextQuick(show4));
        await timePromise(durationQuick1, setNextQuick(show4));
        await timePromise(durationQuick1, setNextQuick(show4));
        await timePromise(durationQuick1, setNextQuick(show4));
        await timePromise(durationQuick1, setNextQuick(show4));
        await timePromise(durationQuick1, setNextQuick(show4));
        await timePromise(durationQuick1, () => {
            sunRef.current.textContent = '☀️';
            sunRef.current.style.cursor = 'pointer';
            sunRef.current.classList.add('show');
            reset();
        });
    }

    return (
        <div id="img-show-contain">
            {/* <div className="img-blur">
                <div className="img-fall-left">
                    <div className="img-swing-left">
                        <img
                            src={imgArr[imgIdx.current]}
                            alt="img"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div> */}
            {ImgInDisplay.map((e, idx) => {
                return e;
            })}
            <span className="sun" ref={sunRef} onClick={onClickSun}>
                {''}
            </span>
            {Section2Finish && <div className="arrow-up">{'⬆️ ⬆️'}</div>}
            {/* <button onClick={nextImg}>next</button> */}
        </div>
    );
};

export default ImgShow;
