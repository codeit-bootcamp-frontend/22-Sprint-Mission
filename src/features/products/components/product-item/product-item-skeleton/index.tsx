export function ProductItemSkeleton() {
  return (
    <article className="animate-pulse">
      <div className="bg-secondary-200 aspect-square w-full rounded-2xl" />
      <div className="mt-2.5 flex flex-col gap-1.5 lg:mt-4">
        <div className="bg-secondary-200 h-5 w-3/4 rounded-md" />
        <div className="bg-secondary-200 h-6 w-1/2 rounded-md" />
        <div className="bg-secondary-200 h-4 w-1/4 rounded-md" />
      </div>
    </article>
  );
}
