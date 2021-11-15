import React from "react";

function Home() {

    addEventListener("change", function() {
        this.document
        .getElementById("pictureFromCamera")
        .setAttribute("src", window.URL.createObjectURL(this.files[0]));
    });

    return(
        <div>
            <input type="file" id="take-picture" accept="image/" capture="environment"/>
            <img id="pictureFromCamera" />
        </div>
    );
}

export default Home;