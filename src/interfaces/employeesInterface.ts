interface Employees {
    image: string;
    name: string;
    id: string;
    joined: string;
    jobDesk: string[];
    schedule: string[];
    contact: string;
    status: 'Active' | 'Inactive';
}

export default Employees;