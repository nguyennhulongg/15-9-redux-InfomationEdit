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
      <header>
        <div 
          className="info-container" 
          style={{
            color: `${user.themeColor}`, 
          }}>
          <div className='title'>
            <h1>Profile</h1>
          </div>
          <div 
            className="info-edit" 
            onClick={handleEdit}
            style={{
              backgroundColor: `${user.themeColor}`, 
            }}>Edit</div>
          <div className="infomation">
            <div 
              className="info-pic" 
              style={{
              border: `2px solid ${user.themeColor}`, 
            }}>
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