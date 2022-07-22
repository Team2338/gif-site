import './team.scss';

function Team() {
    const coaches = [
        {
            id: 1,
            name: "Bill Knopf",
            title: "Coderman + DriveCoach Supreme",
            img: "assets/pdata/technical/Knopf.jpg",
            desc: "He cool"
        },
        {
            id: 2,
            name: "Kerry Nguyen",
            title: "Ebic Graphic Designer + Scouting... idk",
            img: "sry don't got one"
        },
        {
            id: 3,
            name: "Holly Twardowski",
            title: "Master Outreacher + Chairmaning",
            img: "Y'all even lucky that I had Knopf"
        },
        {
            id: 4,
            name: "Royce Leaders",
            title: "Whole lotta stuff",
            img: "srsly... what were you thinking?"
        }
    ]

    const sLead = [
        {

        }
    ]

    return (
        <div className="team" id="team">
            <h1>Our Team</h1>
            <h3>We are a team consisting of school district 308 students</h3>
        </div>
    );
}

export default Team;