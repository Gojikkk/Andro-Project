import dataUser from "../data.js";

async function getAllUsers() {
    return dataUser;
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
    };
    dataUser.push(newUser);
    return newUser;
}

export { getAllUsers, getUserById, createUser };