import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
    <h1><div> My name is Yongjun. </div>
    Welcome to <a href="http://is.hanyang.ac.kr/">HYU IS!</a>
    <img src="/logo.png" alt="logo"/>
    
    </h1>
    <h2>
      <Link href="/">Back to home</Link>
    </h2>
    
    </>
  )
}