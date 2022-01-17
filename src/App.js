import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'

function App() {

  const [selectedImage, setSelectedImage] = useState();
  const [reward, setReward] = useState(0)

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  return (
    <div className='app'>
      <div>
        <input accept="image/*" type="file" onChange={imageChange}/>
        <input placeholder="reward money" type='input' value={reward}
        onChange={(e) => {setReward(e.target.value)}}
        />
        {/* <p>Try to make background transparent?</p> */}
        <input type = 'checkbox'/>
        {selectedImage && (
          <div>
            <img className='poster' src = 'https://i.pinimg.com/originals/1b/d0/a2/1bd0a26e9695bba16f31856b74b5af44.jpg'></img>
            <img className='userImg' src={URL.createObjectURL(selectedImage)} alt="Thumb"/>
            <h1>{reward}$</h1>
            <button onClick={removeSelectedImage}>Remove This Image</button>
            
          </div>
        )}
      </div>
    </div>
  );
        }

export default App;
