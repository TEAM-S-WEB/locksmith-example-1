import React from 'react'
import Head from 'next/head'

const Seo = ({
    titlePage,
    descriptionPage,
    keywordsPage,
    NetworksTitle,
    NetworksDescription,
    NetworksImagePath,
    HrefIcon
  }) => {
  return (
    <Head>
    <title>
      {titlePage
        ? titlePage
        : "Locksmiths YSL"}
    </title>
    <meta
      name="description"
      content={
        descriptionPage
          ? descriptionPage
          : "With years of experience, our skilled locksmiths can handle any emergency lockout situation, from residential homes to large commercial buildings."
      }
    />
    <link rel="canonical" href="https://www.locksmithysl.com"></link>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    ></meta>
    <meta name="Locksmiths YSL" content="Locksmiths" />
    <meta itemprop="name" content="Locksmiths YSL" />
    <meta itemprop="url" content="https://www.locksmithysl.com" />
    <meta itemprop="url" content="https://www.facebook.com/profile.php?id=61568322193072" />
    <meta itemprop="description" content="Locksmiths YSL" />
    <meta property="og:site_name" content="Locksmiths YSL"></meta>
    <meta property="og:type" content="website"></meta>
    <meta
      property="og:url"
      content={`https://www.locksmithysl.com/`}
    ></meta>

<link rel="icon" href={HrefIcon ? HrefIcon : "../app/favicon.ico"} sizes="any" />
    <meta
      name="keywords"
      content={
        keywordsPage
          ? keywordsPage
          : "locksmith, emergency locksmith, 24/7 locksmith, local locksmith, mobile locksmith, locksmith near me, locksmith services, residential locksmith, commercial locksmith, automotive locksmith, lock change, key replacement, lock repair, lock installation, safe opening, car lockout, house lockout, business lockout, lock picking, security systems, home security, business security, key cutting, lock rekeying, high-security locks, emergency lockouts, 24-hour locksmith service, affordable locksmith services, fast locksmith service, reliable locksmith service."
      }
    />

    <meta
      property="og:title"
      content={
        NetworksTitle
          ? NetworksTitle
          : "YSL Emergency Locksmith Services"
      }
      key={NetworksTitle ? NetworksTitle : "ogTitle"}
    />
    <meta
      property="og:description"
      content={
        NetworksDescription
          ? NetworksDescription
          : "YSL Emergency Locksmith Services provides fast and reliable locksmith solutions, 24 hours a day, 7 days a week. Our skilled technicians can handle a wide range of locksmith services, including lockouts, lock repairs, key replacements, and security system installations."
      }
      key={NetworksDescription ? NetworksDescription : "YSL Emergency Locksmith Services provides fast and reliable locksmith solutions, 24 hours a day, 7 days a week. Our skilled technicians can handle a wide range of locksmith services, including lockouts, lock repairs, key replacements, and security system installations."}
    />
    <meta
      property="og:image"
      content={NetworksImagePath ? NetworksImagePath : ""}
      key={NetworksImagePath ? NetworksImagePath : "src/assets/pic/4y.jpg"}
    />
    
  </Head>
  )
}

export default Seo