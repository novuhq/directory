import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No code found in query' }, { status: 400 });
  }

  console.log('✅ Received code from Twitter:', code);

  return NextResponse.json({ message: 'Authorization successful! Check your terminal.', code });
}