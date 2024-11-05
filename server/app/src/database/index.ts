import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017/authentification')
  .then(() => {
    console.log('MongoDB connected');
})
  .catch(err => {
    console.error('MongoDB connection error:', err);
});