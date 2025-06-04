'use client';

import Link from "next/link"
// import devCover from "./dev-cover-image.png"
// import companyCover from "./dev-bounty-dev-image.png"
// import Image from "next/image"
import worldAnimation from "../lotties/Animation - 1748515716182.json"
import Lottie from "lottie-react";
import devSetting from "../lotties/Animation - 1748516866244.json"
import devAnimation from "../lotties/Animation - 1748516317237.json"
import { ArrowRight, Code, DollarSign, Trophy, Github, Twitter, Linkedin, MailIcon} from "lucide-react"

import { Button } from "../../components/button"


export const runtime = "edge";

export default function LandingPage() {

  // for the 3D stunt
  // const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  // const renderer = new THREE.WebGLRenderer();
  // renderer.setSize( window.innerWidth, window.innerHeight );
  // document.body.appendChild( renderer.domElement );

  // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  // const cube = new THREE.Mesh( geometry, material );
  // scene.add( cube );

  // camera.position.z = 5;

  // function animate() {
  //   renderer.render( scene, camera );
  // }
  // renderer.setAnimationLoop( animate );
  // for the 3D stunt

  return (
    <div className="flex min-h-[100dvh] flex-col mr-[-20px] md:mr-0 ml-0 mr-0 justify-center align-center">
      <header className="sticky top-0 z-50 md:mr-5 md:ml-5 mr-[-6.5rem] border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            <span className="text-xl font-bold">Mana</span>
          </div>
          {/* <nav className="hidden md:flex gap-6">
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#for-developers" className="text-sm font-medium hover:text-primary">
              For Developers
            </Link>
            <Link href="#for-companies" className="text-sm font-medium hover:text-primary">
              For Companies
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
          </nav> */}
          <a href="https://mail.google.com/mail/?view=cm&to=ajeemmanuel221@gmail.com&su=General%20Feedback">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="lg" className="sm:p-20 md:p-1 p-1 outline-none md:opacity-[100] opacity-[0]">Give Feedback</Button>
            </div>
          </a>
        </div>
      </header>
      <main className="flex-1 ml-0 p-0">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Turn Your Code Into Cash
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join thousands of developers earning through hackathons and bounties. We connect talented developers
                    with companies offering paid challenges.
                  </p>
                </div>
                <div className="flex flex-col gap-1 min-[400px]:flex-row">
                  <a href="https://mail.google.com/mail/?view=cm&to=ajeemmanuel221@gmail.com&su=General%20Feedback">

                    <Button size="lg">
                      Meet Us as Sponsor
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="https://mail.google.com/mail/?view=cm&to=ajeemmanuel221@gmail.com&su=General%20Feedback">
                  
                    <Button className="pr-[10px]" size="lg" variant="outline">
                      Contact Us as Developer
                    </Button>
                  </a>
                </div>
                <div className="flex items-center space-x-10 text-sm">
                  <div className="flex -space-x-2">
                    {[
                      "https://picsum.photos/200/112",
                      "https://picsum.photos/200/222",
                      "https://picsum.photos/200/201",
                      "https://picsum.photos/200/200"
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Avatar ${i + 1}`}
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-background object-cover"
                      />
                    ))}
                  </div>
                  <div className="text-muted-foreground text-[10px] md:text-sm lg:text-sm pr-[15px]">
                    Join <span className="font-medium text-foreground">many</span> developers already earning
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-muted md:h-[450px]">
                  {/* <Image
                    src="./public/dev-cover-image.png"
                    alt="Developers collaborating"
                    fill
                    className="object-cover"
                    /> */}
                    <Lottie animationData={devAnimation} loop={true} autoplay={true} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How It Works</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our platform makes it easy to find and participate in paid coding challenges
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Find Challenges</h3>
                <p className="text-center text-muted-foreground">
                  Browse through hundreds of hackathons and bounties posted by companies looking for solutions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Submit Solutions</h3>
                <p className="text-center text-muted-foreground">
                  Work on challenges that match your skills and submit your solutions before the deadline.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Get Paid</h3>
                <p className="text-center text-muted-foreground">
                  Win bounties and get paid directly to your account. No delays, no complications.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="for-developers" className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex items-center justify-center lg:order-last">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-muted md:h-[450px]">
                  <Lottie animationData={devSetting} loop={true} autoplay={true} />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">For Developers</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Turn your coding skills into a reliable income stream
                  </p>
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <span>Access to exclusive paid challenges from top companies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <span>Flexible work schedule - participate when you want</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <span>Build your portfolio with real-world projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <span>Network with other developers and potential employers</span>
                  </li>
                </ul>
                <div>
                  <a href="https://mail.google.com/mail/?view=cm&to=ajeemmanuel221@gmail.com&su=General%20Feedback">
                  <Button size="lg" variant="outline">
                    Join as a Developer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="for-companies" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-muted md:h-[450px]">
                  {/* <Image src={companyCover} alt="Company team" className="object-cover" /> */}
                  <Lottie animationData={worldAnimation} loop={true} autoplay={true} />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">For Companies</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Access a global talent pool of skilled developers ready to solve your challenges
                  </p>
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <span>Post bounties for specific features or bug fixes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <span>Host hackathons to find innovative solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <span>Discover and recruit top developer talent</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <span>Pay only for results, not for time</span>
                  </li>
                </ul>
                <div>
                  <a href="https://mail.google.com/mail/?view=cm&to=ajeemmanuel221@gmail.com&su=General%20Feedback">
                    <Button size="lg" variant="outline">
                      Post a Bounty
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Featured Bounties</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Check out some of our current opportunities
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col space-y-4 rounded-lg border p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Frontend</span>
                  <div className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    $1,500
                  </div>
                </div>
                <h3 className="text-xl font-bold">React Dashboard Component</h3>
                <p className="flex-1 text-muted-foreground">
                  Build a responsive analytics dashboard with charts and filters using React and D3.js.
                </p>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Backend</span>
                  <div className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    $2,000
                  </div>
                </div>
                <h3 className="text-xl font-bold">API Performance Optimization</h3>
                <p className="flex-1 text-muted-foreground">
                  Optimize a Node.js API to handle 10x more requests without increasing server costs.
                </p>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Mobile</span>
                  <div className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    $3,000
                  </div>
                </div>
                <h3 className="text-xl font-bold">React Native Payment Flow</h3>
                <p className="flex-1 text-muted-foreground">
                  Implement a secure payment flow in a React Native app with Stripe integration.
                </p>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Button size="lg" variant="outline">
                View All Bounties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section> */}

        {/* <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What People Are Saying</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Hear from developers and companies who've used our platform
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "I've earned over $20,000 in the past year working on bounties. It's become my main source of income
                    while I travel the world."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200" />
                  <div>
                    <p className="text-sm font-medium">Alex Johnson</p>
                    <p className="text-sm text-muted-foreground">Frontend Developer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "The quality of developers on this platform is exceptional. We've found solutions to complex
                    problems in record time."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200" />
                  <div>
                    <p className="text-sm font-medium">Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">CTO, TechStart Inc.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "As a self-taught developer, bounties have been the perfect way to prove my skills and build a
                    professional portfolio."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200" />
                  <div>
                    <p className="text-sm font-medium">Miguel Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="grid items-center gap-6 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to start earning or find developers?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our community today and be part of the future of work
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <a href="https://mail.google.com/mail/?view=cm&to=ajeemmanuel221@gmail.com&su=General%20Feedback">
              <Button size="lg">Contact Us as Developer</Button>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=ajeemmanuel221@gmail.com&su=General%20Feedback">
              <Button size="lg" variant="outline">
                Contact Us as Sponsor
              </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0 md:mr-5 md:ml-5">
        <div className="flex flex-col items-center justify-between gap-2 md:h-19 md:flex-row">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            <span className="text-lg font-bold">Mana</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Mana. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://mail.google.com/mail/?view=cm&to=ajeemmanuel221@gmail.com&su=General%20Feedback" className="text-muted-foreground hover:text-foreground">
              <MailIcon className="h-5 w-5" />
              <span className="sr-only">Mail</span>
            </Link>
            {/* <Link href="#" className="text-muted-foreground hover:text-foreground"> */}
              {/* <Twitter className="h-5 w-5" /> */}
              {/* <span className="sr-only">Twitter</span> */}
            {/* </Link> */}
            {/* <Link href="#" className="text-muted-foreground hover:text-foreground"> */}
              {/* <Linkedin className="h-5 w-5" /> */}
              {/* <span className="sr-only">LinkedIn</span> */}
            {/* </Link> */}
          </div>
        </div>
      </footer>
    </div>
  )
}
