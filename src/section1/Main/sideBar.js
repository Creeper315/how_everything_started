import { MdDashboard } from 'react-icons/md';
import { FaUserTie } from 'react-icons/fa';

const SideBar = ({ Active, setActive, stage_number }) => {
    function getClass(type) {
        if (Active === type) return 'one-line active';
        return 'one-line';
    }

    const text1 =
        '你是我最难解的bug 当我不去解它 把它留在身边的时候 世界好像充满了色彩~';
    const text2 =
        '去迪士尼玩的时候 记得有次你说 你跳起来的话 你的影子就比我高了';
    const text3 = '一起看流星的时候 好像还是我 第一次看到流星';

    function renderText() {
        if (stage_number === 0) {
            return null;
        }
        let text = '';
        if (stage_number === 1) {
            text = text1;
        } else if (stage_number === 2) {
            text = text2;
        }
        if (stage_number === 3) {
            text = text3;
        }
        let arr = text.split(' ');
        return arr.map((e) => <span>{e}</span>);
    }

    return (
        <div className="side-bar">
            <div
                className={getClass('dashboard')}
                onClick={() => setActive('dashboard')}
            >
                <div className="icon">
                    <MdDashboard className="ri" />
                </div>
                Dashboard
            </div>
            <div
                className={getClass('users')}
                onClick={() => setActive('users')}
            >
                <div className="icon">
                    <FaUserTie className="ri" />
                </div>
                Users
            </div>
            <div className="text-contain">{renderText()}</div>
        </div>
    );
};

export default SideBar;
