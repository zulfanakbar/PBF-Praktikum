import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div>
                <h2 align="center">About</h2> <br></br>
                <table width="745" border="1" cellspacing="0" cellpadding="5" align="center">
                    <tr>
                        <td>Nama</td>
                        <td>Moh. Zulfan Akbar</td>
                        <td rowspan="10" align="center"><img src="./images/sean.jpg"  width="210" height="270"/></td>
                    </tr>
                    <tr>
                        <td>JURUSAN</td>
                        <td>TEKNOLOGI INFORMASI</td>
                    </tr>
                    <tr>
                        <td>KELAS</td>
                        <td>3D</td>
                    </tr>
                    <tr>
                        <td>Jenis Kelamin</td>
                        <td>Laki Laki</td>
                    </tr>
                    <tr>
                        <td>Tempat, Tanggal Lahir</td>
                        <td>Banyuwangi, 09 Juni 2001</td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td>Genteng,Banyuwangi</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>zulfan246@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Instagram</td>
                        <td>King_Zul</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default About;