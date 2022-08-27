import { BsPersonCircle } from 'react-icons/bs';
import '../scss/section1/main.scss';
// import '../magic-master/assets/scss/bomb/_bombRightOut.scss';

const TopNav = () => {
    return (
        <div className="top-nav">
            <div className="left-text">Admin</div>
            <div className="icon">
                <BsPersonCircle className="ri" />
            </div>
        </div>
    );
};

export default TopNav;
