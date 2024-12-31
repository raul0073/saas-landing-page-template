import { cn } from '@/lib/utils'

type TagProps = {
    className?: string,
    text: string,
}
function Tag({className, text}: TagProps) {
  return (
    <div className={cn("inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase text-[.7rem] md:text-xs",className)}>
        <span>&#10038;</span>
        <span>{text}</span>
    </div>
  )
}

export default Tag