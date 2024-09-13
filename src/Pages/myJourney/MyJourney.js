import React from "react";
import myJourney from "../../assets/images/mobile-journey.jpg";

export default function MyJourney() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="path-container">
      <span className="path-title">My Journey -</span>
      <div className="path-img-text-wrapper">
        {" "}
        <div className="path-img-container">
          <img loading="lazy" className="path-image-1" src={myJourney} alt="" />
        </div>
        <div className="path-text-container">
          <p>
            My journey as a Saintist— a unique blend of coincidence and destiny was something I never envisioned.
            The idea of being both a saint and a scientist, or "Saintist," was foreign to me. It all began in high
            school when I chose the science stream, studying mathematics and biology, with Sanskrit as my fifth optional subject.
            I initially selected Sanskrit not out of passion or interest, but simply to boost my overall academic score,
            as it was considered an easier subject.
          </p>
          <p>
            During my graduation, a close friend studying at medical college encouraged me to enroll in a French certificate course
            at the Alliance Française, as his romantic interest was pursuing the same. Reluctantly, I agreed, thinking it would
            simply add another credential to my CV. However, what was supposed to be a three-month course unexpectedly evolved
            into a three-year advanced study. My father proudly announced to everyone that I would become the first French scholar
            from our community. As I deepened my knowledge of the language, I developed a genuine interest and excelled in my exams,
            even earning a gold medal. This led to a teaching position at the same institute.
          </p>
          <p>
            Although I initially found satisfaction in the role, teaching French to adults quickly became monotonous,
            as my responsibilities were limited to basic language instruction—similar to teaching young children the alphabet and numbers,
            only in French. I craved more meaningful engagement with the language.
          </p>
          <p>
            The convergence of my knowledge in both Sanskrit and French set the stage for the next pivotal moment in my journey.
            Our institute received a major project to translate the Garud Purana from Sanskrit to French, and I was the only individual
            fluent in both languages. On the first day, I was appointed head of the project. While initially excited, I soon realized
            that this was not a simple translation task. It involved deep understanding and interpretation of Hindu philosophy,
            which was unfamiliar to me at the time. Through this project, I was introduced to a wealth of spiritual concepts—
            <br /> &nbsp; Janma-Marana, 84 lakh yonis, Vaitarani, Shradh, Pind, Yam Devta, Yam Doot, and many more.
          </p>
          <p>As I delved deeper into these topics, I encountered learned sages and saints, who profoundly changed my perspective.
            The more I learned, the more I realized how much there was yet to discover. This was a transformative period for me,
            filled with new knowledge and insights that had previously been beyond my reach.
          </p>
          <p>My quest for greater understanding eventually led me to Kailash Mansarovar, a journey that culminated in a visit to
            Siddha Ashram. This experience became the turning point of my life. I divide my life into two phases: before and after
            Siddha Ashram. What I learned and gained there was so valuable that I felt compelled to share the wisdom I had received
            with the world, and thus began my dedication to spreading the importance of Vedic knowledge.
          </p>
          <p>This is my journey.</p>
        </div>
      </div>
    </div >
  );
}
