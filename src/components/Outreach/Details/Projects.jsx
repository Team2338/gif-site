import '../outreach.scss';

function Projects(props) {

    const project =
        [
            {
                title:'title1',
                description:'description1',
                image:'imgs/IMG_1755.JPG'
            },
            {
                title:'title2',
                description:'description1',
                image:'imgs/IMG_1755.JPG'
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