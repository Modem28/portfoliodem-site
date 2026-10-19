import { describe, expect, it } from "vitest";

import {
  extractDriveFileId,
  formatLocalTime,
  getDrivePreviewUrl,
  getDriveViewUrl,
  getSkyPhase,
} from "./portfolio-utils";

describe("getSkyPhase", () => {
  it("maps every phase boundary to the expected phase", () => {
    expect(getSkyPhase(4.999)).toBe("night");
    expect(getSkyPhase(5)).toBe("morning");
    expect(getSkyPhase(9.999)).toBe("morning");
    expect(getSkyPhase(10)).toBe("day");
    expect(getSkyPhase(16.999)).toBe("day");
    expect(getSkyPhase(17)).toBe("evening");
    expect(getSkyPhase(19.999)).toBe("evening");
    expect(getSkyPhase(20)).toBe("night");
  });

  it("handles representative daytime and nighttime hours", () => {
    expect(getSkyPhase(12)).toBe("day");
    expect(getSkyPhase(3)).toBe("night");
  });
});

describe("extractDriveFileId", () => {
  const fileId = "1AbC_2dEf-3";

  it.each([
    `https://drive.google.com/file/d/${fileId}/view`,
    `https://drive.google.com/file/d/${fileId}/preview`,
    `https://drive.google.com/open?id=${fileId}`,
    `https://drive.google.com/uc?id=${fileId}`,
  ])("extracts an ID from %s", (input) => {
    expect(extractDriveFileId(input)).toBe(fileId);
  });

  it.each([
    "",
    fileId,
    `https://drive.google.com/drive/folders/${fileId}`,
    `https://drive.google.com/folders/${fileId}`,
    `http://drive.google.com/file/d/${fileId}/view`,
    `https://example.com/file/d/${fileId}/view`,
    `javascript:alert(1)`,
    `https://drive.google.com/file/d//view`,
    `https://drive.google.com/file/d/short/view`,
    `https://drive.google.com/file/d/invalid.id/view`,
    `https://drive.google.com/open`,
    `https://drive.google.com/open?id=`,
    `https://drive.google.com/uc?id=short`,
  ])("rejects invalid or unsafe input: %s", (input) => {
    expect(extractDriveFileId(input)).toBeNull();
  });
});

describe("Drive URL helpers", () => {
  const fileId = "1AbC_2dEf-3";
  const sourceUrl = `https://drive.google.com/open?id=${fileId}`;

  it("returns canonical preview and view URLs", () => {
    expect(getDrivePreviewUrl(sourceUrl)).toBe(
      `https://drive.google.com/file/d/${fileId}/preview`,
    );
    expect(getDriveViewUrl(sourceUrl)).toBe(
      `https://drive.google.com/file/d/${fileId}/view`,
    );
  });

  it("returns null when the source URL is invalid", () => {
    expect(getDrivePreviewUrl("https://drive.google.com/drive/folders/id")).toBeNull();
    expect(getDriveViewUrl("javascript:alert(1)")).toBeNull();
  });
});

describe("formatLocalTime", () => {
  it("formats local hours and minutes with two digits", () => {
    const date = new Date(2024, 0, 2, 5, 7, 9);

    const expected = `${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes(),
    ).padStart(2, "0")}`;

    expect(formatLocalTime(date)).toBe(expected);
  });

  it("keeps two-digit local hours and minutes unchanged", () => {
    const date = new Date(2024, 0, 2, 23, 45);

    expect(formatLocalTime(date)).toBe("23:45");
  });
});
