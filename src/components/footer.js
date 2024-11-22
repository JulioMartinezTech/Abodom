import React from 'react'
//importamos i18next para las traducciones
import {useTranslation} from 'react-i18next'

//imagenes
import InstagramIcon from '../img/instagram-icon.svg';
import FacebookIcon from '../img/facebook-icon.svg';

function Footer() {
    const [t, i18n] = useTranslation("global");
    return(
        <footer className="has-background-dark footer py-0">
            <div className="columns is-centered">
                <div className="column is-5">
                    <div className="is-flex is-justify-content-center">
                        <a href="https://www.instagram.com/abodomrd/">
                            <figure className="image is-32x32">
                                <img src={InstagramIcon} alt="instagram icono"/>
                            </figure>
                        </a>
                        <a href="https://www.facebook.com/Abodomrd-112933952379906">
                            <figure className="image is-32x32">
                                <img src={FacebookIcon} alt="instagram icono"/>
                            </figure>
                        </a>
                    </div>
                    <p className="has-text-centered my-1"><a className="has-text-white " href="mailto:info@abodom.do">info@abodom.do</a></p>
                    <p className="has-text-white has-text-centered my-1"> +1 809-530-0643</p>
                    <p className="has-text-white has-text-centered my-1 is-uppercase">AV. ISABEL AGUIAR #267 - ZONA INDUSTRIAL DE HERRERA</p>
                    <p className="has-text-white has-text-centered my-1 is-size-7">Copyright © 2021 ABONOS DOMINICANOS ABODOM SRL</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;