import { useState, useEffect } from 'react';
import { getDocs, deleteDoc, doc, collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import { async } from '@firebase/util';

const Home = () => {
    let collectRef = collection(db, 'msg');
    const [AllPost, setAllPost] = useState([]);

    async function getData() {
        let dat = await getDocs(collectRef);
        console.log(dat);

        dat = dat.docs.map((e) => ({ ...e.data(), id: e.id }));
        setAllPost(dat);
    }

    async function deleteData(id) {
        let inp = window.confirm(
            'Are you sure you want to delete id: ' + id + '?'
        );
        console.log(inp);
        if (!inp) return;
        const docum = doc(db, 'msg', id);
        let r = await deleteDoc(docum);
        console.log(r);
    }

    function renderPost() {
        return AllPost.map((post) => {
            return (
                <div key={post.id}>
                    <button onClick={() => deleteData(post.id)}>
                        Delete This Row
                    </button>
                    <p>{JSON.stringify(post)}</p>
                    <hr />
                </div>
            );
        });
    }

    return (
        <div>
            home<button onClick={getData}>Get data</button>
            {renderPost()}
        </div>
    );
};

export default Home;
