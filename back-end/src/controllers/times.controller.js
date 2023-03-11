const timesModel = require("../models/times.model");

const getTeams = async (req, res) => {
  const times = await timesModel.getTeams();
  res.status(200).json(times);
};

const createTeam = async (req, res) => {
  const { nome } = req.body;

  await timesModel.createTeam(nome);

  res.status(201).json({
    message: "Time registrado!",
    body: {
      time: { nome },
    },
  });
};

const deleteTeam = async (req, res) => {
  const { id } = req.params;
  await timesModel.deleteTeam(parseInt(id));
  res.status(200).json({message: "Time excluído!"});
};

const updateTeam = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  await timesModel.updateTeam(nome, parseInt(id));
  res.status(200).json({message: "Time atualizado!"});
};

module.exports = {
  getTeams,
  createTeam,
  deleteTeam,
  updateTeam,
};
