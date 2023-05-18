import React from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import wysywig_modules from './Wysywig_modules'
import './React_quill.css'
const Wysywig = () => {


    return (
        <div>
            <ReactQuill theme="snow" modules={{toolbar: wysywig_modules}}/>
        </div>
    );
};

export default Wysywig;
