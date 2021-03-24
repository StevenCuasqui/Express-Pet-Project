import app from "./api/app";
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
