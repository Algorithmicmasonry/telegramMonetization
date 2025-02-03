"use client"

import {
  aniarrow,
  atg,
  checkMark,
  cntg,
  etl,
  gsgs,
  gslp,
  heroImage,
  makerpic,
  sgp,
} from "@/images";
import { ArrowRightCircleIcon, CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const pointete = [
  "Don’t have 8–12 hours a day to manage a trading academy.",
  "Struggle to market their communities effectively.",
  "Find it hard to keep members engaged.",
  "Want a system that ensures consistent, predictable profits from their students and community.",
];

const thatsWhat = [
  {
    id: 1,
    text: "That's what Netflix does.",
  },
  {
    id: 2,
    text: "That's what Spotify does.",
  },
  {
    id: 3,
    text: "That's what Shopify does That.",
  },
  {
    id: 4,
    text: "That's what Gotv and dstv do.",
  },
  {
    id: 5,
    text: "That's what major multi-billion-dollar enterprises do around the world.",
  },
];

const tasks = [
  { id: 1, text: "Hire staff" },
  { id: 2, text: "Rent expensive office space" },
  { id: 3, text: "Manually monitor unpaid members and kick them out" },
];

const points = [
  {
    id: 1,
    text: "Automatically bills your members’ subscription fees",
  },
  {
    id: 2,
    text: "Automatically removes expired members who refuse to pay",
  },
  {
    id: 3,
    text: "Prevents spamming and link-sharing in your group",
  },
  {
    id: 4,
    text: "Handles affiliate commissions and payments effortlessly",
  },
  {
    id: 5,
    text: "Stores your members’ important data (Name, Email, WhatsApp number, etc.)",
  },
  {
    id: 6,
    text: "Includes engaging activities that keep your group active and irresistible",
  },
];

const page = () => {
  return (
    <main className="bg-gray-100">
      <div className="py-4 px-3 bg-black text-white font-semibold text-center border-b-2 border-b-white">
        With The Click of a Button Turn your Telegram Group into a N125,000/Week
        Profit Machine with.....
      </div>
      <div className="py-4 px-6 md:px-8 border-b-4 border-b-white bg-background">
        <div className="py-4 pt-[20px] px-6 text-center max-w-[900px] mx-auto text-xl md:text-2xl lg:text-3xl font-semibold md:max-w-[1200px]">
          <span className="underline">The Simplest Way To Start</span>{" "}
          <span className="text-blue-400">A Coaching Business On Telegram</span>{" "}
          That Generates Up To
          <span className="underline pl-1 font-bold">
            ₦ 125,000 In Profits Every Single Week
          </span>{" "}
          From Your Trading Academy...
          <div className="m-4">
            WITHOUT
            <span className="font-normal pl-1">
              Ever Writing a single line of code, handling billing or Spam
              prevention and Group Management For EVER!
            </span>
          </div>
        </div>
        <div className="rounded-md text-white bg-blue-400 text-center font-semibold py-4 px-6  md:w-[700px] w-[400px] mx-auto center">
          We Call It the &quot;Digital Real Estate Method&quot; and it will Blow
          Your Mind.
        </div>
        <div className="text-center mt-4 italic font-semibold mb-[10px]">
          No Technical Skill or Previous Experience Required.{" "}
          <span className="text-blue-400 pl-1">100% FREE TUTORIAL below.</span>
        </div>
      </div>
      <div className="flex flex-col items-center  justify-center min-h-screen">
        <div className="space-y-4 text-left py-6 px-4 bg-gray-100 text-gray-900 leading-7 text-lg max-w-[900px] md:max-w-[1200px]">
          <p className="text-lg font-bold">Hi, </p>
          <p>
            If you&apos;re looking for a way to turn your Telegram trading group
            into a profitable trading academy making 100s of thousands of naira
            every single month, then i have one word for you{" "}
            <span className="font-semibold">DIGITAL REAL ESTATE</span>
          </p>{" "}
          <p className="font-bold">
            In case you don&apos;t know what the Digital Real estate is, it
            means
          </p>
          <p className="text-xl font-semibold text-blue-700">
            Having an Asset online that generates monthly recurring revenue for
            you by charging subscription fees for access to that asset
          </p>{" "}
          {thatsWhat.map((item) => (
            <p key={item.id}>{item.text}</p>
          ))}
          <div
            style={{ color: "#0b3f71" }}
            className="font-semibold mx-auto text-center py-4 px-6 bg-slate-300 text-xl border-dotted border-2 rounded-md shadow-2xl w-[400px] md:w-[700px] self-center mb-[400px]"
          >
            Now I Want To Show You How To Do It Yourself And Make 100s of
            Thousand, Even Millions of Naira Every Month, Doing The Same Thing.
          </div>
          <div className="border-2 border-black py-4 px-6 mt-[100px]">
            <div className="flex items-center justify-center">
              <Image
                src={makerpic}
                alt="Oamen Emmanuel"
                className="rounded-full border-black mb-5"
                width={150}
                height={100}
              />
            </div>
            <div className="text-left space-y-4">
              <p>
                My name is Oamen Emmanuel and i am a developer on the
                GroupShepherd team.
              </p>
              <p>
                Over the past few months, we at GroupShepherd have worked hard
                to create a powerful solution for community leaders and
                educators
              </p>
              <p>
                who want to turn their Telegram groups into profitable,
                subscription-based businesses.
              </p>
              <p>
                At GroupShepherd, we specialize in helping you generate
                recurring income
              </p>
              <p>
                without worrying about coding, billing, spam prevention, or
                group management.
              </p>
              <p>
                Our flagship tool,{" "}
                <span className="font-semibold">the GroupShepherd bot</span>,
                automates your subscription model and manages the backend,
              </p>
              <p>
                so you can focus on growing your community and delivering value.
              </p>
              <p>
                Whether you&apos;re a trading coach for Forex, Crypto, educator,
                or content creator,
              </p>
              <p>
                we designed GroupShepherd to make running a profitable business
                on Telegram easier than ever.
              </p>
              <p>
                If you&apos;re ready to transform your Telegram group into a
                profit-generating machine,
              </p>
              <p>
                I&apos;d love to show you how GroupShepherd can make it happen
              </p>
            </div>
          </div>
          <div
            style={{ color: "#0b3f71" }}
            className="text-center text-3xl font-extrabold"
          >
            And Now, It&apos;s Your Turn.
          </div>
          <div>
            If you can read, write, use the internet, and are serious about
            growing your Telegram coaching business, you can make a minimum of
            ₦500,000 every month—
            <span className="underline">CONSISTENTLY.</span>
          </div>
          <div
            style={{ color: "#0b3f71" }}
            className="text-center font-extrabold text-3xl mt-4"
          >
            You Won&apos;t Have To Do 90% of The Work Most Successful Trading
            Academies Do.
          </div>
          <div>
            More on that shortly, but first, here’s a simple example of how you
            could be making at least ₦125,000 per week using our system..
          </div>
          <div className="font-semibold text-red-600 text-center flex flex-col items-center justify-center mb-[40px]">
            LOOK AT THIS COMMUNITY
            <Image src={aniarrow} alt="animated arrow" width={70} height={70} />
            <Image
              src={etl}
              alt="elite trading academy"
              className="rounded-lg shadow-2xl"
              width={500}
              height={500}
            />
          </div>
          <p className="mt-[40px] font-semibold">
            This is a trading academy offering signals and educational content
            to its members.
          </p>
          <p>
            They charge ₦5,000 per month for access to the community and also
            offer a trading course priced at ₦30,000.
          </p>
          <p>
            Using the{" "}
            <span className="font-semibold">DIGITAL REAL ESTATE METHOD</span>,
            they earn <span className="font-semibold">₦6,300,000</span>{" "}
            annually,
          </p>
          <p>
            assuming that just <span className="font-semibold">10% </span>of
            their members purchase the
            <span className="font-semibold pl-1">₦30,000</span> trading course.
          </p>
          <p>Here&apos;s the math:</p>
          <p>₦5,000 x 100 members = ₦500,000 per month</p>
          <p>
            That&apos;s ₦125,000 per week from simply providing signals and
            educational content.
          </p>
          <p>
            This doesn&apos;t even account for referrals! Our system includes an
            inbuilt, automated affiliate program, meaning your community can
            help spread the word and grow your profits.
          </p>
          <p>
            Now, let&apos;s say you&apos;re just starting out, with fewer than
            100 members. That&apos;s okay!
          </p>
          <p>
            Some trading academies have thousands of members, but starting small
            is perfectly fine.
          </p>
          <p>For example, in your first month, you get just 10 members.</p>
          <p>₦5,000 x 10 members = ₦50,000 per month</p>
          <p>
            For 12 months, that&apos;s ₦600,000 in annual revenue—
            <span className="text-blue-500">₦52,500 per month</span>.
          </p>
          <p>
            If even one person purchases your ₦30,000 trading course or
            one-on-one mentorship, that&apos;s another ₦30,000 added to your
            total.
          </p>
          <p>
            In this worst-case scenario, you&apos;re already looking at{" "}
            <span className="text-blue-500">₦630,000</span> in annual revenue
            from just 10 members.
          </p>
          <p>And this is just the beginning!</p>
          <div
            style={{ backgroundColor: "#0b3f71" }}
            className="font-bold text-center text-white py-4 px-6 rounded-lg text-xl"
          >
            Surely, you wouldn&apos;t mind an extra ₦500,000 every month, Would
            You?
          </div>
          <p>Especially if you have loved ones to take care of,</p>
          <p>
            Now, remember how I said you won&apos;t have to work as hard as most
            successful trading academies? Here&apos;s what I mean.
          </p>
          <p>
            The business model I&apos;m introducing you to is built around an
            efficient system that:
          </p>
          {points.map((point) => (
            <div className="flex items-start justify-start" key={point.id}>
              {/* <CircleCheck className="text-background text-lg"/> */}
              <Image src={checkMark} alt="check mark" width={20} height={20} />
              <p key={point.id} className="pl-2">
                {point.text}
              </p>
            </div>
          ))}
          <div className="bg-gray-800 text-white py-4 px-6 space-y-4">
            <p>All of this happens while you’re asleep or offline.</p>
            <p>
              {" "}
              Here&apos;s what most successful trading communities on Telegram
              have to deal with:{" "}
            </p>
            <p>To make it work, they have to:</p>
            {tasks.map((task) => (
              <div className="flex items-start justify-start" key={task.id}>
                <Image
                  src={checkMark}
                  alt="check mark"
                  width={20}
                  height={20}
                />
                <p key={task.id} className="pl-1">
                  {task.text}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <p>
              Because of human error, they often fail to catch freeloaders who
              sneak into their communities.
            </p>
            <p>
              This results in additional costs and a huge time investment. They
              have to outsource 80%-90% of the work, which allows them to focus
              on other things while still making good money.
            </p>
            <p>
              But with GroupShepherd&apos;s Digital Real Estate Method, you can
              achieve the same level of success—without all the hassle.
            </p>
            <p>
              You can make up to ₦125,000 per week—and actually, a lot
              more—without doing any of the work they do.
            </p>
            <p className="font-bold text-2xl text-center ">
              We&apos;ve Done 90% Of The <br /> Work For You
            </p>
            <p>And the other 10%?</p>
            <p>It requires just 1 hour of focused effort every day.</p>
            <p>
              And it&apos;s as simple as setting up your community and letting
              GroupShepherd do the rest.
            </p>
            <p>
              But here&apos;s the best part: with GroupShepherd, you&apos;ll
              generate enough recurring income to take care of yourself and your
              loved ones—without spending countless hours managing your
              community.
            </p>
            <p>So, what does that 10% look like?</p>
            <p>I&apos;ll tell you in a second.</p>
            <p>
              But first, let me share a little about the business model that
              powers GroupShepherd.
            </p>
            <p className="font-bold text-3xl text-red-600">I call it…</p>
          </div>
          <div className="space-y-4 leading-7 bg-blue-300 py-4 px-6">
            <div>
              <p className="font-bold text-center text-3xl">
                The DIGITAL REAL ESTATE METHOD.
              </p>
            </div>
            <p>
              This is the most efficient, automated, and profitable business
              model we&apos;ve created after years of working with community
              leaders and content creators.
            </p>
            <p>Here&apos;s why it works so well:</p>
            <p>
              After working with countless Telegram community owners, I realized
              something crucial:
            </p>
            <p>
              Not everyone has the time to manage every aspect of their
              community full-time.
            </p>
            <p>
              Many coaches and educators want a simple way to earn money while
              focusing on what they do best—delivering value to their members.
            </p>
            <p>
              The problem is, most systems are overly complex and require
              endless hours of manual work.
            </p>
            <p>
              But with <span className="font-bold">GroupShepherd</span>,
              I&apos;ve eliminated all that.
            </p>
            <p>
              we&apos;ve built a system that automates 90% of the work—leaving
              you to focus on growing your community, engaging your members, and
              making money.
            </p>
            <p>
              <span className="font-bold">GroupShepherd</span> handles
              everything from billing and spam prevention to affiliate
              commissions, saving you time and headache
            </p>
            <p></p>
          </div>
          <div className="py-4 px-6 space-y-4">
            <p className="font-bold text-3xl text-center">
              If You&apos;ve Ever Tried To Make Money From Teaching Your Trading
              Expertise Without Succeeding
            </p>{" "}
            <p>Then you know this is a very frustrating place to be.</p>
            <p>
              Spending hours trying to market your community, attract members,
              keep them engaged, and turn your expertise into consistent profits
              can leave you burned out—before you even make your first
              breakthrough.
            </p>
            <p>
              That&apos;s why we decided to create a business model specifically
              for traders who:
            </p>
            <div className="space-y-3">
              {pointete.map((point, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
            <p className="underline text-transfrom:upppercase text-3xl font-semibold text-blue-600">
              In short, we&apos;ve designed a solution that does all the HARD
              WORK for you.
            </p>
          </div>
          <div className="bg-blue-700 py-6 px-8">
            <div className="p-2 bg-blue-400">
              <p className="text-3xl font-bold text-center">
                Here&apos;s What You Get With
              </p>
            </div>
            <div className="space-y-3 py-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 rounded-full bg-white p-2">
                    ✔️
                  </span>
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <p>And here&apos;s the best part:</p>
          <p>You don&apos;t need to worry about any of the technicalities.</p>
          <div className="space-y-4 leading-7">
            <div className="text-2xl lg:text-3xl font-semibold text-center">
              Now, I Can Almost Hear What You&apos;re Thinking…
            </div>
          </div>
          <p>“So, if all of this is already in place, where do I come in?” </p>{" "}
          <p className="font-bold">
            What&apos;s the 10% of work I&apos;ll be doing?
          </p>
          <p>I&apos;ll tell you—it&apos;s incredibly simple.</p>
          <p>With GroupShepherd, your role is just to:</p>
          <div className="space-y-3">
            {communitySetupSteps.map((step, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✔️</span>
                <span className="text-gray-700">{step}</span>
              </div>
            ))}
          </div>
          <p>The rest? It&apos;s all handled for you.</p>
          <p>
            We&apos;ve created an efficient, low-maintenance business model that
            allows you to focus on sharing your expertise while we take care of
            the operations.
          </p>
        </div>
        <div className="mt-4 py-4 px-6 text-gray-900 ">
          <div className="text-4xl font-bold text-center underline">
            Here&apos;s How It Works.....
          </div>
          <p className="mt-5 font-semibold text-md">
            Heres how your dashboard will look....
          </p>
          <div className="mt-5 border-2 border-dashed border-blue-300 py-4 px-6">
            <Image src={heroImage} alt="dashboard Image" />
          </div>
          <div className="space-y-6">
            {stepsWithImages.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-start bg-white p-4 rounded-lg shadow-md"
              >
                <Image
                  src={step.image}
                  alt={`Step ${index + 1}`}
                  width={700}
                  height={700}
                />
                <div className="flex items-start py-4">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-gray-700 text-lg">{step.text}</span>
                </div>
              </div>
            ))}
            <p>
              With these simple steps, you could start making at least{" "}
              <span className="font-bold pr-1">₦125,000</span>
              or more every week.
            </p>
            <p>No hassles, no stress, no technical worries.</p>
            <p>
              Like I said before, all the hard work is already done for you.
            </p>
            <div className="leading-7 space-y-4">
              <div
                className="text-center text-white font-bold text-3xl py-4 px-6 rounded-md"
                style={{ backgroundColor: "#0b3f71" }}
              >
                High-Value, High-Demand Solution That Practically Markets Itself
              </div>
              <p>
                One of the biggest advantages of paid community management with
                Group Shepherd is that people already recognize the value of
                being part of exclusive, well-managed groups.
              </p>
              <p>Think about it:</p>
              <p>
                If someone is part of a thriving Telegram group where they gain
                valuable insights, exclusive content, or business opportunities,
                they&apos;re already motivated to stay in that group.
              </p>
              <p>
                The challenge isn&apos;t convincing them to join but ensuring
                they remain part of the group while contributing their fair
                share.
              </p>
              <p>And here&apos;s the best part:</p>
              <p>
                You don&apos;t need to manage group payments manually or chase
                members for subscriptions.
              </p>
              <p>Group Shepherd automates all of that for you.</p>
              <p>
                Let&apos;s compare it to other digital solutions: With typical
                digital products—courses, mentorship, ebooks, etc.—you often
                need to:
              </p>
              <p>Convince people why they need your trading knowledge.</p>
              <p>Prove the value of your specific knowledge.</p>
              <p>Build trust so they feel safe making a purchase.</p>
              <p>
                With Group Shepherd, people already know the value of your
                community. All you need to do is set up the system to ensure
                they pay for access — and let Group Shepherd handle the rest.
              </p>
              <p className="font-semibold">
                You are marketing signal results and not potential benefits.
              </p>
            </div>
            <div className="bg-gray-800 text-white ">
              <div className="text-center text-3xl font-bold"></div>
            </div>
          </div>
          <div className="space-y-6 mt-[30px] py-6 px-8 border-dashed border-4 border-black shadow-lg">
            <div className="text-3xl font-bold text-center text-red-600 ">
              WHY <span style={{ color: "#0b3f71" }}>COMMUNITY MANAGEMENT</span>{" "}
              IS <span className="text-gray-900">EVERGREEN</span>?
            </div>
            <p className="leading-6">
              Paid communities are on the rise, especially in Nigeria. Whether
              it&apos;s forex trading groups, mentorship programs, or niche
              hobby groups, people are willing to pay to belong to spaces where
              they can:
            </p>
            <div className="space-y-4 flex flex-col ">
              <p>
                Especially in the crypto space, while meme coins are on the rise
              </p>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span>
                <span className="text-gray-700 text-lg">Learn new skills.</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span>
                <span className="text-gray-700 text-lg">
                  Access exclusive information
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span>
                <span className="text-gray-700 text-lg">
                  Network with like-minded individuals.
                </span>
              </div>
            </div>
            <p>And here&apos; the proof:</p>

            <p>
              Paid membership communities are generating millions every year,
              both globally and locally. Communities on platforms like Telegram
              are thriving, with members happy to pay for the value they get
            </p>
          </div>
          <div
            style={{ backgroundColor: "#0b3f71" }}
            className="space-y-6 mt-[50px] py-6 px-8 shadow-lg"
          >
            <div className="font-bold text-center text-white text-3xl p-4">
              Why Group Shepherd is Your Best Choice
            </div>
            <div className="space-y-6 leading-6 text-white">
              <p className="leading-6">
                Unlike other tools or systems, Group Shepherd is designed
                specifically for community managers who want to focus on
                delivering value while leaving the admin work to automation.
              </p>

              <p>Here&apos;s what makes Group Shepherd unique:</p>

              <div className="space-y-4">
                {unique.map((item, index) => (
                  <div key={index}>
                    <div>
                      <div className="font-semibold text-lg">{item.title}</div>
                    </div>

                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6 mt-[50px] py-6 px-8 shadow-lg bg-gray-300 text-black">
            <div className="font-bold text-3xl text-center p-4">
              How Selling Subscriptions is Easier Than Ever
            </div>
            <div className="space-y-4 leading-6">
              <p>
                We&apos;ve spent months perfecting the tools and strategies that
                allow community managers like you to focus on what you do best:
                engage your audience.
              </p>
              <p>
                <span className="p-1 rounded-full bg-cyan-400 mr-2"></span>
                Everything else is already handled:
              </p>
              <p>
                <span className="p-1 rounded-full bg-cyan-400 mr-2"></span>The
                automation tools.
              </p>
              <p>
                <span className="p-1 rounded-full bg-cyan-400 mr-2"></span>The
                payment system.
              </p>
              <p>
                <span className="p-1 rounded-full bg-cyan-400 mr-2"></span>The
                member management system.
              </p>
              <p className="mt-2">
                You don&apos;t have to worry about chasing payments or removing
                inactive members. Group Shepherd does all of that on autopilot.
              </p>
              <p>
                This means you can concentrate on creating value for your
                community while enjoying a steady income stream.
              </p>

              <div className="mt-[50px] text-center font-bold text-2xl">
                This is Your Plug-and-Play Community Monetization Tool
              </div>
              <p>
                Imagine running a community where all you do is provide value,
                while Group Shepherd handles:
              </p>
              <p>
                {" "}
                <span className="p-1 rounded-full bg-red-500 mr-2"></span>
                Payments
              </p>
              <p>
                <span className="p-1 rounded-full bg-red-500 mr-2"></span>Member
                Verification
              </p>
              <p>
                <span className="p-1 rounded-full bg-red-500 mr-2"></span>
                Automated reminders
              </p>
              <p>
                <span className="p-1 rounded-full bg-red-500 mr-2"></span>Access
                enforcement for non-paying members
              </p>
            </div>
          </div>
          <div className="space-y-6 mt-[50px]">
            <div className="font-bold text-center text-3xl text-blue-600 p-2">
              Are You Ready to Monetize Your Community Effortlessly?
            </div>
            <p>
              If you&apos;re ready to turn your community into a reliable source
              of income with minimal effort, Group Shepherd is for you.
            </p>
            <p>Here&apos;s what you need to know before you start:</p>
            <p className="font-semibold">1. You Need to Commit:</p>
            <p>
              This system works best for those who actively manage their
              communities. It&apos;s not a “set and forget” tool.{" "}
            </p>
            <p>
              You&apos;ll need to dedicate at least an hour each day to engage
              with your group and provide value.
            </p>
            <p className="mt-4 font-semibold">
              2. This is a Serious Opportunity:
            </p>
            <p>
              When you sign up, you&apos;re committing to learning the process
              and making it work.{" "}
            </p>
            <p>
              If you&apos;re not ready to trust the system and see it through,
              this isn&apos;t for you.
            </p>
          </div>
          <div className="mt-[50px] space-y-4">
            <p>
              If you&apos;re ready to join a platform designed to simplify your
              community management
            </p>
            <p>and help you earn consistently,</p>
            <p className="font-semibold">
              Group Shepherd is ready to welcome you.
            </p>
            <p className="font-semibold mt-5 py-4 text-2xl text-red-600">
              Click below to start your journey
            </p>
            <button className="font-semibold text-2xl py-4 px-6 rounded-md text-white bg-blue-900 text-center w-full">
              <div className="flex items-center justify-center">
                <Link
                  href="https://wa.link/l1iqim"
                  className="flex items-center justify-center"
                >
                  {" "}
                  Click Here To Register With Group Shepherd
                  <ArrowRightCircleIcon className="ml-2" />
                </Link>
              </div>
            </button>
          </div>
          <div className="space-y-6 mt-[70px]">
            <div
              style={{ backgroundColor: "#0b3f71" }}
              className="text-2xl font-semibold text-white py-4 px-6 text-center rounded-md"
            >
              Here&apos;s What You&apos;re Getting When You Join Group Shepherd
              Today…
            </div>
            <p className="font-semibold">Are you not loving this?...</p>
            <p>
              When you sign up for Group Shepherd, you&apos;re not just getting
              software—you&apos;re getting a complete solution to transform how
              you manage, monetize, and grow your paid Telegram communities.
            </p>
            <p>
              From automated management to payment enforcement and hands-free
              member tracking
            </p>
            <p>
              Group Shepherd gives you everything you need to build a thriving,
              profitable community.
            </p>
            <p className="text-3xl font-semibold text-center mt-4">
              Here&apos;s What is Inside Your Group Shepherd Account
            </p>
            <div className="bg-gray-300 py-4 px-6  space-y-4">
              <div className="h-[200px] flex items-center justify-start gap-4">
                <div className="bg-red-500 h-full w-[7px]"></div>
                <div>
                  <p className="font-semibold text-lg mb-3">
                    1. Automated Payment Enforcement
                  </p>{" "}
                  No more chasing payments or dealing with unpaid members. Group
                  Shepherd automatically: Verifies member payments Tracks
                  subscription statuses Removes non-paying or expired members
                  immediately This means you can focus on running your
                  community, knowing that every member in your group has paid
                  their dues.
                </div>
              </div>
              <div className="h-[200px] flex items-center justify-start gap-4">
                <div className="bg-red-500 h-full w-[7px]"></div>
                <div>
                  <p className="font-semibold text-lg mb-3">
                    2. Seamless Payment Processing
                  </p>{" "}
                  We&apos;ve partnered with Lemon Squeezy and paystack, two of
                  the most trusted global payment processors, to ensure you can
                  collect payments from over 130 countries, including Nigeria.
                  Whether it&apos;s a debit card, credit card, or local bank
                  transfer, we&apos;ve got you covered. Your funds are deposited
                  directly into your account—no delays, no hassle.
                </div>
              </div>
              <div className="h-[350px] flex items-center justify-start gap-4 mb-[100px]">
                <div className="bg-red-500 h-full w-[7px]"></div>
                <div>
                  <p className="font-semibold text-lg mb-3">
                    3. Member Analytics Dashboard
                  </p>{" "}
                  Stay in control with real-time insights into your community.
                  With our intuitive dashboard, you&apos;ll be able to track:
                  <div className="p-4 space-y-2">
                    <p>Total active members</p>
                    <p>Revenue generated</p>
                    <p>Subscription renewals</p>
                    <p>Membership churn rates</p>
                    <p>
                      These insights allow you to make data-driven decisions to
                      grow your community faster.
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[400px] flex items-center justify-start gap- mt-[100px]">
                <div className="bg-red-500 h-full w-[7px]"></div>
                <div className="ml-4">
                  <p className="font-semibold text-lg mb-3">
                    4. Flexible Pricing Plans
                  </p>{" "}
                  We&apos;ve made it easy to scale, no matter the size of your
                  community. Charge your members based on group size with these
                  affordable pricing tiers:
                  <div className="space-y-4 py-4 px-6 ">
                    <p>10–50 Members: ₦3,000/month or ₦30,000/year</p>
                    <p>51–100 Members: ₦5,000/month or ₦50,000/year</p>
                    <p>101–250 Members: ₦10,000/month or ₦100,000/year</p>
                    <p>251–500 Members: ₦15,000/month or ₦150,000/year</p>
                    <p>501–1000 Members: ₦25,000/month or ₦250,000/year</p>
                    <p>1001+ Members: Custom Pricing.</p>
                    <p>
                      This pricing structure ensures your community remains
                      profitable as you grow.
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[400px] flex items-center justify-start gap- mt-[100px]">
                <div className="bg-red-500 h-full w-[7px]"></div>
                <div className="ml-4">
                  <p className="font-semibold text-lg mb-3">
                    5. Hassle-Free Member Management
                  </p>{" "}
                  With Group Shepherd, managing your community has never been
                  easier. We handle:
                  <div className="space-y-4 py-4 px-6 ">
                    <p>
                      <span className="font-semibold">Onboarding: </span> New
                      members are seamlessly added after payment verification.
                    </p>
                    <p>
                      <span className="font-semibold">Renewals: </span> Members
                      are automatically reminded to renew before their
                      subscription expires.
                    </p>
                    <p>
                      <span className="font-semibold"> Removals:</span>
                      Non-paying members are automatically removed, protecting
                      the integrity of your group.
                    </p>

                    <p>
                      This hands-free management ensures that your group remains
                      organized, exclusive, and valuable to paying members.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[70px]">
            <div className="font-semibold text-xl">
              And That&apos;s Not All! You&apos;re Also Getting These Exclusive
              Bonuses When You Join Today:
            </div>
            <div className="space-y-6 mt-[60px] py-4 px-6">
              <div className="space-y-4">
                {bonuses.map((item, index) => (
                  <div key={index} className="">
                    <div className="p-4 font-semibold text-2xl  text-white bg-green-600">
                      <div key={index}>{item.title}</div>
                    </div>
                    <div
                      style={{ backgroundColor: "#0b3f71" }}
                      className="text-white py-4 px-3 text-lg leading-7"
                    >
                      <div className="" key={index}>
                        {item.body}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 leading-7 py-4 px-6 bg-gray-300 rounded-md">
            <div className="py-4 px-6 font-semibold text-3xl">
              Why Choose Group Shepherd?
            </div>
            <p>Recurring Income Opportunities</p>
            <p>
              Unlike one-time sales, Group Shepherd empowers you to build a
              steady stream of recurring income through subscription-based
              communities
            </p>
            <p>This means consistent revenue, month after month.</p>
            <p>Your Members, Your Asset</p>
            <p>
              With Group Shepherd, you&apos;ll have full access to your member
              database, including names, emails, and phone numbers.{" "}
            </p>
            <p>This allows you to:</p>
            <p>
              <span className="p-1 rounded-full bg-red-500 mr-2"></span>Build
              stronger relationships with your members
            </p>
            <p>
              <span className="p-1 rounded-full bg-red-500 mr-2"></span>Upsell
              additional products or services
            </p>
            <p>
              <span className="p-1 rounded-full bg-red-500 mr-2"></span>Create
              more personalized experiences
            </p>
            <p>Weekly Payouts to Your Bank Account</p>
            <p>
              Every Monday is payday. No delays, no deductions—just your
              hard-earned income directly in your preferred bank account.
            </p>
          </div>
          <div className="space-y-4 leading-7 py-4 px-6 bg-gray-100 rounded-md mt-[30px]">
            <div className="text-3xl text-center">
              “Okay Emmanuel , I&apos;m In! I Love Everything I&apos;ve Heard So
              Far. . . I Want to Sign Up Right Now. How Much Will It Cost Me to
              Use Group Shepherd?”
            </div>
            <p>If that&apos;s the case, here&apos;s what you must know.</p>
            <p>
              Normally, a tool like Group Shepherd, with its level of automation
              and efficiency, could easily cost ₦250,000 or more per year, and
              it&apos;d still be a bargain.
            </p>
            <p>
              After all, we&apos;ve invested countless hours perfecting this
              system to ensure managing and monetizing your Telegram group
              becomes effortless and profitable.
            </p>
            <p>With Group Shepherd, you&apos;ll have a system that:</p>
            <p>
              <span className="p-1 rounded-full bg-red-700 mr-2"></span>
              Automatically enforces payments so you’ll never have to worry
              about unpaid members again.
            </p>
            <p>
              {" "}
              <span className="p-1 rounded-full bg-red-700 mr-2"></span>Saves
              you hours of manual admin work every week.
            </p>
            <p>
              <span className="p-1 rounded-full bg-red-700 mr-2"></span>
              Helps you earn more consistently by ensuring only paying members
              remain in your group.
            </p>
            <p>And you&apos;ll also gain access to:</p>
            <p>
              {" "}
              <span className="p-1 rounded-full bg-blue-700 mr-2"></span>A clear
              analytics dashboard to track your growth and revenue.
            </p>
            <p>
              {" "}
              <span className="p-1 rounded-full bg-blue-700 mr-2"></span>Support
              and guidance to help you get the most out of the platform.
            </p>
            <p>
              {" "}
              <span className="p-1 rounded-full bg-blue-700 mr-2"></span>
              Exclusive bonuses to grow and scale your community faster.
            </p>
            <p className="font-semibold mt-2">
              So even if I priced this at ₦250,000, it&apos;d still be a steal,
              compared to what Group Shepherd will do for your paid community.
            </p>
          </div>
          <div className="space-y-4 leading-7 py-4 px-6 bg-gray-100 rounded-md mt-[30px]">
            <p className="text-2xl">
              {" "}
              However, we know not everyone managing a community can afford
              ₦250,000 upfront.
            </p>
            <p>
              {" "}
              That&apos;s why we&apos;ve made the investment affordable,
              especially for those looking to grow their communities and build a
              reliable source of income.
            </p>
            <p> If you&apos;re ready to get started today… </p>
            <p>
              {" "}
              You won&apos;t pay anywhere close to ₦250,000 or even ₦100,000.
            </p>
            <p>Your investment?</p>
            <p>It starts at just:</p>
            <p className="font-bold">
              ₦3,000/month or ₦30,000/year for groups with 10–50 members.
            </p>
            <p>
              As your group grows, you can easily upgrade to the next tier. This
              means you only pay based on the size of your group. Fair, right?
            </p>
            <p>
              And remember, no extra fees or hidden charges. You&apos;re in
              control.
            </p>
            <p className="font-semibold text-lg text-center m-[50px] text-red-600">
              Once your payment is processed, you&apos;ll get immediate access
              to everything I&apos;ve promised today.
            </p>
            <p>To recap, here&apos;s what you get:</p>
            <p>
              {" "}
              <span className="block mb-2 ">
                <span className="text-green-500 mr-2 rounded-full bg-white p-2">
                  ✅
                </span>
                <span className="text-xl font-semibold text-black ">
                  Group Shepherd Subscription{" "}
                </span>
              </span>
              All the automation and payment enforcement tools you need to run
              your community with zero stress.
            </p>
            <p>
              {" "}
              <span className="block mb-2 ">
                <span className="text-green-500 mr-2 rounded-full bg-white p-2">
                  ✅
                </span>
                <span className="text-xl font-semibold text-black ">
                  Community Growth Blueprint
                </span>
              </span>
              A step-by-step guide to grow and monetize your Telegram group.
            </p>
            <p>
              {" "}
              <span className="block mb-2 ">
                <span className="text-green-500 mr-2 rounded-full bg-white p-2">
                  ✅
                </span>
                <span className="text-xl font-semibold text-black ">
                  Access to Our Support Community
                </span>
              </span>
              Join other successful community owners, share strategies, and
              learn from each other.
            </p>
            <p>
              {" "}
              <span className="block mb-2 ">
                <span className="text-green-500 mr-2 rounded-full bg-white p-2">
                  ✅
                </span>
                <span className="text-xl font-semibold text-black ">
                  Referral Bonuses
                </span>
              </span>
              Earn 20% recurring commissions for every referral.
            </p>
            <p>
              {" "}
              <span className="block mb-2 ">
                <span className="text-green-500 mr-2 rounded-full bg-white p-2">
                  ✅
                </span>
                <span className="text-xl font-semibold text-black ">
                  Dedicated Support
                </span>
              </span>
              Get answers to your questions whenever you need help.
            </p>
            <p className="font-semibold text-xl mb-[30px] ">
              All of this for as low as ₦3,000 per month.
            </p>
            <p className="mt-[100px]">
              You can easily make that back within your first week by adding
              just one or two paying members to your group.
            </p>
            <p>
              This isn&apos;t just a tool—it&apos;s a system designed to help
              you build and grow a profitable community while saving time.
            </p>
          </div>
          <div className="bg-cyan-200 border-dashed border-4 border-red-600 py-6 px-8 font-semibold text-2xl text-center">
            It&apos;s about Having a reliable income source every month Spending
            less time on admin tasks and more time growing your business.
            Building a community that not only thrives but also generates
            consistent revenue.
          </div>
          <div className="space-y-4 leading-7 mt-[30px]">
            <p>
              If that&apos;s what you want, I&apos;m confident Group Shepherd
              will get you there faster than anything else you&apos;ve tried in
              the past.
            </p>
            <p>But remember, this offer is available right now.</p>
            <p>
              I&apos;m not going to hit you with fake scarcity tactics or
              deadlines. However, prices may change in the future as the
              platform evolves, so it&apos;s always best to secure your spot
              now.
            </p>
            <p>
              If you&apos;re ready to transform the way you manage and monetize
              your Telegram group…
            </p>
            <p className="font-semibold text-2xl">
              Click the button below to get started.
            </p>
            <button className="font-semibold text-2xl py-4 px-6 rounded-md text-white bg-blue-900 text-center w-full">
              <div className="flex items-center justify-center">
                <Link
                  href="https://wa.link/l1iqim"
                  className="flex items-center justify-center"
                >
                  {" "}
                  Click Here To Register With Group Shepherd
                  <ArrowRightCircleIcon className="ml-2" />
                </Link>
              </div>
            </button>
            <p> See you on the other side</p>
            <p> Oamen Emmanuel</p>
          </div>
        </div>
      </div>
    </main>
  );
};

const bonuses = [
  {
    title: "Bonus #1: Community Growth Blueprint",
    body: "       This comprehensive guide is packed with actionable steps to help you: Build a community that attracts paying members, Run engaging activities like weekly challenges, Q&A sessions, and case study reviews Retain your members with content they can't get anywhere else Even if you're starting from scratch, this blueprint will show you how to create a thriving, income-generating community.",
  },
  {
    title: "Bonus #2: Pre-Built Marketing Templates",
    body: "No marketing experience? No problem. You’ll receive: Ready-to-use social media posts, High-converting ad copy, Pre-written email campaigns, Follow-up scripts to close more sales. These templates are designed to help you attract paying members to your community without having to spend hours figuring out what to say or how to say it.",
  },
  {
    title: "Bonus #3: 6 Weeks Coaching Sessions",
    body: "Every week, we host live coaching calls and Q&A sessions where you can:Ask questions specific to your community goals, Learn advanced strategies for maximizing your income. Get personalized advice from our expert team These sessions are your chance to receive one-on-one support and guidance to ensure your success",
  },
  {
    title: "Bonus #4: Member Referral Program",
    body: "Want to earn more income? Group Shepherd’s referral program makes it easy. Here’s how it works:Share your unique referral link with other group owners. Earn 20% recurring commissions for the lifetime of their account This bonus income is a simple way to grow your revenue alongside your community",
  },
  {
    title: "Bonus #5: Exclusive Telegram Support Community",
    body: "When you join Group Shepherd, you become part of our partners-only Telegram group. Inside, you’ll: Get real-time support from our dedicated team, Collaborate with other community owners, Share strategies, insights, and success stories. This community is your go-to resource for scaling your group and increasing your income.",
  },
];
const insideAccount = [
  {
    title: "Automated Payment Enforcement",
    body: "No more chasing payments or dealing with unpaid members. Group Shepherd automatically Verifies member payment Tracks subscription statusesRemoves non-paying or expired members immediately This means you can focus on running your community, knowing that every member in your group has paid their dues",
  },
  {
    title: "Seamless Payment Processing",
    body: "We’ve partnered with Lemon Squeezy, one of the most trusted global payment processors, to ensure you can collect payments from over 130 countries, including Nigeria. Whether it’s a debit card, credit card, or local bank transfer, we’ve got you covered.Your funds are deposited directly into your account—no delays, no hassle",
  },
  {
    title: ". Member Analytics Dashboard",
    body: "Stay in control with real-time insights into your community. With our intuitive dashboard, you’ll be able to track:Total active membersRevenue generatedSubscription renewalsMembership churn rates These insights allow you to make data-driven decisions to grow your community faster.",
  },
  {
    title: "Flexible Pricing Plans",
    body: "We’ve made it easy to scale, no matter the size of your community. Charge your members based on group size with these affordable pricing tiers:10–50 Members: ₦3,000/month or ₦30,000/year51–100 Members: ₦5,000/month or ₦50,000/year101–250 Members: ₦10,000/month or ₦100,000/year251–500 Members: ₦15,000/month or ₦150,000/year501–1000 Members: ₦25,000/month or ₦250,000/year1001+ Members: Custom Pricing.This pricing structure ensures your community remains profitable as you grow.",
  },
  {
    title: "Hassle-Free Member Management",
    body: "With Group Shepherd, managing your community has never been easier. We handle:Onboarding: New members are seamlessly added after payment verification.Renewals: Members are automatically reminded to renew before their subscription expires.Removals: Non-paying members are automatically removed, protecting the integrity of your group.",
  },
];

const unique = [
  {
    title: "Automation:",
    body: "Group Shepherd handles subscription payments, member verification, and payment enforcement seamlessly. No manual intervention is needed.",
  },
  {
    title: "Flexibility:",
    body: "Set your own subscription fees — whether it’s ₦5,000/month or ₦50,000/year, you’re in full control.",
  },
  {
    title: "Reliability:",
    body: "With integrations for secure payments (e.g., Lemon Squeezy), Group Shepherd ensures transactions are smooth and hassle-free.",
  },
  {
    title: "Customer Focus:",
    body: "Your community members get automatic reminders when payments are due, ensuring a frictionless experience.",
  },
  {
    title: "Scalability:",
    body: "Whether your group has 10 members or 10,000, Group Shepherd grows with you.",
  },
  {
    title: "Marketing Expertise:",
    body: "Our marketing team will help you with your offers, marketing materials and fliers through our Digital Real estate funnel system",
  },
];

const features = [
  "We’ve automated your subscription management: Members are billed automatically, and those who don’t pay are removed from your group without you lifting a finger.",
  "Spam-proof your group: No more fliers, links, or irrelevant content distracting your members.",
  "Keep track of your members' data: Names, emails, and phone numbers are securely stored for you.",
  "Drive retention with irresistible group activities: Make your community so valuable that your members will never want to leave.",
  "Create recurring revenue effortlessly: Get paid every month without manual follow-ups or reminders.",
];

const communitySetupSteps = [
  "Set up your community with a few clicks.",
  "Add your group members and let the system take over.",
  "Engage with your members for just 1 hour a day.",
];

const stepsWithImages = [
  {
    text: "Step 1: You log into your GroupShepherd account (which we’ll open for you today if you join us).",
    image: gslp, // Replace with your image URL
  },
  {
    text: "Step 2: Connect your Telegram account.",
    image: cntg, // Replace with your image URL
  },
  {
    text: "Step 3: Add GroupShepherd to your Telegram Group.",
    image: atg, // Replace with your image URL
  },
  {
    text: "Step 4: Set your payment settings. Set how much you want your members to pay for on a monthly or yearly basis. For example, you can have a N5000 a month or a N50000 to make people pay more upfront to get two months for free.",
    image: sgp, // Replace with your image URL
  },
  {
    text: "Step 5: Start receiving your payments.",
    image: gsgs, // Replace with your image URL
  },
];
export default page;
