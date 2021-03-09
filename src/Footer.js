export function Footer({content, navigateBack, navigateNext}) {
  const nextText = content[0];
  const backText = content[1];

  return (
    <div>
      {backText &&
        <button onClick={navigateBack}>
          <span className="bump-left">←</span> {backText}
        </button>
      }
      {backText && nextText &&
        <span> </span>
      }
      {nextText &&
        <button onClick={navigateNext}>
          {nextText} <span className="bump-right">→</span>
        </button>
      }
    </div>
  )
}
