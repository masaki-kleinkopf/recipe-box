import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: recipes } = await supabase.from('recipes').select()
  const { error } =  await supabase.from('recipes').insert({ user_id: user?.id, title: 'SUBMITTED RECIPE', instructions:'SUBMITTED RECIPE INSTRUCTIONS' })
  const userId = user?.id
  return <div>
    {userId}
    {error && <div>{`${error}`}</div>}
    <pre>{JSON.stringify(recipes, null, 2)}</pre>
    </div>
}