import http from "../http-common";

class PersonDataService {
    getAll() { return http.get("/persons") }

    get(id) { return http.get(`/person/${id}`) }

    create(data) { return http.post("/person", data) }

    update(id, data) { return http.put(`/person/${id}`, data) }

    delete(id) { return http.delete(`/person/${id}`) }
}

export default new PersonDataService();