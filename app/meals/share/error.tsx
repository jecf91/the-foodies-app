"use client";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error("error creating meal", error);
  }, [error]);

  return (
    <main className="error">
      <h1>Ups...! Something went wrong.</h1>
      <p>Failed to create meal. Please try again later.</p>
    </main>
  );
}
