const timesModel = require("../models/times.model");

const validateTeamName = async (req, res, next) => {
  const { nome } = req.body;
  const teams = await timesModel.getTeams();
  const nameInList = teams.filter((team) => team.nome == nome);
  if (nameInList.length > 0) {
    return res.status(400).json({ message: "O nome " + nome + " já existe!" });
  }
  next();
};

const validateTeamId = async (req, res, next) => {
  
  const { id } = req.params;
  const teams = await timesModel.getTeams();
  const idInList = teams.filter((team) => team.id == id);

  if (idInList.length == 0) {
    return res.status(400).json({ message: "O id " + id + " do time é inválido" });
  }
  next();
};

module.exports = {
  validateTeamName,
  validateTeamId
};
