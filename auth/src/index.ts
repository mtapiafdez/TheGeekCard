import express from "express";
import "express-async-errors";

const app = express();

app.use(express.json());

app.get("/api/users/test", (req, res) => {
    res.send("Test");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening On Port: ${PORT}`);
});
