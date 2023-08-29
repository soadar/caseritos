import { connect } from 'mongoose';

export const connectionString = 'mongodb+srv://sdario66:xxxxxxxx@cluster0.vanew69.mongodb.net/ecommerce?retryWrites=true&w=majority';

try {
    await connect(connectionString)
    console.log('Conectado a MongoDB!');
} catch (error) {
    console.log(error);
}