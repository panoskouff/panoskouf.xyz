import { redirect } from 'next/navigation'

export default async function CV({}) {
  // for now just redirect to the pdf
  redirect('/Panagiotis-Koufopoulos-CV.pdf')
}
