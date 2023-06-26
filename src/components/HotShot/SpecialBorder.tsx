const SpecialBorder = () => {
  return (
    <div className="absolute inset-0">
      <span className="block h-[17%] w-full rounded-t-xl border-2 border-b-0 border-[#fa0064] " />
      <span className="block h-[11%] w-full border-x-2 border-[#be0064] " />
      <span className="block h-[44%] w-full border-x-2 border-[#1a1a1a] " />
      <span className="block h-[11%] w-full border-x-2 border-[#be0064] " />
      <span className="block h-[17%] w-full rounded-b-xl border-2 border-t-0 border-[#fa0064] " />
    </div>
  )
}

export default SpecialBorder
