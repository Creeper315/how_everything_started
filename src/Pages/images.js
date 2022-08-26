import { storage } from '../firebase-config';
import { useState, useEffect } from 'react';
// import dogg from '../img/dogg.png';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';

const Images = () => {
    const [File0, setFile0] = useState(null);
    const [displayImg, setdisplayImg] = useState('');
    const [returnUrl, setreturnUrl] = useState('');
    const myRef = ref(storage, 'child1');

    useEffect(() => {
        const folderRef = ref(storage, 'child1/');
        listAll(folderRef).then((e) => {
            for (let i = 0; i < e.items().length; i++) {}
        });
    }, []);

    function handleUpload() {
        console.log();
    }

    function testUpload() {
        console.log('dislpayed:', displayImg);
        if (File0 == null) {
            alert('upload first');
            return;
        }
        const myRef = ref(storage, 'child1/123');

        uploadBytes(myRef, File0).then((snap) => {
            getDownloadURL(snap.ref).then((url) => {
                console.log('returned url', url);
                setreturnUrl(url);
            });
        });
    }
    // const dataurl =
    //     'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAxgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAEAQAAICAQIDBQUEBggHAAAAAAECAAMRBCESMUEFEyJRYQYUMnHhI4GRsUKDk6HB0RVEUlRicpKjFkNFgqLi8P/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBQb/xAAoEQACAgEEAgEDBQEAAAAAAAAAAQIDEQQSITETUVIUIkEVMkJhoQX/2gAMAwEAAhEDEQA/APICltfhYHEnSOBuIrnzHnCjZRqeSIh/wk4grZRjjix5GWReUVF5TyW11V8WGbhHQy08CjhJbA2BMHrcEHIGOe5xLQzMmCBv1mayNGSSJe7JcDjhJ9INZpnqYkMCPMGE0izP2fhPl5yyy1mPDeqE+fDvAk0FxjJZ6YCi8R4tsiXkKzcTgDPMiM6KXHdj7xHCMWACxsE0muC493w8NZPCRuxgFiENkCajVWadQdsEZxKRw2DxALnkJkik454I6Kg31sgOCASo85W7sh7vHrJqz1b1kgg5BHSXafTWaos+N8TCqOUkuyvTgpZ6DeWamgAsybjGciTBRuWQ22xEO1tFaEd2eajrygfDLQrzB/0Y15Vn4gCPOSQB1KyVlJIbI3H741Q4WBPIc4xDDTBrBnEgvxYENesFM+sGQfafKFE5xwx7FA+cgRkGTsOWiZeEYjCsoI8PrLK0CjiO/pEBlhCHNS1gKMt1MwuMg4rNjYPU7Q61xTUKx1bO3pBEXm/LG+ZJAXAJyAowMxWikHjoHClmJaKWmhmGQcRRcg2v0VcJU4JyJJeJTnBxHQ5GDuJcODu8HGc7HHSEKSY6Vl1JA26ySZryBuDzEjXaQOEHnCaALeLPMDPKAvBJ9E66xwq2dorFRrACxC+kZm4Vx0kqwHRm2yDAW4f2kF0pDhgQRL1IVwQu4PKW1XIrDK7cjJNXm3iX4T5QZKqtYzEaug2Eixt+gzG1WlqCDuzhvnyMudS3iGFMZEUW/ak+Lf75s/kdwWMMGqpLqGtUgcsyepYVIK6BlSBn0mhqEWylEUEd2d8fpZ6wW2hnpJIw2cbGBSNKhpfaKjTK2mt1PN1GyjzPWSprDqyu3iHOPoltSxC4OD4SM8xDX09dfj+JWBxgb7TSZSqtNJ+jFC41Az8AYfnGv0wDuyYC55GaXuy6hGKoBwjYgwXVB+AC4YYDGV6iFMjOrCeUCYHdEY3gOOFmaarKq8LHfIwduUE1CjOwwDHXZy2w4A0XifJ6R7N2mndoxR2fSxXDsxJ+UCCZcKepxGUkyM6ZQ4YMRj5yIhF9YRyvl1kErJyYxFxwxAE18I5kbfjJheELjJ8RwI6oVUnGfICXWcFenQ58RAPy5xJPBeuOewPVKa34Sd4pC5+MjrgYzFEwJKUcjAESzpIqzDrJgofiGD6SgqEu5hNCMrHxYxzycSoJy4WyDzhNbkpwvzUYU+Q8pmisEkxXI4rDEZB/SErqYg4GcHpDE1S1VcATDEFTkAgj8JCyhHHeaZsbbjyi49lmk3mLJVFCv+PqIXp7gtowgK9czM4jWwzv6wzQ3AZAPPfEWUOC9VyTww7WYremxFDVn15y/ho1JILgMFGBjeB3ubK8Z3zk+kVWp93UngVz/axvF2vHB1eaKm89BRX3TmCduslqQh0xtqPhIGw6ecG0mrr1F3Dfup2P85qHTKaGFRzWRjwmJL7XydFbVkXs6BatONRpk7scXEefIyVNdtAZLD4CennG0VRZCLVsCpvxJ5iaDXoa24KzYoPxDBwOu8Em0NXCLWXwzF0rtVZbUAXydkwf3SXaSkqBwcDEZ4M54fOE9xW+tSypbLM9FPDv++X6zTd/WxrVtj4gw3EaUllMjGpyhKKMAvlkCjHQ7SnUVsoBI5naHDTNUyl/AT8syVw73AycqOspGRySoeOewnt1R3GmCjYoPyEx8LRW1jDxj4Rj9827qzfp9LlssARM3tDTnGGz5iJU8LBTWxcpua9IyWHGd95Y1WAADJogQ7xMwztLylg82NeeWV1BqrQzNwry9ZXqrjYdvh6ST8TbHlK2XEC57FllLagYjMUsK77RQNohtZLhjhYf7qfKONKfKHcjo8TAQpHKWrkdMwoaY+UmNOfKNuQVW0CkllwYquKs7HnDV0/pJjSnym3IOyXYCBkYI2iZTjCiaA0vpJe69cTbkHxsBqeyrfzhFZ4+LiXG3TlJXJXSvFawQepmY3alak91Wx9ScZgckDO3sKCGshsjnyzNnsu9+LirsYMNsE+HHynJ6jtTUW/AFqGP0dz+Jg41eqHw32jPMKxEnOyLWA03uuWYnd9r6mt7C1LMjY335zL0+ru01mVPEp5qeRnMHUakqo7+7C8hxnaIavUgj7azbbJMWNkUsD2aqcpbjp01VtOpFicQOc4XrN49qcNLWagL4hso2OfnOEp7UvTAdVYjr1h+n7VoutCWsa8/psdhDLZPsejVyhnD7Oq0uv0muX3W6rjJ5N1Eo1HZhofirBK9M84FXpwQLKmDDmGWbGi1zYFeqHGAdjjJEnJbf29HpU2Kzi3v2B3UtptMm6h2OBvz88TN1pYV1htmK5AJ5CdBrtM+usqarBWv4snmPwmH2lTaLXLJsOud8SUbc8FtRp8JyXRk6j4to1dDlOMjbzlgCvZ4mIHrviFFRcgUOFrH3SjkefClPLYAyHoZBkxz5w61a6x4Qc+Z2zBWR7G5YjqRGdeOAYj0jy80kczFMR2nQLp/SWDTekNCR+GR3nqKlAfuo8pJdIPKHBZNVg3j+GICNGPKWpo/SHIuZfXWIrtY6piADQg9JL3DbcHE1kTA5SrW1DUaa3TlmUWKV4l2IzFVryGVUUspHlfaveaztW9VBKq3CB5CVU6UPt3qLk4wc+H5zf7W9l37O0lJ0wt1DMcWFE2wPPf+EzX09jqjNoytYTIKVN9p89/rLqSZ8/Ouak9yAjobR4h4hyUg5DfLz36S/T6J3BwpOf3Q6t7tPf3NoVgo3XjyRtsAfTI/GdD2FphqrOIisuPhRl2JJ+shbZtOzTabyHMv2U6opXLMegBgd2ksVjgYYLy/Oes632U1eh0S6m1SaFB7oPuDnnOK7QWrSalhWBamTnfhyPmPlJ13ZeGXt0sNu6Dycy2gave5+AYJBPXHlKvd+I8COrMd/l/CaFpv1bhSO84ea1KcD1x+PlmMOz9c1RqTs+xvEUR+5IYnnuf/AITqTPLlW/QZ7HXFNXdpHGzDIG2xHP1nYDRjm4O/ICcz7P8Ast2i/aFWq11TaeuohufiYjlO97rKnK/KJOzD4PU0lc/FiSAdPptWygVBlRT4SdoJ2n2ObUPeXKrHrOjezvNN3a/ZkDmADMu/R1k8Vl5c+RYTlsulk9jS1QazJ5OWu0FFICopJA3Y8z/KUrU3VGK+k6KzS0ZJCHfmSyxq6cHNdNfz4gfymjdxyx7NPDP2IwTorrT9nTiSHY+q4TtwjyxidKhvUZHBn0Mo1HvLg5tVfmY61BCWjT5OXt7LdT42OYofqtM7PvqF+6PKq44JaV56Mwe1J/uX+79JIe1LD+pj9r9JzXzkgJ1OuPo8mOqt9nS/8Ut/cx+1+kkPal+mjH7X6TmxJjEyriOtVb8jpU9qrB/Ugf1v0hFftbYP6iv7X6Tll+ctrh8MPQ61V3yOsX2xuxj3FP2n0jp7TWOc+5j7nnMoTnpDKXbyiuiHovDU2PtnSJ7Q2EY9yBH+YyxO17OLPuoHX4jMiq2EpaM42z5ZEm6orpHZCxN8sPtfSa2zj1XZ1VjEYBYnb5TR7G0ui06DFJ4gB4+LcHzmH7wFIOZpabXIqZ4lXac1sItYOuuMPwjprPac9rDVdmXKe60bKpIIBfOcfuEwNbpezX1He2dnrZw8kLYUfcBv9+ZididoKO3+2PGOG16ypPyOfzm1ZejDPGp++RjViXJqIVuHCJr2vTpU4KuzlVP7KMFH5Ss+1Coc/wBG5/XfSA6iwA7GAPcDywT6TqjTFk7JRh1wa1/tcpbP9HEfrfpBH9ssf9P/AN3/ANZk6iznt+Imda+T0lY6av0cdmqkumbl/tk7jCaLh/W/SBv7V2nnpj/rH8piuZQxjfSU+iH6hqI8KX+G03tPZnI0uP1g/lGPtTbjB05Pzs+kwmIlZg+lq9Cfqep+Run2nt/u/wDu/SUv7SWt/wAj/wA/pMUiQMK01a/Akv8Apal/yNV+3bSdqgP+76RTJMaN4IeiL12o+Q8fMgJLOBvKnITBkgYOb1XYDJkDqW5KMRdyCmHKTJhsc8TKax2+JjI5PnBvG3G0tyj9Jf8AVLq9VSOdqfeROfim8gVYzqk7Qor3F9efUj+EhZ2/VSMJm4jyJxOaEWIrlkqr5Lo1tX27qr8iv7IehyYE+qttObLGb0LQaKJhAds32y9bSpyGIPmDLE119T8dV1isOvEYIM9YoMA8kl0bNPtJrqwBYwtH+LnCV7dqtGbc1n5Z/hOd5RRlwN9RZ+WdE3aWmblaPyg76yknw2rj/NMOKOpsm7WzXN9Z5WKfvkDYv9ofdMuIbQ+QTczSJJ5RjmZ4ZhyYiWLqHGxAPrNvRshRaQMgtyt6SWR5x00wZFmKRimAU94ZEsW5mNFI5MKKKKAwooopjCiiimMLMfMaKYOSUUQiPKYYbMfMaNMBscmNmKKYUUUUUxhRRRTGFFFFMYUQJHIxRTGJcbRSMU2WY//Z';
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}
        >
            <button onClick={testUpload}>Test</button>
            <input
                type="file"
                style={{ margin: '40px' }}
                onChange={(e) => {
                    let f = e.target.files[0];
                    setFile0(f);
                    setdisplayImg(URL.createObjectURL(f));
                }}
            />
            <img alt="broken img" src={displayImg} />
            <img alt="broken img" src={returnUrl} />
        </div>
    );
};

export default Images;
