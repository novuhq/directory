export const NotificationTime = ({
  timestamp,
}: {
  timestamp: string | undefined;
}) => {
  if (!timestamp) return null;

  try {
    const now = new Date();
    const date = new Date(timestamp);

    if (isNaN(date.getTime())) {
      return null;
    }

    const diffInMs = now.getTime() - date.getTime();
    const diffInHours = diffInMs / (1000 * 60 * 60);
    const diffInDays = diffInHours / 24;
    const diffInWeeks = diffInDays / 7;

    if (diffInHours < 1) {
      const minutes = Math.floor(diffInMs / (1000 * 60));
      return (
        <span className="text-xs text-zinc-500 dark:text-zinc-400">{`${Math.max(1, minutes)}m`}</span>
      );
    }

    if (diffInHours < 24) {
      return (
        <span className="text-xs text-zinc-500 dark:text-zinc-400">{`${Math.floor(diffInHours)}h`}</span>
      );
    }

    if (diffInDays < 7) {
      return (
        <span className="text-xs text-zinc-500 dark:text-zinc-400">{`${Math.floor(diffInDays)}d`}</span>
      );
    }

    if (diffInWeeks < 4) {
      return (
        <span className="text-xs text-zinc-500 dark:text-zinc-400">{`${Math.floor(diffInWeeks)}w`}</span>
      );
    }

    return (
      <span className="text-xs text-zinc-500 dark:text-zinc-400">
        {date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
      </span>
    );
  } catch (error) {
    console.error("Error formatting timestamp:", error);
    return null;
  }
};
