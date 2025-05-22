interface Booking {
    id: string;
    name: string;
    image: string;
    orderDate: string;
    checkIn: {
        date: string;
        hour: string;
    };
    checkOut: {
        date: string;
        hour: string;
    };
    specialRequest: {
        status: boolean;
        text: string;
    };
    roomType: string;
    status: 'Refund' | 'Pending' | 'Booked' | 'Cancelled'
}

export default Booking;