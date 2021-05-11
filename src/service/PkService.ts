import httpCommon from "../http-common";
import { IPk } from "../model/pk";

class PkService {
    getAll() {
        return httpCommon.get("/pkarea");
    }

    updatePk(pk: IPk) {
        return httpCommon.post("/pkarea/update", {update: [pk]})
    }

    createPk(pk: any) {
        return httpCommon.post("/pkarea/insert", {pk: pk})
    }

    deletePk(pkId: any) {
        return httpCommon.post("/pkarea/delete", {pkId: pkId})
    }
}

export default new PkService;