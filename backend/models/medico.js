import mongoose from 'mongoose';
const medicoSchema = new mongoose.Schema({
    nombre: {
        type: 'string',
        required: true,
        trim: true
    },
    especialidad: {
        type: string,
        required: true,
        trim: true
    },
    piso: {
        type: Number,
        required: true,
        trim: true
    },
    habitacion: {
        type: string,
        required: true,
        trim: true
    },
    jornada: {
        type: string,
        required: true,
        trim: true
    }
})
export default mongoose.model('medico', medicoSchema);