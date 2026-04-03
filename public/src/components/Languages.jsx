//Languages.jsx
import React, {useState} from "react";
import "./styles/Languages.css"

export default function Languages({ data, setData }) {
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
            <h2>Languages</h2>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        name="language"
                        value={data.language}
                        onChange={handleChange}
                        placeholder="Language"
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div className="languages-container">
                    <p>Language: {data.language}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}