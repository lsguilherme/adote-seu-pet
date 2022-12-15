import { operations } from "../database/dao/users.js";

export const getUsers = (request, response) => {
    operations.findAllUsers().then(([rows]) => {
        response.json(rows);
    })
}
