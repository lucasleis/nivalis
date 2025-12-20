type CaseCardProps = {
  image: string
  title: string
  subtitle: string
}

export default function CaseCard({
  image,
  title,
  subtitle,
}: CaseCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer">
      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Cortina inferior */}
      <div
        className="
          absolute bottom-0 left-0 w-full
          h-1/3
          bg-black/85
          opacity-0
          transition-opacity duration-500 ease-out
          group-hover:opacity-100
        "
      >
        <div className="flex h-full flex-col justify-between p-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              {title}
            </h3>
            <p className="mt-1 text-sm text-gray-300">
              {subtitle}
            </p>
          </div>

          <button
            className="
              w-fit rounded-full
              bg-yellow-400 px-5 py-2
              text-sm font-semibold text-black
              transition-colors
              hover:bg-yellow-300
            "
          >
            Ver proyecto
          </button>
        </div>
      </div>
    </div>
  )
}
