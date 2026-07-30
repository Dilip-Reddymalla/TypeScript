import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        trim: true,
        index: true,
        match: /^https?:\/\/.+/,
    },
    shortCode:{
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    clicks:{
        type: Number,
        default: 0
    },
    expiresAt:{
        type: Date,
        default: null,
    },
    tier: {
        type: String,
        enum: ['free', 'premium'],
        default: 'free',
        index: true
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    },
    {
        timestamps: true,
    }

);

const Url = mongoose.model('Url', urlSchema);
export default Url;