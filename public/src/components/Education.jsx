// Eduction.jsx

import { useState } from "react";
import "./styles/Education.css";

export default function Education({ data, setData }) {
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
            <h2>Education</h2>
            {isEditing ? (
                <div className = "education-container">
                    <input
                        type="text"
                        name="school"
                        value={data.school}
                        onChange={handleChange}
                        placeholder="School"
                    />
                    <input
                        type="text"
                        name="degree"
                        value={data.degree}
                        onChange={handleChange}
                        placeholder="Degree"
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
                    <p>School: {data.school}</p>
                    <p>Degree: {data.degree}</p>
                    <p>Start Date: {data.startDate}</p>
                    <p>End Date: {data.endDate}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}