import type React from "react"

interface DeploymentEasyProps {
  width?: number | string
  height?: number | string
  className?: string
}

const DeploymentEasy: React.FC<DeploymentEasyProps> = ({ width = "100%", height = "100%", className = "" }) => {
  const themeVars = {
    "--deploy-primary-color": "hsl(var(--primary))",
    "--deploy-background-color": "hsl(var(--background))",
    "--deploy-text-color": "hsl(var(--foreground))",
    "--deploy-text-secondary": "hsl(var(--muted-foreground))",
    "--deploy-border-color": "hsl(var(--border))",
  } as React.CSSProperties

  const logLines = [
    "[16:37:25.637] Running build in Washington, D.C., USA (East) - iad1",
    "[16:37:25.638] Build machine configuration: 2 cores, 8 GB",
    "[16:37:25.653] Retrieving list of deployment files...",
    "[16:37:25.741] Previous build caches not available",
    "[16:37:25.979] Downloading 84 deployment files...",
    '[16:37:29.945] Running "build" command',
    "[16:37:30.561] NeuralCode CLI 2.1.0",
    '[16:37:30.880] Running "install" command: `npm install`...',
    "[16:37:30.914] npm install v10.2.4",
    "[16:37:30.940] Resolving dependencies",
    "[16:37:34.436] Resolved, downloaded and extracted [1116]",
    '[16:37:34.436] warn: peer dependency notice "react@19.1.0"',
    "[16:37:37.265] Saved lockfile",
    "[16:37:39.076] Build telemetry notice",
    "[16:37:39.137] React 19.1.0",
    "[16:37:41.439] Compiled successfully",
    "[16:37:53.979] Generated static pages",
    "[16:38:00.585] (Static) prerendered as static content",
    "[16:38:01.099] Build Completed in /output [30s]",
    "Деплой завершён - Легко!",
  ]

  return (
    <div
      className={`w-full h-full flex items-center justify-center p-4 relative ${className}`}
      style={{
        width,
        height,
        position: "relative",
        background: "transparent",
        ...themeVars,
      }}
      role="img"
      aria-label="Deployment console output with Deploy button"
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "340px",
          height: "239px",
          background: "linear-gradient(180deg, var(--deploy-background-color) 0%, transparent 100%)",
          backdropFilter: "blur(7.907px)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "2px",
            borderRadius: "8px",
            background: "hsl(var(--foreground) / 0.08)",
          }}
        />

        <div
          style={{
            position: "relative",
            padding: "8px",
            height: "100%",
            overflow: "hidden",
            fontFamily: "'Geist Mono', 'SF Mono', Monaco, Consolas, 'Liberation Mono', monospace",
            fontSize: "10px",
            lineHeight: "16px",
            color: "var(--deploy-text-color)",
            whiteSpace: "pre",
          }}
        >
          {logLines.map((line, index) => (
            <p key={index} style={{ margin: 0 }}>
              {line}
            </p>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "0.791px solid var(--deploy-border-color)",
            borderRadius: "10px",
            pointerEvents: "none",
          }}
        />
      </div>

      <button
        style={{
          position: "absolute",
          top: "calc(50% + 57.6px)",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6.375px",
          padding: "5.1px 10.2px",
          background: "var(--deploy-primary-color)",
          color: "hsl(var(--primary-foreground))",
          border: "none",
          cursor: "pointer",
          borderRadius: "8.925px",
          fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontSize: "16.575px",
          lineHeight: "25.5px",
          letterSpacing: "-0.51px",
          fontWeight: 500,
          whiteSpace: "nowrap",
          boxShadow:
            "0px 42.075px 11.475px rgba(0, 0, 0, 0), 0px 26.775px 10.2px rgba(0, 0, 0, 0.01), 0px 15.3px 8.925px rgba(0, 0, 0, 0.05), 0px 6.375px 6.375px rgba(0, 0, 0, 0.09), 0px 1.275px 3.825px rgba(0, 0, 0, 0.1)",
        }}
      >
        Задеплоить
      </button>
    </div>
  )
}

export default DeploymentEasy
