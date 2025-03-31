import { Card } from '@/components/ui/card';

interface UpcomingEventProps {
    className?: string;
}

const UpcomingEventSkeleton: React.FC<UpcomingEventProps> = ({ className }) => {
    return (
        <Card className={`mb-12 max-w-[1200px] md:w-[900px] lg:w-[1200px] w-full border-zinc-900 bg-gradient-to-r from-black/80 to-zinc-900/80 p-6 sm:p-8 lg:p-10 relative overflow-hidden backdrop-blur-sm shadow-2xl shadow-orange-900/30 rounded-2xl ${className}`}>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-orange-600/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-orange-600/5 rounded-2xl blur-sm opacity-50"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8">
                <div className="md:w-2/5 flex-shrink-0 mb-6 md:mb-0">
                    <div className="relative rounded-xl overflow-hidden h-64 md:h-full group transform transition-all duration-500 shadow-xl">
                        <div className="w-full h-full bg-zinc-800 animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <div className="bg-orange-500/80 text-white backdrop-blur-sm px-4 py-1 text-sm font-medium w-32 h-6 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
                <div className="md:w-3/5 md:my-12 flex flex-col md:gap-2">
                    <div className="h-10 sm:h-12 lg:h-14 bg-gradient-to-r from-orange-300/20 to-orange-100/20 rounded-lg mb-4 animate-pulse"></div>
                    <div className="flex flex-wrap gap-4 lg:gap-8 text-sm sm:text-base mb-6">
                        <div className="h-10 w-32 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-zinc-700/30 animate-pulse"></div>
                        <div className="h-10 w-32 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-zinc-700/30 animate-pulse"></div>
                        <div className="h-10 w-32 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-zinc-700/30 animate-pulse"></div>
                    </div>
                    <div className="space-y-2 mb-8">
                        <div className="h-4 bg-zinc-700/50 rounded animate-pulse"></div>
                        <div className="h-4 bg-zinc-700/50 rounded animate-pulse"></div>
                        <div className="h-4 bg-zinc-700/50 rounded animate-pulse"></div>
                        <div className="h-4 bg-zinc-700/50 rounded w-3/4 animate-pulse"></div>
                    </div>
                    <div className="w-40 h-14 rounded-xl bg-gradient-to-r from-orange-600/40 to-orange-500/40 animate-pulse"></div>
                </div>
            </div>
        </Card>
    );
};

export default UpcomingEventSkeleton;