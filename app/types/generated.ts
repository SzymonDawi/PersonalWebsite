import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AboutMe = {
  __typename?: 'AboutMe';
  image: Image;
  jobs: Array<Job>;
  resume_download_url: Scalars['String']['output'];
};

export type Art = {
  __typename?: 'Art';
  image: Image;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ExternalLink = {
  __typename?: 'ExternalLink';
  icon_slug: IconType;
  label: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ExternalProjects = {
  __typename?: 'ExternalProjects';
  image: Image;
  label: Scalars['String']['output'];
  link: Scalars['String']['output'];
};

export type FigmaBlock = {
  __typename?: 'FigmaBlock';
  url: Scalars['String']['output'];
};

export type GithubBlock = {
  __typename?: 'GithubBlock';
  dirs_to_include: Array<Scalars['String']['output']>;
  owner: Scalars['String']['output'];
  repo: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Home = {
  __typename?: 'Home';
  description: Scalars['String']['output'];
  greeting: Scalars['String']['output'];
  image: Image;
  links: Array<ExternalLink>;
};

export enum IconType {
  Github = 'GITHUB',
  Instagram = 'INSTAGRAM',
  Linkedin = 'LINKEDIN'
}

export type Image = {
  __typename?: 'Image';
  rendition: ImageRendition;
};


export type ImageRenditionArgs = {
  bgcolor?: InputMaybe<Scalars['String']['input']>;
  fill?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  jpegquality?: InputMaybe<Scalars['String']['input']>;
  max?: InputMaybe<Scalars['String']['input']>;
  min?: InputMaybe<Scalars['String']['input']>;
  scale?: InputMaybe<Scalars['String']['input']>;
  webpquality?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type ImageRendition = {
  __typename?: 'ImageRendition';
  height: Scalars['Int']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type Job = {
  __typename?: 'Job';
  employer: Scalars['String']['output'];
  roles: Array<Role>;
};

export type ProcessBlock = {
  __typename?: 'ProcessBlock';
  items?: Maybe<Array<ProcessBlockItem>>;
  title: Scalars['String']['output'];
};

export type ProcessBlockItem = ProcessImage | ProcessParagraph | ProcessTitle;

export type ProcessImage = {
  __typename?: 'ProcessImage';
  image: Image;
};

export type ProcessParagraph = {
  __typename?: 'ProcessParagraph';
  image?: Maybe<Image>;
  paragraph: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ProcessTitle = {
  __typename?: 'ProcessTitle';
  title: Scalars['String']['output'];
};

export type Project = {
  __typename?: 'Project';
  body: Array<ProjectStreamBlock>;
  hero_bullet_title: Scalars['String']['output'];
  hero_bullets: Array<Scalars['String']['output']>;
  hero_description: Scalars['String']['output'];
  hero_image: Image;
  hero_title: Scalars['String']['output'];
  list_view_image: Image;
  list_view_title: Scalars['String']['output'];
  mobile_list_view_image: Image;
  slug: Scalars['String']['output'];
  year: Scalars['String']['output'];
};

export type ProjectStreamBlock = FigmaBlock | GithubBlock | ProcessBlock;

export type Query = {
  __typename?: 'Query';
  about_me: AboutMe;
  art: Array<Art>;
  home: Home;
  project: Project;
  projects: Array<Project>;
};


export type QueryProjectArgs = {
  slug: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  achievements: Array<Scalars['String']['output']>;
  job_title: Scalars['String']['output'];
  projects?: Maybe<Array<Maybe<ExternalProjects>>>;
  work_period: Scalars['String']['output'];
};

export type AboutMeQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutMeQuery = { __typename?: 'Query', about_me: { __typename?: 'AboutMe', resume_download_url: string, image: { __typename?: 'Image', rendition: { __typename?: 'ImageRendition', url: string } }, jobs: Array<{ __typename?: 'Job', employer: string, roles: Array<{ __typename?: 'Role', job_title: string, work_period: string, achievements: Array<string>, projects?: Array<{ __typename?: 'ExternalProjects', label: string, link: string, image: { __typename?: 'Image', rendition: { __typename?: 'ImageRendition', url: string } } } | null> | null }> }> } };

export type ArtQueryVariables = Exact<{ [key: string]: never; }>;


export type ArtQuery = { __typename?: 'Query', art: Array<{ __typename?: 'Art', slug: string, title: string, image: { __typename?: 'Image', rendition: { __typename?: 'ImageRendition', url: string } } }> };

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = { __typename?: 'Query', home: { __typename?: 'Home', greeting: string, description: string, image: { __typename?: 'Image', rendition: { __typename?: 'ImageRendition', url: string } }, links: Array<{ __typename?: 'ExternalLink', label: string, url: string, icon_slug: IconType }> } };

export type ProjectQueryVariables = Exact<{
  Slug: Scalars['String']['input'];
}>;


export type ProjectQuery = { __typename?: 'Query', project: { __typename?: 'Project', list_view_title: string, year: string, hero_title: string, hero_description: string, hero_bullet_title: string, hero_bullets: Array<string>, hero_image: { __typename?: 'Image', rendition: { __typename?: 'ImageRendition', url: string } }, body: Array<{ __typename: 'FigmaBlock', url: string } | { __typename: 'GithubBlock', title: string, owner: string, repo: string, dirs_to_include: Array<string> } | { __typename: 'ProcessBlock', items?: Array<{ __typename: 'ProcessImage', process_image: { __typename?: 'Image', rendition: { __typename?: 'ImageRendition', url: string } } } | { __typename: 'ProcessParagraph', title?: string | null, paragraph: string, image?: { __typename?: 'Image', rendition: { __typename?: 'ImageRendition', url: string } } | null } | { __typename: 'ProcessTitle', process_title: string }> | null }> } };

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', slug: string, list_view_title: string, year: string, list_view_image: { __typename?: 'Image', rendition: { __typename?: 'ImageRendition', url: string } } }> };


export const AboutMeDocument = gql`
    query AboutMe {
  about_me {
    resume_download_url
    image {
      rendition(max: "800x800") {
        url
      }
    }
    jobs {
      employer
      roles {
        job_title
        work_period
        achievements
        projects {
          label
          image {
            rendition(max: "200x200") {
              url
            }
          }
          link
        }
      }
    }
  }
}
    `;

export function useAboutMeQuery(options?: Omit<Urql.UseQueryArgs<AboutMeQueryVariables>, 'query'>) {
  return Urql.useQuery<AboutMeQuery, AboutMeQueryVariables>({ query: AboutMeDocument, ...options });
};
export const ArtDocument = gql`
    query Art {
  art {
    slug
    title
    image {
      rendition(max: "400x400") {
        url
      }
    }
  }
}
    `;

export function useArtQuery(options?: Omit<Urql.UseQueryArgs<ArtQueryVariables>, 'query'>) {
  return Urql.useQuery<ArtQuery, ArtQueryVariables>({ query: ArtDocument, ...options });
};
export const HomeDocument = gql`
    query Home {
  home {
    image {
      rendition(max: "500x500") {
        url
      }
    }
    greeting
    description
    links {
      label
      url
      icon_slug
    }
  }
}
    `;

export function useHomeQuery(options?: Omit<Urql.UseQueryArgs<HomeQueryVariables>, 'query'>) {
  return Urql.useQuery<HomeQuery, HomeQueryVariables>({ query: HomeDocument, ...options });
};
export const ProjectDocument = gql`
    query Project($Slug: String!) {
  project(slug: $Slug) {
    list_view_title
    year
    hero_title
    hero_description
    hero_bullet_title
    hero_bullets
    hero_image {
      rendition(fill: "2560x1440") {
        url
      }
    }
    body {
      __typename
      ... on FigmaBlock {
        url
      }
      ... on GithubBlock {
        title
        owner
        repo
        dirs_to_include
      }
      ... on ProcessBlock {
        items {
          __typename
          ... on ProcessTitle {
            process_title: title
          }
          ... on ProcessImage {
            process_image: image {
              rendition(max: "1000x1000") {
                url
              }
            }
          }
          ... on ProcessParagraph {
            title
            paragraph
            image {
              rendition(max: "600x600") {
                url
              }
            }
          }
        }
      }
    }
  }
}
    `;

export function useProjectQuery(options: Omit<Urql.UseQueryArgs<ProjectQueryVariables>, 'query'>) {
  return Urql.useQuery<ProjectQuery, ProjectQueryVariables>({ query: ProjectDocument, ...options });
};
export const ProjectsDocument = gql`
    query Projects {
  projects {
    slug
    list_view_image {
      rendition(max: "1000x1000") {
        url
      }
    }
    list_view_title
    year
  }
}
    `;

export function useProjectsQuery(options?: Omit<Urql.UseQueryArgs<ProjectsQueryVariables>, 'query'>) {
  return Urql.useQuery<ProjectsQuery, ProjectsQueryVariables>({ query: ProjectsDocument, ...options });
};