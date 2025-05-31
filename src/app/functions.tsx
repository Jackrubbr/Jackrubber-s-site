import Link from "next/link";

export function menubar()
{
  return <div style={{border:'2px solid #cc5de8', borderRadius: '5px', width:'100%',height:'300px', padding:'10px'}}>
      <Link href='/'>Home</Link><br/>
      <Link href='/aboutMe'>About Me</Link><br/>
      <Link href='/recommendations'>Recommendations</Link><br/>
      <Link href='https://jackrubber.itch.io' target="_blank">Itch.io</Link>
      {/* <a href='/'>Home</a><br />
      <a href='/aboutMe'>About Me</a><br />
      <a href='/recommendations'>Recommendations</a><br />
      <a href='https://jackrubber.itch.io' target='_blank'>Itch.io</a><br /> */}
    </div>;
}