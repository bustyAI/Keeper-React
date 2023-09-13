import React from "react";

function Footer() {
    let date = new Date();
    date = date.getFullYear();

    return <footer>
    <p>Copyright {date}</p>
    </footer>
}

export default Footer;