const {Users} = require('../models')

const createUser = async (req, res) => {
    const {name, email, password} = req.body
    
    try {
        const user = await Users.create({
            name,
            email,
            password
        })

        res.status(201).json({message: 'User created successfully', user})
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({message: 'Error creating user'})
        
    }
}

module.exports = {createUser}