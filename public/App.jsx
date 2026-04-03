import GeneralInfo from "./src/components/GeneralInfo.jsx";
import Education from "./src/components/Education.jsx";
import Experience from "./src/components/Experience.jsx";
import Languages from "./src/components/Languages.jsx";
import "./index.css"
import { useState } from "react";


function App() {

    const [generalInfo, setGeneralInfo] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const [education, setEducation] = useState({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
    });

    const [experience, setExperience] = useState({
        company: "",
        position: "",
        startDate: "",
        endDate: "",
    });

    const [languages, setLanguages] = useState({
        language: "",
        proficiency: "",
    });
    return (
        <div>
            <GeneralInfo data={generalInfo} setData={setGeneralInfo} />
            <Education data={education} setData={setEducation} />
            <Experience data={experience} setData={setExperience} />
            <Languages data={languages} setData={setLanguages} />
        </div>
    );
}

export default App;

