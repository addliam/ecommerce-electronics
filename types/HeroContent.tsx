declare type SafeNumber = number | `${number}`;
interface HeroContent {
  text: string;
  image: {
    src: string;
    alt: string;
    width: SafeNumber;
    height: SafeNumber;
  };
  slug: string;
}
export default HeroContent;
