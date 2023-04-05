import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Write() {

  const [value, setValue] = useState('');

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorc">
        <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b> Status: </b> Draft
          </span>
          <span>
            <b> Visibilty: </b> Public
          </span>
          <input type="file" style={{display:"none"}} id="file"/>
          <label className='file' htmlFor="file">Upload image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
          <input type="radio" name="cat" value="art" id="art"/>
          <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="science" id="science"/>
          <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="art" id="technology"/>
          <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="art" id="cinema"/>
          <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="art" id="design"/>
          <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="art" id="food"/>
          <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write