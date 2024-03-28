'use client'
import { createClient } from '@/utils/supabase/client'
import {useRouter} from "next/navigation"

export default async function addRecipe() {
  const router = useRouter();
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log(session)
  const handleClick = async () => {
    await supabase.from('recipes').insert({ user_id: session?.user?.id, title: 'SUBMITTED RECIPE', instructions:'SUBMITTED RECIPE INSTRUCTIONS' })
    router.refresh()
  }
  // console.log(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  return <div>
    <button onClick={handleClick}>BUTTON</button>
    </div>
}