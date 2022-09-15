import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/userSlice";
import Input from "../InputField/Input";
import "./EditPage.css"

const EditPage = (props) => {
  const { setEdit } = props

  const avaUrl = [
    'https://scontent.xx.fbcdn.net/v/t1.15752-9/299727057_1119327355335747_3665978820805724920_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=oA8DQktaj3MAX_Jw0hG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKRWXHY8hwr8W--RWb0AtZfto1NGc6LBd7pgGtMc3CVCg&oe=6348F8A3',
    'https://scontent.xx.fbcdn.net/v/t1.15752-9/306900578_1829675500758029_86490750446535439_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=d5tv0UzVQpcAX8qiPAN&_nc_ht=scontent.xx&oh=03_AVLVXn2dXoVlk0KKcddHdEi9TikX7w3DYLPvKFLN1dww4w&oe=6348D8FB',
    'https://scontent.xx.fbcdn.net/v/t1.15752-9/306305421_452468173510786_151111810451314024_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=-qyusa_EglwAX_ru0Vt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLeepzbN3qUNvc1VslFSEuEh0OdOA6iXhl3oX8DbFgm_Q&oe=6346A8C2',
    'https://scontent.xx.fbcdn.net/v/t1.15752-9/306003822_2882182195422556_1565175137220076824_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=1YN0z0L5b7AAX9JF-yy&_nc_ht=scontent.xx&oh=03_AVIYsUubdbM2b-vE3pN-j7n0r6u8NZhLbrRV0_C32LnhJA&oe=6348B356',
    'https://scontent.xx.fbcdn.net/v/t1.15752-9/306536139_468210271883498_1911211573879679998_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=1pisB6aKEEsAX-NrUuh&_nc_ht=scontent.xx&oh=03_AVJUxkHv6xiKrbuNf7l40rLWNSp4_h1_ZSBp2SQJySGy2Q&oe=63484B78',
    'https://scontent.xx.fbcdn.net/v/t1.15752-9/306023026_1227462398128911_8216580198536152102_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Ub0MAmkX8uMAX8-81KF&_nc_ht=scontent.xx&oh=03_AVIP-N3piJMaa0Ro5QVLWfnbrEYiGsxvHLsyc_shTD7-rg&oe=6347CDD6',
    'https://scontent.xx.fbcdn.net/v/t1.15752-9/306371611_1141672206430922_3754608666230602911_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=nNRbyOS7lNsAX8yzg55&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI_2kltK5rHWDonz0SPv4SrjWXMJaeGOgKHgLDLnEf77g&oe=634A27D1',
    'https://scontent.xx.fbcdn.net/v/t1.15752-9/306173327_1535472913589378_1380552200984152218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=drZ28EpYrKUAX-BYEEj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI0JLKPXVBkQ3feYINXJLrhz7kr8cE4_H0pQYXghJNbQQ&oe=6349698B',
  ];
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState("#ff9051");
  const [url, setUrl] = useState(user.avaUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const updateUser = {
      name: name,
      age: age,
      about: about,
      avaUrl: url,
      themeColor: theme,
    };
    dispatch(update(updateUser));
  }
    
  return ( 
    <>
      <form onSubmit={handleSubmit} >
        <div className="edit-container">
            <button className="close">SAVE</button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <Input label = "Display name" data = {user.name} setData = {setName}/>
            <Input label = "Age" data = {user.age} setData = {setAge}/>
            <Input 
              inputType= "textarea" 
              className= "input-about" 
              label = "About" 
              data = {user.about} 
              setData = {setAbout}
            />
          </div>
          <label>Profile Picture</label>
          <div className="input-image-container">
            {avaUrl.map(url => {
              return (
                <>
                  <img onClick={e => setUrl(e.target.src)} src={url} className ="input-image"/>
                </>
              )
            })}
          </div>
          <div className="theme-container">
            <label>Theme</label>
            <input type="color" className="theme-color" onChange={e => setTheme(e.target.value)}/>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditPage;