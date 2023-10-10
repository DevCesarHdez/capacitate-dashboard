import axios from "axios"

const inscriptions = async () => {
    return await axios.get("https://besvc.capacitateparaelempleo.org/api/inscriptions/TestReport")
}

export default inscriptions