import '../outreach.scss';

function Projects(props) {

    const project =
        [
            {
                title: 'Robotics Day Legislation',
                description: '',
                image: ''
            },
            {
                title:'CHUCK',
                description:'Our Community Helping Utility Companion for Kickball is a device that we developed to increase equity in adaptive PE classes for students with limited mobility.',
                image:'imgs/IMG_6258.JPG'
            },
            {
                title:'Adaptive Toys',
                description:'We adapt toys by soldering an easy-press button onto them to provide equity and inclusivity to students with limited mobility.',
                image:'imgs/IMG_007.JPG'
            },
            {
                title:'STEM Kits',
                description:'Supplying Hand-on Science to English Language Learner students at Title I Schools. If you are interested in sponsoring our efforts to provide hands-on science to young kids, please contact us.',
                image:'imgs/STEM Kits1.jpg'
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