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
          <img className="path-image-1" src={myJourney} alt="" />
        </div>
        <div className="path-text-container">
          <p>
            My journey as a Saintist was a mixture of coincidence and destiny. I
            had never imagined myself as confluence of a saint and a scientist
            i.e. a Saintist. My journey started from my high school. I had opted
            for science stream with Maths and Biology along with Sanskrit as my
            fifth optional subject. The reason for opting Sanskrit was not due
            to interest or passion but just to increase my overall percentage as
            Sanskrit was considered as an easy scoring subject.
          </p>
          <p>
            During my graduation, I was compelled by my only friend, who was in
            a medical college, to take a certificate course in French from
            Alliance Francais as his love interest was pursuing the same. He
            wanted to visit our institute on a daily basis and so he made me the
            scapegoat. After much persuasion, I finally accepted his request
            thinking that a three-month certificate course would do no harm but
            will only add to my CV. However, that three-month certificate course
            turned into a full-fledged three-year advanced course because my
            father announced it to everyone in the whole family that his son
            will become the first ever French scholar from our society. Moreover
            , I developed a keen interest in the language and did well in my
            examinations. I won a gold medal and landed up with a job of a
            teacher in the same institute. However, after some time I did not
            feel satisfied with my job as it was not enrichening enough for me.
            My only task was to teach alphabets, numbers, months, and few basic
            words in French. Basically, it was like teaching English to
            pre-school children except the fact that I was teaching French to
            adults.
          </p>
          <p>
            Now these coincidences of learning Sanskrit and French had to play a
            major role in setting my destiny. Our institute got a major project
            of translating Garun Puran from Sanskrit to French. And I was the
            only one who was well versed in both the language. So, on that very
            first day I became the head of the project. I was very excited
            initially but soon realised that it is not just mere translation but
            of understanding and interpreting the essence of Puran. I had to
            study the content and text of this Puran. I had no idea about
            Hinduism, Janam Maran, 84 lakhs yoni, Vaitarani , Shradh, Pind, Yam
            Devta, Yam Doot etc . So, I got introduced to the learned sages and
            saints. The more I read about it and understood from them, the more
            I changed from within. I came across a plethora of deep knowledge
            and new subjects of which I had no idea about earlier.
          </p>
          <p>
            A new journey began for me. My quest to know more finally took me to
            Kailash Mansarovar. During my long stay there, I visited the Siddha
            Ashram. My visit there was truly the turning point of my life. My
            life is divided into two – before Siddha Ashram and after Siddha
            Ashram. Whatever I learnt and gained, was of such immense value that
            I decided to spread it amongst people and make them realise the
            importance of Vedic wisdom. This is my journey.
          </p>
        </div>
      </div>
    </div>
  );
}
