import React, {useEffect} from "react";
import styled from "styled-components";

function Home() {
    useEffect(() => {
        const camera = document.getElementById('cameraFileInput'); 
        const frame = document.getElementById('pictureFromCamera');

        camera.addEventListener('change', function(e) {
            var file = e.target.files[0];
            frame.src = URL.createObjectURL(file);
        });
    }, []);

    return(
        <div>
            <label htmlFor="cameraFileInput">
                <Btn_Camera>Open Camera</Btn_Camera>
                <CameraInput type="file" id="cameraFileInput" accept="image/*" capture="environment"/>
                <PicturCamaera id="pictureFromCamera" />
            </label>
            <br></br>version1.0
        </div>
    );
    

}

const CameraInput = styled.input`
    display: none;
`;

const PicturCamaera = styled.img`
    width: 300px;
    margin-top 16px;
`;

const Btn_Camera = styled.span`
    display: inline-block;
    background-color: #00b531;
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 16px;   
    cursor: pointer;
`;



export default Home;
