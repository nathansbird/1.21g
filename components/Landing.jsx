import CTA from "./CTA";

const Landing = () => {
  return (
    <div id="landing-details">
      <div id="landing-inner">
        <h1 id="title">
          1.21 Gigawatts Fund
        </h1>
        <p id="subtitle">️121G: The fund you wish you could go back in time and invest in.</p>
        <p>121G is run by Ryan Carson, the Chief Operating Officer of PROOF, an exclusive private club for world-class NFT Artists and Collectors. The value of the Collective has risen to $172m in just three months. Ryan has unique access to the world's top grossing NFT artists and insight to the NFT industry.</p>
        <h3 id="small-title">We are at a unique moment in history where … </h3>
        <div id="list-wrapper">
          <div className="list-item">
            <p><span>1.</span></p>
            <p>Historically significant NFTs are available for acquisition, before large institutional investors enter the market.</p>
          </div>
          <div className="list-item">
            <p><span>2.</span></p>
            <p>Global mass adoption of Cryptocurrencies and NFTs has not occurred.</p>
          </div>
          <div className="list-item">
            <p><span>3.</span></p>
            <p>The transition from web2 to web3 is just beginning.</p>
          </div>
        </div>
        <p>
          The fund will be acquiring and holding historically significant “blue chip” NFTs. We will focus on collecting a broad range of important NFTs across the following categories: generative art, photographs, token-gated communities, metaverses, PFPs, 1/1s and more. The fund will acquire and hold these assets for 3-10 years.<br/><br/>
          The majority of the fund will be used to acquire a strategic ratio of blue chip floor and rare NFTs, designed to minimize upfront purchasing costs while maximizing long term value appreciation.<br/><br/>
          The remainder of the fund will be invested in up-and-coming promising projects, which are more volatile but have potentially much larger upside potential.
        </p>
        <CTA/>
      </div>
    </div>
  )
}

export default Landing;