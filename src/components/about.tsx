import { StickyCards } from "./StickyCards";

export const About = () => {
  return (
    <div className="h-dvh py-40 min-h-fit  bg-[#f3f3f0]">
      <h1 className="text-[12.5rem] text-right leading-none  px-6 text-[#191917]">
        About Me.
      </h1>
      <StickyCards
        slideNum="01"
        topLeftText="When the Path Wasn’t Clear"
        topRightText={
          <>
            I didn’t grow up with a clear roadmap into tech. Learning was
            self-driven, opportunities were limited, and progress depended on
            persistence.
            <br />
            <br />
            Programming quickly became my identity. I spent countless hours
            learning JavaScript, React, and modern tools—building, breaking, and
            rebuilding until things clicked.
            <br />
            <br />
            By 2024, I wasn’t just studying code. I was shipping projects,
            leading teams, and teaching others.
          </>
        }
        bottomLeftText="Lesson carried forward:"
        bottomRightText={
          <>
            I know how to build from zero—adapt fast, lead when needed, and keep
            moving forward without waiting for a Plan B.
          </>
        }
      />
      <StickyCards
        slideNum="02"
        topLeftText="Shipping Real Products"
        topRightText={
          <>
            At nockta®, I worked on production e-commerce websites used by real
            customers.
            <br />
            <br />
            I built and customized Shopify stores using React and Shopify
            Liquid, added smooth GSAP animations, and optimized performance,
            SEO, and responsiveness.
            <br />
            <br />
            Every feature had a business impact—speed, clarity, and reliability
            mattered.
          </>
        }
        bottomLeftText="What it taught me"
        bottomRightText={
          <>
            Building for real users means owning quality, performance, and
            long-term maintainability—not just making things look good.
          </>
        }
      />

      <StickyCards
        slideNum="03"
        topLeftText="From Learning to Teaching"
        topRightText={
          <>
            After graduating, I worked as a Teaching Assistant at my university.
            <br />
            <br />
            I assisted in teaching programming fundamentals, guided students
            through practical exercises, and supported them during lab sessions.
            <br />
            <br />I also evaluated students’ performance, ensuring clarity,
            fairness, and real understanding.
          </>
        }
        bottomLeftText="What it taught me"
        bottomRightText={
          <>
            Explaining fundamentals sharpened my thinking, strengthened my
            communication, and reinforced the value of patience and clarity.
          </>
        }
      />

      <StickyCards
        slideNum="04"
        topLeftText="Growing Under Pressure"
        topRightText={
          <>
            Through DEPI, I worked on multiple projects, under tight timelines.
            <br />
            <br />
            I led teams, coordinated tasks, and delivered milestones ahead of
            schedule while continuously learning.
            <br />
            <br />
            Speed and structure had to coexist.
          </>
        }
        bottomLeftText="What it taught me"
        bottomRightText={
          <>
            Adaptability, ownership, and teamwork are just as critical as
            technical skill when deadlines are real.
          </>
        }
      />
    </div>
  );
};
