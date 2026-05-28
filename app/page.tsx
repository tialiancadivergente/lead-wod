"use client";

import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/wod/v1/h0/1/org');
  return null;
} 