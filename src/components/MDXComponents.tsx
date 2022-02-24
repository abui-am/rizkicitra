import ArticleLink from '@/components/atoms/ArticleLink'
import Image from '@/components/atoms/Image'
import Link from '@/components/atoms/Link'
import Blockquote from '@/components/mollecules/Blockquote'
import BlogImage from '@/components/mollecules/BlogImage'
import CustomCode from '@/components/mollecules/CustomCode'
import CustomPre from '@/components/mollecules/Pre'

const MDXComponents = {
  Link,
  Image,
  BlogImage,
  ArticleLink,
  pre: CustomPre,
  inlineCode: CustomCode,
  blockquote: Blockquote
}

export default MDXComponents
