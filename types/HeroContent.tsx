declare type SafeNumber = number | `${number}`;
interface HeroContent {
  text: string;
  image: {
    src: string;
    alt: string;
    width: SafeNumber;
    height: SafeNumber;
  };
}
export default HeroContent;
