const express = require('express');
const router = express.Router();
const wordRankRoutes = require('./wordRank.route');
const schedulatorRoutes = require('./schedulator.route');


const defaultRoutes = [
    {
      path: '/',
      route: wordRankRoutes
    },
    {
      path: '/',
      route: schedulatorRoutes
    },
  ]


  defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
  })

  module.exports = router;
