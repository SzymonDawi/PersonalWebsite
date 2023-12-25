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

export type Query = {
  __typename?: 'Query';
  home: Home;
};

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = { __typename?: 'Query', home: { __typename?: 'Home', greeting: string, description: string, image: { __typename?: 'Image', rendition: { __typename?: 'ImageRendition', url: string } }, links: Array<{ __typename?: 'ExternalLink', label: string, url: string, icon_slug: IconType }> } };


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