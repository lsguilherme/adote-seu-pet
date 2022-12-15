import { connect } from "../config.js";

export const operations = {
    findAllUsers: function () {
        return connect.promise().query('select * from usuarios');
    }
}


