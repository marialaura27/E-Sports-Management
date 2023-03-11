const jogadoresModel = require("../models/jogadores.model");

const validateTeamCount = async (req, res, next) => {
  const { time_id } = req.body;

  const count = await jogadoresModel.getPlayerCountByTeamId(time_id);
  if (count >= 5) {
    return res.status(400).json({ message: "Erro: O time já está cheio!" });
  }

  next();
};

const validatePlayer = (req, res, next) => {
  const { nome, idade, time_id } = req.body;
  if (!nome || !idade || !time_id) {
    return res.status(400).json({ message: "Preencher todos o campos!" });
  }

  next();
};



const validatePlayerId = async (req, res, next) => {
  const { id } = req.params;
  const players = await jogadoresModel.getPlayers();
  const idInList = players.filter((player) => player.id == id);
  if (idInList.length == 0) {
    return res
      .status(400)
      .json({ message: "O id " + id + " do jogador é inválido" });
  }
  next();
};

module.exports = {
  validateTeamCount,
  validatePlayer,
  validatePlayerId,
};
