const pool = require('../db/connection');

const getTeams = async () => {
    const query = 'SELECT * FROM times';
    const { rows } = await pool.query(query);
    return rows;
}

const createTeam = async (nome) => {
    const query = 'INSERT INTO times (nome) VALUES ($1)';
    const { rows } = await pool.query(query, [nome]);
    return rows;
}

const deleteTeam = async (id) => {
    const query = 'DELETE FROM times WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows;
}

const updateTeam = async (nome, id) => {
    const query = 'UPDATE times SET nome = $1 WHERE id = $2';
    const { rows } = await pool.query(query, [nome, id]);
    return rows;
}

module.exports = {
    getTeams,
    createTeam,
    deleteTeam,
    updateTeam
}