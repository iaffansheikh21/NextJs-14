import Link from "next/link";
import Image from "next/image";

export default function Blogs() {
  return (
    <div>
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/blog.jpg')",
          height: "550px",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-5xl font-extrabold text-blue-200 text-center pt-6">
            Welcome to our Blog
          </p>
        </div>
      </section>
      <div className="pt-8 px-8">
        <div>
          <div>
            <p className="font-medium text-4xl">Latest Posts</p>
          </div>
          <div className="grid grid-cols-3 pt-8">
            <div>
              <a href="/blogs/amazon">
                <Image
                  width={400}
                  height={400}
                  src="/img/amazon.jpg"
                  alt="Post Image"
                />
                <div className="pt-4">
                  <p className="font-light text-2xl">Amazon</p>
                </div>
                <div className="pt-4">
                  <p className="font-thin">
                    &quot;Explore insightful content on Amazon through our blog,
                    where we delve into diverse topics ranging from product
                    reviews to the latest trends. Gain valuable knowledge and
                    stay informed about the e-commerce giant with
                    Crafty._.Wishes.&quot;
                  </p>
                </div>
              </a>
            </div>
            <div>
              <a href="/blogs/snapchat">
                <Image
                  width={400}
                  height={400}
                  src="/img/sc.jpg"
                  alt="Post Image"
                />
                <div className="pt-4">
                  <p className="font-light text-2xl">SnapChat</p>
                </div>
                <div className="pt-4">
                  <p className="font-thin">
                    &quot;Discover the secrets of Snapchat on our blog, where we
                    unravel the latest features, creative tips, and strategies
                    to enhance your Snapchat experience. Dive into our
                    insightful posts to master the art of storytelling through
                    snaps and stay updated on the dynamic world of ephemeral
                    content.&quot;
                  </p>
                </div>
              </a>
            </div>
            <div>
              <a href="/blogs/instagram">
                <Image
                  width={400}
                  height={400}
                  src="/img/insta.jpg"
                  alt="Post Image"
                />
                <div className="pt-4">
                  <p className="font-light text-2xl">Instagram</p>
                </div>
                <div className="pt-4">
                  <p className="font-thin">
                  &quot;Explore Instagram mastery on our blog! Unlock insights,
                    tips, and strategies to elevate your Instagram game, from
                    content creation to audience engagement. Dive into our
                    latest posts for a comprehensive guide to thriving in the
                    vibrant world of Instagram.&quot;
                  </p>
                </div>
              </a>
            </div>
            <div className="pt-4">
              <a href="/blogs/facebook">
                <Image
                  width={400}
                  height={400}
                  src="/img/fb.jpg"
                  alt="Post Image"
                />
                <div className="pt-4">
                  <p className="font-light text-2xl">Facebook</p>
                </div>
                <div className="pt-4">
                  <p className="font-thin">
                  &quot;Explore the latest insights on Facebook strategies and
                    innovations in our blog, providing valuable perspectives and
                    practical tips to enhance your social media presence. Stay
                    informed and discover new ways to optimize your Facebook
                    marketing efforts for increased engagement and success.&quot;
                  </p>
                </div>
              </a>
            </div>
            <div className="pt-4">
              <a href="/blogs/whatsapp">
                <Image
                  width={400}
                  height={400}
                  src="/img/whatsapp.jpg"
                  alt="Post Image"
                />
                <div className="pt-4">
                  <p className="font-light text-2xl">Whatsapp</p>
                </div>
                <div className="pt-4">
                  <p className="font-thin">
                  &quot;Explore the latest insights on WhatsApp&apos;s features, updates,
                    and tips for optimal use on our blog. Stay informed about
                    messaging trends, security practices, and discover new ways
                    to enhance your WhatsApp experience.&quot;
                  </p>
                </div>
              </a>
            </div>
            <div className="pt-4">
              <a href="/blogs/spotify">
                <Image
                  width={400}
                  height={400}
                  src="/img/spotify.jpg"
                  alt="Post Image"
                />
                <div className="pt-4">
                  <p className="font-light text-2xl">Spotify</p>
                </div>
                <div className="pt-4">
                  <p className="font-thin">
                    &quot;Explore the rhythmic world of Spotify through our blog,
                    where we unravel the latest features, curated playlists, and
                    insightful reviews. Dive into a musical journey with tips
                    and tricks to enhance your Spotify experience.&quot;
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
