function WindowBar({ title, status = "PROJECT STUDY" }) {
  return (
    <div className="art-window-bar">
      <span className="window-lights" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="art-window-title">{title}</span>
      <span className="art-window-status">{status}</span>
    </div>
  );
}

function VotePathArtwork() {
  return (
    <div className="art-window art-vote">
      <WindowBar title="VOTEPATH / FIELD GUIDE" status="CIVIC TECH" />
      <div className="vote-art-body">
        <div className="vote-art-copy">
          <span className="art-kicker">A CLEARER WAY TO VOTE</span>
          <strong>Understand the process.</strong>
          <span className="art-muted">A guide, one step at a time.</span>
          <div className="vote-steps">
            <span className="step-dot is-active" />
            <span className="step-line" />
            <span className="step-dot" />
            <span className="step-line" />
            <span className="step-dot" />
            <span className="step-line" />
            <span className="step-dot" />
          </div>
        </div>
        <div className="vote-art-card">
          <span className="art-card-label">YOUR NEXT STEP</span>
          <span className="vote-card-number">01</span>
          <strong>Check your eligibility</strong>
          <span className="vote-card-link">
            Explore the guide <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
      <div className="art-footline">
        <span>01 / OVERVIEW</span>
        <span>MADE TO MAKE IT CLEAR</span>
      </div>
    </div>
  );
}

function TruthLensArtwork() {
  return (
    <div className="art-window art-truth">
      <WindowBar title="TRUTHLENS / ANALYSIS" status="MODEL STUDY" />
      <div className="truth-art-body">
        <div className="truth-art-heading">
          <span className="art-kicker">ARTICLE SIGNALS</span>
          <strong>Read beyond the headline.</strong>
        </div>
        <div className="truth-analysis">
          <div className="truth-ring" aria-hidden="true">
            <span className="ring-core" />
            <span className="ring-orbit" />
            <span className="ring-dot" />
          </div>
          <div className="truth-bars">
            <span className="art-card-label">TEXT CLASSIFICATION</span>
            <div className="analysis-row">
              <span>Article text</span>
              <i className="bar bar-long" />
            </div>
            <div className="analysis-row">
              <span>Vector signals</span>
              <i className="bar bar-medium" />
            </div>
            <div className="analysis-row">
              <span>Model response</span>
              <i className="bar bar-short" />
            </div>
          </div>
        </div>
      </div>
      <div className="art-footline">
        <span>TEXT · CONTEXT · SIGNALS</span>
        <span>PROTOTYPE</span>
      </div>
    </div>
  );
}

function PhishShieldArtwork() {
  return (
    <div className="art-window art-phish">
      <WindowBar title="PHISHSHIELD / URL CHECK" status="HEURISTIC" />
      <div className="phish-art-body">
        <span className="art-kicker">A SECOND LOOK AT A LINK</span>
        <div className="url-preview">
          <span className="url-lock" aria-hidden="true">→</span>
          <span>https://verify-account.example</span>
          <span className="url-scan">SCAN</span>
        </div>
        <div className="signal-list">
          <div className="signal-row">
            <span className="signal-state state-watch" />
            <span>URL structure</span>
            <span>REVIEW</span>
          </div>
          <div className="signal-row">
            <span className="signal-state state-good" />
            <span>Connection</span>
            <span>CHECK</span>
          </div>
          <div className="signal-row">
            <span className="signal-state state-watch" />
            <span>Domain signals</span>
            <span>REVIEW</span>
          </div>
        </div>
      </div>
      <div className="art-footline">
        <span>HEURISTICS, NOT CERTAINTY</span>
        <span>DEMO VIEW</span>
      </div>
    </div>
  );
}

function NutriSenseArtwork() {
  return (
    <div className="art-window art-nutri">
      <WindowBar title="NUTRISENSE / DAILY VIEW" status="IDEATHON CONCEPT" />
      <div className="nutri-art-body">
        <div className="nutri-art-title">
          <span className="art-kicker">A MORE PERSONAL FOOD JOURNEY</span>
          <strong>Small choices, in context.</strong>
        </div>
        <div className="nutri-cards">
          <div className="nutri-score">
            <span className="art-card-label">TODAY'S SNAPSHOT</span>
            <span className="score-circle">+</span>
            <span className="art-muted">A concept for a more thoughtful meal.</span>
          </div>
          <div className="nutri-insight">
            <span className="art-card-label">CONTEXTUAL NOTE</span>
            <strong>Plan for your day</strong>
            <span className="nutri-line" />
            <span className="nutri-line short" />
            <span className="nutri-insight-tag">SIMULATED INSIGHT</span>
          </div>
        </div>
      </div>
      <div className="art-footline">
        <span>PROTOTYPE CONCEPT</span>
        <span>WELLNESS · CONTEXT</span>
      </div>
    </div>
  );
}

const artwork = {
  votepath: VotePathArtwork,
  truthlens: TruthLensArtwork,
  phishshield: PhishShieldArtwork,
  nutrisense: NutriSenseArtwork,
};

export default function ProjectArtwork({ type }) {
  const Artwork = artwork[type];

  return (
    <div aria-hidden="true" className={`project-art project-art-${type}`}>
      <Artwork />
    </div>
  );
}
