import React, {useState} from "react";


const Form = props => {
    const [teamMember, setTeamMember] = useState ({
        name: "", 
        email: "", 
        role: ""
    });

    const handleChanges = event => {
        console.log(teamMember);
        setTeamMember({...teamMember, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        const newTeamMember = {
            ...teamMember,
            id:Date.now()
        }
        props.addNewTeamMember(newTeamMember);
        setTeamMember({name: "", email: "", role: ""});
    };

    return (
        <form className="memberform" onSubmit={submitForm}>
            <div className="inputs">
            <label htmlFor="name">Name</label>
            <input
            name="name"
            type="text"
            value={teamMember.name}
            onChange={handleChanges}
            />
            </div>
            <div className="inputs">
            <label htmlFor="email">Email</label>
            <input
            name="email"
            type="text"
            value={teamMember.email}
            onChange={handleChanges}
            />
            </div>
            <div className="inputs">
            <label htmlFor="role">Role</label>
            <input
            name="role"
            type="text"
            value={teamMember.role}
            onChange={handleChanges}
            />
            </div>
            <button className="btn" type="submit">Add</button>
        </form>
    )
}
   
export default Form;