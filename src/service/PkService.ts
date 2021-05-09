import httpCommon from "../http-common";
import { IPk } from "../model/pk";

class PkService {
    getAll() {
        return httpCommon.get("/pkarea");
    }

    updatePk(pk: IPk) {
        return httpCommon.post("/pkarea/update", {update: [pk]})
    }
}

export default new PkService;