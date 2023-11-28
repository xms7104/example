const { pool } = require("../database/connent");

const Controller = {
    getAll: async (req, res) => {
        const entityName = req.route.path.substring(1);
        await pool.query(`SELECT * FROM ${entityName}`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    },
    getById: async (req, res) => {
        const { id } = req.params;
        const entityName = req.route.path.substring(1);
        await pool.query(`SELECT * FROM ${entityName} WHERE id = ?`, [id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    },
    create: async (req, res) => {
        const entityName = req.route.path.substring(1);
        const values = Object.values(req.body);
        const columns = Object.keys(req.body).join(', ');
        const placeholders = values.map(() => '?').join(', ');
        const query = `INSERT INTO ${entityName} (${columns}) VALUES (${placeholders})`;

        await pool.query(query, values, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    },
    update: async (req, res) => {
        const { id } = req.params;
        const match = req.route.path.match(/^\/([^\/]+)/);
        const entityName = match ? match[1] : null;
        const updates = Object.entries(req.body).map(([key, value]) => `${key} = ?`).join(', ');
        const values = Object.values(req.body);
        const query = `UPDATE ${entityName} SET ${updates} WHERE id = ?`;

        await pool.query(query, [...values, id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    },
    delete: async (req, res) => {
        const { id } = req.params;
        const match = req.route.path.match(/^\/([^\/]+)/);
        const entityName = match ? match[1] : null;
        await pool.query(`DELETE FROM ${entityName} WHERE id = ?`, [id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    },
};

module.exports = Controller;
