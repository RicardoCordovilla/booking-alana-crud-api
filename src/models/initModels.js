const Bookings = require('./bookings.models')
const Users = require('./users.models')

const initModels = () => {

    Bookings.belongsTo(Users)
    Users.hasMany(Bookings)

}


module.exports = initModels