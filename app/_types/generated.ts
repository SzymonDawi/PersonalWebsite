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

export type ExternalLink = {
  __typename?: 'ExternalLink';
  icon_slug: IconType;
  label: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type FigmaBlock = {
  __typename?: 'FigmaBlock';
  url: Scalars['String']['output'];
};

export type GithubBlock = {
  __typename?: 'GithubBlock';
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
  year: Scalars['String']['output'];
};

export type ProjectStreamBlock = FigmaBlock | GithubBlock | ProcessBlock;

export type Query = {
  __typename?: 'Query';
  home: Home;
  project: Project;
  projects: Array<Project>;
};


export type QueryProjectArgs = {
  slug: Scalars['String']['input'];
};

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = { __typename?: 'Query', home: { __typename?: 'Home', greeting: string, description: string, image: { __typename?: 'Image', rendition: { __typename?: 'ImageRendition', url: string } }, links: Array<{ __typename?: 'ExternalLink', label: string, url: string, icon_slug: IconType }> } };

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', list_view_title: string, year: string, list_view_image: { __typename?: 'Image', rendition: { __typename?: 'ImageRendition', url: string } } }> };


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
export const ProjectsDocument = gql`
    query Projects {
  projects {
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