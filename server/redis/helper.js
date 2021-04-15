const client = require("./index");

module.exports = {
    getAllRooms: () => {
        return new Promise((resolve, reject) => {
            client.lrange("rooms", 0, -1, (err, reply)=>{
                if(err){
                    console.log('[ERROR] Cannot fetch rooms from redis')
                    console.log(err.message);
                }else{
                    resolve(reply);
                }
            })
        });
    },

    createRoom: (roomData) => {
        return new Promise((resolve, reject) => {
            client.lpush("rooms", roomData, (err, reply) => {
                if(err){
                    console.log('[ERROR] Cannot add room data to redis')
                    console.log(err.message);
                }else{
                    resolve(reply);
                }
            })
        });
    }
}