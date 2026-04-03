import GeneralInfo from "./GeneralInfo.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Languages from "./Languages.jsx";


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