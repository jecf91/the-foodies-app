"use client";
import { useEffect } from "react";

export default function MealErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error("error meals", error);
  }, [error]);

  return (
    <main className="error">
      <h1>Ups...! Something went wrong.</h1>
      <p>Failed to fetch meal data. Please try again later.</p>
    </main>
  );
}
