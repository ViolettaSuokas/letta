export type LanguagesType = "fi" | "en";
export type IDType = { id: string };
export type TitleType = { title: string };
export type DescType = { description: string };
export type NameType = { name: string };
export type PartType = { part: string };
export type StyleType = { style: string };
export type UrlType = { url: string };
export type HandlerType = { handler: () => void };

export interface IArticle extends TitleType, DescType {}

export interface ILinks extends NameType, PartType, StyleType {
  anchor: string;
}
export interface INavigation {
  links: Array<ILinks>;
}

interface IFavicon {
  image: { url: string };
}
interface ISEO {
  globalSeo: {
    fallbackSeo: IArticle & IFavicon;
  };
}

export interface IHeroSection extends TitleType, NameType, StyleType {}

export interface IAboutSection
  extends TitleType,
    PartType,
    StyleType,
    DescType {}

export interface IServicesSection
  extends TitleType,
    PartType,
    StyleType,
    DescType {}

export interface IWorkSection
  extends TitleType,
    PartType,
    StyleType,
    DescType {}

export interface IEducationSection
  extends TitleType,
    PartType,
    StyleType,
    DescType {}

export interface IContactSection
  extends TitleType,
    PartType,
    StyleType,
    DescType {}

export interface IData {
  _site: ISEO;
  navigation: INavigation;
  heroSection: IHeroSection;
  aboutSection: IAboutSection;
  servicesSection: IServicesSection;
  workSection: IWorkSection;
  educationSection: IEducationSection;
  contactSection: IContactSection;
}
