import httpCommon from "../http-common";

class PkService {
    getAll() {
        return httpCommon.get("/pkarea");
    }
}

export default new PkService;