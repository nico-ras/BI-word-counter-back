const express = require('express');
const router = express.Router();
const wordRankRoutes = require('./wordRank.route');


const defaultRoutes = [
    {
      path: '/',
      route: wordRankRoutes
    },
  ]


  defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
  })

  module.exports = router;
