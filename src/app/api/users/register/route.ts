import dbConnect from '@/dbConnect/dbConnect';
import User from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const reqBody = await req.json();
    const { id, nickname, email, password } = reqBody;

    // 빈 필드 여부 확인
    if (!id || !nickname || !email || !password) {
      return NextResponse.json(
        { error: '빈 입력 필드가 있습니다.' },
        { status: 400 },
      );
    }

    // 유저 존재 여부 확인
    const isExistEmail = await User.findOne({ email });
    const isExistId = await User.findOne({ id });

    if (isExistEmail) {
      return NextResponse.json(
        { error: '이미 존재하는 이메일입니다.' },
        { status: 400 },
      );
    }

    if (isExistId) {
      return NextResponse.json(
        { error: '이미 존재하는 아이디입니다.' },
        { status: 400 },
      );
    }

    // salt 생성
    const salt = await bcryptjs.genSalt(10);
    // 비밀번호 암호화
    const hashedPassword = await bcryptjs.hash(password, salt);
    // 유저 생성
    const newUser = await new User({
      id,
      nickname,
      email,
      password: hashedPassword,
    }).save();
    // 유저 반환

    console.log('reqBody', newUser);
    return NextResponse.json({
      message: '회원가입이 완료되었습니다.',
      success: true,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 },
    );
  }
}
