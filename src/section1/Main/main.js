import '../../scss/section1/main.scss';
import useSound from 'use-sound';
import sound from '../../sound/mailang.mp3';
import { useNavigate } from 'react-router-dom';

import TopNav from '../topNav';
import SideBar from './sideBar';
import Table from './table';
import UserTable from './userTable';
import FixWindow from './fixWindow';
import SvgMain from './svgMain';
import { useState, useRef, useEffect } from 'react';

const Main = () => {
    const mainPage = useRef();
    const [ShowModal, setShowModal] = useState(false);
    const [stage_number, setstage_number] = useState(0);
    const [playMusic] = useSound(sound);
    const musicStarted = useRef(false);
    const navi = useNavigate();
    const [Active, setActive] = useState('dashboard');
    const mainBody = useRef();
    const svgMainRef = useRef();
    const dayRef = useRef();
    const nightRef = useRef();

    const [SvgEnterScreen, setSvgEnterScreen] = useState(false); // false -> 'ground' -> 'day' -> 'night'

    useEffect(() => {}, []);

    function timeOutPromise(callback, time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                callback();
                resolve();
            }, time);
        });
    }

    async function showError() {
        // console.log('1');
        const errFunc = () => {
            mainPage.current.classList.add('show-error');
        };
        const errTime = 1800;
        // const errTime = 0;

        await timeOutPromise(errFunc, errTime);
        // console.log('2');

        const fixWindowFunc = () => {
            setShowModal(true);
        };
        const fixWindowTime = 4000;
        // const fixWindowTime = 0;

        await timeOutPromise(fixWindowFunc, fixWindowTime);
        // console.log('3');
    }

    async function afterClearError() {
        musicStarted.current = true;
        playMusic();
        mainPage.current.classList.remove('show-error');
        setShowModal(false);
        mainPage.current.classList.add('color-1');
        const color1Time = 8000; // transition 成 color-1 需要 7 秒，这里等 8 秒是，想让彩色多 1 秒时间
        // const color1Time = 1000;

        await timeOutPromise(() => {
            // mainPage.current.classList.remove('color-1');
            mainPage.current.classList.add('color-2');
        }, color1Time);

        const color2Time = 4000; // 这里需要等 4 秒，是因为 transition 到 color-2 需要 4 秒。scss 里面有些
        await timeOutPromise(() => {
            mainPage.current.classList.add('svg-enter-1');
            setstage_number(1);
            setSvgEnterScreen('ground');
        }, color2Time);

        await timeOutPromise(() => {
            svgMainRef.current.style.background = 'none';
            setSvgEnterScreen('day');
            setstage_number(2);
        }, 13500);

        await timeOutPromise(() => {
            setSvgEnterScreen('day/night');
            dayRef.current.classList.add('quit');
        }, 13000);

        await timeOutPromise(() => {
            setSvgEnterScreen('night');
            setstage_number(3);
        }, 1500);

        await timeOutPromise(() => {
            mainPage.current.classList.add('quit');
        }, 10000);
        await timeOutPromise(() => {
            navi('/section2');
        }, 2000);
    }

    return (
        <div id="main-page" ref={mainPage}>
            <TopNav />
            <SideBar {...{ Active, setActive, stage_number }} />
            <div className="main-body" ref={mainBody}>
                {Active === 'dashboard' && <Table />}
                {Active === 'users' && (
                    <UserTable {...{ showError, musicStarted }} />
                )}
                {ShowModal && <FixWindow {...{ afterClearError }} />}
                {SvgEnterScreen && (
                    <div id="svg-main-contain">
                        <div className="grey-bk"></div>
                        <SvgMain
                            {...{
                                SvgEnterScreen,
                                svgMainRef,
                                dayRef,
                                nightRef,
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Main;
