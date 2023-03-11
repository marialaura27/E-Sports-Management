const express = require('express');
const jogadoresController = require('../controllers/jogadores.controller')
const { validateTeamCount, validatePlayer, validatePlayerId} = require('../middlewares/PlayerValidations');
const { validateTeamId } = require('../middlewares/TeamValidations');

const router = express.Router();

router.get('/', jogadoresController.getPlayers);
router.post('/', validatePlayer, validateTeamCount,  jogadoresController.createPlayer);
router.delete('/:id', jogadoresController.deletePlayer);
router.put('/:id', validatePlayer, validatePlayerId, jogadoresController.updatePlayer);

module.exports = router;