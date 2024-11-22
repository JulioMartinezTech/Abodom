import React from "react";

//Componentes
import Header from "../components/header";
import Footer from "../components/footer";
import Sucursal from "../components/sucursal";

//data
import Data from "../data/sucursales.json";

//imagenes
//sucursal 1
import imgSucursal1 from "../img/sucursal1-a.jpg";
import imgSucursal2 from "../img/sucursal1-b.jpg";
import imgSucursal3 from "../img/sucursal1-c.jpg";
import imgSucursal4 from "../img/sucursal1-d.jpg";
import imgSucursal5 from "../img/sucursal1-e.jpg";
//sucursal 2
import imgSucursal6 from "../img/sucursal2-a.jpg";
import imgSucursal7 from "../img/sucursal2-b.jpg";
import imgSucursal8 from "../img/sucursal2-c.jpg";
import imgSucursal9 from "../img/sucursal2-d.jpg";
import imgSucursal10 from "../img/sucursal2-e.jpg";
//sucursal 3
import imgSucursal11 from "../img/sucursal3-a.jpg";
import imgSucursal12 from "../img/sucursal3-b.jpg";
import imgSucursal13 from "../img/sucursal3-c.jpg";
import imgSucursal14 from "../img/sucursal3-d.jpg";
import imgSucursal15 from "../img/sucursal3-e.jpg";
//sucursal 4
import imgSucursal16 from "../img/sucursal4-a.jpg";
import imgSucursal17 from "../img/sucursal4-b.jpg";
import imgSucursal18 from "../img/sucursal4-c.jpg";
import imgSucursal19 from "../img/sucursal4-d.jpg";
import imgSucursal20 from "../img/sucursal4-e.jpg";
//sucursal 5
import imgSucursal21 from "../img/sucursal5-a.jpg";
import imgSucursal22 from "../img/sucursal5-b.jpg";
import imgSucursal23 from "../img/sucursal5-c.jpg";
import imgSucursal24 from "../img/sucursal5-d.jpg";
import imgSucursal25 from "../img/sucursal5-e.jpg";
//sucursal 6
import imgSucursal26 from "../img/sucursal6-a.jpg";
import imgSucursal27 from "../img/sucursal6-b.jpg";
import imgSucursal28 from "../img/sucursal6-c.jpg";
import imgSucursal29 from "../img/sucursal6-d.jpg";
import imgSucursal30 from "../img/sucursal6-e.jpg";
//sucursal 7
import imgSucursal31 from "../img/sucursal7-a.jpg";
import imgSucursal32 from "../img/sucursal7-b.jpg";
import imgSucursal33 from "../img/sucursal7-c.jpg";
import imgSucursal34 from "../img/sucursal7-d.jpg";
// import imgSucursal35 from '../img/sucursal7-e.jpg';
//sucursal 8
import imgSucursal36 from "../img/sucursal8-a.jpg";
import imgSucursal37 from "../img/sucursal8-b.jpg";
import imgSucursal38 from "../img/sucursal8-c.jpg";
import imgSucursal39 from "../img/sucursal8-d.jpg";
import imgSucursal40 from "../img/sucursal8-e.jpg";
//sucursal 9
import imgSucursal41 from "../img/sucursal9-a.jpg";
import imgSucursal42 from "../img/sucursal9-b.jpg";
import imgSucursal43 from "../img/sucursal9-c.jpg";
import imgSucursal44 from "../img/sucursal9-d.jpg";
import imgSucursal45 from "../img/sucursal9-e.jpg";
//sucursal 10
import imgSucursal46 from "../img/sucursal10-a.jpg";
import imgSucursal47 from "../img/sucursal10-b.jpg";
import imgSucursal48 from "../img/sucursal10-c.jpg";
import imgSucursal49 from "../img/sucursal10-d.jpg";
import imgSucursal50 from "../img/sucursal10-e.jpg";
//sucursal 11
import imgSucursal51 from "../img/sucursal11-a.jpg";
import imgSucursal52 from "../img/sucursal11-b.jpg";
import imgSucursal53 from "../img/sucursal11-c.jpg";
import imgSucursal54 from "../img/sucursal11-d.jpg";
import imgSucursal55 from "../img/sucursal11-e.jpg";
//sucursal 12
import imgSucursal56 from "../img/sucursal12-a.jpg";
import imgSucursal57 from "../img/sucursal12-b.jpg";
import imgSucursal58 from "../img/sucursal12-c.jpg";
import imgSucursal59 from "../img/sucursal12-d.jpg";
//imagenes extras
import imgSucursal60 from "../img/sucursal3-f.jpg";
import imgSucursal61 from "../img/sucursal3-g.jpg";
import imgSucursal62 from "../img/sucursal4-f.jpg";
import imgSucursal63 from "../img/sucursal5-f.jpg";
import imgSucursal64 from "../img/sucursal5-g.jpg";
import imgSucursal65 from "../img/sucursal6-f.jpg";
import imgSucursal66 from "../img/sucursal6-g.jpg";
import imgSucursal67 from "../img/sucursal6-h.jpg";
import imgSucursal68 from "../img/sucursal6-i.jpg";
import imgSucursal69 from "../img/sucursal8-f.jpg";
import imgSucursal70 from "../img/sucursal8-g.jpg";
import imgSucursal71 from "../img/sucursal8-h.jpg";
import imgSucursal72 from "../img/sucursal8-i.jpg";
import imgSucursal73 from "../img/sucursal10-f.jpg";
import imgSucursal74 from "../img/sucursal10-g.jpg";
import imgSucursal75 from "../img/sucursal10-h.jpg";
import imgSucursal76 from "../img/sucursal10-i.jpg";
import imgSucursal77 from "../img/sucursal12-f.jpg";
import imgSucursal78 from "../img/sucursal12-g.jpg";
import imgSucursal79 from "../img/sucursal-este-e.jpg";
import imgSucursal80 from "../img/sucursal-sur-b.jpg";
import imgSucursal81 from "../img/sucursal-sur-c.jpg";
import imgSucursal82 from "../img/sucursal-castanuela-a.jpg";
import imgSucursal83 from "../img/sucursal-vega-b.jpg";
import imgSucursal84 from "../img/sucursal-vega-c.jpg";
import imgSucursal85 from "../img/sucursal-constanza-a.jpg";
import imgSucursal86 from "../img/sucursal-constanza-b.jpg";
import imgSucursal88 from "../img/sucursal-constanza-d.jpg";
import imgSucursal89 from "../img/sucursal-constanza-e.jpg";
import imgSucursal90 from "../img/sucursal-sur-d.jpg";
import imgSucursal91 from "../img/sucursal-este-f.jpg";
import imgSucursal92 from "../img/sucursal7-f.jpg";

//Sucursal Haina
import haina01 from "../img/haina-01.jpg";
import haina02 from "../img/haina-02.jpg";
import haina03 from "../img/haina-03.jpg";
import haina04 from "../img/haina-04.jpg";
import haina05 from "../img/haina-05.jpg";

//Sucursal Castañuelas
import castanuelas01 from "../img/castanuela-01.jpg";
import castanuelas02 from "../img/castanuela-02.jpg";
import castanuelas03 from "../img/castanuela-03.jpg";
import castanuelas04 from "../img/castanuela-04.jpg";
import castanuelas05 from "../img/castanuela-05.jpg";

//Sucursal Guayacanes
import guayacanes01 from "../img/guayacanes-01.jpg";
import guayacanes02 from "../img/guayacanes-02.jpg";
import guayacanes03 from "../img/guayacanes-03.jpg";
import guayacanes04 from "../img/guayacanes-04.jpg";
import guayacanes05 from "../img/guayacanes-05.jpg";

//Sucursal Constanza
import constanza01 from "../img/constanza-01.jpg";
import constanza02 from "../img/constanza-02.jpg";
import constanza03 from "../img/constanza-03.jpg";
import constanza04 from "../img/constanza-04.jpg";
import constanza05 from "../img/constanza-05.jpg";

//Sucursal Hato Mayor
import hato01 from "../img/hato-01.jpg";
import hato02 from "../img/hato-02.jpg";
import hato03 from "../img/hato-03.jpg";
import hato04 from "../img/hato-04.jpg";
import hato05 from "../img/hato-05.jpg";

//Sucursal Las Guaranas
import guaranas01 from "../img/guaranas-01.jpg";
import guaranas02 from "../img/guaranas-02.jpg";
import guaranas03 from "../img/guaranas-03.jpg";
import guaranas04 from "../img/guaranas-04.jpg";
import guaranas05 from "../img/guaranas-05.jpg";

//Sucursal La Reforma
import reforma01 from "../img/reforma-01.jpg";
import reforma02 from "../img/reforma-02.jpg";
import reforma03 from "../img/reforma-03.jpg";
import reforma04 from "../img/reforma-04.jpg";
import reforma05 from "../img/reforma-05.jpg";

//Sucursal La Vega
import vega01 from "../img/vega-01.jpg";
import vega02 from "../img/vega-02.jpg";
import vega03 from "../img/vega-03.jpg";
import vega04 from "../img/vega-04.jpg";
import vega05 from "../img/vega-05.jpg";

function Sucursales() {
  return (
    <div>
      <Header />
      <section className="section">
        <div className="container">
          <Sucursal data={Data.sucursales[0]} />
          <Sucursal data={Data.sucursales[1]} />
          <Sucursal data={Data.sucursales[2]} />
          <Sucursal data={Data.sucursales[3]} />
          <Sucursal data={Data.sucursales[4]} />
          <Sucursal data={Data.sucursales[5]} />
          <Sucursal data={Data.sucursales[6]} />
          <Sucursal data={Data.sucursales[7]} />
          <Sucursal data={Data.sucursales[8]} />
          <Sucursal data={Data.sucursales[9]} />
          <Sucursal data={Data.sucursales[10]} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Sucursales;
