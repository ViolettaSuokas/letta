export type LanguagesType = "fi" | "en";
export type IconType = "email" | "behance" | "linkedin" | "instagram";
export type IDType = { id: string };
export type TitleType = { title: string };
export type DescType = { description: string };
export type NameType = { name: string };
export type PartType = { part: string };
export type StyleType = { style: string };
export type UrlType = { url: string };
export type HandlerType = { handler: () => void };

export type TypeResponsiveImage = {
  responsiveImage: {
    src: string;
    alt: string;
    width: string;
    height: string;
    sizes: string;
    srcSet: string;
  };
};

export interface IArticle extends TitleType, DescType {}

export interface ILinks extends NameType, PartType, StyleType {
  anchor: string;
}
export interface INavigation {
  links: Array<ILinks>;
}

interface ISEO {
  globalSeo: {
    fallbackSeo: IArticle;
  };
  favicon: UrlType;
}

export interface IHero extends TitleType, NameType, StyleType {}

export interface IAbout extends TitleType, PartType, StyleType, DescType {
  image: TypeResponsiveImage;
}

export interface IService extends TitleType, PartType, StyleType, DescType {
  partSecond: string;
}
export interface IServices extends TitleType, PartType, StyleType, DescType {
  services: Array<IService>;
}

export interface IWork extends NameType, UrlType, StyleType {}
export interface IWorks extends TitleType, PartType, StyleType, DescType {
  works: Array<IWork>;
}

export interface IEducation extends TitleType, PartType, StyleType, DescType {}
export interface IEducations extends TitleType, PartType, StyleType, DescType {
  educations: Array<IEducation | { isEmpty: boolean }>;
}

export interface IContact extends UrlType, StyleType {
  icon: IconType;
}
export interface IContacts extends TitleType, PartType, StyleType, DescType {
  contacts: Array<IContact>;
}

export interface IData {
  _site: ISEO;
  navigation: INavigation;
  heroSection: IHero;
  aboutSection: IAbout;
  servicesSection: IServices;
  workSection: IWorks;
  educationSection: IEducations;
  contactSection: IContacts;
}
