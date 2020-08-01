import * as sanitizeHtml from 'sanitize-html'

const opts = {
    allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
        'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
        'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'iframe', 'img'],
    allowedAttributes: {
        a: ['href', 'name', 'target'],
        // We don't currently allow img itself by default, but this
        // would make sense if we did. You could add srcset here,
        // and if you do the URL is checked for safety
        img: ['src']
    },
    // Lots of these won't come up by default because we don't allow them
    selfClosing: ['img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta'],
    // URL schemes we permit
    allowedSchemes: ['http', 'https', 'ftp', 'mailto'],
    allowedSchemesByTag: { img: ['data'] },
    allowedSchemesAppliedToAttributes: ['href', 'src', 'cite'],
    allowProtocolRelative: true,
}

const unwantedStrings = [
    '<p><br></p>',
    '<p><br /></p>',
    '<h1><br></h1>',
    '<h1><br /></h1>',
    '<h2><br></h2>',
    '<h2><br /></h2>',
    '<h3><br></h3>',
    '<h3><br /></h3>',
]

function _tidyUpHtml(content: string) {
    unwantedStrings.forEach(string => {
        while (content.indexOf(string) > -1) {
        content = content.replace(string, '')
        }
    })
    return content
}

export default function sanitize(content: string): string {
    return sanitizeHtml(
        _tidyUpHtml(content),
        // content,
        opts
    )
}