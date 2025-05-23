interface Users {
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
    status: 'Check In' | 'Check Out' | 'Booked' | 'Cancelled'
}

export default Users;