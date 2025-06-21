"use client";
import Image from "next/image";

export const Middle = () => {
  return (
    <div className="grid grid-cols-1 py-4 md:grid-cols-5 english mx-auto">
      {/* Left Column - Mushrooms */}
      <div className="col-span-2 md:pr-6 md:border-r-2 border-black pb-8 md:pb-0 border-b-2 md:border-b-0 space-y-3">
        <div className="w-full">
          <Image
            width={600}
            height={400}
            src="/gifs/mushroom.gif"
            alt="Mysterious mushrooms growing in forest"
            className="w-full border-2 border-black md:border-none"
            priority
          />
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Beneath the Cap: The Secret Lives of Mushrooms
          </h2>
          <p className="text-xs uppercase tracking-widest">
            Fungal Whispers & Forest Oddities
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <p className="text-justify first-line:font-bold first-line:text-lg">
                They bloom with no permission. They rise in rings, in silence,
                in secret.
              </p>
              <p className="text-justify">
                Mushrooms are not plants. They do not reach for the sun.
              </p>
              <p className="text-justify">
                They emerge — overnight, unnoticed — as if summoned. Some say
                they are nature&apos;s punctuation marks. Others say they are
                listening.
              </p>
              <p className="text-justify">
                Old woods hold tales of travelers who followed a trail of
                glowing caps deep into the underbrush, never to return. These
                were not ordinary fungi. They were moon-fed, part of a greater
                root system called the Mycelial Mind — a slow, silent network
                that spans continents, listening, remembering, and
                occasionally... whispering back. <br />
                <br />
                Some say the forest dreams through them — that each
                bioluminescent bloom is a memory, pulsing gently with the breath
                of ancient stories.If you listen closely on windless nights, you
                might hear echoes of footsteps, soft laughter, or voices
                repeating the final thoughts of those who vanished.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="font-bold italic text-lg md:text-xl">
                Fairy Rings & Forbidden Circles
              </h3>
              <p className="text-justify">
                You may have seen a perfect ring of mushrooms on a foggy
                morning. Do not step inside.
              </p>
              <p className="text-justify">
                These rings are not random. Folklore says they are the places
                where fairies dance — or where time unravels for just a moment.
                Some who&apos;ve stepped inside say it felt like blinking — and
                suddenly, the world had shifted. Trees were older. Birds had
                forgotten your name.
              </p>
              <p className="text-justify">
                In the southern bogs, there&apos;s a species called the
                Whispercap. It hums, softly, when touched. No scientist has
                explained it. But every forager in the region leaves it alone.
              </p>
              <p className="font-bold text-justify">
                &quot;If mushrooms had mouths,&quot; one forest witch once said,
                &quot;they would not speak. They would laugh.&quot; In a place
                beneath roots and rotting bark, the mushrooms are keeping
                secrets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Sky and Hyacinths */}
      <div className="col-span-3 space-y-1 mt-10 md:mt-0 md:ml-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5">
          {/* Main Sky Article */}
          <div className="md:col-span-2 space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              The Sky Remembers: Constellations and the Cartography of Memory
            </h2>
            <p className="text-xs uppercase tracking-widest">
              Stellar Myths & Forgotten Astronomy
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <div className="space-y-1">
                <p className="text-justify first-line:font-bold first-line:text-lg">
                  Before there were maps of land, there were maps of stars.
                  Before there were names for rivers and mountains and kings,
                  there were names whispered to clusters of light sewn into the
                  heavens — names that still echo in the dark if you listen.
                </p>
                <p className="text-justify">
                  They are not just stars, and they are not just shapes.
                  Constellations are the sky&apos;s memory — each one a symbol,
                  a sentence, a scar.
                </p>

                <h3 className="font-bold italic text-lg md:text-xl pt-1 mt-2">
                  The First Drawings Were Above Us
                </h3>
                <p className="text-justify">
                  Long before ink met parchment, humans traced stories across
                  the cosmos with fingers and firelight. A hunter. A serpent. A
                  bear. A lyre. Every shape drawn in the stars was not to
                  understand the sky — but to understand ourselves.
                </p>

                <p className="italic text-gray-700 my-5">
                  &quot;That must be someone who lived.&quot;
                  <br />
                  &quot;That must be something that happened.&quot;
                </p>
                <p className="text-justify">
                  There is a theory — whispered more than written — that the sky
                  reflects not just our stories, but our memories. That every
                  constellation is a kind of celestial journal, archiving what
                  we fear to forget. Some even believe that when stars fade,
                  it&apos;s not from time, but from being forgotten.
                </p>
                <Image
                  width={600}
                  height={400}
                  src="/gifs/stars.gif"
                  alt="Ancient star map with constellations"
                  className="my-5 w-full border-2 border-black"
                />
                <p className="text-justify">
                  In remote regions, shamans once claimed to speak with the
                  stars. Not to divine the future, but to retrieve memories not
                  their own — lives replayed in the shimmer of Orion’s belt or
                  hidden in the curve of Lyra.
                </p>
              </div>

              <div className="space-y-3">
                <p className="italic text-justify">
                  Some constellations don&apos;t appear in telescopes. They only
                  show themselves in dreams, old photographs, or moonlight on
                  frozen lakes.
                </p>
                <p className="text-justify">
                  There are whisperings of an unnamed constellation — visible
                  only on the seventh night of frost under a waning gibbous. The
                  stars align into an open door. Those who see it speak of a
                  place they&apos;ve never been but somehow remember.
                </p>

                <h3 className="font-bold italic text-lg md:text-xl pt-1 mt-2">
                  The Ones We Forgot
                </h3>
                <p className="text-justify">
                  Not all constellations are remembered. Over the centuries,
                  countless star-shapes have been named and lost — The River
                  Child, The Hollow Crown, The Sleeper&apos;s Mouth.
                </p>
                <p className="text-justify">
                  Some believe these forgotten constellations still exist — not
                  in the sky, but in the spaces between stars, hiding in shadow,
                  waiting to be named again.
                </p>
                <p className="text-justify">
                  Astronomers in forgotten observatories once spoke of
                  &quot;dark constellations&quot; — not composed of stars, but
                  of absence. Gaps so precise they formed patterns too
                  deliberate to be random. Some say these are celestial ghosts,
                  constellations that once were and might one day return when
                  memory is strong enough to pull them back into light.
                </p>
                <h3 className="font-bold italic text-lg md:text-xl pt-1 mt-2">
                  What the Sky Keeps
                </h3>
                <p className="text-justify">
                  Constellations are not fixed. They shift, they age, they
                  drift. But the stories we&apos;ve pinned to them — those are
                  stubborn.
                </p>
                <p className="text-justify">
                  And maybe that&apos;s what matters most. That we looked up
                  into the impossible darkness and made meaning from it. We made
                  maps of our grief. We made legends out of loneliness, wonder,
                  silence, longing, and light.
                </p>
                {/* <p className="text-justify">
                  Somewhere between the stars and the silence, we found
                  something to hold on to — even if it was only ancient light,
                  still pretending to be present.
                </p> */}
              </div>
            </div>
          </div>

          {/* Hyacinths Sidebar */}
          <div className="md:border-l-2 md:pl-6 border-black space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              The Scent That Lingers After Death: On Hyacinths
            </h2>
            <p className="text-xs uppercase tracking-widest">
              Fragrant Folklore & Floral Sorrows
            </p>

            <div className="space-y-3">
              <p className="text-justify first-line:font-bold first-line:text-lg">
                It begins with a scent — delicate, almost too sweet. A scent
                that arrives before the flower does, drifting through open
                windows in early spring like a memory trying to find its shape.
              </p>
              <p className="text-justify">
                They bloom in clusters, blue as bruises or pale as morning
                light, each petal curled like a whispered secret. But they do
                not bloom quietly. Their scent is persistent — lovely, yes, but
                sorrowful.
              </p>
              <p className="text-justify">
                In myth, the first hyacinth grew from the blood of Hyakinthos,
                beloved of Apollo, struck down by a jealous wind.
                Grief-stricken, Apollo transformed the spilled blood into a
                flower that would never forget.
              </p>

              <Image
                src="/images/img3.jpg"
                width={600}
                height={400}
                alt="Delicate blue hyacinth flowers"
                className="w-full border-2 border-black my-5 md:border-none"
              />

              <p className="text-justify">
                To the Greeks, hyacinths were flowers of mourning — but not of
                silence. They were left on altars and graves when words could
                not reach the heart in time.
              </p>
              <p className="font-bold text-justify">
                Even now, some say that if you smell a hyacinth where none
                bloom, someone you once loved is thinking of you — quietly,
                tenderly, still.
              </p>
              {/* <p className="text-justify">
                In Victorian flower language, the hyacinth meant different
                things: sincerity, sorrow, rebirth. A message left in petals
                when voices broke or time ran thin. Blue for regret. Purple for
                asking forgiveness. White for love unspoken.
              </p> */}
              <p className="text-justify">
                Some cultures believe hyacinths bloom best where grief has
                lingered long. That their roots crave memory — growing stronger
                when nourished by loss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
