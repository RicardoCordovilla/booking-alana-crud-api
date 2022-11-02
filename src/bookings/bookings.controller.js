const { where } = require('sequelize')
const uuid = require('uuid')
const Bookings = require('../models/bookings.models')
const Users = require('../models/users.models')


const createBooking=async(data)=>{
    const response=await Bookings.create({
        id:uuid.v4(),
        zoneName:data.zoneName,
        completename:data.completename,
        phone:data.phone,
        date:data.date,
        adults:data.adults,
        kids:data.kids,
        category:data.category,
        pay:data.pay,
        notes:data.notes,
        userId:data.userId,
    })
    return response
}

const updateBooking=async(id,data)=>{
    const result=await Bookings.update(data,{
        where:{id}
    })
    return result
}


const getBookingByDate=async(zone,date)=>{
    const data=await Bookings.findAll(
        {
            where:{
                zoneName:zone,
                date
            },
            include:[
                {
                    model:Users,
                    as:'user',
                    attributes:['name']
                }
            ]
        }
    )
    return data
}

const getBookingByZoneName=async(zoneName)=>{
    const data=await Bookings.findAll(
        {
            where:{
                zoneName
            },
            include:[
                {
                    model:Users,
                    as:'user',
                    attributes:['name']
                }
            ]
        }
    )
    return data
}

module.exports={createBooking,getBookingByZoneName,updateBooking,getBookingByDate}