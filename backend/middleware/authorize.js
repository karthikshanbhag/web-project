const jwt = require('jsonwebtoken');

const authorize = (req, res, next) => {
    // GEt the user from the JWT token and append the id to req body
    const token = req.header(`authToken`)

    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.user;
        next();

    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
}

module.exports = authorize;