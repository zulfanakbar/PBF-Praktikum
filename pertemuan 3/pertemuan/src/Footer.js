import React from "react";

const Footer = (props) => {
    return (
        <div>
            <h3>Halaman Footer</h3>
            <h3>Component ini dibuat menggunakan FUnction bukan Class</h3>
            <p>Nilai ini ditampilkan dari props: {props.judul}</p>
            <p>Nama Saya: {props.nama}</p>
        </div>
    )
}

export default Footer;