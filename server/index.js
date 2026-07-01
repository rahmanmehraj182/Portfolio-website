const express = require("express");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio built with React and Express.",
        tech: ["React", "Express", "CSS"],
        github: "https://github.com/yourusername/portfolio",
        demo: "https://your-demo-link.com"
    },
    {
        id: 2,
        title: "Weather App",
        description: "A simple weather application using API integration.",
        tech: ["React", "API", "JavaScript"],
        github: "https://github.com/yourusername/weather-app",
        demo: "https://your-weather-demo.com"
    }
];

app.get("/", (req, res) => {
    res.send("Portfolio API is running");
});
// js object and json is not equal!! or same !!! JSON is a known term for the both frontend and backend... Nothing to worry about!! 
app.get("/projects", (req, res) => {
    res.json(projects);
});
// GET vs POST:: 
/**
 * REST API: GET is for the retrieving information from the backend API
 * POST : Post is for sending the data from the frontend / user/ client to the backend user!!! 
 * 
 * There are 2 more things : PUT and DELETE!!!
 * 
 * QUERY ::: q = mercedez+car>> this went to the GET request!!! so intruder who is sniffing will definitely check this one and create the vulnerabilities to the system... SO beware from the system... 
 * SNIFFING :: powerful countries like USA, CHIna, Ind ... Like from physical layer anything can be encrypted... Encryption is simpler things... 
 * 
 */
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    console.log("Contact form submitted:", { name, email, message });

    res.json({ message: "Message received successfully" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
