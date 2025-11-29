import {
    createUser,
    getAllUsers,
    getUserById,
} from "../services/userService.js";   

async function getAllusersController(req, res) {
    try {
        const user = await getAllUsers();
        if (user.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getUserByIdController(req, res) {
    try {
        const user = await getUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        if (error.message === "User not found") {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
}

async function createUserController(req, res) {
    const { name, age, email } = req.body;
    if (!name || !age || !email) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const newUser = await createUser({ name, age, email });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { getAllusersController, getUserByIdController, createUserController };