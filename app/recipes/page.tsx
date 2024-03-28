import { createClient } from '@/utils/supabase/server'
import AddRecipe from './AddRecipe'

export default async function Page() {
  const supabase = createClient()
  // const user = supabase.auth.user()

  const { data: recipes } = await supabase.from('recipes').select()
  return (<div>

    <AddRecipe />
    <pre>{JSON.stringify(recipes, null, 2)}</pre>
    </div>)
}