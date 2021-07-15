// (this could be moved into yarleOptions)
import { yarleOptions } from '../../yarle';

// Note: this rule must appear *after* use(gfm) so it can override
// gfm rule for strikethrough (which always uses single '~')
export const strikethroughRule = {
  filter: ['del', 's', 'strike'],
  replacement: (content: any) => {
    const mdStrikethrough = yarleOptions.mdStrikethrough ?? '~';
    return `${mdStrikethrough}${content}${mdStrikethrough}`;
  },
};
