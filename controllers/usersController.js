const User = require('../models').User;

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

async function getUsers() {
    return await User.findAll();
}

async function getUserByNickName(userNickName) {
    return await User.findOne({
        where: {nickName: userNickName},
    });
}

async function addSocketId(userId, socketId) {
    return await User.update(
        {socket_id: socketId},
        {where: {id: userId}}
    );
}

async function createUser(userNickName) {
    return await User.create({
        nickname: userNickName,
        avatar: userNickName.substring(0, 2) || userNickName.substring(0, 1),
        color: getRandomColor()
    });
}

async function deleteUser(id) {
    return await User.destroy({
        where: {id}
    });
}

async function deleteUserBySocketID(socketId) {
    return await User.destroy({
        where: {socket_id: socketId}
    });
}

module.exports = {
    getUsers,
    getUserByNickName,
    createUser,
    deleteUser,
    addSocketId,
    deleteUserBySocketID
}
