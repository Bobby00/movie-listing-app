"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function MovieDetailModal({ modalOpen, setModalOpen, movie }) {
  if (!movie) return null;

  console.log("Movie in Modal:", movie);
  return (
    <Dialog
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-gray-900/50" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline outline-white/10 transition-all sm:my-8 sm:w-full sm:max-w-3xl">
            {/* <DialogTitle
              as="h3"
              className="text-base font-semibold text-white mb-2"
            >
              {movie.title}
            </DialogTitle> */}
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "/no-poster.png"
              }
              alt={movie.title}
              className="mb-4 rounded"
            />
            <div className="p-6">
              <h3 className="text-base text-white font-semibold mb-2">
                {movie.title}
              </h3>
              <p className="text-sm text-gray-200 mb-2">
                {movie.overview || "No description available."}
              </p>
              <div className="flex gap-4 text-gray-400 text-xs mb-4">
                <span>
                  Rating:{" "}
                  {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
                </span>
                <span>
                  Year:{" "}
                  {movie.release_date
                    ? movie.release_date.split("-")[0]
                    : "N/A"}
                </span>
                <span>Language: {movie.original_language}</span>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="mt-3 inline-flex justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
