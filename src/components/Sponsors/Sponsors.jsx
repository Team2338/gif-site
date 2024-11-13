import "./sponsors.scss";
import Intro from "./Intro";
import Caterpillar from "./sponsors/Caterpillar";
import Molex from "./sponsors/Molex";
import CargoHansa from "./sponsors/CargoHansa";

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
                </section>
            </div>
        </>
    );
}

export default Sponsors;