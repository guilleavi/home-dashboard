import axios from "axios"
import { DolarSi } from "types/dolares"


const DOLARSI_VALORES = `https://www.dolarsi.com/api/api.php?type=valoresprincipales`;

export const getDollaDollaBillsYall = async (): Promise<DolarSi[]> =>
    await (await axios.get(DOLARSI_VALORES)).data;
