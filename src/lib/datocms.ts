import type { IData, LanguagesType } from "@Types";

export default async function FetchFromDatoCMS(lang: LanguagesType) {
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${import.meta.env.PUBLIC_DATOCMS_API_KEY}`,
    },
    body: JSON.stringify({
      query: `
          {
            _site(locale: ${lang}) {
              ...SiteFragment
            }

            navigation(locale: ${lang}) {
              ...NavigationRecordFragment
            }

            heroSection(locale: ${lang}) {
              ...HeroSectionRecordFragment
            }
            aboutSection(locale: ${lang}) {
              ...AboutSectionRecordFragment
            }

            servicesSection(locale: ${lang}) {
              ...ServicesSectionRecordFragment
            }

            workSection(locale: ${lang}) {
              ...WorkSectionRecordFragment
            }

            educationSection(locale: ${lang}) {
              ...EducationSectionRecordFragment
            }

            contactSection(locale: ${lang}) {
              ...ContactSectionRecordFragment
            }
          }

          fragment SiteFragment on Site {
            globalSeo {
              fallbackSeo {
                description
                title
              }
            }
            favicon {
              url
            }
          }

          fragment NavigationRecordFragment on NavigationRecord {
            links {
              anchor
              name
              part
              style
            }
          }

          fragment HeroSectionRecordFragment on HeroSectionRecord {
            name
            style
            title
          }

          fragment AboutSectionRecordFragment on AboutSectionRecord {
            title
            part
            style
            description
            image {
              responsiveImage {
                src
                alt
                width
                height
                srcSet
                sizes
              }
            }
          }

          fragment ServicesSectionRecordFragment on ServicesSectionRecord {
            title
            part
            style
            description
            services {
              title
              style
              partSecond
              part
              description
            }
          }

          fragment WorkSectionRecordFragment on WorkSectionRecord {
            title
            part
            style
            description
            works {
              url
              name
              style
            }
          }

          fragment EducationSectionRecordFragment on EducationSectionRecord {
            title
            part
            style
            description
            educations {
              ... on EmptyRecord {
                isEmpty
              }
              ... on DiplomRecord {
                part
                style
                title
                description
              }
            }
          }

          fragment ContactSectionRecordFragment on ContactSectionRecord {
            title
            part
            style
            description
            contacts {
              style
              url
              icon
            }
          }
        `,
    }),
  });

  const json = (await response.json()) as { data: IData };
  return json.data;
}
