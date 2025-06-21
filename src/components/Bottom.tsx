import Image from "next/image";
export const Bottom = () => {
  return (
    <div className="grid  grid-cols-5 gap-5 text-justify">
      {/* Moon */}
      <div className="col-span-2">
        <div className="grid grid-cols-1 text-justify md:grid-cols-2 gap-8 font-serif leading-relaxed text-[0.98rem] text-[#2e2b25]">
          {/* Column 1 */}
          <div>
            <h2 className="text-3xl font-bold mb-2">
              The Moon Is Not What It Was
            </h2>
            <p className="italic text-sm mb-4 ">
              Filed under: Celestial Oddities & Lunar Whispers
            </p>

            <p>
              They say the moon has no light of her own — that she merely
              borrows the sun’s shine, a pale mimicry of brilliance. But those
              who have watched her long enough, in silence and in shadow, know
              better.
            </p>

            <p className="">The moon watches. The moon remembers.</p>

            <p className="">
              On certain nights — thin, cold ones where time seems to slip
              sideways — she appears <em>closer than she should</em>, enormous
              and bruised with color. Owls hush. Clocks stutter. Children cry in
              their sleep. Old stories whisper that this is when the{" "}
              <strong>veil loosens</strong>, when the moon leans low enough to
              hear secrets no one meant to speak.
            </p>

            <h3 className="font-semibold mt-2 text-xl">Of Eyes and Echoes</h3>

            <p className="mt-1">
              Ancient sailors spoke of seeing <em>eyes blink</em> on the moon’s
              surface, as though something beneath her dusty skin stirs when no
              one is looking. Some maps once marked her not as a sphere, but as
              a <strong>sealed door</strong> — to what, no one dared write. The
              ink faded.
            </p>

            <p className="">
              In forgotten northern dialects, the word for &quot;moon&quot; and
              &quot;mirror&quot; were once the same. Some say she does not
              orbit, but <em>watches</em> from where she was exiled.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-lg">
              Lunar Offerings and Warnings
            </h3>

            <p className="mt-1">
              Witches and wanderers have long left{" "}
              <em>milk, honey, and broken clocks</em> at windowsills during a
              waxing crescent. Not as worship — but apology. For what, exactly,
              is unclear. Perhaps for turning our backs on her. Perhaps for what
              we brought back from the first time we landed.
            </p>

            <p className="">
              In the village of Thornebend, every full moon, the same girl is
              seen walking into the forest, barefoot and humming. She never
              ages. The town does not speak of it. The moon always follows.
            </p>

            <h3 className="font-semibold mt-2 text-xl">The Hollow Side</h3>

            <p className="mt-1">
              Science tells us the moon is dry and still. Yet seismic
              instruments once picked up vibrations — rhythmic, slow, like
              breath. And then: silence.
            </p>

            <p className="">
              Some theorists of the Night Vaults believe the dark side — the one
              we never see — is not a place at all. But a wound. Or a mouth. Or
              worse — a memory itself, suspended in orbit, replaying again and
              again.
            </p>

            <p className="">
              So tonight, when you look up, and she is full and round and
              watching —
            </p>

            <blockquote className="italic text-muted-foreground mt-2 pl-4 border-l-4 border-gray-400">
              Do not smile. Do not speak your wish aloud. She may already know
              it. And she may not be kind.
            </blockquote>
          </div>
        </div>
      </div>

      {/* Tulips */}
      <div className="col-span-3">
        <Image
          className="border-2 mb-4"
          src="/images/design.jpg"
          width="900"
          alt="img"
          height="80"
        />
        <div className="grid grid-cols-3 gap-5  text-justify font-serif leading-relaxed text-[0.98rem] text-[#2e2b25]">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              The Whispering Madness of Tulips
            </h2>
            <p className="italic mb-4 text-sm">
              Filed under: Enchanted Flora & Cursed Botany
            </p>
            <p>
              They bloom in silence. Beneath the spring sun and the mourning
              dew, the tulips rise — soft, elegant, unthreatening. But let not
              their beauty deceive you, dear reader. For few know this: the
              tulip is a flower touched by madness.
            </p>
            <p className="mt-3">
              In the shadowed pages of history, during the 17th century, a
              strange fever swept across the Dutch Empire. Tulip bulbs, some no
              larger than a thumbprint, were bought and sold for fortunes —
              entire homes exchanged hands for a single bloom. But these were
              not ordinary tulips. These were broken tulips, streaked with
              flames and ghostlike veins of color. Unnatural. Enchanted.
            </p>
          </div>
          <div>
            <p>
              No one knew the cause. Some whispered it was a curse. Others said
              the petals had been kissed by the Fae. In truth — or what science
              would later claim — it was a virus. A breaking virus, passed on by
              biting insects. But to the people of the time, these flowers were
              portals to the divine, or perhaps… to something darker.
            </p>
            <blockquote className="mt-4 px-4 py-2 border-l-4 border-gray-400 italic text-sm text-gray-700">
              “Semper Augustus,” they called one. A tulip that shimmered like
              blood in moonlight. Its bulb once sold for more than gold — and
              then, without warning, the market collapsed overnight. Some say a
              black tulip bloomed, and with it came ruin.
            </blockquote>
            <p className="mt-4">
              In Ottoman legend, tulips are said to grow over the graves of the{" "}
              <em>devoted and the damned</em>. Their roots drink the memories of
              the dead, and their colors are painted with sorrow.
            </p>
          </div>
          <div>
            <p>
              In Eastern Europe, some old gravekeepers believe that if a tulip
              blooms on a poet’s grave, the petals will carry his last,
              unwritten verse.
            </p>
            <p className="mt-3">
              And then there is the Midnight Tulip — a flower said to bloom only
              once every century, beneath a new moon. Black as ink, cold as
              stone. If you breathe its scent, it shows you the one thing you’ve
              most longed to forget.
            </p>
            <p className="mt-4">
              So next time you pass a tulip, blooming quietly in the garden path
              — pause. And listen. For the tulip does not speak with words, but
              with memory, madness, and myth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
