import bk1 from '../img/ljj1.jpeg';
import bk2 from '../img/ljj2.jpeg';
import bk3 from '../img/ljj3.jpeg';
import bk4 from '../img/ljj4.jpeg';

import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Background = ({ containerRef, setSection2Finish }) => {
    const navi = useNavigate();
    const [BkIdx, setBkIdx] = useState(1);
    const img1 = useRef();
    const img2 = useRef();
    const img3 = useRef();
    const img4 = useRef();

    function timePromise(time, callback) {
        return new Promise((resolve) => {
            setTimeout(() => {
                callback();
                resolve();
            }, time);
        });
    }

    useEffect(() => {
        timeMain();
    }, []);

    // async function timeMain() {

    //     await timePromise(10000, () => {
    //         setBkIdx((e) => e + 1);
    //     });
    //     await timePromise(6000, () => {
    //         setBkIdx((e) => e + 1);
    //     });
    //     await timePromise(10000, () => {
    //         setBkIdx((e) => e + 1);
    //     });
    // }

    async function timeMain() {
        img2.current.style.display = 'none';
        img3.current.style.display = 'none';
        img4.current.style.display = 'none';
        timePromise(5000, () => {
            img2.current.setAttribute('loading', 'eager');
        });
        console.log('1');
        await timePromise(10000, () => {
            img1.current.style.display = 'none';
            img2.current.style.display = 'block';
            img3.current.style.display = 'none';
            img4.current.style.display = 'none';
        });
        console.log('2');
        timePromise(3000, () => {
            img3.current.setAttribute('loading', 'eager');
        });
        await timePromise(6000, () => {
            img1.current.style.display = 'none';
            img2.current.style.display = 'none';
            img3.current.style.display = 'block';
            img4.current.style.display = 'none';
        });
        console.log('3');
        timePromise(3000, () => {
            img4.current.setAttribute('loading', 'eager');
        });
        await timePromise(6000, () => {
            img1.current.style.display = 'none';
            img2.current.style.display = 'none';
            img3.current.style.display = 'none';
            img4.current.style.display = 'block';
        });
        await timePromise(16500, () => {
            setSection2Finish(true);
            // containerRef.current.classList.add('quit');
        });
        // await timePromise(1000, () => {
        //     navi('/section3');
        // });
        // console.log('reach end');
    }

    return (
        <div className="background-contain">
            <img ref={img1} className="img1" src={bk2} alt="img" />
            <img
                ref={img2}
                className="img2"
                src={bk1}
                alt="img"
                loading="lazy"
            />

            <img
                ref={img3}
                className="img3"
                src={bk3}
                alt="img"
                loading="lazy"
            />
            <img
                ref={img4}
                className="img4"
                src={bk4}
                alt="img"
                loading="lazy"
            />

            {/* {BkIdx === 1 && (
                <img
                    ref={img1}
                    className="img1"
                    src={bk2}
                    alt="img"
                    loading="lazy"
                />
            )}
            {BkIdx === 2 && (
                <img
                    ref={img2}
                    className="img2"
                    src={bk1}
                    alt="img"
                    loading="lazy"
                />
            )}
            {BkIdx === 3 && (
                <img
                    ref={img3}
                    className="img3"
                    src={bk3}
                    alt="img"
                    loading="lazy"
                />
            )} */}
            {BkIdx === 4 && (
                <img className="img4" src={bk4} alt="img" loading="lazy" />
            )}
        </div>
    );
};

export default Background;
