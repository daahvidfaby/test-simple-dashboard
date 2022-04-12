import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import './new.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const New = ({inputs, title}) => {

  const [file, setFile] = useState('');

  return (
    <div className='new'>
        <Sidebar/>
      <div className="new-container">
        <Navbar/>
        <div className="top">
          <h1 className='title'>
            Add new user
          </h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>
          <div className="right">

            <form action="">

            <div className="form-input">
                <label htmlFor='file'>Image: <DriveFolderUploadIcon className='icon'/></label>
                <input type="file" id='file' style={{display: 'none'}} onChange={e=>setFile(e.target.files[0])}/>
              </div>
              {
                inputs.map(input => {
                  return (
                    <div className="form-input">
                      <label>{input.label}</label>
                      <input type={input.type} placeholder={input.placeholder}/>
                    </div>
                )})
              }
              
             
             
              <button>Submit</button>
            </form>

          </div>
        </div>
      </div>

    </div>
  ) 
}

export default New