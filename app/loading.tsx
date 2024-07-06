import { Spinner } from "@nextui-org/react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div
      className="flex flex-col text-custom-blue min-h-screen bg-slate-50 p-4 items-center justify-center"
      aria-live="polite"
      aria-busy="true"
    >
      <Spinner
        label="Cargando..."
        labelColor="warning"
        color="warning"
        size="lg"
        aria-label="Cargando contenido"
      />
      <p className="mt-4 text-center text-xl text-gray-500" role="alert">
        <strong>Paciencia:</strong> el ingrediente secreto detrás de todo éxito.
      </p>
      {/* Skeleton de next ui si hay tiempo para hacerlo paso a paso */}
      {/* <div className="space-y-1 md:space-y-6 max-w-6xl w-full items-center mt-10">
      <Skeleton className="rounded-lg">
        <div className="h-40 rounded-lg bg-gray-300"></div>
      </Skeleton>
      <div className="space-y-4 mt-4">
        <Skeleton className="rounded-lg">
          <div className="h-16 rounded-lg bg-gray-200"></div>
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className="h-6 rounded-lg bg-gray-200"></div>
        </Skeleton>
        <Skeleton className="rounded-lg ">
          <div className="h-6 w-full rounded-lg bg-gray-200 mx-auto"></div>
        </Skeleton>
        
        <Skeleton className="rounded-lg">
          <div className="h-16 rounded-lg bg-gray-200"></div>
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className="h-16 rounded-lg bg-gray-200"></div>
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className="h-16 rounded-lg bg-gray-200"></div>
        </Skeleton>
      </div>
    </div> */}
    </div>
  );
}
