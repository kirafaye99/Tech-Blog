const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

// router.use('/api', apiRoutes)

'localhost:3001/api/users'

module.exports = router;