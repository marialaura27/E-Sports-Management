const pool = require('../db/connection');

const getPlayers = async () => {
    const query = 'SELECT jogadores.id, jogadores.nome, idade, times.nome AS time FROM jogadores INNER JOIN times ON times.id = jogadores.time_id';
    const { rows } = await pool.query(query);
    return rows;
}

const createPlayer = async (nome, idade, time_id) => {
    const query = 'INSERT INTO jogadores (nome, idade, time_id) VALUES ($1, $2, $3)';
    const { rows } = await pool.query(query, [nome, idade, time_id]);
    return rows;
}

const getPlayerCountByTeamId = async (id) => {
    const query = `
        SELECT count(*) as total_jogadores 
            FROM times 
        INNER JOIN jogadores 
            ON times.id = jogadores.time_id
        WHERE times.id = $1
    `;
    const { rows } = await pool.query(query, [id]);
    
    return rows[0]?.total_jogadores;
}

const deletePlayer = async (id) => {
    const query = 'DELETE FROM jogadores WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows;
}

const updatePlayer = async (nome, idade, time_id, id) => {
    const query = 'UPDATE jogadores SET nome = $1, idade = $2, time_id = $3 WHERE id = $4';
    const { rows } = await pool.query(query, [nome, idade, time_id, id]);
    return rows;
}

module.exports = {
    getPlayers,
    createPlayer,
    getPlayerCountByTeamId,
    deletePlayer,
    updatePlayer
}