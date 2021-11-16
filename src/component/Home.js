import React, {useEffect} from "react";
import styled from "styled-components";

function Home() {
    var camera = document.getElementById('cameraFileInput');
    var frame = document.getElementById('pictureFromCamera');

    addEventListener('change', function(e) {
        var file = e.target.files[0];
        document.src = URL.createObjectURL(file);
    });

    return(
        <div>
            <input type="file" id="cameraFileInput" accept="image/*" capture="environment"/>
            <img id="pictureFromCamera" />
        </div>
    );
    

}

export default Home;
