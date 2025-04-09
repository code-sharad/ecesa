export default function Loading() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin text-4xl">⌛</div>
            <p className="ml-2 text-lg text-white">Loading ...</p>
        </div>
    );
}