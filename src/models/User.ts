import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: '',
      required: true,
      unique: true,
      min: 3,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      match:
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
      unique: true,
      min: 3,
      max: 100,
    },
    nickname: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    password: {
      type: String,
    },
    uid: {
      type: String,
    },
    status: {
      type: Number,
      default: 1,
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
    lastLoginAt: {
      type: String,
      default: Date.now(),
    },
    refreshToken: {
      type: String,
      default: null,
    },
    sAccessToken: {
      type: String,
      default: null,
    },
    deletedAt: String,
    provider: String,
    image: String,
    lastLoginIp: String,
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  { timestamps: true },
);

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
