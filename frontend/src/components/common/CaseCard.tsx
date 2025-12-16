type CaseCardProps = {
  image: string
  title: string
  subtitle: string
}

export default function CaseCard({ image, title, subtitle }: CaseCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-[420px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      </div>
    </div>
  )
}
