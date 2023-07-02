import { useState } from "react";
import "./edit.css";
import Input from "../InputFields/Input";
import { useSelector, useDispatch } from 'react-redux';
import { update } from "../../redux/userSlice";
// import  {updateUser}  from "../../redux/apiRequest";
const EditPage = (props) => {
  // eslint-disable-next-line react/prop-types
  const {setEdit} = props;
  const avaUrl = [
    "http://i.redd.it/7ipyf6pvqac61.png",
    "http://i.redd.it/ksmb0m02ppy51.png",
    "http://i.redd.it/7ipyf6pvqac61.png",
    "http://i.redd.it/ksmb0m02ppy51.png",
    "http://i.redd.it/7ipyf6pvqac61.png",
    "http://i.redd.it/ksmb0m02ppy51.png",
    "http://i.redd.it/7ipyf6pvqac61.png",
    "http://i.redd.it/ksmb0m02ppy51.png",
    
  ];
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbot] = useState(user.about);
  const [theme,setTheme] = useState('#ff9051');
  const [url, setUrl] = useState(user.avaUrl) 
  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false)
    
    const updatedUser = {
      name : name,
      age : age,
      about : about, 
      avaUrl : url,
      themeColor : theme
    }
    dispatch(update(updatedUser))
    
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <button className="close">SAVE</button>
          <div className="edit-profile">Edit Profile</div>

          <div className="input-container">
            <Input label="Display Name" data={user.name} setData={setName}/>
            <Input label="Age" data={user.age} setData={setAge}/>
            <Input inputType="textarea" classStyle="input-about" label="About" data={user.about} setData={setAbot}/>
          
          <label>Profile Picture</label>
          <div className="input-image-container">
            {avaUrl.map((url) => {
              return (
                <>
                  <img onClick={(e) => setUrl(e.target.src)} src={url} className="input-image" />
                </>
              );
            })}
          </div>
          <div className="theme-container">
            <label htmlFor="">Theme</label>
            <input onChange={(e) => setTheme(e.target.value)} type="color" className="theme-color"/>
          </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default EditPage;
