import '../outreach.scss';

function Projects(props) {

    const project =
        [
            {
                title:'CHUCK',
                description:'Community Helping Utility Companion for Kickball. Adaptive PE Device for students with disabilities. Equity for teamwork and play.\n',
                image:'imgs/IMG_6258.JPG'
            },
            {
                title:'Adaptive Toys',
                description:'Converting battery operated toys for kids with physical disabilities.\n',
                image:'imgs/IMG_007.JPG'
            },
            {
                title:'STEM Kits',
                description:'Supplying Hand-on Science to English Language Learner students at Title I Schools. If you are interested in sponsoring our efforts to provide hands-on science to young kids, please contact us.',
                image:'imgs/STEM Kits1.jpg'
            },
            {
                title:'Women Who STEM Meetings',
                description:'Monthly Meetings with Women working in STEM. Girls and allies are welcome. If you are interested in speaking at our meeting, please contact us.\n',
                image:'imgs/gwhostem.jpg'
            },
            {
                title:'Girl Scouts Workshop',
                description:'Introducing local girl scouts grades 3-5 to STEM and FIRST Robotics',
                image:'imgs/jacker.png'
            },
            {
                title:'Winter STEM Camp',
                description:'Introducing girls grades 6-8 to STEM and FIRST Lego League',
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