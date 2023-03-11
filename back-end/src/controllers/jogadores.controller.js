const jogadoresModel = require('../models/jogadores.model');

const getPlayers = async (req, res) => {
  const jogadores = await jogadoresModel.getPlayers();
  res.status(200).json(jogadores);
}

const createPlayer = async (req, res) => {
    const { nome, idade, time_id } = req.body;
    const jogador = await jogadoresModel.createPlayer(nome, idade, time_id);
    res.status(201).json({message: "Jogador registrado!", 
    body: {
      jogador: {nome, idade }
    }
  });
}

const deletePlayer = async (req, res) => {
  const { id } = req.params;
  await jogadoresModel.deletePlayer(parseInt(id));
  res.status(200).json({message: "Jogador excluído!"});
};

const updatePlayer = async (req, res) => {
  const { id } = req.params;
  const { nome, idade, time_id } = req.body;
  
  await jogadoresModel.updatePlayer(nome, idade, time_id,parseInt(id));
  res.status(200).json({message: "Jogador atualizado!"});
};


module.exports = {
  getPlayers,
  createPlayer,
  deletePlayer,
  updatePlayer
}