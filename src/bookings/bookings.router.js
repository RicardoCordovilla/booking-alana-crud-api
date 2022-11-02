const router = require('express').Router()
const passport = require('passport')

const bookingServices = require('./bookings.services')
require('../middlewares/auth.middleware')(passport)

router.route('/')
    .post(
        passport.authenticate('jwt', { session: false }),
        bookingServices.addBooking
    )

router.route('/')
    .get(bookingServices.getBookingbyDate)

router.route('/:name')
    .get(bookingServices.getBookingByZoneName)

router.route('/:id')
    .patch(
        passport.authenticate('jwt', { session: false }),
        bookingServices.patchBooking
    )


module.exports = router