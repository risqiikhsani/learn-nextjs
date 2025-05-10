import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
export default function page() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className="text-3xl font-bold">Playground</h1>
      <Button asChild variant="outline"><Link href="/rte">Rich text editor</Link></Button>
            <Button asChild variant="outline"><Link href="/rte-tiptap-nextjs">Rich text editor nextjs</Link></Button>
    </div>
  )
}
