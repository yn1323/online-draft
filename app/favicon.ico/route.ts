import { NextResponse } from 'next/server';

export const runtime = 'edge';

const redirectToIcon = (request: Request) => {
  return NextResponse.redirect(new URL('/icon', request.url), 308);
};

export const GET = (request: Request) => {
  return redirectToIcon(request);
};

export const HEAD = (request: Request) => {
  return redirectToIcon(request);
};
