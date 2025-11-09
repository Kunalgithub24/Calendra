import LandingPage from "@/components/landingpage"
import PrivateNavBar from "@/components/PrivateNavBar"
import PublicNavBar from "@/components/PublicNavBar"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function HomePage() {

  const user = await currentUser()

  // If no user is logged in, render the public landing page
  if (!user) return <LandingPage />


  // If user is logged in, redirect them to the events page
  return redirect('/events')

}
