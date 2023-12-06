import DOMPurify, { sanitize } from 'dompurify';


const renderLinks = (content: string): React.ReactNode  => {

  const clickableLink = content.replace(
    /((https?:\/\/[^\s]+)|\[([^\]]+)\]\((https?:\/\/[^\s]+)\))/g,
    (match: any, url: any, _: any, linkText: any) => {
      if (url) {
        return `<a href="${url}">${url}</a>`;
      } else if (linkText && url) {
        return `<a href="${url}">${linkText}</a>`;
      }
      return match;
    }
  );

  console.log(renderLinks("fffff"))

// Using DOMPurify
  const sanitizedLinks = () => ({
   __html: DOMPurify.sanitize(clickableLink)
  });


  // Make the link open in a new tab
  const contentWithTargetBlank = sanitizedLinks.replace(/<a /g, '<a target="_blank" ');

  // return { contentWithTargetBlank };
}

// https://bobbyhadz.com/blog/typescript-binding-element-implicitly-has-an-any-type
 export function HighlightLinks({ content }: {content: any}) {
   return <span className='highlights' dangerouslySetInnerHTML={sanitizedLinks()} />;
 }
