import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    addDoc,
    collection,
    doc,
    setDoc,
    deleteDoc,
    getDoc,
} from 'firebase/firestore';
import { db } from '../firebase-config';
import Child from './Child';
import { async } from '@firebase/util';
const ctx = createContext();

const CreatePost = ({ IsAuth }) => {
    const navi = useNavigate();
    const [name, setname] = useState('');
    const [Message, setMessage] = useState('');
    const collectRef = collection(db, 'msg');
    const [Text, setText] = useState('');

    useEffect(() => {
        console.log('is auth', IsAuth);
        // if (!IsAuth) {
        //     navi('/login');
        // }
    }, []);

    async function testAdd() {
        try {
            let res = await setDoc(doc(db, 'try1', 'row1'), {
                name: 'nothing 222',
                2: '12121',
                123: { wow: 123 },
            });
            console.log('add res', res);
        } catch (err) {
            console.log('add err');
        }
    }

    function testDelete() {
        deleteDoc(doc(db, 'try1'))
            .then((e) => {
                console.log('delete res', e);
            })
            .catch((e) => {
                console.log('delete Err', e);
            });
    }

    function testGet() {
        getDoc(doc(db, 'try1', 'row1'))
            .then((e) => {
                console.log(e.data());
            })
            .catch((err) => console.log('get err', err));
    }

    function onSub() {
        addDoc(collectRef, { 我: '爆', 炸: '了', txt: Text })
            .then((e) => {
                console.log('collect res', e);
            })
            .catch((err) => {
                console.log('collect err', err);
            });
    }

    return (
        <div>
            <button onClick={testGet}>Test</button>
            <input placeholder="name" />
            <input
                placeholder="message"
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={onSub}>Submit</button>
            <ctx.Provider value={Text}>
                <Child />
            </ctx.Provider>
        </div>
    );
};
export { ctx };
export default CreatePost;
