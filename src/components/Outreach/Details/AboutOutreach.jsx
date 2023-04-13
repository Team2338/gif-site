import "../outreach.scss";
import "../../../globals.scss";

function AboutOutreach() {
    return (
        <section className="about-outreach">
            <div className="content">
                <div className="left">
                    <h2 className="title">What is <span>Outreach?</span></h2>
                    <p className="answer">Outreach is one of the great opportunities available on the team. Outreach has an overall job to use our robotics skills to better the community. We solder easy-press buttons onto toys in order to make them more inclusive because some kids might not be able to play with them otherwise. Additionally, we create and design a kickball device called CHUCK (Community-Helping Utility Companion for Kickball). This device allows every kid, regardless of their mobility, to participate in games (I have inserted a photo for reference).
                        On top of that, we make monthly STEM kits and send them out to underrepresented schools in order to introduce STEM to the young generation. The main star of Outreach is our Impact, formally Chairman´s, Essay. We make an impact essay, video, and summary every year and submit it to FIRST. If they feel we are doing our part to help the community, we will win the Impact Award. Last year we won the Chairman's Award, and our team has continued to work towards making a difference in the community by introducing our IL Robotics Day Bill to Congress, starting jr. high presentations to further our reach, and producing an additional 2 CHUCKS for our community.</p>
                </div>
                <div className="right">
                    <img src="imgs/IMG_7837.jpg" alt="outreach photo" height="300" width="450"/>
                </div>
            </div>
        </section>
    );
}

export default AboutOutreach;