const express = require('express');
const timesController = require('../controllers/times.controller')
const { validateTeamName, validateTeamId } = require('../middlewares/TeamValidations');

const router = express.Router();

router.get('/', timesController.getTeams);
router.post('/', validateTeamName , timesController.createTeam);
router.delete('/:id', timesController.deleteTeam);
router.put('/:id', validateTeamId, validateTeamName, timesController.updateTeam);

module.exports = router;