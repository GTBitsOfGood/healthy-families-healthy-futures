import { graphql, useStaticQuery } from 'gatsby';
import { useLocale } from 'src/contexts/LocaleContext';

import { keys } from './util';

type MaybeMiscStrings = Omit<
  GatsbyTypes.MiscellaneousTextQuery['allContentfulMiscellaneous']['nodes'][0],
  'node_locale'
>;

type MiscStrings = Record<keyof MaybeMiscStrings, string>;

const DEFAULT_STRINGS: MiscStrings = {
  readMore: 'Read More',
  language: 'Language',
  photos: 'Photos',
  videos: 'Videos',
  viewAllRecipes: 'View All Recipes',
  viewLess: 'View Less',
  viewMore: 'View More',
  more: 'More',
  learnMore: 'Learn More',
  donate: 'Donate',
  clear: 'Clear',
  backToBlog: 'Back to Blog',
  backToRecipes: 'Back to Recipes',
  checkOutTheseOtherPosts: 'Check out these other posts',
  cookTime: 'Cook Time',
  prepTime: 'Prep Time',
  totalTime: 'Total Time',
  yield: 'Yield',
  ingredients: 'Ingredients',
  prep: 'Prep',
  instructions: 'Instructions',
  notes: 'Notes',
  specialDietInfo: 'Special Diet Information',
  recipeSearchNoResults: 'Oh no! No results were found.',
  recipeSearchNoResults2: 'Try using different words or a more general search.',
};

export function useMiscText(): MiscStrings {
  const data = useStaticQuery<GatsbyTypes.MiscellaneousTextQuery>(graphql`
    query MiscellaneousText {
      allContentfulMiscellaneous {
        nodes {
          node_locale
          readMore
          language
          learnMore
          photos
          videos
          viewAllRecipes
          viewLess
          viewMore
          more
          donate
          clear
          backToBlog
          backToRecipes
          checkOutTheseOtherPosts
          cookTime
          prepTime
          totalTime
          yield
          ingredients
          prep
          instructions
          notes
          specialDietInfo
          recipeSearchNoResults
          recipeSearchNoResults2
        }
      }
    }
  `);

  const { findLocale } = useLocale();
  const strings = findLocale(data.allContentfulMiscellaneous.nodes);

  return Object.fromEntries(
    keys(strings ?? DEFAULT_STRINGS).map(key => [key, DEFAULT_STRINGS[key]]),
  ) as MiscStrings;
}
