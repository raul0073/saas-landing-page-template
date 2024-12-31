import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export function ButtonOutlineComp({title, className, link}: {title: string, className: string, link: string}) {
  return (
    <Button variant={'outline'} className={cn(`h-10 rounded-full px-6 font-medium text-white/80 ${className}`)}>
         <Link
      href={link}
      >
        {title}
      </Link>
    </Button>
  )
}
export function ButtonDefaultComp({title, className, link}: {title: string, className: string, link: string}) {
  return (
    <Button className={cn(`h-10 rounded-full px-6 font-medium text-black  ${className}`)}>
      <Link
      href={link}
      >
        {title}
      </Link>
    </Button>
  )
}

