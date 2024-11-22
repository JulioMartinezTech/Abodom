import React, {useState} from 'react'

//importamos i18next para las traducciones
import {useTranslation} from 'react-i18next'

//Componentes
import Header from '../components/header';
import Footer from '../components/footer';
import FormulaPopup from '../components/formulaPopup';

//imagenes
import Fertilizante1 from '../img/fertilizante-granulado.svg';
import Fertilizante2 from '../img/fertilizante-soluble.svg';
import Fertilizante3 from '../img/fertilizante-foliar.svg';
import Fertilizante4 from '../img/fertilizante-especial.svg';
import Fertilizante5 from '../img/abono-organico.svg';
import Aminoacido from '../img/aminoacido.svg';
import Servicio1 from '../img/soporte-tecnico.svg';
import Servicio2 from '../img/analisis-de-suelo.svg';
import Servicio3 from '../img/programa-nutricion.svg';


function Productos(){
    const [t, i18n] = useTranslation("global");
    const [show, setShow] = useState(1);

    //funcion para mostrar u ocultar el pop-up
    
    function showHide(){
        let ShowPopUp = document.getElementById("formulas");
        ShowPopUp.classList.toggle("show");
    }
    
    //funcion para ocultar el pop-up y cambiar "show" a su estado inicial
    const handleHide = () => {
        showHide();
        // setShow(0);
    }
    
    
    //mostramos el pop-up y cambiamos el estado de "show" para cambiar las formulas a mostrar
    const handleShow1 = () => {
        showHide();
        setShow(1);
    }
    
    const handleShow2 = () => {
        showHide();
        setShow(2);
    }

    const handleShow3 = () => {
        showHide();
        setShow(3);
    }

    const handleShow4 = () => {
        showHide();
        setShow(4);
    }

    const handleShow5 = () => {
        showHide();
        setShow(5);
    }

    const handleShow6 = () => {
        showHide();
        setShow(6);
    }



    
    return(
        <div>
            <Header/>
            <section className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column">
                            <h1 className="is-size-3 has-text-centered has-text-primary my-6"><b>{t("products.products-title")}</b></h1>
                        </div>
                    </div>
                    <div className="columns is-centered box">
                        <div className="column animation-content">
                            <figure id="granulado" className="image mb-4 animated" onClick={handleShow1}>
                                <img src={Fertilizante1} alt="Fertilizante Granulado"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-1")}</b></p>
                        </div>
                        <div className="column animation-content">
                            <figure id="soluble" className="image mb-4 animated" onClick={handleShow2}>
                                <img src={Fertilizante2} alt="Fertilizante Soluble"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-2")}</b></p>
                        </div>
                        <div className="column animation-content">
                            <figure id="foliar" className="image mb-4 animated" onClick={handleShow3}>
                                <img src={Fertilizante3} alt="Fertilizante Foliar"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-3")}</b></p>
                        </div>
                        <div className="column animation-content">
                            <figure id="especial" className="image mb-4 animated" onClick={handleShow4}>
                                <img src={Fertilizante4} alt="Fertilizante Especial"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-4-a")}</b></p>
                        </div>
                        <div className="column animation-content">
                            <figure id="aminoacidos" className="image mb-4 animated" onClick={handleShow5}>
                                <img src={Aminoacido} alt="Aminoacidos"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-5")}</b></p>
                        </div>
                        <div className="column animation-content">
                            <figure id="organico" className="image mb-4 animated" onClick={handleShow6}>
                                <img src={Fertilizante5} alt="Fertilizante Orgánico"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-6")}</b></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column">
                            <h1 className="is-size-3 has-text-centered has-text-primary my-4"><b>{t("products.services-title")}</b></h1>
                        </div>
                    </div>
                    <div className="columns is-centered box">
                        <div className="column is-2">
                            <figure className="image mb-4">
                                <img src={Servicio1} alt="Soporte Técnico"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.service-1")}</b></p>
                        </div>
                        <div className="column is-2">
                            <figure className="image mb-4">
                                <img src={Servicio2} alt="Análisis de Suelo"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.service-2")}</b></p>
                        </div>
                        <div className="column is-2">
                            <figure className="image mb-4">
                                <img src={Servicio3} alt="Programas de Nutrición"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.service-3")}</b></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section has-background-light">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column">
                            <h1 className="is-size-3 has-text-centered has-text-primary my-4"><b>{t("products.formulas-title")}</b></h1>
                        </div>
                    </div>
                    <div className="columns is-centered box has-background-primary">
                        <div className="column is-3 is-centered">
                            <div className="content">
                                <ul className="has-text-white has-text-weight-bold">
                                    <li>Urea</li>
                                    <li>{t("products.formula-2")}</li>
                                    <li>{t("products.formula-3")} (DAP)</li>
                                    <li>{t("products.formula-4")} (MAP)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="column is-3 is-centered">
                            <div className="content">
                                <ul className="has-text-white has-text-weight-bold">
                                    <li>{t("products.formula-5")} (KCL)</li>
                                    <li>{t("products.formula-6")} (SOP)</li>
                                    <li>{t("products.formula-37")}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="column is-3 is-centered">
                            <div className="content">
                                <ul className="has-text-white has-text-weight-bold">
                                    <li>{t("products.formula-7")}</li>
                                    <li>{t("products.formula-9")}</li>
                                    <li>{t("products.formula-25")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="formulas" className="popup show" onClick={handleHide}>
                <div className="is-centered box has-background-primary">
                    <div className="close-icon"></div>
                    <FormulaPopup valor={show}/>   
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Productos;