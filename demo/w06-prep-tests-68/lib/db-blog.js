import { supabase } from './supabase';

export const getBlogs = async function () {
  const { data, error } = await supabase.from('blog_68').select('*');
  68;
  if (error) {
    console.error(error);
    throw new Error('Blogs could not be loaded');
  }

  return data;
};
