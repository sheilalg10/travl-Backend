import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

// Definición básica la API con componentes y esquemas
const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Trav Hotel Admin API',
      version: '1.0.0',
      description: 'Documentación de la API de Trav Hotel',
    },
    servers: [
      { url: 'http://localhost:3000/api', description: 'Servidor local' }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      },
      schemas: {
        Employee: {
          type: 'object',
          properties: {
            id: { type: 'string', example: '12341225' },
            name: { type: 'string', example: 'María Carey' },
            image: { type: 'string', format: 'uri', example: 'https://randomuser.me/api/portraits/women/1.jpg' },
            joined: { type: 'string', example: 'Aug 2th 2017' },
            jobDesk: { 
              type: 'array', 
              items: { type: 'string', example: 'Answering guest inquiries' }
            },
            schedule: { 
              type: 'array', 
              items: { type: 'string', example: 'Monday' }
            },
            contact: { type: 'string', example: '123 2345 1234' },
            status: { type: 'string', enum: ['Active', 'Inactive'], example: 'Active' }
          },
          required: ['id', 'name', 'image', 'joined', 'jobDesk', 'schedule', 'contact', 'status']
        },
        Bookings: {
          type: 'object',
          properties: {
            id: { type: 'string', example: '000123456' },
            name: { type: 'string', example: 'Cahyadi Purnomo' },
            image: { type: 'string', format: 'uri', example: 'https://randomuser.me/api/portraits/women/1.jpg' },
            orderDate: { type: 'string', example: 'Oct 30th 2020 09:21 AM' },
            checkIn: {
              type: 'object',
              properties: {
                date: { type: 'string', example: 'Nov 2nd, 2020' },
                hour: { type: 'string', example: '9:46 PM' }
              }
            },
            checkOut: {
              type: 'object',
              properties: {
                date: { type: 'string', example: 'Nov 4th, 2020' },
                hour: { type: 'string', example: '6:12 PM' }
              }
            },
            specialRequest: {
              type: 'object',
              properties: {
                status: { type: 'boolean', example: true },
                text: { type: 'string', example: 'View Notes' }
              }
            },
            roomType: { type: 'string', example: 'Deluxe A - 02' },
            status: { type: 'string', example: 'Refund' }
          },
          required: ['id', 'name', 'image', 'orderDate', 'checkIn', 'checkOut', 'specialRequest', 'roomType', 'status']
        },
        Users: {
          type: 'object',
          properties: {
            id: { type: 'string', example: '000123459' },
            name: { type: 'string', example: 'John Doe' },
            image: { type: 'string', format: 'uri', example: 'https://randomuser.me/api/portraits/men/5.jpg' },
            orderDate: { type: 'string', example: 'Feb 12th 2022 02:15 PM' },
            checkIn: {
              type: 'object',
              properties: {
                date: { type: 'string', example: 'Feb 14th, 2022' },
                hour: { type: 'string', example: '3:00 PM' }
              }
            },
            checkOut: {
              type: 'object',
              properties: {
                date: { type: 'string', example: 'Feb 18th, 2022' },
                hour: { type: 'string', example: '11:00 AM' }
              }
            },
            specialRequest: {
              type: 'object',
              properties: {
                status: { type: 'boolean', example: false },
                text: { type: 'string', example: '' }
              }
            },
            roomType: { type: 'string', example: 'Deluxe A - 03' },
            status: { 
              type: 'string', 
              enum: ['Checked In', 'Pending', 'Booked', 'Cancelled', 'Refunded'], 
              example: 'Checked In' 
            }
          },
          required: ['id', 'name', 'image', 'orderDate', 'checkIn', 'checkOut', 'specialRequest', 'roomType', 'status']
        },
        Room: {
          type: 'object',
          properties: {
            id: { type: 'string', example: '1' },
            roomNumber: { type: 'string', example: '#000123456' },
            name: { type: 'string', example: 'Deluxe A-91223' },
            bedType: { type: 'string', example: 'Double Bed' },
            roomFloor: { type: 'string', example: 'A-1' },
            facilities: { 
              type: 'array', 
              items: { type: 'string', example: 'AC' } 
            },
            rate: { type: 'string', example: '145' },
            image: { type: 'string', example: '/assets/images/room.webp' },
            status: { type: 'string', example: 'Available' },
            description: { type: 'string', example: 'A luxurious room with a double bed and all modern amenities. Perfect for a relaxing stay with a bathup, coffee set, and LED TV.' }
          },
          required: ['id', 'roomNumber', 'name', 'bedType', 'roomFloor', 'facilities', 'rate', 'image', 'status', 'description']
        }
      }
    }
  },
  apis: ['./src/controllers/*.ts'],
};

const specs = swaggerJsdoc(options);

export function setupSwagger(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}
