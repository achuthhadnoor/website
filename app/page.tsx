'use client'
import Link from 'next/link';

export default function Home() {
  const Apps = [
    {
      id: '1',
      title: 'Lapse',
      summary: "Timelapse screen recording app for macOs and windows.",
      url: 'https://getlapseapp.com',
      price: '$9.99'
    },
    {
      id: '2',
      title: 'Annotate',
      summary: "A macOs and windows app to Draw any Screen or App.",
      url: 'https://annotateapp.com',
      price: '$4.99'
    }
  ]
  const Blogs = [
    {
      id: '1',
      title: 'Lapse',
      summary: "Timelapse screen recording app for macOs and windows.",
      url: 'https://blog.achuth.dev/electron-react-typescript-webpack-app',
      // price: '$9.99'
    },
    {
      id: '2',
      title: 'Annotate',
      summary: "A macOs and windows app to Draw any Screen or App.",
      url: 'https://annotateapp.com',
      price: '$4.99'
    }
  ]
  const Logo = () => <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_4091_70)">
      <path d="M22.2865 18.1055C23.0563 16.7721 24.9808 16.7721 25.7506 18.1055L32.6322 30.0249C33.402 31.3582 32.4398 33.0249 30.9002 33.0249H17.1369C15.5973 33.0249 14.635 31.3582 15.4048 30.0249L22.2865 18.1055Z" fill="currentColor" />
      <path d="M37.9358 29.5488C37.166 30.8822 35.2415 30.8822 34.4717 29.5488L27.5901 17.6294C26.8203 16.2961 27.7825 14.6294 29.3221 14.6294L43.0854 14.6294C44.625 14.6294 45.5873 16.2961 44.8175 17.6294L37.9358 29.5488Z" fill="currentColor" />
      <path d="M13.8041 29.5488C13.0343 30.8822 11.1098 30.8822 10.34 29.5488L3.45834 17.6294C2.68854 16.2961 3.65079 14.6294 5.19039 14.6294L18.9537 14.6294C20.4933 14.6294 21.4556 16.2961 20.6858 17.6294L13.8041 29.5488Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_4091_70">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
  return (
    <main className="flex flex-col gap-4 flex-1 py-10 max-w-md mx-auto px-4 font-mono text-sm text-neutral-900 dark:text-neutral-200 leading-loose">
      <section className='flex flex-col gap-4 '>
        <span className="text-neutral-600 dark:text-neutral-400">
          <Logo />
        </span>
        <h1 className="text-2xl font-bold">
          Achuth Hadnoor
        </h1>
        <p className="text-neutral-500 ">
          <em className=" dark:text-neutral-200 text-neutral-900 ">Crafting digital Products,</em> I love building digital products for designers, developers, productivity and more..
        </p>
        <p className='py-1'>
          In past, as <em>Design Engineer</em> {`I've`} developed <span className='text-neutral-500 '>animations</span> for design system, contributed to the <span className='text-neutral-500 '>website</span> and built the <span className='text-neutral-500 '>mobile app</span> from scratch at  <Link href="https://opendoor.com" className='text-neutral-500 underline ' target="_blank">Opendoor</Link> .
        </p>
      </section>
      <section id="writings" className='pb-10 max-w-xl'>
        <h2 className='font-bold text-xl'>Apps</h2>
        <div className='flex flex-col gap-5 py-4'>
          {Apps.map(({ title, summary, url, id, price }, index) => (
            <Link href={url} key={id}>
              <div className='flex flex-col gap-1'>
                <div className='flex gap-2 group'>
                  <h3 className='text-md font-semibold cursive'>{`${index + 1} ‒ ${title}`}</h3>
                  <span className='transform -rotate-45 hidden group-hover:inline'>{'→'}</span>
                </div>
                <p className='text-sm text-neutral-500'>{summary} — <strong className='dark:text-neutral-300 '>{price}</strong></p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* <section id="writings" className='pb-10 max-w-xl'>
        <h2 className='font-bold text-xl'>Writings</h2>
        <div className='flex flex-col gap-5 py-4'>
          {Blogs.map(({ title, summary, url, id }, index) => (
            <Link href={url} key={id}>
              <div className='flex flex-col gap-1'>
                <div className='flex gap-2 group'>
                  <h3 className='text-md font-semibold cursive'>{`${index + 1} ‒ ${title}`}</h3>
                  <span className='transform -rotate-45 hidden group-hover:inline'>{'→'}</span>
                </div>
                <p className='text-sm text-neutral-500'>{summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section> */}
      <section className="flex justify-between py-4 border-t border-neutral-500">
        <h5 className="text-neutral-400">Made with 💜 + 🥶</h5>
        <p>© Achuth Hadnoor {new Date().getFullYear()}</p>
      </section>
    </main>)
}
