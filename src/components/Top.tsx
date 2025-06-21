"use client";
import Image from "next/image";

export const Top = () => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-5 english">
      {/* Moon Section */}
      <section className="md:col-span-2 space-y-8">
        <div className="grid grid-cols-1 gap-8 text-[#2e2b25] leading-relaxed md:grid-cols-2">
          {/* Column 1 */}
          <article className="space-y-4 text-justify">
            <header>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                The Moon Is Not What It Was
              </h1>
              <p className="text-sm tracking-widest">
                Filed under: Celestial Oddities & Lunar Whispers
              </p>
            </header>

            <p className="first-line:font-bold first-line:text-lg">
              They say the moon has no light of her own — that she merely
              borrows the sun&apos;s shine, a pale mimicry of brilliance. But
              those who have watched her long enough, in silence and in shadow,
              know better.
            </p>

            <p>The moon watches. The moon remembers.</p>

            <p>
              On certain nights — thin, cold ones where time seems to slip
              sideways — she appears closer than she should, enormous and
              bruised with color. Owls hush. Clocks stutter. Children cry in
              their sleep. Old stories whisper that this is when the veil
              loosens, when the moon leans low enough to hear secrets no one
              meant to speak.
            </p>
            <figure className="my-4">
              <Image
                src="/gifs/moon.gif"
                alt="The moon appearing unusually large and colorful"
                width={800}
                height={500}
                className="w-full select-none"
              />
            </figure>

            <h2 className="text-xl font-semibold mt-4">Of Eyes and Echoes</h2>

            <p>
              Ancient sailors spoke of seeing eyes blink on the moon&apos;s
              surface, as though something beneath her dusty skin stirs when no
              one is looking. Some maps once marked her not as a sphere, but as
              a sealed door — to what, no one dared write. The ink faded.
            </p>
          </article>

          {/* Column 2 */}
          <article className="space-y-4 text-justify">
            <p>
              In forgotten northern dialects, the word for &quot;moon&quot; and
              &quot;mirror&quot; were once the same. Some say she does not
              orbit, but <em>watches</em> from where she was exiled.
            </p>

            <h2 className="text-lg font-semibold">
              Lunar Offerings and Warnings
            </h2>

            <p>
              Witches and wanderers have long left milk, honey, and broken
              clocks at windowsills during a waxing crescent. Not as worship —
              but apology. For what, exactly, is unclear. Perhaps for turning
              our backs on her. Perhaps for what we brought back from the first
              time we landed.
            </p>

            <p>
              In the village of Thornebend, every full moon, the same girl is
              seen walking into the forest, barefoot and humming. She never
              ages. The town does not speak of it. The moon always follows.
            </p>

            <h2 className="text-xl font-semibold">The Hollow Side</h2>

            <p>
              Science tells us the moon is dry and still. Yet seismic
              instruments once picked up vibrations — rhythmic, slow, like
              breath. And then: silence.
            </p>

            <p>
              Some theorists of the Night Vaults believe the dark side — the one
              we never see — is not a place at all. But a wound. Or a mouth. Or
              worse — a memory itself, suspended in orbit, replaying again and
              again.
            </p>

            <p>So tonight, when you look up,remember this:</p>

            <p className="">
              Do not smile. Do not speak your wish aloud. She may already know
              it. And she may not be kind.
            </p>
          </article>
        </div>
      </section>

      {/* Tulips Section */}
      <section className="md:col-span-3 space-y-8 mt-10 md:mt-0">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-bold">
            The Whispering Madness of Tulips
          </h1>
          <p className="text-sm tracking-widest">
            Filed under: Enchanted Flora & Cursed Botany
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Full-width image */}
          <div className="md:col-span-3">
            <Image
              src="/gifs/Tulip.gif"
              width={800}
              height={400}
              alt="Mysterious tulips with unusual patterns"
              className="w-full border-2 select-none"
            />
          </div>

          {/* Column 1 */}
          <div className="space-y-4 text-justify">
            <p className="first-line:font-bold first-line:text-lg">
              They bloom in silence. Beneath the spring sun and the mourning
              dew, the tulips rise — soft, elegant, unthielding. But let not
              their beauty deceive you, dear reader. For few know this: the
              tulip is a flower touched by madness.
            </p>
            <p>
              In the shadowed pages of history, during the 17th century, a
              strange fever swept across the Dutch Empire. Tulip bulbs, some no
              larger than a thumbprint, were bought and sold for fortunes —
              entire homes exchanged hands for a single bloom. It was not
              flowers they traded, but dreams: promises wrapped in petals,
              symbols of rarity and fleeting perfection. The more delicate the
              stripe, the higher the price.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4 text-justify">
            <p>
              But these were not ordinary tulips. These were broken tulips,
              streaked with flames and ghostlike veins of color. Unnatural.
              Enchanted. No one knew the cause. Some whispered it was a curse.
              Others said the petals had been kissed by the Fae.
            </p>
            <p>
              &quot;Semper Augustus,&quot; they called one. A tulip that
              shimmered like blood in moonlight. Its bulb once sold for more
              than gold — and then, without warning, the market collapsed
              overnight. What was once a symbol of untouchable luxury became a
              ghost, a cautionary bloom. The petals, once prized for their deep
              crimson flames and ivory veining, still appeared in paintings and
              poems — but no longer in ledgers.
            </p>
          </div>

          {/* Column 3 */}
          <div className="space-y-4 text-justify">
            <p>
              In Ottoman legend, tulips grow over the graves of the{" "}
              <em>devoted and the damned</em>. Their roots drink the memories of
              the dead. In Eastern Europe, some believe tulips on a poet&apos;s
              grave carry his last, unwritten verse.
            </p>
            <p>
              The Midnight Tulip blooms once a century beneath a new moon. Black
              as ink, cold as stone. Breathe its scent and it shows you what
              you&apos;ve most longed to forget. Not in fragments or symbols —
              but fully, vividly, as though it never left you. Some say it
              speaks in the voice of the lost. Others claim it carries the chill
              of the grave.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
