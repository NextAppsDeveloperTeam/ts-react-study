import MyMenu from "../MyMenu/MyMenu";
import Header from "../../Home/Header/Header";

const MyPage = () => {
    return (
      <div className='MyPage'>
          <Header />
          <MyMenu />
      </div>
    );
};

MyPage.displayName = 'MyPage';
export default MyPage;