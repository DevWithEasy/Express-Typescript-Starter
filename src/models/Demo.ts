import mongoose from 'mongoose';

const demoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
},
{timestamps : true}
)

const Demo = mongoose.model('Demo', demoSchema);

export default Demo;