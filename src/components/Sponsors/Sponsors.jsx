import "./sponsors.scss";
import Intro from "./Intro";
import Caterpillar from "./sponsors/Caterpillar";
import Molex from "./sponsors/Molex";
import CargoHansa from "./sponsors/CargoHansa";
import TEConnectivity from "./sponsors/TEConnectivity";
import GERB from "./sponsors/GERB";
import IFoundation from "./sponsors/IntuitiveFoundation";

function Sponsors() {
    return (
        <>
            <div className="subteam">
                <Intro/>
                <section className="sponsors">
                    <div className="bo">
                        <Caterpillar/>
                    </div>
                    <div className="bo">
                        <Molex/>
                    </div>
                    <div className="bo">
                        <CargoHansa/>
                    </div>
                    <div className="bo"> 
                        <TEConnectivity/>
                    </div>
                    <div className="bo">
                        <GERB/>
                    </div>
                    <div className="bo">
                        <IFoundation/>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Sponsors;