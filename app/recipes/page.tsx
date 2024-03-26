import { createClient } from '@/utils/supabase/server'
import AddRecipe from './AddRecipe'

export default async function Page() {
  const supabase = createClient()
  // const user = supabase.auth.user()

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: recipes } = await supabase.from('recipes').select()
  const { error } =  await supabase.from('recipes').insert({ title: 'SUBMITTED RECIPE', instructions:'SUBMITTED RECIPE INSTRUCTIONS' })
  const userId = user?.id
  return (<div>

    <AddRecipe />
    <pre>{JSON.stringify(recipes, null, 2)}</pre>
    </div>)
}