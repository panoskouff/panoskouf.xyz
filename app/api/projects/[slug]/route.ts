import { NextResponse } from 'next/server';
import { projects } from '../../data';

/* temporary route until we move to a headless cms*/
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const data = projects.find((project) => project.slug === params.slug) ?? null;

  return NextResponse.json({ data: data });
}
