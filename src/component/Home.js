import React, {useEffect} from "react";
import styled from "styled-components";

function Home() {
    useEffect(() => {
        const camera = document.getElementById('cameraFileInput'); 
        const camera2 = document.getElementById('cameraFileInput2'); 
        const frame = document.getElementById('pictureFromCamera');

        camera.addEventListener('change', function(e) {
            var file = e.target.files[0];
            frame.src = URL.createObjectURL(file);
        });

        camera2.addEventListener('change', function(e) {
            var file = e.target.files[0];
            frame.src = URL.createObjectURL(file);
        });
    }, []);

    return(
        <div>
            <label htmlFor="cameraFileInput">
                <Sample>
                    <Btn_Camera>인물</Btn_Camera>
                </Sample>
                <CameraInput type="file" id="cameraFileInput" accept="image/*" capture="environment"/>
            </label>
            <PicturCamaera id="pictureFromCamera" />
            <label htmlFor="cameraFileInput2">
                <Sample><Btn_Camera>문자</Btn_Camera></Sample>
                <CameraInput type="file" id="cameraFileInput2" accept="image/*" capture="environment"/>
            </label>
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

const Sample = styled.div`
    border-radius: 10px;
    position: relative;
    width: 70vw;
    height: 20vh;
    background-color: black;
    display: table;
    margin-top: 20px;
    & > span:hover{
        color: #000069;
        transition: color .3s;
        font-size: 4.2em;
        text-shadow: 2px 2px 2px gray;
    }
`;

const Btn_Camera = styled.span`
    background-color: #00b531;
    color: white;
    width: 70vw;
    height: 20vh;
    border-radius: 6px;
    font-size: 4em;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
    font-weight: bold;
`;

export default Home;
