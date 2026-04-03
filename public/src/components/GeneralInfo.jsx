// GeneralInfo.jsx
import "./styles/GeneralInfo.css"

import { useState } from "react";

export default function GeneralInfo({ data, setData }) {
    const [isEditing, setIsEditing] = useState(true);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <div>
                <input type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                <input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <input type="tel" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
                <input type="text" value={data.address} onChange={(e) => setData({ ...data, address: e.target.value })} />
                <button onClick={handleSave}>Save</button>
            </div>
        );
    }
    return (
        <div className="general-info-container">
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Address: {data.address}</p>
            <button onClick={handleEdit}>Edit</button>
        </div>
    );
}

