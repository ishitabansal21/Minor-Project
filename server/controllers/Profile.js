const createProfile = async(req, res) =>{
    res.json(req.user);
}

module.exports = {
    createProfile,
}