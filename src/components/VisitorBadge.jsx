import { useVisitCount } from '../useVisitCount';

const VisitorBadge = () => {
  const count = useVisitCount();

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50">
      <div className="bg-white/70 dark:bg-zinc-800/70 text-zinc-900 dark:text-zinc-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm shadow-md backdrop-blur-md flex items-center gap-1.5 sm:gap-2 transition-all duration-300">
        {count !== null ? `Viewed By ${count}` : 'Loading...'}
      </div>
    </div>
  );
};

export default VisitorBadge;
