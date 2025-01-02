import Hero from "@/components/hero";
import Image from "next/image";
export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4 max-w-[690px] mx-auto">
        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col items-center p-6 rounded-lg bg-[#C7D6E380] dark:bg-[#191B4480]">
            <h2 className="text-xl font-normal mb-4">
              Discover <strong>local</strong> connections centered around your
              unique interests
            </h2>
            <Image
              src="/assets/images/friends_smiling.jpg"
              alt="friends smiling at a cafe"
              width={690}
              height={460}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col items-center p-6 rounded-lg bg-[#F9DCAF80] dark:bg-[#3A2A1C80]">
            <h2 className="text-xl font-normal mb-4">
              Find your tribe within walking distance, united by{" "}
              <strong>common</strong> pursuits
            </h2>
            <Image
              src="/assets/images/flowers.jpg"
              alt="flower handling"
              width={690}
              height={460}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col items-center p-6 rounded-lg bg-[#E6E3BD80] dark:bg-[#17363980]">
            <h2 className="text-xl font-normal mb-4">
              Experience a <strong>secure</strong> environment where you can
              comfortably explore new friendships
            </h2>
            <Image
              src="/assets/images/sunset.jpg"
              alt="sunset with friends"
              width={690}
              height={460}
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
    </>
  );
}
