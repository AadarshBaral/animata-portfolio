const PageNumbering = () => {
  return (
    <div className="pageNumberContaier w-[50px] mt-10 flex items-center justify-start gap-[15px] flex-col  ">
      {Array(11
      ).fill(0).map((_, i) => (
        <div className="pageNumber bg-[#0D0F14] text-gray-700 text-3xl   w-full rounded-md  custom-scrollbar overflow-y-auto">
          {i + 1}
        </div>
      ))}
    </div>
  )
}

export default PageNumbering