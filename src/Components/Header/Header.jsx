import { useSelector } from 'react-redux';
import './Header.css'

const Header = (props) => {
  const {setEdit} = props;
  const user = useSelector(state => state.user);

  const handleEdit = () => {
    setEdit(true)
  }

  return ( 
    <>
      <header 
        style={{
          backgroundColor: "#33a8ff", 
        }}
      >
        <div className="info-container">
          <div className="info-edit" onClick={handleEdit}>Edit</div>
          <div className="infomation">
            <div className="info-pic">
            <img className="info-ava"
              src= {user.avaUrl}
              alt="" />
            </div>
            <div className="info-content">
              <div className="info-username">{`Name: ${user.name}`}</div>
              <div className="info-age">{`Age: ${user.age}`}</div>
              <div className="info-about">{`About me: ${user.about}`}</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;