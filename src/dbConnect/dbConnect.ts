import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('.env.local 파일의 MONGODB_URI 설정을 확인해 주세요.');
}

const MONGODB_URI: string = process.env.MONGODB_URI;

const globalWithMongoose = global as typeof globalThis & {
  mongoose: any;
};

let cached = globalWithMongoose.mongoose;

if (!cached) {
  cached = globalWithMongoose.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;

  return cached.conn;
}

export default dbConnect;
