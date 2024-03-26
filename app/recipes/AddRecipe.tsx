'use client'
import { createClient } from '@/utils/supabase/client'

export default async function addRecipe() {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log(session)
  const handleClick = async () => {
    await supabase.from('recipes').insert({ user_id: user?.id, title: 'SUBMITTED RECIPE', instructions:'SUBMITTED RECIPE INSTRUCTIONS' })
  }
  // console.log(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  return <div>
    <button onClick={handleClick}>BUTTON</button>
    </div>
}