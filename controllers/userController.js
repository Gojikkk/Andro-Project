import {
    getAllUsers,
    getUserById,
    createUser,
    updateTerminal,
    getUserByName,
    deleteUser
} from "../services/userService.js";   

async function getAllusersController(req, res) {
    try {
        const user = await getAllUsers(req.query);
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
    const { name, age, email, no_telepon, terminal_awal, terminal_tujuan } = req.body;
    if (!name || !age || !email || !no_telepon || !terminal_awal || !terminal_tujuan) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const newUser = await createUser({ name, age, email, no_telepon, terminal_awal, terminal_tujuan });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateTerminalController(req, res) {
    const {terminal_awal, terminal_tujuan } = req.body;
    if (!terminal_awal || !terminal_tujuan) {
        return res.status(400).json({ message: "Terminal awal dan Terminal tujuan are required" });
    }
    try {
        const updatedTerminal = await updateTerminal(req.params.id, req.body);
        res.status(200).json(updatedTerminal);
    } catch (error) {
        if (error.message === "User not found") {
            return res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
}

async function deleteUserController(req, res) {
    try {
        const deletedUser = await deleteUser(req.params.id);
        res.status(200).json(deletedUser);
    } catch (error) {
        if (error.message === "User not found") {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
}

async function getUserByNameController(req, res) {
    try {
        const user = await getUserByName(req.params.name);  
        res.status(200).json(user);
    } catch (error) {
        if (error.message === "User not found") {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
}



export { 
    getAllusersController, 
    getUserByIdController, 
    createUserController, 
    updateTerminalController, 
    deleteUserController, 
    getUserByNameController
};