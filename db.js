const mongoose=require('mongoose');
const mongoURL ='mongodb://parth.bhumkar:vxsyustoiqjsqlmdr@localhost:36018/new?authSource=admin';
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db=mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB ')
});

db.on('error', (err) => {
    console.error('MongoDB connection error:',err)
});

db.on('disconnected', () => {
    console.log('MongoDB disConnected')
});
module.exports = db;