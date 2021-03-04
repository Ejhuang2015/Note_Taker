// Dependencies
// =============================================================
const express = require('express');
const htmlRoute = require("./routes/htmlRoutes");
const apiRoute = require("./routes/apiRoutes");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Allows the use of static files within the public folder
app.use(express.static('public'))
// Give access to the routes
app.use("/api", apiRoute);
app.use("/", htmlRoute);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
