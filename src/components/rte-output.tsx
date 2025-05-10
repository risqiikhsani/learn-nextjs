import React, { ReactNode } from 'react'

export default function RteOutput({children}: {children:ReactNode}) {
  return (
    <article className='prose prose-slate prose-sm prose-img:rounded-xl  sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none'>
        {children}
    </article>
  )
}
