import parse from "html-react-parser"; // Converts HTML strings to JSX
import DOMPurify from "dompurify"; // Sanitizes HTML to prevent XSS attacks

const HtmlCompiler = ({ value, className = "", wrapper: Wrapper = "div" }) => {
  const sanitizedHtml = DOMPurify.sanitize(value); // Cleans dangerous HTML

  return <Wrapper className={className}>{parse(sanitizedHtml)}</Wrapper>;
};

export default HtmlCompiler;
