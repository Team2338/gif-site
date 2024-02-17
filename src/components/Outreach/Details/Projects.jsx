import '../outreach.scss';

function Projects(props) {
    const hEssay = <div>We worked with Representative Stephanie Kiffowit to pass IL FIRST Day, H.Res 0564. This legislation is honored onn the 3rd Friday of every March and celebrates FIRST Robotics and STEM education. <br />

        2338 is partnering with Congressperson Bill Foster to pass National FIRST Day, H.Res 183. It celebrates FIRST and STEM and encourages schools to use 1.17 billion dollars from the Every Student Succeeds Act to fund after-school robotics programs. Sign this <a href="https://www.change.org/p/national-first-robotics-day">petition</a> to show your support and help us to pass it! <br />

        We are working with Representative Barbara Hernandez to pass House Bill 3752 which declares the 3rd Friday of every March as IL Robotics Day and acknowledges STEM education and Robotics programs.</div>

    const project =
        [
            {
                title: 'Robotics Day Legislation',
                description: hEssay,
                image: 'imgs/jingle.jpeg'
            },
            {
                title:'CHUCK',
                description:'Our Community Helping Utility Companion for Kickball is a device that we developed to increase equity in adaptive PE classes for students with limited mobility.',
                image:'imgs/IMG_6258.JPG'
            },
            {
                title:'Adaptive Toys',
                description:'We adapt toys by soldering an easy-press button onto them to provide equity and inclusivity to students with limited mobility.',
                image:'imgs/Outreach.jpg'
            },
            {
                title:'STEM Kits',
                description:'Supplying Hand-on Science to English Language Learner students at Title I Schools. If you are interested in sponsoring our efforts to provide hands-on science to young kids, please contact us.',
                image:'imgs/2024StemKits.JPG'
            },
            {
                title:'Women Who STEM Meetings',
                description:'We host monthly meetings that empower girls in FIRST and support them as they mentor the younger generation of STEM leaders.',
                image:'imgs/gwhostem.jpg'
            },
            {
                title:'Girl Scouts Workshop',
                description:'Introducing local girl scouts grades 3-5 to STEM and FIRST Robotics by teaching skills such as using hand tools, power tools, driving the robot, and educating them about available FLL programs.',
                image:'imgs/jacker.png'
            },
            {
                title:'Winter STEM Camp',
                description:'Introducing girls grades 6-8 to STEM and FIRST Lego League by hosting them at our shop and providing mentorship.',
                image:'imgs/morestuff.png'
            }
        ];

    const projectlist = project.map((project) =>
        <div className="box">
            <div className="left">
                <h2 className="title">{project.title}</h2>
                <p className="description">{project.description}</p>
            </div>
            <div className="right">
                <img src={project.image} alt="photo"/>
            </div>
        </div>
    );

    return (
        <section className="projects">
            <div className="content">
                <div className="title">
                    <h2>Projects at <span className="frc2338-title">Gear it Forward</span></h2>
                </div>
                {projectlist}
            </div>
        </section>
    );
}

export default Projects;