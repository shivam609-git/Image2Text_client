import React, { useState } from 'react';

function Upload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [textResult, setTextResult] = useState('');
    const [image, setImage] = useState("");
    const [boldResult,setBoldResult] = useState([""]);

    const handleFileChange = (event) => {

        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0])
        reader.onload = () => {
            setImage(reader.result);
        }

        reader.onerror = error => {
            console.log("Error", error);
        }

        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedFile);
        //console.log(selectedFile);
//http://localhost:5000
        try {
            const response = await fetch('https://image2text-server.vercel.app/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: formData
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setTextResult(data.text);
            setBoldResult(data.boldWords);
            console.log(boldResult.length);
            
        } catch (error) {
            console.error('Error uploading image', error);
        }


    };


    return (
        <div id='panel'>
            <h1>Image Upload</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button className='button-62' type="submit">Upload</button>
            </form>

            {textResult && (
                <div id='result'>
                    <div id='original'>
                        <h2>Original Picture</h2>
                        <img src={image} alt="Fetched from backend" />
                    </div>
                    <div id='extracted'>
                        <h2>Extracted Text</h2>
                        <p>{textResult}</p>
                        <h3>BoldWords:</h3>
                        {(boldResult.length === 0) ? <p>Cant find any bold word</p>: <p>{boldResult}</p> }
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default Upload;
