// LightBox.tsx
import React from 'react';

interface LightBoxProps {
    image: string;
    close: boolean;
    onClose: () => void;
}

const LightBox: React.FC<LightBoxProps> = ({ image, close, onClose }) => {
    return (
        <div className={`light-box ${close ? 'show' : ''}`} id="light-box">
            <main className="w-full" id="main">
                <div className="close z-50">
                    <img onClick={onClose} className="w-10 flex cursor-pointer" src="/menue-close.svg" alt="Close" />
                </div>
                <div id="content" className="content">
                    <div className="center">
                        <img src={image} alt={image} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LightBox;
