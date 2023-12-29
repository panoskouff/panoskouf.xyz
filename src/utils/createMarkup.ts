import { TrustedHtmlString } from '#/types'

export const createMarkup = (htmlString: TrustedHtmlString) => {
  return { __html: htmlString }
}
