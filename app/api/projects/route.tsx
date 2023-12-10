import { NextResponse } from 'next/server'
import { projects } from '../data'

/* temporary route until we move to a headless cms*/
export async function GET() {
  return NextResponse.json({ data: projects })
}
