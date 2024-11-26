const User = require('../models/User');

exports.getRecommendations = async (req, res) => {
    const userData = req.body;

    // Logique de recommandation ici (simplifiée)
    const recommendedSize = "M"; // Exemple de taille recommandée

    const newUser  = new User({ ...userData, recommendedSize });
    await newUser .save();

    res.json({ recommendedSize });
};
