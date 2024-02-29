import React from 'react';
import './barProgressCss.css'


export const Barprogress = ({ id, progress, title, icon }) => {
    return (
        <div className='father-bar-progress'>
            <div className="progress-bar-container" id={id}>
                <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: '#3f9436bc' }}></div>
                </div>
                <h4 className='title-bar'>{title}</h4>
                <img src={icon} alt="Icon" className="icon" />
            
        </div>
    );
};

