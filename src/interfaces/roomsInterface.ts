interface Room {
    id: string;
    roomNumber: string;
    name: string;
    bedType: string;
    roomFloor: string;
    facilities: string[];
    rate: string;
    image: string;
    status: 'Available' | 'Booked';
    description: string;
}

export default Room;