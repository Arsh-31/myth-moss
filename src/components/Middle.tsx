import Image from "next/image";

export const Middle = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-5 pt-2">
      {/* Left Column - Mushrooms */}
      <div className="col-span-2 pr-4 border-r-2 border-black">
        <div className="grid grid-cols-2 gap-x-6">
          <div className="col-span-2">
            <Image
              src="/images/img2.jpg"
              alt="Mysterious mushrooms growing in forest"
              className="w-full border-2 border-black"
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-2 mt-4 leading-tight tracking-tight">
              Beneath the Cap: The Secret Lives of Mushrooms
            </h2>
            <p className="text-xs uppercase tracking-widest mb-4 border-b border-black pb-2">
              Fungal Whispers & Forest Oddities
            </p>
          </div>

          <div className="text-justify leading-relaxed space-y-4">
            <p className="first-line:font-bold first-line:text-lg">
              They bloom with no permission. They rise in rings, in silence, in
              secret.
            </p>
            <p>Mushrooms are not plants. They do not reach for the sun.</p>
            <p>
              They emerge — overnight, unnoticed — as if summoned. Some say they
              are nature&apos;s punctuation marks. Others say they are
              listening.
            </p>
            <p>
              Old woods hold tales of travelers who followed a trail of glowing
              caps deep into the underbrush, never to return. These were not
              ordinary fungi. They were moon-fed, part of a greater root system
              called the Mycelial Mind — a slow, silent network that spans
              continents, listening, remembering, and occasionally... whispering
              back.
            </p>
          </div>

          <div className="text-justify leading-relaxed space-y-4">
            <h3 className="font-bold italic">
              Fairy Rings & Forbidden Circles
            </h3>
            <p>
              You may have seen a perfect ring of mushrooms on a foggy morning.
              Do not step inside.
            </p>
            <p>
              These rings are not random. Folklore says they are the places
              where fairies dance — or where time unravels for just a moment.
              Some who&apos;ve stepped inside say it felt like blinking — and
              suddenly, the world had shifted. Trees were older. Birds had
              forgotten your name.
            </p>
            <p>
              In the southern bogs, there&apos;s a species called the
              Whispercap. It hums, softly, when touched. No scientist has
              explained it. But every forager in the region leaves it alone.
            </p>
            <p className="font-bold">
              &quot;If mushrooms had mouths,&quot; one forest witch once said,
              &quot;they would not speak. They would laugh.&quot; In a place
              beneath roots and rotting bark, the mushrooms are keeping secrets.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Sky and Hyacinths */}
      <div className="col-span-3 pl-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Sky Article */}
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 leading-tight tracking-tight">
              The Sky Remembers: Constellations and the Cartography of Memory
            </h2>
            <p className="text-xs uppercase tracking-widest mb-6 border-b border-black pb-2">
              Stellar Myths & Forgotten Astronomy
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-justify leading-relaxed space-y-4">
                <p className="first-line:font-bold first-line:text-lg">
                  Before there were maps of land, there were maps of stars.
                  Before there were names for rivers and mountains and kings,
                  there were names whispered to clusters of light sewn into the
                  heavens — names that still echo in the dark if you listen.
                </p>

                <p>
                  They are not just stars, and they are not just shapes.
                  Constellations are the sky&apos;s memory — each one a symbol,
                  a sentence, a scar.
                </p>

                <h3 className="mt-6 font-bold italic text-lg border-t border-black pt-2">
                  The First Drawings Were Above Us
                </h3>
                <p>
                  Long before ink met parchment, humans traced stories across
                  the cosmos with fingers and firelight. A hunter. A serpent. A
                  bear. A lyre. Every shape drawn in the stars was not to
                  understand the sky — but to understand ourselves.
                </p>

                <p className="italic text-gray-700 my-4">
                  &quot;That must be someone who lived.&quot;
                  <br />
                  &quot;That must be something that happened.&quot;
                </p>

                <Image
                  src="/images/img4.jpg"
                  alt="Ancient star map with constellations"
                  className="w-full border-2 border-black"
                />
              </div>

              <div className="text-justify leading-relaxed space-y-4">
                <p className="italic text-gray-700">
                  Some constellations don&apos;t appear in telescopes. They only
                  show themselves in dreams, old photographs, or moonlight on
                  frozen lakes.
                </p>

                <p>
                  There are whisperings of an unnamed constellation — visible
                  only on the seventh night of frost under a waning gibbous. The
                  stars align into an open door. Those who see it speak of a
                  place they&apos;ve never been but somehow remember.
                </p>

                <h3 className="mt-6 font-bold italic text-lg border-t border-black pt-2">
                  The Ones We Forgot
                </h3>
                <p>
                  Not all constellations are remembered. Over the centuries,
                  countless star-shapes have been named and lost — The River
                  Child, The Hollow Crown, The Sleeper&apos;s Mouth.
                </p>

                <p>
                  Some believe these forgotten constellations still exist — not
                  in the sky, but in the spaces between stars, hiding in shadow,
                  waiting to be named again.
                </p>

                <h3 className="mt-6 font-bold italic text-lg border-t border-black pt-2">
                  What the Sky Keeps
                </h3>
                <p>
                  Constellations are not fixed. They shift, they age, they
                  drift. But the stories we&apos;ve pinned to them — those are
                  stubborn.
                </p>

                <p>
                  And maybe that&apos;s what matters most. That we looked up
                  into the impossible darkness and made meaning from it. We made
                  maps of our grief. We made legends out of loneliness.
                </p>
              </div>
            </div>
          </div>

          {/* Hyacinths Sidebar */}
          <div className="border-l-2 border-black pl-4">
            <h2 className="text-2xl font-bold mb-2 leading-tight">
              The Scent That Lingers After Death: On Hyacinths
            </h2>
            <p className="text-xs uppercase tracking-widest mb-4 border-b border-black pb-2">
              Fragrant Folklore & Floral Sorrows
            </p>

            <div className="text-justify leading-relaxed space-y-4">
              <p className="first-line:font-bold first-line:text-lg">
                It begins with a scent — delicate, almost too sweet. A scent
                that arrives before the flower does, drifting through open
                windows in early spring like a memory trying to find its shape.
              </p>

              <p>
                They bloom in clusters, blue as bruises or pale as morning
                light, each petal curled like a whispered secret. But they do
                not bloom quietly. Their scent is persistent — lovely, yes, but
                sorrowful.
              </p>

              <p>
                In myth, the first hyacinth grew from the blood of Hyakinthos,
                beloved of Apollo, struck down by a jealous wind.
                Grief-stricken, Apollo transformed the spilled blood into a
                flower that would never forget.
              </p>

              <Image
                src="/images/img3.jpg"
                width={400}
                height={300}
                alt="Delicate blue hyacinth flowers"
                className="w-full border-2 border-black my-4"
              />

              <p>
                To the Greeks, hyacinths were flowers of mourning — but not of
                silence. They were left on altars and graves when words could
                not reach the heart in time.
              </p>

              <p className="font-bold">
                Even now, some say that if you smell a hyacinth where none
                bloom, someone you once loved is thinking of you — quietly,
                tenderly, still.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
