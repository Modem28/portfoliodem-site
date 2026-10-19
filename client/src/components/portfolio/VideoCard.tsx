import { Leaf, Sparkles, Video } from "lucide-react";

import {
  getDrivePreviewUrl,
  getDriveViewUrl,
} from "@/lib/portfolio-utils";

export type PortfolioVideo = {
  id: string;
  title: string;
  description: string;
  category: string;
  driveUrl: string;
  accent: "rose" | "sage" | "lavender" | "peach" | "sky";
};

type DriveMedia = {
  previewUrl: string;
  viewUrl: string;
};

function resolveDriveMedia(value: string | null | undefined): DriveMedia | null {
  const source = value?.trim();
  if (!source) return null;

  try {
    const previewUrl = getDrivePreviewUrl(source);
    const viewUrl = getDriveViewUrl(source);
    if (!previewUrl || !viewUrl) return null;
    return { previewUrl, viewUrl };
  } catch {
    return null;
  }
}

export default function VideoCard({
  video,
  index,
}: {
  video: PortfolioVideo;
  index: number;
}) {
  const media = resolveDriveMedia(video.driveUrl);

  return (
    <article className={`video-card accent-${video.accent}`}>
      <div className="video-card-topline">
        <span className="video-number">{String(index + 1).padStart(2, "0")}</span>
        <span aria-hidden="true"> / </span>
        <span className="video-category">{video.category}</span>
      </div>

      <div
        className="video-preview"
        style={{ aspectRatio: "9 / 16" }}
        aria-label={`ตัวอย่างวิดีโอ ${video.title}`}
      >
        {media ? (
          <iframe
            className="video-iframe"
            src={media.previewUrl}
            loading="lazy"
            allow="autoplay; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            title={video.title}
          />
        ) : (
          <>
            <div className="video-art" aria-hidden="true">
              <div className="video-art-orbit" />
              <Leaf className="video-art-leaf" strokeWidth={1.4} />
              <Video className="video-art-camera" strokeWidth={1.35} />
              <Sparkles className="video-art-sparkle" strokeWidth={1.3} />
            </div>
            <div className="video-preview-copy">
              <p>Selected work</p>
              <small>คลิปวิดีโอจะปรากฏที่นี่</small>
            </div>
          </>
        )}
      </div>

      <div className="video-card-info">
        <div className="video-card-text">
          <h2 className="video-card-title">{video.title}</h2>
          <p className="video-card-description">{video.description}</p>
        </div>
        {media ? (
          <a
            className="video-action"
            href={media.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="เปิดไฟล์ใน Google Drive หากพรีวิวมีปัญหา"
          >
            เปิดใน Drive
          </a>
        ) : null}
      </div>
    </article>
  );
}
