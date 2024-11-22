import React from 'react'
import { render } from 'react-dom';

//importamos i18next para las traducciones
import {useTranslation} from 'react-i18next'

function FormulaPopup(props) {
    const [t, i18n] = useTranslation("global");
    let showValor = props.valor


    if (showValor === 1){
        return(
            <div className="columns">
                <div className="column">
                    <div className="content">
                        <ul className="has-text-white has-text-weight-bold">
                            <li>Urea</li>
                            <li>{t("products.formula-1")}</li>
                            <li>{t("products.formula-2")}</li>
                            <li>{t("products.formula-3")}</li>
                            <li>{t("products.formula-4")}</li>
                            <li>{t("products.formula-5")}</li>
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <ul className="has-text-white has-text-weight-bold">
                            <li>{t("products.formula-6")}</li>
                            <li>{t("products.formula-7")}</li>
                            <li>{t("products.formula-8")}</li>
                            <li>{t("products.formula-9")}</li>
                            <li>{t("products.formula-10")}</li>
                            <li>{t("products.formula-11")}</li>
                            <li>Sulfudom</li>
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <ul className="has-text-white has-text-weight-bold">
                            <li>Uredom</li>
                            <li>15-15-15-4s</li>
                            <li>15-15-15-4s-1Zn</li>
                            <li>12-24-12-3S</li>
                            <li>12-24-12-3S-1Zn</li>
                            <li>20-5-20-4S</li>
                            <li>20-5-20-4S-1Zn</li>
                            <li>20-0-20-4S</li>
                            <li>20-0-30-4S</li>
                            <li>17-3-28-4S</li>
                            <li>17-3-28-4S-1Zn</li>
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <ul className="has-text-white has-text-weight-bold">
                            <li>15-3-31-4S</li>
                            <li>15-10-10-4S</li>
                            <li>16-20-0-5S</li>
                            <li>15-6-25-4S</li>
                            <li>16-8-16-4S</li>
                            <li>16-8-8-4S</li>
                            <li>15-10-10-4S</li>
                            <li>16-8-8+4S+1Zn</li>
                            <li>16-8-16+4S+1Zn</li>
                            <li>20-10-10+4S</li>
                            <li>12-12-20+4S</li>
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <ul className="has-text-white has-text-weight-bold">
                            <li>12-12-20</li>
                            <li>30-5-10+5S</li>
                            <li>15-6-25+4S+1Zn</li>
                            <li>16-10-10+4S+Zn</li>
                            <li>12-8-14+4S</li>
                            <li>14-7-14+4S</li>
                            <li>15-15-15+S</li>
                            <li>20-5-20+4S</li>
                            <li>16-8-8+4S</li>
                            <li>15-6-25+4S</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
    if (showValor === 2){
        return(
            <div className="columns">
                <div className="column">
                    <div className="content">
                        <ul className="has-text-white has-text-weight-bold">
                            <li>15-30-15+Micro</li>
                            <li>26-6-14+Micro</li>
                            <li>15-5-30+Micro</li>
                            <li>{t("products.formula-12")}</li>
                            <li>{t("products.formula-13")}</li>
                            <li>{t("products.formula-14")}</li>
                            <li>{t("products.formula-15")}</li>
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <ul className="has-text-white has-text-weight-bold">
                            <li>{t("products.formula-16")}</li>
                            <li>{t("products.formula-17")}</li>
                            <li>Hudom 44</li>
                            <li>{t("products.formula-18")}</li>
                            <li>MAP</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
        
    }else if (showValor === 3){
        return(
            <div className="columns">
                <div className="column">
                    <h2 className="has-text-centered is-uppercase has-text-weight-bold">{t("products.formula-subtitle-1")}</h2>
                    <div className="content">
                        <ul className="has-text-white has-text-weight-bold">
                            <li>{t("products.formula-20")}</li>
                            <li>{t("products.formula-21")}</li>
                            <li>{t("products.formula-22")}</li>
                            <li>{t("products.formula-23")}</li>
                            <li>{t("products.formula-24")}</li>
                            <li>{t("products.formula-25")}</li>
                            <li>{t("products.formula-26")}</li>
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <h2 className="has-text-centered is-uppercase has-text-weight-bold">{t("products.formula-subtitle-2")}</h2>
                    <div className="content">
                        <ul className="has-text-white has-text-weight-bold">
                            <li>{t("products.formula-27")}</li>
                            <li>{t("products.formula-38")}</li>
                            <li>{t("products.formula-28")}</li>
                            <li>Aminodom 30</li>
                            <li>{t("products.formula-29")}</li>
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <h2 className="has-text-centered is-uppercase has-text-weight-bold">{t("products.formula-subtitle-3")}</h2>
                    <p>{t("products.formula-subtitle-3-a")}</p>
                    <div className="content">
                        <div className="columns">
                            <div className="column">
                                <ul className="has-text-white has-text-weight-bold">
                                    <li>Systemic</li>
                                    <li>{t("products.formula-30")}</li>
                                    <li>{t("products.formula-31")}</li>
                                    <li>SK30</li>
                                    <li>Protex</li>
                                </ul>
                            </div>
                            <div className="column">
                                <ul className="has-text-white has-text-weight-bold">
                                    <li>N TOP</li>
                                    <li>Maximus</li>
                                    <li>{t("products.formula-32")}</li>
                                    <li>{t("products.formula-33")}</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }else if (showValor === 4){
        return(
            <div className="column">
                <div className="content">
                    <p className="has-text-white has-text-weight-bold">
                        {t("products.formula-text")}
                    </p>
                </div>
            </div>
        )

    }else if (showValor === 5){
        return(
            <div className="column">
                <div className="content">
                    <ul className="has-text-white has-text-weight-bold">
                        <li>15-15-15+11S</li>
                        <li>15-4-23+21S (50kg)</li>
                    </ul>
                </div>
            </div>
        )

    }else if (showValor === 6){
        return(
            <div className="columns">
                <div className="column">
                    <div className="content">
                        <ul className="has-text-white has-text-weight-bold">
                            <li>{t("products.formula-34")}</li>
                            <li>{t("products.formula-35")}</li>
                            <li>{t("products.formula-36")}</li>
                            <li>{t("products.formula-37")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    

}

export default FormulaPopup;