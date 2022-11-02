const bookingsController = require('./bookings.controller')

const addBooking = (req, res) => {
    const userId = req.user.id
    const {
        zoneName,
        completename,
        phone,
        date,
        adults,
        kids,
        category,
        pay,
        notes} = req.body
    if (zoneName
        && completename
        && phone
        && date
        && adults) {
        bookingsController
            .createBooking({
                userId,
                zoneName,
                completename,
                phone,
                date,
                adults,
                kids,
                category,
                pay,
                notes
            })
            .then(data => res.status(201).json(data))
            .catch(err => res.status(400).json(err.message))
    }

    else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                zoneName: 'string',
                completename: 'string',
                phone:'PHONE',
                date: 'AAAA/MM/DD',
                adults: 'INTEGER'
            }
        })
    }

}

const patchBooking = (req, res) => {
    const id = req.params.id
    const fields = req.body
    bookingsController
        .updateBooking(id, fields)
        .then((data) => {
            if (data[0]) {
                res.status(200).json({ message: `Edited succefully` });
            } else {
                res.status(404).json({ message: "Invalid booking ID" });
            }
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        })
}

const getBookingbyDate = (req, res) => {
    // localhost:9000/api/v1/bookings?zone=circo&date=2022-10-30
    const zone = req.query.zone
    const date = req.query.date
    bookingsController.getBookingByDate(zone, date)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => { res.status(400).json({ message: err.message }) })
}

const getBookingByZoneName = (req, res) => {
    const zoneName = req.params.name
    const date = req.query.date
    bookingsController.getBookingByZoneName(zoneName)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => { res.status(400).json({ message: err.message }) })
}

module.exports = {
    addBooking,
    getBookingByZoneName,
    patchBooking,
    getBookingbyDate
}