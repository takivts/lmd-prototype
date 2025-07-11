const big =
  "M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5Z";
const s1 =
  "M18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5Z";
const s2 =
  "M16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z";

export default function SparklesPreview() {
  return (
    <>
      <style>{`
        .sparkle-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .sparkle-container svg {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }
        .sparkle {
          transition: transform .25s cubic-bezier(.4,0,.2,1);
        }
        .sparkle-container svg .big  { transform: translate(-1px,1px)  rotate(3deg)  scale(1.05); opacity: 0; }
        .sparkle-container svg .s1   { transform: translate( 1px,-2px) rotate(-5deg) scale(1.15); opacity: 0; }
        .sparkle-container svg .s2   { transform: translate(-2px,-1px) rotate(4deg)  scale(1.10); opacity: 0; }
        .sparkle-container svg:hover .big  { transform: translate(0,0)  rotate(0deg)  scale(1); opacity: 1; }
        .sparkle-container svg:hover .s1   { transform: translate( 0,0) rotate(0deg) scale(1); opacity: 1; }
        .sparkle-container svg:hover .s2   { transform: translate(0,0) rotate(0deg)  scale(1); opacity: 1; }
      `}</style>
      <div className="sparkle-container">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d={big} className="sparkle big" />
          <path d={s1} className="sparkle s1" />
          <path d={s2} className="sparkle s2" />
        </svg>
      </div>
    </>
  );
}
