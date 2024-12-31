import { HERO } from '../constants/labels'

function PromoTag() {
  return (
    <div className="flex justify-center ml-[40%] promo">
    <div className="inline-flex py-1 text-xs md:text-sm md:px-4 px-2 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold capitalize">
        {HERO.SPECIAL_OFFER}
    </div>
</div>
  )
}

export default PromoTag