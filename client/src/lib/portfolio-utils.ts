export type SkyPhase = "morning" | "day" | "evening" | "night";

const DRIVE_FILE_ID_PATTERN = /^[A-Za-z0-9_-]{10,}$/;

export function getSkyPhase(hour: number): SkyPhase {
  if (hour >= 5 && hour < 10) {
    return "morning";
  }

  if (hour >= 10 && hour < 17) {
    return "day";
  }

  if (hour >= 17 && hour < 20) {
    return "evening";
  }

  return "night";
}

export function extractDriveFileId(input: string): string | null {
  let url: URL;

  try {
    url = new URL(input);
  } catch {
    return null;
  }

  if (url.protocol !== "https:" || url.hostname !== "drive.google.com") {
    return null;
  }

  const filePathMatch = url.pathname.match(/^\/file\/d\/([^/]+)\/(view|preview)$/);
  if (filePathMatch?.[1] && DRIVE_FILE_ID_PATTERN.test(filePathMatch[1])) {
    return filePathMatch[1];
  }

  if (url.pathname !== "/open" && url.pathname !== "/uc") {
    return null;
  }

  const fileId = url.searchParams.get("id");
  return fileId && DRIVE_FILE_ID_PATTERN.test(fileId) ? fileId : null;
}

export function getDrivePreviewUrl(input: string): string | null {
  const fileId = extractDriveFileId(input);
  return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null;
}

export function getDriveViewUrl(input: string): string | null {
  const fileId = extractDriveFileId(input);
  return fileId ? `https://drive.google.com/file/d/${fileId}/view` : null;
}

export function formatLocalTime(date: Date): string {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}
