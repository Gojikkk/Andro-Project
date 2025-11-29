import dataUser from "../dataPenumpang.js";

async function getAllUsers(filters) {
    if (!filters || Object.keys(filters).length === 0) {
        return dataUser;
    }
    let filteredUsers = dataUser;
    if (filters.terminal_awal) {
        filteredUsers = filteredUsers.filter(user => {
            return user.terminal_awal.toLowerCase() === filters.terminal_awal.toLowerCase();
        });
}
return filteredUsers;
}

async function getUserById(id) {
    const userID = parseInt(id);
    const user = dataUser.find((u) => u.id === userID);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

async function createUser(userData) {
    const newUser = {
        id: dataUser.length + 1,
        name: userData.name,
        age: userData.age,
        email: userData.email,
        no_telepon: userData.no_telepon,
        terminal_awal: userData.terminal_awal,
        terminal_tujuan: userData.terminal_tujuan,
    };
    dataUser.push(newUser);
    return newUser;
}

async function updateTerminal(id, userData) {
    const userID = parseInt(id);
    const userIndex = dataUser.findIndex((u) => u.id === userID);
    if (userIndex === -1) {
        throw new Error("User not found");
    }
    dataUser[userIndex].terminal_awal = userData.terminal_awal || dataUser[userIndex].terminal_awal;
    dataUser[userIndex].terminal_tujuan = userData.terminal_tujuan || dataUser[userIndex].terminal_tujuan;
    return dataUser[userIndex];
}

async function deleteUser(id) {
    const userID = parseInt(id);
    const userIndex = dataUser.findIndex((u) => u.id === userID);
    if (userIndex === -1) {
        throw new Error("User not found");
    }
    const deletedUser = dataUser.splice(userIndex, 1);
    return deletedUser[0];
}

async function getUserByName(name) {
    const user = dataUser.find((u) => u.name.toLowerCase() === name.toLowerCase());
    if (!user) {
        throw new Error("User not found");
    }   
    return user;
}



export { getAllUsers, getUserById, createUser, updateTerminal, deleteUser, getUserByName};