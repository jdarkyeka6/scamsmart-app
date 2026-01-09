import { supabase } from '../../../../lib/supabase'

export async function POST(request) {
  try {
    const { email, password, username } = await request.json()

    // Validate username
    if (!username || username.trim().length < 3) {
      return Response.json(
        { error: 'Username must be at least 3 characters' },
        { status: 400 }
      )
    }

    // Check if username already exists
    const { data: existingUser } = await supabase
      .from('user_progress')
      .select('display_name')
      .eq('display_name', username.trim())
      .single()

    if (existingUser) {
      return Response.json(
        { error: 'Username already taken' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username.trim()
        }
      }
    })

    if (error) {
      return Response.json({ error: error.message }, { status: 400 })
    }

    // Create user progress with username
    if (data.user) {
      const referralCode = Math.random().toString(36).substring(2, 10).toUpperCase()
      
      await supabase.from('user_progress').insert([
        {
          user_id: data.user.id,
          email: email,
          display_name: username.trim(),
          total_xp: 0,
          lessons_completed: 0,
          streak_count: 0,
          last_activity: new Date().toISOString(),
          is_premium: false,
          referral_code: referralCode
        }
      ])
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}