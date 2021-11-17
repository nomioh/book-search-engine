const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");

import Schema from "./graphql/schema";
const apolloServer = new ApolloServer({
  schema: Schema,
  playground: true,
  context: ({ req }) => ({
    user: req.user,
  }),
});

router.use("/api", apiRoutes);

// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
