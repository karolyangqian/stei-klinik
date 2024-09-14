
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { NextResponse } from 'next/server';

export default async function handler(req: Request, res: Response) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        console.log('Session not found');
        return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }
    else {
        console.log('Session found:', session);
        return NextResponse.json({ message: 'Login successful' }, { status: 200 });
    }
}