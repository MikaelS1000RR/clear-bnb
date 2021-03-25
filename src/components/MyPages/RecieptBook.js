import Radium from 'radium'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { BookingContext } from '../../contexts/BookingContext'

function RecieptBook(props) {
  const { myBookings } = useContext(BookingContext)
  const [currentBooking, setCurrentBooking] = useState(myBookings.filter(b => b._id == props.bookId))

  // useEffect(() => {
  //   let bookObj = myBookings.filter(b => b._id == props.bookId)
  //   setCurrentBooking(bookObj)
  //   console.log('currentbooking', currentBooking)
  // }, [props.bookId])

  return (
    <div style={style.modal}>
      Price: {currentBooking[0].totalPrice}<br />
      Start date: {new Date(currentBooking[0].startDate).toString().substr(0, 11)}<br />
      End date: {new Date(currentBooking[0].endDate).toString().substr(0, 11)}<br />
    </div>
  )
}

const style = {
  modal: {
    position: "fixed",
    left: "10vw",
    right: "10vw",
    top: "15%",
    bottom: "auto",
    margin: "auto",
    zIndex: '10',
    backgroundColor: 'purple'
  },

}

export default Radium(RecieptBook)