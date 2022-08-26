import { useState, useContext } from 'react';
import { ctx } from './CreatePost';

const Child = () => {
    // function w1() {
    //     let select = document.querySelector('.e_icons.ck');
    //     select.click();
    // }
    // function w2() {
    //     let apply = document.querySelector('.p_but[event-type="13"]');
    //     apply.click();
    // }
    // function w3() {
    //     let close = document.querySelector('#window_close_apply');
    //     close.click();
    // }
    // function w4() {
    //     let next = document.querySelector('.next');
    //     let link = next.children[0];
    //     link.click();
    // }

    // const arrr = [w1, w2, w3, w4];
    // let idxx = 0;

    // function calll() {
    //     let thisCall = arrr[idxx];

    //     thisCall();
    //     idxx++;
    //     idxx %= 4;

    //     if (idxx === 1) return '全选';
    //     if (idxx === 2) return '一键投';
    //     if (idxx === 3) return '关窗户';
    //     if (idxx === 0) return '下一页';
    // }

    console.log(' Rerendered Child');
    const cd = useContext(ctx);
    console.log('c', cd);
    return (
        <div>
            <span>{'cd is' + cd}</span>
            <div>{cd}</div>
        </div>
    );
};

export default Child;
