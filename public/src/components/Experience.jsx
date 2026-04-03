//Experience.jsx

import { useState } from "react";
import "./styles/Experience.css";

export default function Experience({ data, setData }) {
    const [isEditing, setIsEditing] = useState(true);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
            <h2>Experience</h2>
            {isEditing ? (
                <div className ="experience-container">
                    <input
                        type="text"
                        name="company"
                        value={data.company}
                        onChange={handleChange}
                        placeholder="Company"
                    />
                    <input
                        type="text"
                        name="position"
                        value={data.position}
                        onChange={handleChange}
                        placeholder="Position"
                    />
                    <input
                        type="text"
                        name="startDate"
                        value={data.startDate}
                        onChange={handleChange}
                        placeholder="Start Date"
                    />
                    <input
                        type="text"
                        name="endDate"
                        value={data.endDate}
                        onChange={handleChange}
                        placeholder="End Date"
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <p>Company: {data.company}</p>
                    <p>Position: {data.position}</p>
                    <p>Start Date: {data.startDate}</p>
                    <p>End Date: {data.endDate}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}