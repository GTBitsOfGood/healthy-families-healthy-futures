/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  JSON: never;
};











type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  readonly toFormat: Maybe<ImageFormat>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type ContentfulAsset = ContentfulReference & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly file: Maybe<ContentfulAssetFile>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly node_locale: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulAssetSys>;
  readonly fixed: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ContentfulResolutions>;
  readonly fluid: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ContentfulSizes>;
  readonly resize: Maybe<ContentfulResize>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulAsset_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


type ContentfulAsset_resolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


type ContentfulAsset_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes: Maybe<Scalars['String']>;
};


type ContentfulAsset_sizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes: Maybe<Scalars['String']>;
};


type ContentfulAsset_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

type ContentfulAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
};


type ContentfulAssetConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetEdge = {
  readonly next: Maybe<ContentfulAsset>;
  readonly node: ContentfulAsset;
  readonly previous: Maybe<ContentfulAsset>;
};

enum ContentfulAssetFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  file___url = 'file.url',
  file___details___size = 'file.details.size',
  file___details___image___width = 'file.details.image.width',
  file___details___image___height = 'file.details.image.height',
  file___fileName = 'file.fileName',
  file___contentType = 'file.contentType',
  title = 'title',
  description = 'description',
  node_locale = 'node_locale',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
  resize___base64 = 'resize.base64',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___src = 'resize.src',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ContentfulAssetFile = {
  readonly url: Maybe<Scalars['String']>;
  readonly details: Maybe<ContentfulAssetFileDetails>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly contentType: Maybe<Scalars['String']>;
};

type ContentfulAssetFileDetails = {
  readonly size: Maybe<Scalars['Int']>;
  readonly image: Maybe<ContentfulAssetFileDetailsImage>;
};

type ContentfulAssetFileDetailsFilterInput = {
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

type ContentfulAssetFileDetailsImage = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type ContentfulAssetFileDetailsImageFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ContentfulAssetFileFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly details: Maybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<StringQueryOperatorInput>;
};

type ContentfulAssetFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly file: Maybe<ContentfulAssetFileFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAssetSysFilterInput>;
  readonly fixed: Maybe<ContentfulFixedFilterInput>;
  readonly resolutions: Maybe<ContentfulResolutionsFilterInput>;
  readonly fluid: Maybe<ContentfulFluidFilterInput>;
  readonly sizes: Maybe<ContentfulSizesFilterInput>;
  readonly resize: Maybe<ContentfulResizeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAssetSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
};

type ContentfulAssetSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
};

type ContentfulBlogPost = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly publishDate: Maybe<Scalars['Date']>;
  readonly heroImage: Maybe<ContentfulAsset>;
  readonly description: Maybe<contentfulBlogPostDescriptionTextNode>;
  readonly body: Maybe<contentfulBlogPostBodyTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulBlogPostSys>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly author: Maybe<ContentfulPerson>;
  readonly gatsbyPath: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type contentfulBlogPostBodyTextNode */
  readonly childrenContentfulBlogPostBodyTextNode: Maybe<ReadonlyArray<Maybe<contentfulBlogPostBodyTextNode>>>;
  /**
   * Returns the first child node of type contentfulBlogPostBodyTextNode or null if
   * there are no children of given type on this node
   */
  readonly childContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNode>;
  /** Returns all children nodes filtered by type contentfulBlogPostDescriptionTextNode */
  readonly childrenContentfulBlogPostDescriptionTextNode: Maybe<ReadonlyArray<Maybe<contentfulBlogPostDescriptionTextNode>>>;
  /**
   * Returns the first child node of type contentfulBlogPostDescriptionTextNode or
   * null if there are no children of given type on this node
   */
  readonly childContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulBlogPost_publishDateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulBlogPost_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulBlogPost_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulBlogPost_gatsbyPathArgs = {
  filePath: Maybe<Scalars['String']>;
};

type contentfulBlogPostBodyTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly body: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulBlogPostBodyTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulBlogPostBodyTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBlogPostBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBlogPostBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulBlogPostBodyTextNodeGroupConnection>;
};


type contentfulBlogPostBodyTextNodeConnection_distinctArgs = {
  field: contentfulBlogPostBodyTextNodeFieldsEnum;
};


type contentfulBlogPostBodyTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulBlogPostBodyTextNodeFieldsEnum;
};

type contentfulBlogPostBodyTextNodeEdge = {
  readonly next: Maybe<contentfulBlogPostBodyTextNode>;
  readonly node: contentfulBlogPostBodyTextNode;
  readonly previous: Maybe<contentfulBlogPostBodyTextNode>;
};

enum contentfulBlogPostBodyTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  body = 'body',
  sys___type = 'sys.type',
  childrenMarkdownRemark = 'childrenMarkdownRemark',
  childrenMarkdownRemark___id = 'childrenMarkdownRemark.id',
  childrenMarkdownRemark___frontmatter___title = 'childrenMarkdownRemark.frontmatter.title',
  childrenMarkdownRemark___excerpt = 'childrenMarkdownRemark.excerpt',
  childrenMarkdownRemark___rawMarkdownBody = 'childrenMarkdownRemark.rawMarkdownBody',
  childrenMarkdownRemark___html = 'childrenMarkdownRemark.html',
  childrenMarkdownRemark___htmlAst = 'childrenMarkdownRemark.htmlAst',
  childrenMarkdownRemark___excerptAst = 'childrenMarkdownRemark.excerptAst',
  childrenMarkdownRemark___headings = 'childrenMarkdownRemark.headings',
  childrenMarkdownRemark___headings___id = 'childrenMarkdownRemark.headings.id',
  childrenMarkdownRemark___headings___value = 'childrenMarkdownRemark.headings.value',
  childrenMarkdownRemark___headings___depth = 'childrenMarkdownRemark.headings.depth',
  childrenMarkdownRemark___timeToRead = 'childrenMarkdownRemark.timeToRead',
  childrenMarkdownRemark___tableOfContents = 'childrenMarkdownRemark.tableOfContents',
  childrenMarkdownRemark___wordCount___paragraphs = 'childrenMarkdownRemark.wordCount.paragraphs',
  childrenMarkdownRemark___wordCount___sentences = 'childrenMarkdownRemark.wordCount.sentences',
  childrenMarkdownRemark___wordCount___words = 'childrenMarkdownRemark.wordCount.words',
  childrenMarkdownRemark___parent___id = 'childrenMarkdownRemark.parent.id',
  childrenMarkdownRemark___parent___parent___id = 'childrenMarkdownRemark.parent.parent.id',
  childrenMarkdownRemark___parent___parent___children = 'childrenMarkdownRemark.parent.parent.children',
  childrenMarkdownRemark___parent___children = 'childrenMarkdownRemark.parent.children',
  childrenMarkdownRemark___parent___children___id = 'childrenMarkdownRemark.parent.children.id',
  childrenMarkdownRemark___parent___children___children = 'childrenMarkdownRemark.parent.children.children',
  childrenMarkdownRemark___parent___internal___content = 'childrenMarkdownRemark.parent.internal.content',
  childrenMarkdownRemark___parent___internal___contentDigest = 'childrenMarkdownRemark.parent.internal.contentDigest',
  childrenMarkdownRemark___parent___internal___description = 'childrenMarkdownRemark.parent.internal.description',
  childrenMarkdownRemark___parent___internal___fieldOwners = 'childrenMarkdownRemark.parent.internal.fieldOwners',
  childrenMarkdownRemark___parent___internal___ignoreType = 'childrenMarkdownRemark.parent.internal.ignoreType',
  childrenMarkdownRemark___parent___internal___mediaType = 'childrenMarkdownRemark.parent.internal.mediaType',
  childrenMarkdownRemark___parent___internal___owner = 'childrenMarkdownRemark.parent.internal.owner',
  childrenMarkdownRemark___parent___internal___type = 'childrenMarkdownRemark.parent.internal.type',
  childrenMarkdownRemark___children = 'childrenMarkdownRemark.children',
  childrenMarkdownRemark___children___id = 'childrenMarkdownRemark.children.id',
  childrenMarkdownRemark___children___parent___id = 'childrenMarkdownRemark.children.parent.id',
  childrenMarkdownRemark___children___parent___children = 'childrenMarkdownRemark.children.parent.children',
  childrenMarkdownRemark___children___children = 'childrenMarkdownRemark.children.children',
  childrenMarkdownRemark___children___children___id = 'childrenMarkdownRemark.children.children.id',
  childrenMarkdownRemark___children___children___children = 'childrenMarkdownRemark.children.children.children',
  childrenMarkdownRemark___children___internal___content = 'childrenMarkdownRemark.children.internal.content',
  childrenMarkdownRemark___children___internal___contentDigest = 'childrenMarkdownRemark.children.internal.contentDigest',
  childrenMarkdownRemark___children___internal___description = 'childrenMarkdownRemark.children.internal.description',
  childrenMarkdownRemark___children___internal___fieldOwners = 'childrenMarkdownRemark.children.internal.fieldOwners',
  childrenMarkdownRemark___children___internal___ignoreType = 'childrenMarkdownRemark.children.internal.ignoreType',
  childrenMarkdownRemark___children___internal___mediaType = 'childrenMarkdownRemark.children.internal.mediaType',
  childrenMarkdownRemark___children___internal___owner = 'childrenMarkdownRemark.children.internal.owner',
  childrenMarkdownRemark___children___internal___type = 'childrenMarkdownRemark.children.internal.type',
  childrenMarkdownRemark___internal___content = 'childrenMarkdownRemark.internal.content',
  childrenMarkdownRemark___internal___contentDigest = 'childrenMarkdownRemark.internal.contentDigest',
  childrenMarkdownRemark___internal___description = 'childrenMarkdownRemark.internal.description',
  childrenMarkdownRemark___internal___fieldOwners = 'childrenMarkdownRemark.internal.fieldOwners',
  childrenMarkdownRemark___internal___ignoreType = 'childrenMarkdownRemark.internal.ignoreType',
  childrenMarkdownRemark___internal___mediaType = 'childrenMarkdownRemark.internal.mediaType',
  childrenMarkdownRemark___internal___owner = 'childrenMarkdownRemark.internal.owner',
  childrenMarkdownRemark___internal___type = 'childrenMarkdownRemark.internal.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark.headings.id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type'
}

type contentfulBlogPostBodyTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulBlogPostBodyTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulBlogPostBodyTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
};

type contentfulBlogPostBodyTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBlogPostBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBlogPostBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulBlogPostBodyTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulBlogPostBodyTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulBlogPostBodyTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulBlogPostBodyTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulBlogPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulBlogPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulBlogPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulBlogPostGroupConnection>;
};


type ContentfulBlogPostConnection_distinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


type ContentfulBlogPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostFieldsEnum;
};

type contentfulBlogPostDescriptionTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulBlogPostDescriptionTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulBlogPostDescriptionTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBlogPostDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBlogPostDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulBlogPostDescriptionTextNodeGroupConnection>;
};


type contentfulBlogPostDescriptionTextNodeConnection_distinctArgs = {
  field: contentfulBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulBlogPostDescriptionTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulBlogPostDescriptionTextNodeFieldsEnum;
};

type contentfulBlogPostDescriptionTextNodeEdge = {
  readonly next: Maybe<contentfulBlogPostDescriptionTextNode>;
  readonly node: contentfulBlogPostDescriptionTextNode;
  readonly previous: Maybe<contentfulBlogPostDescriptionTextNode>;
};

enum contentfulBlogPostDescriptionTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  description = 'description',
  sys___type = 'sys.type',
  childrenMarkdownRemark = 'childrenMarkdownRemark',
  childrenMarkdownRemark___id = 'childrenMarkdownRemark.id',
  childrenMarkdownRemark___frontmatter___title = 'childrenMarkdownRemark.frontmatter.title',
  childrenMarkdownRemark___excerpt = 'childrenMarkdownRemark.excerpt',
  childrenMarkdownRemark___rawMarkdownBody = 'childrenMarkdownRemark.rawMarkdownBody',
  childrenMarkdownRemark___html = 'childrenMarkdownRemark.html',
  childrenMarkdownRemark___htmlAst = 'childrenMarkdownRemark.htmlAst',
  childrenMarkdownRemark___excerptAst = 'childrenMarkdownRemark.excerptAst',
  childrenMarkdownRemark___headings = 'childrenMarkdownRemark.headings',
  childrenMarkdownRemark___headings___id = 'childrenMarkdownRemark.headings.id',
  childrenMarkdownRemark___headings___value = 'childrenMarkdownRemark.headings.value',
  childrenMarkdownRemark___headings___depth = 'childrenMarkdownRemark.headings.depth',
  childrenMarkdownRemark___timeToRead = 'childrenMarkdownRemark.timeToRead',
  childrenMarkdownRemark___tableOfContents = 'childrenMarkdownRemark.tableOfContents',
  childrenMarkdownRemark___wordCount___paragraphs = 'childrenMarkdownRemark.wordCount.paragraphs',
  childrenMarkdownRemark___wordCount___sentences = 'childrenMarkdownRemark.wordCount.sentences',
  childrenMarkdownRemark___wordCount___words = 'childrenMarkdownRemark.wordCount.words',
  childrenMarkdownRemark___parent___id = 'childrenMarkdownRemark.parent.id',
  childrenMarkdownRemark___parent___parent___id = 'childrenMarkdownRemark.parent.parent.id',
  childrenMarkdownRemark___parent___parent___children = 'childrenMarkdownRemark.parent.parent.children',
  childrenMarkdownRemark___parent___children = 'childrenMarkdownRemark.parent.children',
  childrenMarkdownRemark___parent___children___id = 'childrenMarkdownRemark.parent.children.id',
  childrenMarkdownRemark___parent___children___children = 'childrenMarkdownRemark.parent.children.children',
  childrenMarkdownRemark___parent___internal___content = 'childrenMarkdownRemark.parent.internal.content',
  childrenMarkdownRemark___parent___internal___contentDigest = 'childrenMarkdownRemark.parent.internal.contentDigest',
  childrenMarkdownRemark___parent___internal___description = 'childrenMarkdownRemark.parent.internal.description',
  childrenMarkdownRemark___parent___internal___fieldOwners = 'childrenMarkdownRemark.parent.internal.fieldOwners',
  childrenMarkdownRemark___parent___internal___ignoreType = 'childrenMarkdownRemark.parent.internal.ignoreType',
  childrenMarkdownRemark___parent___internal___mediaType = 'childrenMarkdownRemark.parent.internal.mediaType',
  childrenMarkdownRemark___parent___internal___owner = 'childrenMarkdownRemark.parent.internal.owner',
  childrenMarkdownRemark___parent___internal___type = 'childrenMarkdownRemark.parent.internal.type',
  childrenMarkdownRemark___children = 'childrenMarkdownRemark.children',
  childrenMarkdownRemark___children___id = 'childrenMarkdownRemark.children.id',
  childrenMarkdownRemark___children___parent___id = 'childrenMarkdownRemark.children.parent.id',
  childrenMarkdownRemark___children___parent___children = 'childrenMarkdownRemark.children.parent.children',
  childrenMarkdownRemark___children___children = 'childrenMarkdownRemark.children.children',
  childrenMarkdownRemark___children___children___id = 'childrenMarkdownRemark.children.children.id',
  childrenMarkdownRemark___children___children___children = 'childrenMarkdownRemark.children.children.children',
  childrenMarkdownRemark___children___internal___content = 'childrenMarkdownRemark.children.internal.content',
  childrenMarkdownRemark___children___internal___contentDigest = 'childrenMarkdownRemark.children.internal.contentDigest',
  childrenMarkdownRemark___children___internal___description = 'childrenMarkdownRemark.children.internal.description',
  childrenMarkdownRemark___children___internal___fieldOwners = 'childrenMarkdownRemark.children.internal.fieldOwners',
  childrenMarkdownRemark___children___internal___ignoreType = 'childrenMarkdownRemark.children.internal.ignoreType',
  childrenMarkdownRemark___children___internal___mediaType = 'childrenMarkdownRemark.children.internal.mediaType',
  childrenMarkdownRemark___children___internal___owner = 'childrenMarkdownRemark.children.internal.owner',
  childrenMarkdownRemark___children___internal___type = 'childrenMarkdownRemark.children.internal.type',
  childrenMarkdownRemark___internal___content = 'childrenMarkdownRemark.internal.content',
  childrenMarkdownRemark___internal___contentDigest = 'childrenMarkdownRemark.internal.contentDigest',
  childrenMarkdownRemark___internal___description = 'childrenMarkdownRemark.internal.description',
  childrenMarkdownRemark___internal___fieldOwners = 'childrenMarkdownRemark.internal.fieldOwners',
  childrenMarkdownRemark___internal___ignoreType = 'childrenMarkdownRemark.internal.ignoreType',
  childrenMarkdownRemark___internal___mediaType = 'childrenMarkdownRemark.internal.mediaType',
  childrenMarkdownRemark___internal___owner = 'childrenMarkdownRemark.internal.owner',
  childrenMarkdownRemark___internal___type = 'childrenMarkdownRemark.internal.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark.headings.id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type'
}

type contentfulBlogPostDescriptionTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulBlogPostDescriptionTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulBlogPostDescriptionTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
};

type contentfulBlogPostDescriptionTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBlogPostDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBlogPostDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulBlogPostDescriptionTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulBlogPostDescriptionTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulBlogPostDescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulBlogPostDescriptionTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulBlogPostEdge = {
  readonly next: Maybe<ContentfulBlogPost>;
  readonly node: ContentfulBlogPost;
  readonly previous: Maybe<ContentfulBlogPost>;
};

enum ContentfulBlogPostFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  title = 'title',
  slug = 'slug',
  publishDate = 'publishDate',
  heroImage___contentful_id = 'heroImage.contentful_id',
  heroImage___id = 'heroImage.id',
  heroImage___spaceId = 'heroImage.spaceId',
  heroImage___createdAt = 'heroImage.createdAt',
  heroImage___updatedAt = 'heroImage.updatedAt',
  heroImage___file___url = 'heroImage.file.url',
  heroImage___file___details___size = 'heroImage.file.details.size',
  heroImage___file___fileName = 'heroImage.file.fileName',
  heroImage___file___contentType = 'heroImage.file.contentType',
  heroImage___title = 'heroImage.title',
  heroImage___description = 'heroImage.description',
  heroImage___node_locale = 'heroImage.node_locale',
  heroImage___sys___type = 'heroImage.sys.type',
  heroImage___sys___revision = 'heroImage.sys.revision',
  heroImage___fixed___base64 = 'heroImage.fixed.base64',
  heroImage___fixed___tracedSVG = 'heroImage.fixed.tracedSVG',
  heroImage___fixed___aspectRatio = 'heroImage.fixed.aspectRatio',
  heroImage___fixed___width = 'heroImage.fixed.width',
  heroImage___fixed___height = 'heroImage.fixed.height',
  heroImage___fixed___src = 'heroImage.fixed.src',
  heroImage___fixed___srcSet = 'heroImage.fixed.srcSet',
  heroImage___fixed___srcWebp = 'heroImage.fixed.srcWebp',
  heroImage___fixed___srcSetWebp = 'heroImage.fixed.srcSetWebp',
  heroImage___resolutions___base64 = 'heroImage.resolutions.base64',
  heroImage___resolutions___tracedSVG = 'heroImage.resolutions.tracedSVG',
  heroImage___resolutions___aspectRatio = 'heroImage.resolutions.aspectRatio',
  heroImage___resolutions___width = 'heroImage.resolutions.width',
  heroImage___resolutions___height = 'heroImage.resolutions.height',
  heroImage___resolutions___src = 'heroImage.resolutions.src',
  heroImage___resolutions___srcSet = 'heroImage.resolutions.srcSet',
  heroImage___resolutions___srcWebp = 'heroImage.resolutions.srcWebp',
  heroImage___resolutions___srcSetWebp = 'heroImage.resolutions.srcSetWebp',
  heroImage___fluid___base64 = 'heroImage.fluid.base64',
  heroImage___fluid___tracedSVG = 'heroImage.fluid.tracedSVG',
  heroImage___fluid___aspectRatio = 'heroImage.fluid.aspectRatio',
  heroImage___fluid___src = 'heroImage.fluid.src',
  heroImage___fluid___srcSet = 'heroImage.fluid.srcSet',
  heroImage___fluid___srcWebp = 'heroImage.fluid.srcWebp',
  heroImage___fluid___srcSetWebp = 'heroImage.fluid.srcSetWebp',
  heroImage___fluid___sizes = 'heroImage.fluid.sizes',
  heroImage___sizes___base64 = 'heroImage.sizes.base64',
  heroImage___sizes___tracedSVG = 'heroImage.sizes.tracedSVG',
  heroImage___sizes___aspectRatio = 'heroImage.sizes.aspectRatio',
  heroImage___sizes___src = 'heroImage.sizes.src',
  heroImage___sizes___srcSet = 'heroImage.sizes.srcSet',
  heroImage___sizes___srcWebp = 'heroImage.sizes.srcWebp',
  heroImage___sizes___srcSetWebp = 'heroImage.sizes.srcSetWebp',
  heroImage___sizes___sizes = 'heroImage.sizes.sizes',
  heroImage___resize___base64 = 'heroImage.resize.base64',
  heroImage___resize___tracedSVG = 'heroImage.resize.tracedSVG',
  heroImage___resize___src = 'heroImage.resize.src',
  heroImage___resize___width = 'heroImage.resize.width',
  heroImage___resize___height = 'heroImage.resize.height',
  heroImage___resize___aspectRatio = 'heroImage.resize.aspectRatio',
  heroImage___parent___id = 'heroImage.parent.id',
  heroImage___parent___parent___id = 'heroImage.parent.parent.id',
  heroImage___parent___parent___children = 'heroImage.parent.parent.children',
  heroImage___parent___children = 'heroImage.parent.children',
  heroImage___parent___children___id = 'heroImage.parent.children.id',
  heroImage___parent___children___children = 'heroImage.parent.children.children',
  heroImage___parent___internal___content = 'heroImage.parent.internal.content',
  heroImage___parent___internal___contentDigest = 'heroImage.parent.internal.contentDigest',
  heroImage___parent___internal___description = 'heroImage.parent.internal.description',
  heroImage___parent___internal___fieldOwners = 'heroImage.parent.internal.fieldOwners',
  heroImage___parent___internal___ignoreType = 'heroImage.parent.internal.ignoreType',
  heroImage___parent___internal___mediaType = 'heroImage.parent.internal.mediaType',
  heroImage___parent___internal___owner = 'heroImage.parent.internal.owner',
  heroImage___parent___internal___type = 'heroImage.parent.internal.type',
  heroImage___children = 'heroImage.children',
  heroImage___children___id = 'heroImage.children.id',
  heroImage___children___parent___id = 'heroImage.children.parent.id',
  heroImage___children___parent___children = 'heroImage.children.parent.children',
  heroImage___children___children = 'heroImage.children.children',
  heroImage___children___children___id = 'heroImage.children.children.id',
  heroImage___children___children___children = 'heroImage.children.children.children',
  heroImage___children___internal___content = 'heroImage.children.internal.content',
  heroImage___children___internal___contentDigest = 'heroImage.children.internal.contentDigest',
  heroImage___children___internal___description = 'heroImage.children.internal.description',
  heroImage___children___internal___fieldOwners = 'heroImage.children.internal.fieldOwners',
  heroImage___children___internal___ignoreType = 'heroImage.children.internal.ignoreType',
  heroImage___children___internal___mediaType = 'heroImage.children.internal.mediaType',
  heroImage___children___internal___owner = 'heroImage.children.internal.owner',
  heroImage___children___internal___type = 'heroImage.children.internal.type',
  heroImage___internal___content = 'heroImage.internal.content',
  heroImage___internal___contentDigest = 'heroImage.internal.contentDigest',
  heroImage___internal___description = 'heroImage.internal.description',
  heroImage___internal___fieldOwners = 'heroImage.internal.fieldOwners',
  heroImage___internal___ignoreType = 'heroImage.internal.ignoreType',
  heroImage___internal___mediaType = 'heroImage.internal.mediaType',
  heroImage___internal___owner = 'heroImage.internal.owner',
  heroImage___internal___type = 'heroImage.internal.type',
  description___id = 'description.id',
  description___parent___id = 'description.parent.id',
  description___parent___parent___id = 'description.parent.parent.id',
  description___parent___parent___children = 'description.parent.parent.children',
  description___parent___children = 'description.parent.children',
  description___parent___children___id = 'description.parent.children.id',
  description___parent___children___children = 'description.parent.children.children',
  description___parent___internal___content = 'description.parent.internal.content',
  description___parent___internal___contentDigest = 'description.parent.internal.contentDigest',
  description___parent___internal___description = 'description.parent.internal.description',
  description___parent___internal___fieldOwners = 'description.parent.internal.fieldOwners',
  description___parent___internal___ignoreType = 'description.parent.internal.ignoreType',
  description___parent___internal___mediaType = 'description.parent.internal.mediaType',
  description___parent___internal___owner = 'description.parent.internal.owner',
  description___parent___internal___type = 'description.parent.internal.type',
  description___children = 'description.children',
  description___children___id = 'description.children.id',
  description___children___parent___id = 'description.children.parent.id',
  description___children___parent___children = 'description.children.parent.children',
  description___children___children = 'description.children.children',
  description___children___children___id = 'description.children.children.id',
  description___children___children___children = 'description.children.children.children',
  description___children___internal___content = 'description.children.internal.content',
  description___children___internal___contentDigest = 'description.children.internal.contentDigest',
  description___children___internal___description = 'description.children.internal.description',
  description___children___internal___fieldOwners = 'description.children.internal.fieldOwners',
  description___children___internal___ignoreType = 'description.children.internal.ignoreType',
  description___children___internal___mediaType = 'description.children.internal.mediaType',
  description___children___internal___owner = 'description.children.internal.owner',
  description___children___internal___type = 'description.children.internal.type',
  description___internal___content = 'description.internal.content',
  description___internal___contentDigest = 'description.internal.contentDigest',
  description___internal___description = 'description.internal.description',
  description___internal___fieldOwners = 'description.internal.fieldOwners',
  description___internal___ignoreType = 'description.internal.ignoreType',
  description___internal___mediaType = 'description.internal.mediaType',
  description___internal___owner = 'description.internal.owner',
  description___internal___type = 'description.internal.type',
  description___description = 'description.description',
  description___sys___type = 'description.sys.type',
  description___childrenMarkdownRemark = 'description.childrenMarkdownRemark',
  description___childrenMarkdownRemark___id = 'description.childrenMarkdownRemark.id',
  description___childrenMarkdownRemark___frontmatter___title = 'description.childrenMarkdownRemark.frontmatter.title',
  description___childrenMarkdownRemark___excerpt = 'description.childrenMarkdownRemark.excerpt',
  description___childrenMarkdownRemark___rawMarkdownBody = 'description.childrenMarkdownRemark.rawMarkdownBody',
  description___childrenMarkdownRemark___html = 'description.childrenMarkdownRemark.html',
  description___childrenMarkdownRemark___htmlAst = 'description.childrenMarkdownRemark.htmlAst',
  description___childrenMarkdownRemark___excerptAst = 'description.childrenMarkdownRemark.excerptAst',
  description___childrenMarkdownRemark___headings = 'description.childrenMarkdownRemark.headings',
  description___childrenMarkdownRemark___headings___id = 'description.childrenMarkdownRemark.headings.id',
  description___childrenMarkdownRemark___headings___value = 'description.childrenMarkdownRemark.headings.value',
  description___childrenMarkdownRemark___headings___depth = 'description.childrenMarkdownRemark.headings.depth',
  description___childrenMarkdownRemark___timeToRead = 'description.childrenMarkdownRemark.timeToRead',
  description___childrenMarkdownRemark___tableOfContents = 'description.childrenMarkdownRemark.tableOfContents',
  description___childrenMarkdownRemark___wordCount___paragraphs = 'description.childrenMarkdownRemark.wordCount.paragraphs',
  description___childrenMarkdownRemark___wordCount___sentences = 'description.childrenMarkdownRemark.wordCount.sentences',
  description___childrenMarkdownRemark___wordCount___words = 'description.childrenMarkdownRemark.wordCount.words',
  description___childrenMarkdownRemark___parent___id = 'description.childrenMarkdownRemark.parent.id',
  description___childrenMarkdownRemark___parent___children = 'description.childrenMarkdownRemark.parent.children',
  description___childrenMarkdownRemark___children = 'description.childrenMarkdownRemark.children',
  description___childrenMarkdownRemark___children___id = 'description.childrenMarkdownRemark.children.id',
  description___childrenMarkdownRemark___children___children = 'description.childrenMarkdownRemark.children.children',
  description___childrenMarkdownRemark___internal___content = 'description.childrenMarkdownRemark.internal.content',
  description___childrenMarkdownRemark___internal___contentDigest = 'description.childrenMarkdownRemark.internal.contentDigest',
  description___childrenMarkdownRemark___internal___description = 'description.childrenMarkdownRemark.internal.description',
  description___childrenMarkdownRemark___internal___fieldOwners = 'description.childrenMarkdownRemark.internal.fieldOwners',
  description___childrenMarkdownRemark___internal___ignoreType = 'description.childrenMarkdownRemark.internal.ignoreType',
  description___childrenMarkdownRemark___internal___mediaType = 'description.childrenMarkdownRemark.internal.mediaType',
  description___childrenMarkdownRemark___internal___owner = 'description.childrenMarkdownRemark.internal.owner',
  description___childrenMarkdownRemark___internal___type = 'description.childrenMarkdownRemark.internal.type',
  description___childMarkdownRemark___id = 'description.childMarkdownRemark.id',
  description___childMarkdownRemark___frontmatter___title = 'description.childMarkdownRemark.frontmatter.title',
  description___childMarkdownRemark___excerpt = 'description.childMarkdownRemark.excerpt',
  description___childMarkdownRemark___rawMarkdownBody = 'description.childMarkdownRemark.rawMarkdownBody',
  description___childMarkdownRemark___html = 'description.childMarkdownRemark.html',
  description___childMarkdownRemark___htmlAst = 'description.childMarkdownRemark.htmlAst',
  description___childMarkdownRemark___excerptAst = 'description.childMarkdownRemark.excerptAst',
  description___childMarkdownRemark___headings = 'description.childMarkdownRemark.headings',
  description___childMarkdownRemark___headings___id = 'description.childMarkdownRemark.headings.id',
  description___childMarkdownRemark___headings___value = 'description.childMarkdownRemark.headings.value',
  description___childMarkdownRemark___headings___depth = 'description.childMarkdownRemark.headings.depth',
  description___childMarkdownRemark___timeToRead = 'description.childMarkdownRemark.timeToRead',
  description___childMarkdownRemark___tableOfContents = 'description.childMarkdownRemark.tableOfContents',
  description___childMarkdownRemark___wordCount___paragraphs = 'description.childMarkdownRemark.wordCount.paragraphs',
  description___childMarkdownRemark___wordCount___sentences = 'description.childMarkdownRemark.wordCount.sentences',
  description___childMarkdownRemark___wordCount___words = 'description.childMarkdownRemark.wordCount.words',
  description___childMarkdownRemark___parent___id = 'description.childMarkdownRemark.parent.id',
  description___childMarkdownRemark___parent___children = 'description.childMarkdownRemark.parent.children',
  description___childMarkdownRemark___children = 'description.childMarkdownRemark.children',
  description___childMarkdownRemark___children___id = 'description.childMarkdownRemark.children.id',
  description___childMarkdownRemark___children___children = 'description.childMarkdownRemark.children.children',
  description___childMarkdownRemark___internal___content = 'description.childMarkdownRemark.internal.content',
  description___childMarkdownRemark___internal___contentDigest = 'description.childMarkdownRemark.internal.contentDigest',
  description___childMarkdownRemark___internal___description = 'description.childMarkdownRemark.internal.description',
  description___childMarkdownRemark___internal___fieldOwners = 'description.childMarkdownRemark.internal.fieldOwners',
  description___childMarkdownRemark___internal___ignoreType = 'description.childMarkdownRemark.internal.ignoreType',
  description___childMarkdownRemark___internal___mediaType = 'description.childMarkdownRemark.internal.mediaType',
  description___childMarkdownRemark___internal___owner = 'description.childMarkdownRemark.internal.owner',
  description___childMarkdownRemark___internal___type = 'description.childMarkdownRemark.internal.type',
  body___id = 'body.id',
  body___parent___id = 'body.parent.id',
  body___parent___parent___id = 'body.parent.parent.id',
  body___parent___parent___children = 'body.parent.parent.children',
  body___parent___children = 'body.parent.children',
  body___parent___children___id = 'body.parent.children.id',
  body___parent___children___children = 'body.parent.children.children',
  body___parent___internal___content = 'body.parent.internal.content',
  body___parent___internal___contentDigest = 'body.parent.internal.contentDigest',
  body___parent___internal___description = 'body.parent.internal.description',
  body___parent___internal___fieldOwners = 'body.parent.internal.fieldOwners',
  body___parent___internal___ignoreType = 'body.parent.internal.ignoreType',
  body___parent___internal___mediaType = 'body.parent.internal.mediaType',
  body___parent___internal___owner = 'body.parent.internal.owner',
  body___parent___internal___type = 'body.parent.internal.type',
  body___children = 'body.children',
  body___children___id = 'body.children.id',
  body___children___parent___id = 'body.children.parent.id',
  body___children___parent___children = 'body.children.parent.children',
  body___children___children = 'body.children.children',
  body___children___children___id = 'body.children.children.id',
  body___children___children___children = 'body.children.children.children',
  body___children___internal___content = 'body.children.internal.content',
  body___children___internal___contentDigest = 'body.children.internal.contentDigest',
  body___children___internal___description = 'body.children.internal.description',
  body___children___internal___fieldOwners = 'body.children.internal.fieldOwners',
  body___children___internal___ignoreType = 'body.children.internal.ignoreType',
  body___children___internal___mediaType = 'body.children.internal.mediaType',
  body___children___internal___owner = 'body.children.internal.owner',
  body___children___internal___type = 'body.children.internal.type',
  body___internal___content = 'body.internal.content',
  body___internal___contentDigest = 'body.internal.contentDigest',
  body___internal___description = 'body.internal.description',
  body___internal___fieldOwners = 'body.internal.fieldOwners',
  body___internal___ignoreType = 'body.internal.ignoreType',
  body___internal___mediaType = 'body.internal.mediaType',
  body___internal___owner = 'body.internal.owner',
  body___internal___type = 'body.internal.type',
  body___body = 'body.body',
  body___sys___type = 'body.sys.type',
  body___childrenMarkdownRemark = 'body.childrenMarkdownRemark',
  body___childrenMarkdownRemark___id = 'body.childrenMarkdownRemark.id',
  body___childrenMarkdownRemark___frontmatter___title = 'body.childrenMarkdownRemark.frontmatter.title',
  body___childrenMarkdownRemark___excerpt = 'body.childrenMarkdownRemark.excerpt',
  body___childrenMarkdownRemark___rawMarkdownBody = 'body.childrenMarkdownRemark.rawMarkdownBody',
  body___childrenMarkdownRemark___html = 'body.childrenMarkdownRemark.html',
  body___childrenMarkdownRemark___htmlAst = 'body.childrenMarkdownRemark.htmlAst',
  body___childrenMarkdownRemark___excerptAst = 'body.childrenMarkdownRemark.excerptAst',
  body___childrenMarkdownRemark___headings = 'body.childrenMarkdownRemark.headings',
  body___childrenMarkdownRemark___headings___id = 'body.childrenMarkdownRemark.headings.id',
  body___childrenMarkdownRemark___headings___value = 'body.childrenMarkdownRemark.headings.value',
  body___childrenMarkdownRemark___headings___depth = 'body.childrenMarkdownRemark.headings.depth',
  body___childrenMarkdownRemark___timeToRead = 'body.childrenMarkdownRemark.timeToRead',
  body___childrenMarkdownRemark___tableOfContents = 'body.childrenMarkdownRemark.tableOfContents',
  body___childrenMarkdownRemark___wordCount___paragraphs = 'body.childrenMarkdownRemark.wordCount.paragraphs',
  body___childrenMarkdownRemark___wordCount___sentences = 'body.childrenMarkdownRemark.wordCount.sentences',
  body___childrenMarkdownRemark___wordCount___words = 'body.childrenMarkdownRemark.wordCount.words',
  body___childrenMarkdownRemark___parent___id = 'body.childrenMarkdownRemark.parent.id',
  body___childrenMarkdownRemark___parent___children = 'body.childrenMarkdownRemark.parent.children',
  body___childrenMarkdownRemark___children = 'body.childrenMarkdownRemark.children',
  body___childrenMarkdownRemark___children___id = 'body.childrenMarkdownRemark.children.id',
  body___childrenMarkdownRemark___children___children = 'body.childrenMarkdownRemark.children.children',
  body___childrenMarkdownRemark___internal___content = 'body.childrenMarkdownRemark.internal.content',
  body___childrenMarkdownRemark___internal___contentDigest = 'body.childrenMarkdownRemark.internal.contentDigest',
  body___childrenMarkdownRemark___internal___description = 'body.childrenMarkdownRemark.internal.description',
  body___childrenMarkdownRemark___internal___fieldOwners = 'body.childrenMarkdownRemark.internal.fieldOwners',
  body___childrenMarkdownRemark___internal___ignoreType = 'body.childrenMarkdownRemark.internal.ignoreType',
  body___childrenMarkdownRemark___internal___mediaType = 'body.childrenMarkdownRemark.internal.mediaType',
  body___childrenMarkdownRemark___internal___owner = 'body.childrenMarkdownRemark.internal.owner',
  body___childrenMarkdownRemark___internal___type = 'body.childrenMarkdownRemark.internal.type',
  body___childMarkdownRemark___id = 'body.childMarkdownRemark.id',
  body___childMarkdownRemark___frontmatter___title = 'body.childMarkdownRemark.frontmatter.title',
  body___childMarkdownRemark___excerpt = 'body.childMarkdownRemark.excerpt',
  body___childMarkdownRemark___rawMarkdownBody = 'body.childMarkdownRemark.rawMarkdownBody',
  body___childMarkdownRemark___html = 'body.childMarkdownRemark.html',
  body___childMarkdownRemark___htmlAst = 'body.childMarkdownRemark.htmlAst',
  body___childMarkdownRemark___excerptAst = 'body.childMarkdownRemark.excerptAst',
  body___childMarkdownRemark___headings = 'body.childMarkdownRemark.headings',
  body___childMarkdownRemark___headings___id = 'body.childMarkdownRemark.headings.id',
  body___childMarkdownRemark___headings___value = 'body.childMarkdownRemark.headings.value',
  body___childMarkdownRemark___headings___depth = 'body.childMarkdownRemark.headings.depth',
  body___childMarkdownRemark___timeToRead = 'body.childMarkdownRemark.timeToRead',
  body___childMarkdownRemark___tableOfContents = 'body.childMarkdownRemark.tableOfContents',
  body___childMarkdownRemark___wordCount___paragraphs = 'body.childMarkdownRemark.wordCount.paragraphs',
  body___childMarkdownRemark___wordCount___sentences = 'body.childMarkdownRemark.wordCount.sentences',
  body___childMarkdownRemark___wordCount___words = 'body.childMarkdownRemark.wordCount.words',
  body___childMarkdownRemark___parent___id = 'body.childMarkdownRemark.parent.id',
  body___childMarkdownRemark___parent___children = 'body.childMarkdownRemark.parent.children',
  body___childMarkdownRemark___children = 'body.childMarkdownRemark.children',
  body___childMarkdownRemark___children___id = 'body.childMarkdownRemark.children.id',
  body___childMarkdownRemark___children___children = 'body.childMarkdownRemark.children.children',
  body___childMarkdownRemark___internal___content = 'body.childMarkdownRemark.internal.content',
  body___childMarkdownRemark___internal___contentDigest = 'body.childMarkdownRemark.internal.contentDigest',
  body___childMarkdownRemark___internal___description = 'body.childMarkdownRemark.internal.description',
  body___childMarkdownRemark___internal___fieldOwners = 'body.childMarkdownRemark.internal.fieldOwners',
  body___childMarkdownRemark___internal___ignoreType = 'body.childMarkdownRemark.internal.ignoreType',
  body___childMarkdownRemark___internal___mediaType = 'body.childMarkdownRemark.internal.mediaType',
  body___childMarkdownRemark___internal___owner = 'body.childMarkdownRemark.internal.owner',
  body___childMarkdownRemark___internal___type = 'body.childMarkdownRemark.internal.type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  sys___contentType___sys___type = 'sys.contentType.sys.type',
  sys___contentType___sys___linkType = 'sys.contentType.sys.linkType',
  sys___contentType___sys___id = 'sys.contentType.sys.id',
  tags = 'tags',
  author___contentful_id = 'author.contentful_id',
  author___id = 'author.id',
  author___node_locale = 'author.node_locale',
  author___name = 'author.name',
  author___title = 'author.title',
  author___company = 'author.company',
  author___email = 'author.email',
  author___phone = 'author.phone',
  author___facebook = 'author.facebook',
  author___twitter = 'author.twitter',
  author___github = 'author.github',
  author___image___contentful_id = 'author.image.contentful_id',
  author___image___id = 'author.image.id',
  author___image___spaceId = 'author.image.spaceId',
  author___image___createdAt = 'author.image.createdAt',
  author___image___updatedAt = 'author.image.updatedAt',
  author___image___file___url = 'author.image.file.url',
  author___image___file___fileName = 'author.image.file.fileName',
  author___image___file___contentType = 'author.image.file.contentType',
  author___image___title = 'author.image.title',
  author___image___description = 'author.image.description',
  author___image___node_locale = 'author.image.node_locale',
  author___image___sys___type = 'author.image.sys.type',
  author___image___sys___revision = 'author.image.sys.revision',
  author___image___fixed___base64 = 'author.image.fixed.base64',
  author___image___fixed___tracedSVG = 'author.image.fixed.tracedSVG',
  author___image___fixed___aspectRatio = 'author.image.fixed.aspectRatio',
  author___image___fixed___width = 'author.image.fixed.width',
  author___image___fixed___height = 'author.image.fixed.height',
  author___image___fixed___src = 'author.image.fixed.src',
  author___image___fixed___srcSet = 'author.image.fixed.srcSet',
  author___image___fixed___srcWebp = 'author.image.fixed.srcWebp',
  author___image___fixed___srcSetWebp = 'author.image.fixed.srcSetWebp',
  author___image___resolutions___base64 = 'author.image.resolutions.base64',
  author___image___resolutions___tracedSVG = 'author.image.resolutions.tracedSVG',
  author___image___resolutions___aspectRatio = 'author.image.resolutions.aspectRatio',
  author___image___resolutions___width = 'author.image.resolutions.width',
  author___image___resolutions___height = 'author.image.resolutions.height',
  author___image___resolutions___src = 'author.image.resolutions.src',
  author___image___resolutions___srcSet = 'author.image.resolutions.srcSet',
  author___image___resolutions___srcWebp = 'author.image.resolutions.srcWebp',
  author___image___resolutions___srcSetWebp = 'author.image.resolutions.srcSetWebp',
  author___image___fluid___base64 = 'author.image.fluid.base64',
  author___image___fluid___tracedSVG = 'author.image.fluid.tracedSVG',
  author___image___fluid___aspectRatio = 'author.image.fluid.aspectRatio',
  author___image___fluid___src = 'author.image.fluid.src',
  author___image___fluid___srcSet = 'author.image.fluid.srcSet',
  author___image___fluid___srcWebp = 'author.image.fluid.srcWebp',
  author___image___fluid___srcSetWebp = 'author.image.fluid.srcSetWebp',
  author___image___fluid___sizes = 'author.image.fluid.sizes',
  author___image___sizes___base64 = 'author.image.sizes.base64',
  author___image___sizes___tracedSVG = 'author.image.sizes.tracedSVG',
  author___image___sizes___aspectRatio = 'author.image.sizes.aspectRatio',
  author___image___sizes___src = 'author.image.sizes.src',
  author___image___sizes___srcSet = 'author.image.sizes.srcSet',
  author___image___sizes___srcWebp = 'author.image.sizes.srcWebp',
  author___image___sizes___srcSetWebp = 'author.image.sizes.srcSetWebp',
  author___image___sizes___sizes = 'author.image.sizes.sizes',
  author___image___resize___base64 = 'author.image.resize.base64',
  author___image___resize___tracedSVG = 'author.image.resize.tracedSVG',
  author___image___resize___src = 'author.image.resize.src',
  author___image___resize___width = 'author.image.resize.width',
  author___image___resize___height = 'author.image.resize.height',
  author___image___resize___aspectRatio = 'author.image.resize.aspectRatio',
  author___image___parent___id = 'author.image.parent.id',
  author___image___parent___children = 'author.image.parent.children',
  author___image___children = 'author.image.children',
  author___image___children___id = 'author.image.children.id',
  author___image___children___children = 'author.image.children.children',
  author___image___internal___content = 'author.image.internal.content',
  author___image___internal___contentDigest = 'author.image.internal.contentDigest',
  author___image___internal___description = 'author.image.internal.description',
  author___image___internal___fieldOwners = 'author.image.internal.fieldOwners',
  author___image___internal___ignoreType = 'author.image.internal.ignoreType',
  author___image___internal___mediaType = 'author.image.internal.mediaType',
  author___image___internal___owner = 'author.image.internal.owner',
  author___image___internal___type = 'author.image.internal.type',
  author___blog_post = 'author.blog_post',
  author___blog_post___contentful_id = 'author.blog_post.contentful_id',
  author___blog_post___id = 'author.blog_post.id',
  author___blog_post___node_locale = 'author.blog_post.node_locale',
  author___blog_post___title = 'author.blog_post.title',
  author___blog_post___slug = 'author.blog_post.slug',
  author___blog_post___publishDate = 'author.blog_post.publishDate',
  author___blog_post___heroImage___contentful_id = 'author.blog_post.heroImage.contentful_id',
  author___blog_post___heroImage___id = 'author.blog_post.heroImage.id',
  author___blog_post___heroImage___spaceId = 'author.blog_post.heroImage.spaceId',
  author___blog_post___heroImage___createdAt = 'author.blog_post.heroImage.createdAt',
  author___blog_post___heroImage___updatedAt = 'author.blog_post.heroImage.updatedAt',
  author___blog_post___heroImage___title = 'author.blog_post.heroImage.title',
  author___blog_post___heroImage___description = 'author.blog_post.heroImage.description',
  author___blog_post___heroImage___node_locale = 'author.blog_post.heroImage.node_locale',
  author___blog_post___heroImage___children = 'author.blog_post.heroImage.children',
  author___blog_post___description___id = 'author.blog_post.description.id',
  author___blog_post___description___children = 'author.blog_post.description.children',
  author___blog_post___description___description = 'author.blog_post.description.description',
  author___blog_post___description___childrenMarkdownRemark = 'author.blog_post.description.childrenMarkdownRemark',
  author___blog_post___body___id = 'author.blog_post.body.id',
  author___blog_post___body___children = 'author.blog_post.body.children',
  author___blog_post___body___body = 'author.blog_post.body.body',
  author___blog_post___body___childrenMarkdownRemark = 'author.blog_post.body.childrenMarkdownRemark',
  author___blog_post___spaceId = 'author.blog_post.spaceId',
  author___blog_post___createdAt = 'author.blog_post.createdAt',
  author___blog_post___updatedAt = 'author.blog_post.updatedAt',
  author___blog_post___sys___type = 'author.blog_post.sys.type',
  author___blog_post___sys___revision = 'author.blog_post.sys.revision',
  author___blog_post___tags = 'author.blog_post.tags',
  author___blog_post___author___contentful_id = 'author.blog_post.author.contentful_id',
  author___blog_post___author___id = 'author.blog_post.author.id',
  author___blog_post___author___node_locale = 'author.blog_post.author.node_locale',
  author___blog_post___author___name = 'author.blog_post.author.name',
  author___blog_post___author___title = 'author.blog_post.author.title',
  author___blog_post___author___company = 'author.blog_post.author.company',
  author___blog_post___author___email = 'author.blog_post.author.email',
  author___blog_post___author___phone = 'author.blog_post.author.phone',
  author___blog_post___author___facebook = 'author.blog_post.author.facebook',
  author___blog_post___author___twitter = 'author.blog_post.author.twitter',
  author___blog_post___author___github = 'author.blog_post.author.github',
  author___blog_post___author___blog_post = 'author.blog_post.author.blog_post',
  author___blog_post___author___spaceId = 'author.blog_post.author.spaceId',
  author___blog_post___author___createdAt = 'author.blog_post.author.createdAt',
  author___blog_post___author___updatedAt = 'author.blog_post.author.updatedAt',
  author___blog_post___author___childrenContentfulPersonShortBioTextNode = 'author.blog_post.author.childrenContentfulPersonShortBioTextNode',
  author___blog_post___author___children = 'author.blog_post.author.children',
  author___blog_post___gatsbyPath = 'author.blog_post.gatsbyPath',
  author___blog_post___childrenContentfulBlogPostBodyTextNode = 'author.blog_post.childrenContentfulBlogPostBodyTextNode',
  author___blog_post___childrenContentfulBlogPostBodyTextNode___id = 'author.blog_post.childrenContentfulBlogPostBodyTextNode.id',
  author___blog_post___childrenContentfulBlogPostBodyTextNode___children = 'author.blog_post.childrenContentfulBlogPostBodyTextNode.children',
  author___blog_post___childrenContentfulBlogPostBodyTextNode___body = 'author.blog_post.childrenContentfulBlogPostBodyTextNode.body',
  author___blog_post___childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark = 'author.blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark',
  author___blog_post___childContentfulBlogPostBodyTextNode___id = 'author.blog_post.childContentfulBlogPostBodyTextNode.id',
  author___blog_post___childContentfulBlogPostBodyTextNode___children = 'author.blog_post.childContentfulBlogPostBodyTextNode.children',
  author___blog_post___childContentfulBlogPostBodyTextNode___body = 'author.blog_post.childContentfulBlogPostBodyTextNode.body',
  author___blog_post___childContentfulBlogPostBodyTextNode___childrenMarkdownRemark = 'author.blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark',
  author___blog_post___childrenContentfulBlogPostDescriptionTextNode = 'author.blog_post.childrenContentfulBlogPostDescriptionTextNode',
  author___blog_post___childrenContentfulBlogPostDescriptionTextNode___id = 'author.blog_post.childrenContentfulBlogPostDescriptionTextNode.id',
  author___blog_post___childrenContentfulBlogPostDescriptionTextNode___children = 'author.blog_post.childrenContentfulBlogPostDescriptionTextNode.children',
  author___blog_post___childrenContentfulBlogPostDescriptionTextNode___description = 'author.blog_post.childrenContentfulBlogPostDescriptionTextNode.description',
  author___blog_post___childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark = 'author.blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark',
  author___blog_post___childContentfulBlogPostDescriptionTextNode___id = 'author.blog_post.childContentfulBlogPostDescriptionTextNode.id',
  author___blog_post___childContentfulBlogPostDescriptionTextNode___children = 'author.blog_post.childContentfulBlogPostDescriptionTextNode.children',
  author___blog_post___childContentfulBlogPostDescriptionTextNode___description = 'author.blog_post.childContentfulBlogPostDescriptionTextNode.description',
  author___blog_post___childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark = 'author.blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark',
  author___blog_post___parent___id = 'author.blog_post.parent.id',
  author___blog_post___parent___children = 'author.blog_post.parent.children',
  author___blog_post___children = 'author.blog_post.children',
  author___blog_post___children___id = 'author.blog_post.children.id',
  author___blog_post___children___children = 'author.blog_post.children.children',
  author___blog_post___internal___content = 'author.blog_post.internal.content',
  author___blog_post___internal___contentDigest = 'author.blog_post.internal.contentDigest',
  author___blog_post___internal___description = 'author.blog_post.internal.description',
  author___blog_post___internal___fieldOwners = 'author.blog_post.internal.fieldOwners',
  author___blog_post___internal___ignoreType = 'author.blog_post.internal.ignoreType',
  author___blog_post___internal___mediaType = 'author.blog_post.internal.mediaType',
  author___blog_post___internal___owner = 'author.blog_post.internal.owner',
  author___blog_post___internal___type = 'author.blog_post.internal.type',
  author___shortBio___id = 'author.shortBio.id',
  author___shortBio___parent___id = 'author.shortBio.parent.id',
  author___shortBio___parent___children = 'author.shortBio.parent.children',
  author___shortBio___children = 'author.shortBio.children',
  author___shortBio___children___id = 'author.shortBio.children.id',
  author___shortBio___children___children = 'author.shortBio.children.children',
  author___shortBio___internal___content = 'author.shortBio.internal.content',
  author___shortBio___internal___contentDigest = 'author.shortBio.internal.contentDigest',
  author___shortBio___internal___description = 'author.shortBio.internal.description',
  author___shortBio___internal___fieldOwners = 'author.shortBio.internal.fieldOwners',
  author___shortBio___internal___ignoreType = 'author.shortBio.internal.ignoreType',
  author___shortBio___internal___mediaType = 'author.shortBio.internal.mediaType',
  author___shortBio___internal___owner = 'author.shortBio.internal.owner',
  author___shortBio___internal___type = 'author.shortBio.internal.type',
  author___shortBio___shortBio = 'author.shortBio.shortBio',
  author___shortBio___sys___type = 'author.shortBio.sys.type',
  author___shortBio___childrenMarkdownRemark = 'author.shortBio.childrenMarkdownRemark',
  author___shortBio___childrenMarkdownRemark___id = 'author.shortBio.childrenMarkdownRemark.id',
  author___shortBio___childrenMarkdownRemark___excerpt = 'author.shortBio.childrenMarkdownRemark.excerpt',
  author___shortBio___childrenMarkdownRemark___rawMarkdownBody = 'author.shortBio.childrenMarkdownRemark.rawMarkdownBody',
  author___shortBio___childrenMarkdownRemark___html = 'author.shortBio.childrenMarkdownRemark.html',
  author___shortBio___childrenMarkdownRemark___htmlAst = 'author.shortBio.childrenMarkdownRemark.htmlAst',
  author___shortBio___childrenMarkdownRemark___excerptAst = 'author.shortBio.childrenMarkdownRemark.excerptAst',
  author___shortBio___childrenMarkdownRemark___headings = 'author.shortBio.childrenMarkdownRemark.headings',
  author___shortBio___childrenMarkdownRemark___timeToRead = 'author.shortBio.childrenMarkdownRemark.timeToRead',
  author___shortBio___childrenMarkdownRemark___tableOfContents = 'author.shortBio.childrenMarkdownRemark.tableOfContents',
  author___shortBio___childrenMarkdownRemark___children = 'author.shortBio.childrenMarkdownRemark.children',
  author___shortBio___childMarkdownRemark___id = 'author.shortBio.childMarkdownRemark.id',
  author___shortBio___childMarkdownRemark___excerpt = 'author.shortBio.childMarkdownRemark.excerpt',
  author___shortBio___childMarkdownRemark___rawMarkdownBody = 'author.shortBio.childMarkdownRemark.rawMarkdownBody',
  author___shortBio___childMarkdownRemark___html = 'author.shortBio.childMarkdownRemark.html',
  author___shortBio___childMarkdownRemark___htmlAst = 'author.shortBio.childMarkdownRemark.htmlAst',
  author___shortBio___childMarkdownRemark___excerptAst = 'author.shortBio.childMarkdownRemark.excerptAst',
  author___shortBio___childMarkdownRemark___headings = 'author.shortBio.childMarkdownRemark.headings',
  author___shortBio___childMarkdownRemark___timeToRead = 'author.shortBio.childMarkdownRemark.timeToRead',
  author___shortBio___childMarkdownRemark___tableOfContents = 'author.shortBio.childMarkdownRemark.tableOfContents',
  author___shortBio___childMarkdownRemark___children = 'author.shortBio.childMarkdownRemark.children',
  author___spaceId = 'author.spaceId',
  author___createdAt = 'author.createdAt',
  author___updatedAt = 'author.updatedAt',
  author___sys___type = 'author.sys.type',
  author___sys___revision = 'author.sys.revision',
  author___childrenContentfulPersonShortBioTextNode = 'author.childrenContentfulPersonShortBioTextNode',
  author___childrenContentfulPersonShortBioTextNode___id = 'author.childrenContentfulPersonShortBioTextNode.id',
  author___childrenContentfulPersonShortBioTextNode___parent___id = 'author.childrenContentfulPersonShortBioTextNode.parent.id',
  author___childrenContentfulPersonShortBioTextNode___parent___children = 'author.childrenContentfulPersonShortBioTextNode.parent.children',
  author___childrenContentfulPersonShortBioTextNode___children = 'author.childrenContentfulPersonShortBioTextNode.children',
  author___childrenContentfulPersonShortBioTextNode___children___id = 'author.childrenContentfulPersonShortBioTextNode.children.id',
  author___childrenContentfulPersonShortBioTextNode___children___children = 'author.childrenContentfulPersonShortBioTextNode.children.children',
  author___childrenContentfulPersonShortBioTextNode___internal___content = 'author.childrenContentfulPersonShortBioTextNode.internal.content',
  author___childrenContentfulPersonShortBioTextNode___internal___contentDigest = 'author.childrenContentfulPersonShortBioTextNode.internal.contentDigest',
  author___childrenContentfulPersonShortBioTextNode___internal___description = 'author.childrenContentfulPersonShortBioTextNode.internal.description',
  author___childrenContentfulPersonShortBioTextNode___internal___fieldOwners = 'author.childrenContentfulPersonShortBioTextNode.internal.fieldOwners',
  author___childrenContentfulPersonShortBioTextNode___internal___ignoreType = 'author.childrenContentfulPersonShortBioTextNode.internal.ignoreType',
  author___childrenContentfulPersonShortBioTextNode___internal___mediaType = 'author.childrenContentfulPersonShortBioTextNode.internal.mediaType',
  author___childrenContentfulPersonShortBioTextNode___internal___owner = 'author.childrenContentfulPersonShortBioTextNode.internal.owner',
  author___childrenContentfulPersonShortBioTextNode___internal___type = 'author.childrenContentfulPersonShortBioTextNode.internal.type',
  author___childrenContentfulPersonShortBioTextNode___shortBio = 'author.childrenContentfulPersonShortBioTextNode.shortBio',
  author___childrenContentfulPersonShortBioTextNode___sys___type = 'author.childrenContentfulPersonShortBioTextNode.sys.type',
  author___childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark = 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark',
  author___childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___id = 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.id',
  author___childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___excerpt = 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.excerpt',
  author___childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___rawMarkdownBody = 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.rawMarkdownBody',
  author___childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___html = 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.html',
  author___childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___htmlAst = 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.htmlAst',
  author___childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___excerptAst = 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.excerptAst',
  author___childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___headings = 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings',
  author___childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___timeToRead = 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.timeToRead',
  author___childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___tableOfContents = 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.tableOfContents',
  author___childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___children = 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.children',
  author___childrenContentfulPersonShortBioTextNode___childMarkdownRemark___id = 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.id',
  author___childrenContentfulPersonShortBioTextNode___childMarkdownRemark___excerpt = 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.excerpt',
  author___childrenContentfulPersonShortBioTextNode___childMarkdownRemark___rawMarkdownBody = 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.rawMarkdownBody',
  author___childrenContentfulPersonShortBioTextNode___childMarkdownRemark___html = 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.html',
  author___childrenContentfulPersonShortBioTextNode___childMarkdownRemark___htmlAst = 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.htmlAst',
  author___childrenContentfulPersonShortBioTextNode___childMarkdownRemark___excerptAst = 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.excerptAst',
  author___childrenContentfulPersonShortBioTextNode___childMarkdownRemark___headings = 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.headings',
  author___childrenContentfulPersonShortBioTextNode___childMarkdownRemark___timeToRead = 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.timeToRead',
  author___childrenContentfulPersonShortBioTextNode___childMarkdownRemark___tableOfContents = 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.tableOfContents',
  author___childrenContentfulPersonShortBioTextNode___childMarkdownRemark___children = 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.children',
  author___childContentfulPersonShortBioTextNode___id = 'author.childContentfulPersonShortBioTextNode.id',
  author___childContentfulPersonShortBioTextNode___parent___id = 'author.childContentfulPersonShortBioTextNode.parent.id',
  author___childContentfulPersonShortBioTextNode___parent___children = 'author.childContentfulPersonShortBioTextNode.parent.children',
  author___childContentfulPersonShortBioTextNode___children = 'author.childContentfulPersonShortBioTextNode.children',
  author___childContentfulPersonShortBioTextNode___children___id = 'author.childContentfulPersonShortBioTextNode.children.id',
  author___childContentfulPersonShortBioTextNode___children___children = 'author.childContentfulPersonShortBioTextNode.children.children',
  author___childContentfulPersonShortBioTextNode___internal___content = 'author.childContentfulPersonShortBioTextNode.internal.content',
  author___childContentfulPersonShortBioTextNode___internal___contentDigest = 'author.childContentfulPersonShortBioTextNode.internal.contentDigest',
  author___childContentfulPersonShortBioTextNode___internal___description = 'author.childContentfulPersonShortBioTextNode.internal.description',
  author___childContentfulPersonShortBioTextNode___internal___fieldOwners = 'author.childContentfulPersonShortBioTextNode.internal.fieldOwners',
  author___childContentfulPersonShortBioTextNode___internal___ignoreType = 'author.childContentfulPersonShortBioTextNode.internal.ignoreType',
  author___childContentfulPersonShortBioTextNode___internal___mediaType = 'author.childContentfulPersonShortBioTextNode.internal.mediaType',
  author___childContentfulPersonShortBioTextNode___internal___owner = 'author.childContentfulPersonShortBioTextNode.internal.owner',
  author___childContentfulPersonShortBioTextNode___internal___type = 'author.childContentfulPersonShortBioTextNode.internal.type',
  author___childContentfulPersonShortBioTextNode___shortBio = 'author.childContentfulPersonShortBioTextNode.shortBio',
  author___childContentfulPersonShortBioTextNode___sys___type = 'author.childContentfulPersonShortBioTextNode.sys.type',
  author___childContentfulPersonShortBioTextNode___childrenMarkdownRemark = 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark',
  author___childContentfulPersonShortBioTextNode___childrenMarkdownRemark___id = 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.id',
  author___childContentfulPersonShortBioTextNode___childrenMarkdownRemark___excerpt = 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.excerpt',
  author___childContentfulPersonShortBioTextNode___childrenMarkdownRemark___rawMarkdownBody = 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.rawMarkdownBody',
  author___childContentfulPersonShortBioTextNode___childrenMarkdownRemark___html = 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.html',
  author___childContentfulPersonShortBioTextNode___childrenMarkdownRemark___htmlAst = 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.htmlAst',
  author___childContentfulPersonShortBioTextNode___childrenMarkdownRemark___excerptAst = 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.excerptAst',
  author___childContentfulPersonShortBioTextNode___childrenMarkdownRemark___headings = 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings',
  author___childContentfulPersonShortBioTextNode___childrenMarkdownRemark___timeToRead = 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.timeToRead',
  author___childContentfulPersonShortBioTextNode___childrenMarkdownRemark___tableOfContents = 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.tableOfContents',
  author___childContentfulPersonShortBioTextNode___childrenMarkdownRemark___children = 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.children',
  author___childContentfulPersonShortBioTextNode___childMarkdownRemark___id = 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.id',
  author___childContentfulPersonShortBioTextNode___childMarkdownRemark___excerpt = 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.excerpt',
  author___childContentfulPersonShortBioTextNode___childMarkdownRemark___rawMarkdownBody = 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.rawMarkdownBody',
  author___childContentfulPersonShortBioTextNode___childMarkdownRemark___html = 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.html',
  author___childContentfulPersonShortBioTextNode___childMarkdownRemark___htmlAst = 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.htmlAst',
  author___childContentfulPersonShortBioTextNode___childMarkdownRemark___excerptAst = 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.excerptAst',
  author___childContentfulPersonShortBioTextNode___childMarkdownRemark___headings = 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.headings',
  author___childContentfulPersonShortBioTextNode___childMarkdownRemark___timeToRead = 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.timeToRead',
  author___childContentfulPersonShortBioTextNode___childMarkdownRemark___tableOfContents = 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.tableOfContents',
  author___childContentfulPersonShortBioTextNode___childMarkdownRemark___children = 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.children',
  author___parent___id = 'author.parent.id',
  author___parent___parent___id = 'author.parent.parent.id',
  author___parent___parent___children = 'author.parent.parent.children',
  author___parent___children = 'author.parent.children',
  author___parent___children___id = 'author.parent.children.id',
  author___parent___children___children = 'author.parent.children.children',
  author___parent___internal___content = 'author.parent.internal.content',
  author___parent___internal___contentDigest = 'author.parent.internal.contentDigest',
  author___parent___internal___description = 'author.parent.internal.description',
  author___parent___internal___fieldOwners = 'author.parent.internal.fieldOwners',
  author___parent___internal___ignoreType = 'author.parent.internal.ignoreType',
  author___parent___internal___mediaType = 'author.parent.internal.mediaType',
  author___parent___internal___owner = 'author.parent.internal.owner',
  author___parent___internal___type = 'author.parent.internal.type',
  author___children = 'author.children',
  author___children___id = 'author.children.id',
  author___children___parent___id = 'author.children.parent.id',
  author___children___parent___children = 'author.children.parent.children',
  author___children___children = 'author.children.children',
  author___children___children___id = 'author.children.children.id',
  author___children___children___children = 'author.children.children.children',
  author___children___internal___content = 'author.children.internal.content',
  author___children___internal___contentDigest = 'author.children.internal.contentDigest',
  author___children___internal___description = 'author.children.internal.description',
  author___children___internal___fieldOwners = 'author.children.internal.fieldOwners',
  author___children___internal___ignoreType = 'author.children.internal.ignoreType',
  author___children___internal___mediaType = 'author.children.internal.mediaType',
  author___children___internal___owner = 'author.children.internal.owner',
  author___children___internal___type = 'author.children.internal.type',
  author___internal___content = 'author.internal.content',
  author___internal___contentDigest = 'author.internal.contentDigest',
  author___internal___description = 'author.internal.description',
  author___internal___fieldOwners = 'author.internal.fieldOwners',
  author___internal___ignoreType = 'author.internal.ignoreType',
  author___internal___mediaType = 'author.internal.mediaType',
  author___internal___owner = 'author.internal.owner',
  author___internal___type = 'author.internal.type',
  gatsbyPath = 'gatsbyPath',
  childrenContentfulBlogPostBodyTextNode = 'childrenContentfulBlogPostBodyTextNode',
  childrenContentfulBlogPostBodyTextNode___id = 'childrenContentfulBlogPostBodyTextNode.id',
  childrenContentfulBlogPostBodyTextNode___parent___id = 'childrenContentfulBlogPostBodyTextNode.parent.id',
  childrenContentfulBlogPostBodyTextNode___parent___parent___id = 'childrenContentfulBlogPostBodyTextNode.parent.parent.id',
  childrenContentfulBlogPostBodyTextNode___parent___parent___children = 'childrenContentfulBlogPostBodyTextNode.parent.parent.children',
  childrenContentfulBlogPostBodyTextNode___parent___children = 'childrenContentfulBlogPostBodyTextNode.parent.children',
  childrenContentfulBlogPostBodyTextNode___parent___children___id = 'childrenContentfulBlogPostBodyTextNode.parent.children.id',
  childrenContentfulBlogPostBodyTextNode___parent___children___children = 'childrenContentfulBlogPostBodyTextNode.parent.children.children',
  childrenContentfulBlogPostBodyTextNode___parent___internal___content = 'childrenContentfulBlogPostBodyTextNode.parent.internal.content',
  childrenContentfulBlogPostBodyTextNode___parent___internal___contentDigest = 'childrenContentfulBlogPostBodyTextNode.parent.internal.contentDigest',
  childrenContentfulBlogPostBodyTextNode___parent___internal___description = 'childrenContentfulBlogPostBodyTextNode.parent.internal.description',
  childrenContentfulBlogPostBodyTextNode___parent___internal___fieldOwners = 'childrenContentfulBlogPostBodyTextNode.parent.internal.fieldOwners',
  childrenContentfulBlogPostBodyTextNode___parent___internal___ignoreType = 'childrenContentfulBlogPostBodyTextNode.parent.internal.ignoreType',
  childrenContentfulBlogPostBodyTextNode___parent___internal___mediaType = 'childrenContentfulBlogPostBodyTextNode.parent.internal.mediaType',
  childrenContentfulBlogPostBodyTextNode___parent___internal___owner = 'childrenContentfulBlogPostBodyTextNode.parent.internal.owner',
  childrenContentfulBlogPostBodyTextNode___parent___internal___type = 'childrenContentfulBlogPostBodyTextNode.parent.internal.type',
  childrenContentfulBlogPostBodyTextNode___children = 'childrenContentfulBlogPostBodyTextNode.children',
  childrenContentfulBlogPostBodyTextNode___children___id = 'childrenContentfulBlogPostBodyTextNode.children.id',
  childrenContentfulBlogPostBodyTextNode___children___parent___id = 'childrenContentfulBlogPostBodyTextNode.children.parent.id',
  childrenContentfulBlogPostBodyTextNode___children___parent___children = 'childrenContentfulBlogPostBodyTextNode.children.parent.children',
  childrenContentfulBlogPostBodyTextNode___children___children = 'childrenContentfulBlogPostBodyTextNode.children.children',
  childrenContentfulBlogPostBodyTextNode___children___children___id = 'childrenContentfulBlogPostBodyTextNode.children.children.id',
  childrenContentfulBlogPostBodyTextNode___children___children___children = 'childrenContentfulBlogPostBodyTextNode.children.children.children',
  childrenContentfulBlogPostBodyTextNode___children___internal___content = 'childrenContentfulBlogPostBodyTextNode.children.internal.content',
  childrenContentfulBlogPostBodyTextNode___children___internal___contentDigest = 'childrenContentfulBlogPostBodyTextNode.children.internal.contentDigest',
  childrenContentfulBlogPostBodyTextNode___children___internal___description = 'childrenContentfulBlogPostBodyTextNode.children.internal.description',
  childrenContentfulBlogPostBodyTextNode___children___internal___fieldOwners = 'childrenContentfulBlogPostBodyTextNode.children.internal.fieldOwners',
  childrenContentfulBlogPostBodyTextNode___children___internal___ignoreType = 'childrenContentfulBlogPostBodyTextNode.children.internal.ignoreType',
  childrenContentfulBlogPostBodyTextNode___children___internal___mediaType = 'childrenContentfulBlogPostBodyTextNode.children.internal.mediaType',
  childrenContentfulBlogPostBodyTextNode___children___internal___owner = 'childrenContentfulBlogPostBodyTextNode.children.internal.owner',
  childrenContentfulBlogPostBodyTextNode___children___internal___type = 'childrenContentfulBlogPostBodyTextNode.children.internal.type',
  childrenContentfulBlogPostBodyTextNode___internal___content = 'childrenContentfulBlogPostBodyTextNode.internal.content',
  childrenContentfulBlogPostBodyTextNode___internal___contentDigest = 'childrenContentfulBlogPostBodyTextNode.internal.contentDigest',
  childrenContentfulBlogPostBodyTextNode___internal___description = 'childrenContentfulBlogPostBodyTextNode.internal.description',
  childrenContentfulBlogPostBodyTextNode___internal___fieldOwners = 'childrenContentfulBlogPostBodyTextNode.internal.fieldOwners',
  childrenContentfulBlogPostBodyTextNode___internal___ignoreType = 'childrenContentfulBlogPostBodyTextNode.internal.ignoreType',
  childrenContentfulBlogPostBodyTextNode___internal___mediaType = 'childrenContentfulBlogPostBodyTextNode.internal.mediaType',
  childrenContentfulBlogPostBodyTextNode___internal___owner = 'childrenContentfulBlogPostBodyTextNode.internal.owner',
  childrenContentfulBlogPostBodyTextNode___internal___type = 'childrenContentfulBlogPostBodyTextNode.internal.type',
  childrenContentfulBlogPostBodyTextNode___body = 'childrenContentfulBlogPostBodyTextNode.body',
  childrenContentfulBlogPostBodyTextNode___sys___type = 'childrenContentfulBlogPostBodyTextNode.sys.type',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___id = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.id',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___frontmatter___title = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.frontmatter.title',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___excerpt = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerpt',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___html = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.html',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___htmlAst = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___excerptAst = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___headings = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___headings___id = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.id',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___headings___value = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.value',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___headings___depth = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.depth',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___timeToRead = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___tableOfContents = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___wordCount___sentences = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.sentences',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___wordCount___words = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.words',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___parent___id = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.parent.id',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___parent___children = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.parent.children',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___children = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___children___id = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children.id',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___children___children = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children.children',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___internal___content = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.content',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___internal___contentDigest = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.contentDigest',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___internal___description = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.description',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___internal___ignoreType = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.ignoreType',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___internal___mediaType = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.mediaType',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___internal___owner = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.owner',
  childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___internal___type = 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.type',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___id = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.id',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___frontmatter___title = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.frontmatter.title',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___excerpt = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___rawMarkdownBody = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___html = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.html',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___htmlAst = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.htmlAst',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___excerptAst = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.excerptAst',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___headings = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.headings',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___id = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.id',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___value = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.value',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___depth = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.depth',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___timeToRead = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.timeToRead',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___tableOfContents = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.tableOfContents',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___paragraphs = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.paragraphs',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___sentences = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.sentences',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___words = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.words',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___parent___id = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.parent.id',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___parent___children = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.parent.children',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___children = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.children',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___children___id = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.children.id',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___children___children = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.children.children',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___content = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.content',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___contentDigest = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.contentDigest',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___description = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.description',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___fieldOwners = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.fieldOwners',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___ignoreType = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.ignoreType',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___mediaType = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.mediaType',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___owner = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.owner',
  childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___type = 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.type',
  childContentfulBlogPostBodyTextNode___id = 'childContentfulBlogPostBodyTextNode.id',
  childContentfulBlogPostBodyTextNode___parent___id = 'childContentfulBlogPostBodyTextNode.parent.id',
  childContentfulBlogPostBodyTextNode___parent___parent___id = 'childContentfulBlogPostBodyTextNode.parent.parent.id',
  childContentfulBlogPostBodyTextNode___parent___parent___children = 'childContentfulBlogPostBodyTextNode.parent.parent.children',
  childContentfulBlogPostBodyTextNode___parent___children = 'childContentfulBlogPostBodyTextNode.parent.children',
  childContentfulBlogPostBodyTextNode___parent___children___id = 'childContentfulBlogPostBodyTextNode.parent.children.id',
  childContentfulBlogPostBodyTextNode___parent___children___children = 'childContentfulBlogPostBodyTextNode.parent.children.children',
  childContentfulBlogPostBodyTextNode___parent___internal___content = 'childContentfulBlogPostBodyTextNode.parent.internal.content',
  childContentfulBlogPostBodyTextNode___parent___internal___contentDigest = 'childContentfulBlogPostBodyTextNode.parent.internal.contentDigest',
  childContentfulBlogPostBodyTextNode___parent___internal___description = 'childContentfulBlogPostBodyTextNode.parent.internal.description',
  childContentfulBlogPostBodyTextNode___parent___internal___fieldOwners = 'childContentfulBlogPostBodyTextNode.parent.internal.fieldOwners',
  childContentfulBlogPostBodyTextNode___parent___internal___ignoreType = 'childContentfulBlogPostBodyTextNode.parent.internal.ignoreType',
  childContentfulBlogPostBodyTextNode___parent___internal___mediaType = 'childContentfulBlogPostBodyTextNode.parent.internal.mediaType',
  childContentfulBlogPostBodyTextNode___parent___internal___owner = 'childContentfulBlogPostBodyTextNode.parent.internal.owner',
  childContentfulBlogPostBodyTextNode___parent___internal___type = 'childContentfulBlogPostBodyTextNode.parent.internal.type',
  childContentfulBlogPostBodyTextNode___children = 'childContentfulBlogPostBodyTextNode.children',
  childContentfulBlogPostBodyTextNode___children___id = 'childContentfulBlogPostBodyTextNode.children.id',
  childContentfulBlogPostBodyTextNode___children___parent___id = 'childContentfulBlogPostBodyTextNode.children.parent.id',
  childContentfulBlogPostBodyTextNode___children___parent___children = 'childContentfulBlogPostBodyTextNode.children.parent.children',
  childContentfulBlogPostBodyTextNode___children___children = 'childContentfulBlogPostBodyTextNode.children.children',
  childContentfulBlogPostBodyTextNode___children___children___id = 'childContentfulBlogPostBodyTextNode.children.children.id',
  childContentfulBlogPostBodyTextNode___children___children___children = 'childContentfulBlogPostBodyTextNode.children.children.children',
  childContentfulBlogPostBodyTextNode___children___internal___content = 'childContentfulBlogPostBodyTextNode.children.internal.content',
  childContentfulBlogPostBodyTextNode___children___internal___contentDigest = 'childContentfulBlogPostBodyTextNode.children.internal.contentDigest',
  childContentfulBlogPostBodyTextNode___children___internal___description = 'childContentfulBlogPostBodyTextNode.children.internal.description',
  childContentfulBlogPostBodyTextNode___children___internal___fieldOwners = 'childContentfulBlogPostBodyTextNode.children.internal.fieldOwners',
  childContentfulBlogPostBodyTextNode___children___internal___ignoreType = 'childContentfulBlogPostBodyTextNode.children.internal.ignoreType',
  childContentfulBlogPostBodyTextNode___children___internal___mediaType = 'childContentfulBlogPostBodyTextNode.children.internal.mediaType',
  childContentfulBlogPostBodyTextNode___children___internal___owner = 'childContentfulBlogPostBodyTextNode.children.internal.owner',
  childContentfulBlogPostBodyTextNode___children___internal___type = 'childContentfulBlogPostBodyTextNode.children.internal.type',
  childContentfulBlogPostBodyTextNode___internal___content = 'childContentfulBlogPostBodyTextNode.internal.content',
  childContentfulBlogPostBodyTextNode___internal___contentDigest = 'childContentfulBlogPostBodyTextNode.internal.contentDigest',
  childContentfulBlogPostBodyTextNode___internal___description = 'childContentfulBlogPostBodyTextNode.internal.description',
  childContentfulBlogPostBodyTextNode___internal___fieldOwners = 'childContentfulBlogPostBodyTextNode.internal.fieldOwners',
  childContentfulBlogPostBodyTextNode___internal___ignoreType = 'childContentfulBlogPostBodyTextNode.internal.ignoreType',
  childContentfulBlogPostBodyTextNode___internal___mediaType = 'childContentfulBlogPostBodyTextNode.internal.mediaType',
  childContentfulBlogPostBodyTextNode___internal___owner = 'childContentfulBlogPostBodyTextNode.internal.owner',
  childContentfulBlogPostBodyTextNode___internal___type = 'childContentfulBlogPostBodyTextNode.internal.type',
  childContentfulBlogPostBodyTextNode___body = 'childContentfulBlogPostBodyTextNode.body',
  childContentfulBlogPostBodyTextNode___sys___type = 'childContentfulBlogPostBodyTextNode.sys.type',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___id = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.id',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___frontmatter___title = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.frontmatter.title',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___excerpt = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerpt',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___html = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.html',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___htmlAst = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___excerptAst = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___headings = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___headings___id = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.id',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___headings___value = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.value',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___headings___depth = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.depth',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___timeToRead = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___tableOfContents = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___wordCount___sentences = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.sentences',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___wordCount___words = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.words',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___parent___id = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.parent.id',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___parent___children = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.parent.children',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___children = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___children___id = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children.id',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___children___children = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children.children',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___internal___content = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.content',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___internal___contentDigest = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.contentDigest',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___internal___description = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.description',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___internal___ignoreType = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.ignoreType',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___internal___mediaType = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.mediaType',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___internal___owner = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.owner',
  childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___internal___type = 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.type',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___id = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.id',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.frontmatter.title',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerpt = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___html = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.html',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___htmlAst = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.htmlAst',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerptAst = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerptAst',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___id = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.id',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___value = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.value',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___depth = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.depth',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___timeToRead = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.timeToRead',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___tableOfContents = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.tableOfContents',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.paragraphs',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.sentences',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___words = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.words',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___parent___id = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.parent.id',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___parent___children = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.parent.children',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___children = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.children',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___children___id = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.children.id',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___children___children = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.children.children',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___content = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.content',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.contentDigest',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___description = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.description',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.fieldOwners',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.ignoreType',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.mediaType',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___owner = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.owner',
  childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___type = 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.type',
  childrenContentfulBlogPostDescriptionTextNode = 'childrenContentfulBlogPostDescriptionTextNode',
  childrenContentfulBlogPostDescriptionTextNode___id = 'childrenContentfulBlogPostDescriptionTextNode.id',
  childrenContentfulBlogPostDescriptionTextNode___parent___id = 'childrenContentfulBlogPostDescriptionTextNode.parent.id',
  childrenContentfulBlogPostDescriptionTextNode___parent___parent___id = 'childrenContentfulBlogPostDescriptionTextNode.parent.parent.id',
  childrenContentfulBlogPostDescriptionTextNode___parent___parent___children = 'childrenContentfulBlogPostDescriptionTextNode.parent.parent.children',
  childrenContentfulBlogPostDescriptionTextNode___parent___children = 'childrenContentfulBlogPostDescriptionTextNode.parent.children',
  childrenContentfulBlogPostDescriptionTextNode___parent___children___id = 'childrenContentfulBlogPostDescriptionTextNode.parent.children.id',
  childrenContentfulBlogPostDescriptionTextNode___parent___children___children = 'childrenContentfulBlogPostDescriptionTextNode.parent.children.children',
  childrenContentfulBlogPostDescriptionTextNode___parent___internal___content = 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.content',
  childrenContentfulBlogPostDescriptionTextNode___parent___internal___contentDigest = 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.contentDigest',
  childrenContentfulBlogPostDescriptionTextNode___parent___internal___description = 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.description',
  childrenContentfulBlogPostDescriptionTextNode___parent___internal___fieldOwners = 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.fieldOwners',
  childrenContentfulBlogPostDescriptionTextNode___parent___internal___ignoreType = 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.ignoreType',
  childrenContentfulBlogPostDescriptionTextNode___parent___internal___mediaType = 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.mediaType',
  childrenContentfulBlogPostDescriptionTextNode___parent___internal___owner = 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.owner',
  childrenContentfulBlogPostDescriptionTextNode___parent___internal___type = 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.type',
  childrenContentfulBlogPostDescriptionTextNode___children = 'childrenContentfulBlogPostDescriptionTextNode.children',
  childrenContentfulBlogPostDescriptionTextNode___children___id = 'childrenContentfulBlogPostDescriptionTextNode.children.id',
  childrenContentfulBlogPostDescriptionTextNode___children___parent___id = 'childrenContentfulBlogPostDescriptionTextNode.children.parent.id',
  childrenContentfulBlogPostDescriptionTextNode___children___parent___children = 'childrenContentfulBlogPostDescriptionTextNode.children.parent.children',
  childrenContentfulBlogPostDescriptionTextNode___children___children = 'childrenContentfulBlogPostDescriptionTextNode.children.children',
  childrenContentfulBlogPostDescriptionTextNode___children___children___id = 'childrenContentfulBlogPostDescriptionTextNode.children.children.id',
  childrenContentfulBlogPostDescriptionTextNode___children___children___children = 'childrenContentfulBlogPostDescriptionTextNode.children.children.children',
  childrenContentfulBlogPostDescriptionTextNode___children___internal___content = 'childrenContentfulBlogPostDescriptionTextNode.children.internal.content',
  childrenContentfulBlogPostDescriptionTextNode___children___internal___contentDigest = 'childrenContentfulBlogPostDescriptionTextNode.children.internal.contentDigest',
  childrenContentfulBlogPostDescriptionTextNode___children___internal___description = 'childrenContentfulBlogPostDescriptionTextNode.children.internal.description',
  childrenContentfulBlogPostDescriptionTextNode___children___internal___fieldOwners = 'childrenContentfulBlogPostDescriptionTextNode.children.internal.fieldOwners',
  childrenContentfulBlogPostDescriptionTextNode___children___internal___ignoreType = 'childrenContentfulBlogPostDescriptionTextNode.children.internal.ignoreType',
  childrenContentfulBlogPostDescriptionTextNode___children___internal___mediaType = 'childrenContentfulBlogPostDescriptionTextNode.children.internal.mediaType',
  childrenContentfulBlogPostDescriptionTextNode___children___internal___owner = 'childrenContentfulBlogPostDescriptionTextNode.children.internal.owner',
  childrenContentfulBlogPostDescriptionTextNode___children___internal___type = 'childrenContentfulBlogPostDescriptionTextNode.children.internal.type',
  childrenContentfulBlogPostDescriptionTextNode___internal___content = 'childrenContentfulBlogPostDescriptionTextNode.internal.content',
  childrenContentfulBlogPostDescriptionTextNode___internal___contentDigest = 'childrenContentfulBlogPostDescriptionTextNode.internal.contentDigest',
  childrenContentfulBlogPostDescriptionTextNode___internal___description = 'childrenContentfulBlogPostDescriptionTextNode.internal.description',
  childrenContentfulBlogPostDescriptionTextNode___internal___fieldOwners = 'childrenContentfulBlogPostDescriptionTextNode.internal.fieldOwners',
  childrenContentfulBlogPostDescriptionTextNode___internal___ignoreType = 'childrenContentfulBlogPostDescriptionTextNode.internal.ignoreType',
  childrenContentfulBlogPostDescriptionTextNode___internal___mediaType = 'childrenContentfulBlogPostDescriptionTextNode.internal.mediaType',
  childrenContentfulBlogPostDescriptionTextNode___internal___owner = 'childrenContentfulBlogPostDescriptionTextNode.internal.owner',
  childrenContentfulBlogPostDescriptionTextNode___internal___type = 'childrenContentfulBlogPostDescriptionTextNode.internal.type',
  childrenContentfulBlogPostDescriptionTextNode___description = 'childrenContentfulBlogPostDescriptionTextNode.description',
  childrenContentfulBlogPostDescriptionTextNode___sys___type = 'childrenContentfulBlogPostDescriptionTextNode.sys.type',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___id = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.id',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___frontmatter___title = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.frontmatter.title',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___excerpt = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___html = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.html',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___htmlAst = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___excerptAst = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___headings = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___headings___id = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.id',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___headings___value = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.value',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___headings___depth = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.depth',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___timeToRead = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___tableOfContents = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___wordCount___sentences = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.sentences',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___wordCount___words = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.words',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___parent___id = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.id',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___parent___children = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.children',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___children = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___children___id = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children.id',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___children___children = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children.children',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___internal___content = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.content',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___internal___contentDigest = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.contentDigest',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___internal___description = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.description',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___internal___ignoreType = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.ignoreType',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___internal___mediaType = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.mediaType',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___internal___owner = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.owner',
  childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___internal___type = 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.type',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___id = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.id',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___frontmatter___title = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.frontmatter.title',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerpt = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___rawMarkdownBody = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___html = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.html',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___htmlAst = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerptAst = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings___id = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.id',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings___value = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.value',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings___depth = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.depth',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___timeToRead = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___tableOfContents = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___paragraphs = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.paragraphs',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___sentences = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.sentences',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___words = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.words',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___parent___id = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.parent.id',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___parent___children = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.parent.children',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children___id = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children.id',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children___children = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children.children',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___content = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.content',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___contentDigest = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.contentDigest',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___description = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.description',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___fieldOwners = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.fieldOwners',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___ignoreType = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.ignoreType',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___mediaType = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.mediaType',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___owner = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.owner',
  childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___type = 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.type',
  childContentfulBlogPostDescriptionTextNode___id = 'childContentfulBlogPostDescriptionTextNode.id',
  childContentfulBlogPostDescriptionTextNode___parent___id = 'childContentfulBlogPostDescriptionTextNode.parent.id',
  childContentfulBlogPostDescriptionTextNode___parent___parent___id = 'childContentfulBlogPostDescriptionTextNode.parent.parent.id',
  childContentfulBlogPostDescriptionTextNode___parent___parent___children = 'childContentfulBlogPostDescriptionTextNode.parent.parent.children',
  childContentfulBlogPostDescriptionTextNode___parent___children = 'childContentfulBlogPostDescriptionTextNode.parent.children',
  childContentfulBlogPostDescriptionTextNode___parent___children___id = 'childContentfulBlogPostDescriptionTextNode.parent.children.id',
  childContentfulBlogPostDescriptionTextNode___parent___children___children = 'childContentfulBlogPostDescriptionTextNode.parent.children.children',
  childContentfulBlogPostDescriptionTextNode___parent___internal___content = 'childContentfulBlogPostDescriptionTextNode.parent.internal.content',
  childContentfulBlogPostDescriptionTextNode___parent___internal___contentDigest = 'childContentfulBlogPostDescriptionTextNode.parent.internal.contentDigest',
  childContentfulBlogPostDescriptionTextNode___parent___internal___description = 'childContentfulBlogPostDescriptionTextNode.parent.internal.description',
  childContentfulBlogPostDescriptionTextNode___parent___internal___fieldOwners = 'childContentfulBlogPostDescriptionTextNode.parent.internal.fieldOwners',
  childContentfulBlogPostDescriptionTextNode___parent___internal___ignoreType = 'childContentfulBlogPostDescriptionTextNode.parent.internal.ignoreType',
  childContentfulBlogPostDescriptionTextNode___parent___internal___mediaType = 'childContentfulBlogPostDescriptionTextNode.parent.internal.mediaType',
  childContentfulBlogPostDescriptionTextNode___parent___internal___owner = 'childContentfulBlogPostDescriptionTextNode.parent.internal.owner',
  childContentfulBlogPostDescriptionTextNode___parent___internal___type = 'childContentfulBlogPostDescriptionTextNode.parent.internal.type',
  childContentfulBlogPostDescriptionTextNode___children = 'childContentfulBlogPostDescriptionTextNode.children',
  childContentfulBlogPostDescriptionTextNode___children___id = 'childContentfulBlogPostDescriptionTextNode.children.id',
  childContentfulBlogPostDescriptionTextNode___children___parent___id = 'childContentfulBlogPostDescriptionTextNode.children.parent.id',
  childContentfulBlogPostDescriptionTextNode___children___parent___children = 'childContentfulBlogPostDescriptionTextNode.children.parent.children',
  childContentfulBlogPostDescriptionTextNode___children___children = 'childContentfulBlogPostDescriptionTextNode.children.children',
  childContentfulBlogPostDescriptionTextNode___children___children___id = 'childContentfulBlogPostDescriptionTextNode.children.children.id',
  childContentfulBlogPostDescriptionTextNode___children___children___children = 'childContentfulBlogPostDescriptionTextNode.children.children.children',
  childContentfulBlogPostDescriptionTextNode___children___internal___content = 'childContentfulBlogPostDescriptionTextNode.children.internal.content',
  childContentfulBlogPostDescriptionTextNode___children___internal___contentDigest = 'childContentfulBlogPostDescriptionTextNode.children.internal.contentDigest',
  childContentfulBlogPostDescriptionTextNode___children___internal___description = 'childContentfulBlogPostDescriptionTextNode.children.internal.description',
  childContentfulBlogPostDescriptionTextNode___children___internal___fieldOwners = 'childContentfulBlogPostDescriptionTextNode.children.internal.fieldOwners',
  childContentfulBlogPostDescriptionTextNode___children___internal___ignoreType = 'childContentfulBlogPostDescriptionTextNode.children.internal.ignoreType',
  childContentfulBlogPostDescriptionTextNode___children___internal___mediaType = 'childContentfulBlogPostDescriptionTextNode.children.internal.mediaType',
  childContentfulBlogPostDescriptionTextNode___children___internal___owner = 'childContentfulBlogPostDescriptionTextNode.children.internal.owner',
  childContentfulBlogPostDescriptionTextNode___children___internal___type = 'childContentfulBlogPostDescriptionTextNode.children.internal.type',
  childContentfulBlogPostDescriptionTextNode___internal___content = 'childContentfulBlogPostDescriptionTextNode.internal.content',
  childContentfulBlogPostDescriptionTextNode___internal___contentDigest = 'childContentfulBlogPostDescriptionTextNode.internal.contentDigest',
  childContentfulBlogPostDescriptionTextNode___internal___description = 'childContentfulBlogPostDescriptionTextNode.internal.description',
  childContentfulBlogPostDescriptionTextNode___internal___fieldOwners = 'childContentfulBlogPostDescriptionTextNode.internal.fieldOwners',
  childContentfulBlogPostDescriptionTextNode___internal___ignoreType = 'childContentfulBlogPostDescriptionTextNode.internal.ignoreType',
  childContentfulBlogPostDescriptionTextNode___internal___mediaType = 'childContentfulBlogPostDescriptionTextNode.internal.mediaType',
  childContentfulBlogPostDescriptionTextNode___internal___owner = 'childContentfulBlogPostDescriptionTextNode.internal.owner',
  childContentfulBlogPostDescriptionTextNode___internal___type = 'childContentfulBlogPostDescriptionTextNode.internal.type',
  childContentfulBlogPostDescriptionTextNode___description = 'childContentfulBlogPostDescriptionTextNode.description',
  childContentfulBlogPostDescriptionTextNode___sys___type = 'childContentfulBlogPostDescriptionTextNode.sys.type',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___id = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.id',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___frontmatter___title = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.frontmatter.title',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___excerpt = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___html = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.html',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___htmlAst = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___excerptAst = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___headings = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___headings___id = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.id',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___headings___value = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.value',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___headings___depth = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.depth',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___timeToRead = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___tableOfContents = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___wordCount___sentences = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.sentences',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___wordCount___words = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.words',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___parent___id = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.id',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___parent___children = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.children',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___children = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___children___id = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children.id',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___children___children = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children.children',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___internal___content = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.content',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___internal___contentDigest = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.contentDigest',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___internal___description = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.description',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___internal___ignoreType = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.ignoreType',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___internal___mediaType = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.mediaType',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___internal___owner = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.owner',
  childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___internal___type = 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.type',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___id = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.id',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.frontmatter.title',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerpt = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___html = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.html',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___htmlAst = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerptAst = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings___id = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.id',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings___value = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.value',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings___depth = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.depth',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___timeToRead = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___tableOfContents = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.paragraphs',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.sentences',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___wordCount___words = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.words',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___parent___id = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.parent.id',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___parent___children = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.parent.children',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children___id = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children.id',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children___children = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children.children',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___content = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.content',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.contentDigest',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___description = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.description',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.fieldOwners',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.ignoreType',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.mediaType',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___owner = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.owner',
  childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___internal___type = 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.type',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ContentfulBlogPostFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly publishDate: Maybe<DateQueryOperatorInput>;
  readonly heroImage: Maybe<ContentfulAssetFilterInput>;
  readonly description: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
  readonly body: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulBlogPostSysFilterInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<ContentfulPersonFilterInput>;
  readonly gatsbyPath: Maybe<StringQueryOperatorInput>;
  readonly childrenContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNodeFilterListInput>;
  readonly childContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
  readonly childrenContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNodeFilterListInput>;
  readonly childContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulBlogPostFilterListInput = {
  readonly elemMatch: Maybe<ContentfulBlogPostFilterInput>;
};

type ContentfulBlogPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulBlogPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulBlogPost>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulBlogPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulBlogPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulBlogPostSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulBlogPostSysContentType>;
};

type ContentfulBlogPostSysContentType = {
  readonly sys: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

type ContentfulBlogPostSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

type ContentfulBlogPostSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulBlogPostSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulBlogPostSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulBlogPostSysContentTypeFilterInput>;
};

type ContentfulContentType = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly displayField: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulContentTypeSys>;
};

type ContentfulContentTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
};


type ContentfulContentTypeConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeEdge = {
  readonly next: Maybe<ContentfulContentType>;
  readonly node: ContentfulContentType;
  readonly previous: Maybe<ContentfulContentType>;
};

enum ContentfulContentTypeFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  name = 'name',
  displayField = 'displayField',
  description = 'description',
  sys___type = 'sys.type'
}

type ContentfulContentTypeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly displayField: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulContentTypeSysFilterInput>;
};

type ContentfulContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulContentTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulContentTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulEntry = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
};

type ContentfulEntryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
};


type ContentfulEntryConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryEdge = {
  readonly next: Maybe<ContentfulEntry>;
  readonly node: ContentfulEntry;
  readonly previous: Maybe<ContentfulEntry>;
};

enum ContentfulEntryFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale'
}

type ContentfulEntryFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
};

type ContentfulEntryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulEntrySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulEntryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
};

type ContentfulFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
};

type ContentfulFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
};

type ContentfulFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
};

enum ContentfulImageCropFocus {
  TOP = 'top',
  TOP_LEFT = 'top_left',
  TOP_RIGHT = 'top_right',
  BOTTOM = 'bottom',
  BOTTOM_RIGHT = 'bottom_left',
  BOTTOM_LEFT = 'bottom_right',
  RIGHT = 'right',
  LEFT = 'left',
  FACE = 'face',
  FACES = 'faces',
  CENTER = 'center'
}

enum ContentfulImageFormat {
  NO_CHANGE = '',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

type ContentfulIngredient = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly name: Maybe<Scalars['String']>;
  readonly quantity: Maybe<Scalars['Float']>;
  readonly unit: Maybe<Scalars['String']>;
  readonly notes: Maybe<Scalars['String']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulIngredientSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulIngredient_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulIngredient_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulIngredientConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulIngredientEdge>;
  readonly nodes: ReadonlyArray<ContentfulIngredient>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulIngredientGroupConnection>;
};


type ContentfulIngredientConnection_distinctArgs = {
  field: ContentfulIngredientFieldsEnum;
};


type ContentfulIngredientConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulIngredientFieldsEnum;
};

type ContentfulIngredientEdge = {
  readonly next: Maybe<ContentfulIngredient>;
  readonly node: ContentfulIngredient;
  readonly previous: Maybe<ContentfulIngredient>;
};

enum ContentfulIngredientFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  quantity = 'quantity',
  unit = 'unit',
  notes = 'notes',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  sys___contentType___sys___type = 'sys.contentType.sys.type',
  sys___contentType___sys___linkType = 'sys.contentType.sys.linkType',
  sys___contentType___sys___id = 'sys.contentType.sys.id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ContentfulIngredientFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly quantity: Maybe<FloatQueryOperatorInput>;
  readonly unit: Maybe<StringQueryOperatorInput>;
  readonly notes: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulIngredientSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulIngredientGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulIngredientEdge>;
  readonly nodes: ReadonlyArray<ContentfulIngredient>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulIngredientSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulIngredientFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulIngredientSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulIngredientSysContentType>;
};

type ContentfulIngredientSysContentType = {
  readonly sys: Maybe<ContentfulIngredientSysContentTypeSys>;
};

type ContentfulIngredientSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulIngredientSysContentTypeSysFilterInput>;
};

type ContentfulIngredientSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulIngredientSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulIngredientSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulIngredientSysContentTypeFilterInput>;
};

type ContentfulPerson = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly name: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly company: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly phone: Maybe<Scalars['String']>;
  readonly facebook: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
  readonly github: Maybe<Scalars['String']>;
  readonly image: Maybe<ContentfulAsset>;
  readonly blog_post: Maybe<ReadonlyArray<Maybe<ContentfulBlogPost>>>;
  readonly shortBio: Maybe<contentfulPersonShortBioTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulPersonSys>;
  /** Returns all children nodes filtered by type contentfulPersonShortBioTextNode */
  readonly childrenContentfulPersonShortBioTextNode: Maybe<ReadonlyArray<Maybe<contentfulPersonShortBioTextNode>>>;
  /**
   * Returns the first child node of type contentfulPersonShortBioTextNode or null
   * if there are no children of given type on this node
   */
  readonly childContentfulPersonShortBioTextNode: Maybe<contentfulPersonShortBioTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulPerson_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPerson_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulPersonConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPersonEdge>;
  readonly nodes: ReadonlyArray<ContentfulPerson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulPersonGroupConnection>;
};


type ContentfulPersonConnection_distinctArgs = {
  field: ContentfulPersonFieldsEnum;
};


type ContentfulPersonConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPersonFieldsEnum;
};

type ContentfulPersonEdge = {
  readonly next: Maybe<ContentfulPerson>;
  readonly node: ContentfulPerson;
  readonly previous: Maybe<ContentfulPerson>;
};

enum ContentfulPersonFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  title = 'title',
  company = 'company',
  email = 'email',
  phone = 'phone',
  facebook = 'facebook',
  twitter = 'twitter',
  github = 'github',
  image___contentful_id = 'image.contentful_id',
  image___id = 'image.id',
  image___spaceId = 'image.spaceId',
  image___createdAt = 'image.createdAt',
  image___updatedAt = 'image.updatedAt',
  image___file___url = 'image.file.url',
  image___file___details___size = 'image.file.details.size',
  image___file___fileName = 'image.file.fileName',
  image___file___contentType = 'image.file.contentType',
  image___title = 'image.title',
  image___description = 'image.description',
  image___node_locale = 'image.node_locale',
  image___sys___type = 'image.sys.type',
  image___sys___revision = 'image.sys.revision',
  image___fixed___base64 = 'image.fixed.base64',
  image___fixed___tracedSVG = 'image.fixed.tracedSVG',
  image___fixed___aspectRatio = 'image.fixed.aspectRatio',
  image___fixed___width = 'image.fixed.width',
  image___fixed___height = 'image.fixed.height',
  image___fixed___src = 'image.fixed.src',
  image___fixed___srcSet = 'image.fixed.srcSet',
  image___fixed___srcWebp = 'image.fixed.srcWebp',
  image___fixed___srcSetWebp = 'image.fixed.srcSetWebp',
  image___resolutions___base64 = 'image.resolutions.base64',
  image___resolutions___tracedSVG = 'image.resolutions.tracedSVG',
  image___resolutions___aspectRatio = 'image.resolutions.aspectRatio',
  image___resolutions___width = 'image.resolutions.width',
  image___resolutions___height = 'image.resolutions.height',
  image___resolutions___src = 'image.resolutions.src',
  image___resolutions___srcSet = 'image.resolutions.srcSet',
  image___resolutions___srcWebp = 'image.resolutions.srcWebp',
  image___resolutions___srcSetWebp = 'image.resolutions.srcSetWebp',
  image___fluid___base64 = 'image.fluid.base64',
  image___fluid___tracedSVG = 'image.fluid.tracedSVG',
  image___fluid___aspectRatio = 'image.fluid.aspectRatio',
  image___fluid___src = 'image.fluid.src',
  image___fluid___srcSet = 'image.fluid.srcSet',
  image___fluid___srcWebp = 'image.fluid.srcWebp',
  image___fluid___srcSetWebp = 'image.fluid.srcSetWebp',
  image___fluid___sizes = 'image.fluid.sizes',
  image___sizes___base64 = 'image.sizes.base64',
  image___sizes___tracedSVG = 'image.sizes.tracedSVG',
  image___sizes___aspectRatio = 'image.sizes.aspectRatio',
  image___sizes___src = 'image.sizes.src',
  image___sizes___srcSet = 'image.sizes.srcSet',
  image___sizes___srcWebp = 'image.sizes.srcWebp',
  image___sizes___srcSetWebp = 'image.sizes.srcSetWebp',
  image___sizes___sizes = 'image.sizes.sizes',
  image___resize___base64 = 'image.resize.base64',
  image___resize___tracedSVG = 'image.resize.tracedSVG',
  image___resize___src = 'image.resize.src',
  image___resize___width = 'image.resize.width',
  image___resize___height = 'image.resize.height',
  image___resize___aspectRatio = 'image.resize.aspectRatio',
  image___parent___id = 'image.parent.id',
  image___parent___parent___id = 'image.parent.parent.id',
  image___parent___parent___children = 'image.parent.parent.children',
  image___parent___children = 'image.parent.children',
  image___parent___children___id = 'image.parent.children.id',
  image___parent___children___children = 'image.parent.children.children',
  image___parent___internal___content = 'image.parent.internal.content',
  image___parent___internal___contentDigest = 'image.parent.internal.contentDigest',
  image___parent___internal___description = 'image.parent.internal.description',
  image___parent___internal___fieldOwners = 'image.parent.internal.fieldOwners',
  image___parent___internal___ignoreType = 'image.parent.internal.ignoreType',
  image___parent___internal___mediaType = 'image.parent.internal.mediaType',
  image___parent___internal___owner = 'image.parent.internal.owner',
  image___parent___internal___type = 'image.parent.internal.type',
  image___children = 'image.children',
  image___children___id = 'image.children.id',
  image___children___parent___id = 'image.children.parent.id',
  image___children___parent___children = 'image.children.parent.children',
  image___children___children = 'image.children.children',
  image___children___children___id = 'image.children.children.id',
  image___children___children___children = 'image.children.children.children',
  image___children___internal___content = 'image.children.internal.content',
  image___children___internal___contentDigest = 'image.children.internal.contentDigest',
  image___children___internal___description = 'image.children.internal.description',
  image___children___internal___fieldOwners = 'image.children.internal.fieldOwners',
  image___children___internal___ignoreType = 'image.children.internal.ignoreType',
  image___children___internal___mediaType = 'image.children.internal.mediaType',
  image___children___internal___owner = 'image.children.internal.owner',
  image___children___internal___type = 'image.children.internal.type',
  image___internal___content = 'image.internal.content',
  image___internal___contentDigest = 'image.internal.contentDigest',
  image___internal___description = 'image.internal.description',
  image___internal___fieldOwners = 'image.internal.fieldOwners',
  image___internal___ignoreType = 'image.internal.ignoreType',
  image___internal___mediaType = 'image.internal.mediaType',
  image___internal___owner = 'image.internal.owner',
  image___internal___type = 'image.internal.type',
  blog_post = 'blog_post',
  blog_post___contentful_id = 'blog_post.contentful_id',
  blog_post___id = 'blog_post.id',
  blog_post___node_locale = 'blog_post.node_locale',
  blog_post___title = 'blog_post.title',
  blog_post___slug = 'blog_post.slug',
  blog_post___publishDate = 'blog_post.publishDate',
  blog_post___heroImage___contentful_id = 'blog_post.heroImage.contentful_id',
  blog_post___heroImage___id = 'blog_post.heroImage.id',
  blog_post___heroImage___spaceId = 'blog_post.heroImage.spaceId',
  blog_post___heroImage___createdAt = 'blog_post.heroImage.createdAt',
  blog_post___heroImage___updatedAt = 'blog_post.heroImage.updatedAt',
  blog_post___heroImage___file___url = 'blog_post.heroImage.file.url',
  blog_post___heroImage___file___fileName = 'blog_post.heroImage.file.fileName',
  blog_post___heroImage___file___contentType = 'blog_post.heroImage.file.contentType',
  blog_post___heroImage___title = 'blog_post.heroImage.title',
  blog_post___heroImage___description = 'blog_post.heroImage.description',
  blog_post___heroImage___node_locale = 'blog_post.heroImage.node_locale',
  blog_post___heroImage___sys___type = 'blog_post.heroImage.sys.type',
  blog_post___heroImage___sys___revision = 'blog_post.heroImage.sys.revision',
  blog_post___heroImage___fixed___base64 = 'blog_post.heroImage.fixed.base64',
  blog_post___heroImage___fixed___tracedSVG = 'blog_post.heroImage.fixed.tracedSVG',
  blog_post___heroImage___fixed___aspectRatio = 'blog_post.heroImage.fixed.aspectRatio',
  blog_post___heroImage___fixed___width = 'blog_post.heroImage.fixed.width',
  blog_post___heroImage___fixed___height = 'blog_post.heroImage.fixed.height',
  blog_post___heroImage___fixed___src = 'blog_post.heroImage.fixed.src',
  blog_post___heroImage___fixed___srcSet = 'blog_post.heroImage.fixed.srcSet',
  blog_post___heroImage___fixed___srcWebp = 'blog_post.heroImage.fixed.srcWebp',
  blog_post___heroImage___fixed___srcSetWebp = 'blog_post.heroImage.fixed.srcSetWebp',
  blog_post___heroImage___resolutions___base64 = 'blog_post.heroImage.resolutions.base64',
  blog_post___heroImage___resolutions___tracedSVG = 'blog_post.heroImage.resolutions.tracedSVG',
  blog_post___heroImage___resolutions___aspectRatio = 'blog_post.heroImage.resolutions.aspectRatio',
  blog_post___heroImage___resolutions___width = 'blog_post.heroImage.resolutions.width',
  blog_post___heroImage___resolutions___height = 'blog_post.heroImage.resolutions.height',
  blog_post___heroImage___resolutions___src = 'blog_post.heroImage.resolutions.src',
  blog_post___heroImage___resolutions___srcSet = 'blog_post.heroImage.resolutions.srcSet',
  blog_post___heroImage___resolutions___srcWebp = 'blog_post.heroImage.resolutions.srcWebp',
  blog_post___heroImage___resolutions___srcSetWebp = 'blog_post.heroImage.resolutions.srcSetWebp',
  blog_post___heroImage___fluid___base64 = 'blog_post.heroImage.fluid.base64',
  blog_post___heroImage___fluid___tracedSVG = 'blog_post.heroImage.fluid.tracedSVG',
  blog_post___heroImage___fluid___aspectRatio = 'blog_post.heroImage.fluid.aspectRatio',
  blog_post___heroImage___fluid___src = 'blog_post.heroImage.fluid.src',
  blog_post___heroImage___fluid___srcSet = 'blog_post.heroImage.fluid.srcSet',
  blog_post___heroImage___fluid___srcWebp = 'blog_post.heroImage.fluid.srcWebp',
  blog_post___heroImage___fluid___srcSetWebp = 'blog_post.heroImage.fluid.srcSetWebp',
  blog_post___heroImage___fluid___sizes = 'blog_post.heroImage.fluid.sizes',
  blog_post___heroImage___sizes___base64 = 'blog_post.heroImage.sizes.base64',
  blog_post___heroImage___sizes___tracedSVG = 'blog_post.heroImage.sizes.tracedSVG',
  blog_post___heroImage___sizes___aspectRatio = 'blog_post.heroImage.sizes.aspectRatio',
  blog_post___heroImage___sizes___src = 'blog_post.heroImage.sizes.src',
  blog_post___heroImage___sizes___srcSet = 'blog_post.heroImage.sizes.srcSet',
  blog_post___heroImage___sizes___srcWebp = 'blog_post.heroImage.sizes.srcWebp',
  blog_post___heroImage___sizes___srcSetWebp = 'blog_post.heroImage.sizes.srcSetWebp',
  blog_post___heroImage___sizes___sizes = 'blog_post.heroImage.sizes.sizes',
  blog_post___heroImage___resize___base64 = 'blog_post.heroImage.resize.base64',
  blog_post___heroImage___resize___tracedSVG = 'blog_post.heroImage.resize.tracedSVG',
  blog_post___heroImage___resize___src = 'blog_post.heroImage.resize.src',
  blog_post___heroImage___resize___width = 'blog_post.heroImage.resize.width',
  blog_post___heroImage___resize___height = 'blog_post.heroImage.resize.height',
  blog_post___heroImage___resize___aspectRatio = 'blog_post.heroImage.resize.aspectRatio',
  blog_post___heroImage___parent___id = 'blog_post.heroImage.parent.id',
  blog_post___heroImage___parent___children = 'blog_post.heroImage.parent.children',
  blog_post___heroImage___children = 'blog_post.heroImage.children',
  blog_post___heroImage___children___id = 'blog_post.heroImage.children.id',
  blog_post___heroImage___children___children = 'blog_post.heroImage.children.children',
  blog_post___heroImage___internal___content = 'blog_post.heroImage.internal.content',
  blog_post___heroImage___internal___contentDigest = 'blog_post.heroImage.internal.contentDigest',
  blog_post___heroImage___internal___description = 'blog_post.heroImage.internal.description',
  blog_post___heroImage___internal___fieldOwners = 'blog_post.heroImage.internal.fieldOwners',
  blog_post___heroImage___internal___ignoreType = 'blog_post.heroImage.internal.ignoreType',
  blog_post___heroImage___internal___mediaType = 'blog_post.heroImage.internal.mediaType',
  blog_post___heroImage___internal___owner = 'blog_post.heroImage.internal.owner',
  blog_post___heroImage___internal___type = 'blog_post.heroImage.internal.type',
  blog_post___description___id = 'blog_post.description.id',
  blog_post___description___parent___id = 'blog_post.description.parent.id',
  blog_post___description___parent___children = 'blog_post.description.parent.children',
  blog_post___description___children = 'blog_post.description.children',
  blog_post___description___children___id = 'blog_post.description.children.id',
  blog_post___description___children___children = 'blog_post.description.children.children',
  blog_post___description___internal___content = 'blog_post.description.internal.content',
  blog_post___description___internal___contentDigest = 'blog_post.description.internal.contentDigest',
  blog_post___description___internal___description = 'blog_post.description.internal.description',
  blog_post___description___internal___fieldOwners = 'blog_post.description.internal.fieldOwners',
  blog_post___description___internal___ignoreType = 'blog_post.description.internal.ignoreType',
  blog_post___description___internal___mediaType = 'blog_post.description.internal.mediaType',
  blog_post___description___internal___owner = 'blog_post.description.internal.owner',
  blog_post___description___internal___type = 'blog_post.description.internal.type',
  blog_post___description___description = 'blog_post.description.description',
  blog_post___description___sys___type = 'blog_post.description.sys.type',
  blog_post___description___childrenMarkdownRemark = 'blog_post.description.childrenMarkdownRemark',
  blog_post___description___childrenMarkdownRemark___id = 'blog_post.description.childrenMarkdownRemark.id',
  blog_post___description___childrenMarkdownRemark___excerpt = 'blog_post.description.childrenMarkdownRemark.excerpt',
  blog_post___description___childrenMarkdownRemark___rawMarkdownBody = 'blog_post.description.childrenMarkdownRemark.rawMarkdownBody',
  blog_post___description___childrenMarkdownRemark___html = 'blog_post.description.childrenMarkdownRemark.html',
  blog_post___description___childrenMarkdownRemark___htmlAst = 'blog_post.description.childrenMarkdownRemark.htmlAst',
  blog_post___description___childrenMarkdownRemark___excerptAst = 'blog_post.description.childrenMarkdownRemark.excerptAst',
  blog_post___description___childrenMarkdownRemark___headings = 'blog_post.description.childrenMarkdownRemark.headings',
  blog_post___description___childrenMarkdownRemark___timeToRead = 'blog_post.description.childrenMarkdownRemark.timeToRead',
  blog_post___description___childrenMarkdownRemark___tableOfContents = 'blog_post.description.childrenMarkdownRemark.tableOfContents',
  blog_post___description___childrenMarkdownRemark___children = 'blog_post.description.childrenMarkdownRemark.children',
  blog_post___description___childMarkdownRemark___id = 'blog_post.description.childMarkdownRemark.id',
  blog_post___description___childMarkdownRemark___excerpt = 'blog_post.description.childMarkdownRemark.excerpt',
  blog_post___description___childMarkdownRemark___rawMarkdownBody = 'blog_post.description.childMarkdownRemark.rawMarkdownBody',
  blog_post___description___childMarkdownRemark___html = 'blog_post.description.childMarkdownRemark.html',
  blog_post___description___childMarkdownRemark___htmlAst = 'blog_post.description.childMarkdownRemark.htmlAst',
  blog_post___description___childMarkdownRemark___excerptAst = 'blog_post.description.childMarkdownRemark.excerptAst',
  blog_post___description___childMarkdownRemark___headings = 'blog_post.description.childMarkdownRemark.headings',
  blog_post___description___childMarkdownRemark___timeToRead = 'blog_post.description.childMarkdownRemark.timeToRead',
  blog_post___description___childMarkdownRemark___tableOfContents = 'blog_post.description.childMarkdownRemark.tableOfContents',
  blog_post___description___childMarkdownRemark___children = 'blog_post.description.childMarkdownRemark.children',
  blog_post___body___id = 'blog_post.body.id',
  blog_post___body___parent___id = 'blog_post.body.parent.id',
  blog_post___body___parent___children = 'blog_post.body.parent.children',
  blog_post___body___children = 'blog_post.body.children',
  blog_post___body___children___id = 'blog_post.body.children.id',
  blog_post___body___children___children = 'blog_post.body.children.children',
  blog_post___body___internal___content = 'blog_post.body.internal.content',
  blog_post___body___internal___contentDigest = 'blog_post.body.internal.contentDigest',
  blog_post___body___internal___description = 'blog_post.body.internal.description',
  blog_post___body___internal___fieldOwners = 'blog_post.body.internal.fieldOwners',
  blog_post___body___internal___ignoreType = 'blog_post.body.internal.ignoreType',
  blog_post___body___internal___mediaType = 'blog_post.body.internal.mediaType',
  blog_post___body___internal___owner = 'blog_post.body.internal.owner',
  blog_post___body___internal___type = 'blog_post.body.internal.type',
  blog_post___body___body = 'blog_post.body.body',
  blog_post___body___sys___type = 'blog_post.body.sys.type',
  blog_post___body___childrenMarkdownRemark = 'blog_post.body.childrenMarkdownRemark',
  blog_post___body___childrenMarkdownRemark___id = 'blog_post.body.childrenMarkdownRemark.id',
  blog_post___body___childrenMarkdownRemark___excerpt = 'blog_post.body.childrenMarkdownRemark.excerpt',
  blog_post___body___childrenMarkdownRemark___rawMarkdownBody = 'blog_post.body.childrenMarkdownRemark.rawMarkdownBody',
  blog_post___body___childrenMarkdownRemark___html = 'blog_post.body.childrenMarkdownRemark.html',
  blog_post___body___childrenMarkdownRemark___htmlAst = 'blog_post.body.childrenMarkdownRemark.htmlAst',
  blog_post___body___childrenMarkdownRemark___excerptAst = 'blog_post.body.childrenMarkdownRemark.excerptAst',
  blog_post___body___childrenMarkdownRemark___headings = 'blog_post.body.childrenMarkdownRemark.headings',
  blog_post___body___childrenMarkdownRemark___timeToRead = 'blog_post.body.childrenMarkdownRemark.timeToRead',
  blog_post___body___childrenMarkdownRemark___tableOfContents = 'blog_post.body.childrenMarkdownRemark.tableOfContents',
  blog_post___body___childrenMarkdownRemark___children = 'blog_post.body.childrenMarkdownRemark.children',
  blog_post___body___childMarkdownRemark___id = 'blog_post.body.childMarkdownRemark.id',
  blog_post___body___childMarkdownRemark___excerpt = 'blog_post.body.childMarkdownRemark.excerpt',
  blog_post___body___childMarkdownRemark___rawMarkdownBody = 'blog_post.body.childMarkdownRemark.rawMarkdownBody',
  blog_post___body___childMarkdownRemark___html = 'blog_post.body.childMarkdownRemark.html',
  blog_post___body___childMarkdownRemark___htmlAst = 'blog_post.body.childMarkdownRemark.htmlAst',
  blog_post___body___childMarkdownRemark___excerptAst = 'blog_post.body.childMarkdownRemark.excerptAst',
  blog_post___body___childMarkdownRemark___headings = 'blog_post.body.childMarkdownRemark.headings',
  blog_post___body___childMarkdownRemark___timeToRead = 'blog_post.body.childMarkdownRemark.timeToRead',
  blog_post___body___childMarkdownRemark___tableOfContents = 'blog_post.body.childMarkdownRemark.tableOfContents',
  blog_post___body___childMarkdownRemark___children = 'blog_post.body.childMarkdownRemark.children',
  blog_post___spaceId = 'blog_post.spaceId',
  blog_post___createdAt = 'blog_post.createdAt',
  blog_post___updatedAt = 'blog_post.updatedAt',
  blog_post___sys___type = 'blog_post.sys.type',
  blog_post___sys___revision = 'blog_post.sys.revision',
  blog_post___tags = 'blog_post.tags',
  blog_post___author___contentful_id = 'blog_post.author.contentful_id',
  blog_post___author___id = 'blog_post.author.id',
  blog_post___author___node_locale = 'blog_post.author.node_locale',
  blog_post___author___name = 'blog_post.author.name',
  blog_post___author___title = 'blog_post.author.title',
  blog_post___author___company = 'blog_post.author.company',
  blog_post___author___email = 'blog_post.author.email',
  blog_post___author___phone = 'blog_post.author.phone',
  blog_post___author___facebook = 'blog_post.author.facebook',
  blog_post___author___twitter = 'blog_post.author.twitter',
  blog_post___author___github = 'blog_post.author.github',
  blog_post___author___image___contentful_id = 'blog_post.author.image.contentful_id',
  blog_post___author___image___id = 'blog_post.author.image.id',
  blog_post___author___image___spaceId = 'blog_post.author.image.spaceId',
  blog_post___author___image___createdAt = 'blog_post.author.image.createdAt',
  blog_post___author___image___updatedAt = 'blog_post.author.image.updatedAt',
  blog_post___author___image___title = 'blog_post.author.image.title',
  blog_post___author___image___description = 'blog_post.author.image.description',
  blog_post___author___image___node_locale = 'blog_post.author.image.node_locale',
  blog_post___author___image___children = 'blog_post.author.image.children',
  blog_post___author___blog_post = 'blog_post.author.blog_post',
  blog_post___author___blog_post___contentful_id = 'blog_post.author.blog_post.contentful_id',
  blog_post___author___blog_post___id = 'blog_post.author.blog_post.id',
  blog_post___author___blog_post___node_locale = 'blog_post.author.blog_post.node_locale',
  blog_post___author___blog_post___title = 'blog_post.author.blog_post.title',
  blog_post___author___blog_post___slug = 'blog_post.author.blog_post.slug',
  blog_post___author___blog_post___publishDate = 'blog_post.author.blog_post.publishDate',
  blog_post___author___blog_post___spaceId = 'blog_post.author.blog_post.spaceId',
  blog_post___author___blog_post___createdAt = 'blog_post.author.blog_post.createdAt',
  blog_post___author___blog_post___updatedAt = 'blog_post.author.blog_post.updatedAt',
  blog_post___author___blog_post___tags = 'blog_post.author.blog_post.tags',
  blog_post___author___blog_post___gatsbyPath = 'blog_post.author.blog_post.gatsbyPath',
  blog_post___author___blog_post___childrenContentfulBlogPostBodyTextNode = 'blog_post.author.blog_post.childrenContentfulBlogPostBodyTextNode',
  blog_post___author___blog_post___childrenContentfulBlogPostDescriptionTextNode = 'blog_post.author.blog_post.childrenContentfulBlogPostDescriptionTextNode',
  blog_post___author___blog_post___children = 'blog_post.author.blog_post.children',
  blog_post___author___shortBio___id = 'blog_post.author.shortBio.id',
  blog_post___author___shortBio___children = 'blog_post.author.shortBio.children',
  blog_post___author___shortBio___shortBio = 'blog_post.author.shortBio.shortBio',
  blog_post___author___shortBio___childrenMarkdownRemark = 'blog_post.author.shortBio.childrenMarkdownRemark',
  blog_post___author___spaceId = 'blog_post.author.spaceId',
  blog_post___author___createdAt = 'blog_post.author.createdAt',
  blog_post___author___updatedAt = 'blog_post.author.updatedAt',
  blog_post___author___sys___type = 'blog_post.author.sys.type',
  blog_post___author___sys___revision = 'blog_post.author.sys.revision',
  blog_post___author___childrenContentfulPersonShortBioTextNode = 'blog_post.author.childrenContentfulPersonShortBioTextNode',
  blog_post___author___childrenContentfulPersonShortBioTextNode___id = 'blog_post.author.childrenContentfulPersonShortBioTextNode.id',
  blog_post___author___childrenContentfulPersonShortBioTextNode___children = 'blog_post.author.childrenContentfulPersonShortBioTextNode.children',
  blog_post___author___childrenContentfulPersonShortBioTextNode___shortBio = 'blog_post.author.childrenContentfulPersonShortBioTextNode.shortBio',
  blog_post___author___childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark = 'blog_post.author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark',
  blog_post___author___childContentfulPersonShortBioTextNode___id = 'blog_post.author.childContentfulPersonShortBioTextNode.id',
  blog_post___author___childContentfulPersonShortBioTextNode___children = 'blog_post.author.childContentfulPersonShortBioTextNode.children',
  blog_post___author___childContentfulPersonShortBioTextNode___shortBio = 'blog_post.author.childContentfulPersonShortBioTextNode.shortBio',
  blog_post___author___childContentfulPersonShortBioTextNode___childrenMarkdownRemark = 'blog_post.author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark',
  blog_post___author___parent___id = 'blog_post.author.parent.id',
  blog_post___author___parent___children = 'blog_post.author.parent.children',
  blog_post___author___children = 'blog_post.author.children',
  blog_post___author___children___id = 'blog_post.author.children.id',
  blog_post___author___children___children = 'blog_post.author.children.children',
  blog_post___author___internal___content = 'blog_post.author.internal.content',
  blog_post___author___internal___contentDigest = 'blog_post.author.internal.contentDigest',
  blog_post___author___internal___description = 'blog_post.author.internal.description',
  blog_post___author___internal___fieldOwners = 'blog_post.author.internal.fieldOwners',
  blog_post___author___internal___ignoreType = 'blog_post.author.internal.ignoreType',
  blog_post___author___internal___mediaType = 'blog_post.author.internal.mediaType',
  blog_post___author___internal___owner = 'blog_post.author.internal.owner',
  blog_post___author___internal___type = 'blog_post.author.internal.type',
  blog_post___gatsbyPath = 'blog_post.gatsbyPath',
  blog_post___childrenContentfulBlogPostBodyTextNode = 'blog_post.childrenContentfulBlogPostBodyTextNode',
  blog_post___childrenContentfulBlogPostBodyTextNode___id = 'blog_post.childrenContentfulBlogPostBodyTextNode.id',
  blog_post___childrenContentfulBlogPostBodyTextNode___parent___id = 'blog_post.childrenContentfulBlogPostBodyTextNode.parent.id',
  blog_post___childrenContentfulBlogPostBodyTextNode___parent___children = 'blog_post.childrenContentfulBlogPostBodyTextNode.parent.children',
  blog_post___childrenContentfulBlogPostBodyTextNode___children = 'blog_post.childrenContentfulBlogPostBodyTextNode.children',
  blog_post___childrenContentfulBlogPostBodyTextNode___children___id = 'blog_post.childrenContentfulBlogPostBodyTextNode.children.id',
  blog_post___childrenContentfulBlogPostBodyTextNode___children___children = 'blog_post.childrenContentfulBlogPostBodyTextNode.children.children',
  blog_post___childrenContentfulBlogPostBodyTextNode___internal___content = 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.content',
  blog_post___childrenContentfulBlogPostBodyTextNode___internal___contentDigest = 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.contentDigest',
  blog_post___childrenContentfulBlogPostBodyTextNode___internal___description = 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.description',
  blog_post___childrenContentfulBlogPostBodyTextNode___internal___fieldOwners = 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.fieldOwners',
  blog_post___childrenContentfulBlogPostBodyTextNode___internal___ignoreType = 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.ignoreType',
  blog_post___childrenContentfulBlogPostBodyTextNode___internal___mediaType = 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.mediaType',
  blog_post___childrenContentfulBlogPostBodyTextNode___internal___owner = 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.owner',
  blog_post___childrenContentfulBlogPostBodyTextNode___internal___type = 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.type',
  blog_post___childrenContentfulBlogPostBodyTextNode___body = 'blog_post.childrenContentfulBlogPostBodyTextNode.body',
  blog_post___childrenContentfulBlogPostBodyTextNode___sys___type = 'blog_post.childrenContentfulBlogPostBodyTextNode.sys.type',
  blog_post___childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark = 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark',
  blog_post___childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___id = 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.id',
  blog_post___childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___excerpt = 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerpt',
  blog_post___childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___rawMarkdownBody = 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody',
  blog_post___childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___html = 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.html',
  blog_post___childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___htmlAst = 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst',
  blog_post___childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___excerptAst = 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst',
  blog_post___childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___headings = 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings',
  blog_post___childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___timeToRead = 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead',
  blog_post___childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___tableOfContents = 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents',
  blog_post___childrenContentfulBlogPostBodyTextNode___childrenMarkdownRemark___children = 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children',
  blog_post___childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___id = 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.id',
  blog_post___childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___excerpt = 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt',
  blog_post___childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___rawMarkdownBody = 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody',
  blog_post___childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___html = 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.html',
  blog_post___childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___htmlAst = 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.htmlAst',
  blog_post___childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___excerptAst = 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.excerptAst',
  blog_post___childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___headings = 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.headings',
  blog_post___childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___timeToRead = 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.timeToRead',
  blog_post___childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___tableOfContents = 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.tableOfContents',
  blog_post___childrenContentfulBlogPostBodyTextNode___childMarkdownRemark___children = 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.children',
  blog_post___childContentfulBlogPostBodyTextNode___id = 'blog_post.childContentfulBlogPostBodyTextNode.id',
  blog_post___childContentfulBlogPostBodyTextNode___parent___id = 'blog_post.childContentfulBlogPostBodyTextNode.parent.id',
  blog_post___childContentfulBlogPostBodyTextNode___parent___children = 'blog_post.childContentfulBlogPostBodyTextNode.parent.children',
  blog_post___childContentfulBlogPostBodyTextNode___children = 'blog_post.childContentfulBlogPostBodyTextNode.children',
  blog_post___childContentfulBlogPostBodyTextNode___children___id = 'blog_post.childContentfulBlogPostBodyTextNode.children.id',
  blog_post___childContentfulBlogPostBodyTextNode___children___children = 'blog_post.childContentfulBlogPostBodyTextNode.children.children',
  blog_post___childContentfulBlogPostBodyTextNode___internal___content = 'blog_post.childContentfulBlogPostBodyTextNode.internal.content',
  blog_post___childContentfulBlogPostBodyTextNode___internal___contentDigest = 'blog_post.childContentfulBlogPostBodyTextNode.internal.contentDigest',
  blog_post___childContentfulBlogPostBodyTextNode___internal___description = 'blog_post.childContentfulBlogPostBodyTextNode.internal.description',
  blog_post___childContentfulBlogPostBodyTextNode___internal___fieldOwners = 'blog_post.childContentfulBlogPostBodyTextNode.internal.fieldOwners',
  blog_post___childContentfulBlogPostBodyTextNode___internal___ignoreType = 'blog_post.childContentfulBlogPostBodyTextNode.internal.ignoreType',
  blog_post___childContentfulBlogPostBodyTextNode___internal___mediaType = 'blog_post.childContentfulBlogPostBodyTextNode.internal.mediaType',
  blog_post___childContentfulBlogPostBodyTextNode___internal___owner = 'blog_post.childContentfulBlogPostBodyTextNode.internal.owner',
  blog_post___childContentfulBlogPostBodyTextNode___internal___type = 'blog_post.childContentfulBlogPostBodyTextNode.internal.type',
  blog_post___childContentfulBlogPostBodyTextNode___body = 'blog_post.childContentfulBlogPostBodyTextNode.body',
  blog_post___childContentfulBlogPostBodyTextNode___sys___type = 'blog_post.childContentfulBlogPostBodyTextNode.sys.type',
  blog_post___childContentfulBlogPostBodyTextNode___childrenMarkdownRemark = 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark',
  blog_post___childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___id = 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.id',
  blog_post___childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___excerpt = 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerpt',
  blog_post___childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___rawMarkdownBody = 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody',
  blog_post___childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___html = 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.html',
  blog_post___childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___htmlAst = 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst',
  blog_post___childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___excerptAst = 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst',
  blog_post___childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___headings = 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings',
  blog_post___childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___timeToRead = 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead',
  blog_post___childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___tableOfContents = 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents',
  blog_post___childContentfulBlogPostBodyTextNode___childrenMarkdownRemark___children = 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___id = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.id',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerpt = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___rawMarkdownBody = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___html = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.html',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___htmlAst = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.htmlAst',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerptAst = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerptAst',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___timeToRead = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.timeToRead',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___tableOfContents = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.tableOfContents',
  blog_post___childContentfulBlogPostBodyTextNode___childMarkdownRemark___children = 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.children',
  blog_post___childrenContentfulBlogPostDescriptionTextNode = 'blog_post.childrenContentfulBlogPostDescriptionTextNode',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___id = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.id',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___parent___id = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.parent.id',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___parent___children = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.parent.children',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___children = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.children',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___children___id = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.children.id',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___children___children = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.children.children',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___internal___content = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.content',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___internal___contentDigest = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.contentDigest',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___internal___description = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.description',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___internal___fieldOwners = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.fieldOwners',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___internal___ignoreType = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.ignoreType',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___internal___mediaType = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.mediaType',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___internal___owner = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.owner',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___internal___type = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.type',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___description = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.description',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___sys___type = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.sys.type',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___id = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.id',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___excerpt = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___rawMarkdownBody = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___html = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.html',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___htmlAst = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___excerptAst = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___headings = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___timeToRead = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___tableOfContents = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___children = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___id = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.id',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerpt = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___rawMarkdownBody = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___html = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.html',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___htmlAst = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerptAst = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___timeToRead = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___tableOfContents = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents',
  blog_post___childrenContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children = 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children',
  blog_post___childContentfulBlogPostDescriptionTextNode___id = 'blog_post.childContentfulBlogPostDescriptionTextNode.id',
  blog_post___childContentfulBlogPostDescriptionTextNode___parent___id = 'blog_post.childContentfulBlogPostDescriptionTextNode.parent.id',
  blog_post___childContentfulBlogPostDescriptionTextNode___parent___children = 'blog_post.childContentfulBlogPostDescriptionTextNode.parent.children',
  blog_post___childContentfulBlogPostDescriptionTextNode___children = 'blog_post.childContentfulBlogPostDescriptionTextNode.children',
  blog_post___childContentfulBlogPostDescriptionTextNode___children___id = 'blog_post.childContentfulBlogPostDescriptionTextNode.children.id',
  blog_post___childContentfulBlogPostDescriptionTextNode___children___children = 'blog_post.childContentfulBlogPostDescriptionTextNode.children.children',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___content = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.content',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___contentDigest = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.contentDigest',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___description = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.description',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___fieldOwners = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.fieldOwners',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___ignoreType = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.ignoreType',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___mediaType = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.mediaType',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___owner = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.owner',
  blog_post___childContentfulBlogPostDescriptionTextNode___internal___type = 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.type',
  blog_post___childContentfulBlogPostDescriptionTextNode___description = 'blog_post.childContentfulBlogPostDescriptionTextNode.description',
  blog_post___childContentfulBlogPostDescriptionTextNode___sys___type = 'blog_post.childContentfulBlogPostDescriptionTextNode.sys.type',
  blog_post___childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark = 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark',
  blog_post___childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___id = 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.id',
  blog_post___childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___excerpt = 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt',
  blog_post___childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___rawMarkdownBody = 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody',
  blog_post___childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___html = 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.html',
  blog_post___childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___htmlAst = 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst',
  blog_post___childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___excerptAst = 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst',
  blog_post___childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___headings = 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings',
  blog_post___childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___timeToRead = 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead',
  blog_post___childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___tableOfContents = 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents',
  blog_post___childContentfulBlogPostDescriptionTextNode___childrenMarkdownRemark___children = 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___id = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.id',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerpt = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___rawMarkdownBody = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___html = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.html',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___htmlAst = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___excerptAst = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___headings = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___timeToRead = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___tableOfContents = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents',
  blog_post___childContentfulBlogPostDescriptionTextNode___childMarkdownRemark___children = 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children',
  blog_post___parent___id = 'blog_post.parent.id',
  blog_post___parent___parent___id = 'blog_post.parent.parent.id',
  blog_post___parent___parent___children = 'blog_post.parent.parent.children',
  blog_post___parent___children = 'blog_post.parent.children',
  blog_post___parent___children___id = 'blog_post.parent.children.id',
  blog_post___parent___children___children = 'blog_post.parent.children.children',
  blog_post___parent___internal___content = 'blog_post.parent.internal.content',
  blog_post___parent___internal___contentDigest = 'blog_post.parent.internal.contentDigest',
  blog_post___parent___internal___description = 'blog_post.parent.internal.description',
  blog_post___parent___internal___fieldOwners = 'blog_post.parent.internal.fieldOwners',
  blog_post___parent___internal___ignoreType = 'blog_post.parent.internal.ignoreType',
  blog_post___parent___internal___mediaType = 'blog_post.parent.internal.mediaType',
  blog_post___parent___internal___owner = 'blog_post.parent.internal.owner',
  blog_post___parent___internal___type = 'blog_post.parent.internal.type',
  blog_post___children = 'blog_post.children',
  blog_post___children___id = 'blog_post.children.id',
  blog_post___children___parent___id = 'blog_post.children.parent.id',
  blog_post___children___parent___children = 'blog_post.children.parent.children',
  blog_post___children___children = 'blog_post.children.children',
  blog_post___children___children___id = 'blog_post.children.children.id',
  blog_post___children___children___children = 'blog_post.children.children.children',
  blog_post___children___internal___content = 'blog_post.children.internal.content',
  blog_post___children___internal___contentDigest = 'blog_post.children.internal.contentDigest',
  blog_post___children___internal___description = 'blog_post.children.internal.description',
  blog_post___children___internal___fieldOwners = 'blog_post.children.internal.fieldOwners',
  blog_post___children___internal___ignoreType = 'blog_post.children.internal.ignoreType',
  blog_post___children___internal___mediaType = 'blog_post.children.internal.mediaType',
  blog_post___children___internal___owner = 'blog_post.children.internal.owner',
  blog_post___children___internal___type = 'blog_post.children.internal.type',
  blog_post___internal___content = 'blog_post.internal.content',
  blog_post___internal___contentDigest = 'blog_post.internal.contentDigest',
  blog_post___internal___description = 'blog_post.internal.description',
  blog_post___internal___fieldOwners = 'blog_post.internal.fieldOwners',
  blog_post___internal___ignoreType = 'blog_post.internal.ignoreType',
  blog_post___internal___mediaType = 'blog_post.internal.mediaType',
  blog_post___internal___owner = 'blog_post.internal.owner',
  blog_post___internal___type = 'blog_post.internal.type',
  shortBio___id = 'shortBio.id',
  shortBio___parent___id = 'shortBio.parent.id',
  shortBio___parent___parent___id = 'shortBio.parent.parent.id',
  shortBio___parent___parent___children = 'shortBio.parent.parent.children',
  shortBio___parent___children = 'shortBio.parent.children',
  shortBio___parent___children___id = 'shortBio.parent.children.id',
  shortBio___parent___children___children = 'shortBio.parent.children.children',
  shortBio___parent___internal___content = 'shortBio.parent.internal.content',
  shortBio___parent___internal___contentDigest = 'shortBio.parent.internal.contentDigest',
  shortBio___parent___internal___description = 'shortBio.parent.internal.description',
  shortBio___parent___internal___fieldOwners = 'shortBio.parent.internal.fieldOwners',
  shortBio___parent___internal___ignoreType = 'shortBio.parent.internal.ignoreType',
  shortBio___parent___internal___mediaType = 'shortBio.parent.internal.mediaType',
  shortBio___parent___internal___owner = 'shortBio.parent.internal.owner',
  shortBio___parent___internal___type = 'shortBio.parent.internal.type',
  shortBio___children = 'shortBio.children',
  shortBio___children___id = 'shortBio.children.id',
  shortBio___children___parent___id = 'shortBio.children.parent.id',
  shortBio___children___parent___children = 'shortBio.children.parent.children',
  shortBio___children___children = 'shortBio.children.children',
  shortBio___children___children___id = 'shortBio.children.children.id',
  shortBio___children___children___children = 'shortBio.children.children.children',
  shortBio___children___internal___content = 'shortBio.children.internal.content',
  shortBio___children___internal___contentDigest = 'shortBio.children.internal.contentDigest',
  shortBio___children___internal___description = 'shortBio.children.internal.description',
  shortBio___children___internal___fieldOwners = 'shortBio.children.internal.fieldOwners',
  shortBio___children___internal___ignoreType = 'shortBio.children.internal.ignoreType',
  shortBio___children___internal___mediaType = 'shortBio.children.internal.mediaType',
  shortBio___children___internal___owner = 'shortBio.children.internal.owner',
  shortBio___children___internal___type = 'shortBio.children.internal.type',
  shortBio___internal___content = 'shortBio.internal.content',
  shortBio___internal___contentDigest = 'shortBio.internal.contentDigest',
  shortBio___internal___description = 'shortBio.internal.description',
  shortBio___internal___fieldOwners = 'shortBio.internal.fieldOwners',
  shortBio___internal___ignoreType = 'shortBio.internal.ignoreType',
  shortBio___internal___mediaType = 'shortBio.internal.mediaType',
  shortBio___internal___owner = 'shortBio.internal.owner',
  shortBio___internal___type = 'shortBio.internal.type',
  shortBio___shortBio = 'shortBio.shortBio',
  shortBio___sys___type = 'shortBio.sys.type',
  shortBio___childrenMarkdownRemark = 'shortBio.childrenMarkdownRemark',
  shortBio___childrenMarkdownRemark___id = 'shortBio.childrenMarkdownRemark.id',
  shortBio___childrenMarkdownRemark___frontmatter___title = 'shortBio.childrenMarkdownRemark.frontmatter.title',
  shortBio___childrenMarkdownRemark___excerpt = 'shortBio.childrenMarkdownRemark.excerpt',
  shortBio___childrenMarkdownRemark___rawMarkdownBody = 'shortBio.childrenMarkdownRemark.rawMarkdownBody',
  shortBio___childrenMarkdownRemark___html = 'shortBio.childrenMarkdownRemark.html',
  shortBio___childrenMarkdownRemark___htmlAst = 'shortBio.childrenMarkdownRemark.htmlAst',
  shortBio___childrenMarkdownRemark___excerptAst = 'shortBio.childrenMarkdownRemark.excerptAst',
  shortBio___childrenMarkdownRemark___headings = 'shortBio.childrenMarkdownRemark.headings',
  shortBio___childrenMarkdownRemark___headings___id = 'shortBio.childrenMarkdownRemark.headings.id',
  shortBio___childrenMarkdownRemark___headings___value = 'shortBio.childrenMarkdownRemark.headings.value',
  shortBio___childrenMarkdownRemark___headings___depth = 'shortBio.childrenMarkdownRemark.headings.depth',
  shortBio___childrenMarkdownRemark___timeToRead = 'shortBio.childrenMarkdownRemark.timeToRead',
  shortBio___childrenMarkdownRemark___tableOfContents = 'shortBio.childrenMarkdownRemark.tableOfContents',
  shortBio___childrenMarkdownRemark___wordCount___paragraphs = 'shortBio.childrenMarkdownRemark.wordCount.paragraphs',
  shortBio___childrenMarkdownRemark___wordCount___sentences = 'shortBio.childrenMarkdownRemark.wordCount.sentences',
  shortBio___childrenMarkdownRemark___wordCount___words = 'shortBio.childrenMarkdownRemark.wordCount.words',
  shortBio___childrenMarkdownRemark___parent___id = 'shortBio.childrenMarkdownRemark.parent.id',
  shortBio___childrenMarkdownRemark___parent___children = 'shortBio.childrenMarkdownRemark.parent.children',
  shortBio___childrenMarkdownRemark___children = 'shortBio.childrenMarkdownRemark.children',
  shortBio___childrenMarkdownRemark___children___id = 'shortBio.childrenMarkdownRemark.children.id',
  shortBio___childrenMarkdownRemark___children___children = 'shortBio.childrenMarkdownRemark.children.children',
  shortBio___childrenMarkdownRemark___internal___content = 'shortBio.childrenMarkdownRemark.internal.content',
  shortBio___childrenMarkdownRemark___internal___contentDigest = 'shortBio.childrenMarkdownRemark.internal.contentDigest',
  shortBio___childrenMarkdownRemark___internal___description = 'shortBio.childrenMarkdownRemark.internal.description',
  shortBio___childrenMarkdownRemark___internal___fieldOwners = 'shortBio.childrenMarkdownRemark.internal.fieldOwners',
  shortBio___childrenMarkdownRemark___internal___ignoreType = 'shortBio.childrenMarkdownRemark.internal.ignoreType',
  shortBio___childrenMarkdownRemark___internal___mediaType = 'shortBio.childrenMarkdownRemark.internal.mediaType',
  shortBio___childrenMarkdownRemark___internal___owner = 'shortBio.childrenMarkdownRemark.internal.owner',
  shortBio___childrenMarkdownRemark___internal___type = 'shortBio.childrenMarkdownRemark.internal.type',
  shortBio___childMarkdownRemark___id = 'shortBio.childMarkdownRemark.id',
  shortBio___childMarkdownRemark___frontmatter___title = 'shortBio.childMarkdownRemark.frontmatter.title',
  shortBio___childMarkdownRemark___excerpt = 'shortBio.childMarkdownRemark.excerpt',
  shortBio___childMarkdownRemark___rawMarkdownBody = 'shortBio.childMarkdownRemark.rawMarkdownBody',
  shortBio___childMarkdownRemark___html = 'shortBio.childMarkdownRemark.html',
  shortBio___childMarkdownRemark___htmlAst = 'shortBio.childMarkdownRemark.htmlAst',
  shortBio___childMarkdownRemark___excerptAst = 'shortBio.childMarkdownRemark.excerptAst',
  shortBio___childMarkdownRemark___headings = 'shortBio.childMarkdownRemark.headings',
  shortBio___childMarkdownRemark___headings___id = 'shortBio.childMarkdownRemark.headings.id',
  shortBio___childMarkdownRemark___headings___value = 'shortBio.childMarkdownRemark.headings.value',
  shortBio___childMarkdownRemark___headings___depth = 'shortBio.childMarkdownRemark.headings.depth',
  shortBio___childMarkdownRemark___timeToRead = 'shortBio.childMarkdownRemark.timeToRead',
  shortBio___childMarkdownRemark___tableOfContents = 'shortBio.childMarkdownRemark.tableOfContents',
  shortBio___childMarkdownRemark___wordCount___paragraphs = 'shortBio.childMarkdownRemark.wordCount.paragraphs',
  shortBio___childMarkdownRemark___wordCount___sentences = 'shortBio.childMarkdownRemark.wordCount.sentences',
  shortBio___childMarkdownRemark___wordCount___words = 'shortBio.childMarkdownRemark.wordCount.words',
  shortBio___childMarkdownRemark___parent___id = 'shortBio.childMarkdownRemark.parent.id',
  shortBio___childMarkdownRemark___parent___children = 'shortBio.childMarkdownRemark.parent.children',
  shortBio___childMarkdownRemark___children = 'shortBio.childMarkdownRemark.children',
  shortBio___childMarkdownRemark___children___id = 'shortBio.childMarkdownRemark.children.id',
  shortBio___childMarkdownRemark___children___children = 'shortBio.childMarkdownRemark.children.children',
  shortBio___childMarkdownRemark___internal___content = 'shortBio.childMarkdownRemark.internal.content',
  shortBio___childMarkdownRemark___internal___contentDigest = 'shortBio.childMarkdownRemark.internal.contentDigest',
  shortBio___childMarkdownRemark___internal___description = 'shortBio.childMarkdownRemark.internal.description',
  shortBio___childMarkdownRemark___internal___fieldOwners = 'shortBio.childMarkdownRemark.internal.fieldOwners',
  shortBio___childMarkdownRemark___internal___ignoreType = 'shortBio.childMarkdownRemark.internal.ignoreType',
  shortBio___childMarkdownRemark___internal___mediaType = 'shortBio.childMarkdownRemark.internal.mediaType',
  shortBio___childMarkdownRemark___internal___owner = 'shortBio.childMarkdownRemark.internal.owner',
  shortBio___childMarkdownRemark___internal___type = 'shortBio.childMarkdownRemark.internal.type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  sys___contentType___sys___type = 'sys.contentType.sys.type',
  sys___contentType___sys___linkType = 'sys.contentType.sys.linkType',
  sys___contentType___sys___id = 'sys.contentType.sys.id',
  childrenContentfulPersonShortBioTextNode = 'childrenContentfulPersonShortBioTextNode',
  childrenContentfulPersonShortBioTextNode___id = 'childrenContentfulPersonShortBioTextNode.id',
  childrenContentfulPersonShortBioTextNode___parent___id = 'childrenContentfulPersonShortBioTextNode.parent.id',
  childrenContentfulPersonShortBioTextNode___parent___parent___id = 'childrenContentfulPersonShortBioTextNode.parent.parent.id',
  childrenContentfulPersonShortBioTextNode___parent___parent___children = 'childrenContentfulPersonShortBioTextNode.parent.parent.children',
  childrenContentfulPersonShortBioTextNode___parent___children = 'childrenContentfulPersonShortBioTextNode.parent.children',
  childrenContentfulPersonShortBioTextNode___parent___children___id = 'childrenContentfulPersonShortBioTextNode.parent.children.id',
  childrenContentfulPersonShortBioTextNode___parent___children___children = 'childrenContentfulPersonShortBioTextNode.parent.children.children',
  childrenContentfulPersonShortBioTextNode___parent___internal___content = 'childrenContentfulPersonShortBioTextNode.parent.internal.content',
  childrenContentfulPersonShortBioTextNode___parent___internal___contentDigest = 'childrenContentfulPersonShortBioTextNode.parent.internal.contentDigest',
  childrenContentfulPersonShortBioTextNode___parent___internal___description = 'childrenContentfulPersonShortBioTextNode.parent.internal.description',
  childrenContentfulPersonShortBioTextNode___parent___internal___fieldOwners = 'childrenContentfulPersonShortBioTextNode.parent.internal.fieldOwners',
  childrenContentfulPersonShortBioTextNode___parent___internal___ignoreType = 'childrenContentfulPersonShortBioTextNode.parent.internal.ignoreType',
  childrenContentfulPersonShortBioTextNode___parent___internal___mediaType = 'childrenContentfulPersonShortBioTextNode.parent.internal.mediaType',
  childrenContentfulPersonShortBioTextNode___parent___internal___owner = 'childrenContentfulPersonShortBioTextNode.parent.internal.owner',
  childrenContentfulPersonShortBioTextNode___parent___internal___type = 'childrenContentfulPersonShortBioTextNode.parent.internal.type',
  childrenContentfulPersonShortBioTextNode___children = 'childrenContentfulPersonShortBioTextNode.children',
  childrenContentfulPersonShortBioTextNode___children___id = 'childrenContentfulPersonShortBioTextNode.children.id',
  childrenContentfulPersonShortBioTextNode___children___parent___id = 'childrenContentfulPersonShortBioTextNode.children.parent.id',
  childrenContentfulPersonShortBioTextNode___children___parent___children = 'childrenContentfulPersonShortBioTextNode.children.parent.children',
  childrenContentfulPersonShortBioTextNode___children___children = 'childrenContentfulPersonShortBioTextNode.children.children',
  childrenContentfulPersonShortBioTextNode___children___children___id = 'childrenContentfulPersonShortBioTextNode.children.children.id',
  childrenContentfulPersonShortBioTextNode___children___children___children = 'childrenContentfulPersonShortBioTextNode.children.children.children',
  childrenContentfulPersonShortBioTextNode___children___internal___content = 'childrenContentfulPersonShortBioTextNode.children.internal.content',
  childrenContentfulPersonShortBioTextNode___children___internal___contentDigest = 'childrenContentfulPersonShortBioTextNode.children.internal.contentDigest',
  childrenContentfulPersonShortBioTextNode___children___internal___description = 'childrenContentfulPersonShortBioTextNode.children.internal.description',
  childrenContentfulPersonShortBioTextNode___children___internal___fieldOwners = 'childrenContentfulPersonShortBioTextNode.children.internal.fieldOwners',
  childrenContentfulPersonShortBioTextNode___children___internal___ignoreType = 'childrenContentfulPersonShortBioTextNode.children.internal.ignoreType',
  childrenContentfulPersonShortBioTextNode___children___internal___mediaType = 'childrenContentfulPersonShortBioTextNode.children.internal.mediaType',
  childrenContentfulPersonShortBioTextNode___children___internal___owner = 'childrenContentfulPersonShortBioTextNode.children.internal.owner',
  childrenContentfulPersonShortBioTextNode___children___internal___type = 'childrenContentfulPersonShortBioTextNode.children.internal.type',
  childrenContentfulPersonShortBioTextNode___internal___content = 'childrenContentfulPersonShortBioTextNode.internal.content',
  childrenContentfulPersonShortBioTextNode___internal___contentDigest = 'childrenContentfulPersonShortBioTextNode.internal.contentDigest',
  childrenContentfulPersonShortBioTextNode___internal___description = 'childrenContentfulPersonShortBioTextNode.internal.description',
  childrenContentfulPersonShortBioTextNode___internal___fieldOwners = 'childrenContentfulPersonShortBioTextNode.internal.fieldOwners',
  childrenContentfulPersonShortBioTextNode___internal___ignoreType = 'childrenContentfulPersonShortBioTextNode.internal.ignoreType',
  childrenContentfulPersonShortBioTextNode___internal___mediaType = 'childrenContentfulPersonShortBioTextNode.internal.mediaType',
  childrenContentfulPersonShortBioTextNode___internal___owner = 'childrenContentfulPersonShortBioTextNode.internal.owner',
  childrenContentfulPersonShortBioTextNode___internal___type = 'childrenContentfulPersonShortBioTextNode.internal.type',
  childrenContentfulPersonShortBioTextNode___shortBio = 'childrenContentfulPersonShortBioTextNode.shortBio',
  childrenContentfulPersonShortBioTextNode___sys___type = 'childrenContentfulPersonShortBioTextNode.sys.type',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___id = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.id',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___frontmatter___title = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.frontmatter.title',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___excerpt = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.excerpt',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___html = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.html',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___htmlAst = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.htmlAst',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___excerptAst = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.excerptAst',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___headings = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___headings___id = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings.id',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___headings___value = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings.value',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___headings___depth = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings.depth',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___timeToRead = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.timeToRead',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___tableOfContents = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.tableOfContents',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___wordCount___sentences = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.wordCount.sentences',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___wordCount___words = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.wordCount.words',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___parent___id = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.parent.id',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___parent___children = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.parent.children',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___children = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.children',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___children___id = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.children.id',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___children___children = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.children.children',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___internal___content = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.content',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___internal___contentDigest = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.contentDigest',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___internal___description = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.description',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___internal___ignoreType = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.ignoreType',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___internal___mediaType = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.mediaType',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___internal___owner = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.owner',
  childrenContentfulPersonShortBioTextNode___childrenMarkdownRemark___internal___type = 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.type',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___id = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.id',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___frontmatter___title = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.frontmatter.title',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___excerpt = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.excerpt',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___rawMarkdownBody = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.rawMarkdownBody',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___html = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.html',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___htmlAst = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.htmlAst',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___excerptAst = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.excerptAst',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___headings = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.headings',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___headings___id = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.headings.id',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___headings___value = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.headings.value',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___headings___depth = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.headings.depth',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___timeToRead = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.timeToRead',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___tableOfContents = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.tableOfContents',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___paragraphs = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.wordCount.paragraphs',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___sentences = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.wordCount.sentences',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___words = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.wordCount.words',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___parent___id = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.parent.id',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___parent___children = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.parent.children',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___children = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.children',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___children___id = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.children.id',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___children___children = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.children.children',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___internal___content = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.internal.content',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___internal___contentDigest = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.internal.contentDigest',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___internal___description = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.internal.description',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___internal___fieldOwners = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.internal.fieldOwners',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___internal___ignoreType = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.internal.ignoreType',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___internal___mediaType = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.internal.mediaType',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___internal___owner = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.internal.owner',
  childrenContentfulPersonShortBioTextNode___childMarkdownRemark___internal___type = 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.internal.type',
  childContentfulPersonShortBioTextNode___id = 'childContentfulPersonShortBioTextNode.id',
  childContentfulPersonShortBioTextNode___parent___id = 'childContentfulPersonShortBioTextNode.parent.id',
  childContentfulPersonShortBioTextNode___parent___parent___id = 'childContentfulPersonShortBioTextNode.parent.parent.id',
  childContentfulPersonShortBioTextNode___parent___parent___children = 'childContentfulPersonShortBioTextNode.parent.parent.children',
  childContentfulPersonShortBioTextNode___parent___children = 'childContentfulPersonShortBioTextNode.parent.children',
  childContentfulPersonShortBioTextNode___parent___children___id = 'childContentfulPersonShortBioTextNode.parent.children.id',
  childContentfulPersonShortBioTextNode___parent___children___children = 'childContentfulPersonShortBioTextNode.parent.children.children',
  childContentfulPersonShortBioTextNode___parent___internal___content = 'childContentfulPersonShortBioTextNode.parent.internal.content',
  childContentfulPersonShortBioTextNode___parent___internal___contentDigest = 'childContentfulPersonShortBioTextNode.parent.internal.contentDigest',
  childContentfulPersonShortBioTextNode___parent___internal___description = 'childContentfulPersonShortBioTextNode.parent.internal.description',
  childContentfulPersonShortBioTextNode___parent___internal___fieldOwners = 'childContentfulPersonShortBioTextNode.parent.internal.fieldOwners',
  childContentfulPersonShortBioTextNode___parent___internal___ignoreType = 'childContentfulPersonShortBioTextNode.parent.internal.ignoreType',
  childContentfulPersonShortBioTextNode___parent___internal___mediaType = 'childContentfulPersonShortBioTextNode.parent.internal.mediaType',
  childContentfulPersonShortBioTextNode___parent___internal___owner = 'childContentfulPersonShortBioTextNode.parent.internal.owner',
  childContentfulPersonShortBioTextNode___parent___internal___type = 'childContentfulPersonShortBioTextNode.parent.internal.type',
  childContentfulPersonShortBioTextNode___children = 'childContentfulPersonShortBioTextNode.children',
  childContentfulPersonShortBioTextNode___children___id = 'childContentfulPersonShortBioTextNode.children.id',
  childContentfulPersonShortBioTextNode___children___parent___id = 'childContentfulPersonShortBioTextNode.children.parent.id',
  childContentfulPersonShortBioTextNode___children___parent___children = 'childContentfulPersonShortBioTextNode.children.parent.children',
  childContentfulPersonShortBioTextNode___children___children = 'childContentfulPersonShortBioTextNode.children.children',
  childContentfulPersonShortBioTextNode___children___children___id = 'childContentfulPersonShortBioTextNode.children.children.id',
  childContentfulPersonShortBioTextNode___children___children___children = 'childContentfulPersonShortBioTextNode.children.children.children',
  childContentfulPersonShortBioTextNode___children___internal___content = 'childContentfulPersonShortBioTextNode.children.internal.content',
  childContentfulPersonShortBioTextNode___children___internal___contentDigest = 'childContentfulPersonShortBioTextNode.children.internal.contentDigest',
  childContentfulPersonShortBioTextNode___children___internal___description = 'childContentfulPersonShortBioTextNode.children.internal.description',
  childContentfulPersonShortBioTextNode___children___internal___fieldOwners = 'childContentfulPersonShortBioTextNode.children.internal.fieldOwners',
  childContentfulPersonShortBioTextNode___children___internal___ignoreType = 'childContentfulPersonShortBioTextNode.children.internal.ignoreType',
  childContentfulPersonShortBioTextNode___children___internal___mediaType = 'childContentfulPersonShortBioTextNode.children.internal.mediaType',
  childContentfulPersonShortBioTextNode___children___internal___owner = 'childContentfulPersonShortBioTextNode.children.internal.owner',
  childContentfulPersonShortBioTextNode___children___internal___type = 'childContentfulPersonShortBioTextNode.children.internal.type',
  childContentfulPersonShortBioTextNode___internal___content = 'childContentfulPersonShortBioTextNode.internal.content',
  childContentfulPersonShortBioTextNode___internal___contentDigest = 'childContentfulPersonShortBioTextNode.internal.contentDigest',
  childContentfulPersonShortBioTextNode___internal___description = 'childContentfulPersonShortBioTextNode.internal.description',
  childContentfulPersonShortBioTextNode___internal___fieldOwners = 'childContentfulPersonShortBioTextNode.internal.fieldOwners',
  childContentfulPersonShortBioTextNode___internal___ignoreType = 'childContentfulPersonShortBioTextNode.internal.ignoreType',
  childContentfulPersonShortBioTextNode___internal___mediaType = 'childContentfulPersonShortBioTextNode.internal.mediaType',
  childContentfulPersonShortBioTextNode___internal___owner = 'childContentfulPersonShortBioTextNode.internal.owner',
  childContentfulPersonShortBioTextNode___internal___type = 'childContentfulPersonShortBioTextNode.internal.type',
  childContentfulPersonShortBioTextNode___shortBio = 'childContentfulPersonShortBioTextNode.shortBio',
  childContentfulPersonShortBioTextNode___sys___type = 'childContentfulPersonShortBioTextNode.sys.type',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___id = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.id',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___frontmatter___title = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.frontmatter.title',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___excerpt = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.excerpt',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___html = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.html',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___htmlAst = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.htmlAst',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___excerptAst = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.excerptAst',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___headings = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___headings___id = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings.id',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___headings___value = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings.value',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___headings___depth = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings.depth',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___timeToRead = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.timeToRead',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___tableOfContents = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.tableOfContents',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___wordCount___sentences = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.wordCount.sentences',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___wordCount___words = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.wordCount.words',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___parent___id = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.parent.id',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___parent___children = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.parent.children',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___children = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.children',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___children___id = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.children.id',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___children___children = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.children.children',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___internal___content = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.content',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___internal___contentDigest = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.contentDigest',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___internal___description = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.description',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___internal___ignoreType = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.ignoreType',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___internal___mediaType = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.mediaType',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___internal___owner = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.owner',
  childContentfulPersonShortBioTextNode___childrenMarkdownRemark___internal___type = 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.type',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___id = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.id',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.frontmatter.title',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___excerpt = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.excerpt',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.rawMarkdownBody',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___html = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.html',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___htmlAst = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.htmlAst',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___excerptAst = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.excerptAst',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___headings = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.headings',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___headings___id = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.headings.id',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___headings___value = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.headings.value',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___headings___depth = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.headings.depth',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___timeToRead = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.timeToRead',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___tableOfContents = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.tableOfContents',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.wordCount.paragraphs',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.wordCount.sentences',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___words = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.wordCount.words',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___parent___id = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.parent.id',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___parent___children = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.parent.children',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___children = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.children',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___children___id = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.children.id',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___children___children = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.children.children',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___content = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.internal.content',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.internal.contentDigest',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___description = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.internal.description',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.internal.fieldOwners',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.internal.ignoreType',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.internal.mediaType',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___owner = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.internal.owner',
  childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___type = 'childContentfulPersonShortBioTextNode.childMarkdownRemark.internal.type',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ContentfulPersonFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly company: Maybe<StringQueryOperatorInput>;
  readonly email: Maybe<StringQueryOperatorInput>;
  readonly phone: Maybe<StringQueryOperatorInput>;
  readonly facebook: Maybe<StringQueryOperatorInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly github: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFilterInput>;
  readonly blog_post: Maybe<ContentfulBlogPostFilterListInput>;
  readonly shortBio: Maybe<contentfulPersonShortBioTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulPersonSysFilterInput>;
  readonly childrenContentfulPersonShortBioTextNode: Maybe<contentfulPersonShortBioTextNodeFilterListInput>;
  readonly childContentfulPersonShortBioTextNode: Maybe<contentfulPersonShortBioTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulPersonGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPersonEdge>;
  readonly nodes: ReadonlyArray<ContentfulPerson>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulPersonShortBioTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly shortBio: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulPersonShortBioTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulPersonShortBioTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPersonShortBioTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPersonShortBioTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulPersonShortBioTextNodeGroupConnection>;
};


type contentfulPersonShortBioTextNodeConnection_distinctArgs = {
  field: contentfulPersonShortBioTextNodeFieldsEnum;
};


type contentfulPersonShortBioTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPersonShortBioTextNodeFieldsEnum;
};

type contentfulPersonShortBioTextNodeEdge = {
  readonly next: Maybe<contentfulPersonShortBioTextNode>;
  readonly node: contentfulPersonShortBioTextNode;
  readonly previous: Maybe<contentfulPersonShortBioTextNode>;
};

enum contentfulPersonShortBioTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  shortBio = 'shortBio',
  sys___type = 'sys.type',
  childrenMarkdownRemark = 'childrenMarkdownRemark',
  childrenMarkdownRemark___id = 'childrenMarkdownRemark.id',
  childrenMarkdownRemark___frontmatter___title = 'childrenMarkdownRemark.frontmatter.title',
  childrenMarkdownRemark___excerpt = 'childrenMarkdownRemark.excerpt',
  childrenMarkdownRemark___rawMarkdownBody = 'childrenMarkdownRemark.rawMarkdownBody',
  childrenMarkdownRemark___html = 'childrenMarkdownRemark.html',
  childrenMarkdownRemark___htmlAst = 'childrenMarkdownRemark.htmlAst',
  childrenMarkdownRemark___excerptAst = 'childrenMarkdownRemark.excerptAst',
  childrenMarkdownRemark___headings = 'childrenMarkdownRemark.headings',
  childrenMarkdownRemark___headings___id = 'childrenMarkdownRemark.headings.id',
  childrenMarkdownRemark___headings___value = 'childrenMarkdownRemark.headings.value',
  childrenMarkdownRemark___headings___depth = 'childrenMarkdownRemark.headings.depth',
  childrenMarkdownRemark___timeToRead = 'childrenMarkdownRemark.timeToRead',
  childrenMarkdownRemark___tableOfContents = 'childrenMarkdownRemark.tableOfContents',
  childrenMarkdownRemark___wordCount___paragraphs = 'childrenMarkdownRemark.wordCount.paragraphs',
  childrenMarkdownRemark___wordCount___sentences = 'childrenMarkdownRemark.wordCount.sentences',
  childrenMarkdownRemark___wordCount___words = 'childrenMarkdownRemark.wordCount.words',
  childrenMarkdownRemark___parent___id = 'childrenMarkdownRemark.parent.id',
  childrenMarkdownRemark___parent___parent___id = 'childrenMarkdownRemark.parent.parent.id',
  childrenMarkdownRemark___parent___parent___children = 'childrenMarkdownRemark.parent.parent.children',
  childrenMarkdownRemark___parent___children = 'childrenMarkdownRemark.parent.children',
  childrenMarkdownRemark___parent___children___id = 'childrenMarkdownRemark.parent.children.id',
  childrenMarkdownRemark___parent___children___children = 'childrenMarkdownRemark.parent.children.children',
  childrenMarkdownRemark___parent___internal___content = 'childrenMarkdownRemark.parent.internal.content',
  childrenMarkdownRemark___parent___internal___contentDigest = 'childrenMarkdownRemark.parent.internal.contentDigest',
  childrenMarkdownRemark___parent___internal___description = 'childrenMarkdownRemark.parent.internal.description',
  childrenMarkdownRemark___parent___internal___fieldOwners = 'childrenMarkdownRemark.parent.internal.fieldOwners',
  childrenMarkdownRemark___parent___internal___ignoreType = 'childrenMarkdownRemark.parent.internal.ignoreType',
  childrenMarkdownRemark___parent___internal___mediaType = 'childrenMarkdownRemark.parent.internal.mediaType',
  childrenMarkdownRemark___parent___internal___owner = 'childrenMarkdownRemark.parent.internal.owner',
  childrenMarkdownRemark___parent___internal___type = 'childrenMarkdownRemark.parent.internal.type',
  childrenMarkdownRemark___children = 'childrenMarkdownRemark.children',
  childrenMarkdownRemark___children___id = 'childrenMarkdownRemark.children.id',
  childrenMarkdownRemark___children___parent___id = 'childrenMarkdownRemark.children.parent.id',
  childrenMarkdownRemark___children___parent___children = 'childrenMarkdownRemark.children.parent.children',
  childrenMarkdownRemark___children___children = 'childrenMarkdownRemark.children.children',
  childrenMarkdownRemark___children___children___id = 'childrenMarkdownRemark.children.children.id',
  childrenMarkdownRemark___children___children___children = 'childrenMarkdownRemark.children.children.children',
  childrenMarkdownRemark___children___internal___content = 'childrenMarkdownRemark.children.internal.content',
  childrenMarkdownRemark___children___internal___contentDigest = 'childrenMarkdownRemark.children.internal.contentDigest',
  childrenMarkdownRemark___children___internal___description = 'childrenMarkdownRemark.children.internal.description',
  childrenMarkdownRemark___children___internal___fieldOwners = 'childrenMarkdownRemark.children.internal.fieldOwners',
  childrenMarkdownRemark___children___internal___ignoreType = 'childrenMarkdownRemark.children.internal.ignoreType',
  childrenMarkdownRemark___children___internal___mediaType = 'childrenMarkdownRemark.children.internal.mediaType',
  childrenMarkdownRemark___children___internal___owner = 'childrenMarkdownRemark.children.internal.owner',
  childrenMarkdownRemark___children___internal___type = 'childrenMarkdownRemark.children.internal.type',
  childrenMarkdownRemark___internal___content = 'childrenMarkdownRemark.internal.content',
  childrenMarkdownRemark___internal___contentDigest = 'childrenMarkdownRemark.internal.contentDigest',
  childrenMarkdownRemark___internal___description = 'childrenMarkdownRemark.internal.description',
  childrenMarkdownRemark___internal___fieldOwners = 'childrenMarkdownRemark.internal.fieldOwners',
  childrenMarkdownRemark___internal___ignoreType = 'childrenMarkdownRemark.internal.ignoreType',
  childrenMarkdownRemark___internal___mediaType = 'childrenMarkdownRemark.internal.mediaType',
  childrenMarkdownRemark___internal___owner = 'childrenMarkdownRemark.internal.owner',
  childrenMarkdownRemark___internal___type = 'childrenMarkdownRemark.internal.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark.headings.id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type'
}

type contentfulPersonShortBioTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly shortBio: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulPersonShortBioTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulPersonShortBioTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulPersonShortBioTextNodeFilterInput>;
};

type contentfulPersonShortBioTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPersonShortBioTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPersonShortBioTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulPersonShortBioTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulPersonShortBioTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulPersonShortBioTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulPersonShortBioTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulPersonSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulPersonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulPersonSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulPersonSysContentType>;
};

type ContentfulPersonSysContentType = {
  readonly sys: Maybe<ContentfulPersonSysContentTypeSys>;
};

type ContentfulPersonSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulPersonSysContentTypeSysFilterInput>;
};

type ContentfulPersonSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulPersonSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulPersonSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulPersonSysContentTypeFilterInput>;
};

type ContentfulRecipe = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly yield: Maybe<Scalars['String']>;
  readonly prepTime: Maybe<Scalars['Int']>;
  readonly totalTime: Maybe<Scalars['Int']>;
  readonly featured: Maybe<Scalars['Boolean']>;
  readonly mainImage: Maybe<ContentfulAsset>;
  readonly ingredients: Maybe<contentfulRecipeIngredientsTextNode>;
  readonly prepDirections: Maybe<contentfulRecipePrepDirectionsTextNode>;
  readonly directions: Maybe<contentfulRecipeDirectionsTextNode>;
  readonly notes: Maybe<contentfulRecipeNotesTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulRecipeSys>;
  readonly ingredientTags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly foodTypeTags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly gatsbyPath: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type contentfulRecipeNotesTextNode */
  readonly childrenContentfulRecipeNotesTextNode: Maybe<ReadonlyArray<Maybe<contentfulRecipeNotesTextNode>>>;
  /**
   * Returns the first child node of type contentfulRecipeNotesTextNode or null if
   * there are no children of given type on this node
   */
  readonly childContentfulRecipeNotesTextNode: Maybe<contentfulRecipeNotesTextNode>;
  /** Returns all children nodes filtered by type contentfulRecipeDirectionsTextNode */
  readonly childrenContentfulRecipeDirectionsTextNode: Maybe<ReadonlyArray<Maybe<contentfulRecipeDirectionsTextNode>>>;
  /**
   * Returns the first child node of type contentfulRecipeDirectionsTextNode or
   * null if there are no children of given type on this node
   */
  readonly childContentfulRecipeDirectionsTextNode: Maybe<contentfulRecipeDirectionsTextNode>;
  /** Returns all children nodes filtered by type contentfulRecipePrepDirectionsTextNode */
  readonly childrenContentfulRecipePrepDirectionsTextNode: Maybe<ReadonlyArray<Maybe<contentfulRecipePrepDirectionsTextNode>>>;
  /**
   * Returns the first child node of type contentfulRecipePrepDirectionsTextNode or
   * null if there are no children of given type on this node
   */
  readonly childContentfulRecipePrepDirectionsTextNode: Maybe<contentfulRecipePrepDirectionsTextNode>;
  /** Returns all children nodes filtered by type contentfulRecipeIngredientsTextNode */
  readonly childrenContentfulRecipeIngredientsTextNode: Maybe<ReadonlyArray<Maybe<contentfulRecipeIngredientsTextNode>>>;
  /**
   * Returns the first child node of type contentfulRecipeIngredientsTextNode or
   * null if there are no children of given type on this node
   */
  readonly childContentfulRecipeIngredientsTextNode: Maybe<contentfulRecipeIngredientsTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulRecipe_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulRecipe_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulRecipe_gatsbyPathArgs = {
  filePath: Maybe<Scalars['String']>;
};

type ContentfulRecipeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulRecipeEdge>;
  readonly nodes: ReadonlyArray<ContentfulRecipe>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulRecipeGroupConnection>;
};


type ContentfulRecipeConnection_distinctArgs = {
  field: ContentfulRecipeFieldsEnum;
};


type ContentfulRecipeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulRecipeFieldsEnum;
};

type contentfulRecipeDirectionsTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly directions: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulRecipeDirectionsTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulRecipeDirectionsTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulRecipeDirectionsTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulRecipeDirectionsTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulRecipeDirectionsTextNodeGroupConnection>;
};


type contentfulRecipeDirectionsTextNodeConnection_distinctArgs = {
  field: contentfulRecipeDirectionsTextNodeFieldsEnum;
};


type contentfulRecipeDirectionsTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulRecipeDirectionsTextNodeFieldsEnum;
};

type contentfulRecipeDirectionsTextNodeEdge = {
  readonly next: Maybe<contentfulRecipeDirectionsTextNode>;
  readonly node: contentfulRecipeDirectionsTextNode;
  readonly previous: Maybe<contentfulRecipeDirectionsTextNode>;
};

enum contentfulRecipeDirectionsTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  directions = 'directions',
  sys___type = 'sys.type',
  childrenMarkdownRemark = 'childrenMarkdownRemark',
  childrenMarkdownRemark___id = 'childrenMarkdownRemark.id',
  childrenMarkdownRemark___frontmatter___title = 'childrenMarkdownRemark.frontmatter.title',
  childrenMarkdownRemark___excerpt = 'childrenMarkdownRemark.excerpt',
  childrenMarkdownRemark___rawMarkdownBody = 'childrenMarkdownRemark.rawMarkdownBody',
  childrenMarkdownRemark___html = 'childrenMarkdownRemark.html',
  childrenMarkdownRemark___htmlAst = 'childrenMarkdownRemark.htmlAst',
  childrenMarkdownRemark___excerptAst = 'childrenMarkdownRemark.excerptAst',
  childrenMarkdownRemark___headings = 'childrenMarkdownRemark.headings',
  childrenMarkdownRemark___headings___id = 'childrenMarkdownRemark.headings.id',
  childrenMarkdownRemark___headings___value = 'childrenMarkdownRemark.headings.value',
  childrenMarkdownRemark___headings___depth = 'childrenMarkdownRemark.headings.depth',
  childrenMarkdownRemark___timeToRead = 'childrenMarkdownRemark.timeToRead',
  childrenMarkdownRemark___tableOfContents = 'childrenMarkdownRemark.tableOfContents',
  childrenMarkdownRemark___wordCount___paragraphs = 'childrenMarkdownRemark.wordCount.paragraphs',
  childrenMarkdownRemark___wordCount___sentences = 'childrenMarkdownRemark.wordCount.sentences',
  childrenMarkdownRemark___wordCount___words = 'childrenMarkdownRemark.wordCount.words',
  childrenMarkdownRemark___parent___id = 'childrenMarkdownRemark.parent.id',
  childrenMarkdownRemark___parent___parent___id = 'childrenMarkdownRemark.parent.parent.id',
  childrenMarkdownRemark___parent___parent___children = 'childrenMarkdownRemark.parent.parent.children',
  childrenMarkdownRemark___parent___children = 'childrenMarkdownRemark.parent.children',
  childrenMarkdownRemark___parent___children___id = 'childrenMarkdownRemark.parent.children.id',
  childrenMarkdownRemark___parent___children___children = 'childrenMarkdownRemark.parent.children.children',
  childrenMarkdownRemark___parent___internal___content = 'childrenMarkdownRemark.parent.internal.content',
  childrenMarkdownRemark___parent___internal___contentDigest = 'childrenMarkdownRemark.parent.internal.contentDigest',
  childrenMarkdownRemark___parent___internal___description = 'childrenMarkdownRemark.parent.internal.description',
  childrenMarkdownRemark___parent___internal___fieldOwners = 'childrenMarkdownRemark.parent.internal.fieldOwners',
  childrenMarkdownRemark___parent___internal___ignoreType = 'childrenMarkdownRemark.parent.internal.ignoreType',
  childrenMarkdownRemark___parent___internal___mediaType = 'childrenMarkdownRemark.parent.internal.mediaType',
  childrenMarkdownRemark___parent___internal___owner = 'childrenMarkdownRemark.parent.internal.owner',
  childrenMarkdownRemark___parent___internal___type = 'childrenMarkdownRemark.parent.internal.type',
  childrenMarkdownRemark___children = 'childrenMarkdownRemark.children',
  childrenMarkdownRemark___children___id = 'childrenMarkdownRemark.children.id',
  childrenMarkdownRemark___children___parent___id = 'childrenMarkdownRemark.children.parent.id',
  childrenMarkdownRemark___children___parent___children = 'childrenMarkdownRemark.children.parent.children',
  childrenMarkdownRemark___children___children = 'childrenMarkdownRemark.children.children',
  childrenMarkdownRemark___children___children___id = 'childrenMarkdownRemark.children.children.id',
  childrenMarkdownRemark___children___children___children = 'childrenMarkdownRemark.children.children.children',
  childrenMarkdownRemark___children___internal___content = 'childrenMarkdownRemark.children.internal.content',
  childrenMarkdownRemark___children___internal___contentDigest = 'childrenMarkdownRemark.children.internal.contentDigest',
  childrenMarkdownRemark___children___internal___description = 'childrenMarkdownRemark.children.internal.description',
  childrenMarkdownRemark___children___internal___fieldOwners = 'childrenMarkdownRemark.children.internal.fieldOwners',
  childrenMarkdownRemark___children___internal___ignoreType = 'childrenMarkdownRemark.children.internal.ignoreType',
  childrenMarkdownRemark___children___internal___mediaType = 'childrenMarkdownRemark.children.internal.mediaType',
  childrenMarkdownRemark___children___internal___owner = 'childrenMarkdownRemark.children.internal.owner',
  childrenMarkdownRemark___children___internal___type = 'childrenMarkdownRemark.children.internal.type',
  childrenMarkdownRemark___internal___content = 'childrenMarkdownRemark.internal.content',
  childrenMarkdownRemark___internal___contentDigest = 'childrenMarkdownRemark.internal.contentDigest',
  childrenMarkdownRemark___internal___description = 'childrenMarkdownRemark.internal.description',
  childrenMarkdownRemark___internal___fieldOwners = 'childrenMarkdownRemark.internal.fieldOwners',
  childrenMarkdownRemark___internal___ignoreType = 'childrenMarkdownRemark.internal.ignoreType',
  childrenMarkdownRemark___internal___mediaType = 'childrenMarkdownRemark.internal.mediaType',
  childrenMarkdownRemark___internal___owner = 'childrenMarkdownRemark.internal.owner',
  childrenMarkdownRemark___internal___type = 'childrenMarkdownRemark.internal.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark.headings.id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type'
}

type contentfulRecipeDirectionsTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly directions: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulRecipeDirectionsTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulRecipeDirectionsTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulRecipeDirectionsTextNodeFilterInput>;
};

type contentfulRecipeDirectionsTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulRecipeDirectionsTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulRecipeDirectionsTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulRecipeDirectionsTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulRecipeDirectionsTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulRecipeDirectionsTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulRecipeDirectionsTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulRecipeEdge = {
  readonly next: Maybe<ContentfulRecipe>;
  readonly node: ContentfulRecipe;
  readonly previous: Maybe<ContentfulRecipe>;
};

enum ContentfulRecipeFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  title = 'title',
  yield = 'yield',
  prepTime = 'prepTime',
  totalTime = 'totalTime',
  featured = 'featured',
  mainImage___contentful_id = 'mainImage.contentful_id',
  mainImage___id = 'mainImage.id',
  mainImage___spaceId = 'mainImage.spaceId',
  mainImage___createdAt = 'mainImage.createdAt',
  mainImage___updatedAt = 'mainImage.updatedAt',
  mainImage___file___url = 'mainImage.file.url',
  mainImage___file___details___size = 'mainImage.file.details.size',
  mainImage___file___fileName = 'mainImage.file.fileName',
  mainImage___file___contentType = 'mainImage.file.contentType',
  mainImage___title = 'mainImage.title',
  mainImage___description = 'mainImage.description',
  mainImage___node_locale = 'mainImage.node_locale',
  mainImage___sys___type = 'mainImage.sys.type',
  mainImage___sys___revision = 'mainImage.sys.revision',
  mainImage___fixed___base64 = 'mainImage.fixed.base64',
  mainImage___fixed___tracedSVG = 'mainImage.fixed.tracedSVG',
  mainImage___fixed___aspectRatio = 'mainImage.fixed.aspectRatio',
  mainImage___fixed___width = 'mainImage.fixed.width',
  mainImage___fixed___height = 'mainImage.fixed.height',
  mainImage___fixed___src = 'mainImage.fixed.src',
  mainImage___fixed___srcSet = 'mainImage.fixed.srcSet',
  mainImage___fixed___srcWebp = 'mainImage.fixed.srcWebp',
  mainImage___fixed___srcSetWebp = 'mainImage.fixed.srcSetWebp',
  mainImage___resolutions___base64 = 'mainImage.resolutions.base64',
  mainImage___resolutions___tracedSVG = 'mainImage.resolutions.tracedSVG',
  mainImage___resolutions___aspectRatio = 'mainImage.resolutions.aspectRatio',
  mainImage___resolutions___width = 'mainImage.resolutions.width',
  mainImage___resolutions___height = 'mainImage.resolutions.height',
  mainImage___resolutions___src = 'mainImage.resolutions.src',
  mainImage___resolutions___srcSet = 'mainImage.resolutions.srcSet',
  mainImage___resolutions___srcWebp = 'mainImage.resolutions.srcWebp',
  mainImage___resolutions___srcSetWebp = 'mainImage.resolutions.srcSetWebp',
  mainImage___fluid___base64 = 'mainImage.fluid.base64',
  mainImage___fluid___tracedSVG = 'mainImage.fluid.tracedSVG',
  mainImage___fluid___aspectRatio = 'mainImage.fluid.aspectRatio',
  mainImage___fluid___src = 'mainImage.fluid.src',
  mainImage___fluid___srcSet = 'mainImage.fluid.srcSet',
  mainImage___fluid___srcWebp = 'mainImage.fluid.srcWebp',
  mainImage___fluid___srcSetWebp = 'mainImage.fluid.srcSetWebp',
  mainImage___fluid___sizes = 'mainImage.fluid.sizes',
  mainImage___sizes___base64 = 'mainImage.sizes.base64',
  mainImage___sizes___tracedSVG = 'mainImage.sizes.tracedSVG',
  mainImage___sizes___aspectRatio = 'mainImage.sizes.aspectRatio',
  mainImage___sizes___src = 'mainImage.sizes.src',
  mainImage___sizes___srcSet = 'mainImage.sizes.srcSet',
  mainImage___sizes___srcWebp = 'mainImage.sizes.srcWebp',
  mainImage___sizes___srcSetWebp = 'mainImage.sizes.srcSetWebp',
  mainImage___sizes___sizes = 'mainImage.sizes.sizes',
  mainImage___resize___base64 = 'mainImage.resize.base64',
  mainImage___resize___tracedSVG = 'mainImage.resize.tracedSVG',
  mainImage___resize___src = 'mainImage.resize.src',
  mainImage___resize___width = 'mainImage.resize.width',
  mainImage___resize___height = 'mainImage.resize.height',
  mainImage___resize___aspectRatio = 'mainImage.resize.aspectRatio',
  mainImage___parent___id = 'mainImage.parent.id',
  mainImage___parent___parent___id = 'mainImage.parent.parent.id',
  mainImage___parent___parent___children = 'mainImage.parent.parent.children',
  mainImage___parent___children = 'mainImage.parent.children',
  mainImage___parent___children___id = 'mainImage.parent.children.id',
  mainImage___parent___children___children = 'mainImage.parent.children.children',
  mainImage___parent___internal___content = 'mainImage.parent.internal.content',
  mainImage___parent___internal___contentDigest = 'mainImage.parent.internal.contentDigest',
  mainImage___parent___internal___description = 'mainImage.parent.internal.description',
  mainImage___parent___internal___fieldOwners = 'mainImage.parent.internal.fieldOwners',
  mainImage___parent___internal___ignoreType = 'mainImage.parent.internal.ignoreType',
  mainImage___parent___internal___mediaType = 'mainImage.parent.internal.mediaType',
  mainImage___parent___internal___owner = 'mainImage.parent.internal.owner',
  mainImage___parent___internal___type = 'mainImage.parent.internal.type',
  mainImage___children = 'mainImage.children',
  mainImage___children___id = 'mainImage.children.id',
  mainImage___children___parent___id = 'mainImage.children.parent.id',
  mainImage___children___parent___children = 'mainImage.children.parent.children',
  mainImage___children___children = 'mainImage.children.children',
  mainImage___children___children___id = 'mainImage.children.children.id',
  mainImage___children___children___children = 'mainImage.children.children.children',
  mainImage___children___internal___content = 'mainImage.children.internal.content',
  mainImage___children___internal___contentDigest = 'mainImage.children.internal.contentDigest',
  mainImage___children___internal___description = 'mainImage.children.internal.description',
  mainImage___children___internal___fieldOwners = 'mainImage.children.internal.fieldOwners',
  mainImage___children___internal___ignoreType = 'mainImage.children.internal.ignoreType',
  mainImage___children___internal___mediaType = 'mainImage.children.internal.mediaType',
  mainImage___children___internal___owner = 'mainImage.children.internal.owner',
  mainImage___children___internal___type = 'mainImage.children.internal.type',
  mainImage___internal___content = 'mainImage.internal.content',
  mainImage___internal___contentDigest = 'mainImage.internal.contentDigest',
  mainImage___internal___description = 'mainImage.internal.description',
  mainImage___internal___fieldOwners = 'mainImage.internal.fieldOwners',
  mainImage___internal___ignoreType = 'mainImage.internal.ignoreType',
  mainImage___internal___mediaType = 'mainImage.internal.mediaType',
  mainImage___internal___owner = 'mainImage.internal.owner',
  mainImage___internal___type = 'mainImage.internal.type',
  ingredients___id = 'ingredients.id',
  ingredients___parent___id = 'ingredients.parent.id',
  ingredients___parent___parent___id = 'ingredients.parent.parent.id',
  ingredients___parent___parent___children = 'ingredients.parent.parent.children',
  ingredients___parent___children = 'ingredients.parent.children',
  ingredients___parent___children___id = 'ingredients.parent.children.id',
  ingredients___parent___children___children = 'ingredients.parent.children.children',
  ingredients___parent___internal___content = 'ingredients.parent.internal.content',
  ingredients___parent___internal___contentDigest = 'ingredients.parent.internal.contentDigest',
  ingredients___parent___internal___description = 'ingredients.parent.internal.description',
  ingredients___parent___internal___fieldOwners = 'ingredients.parent.internal.fieldOwners',
  ingredients___parent___internal___ignoreType = 'ingredients.parent.internal.ignoreType',
  ingredients___parent___internal___mediaType = 'ingredients.parent.internal.mediaType',
  ingredients___parent___internal___owner = 'ingredients.parent.internal.owner',
  ingredients___parent___internal___type = 'ingredients.parent.internal.type',
  ingredients___children = 'ingredients.children',
  ingredients___children___id = 'ingredients.children.id',
  ingredients___children___parent___id = 'ingredients.children.parent.id',
  ingredients___children___parent___children = 'ingredients.children.parent.children',
  ingredients___children___children = 'ingredients.children.children',
  ingredients___children___children___id = 'ingredients.children.children.id',
  ingredients___children___children___children = 'ingredients.children.children.children',
  ingredients___children___internal___content = 'ingredients.children.internal.content',
  ingredients___children___internal___contentDigest = 'ingredients.children.internal.contentDigest',
  ingredients___children___internal___description = 'ingredients.children.internal.description',
  ingredients___children___internal___fieldOwners = 'ingredients.children.internal.fieldOwners',
  ingredients___children___internal___ignoreType = 'ingredients.children.internal.ignoreType',
  ingredients___children___internal___mediaType = 'ingredients.children.internal.mediaType',
  ingredients___children___internal___owner = 'ingredients.children.internal.owner',
  ingredients___children___internal___type = 'ingredients.children.internal.type',
  ingredients___internal___content = 'ingredients.internal.content',
  ingredients___internal___contentDigest = 'ingredients.internal.contentDigest',
  ingredients___internal___description = 'ingredients.internal.description',
  ingredients___internal___fieldOwners = 'ingredients.internal.fieldOwners',
  ingredients___internal___ignoreType = 'ingredients.internal.ignoreType',
  ingredients___internal___mediaType = 'ingredients.internal.mediaType',
  ingredients___internal___owner = 'ingredients.internal.owner',
  ingredients___internal___type = 'ingredients.internal.type',
  ingredients___ingredients = 'ingredients.ingredients',
  ingredients___sys___type = 'ingredients.sys.type',
  ingredients___childrenMarkdownRemark = 'ingredients.childrenMarkdownRemark',
  ingredients___childrenMarkdownRemark___id = 'ingredients.childrenMarkdownRemark.id',
  ingredients___childrenMarkdownRemark___frontmatter___title = 'ingredients.childrenMarkdownRemark.frontmatter.title',
  ingredients___childrenMarkdownRemark___excerpt = 'ingredients.childrenMarkdownRemark.excerpt',
  ingredients___childrenMarkdownRemark___rawMarkdownBody = 'ingredients.childrenMarkdownRemark.rawMarkdownBody',
  ingredients___childrenMarkdownRemark___html = 'ingredients.childrenMarkdownRemark.html',
  ingredients___childrenMarkdownRemark___htmlAst = 'ingredients.childrenMarkdownRemark.htmlAst',
  ingredients___childrenMarkdownRemark___excerptAst = 'ingredients.childrenMarkdownRemark.excerptAst',
  ingredients___childrenMarkdownRemark___headings = 'ingredients.childrenMarkdownRemark.headings',
  ingredients___childrenMarkdownRemark___headings___id = 'ingredients.childrenMarkdownRemark.headings.id',
  ingredients___childrenMarkdownRemark___headings___value = 'ingredients.childrenMarkdownRemark.headings.value',
  ingredients___childrenMarkdownRemark___headings___depth = 'ingredients.childrenMarkdownRemark.headings.depth',
  ingredients___childrenMarkdownRemark___timeToRead = 'ingredients.childrenMarkdownRemark.timeToRead',
  ingredients___childrenMarkdownRemark___tableOfContents = 'ingredients.childrenMarkdownRemark.tableOfContents',
  ingredients___childrenMarkdownRemark___wordCount___paragraphs = 'ingredients.childrenMarkdownRemark.wordCount.paragraphs',
  ingredients___childrenMarkdownRemark___wordCount___sentences = 'ingredients.childrenMarkdownRemark.wordCount.sentences',
  ingredients___childrenMarkdownRemark___wordCount___words = 'ingredients.childrenMarkdownRemark.wordCount.words',
  ingredients___childrenMarkdownRemark___parent___id = 'ingredients.childrenMarkdownRemark.parent.id',
  ingredients___childrenMarkdownRemark___parent___children = 'ingredients.childrenMarkdownRemark.parent.children',
  ingredients___childrenMarkdownRemark___children = 'ingredients.childrenMarkdownRemark.children',
  ingredients___childrenMarkdownRemark___children___id = 'ingredients.childrenMarkdownRemark.children.id',
  ingredients___childrenMarkdownRemark___children___children = 'ingredients.childrenMarkdownRemark.children.children',
  ingredients___childrenMarkdownRemark___internal___content = 'ingredients.childrenMarkdownRemark.internal.content',
  ingredients___childrenMarkdownRemark___internal___contentDigest = 'ingredients.childrenMarkdownRemark.internal.contentDigest',
  ingredients___childrenMarkdownRemark___internal___description = 'ingredients.childrenMarkdownRemark.internal.description',
  ingredients___childrenMarkdownRemark___internal___fieldOwners = 'ingredients.childrenMarkdownRemark.internal.fieldOwners',
  ingredients___childrenMarkdownRemark___internal___ignoreType = 'ingredients.childrenMarkdownRemark.internal.ignoreType',
  ingredients___childrenMarkdownRemark___internal___mediaType = 'ingredients.childrenMarkdownRemark.internal.mediaType',
  ingredients___childrenMarkdownRemark___internal___owner = 'ingredients.childrenMarkdownRemark.internal.owner',
  ingredients___childrenMarkdownRemark___internal___type = 'ingredients.childrenMarkdownRemark.internal.type',
  ingredients___childMarkdownRemark___id = 'ingredients.childMarkdownRemark.id',
  ingredients___childMarkdownRemark___frontmatter___title = 'ingredients.childMarkdownRemark.frontmatter.title',
  ingredients___childMarkdownRemark___excerpt = 'ingredients.childMarkdownRemark.excerpt',
  ingredients___childMarkdownRemark___rawMarkdownBody = 'ingredients.childMarkdownRemark.rawMarkdownBody',
  ingredients___childMarkdownRemark___html = 'ingredients.childMarkdownRemark.html',
  ingredients___childMarkdownRemark___htmlAst = 'ingredients.childMarkdownRemark.htmlAst',
  ingredients___childMarkdownRemark___excerptAst = 'ingredients.childMarkdownRemark.excerptAst',
  ingredients___childMarkdownRemark___headings = 'ingredients.childMarkdownRemark.headings',
  ingredients___childMarkdownRemark___headings___id = 'ingredients.childMarkdownRemark.headings.id',
  ingredients___childMarkdownRemark___headings___value = 'ingredients.childMarkdownRemark.headings.value',
  ingredients___childMarkdownRemark___headings___depth = 'ingredients.childMarkdownRemark.headings.depth',
  ingredients___childMarkdownRemark___timeToRead = 'ingredients.childMarkdownRemark.timeToRead',
  ingredients___childMarkdownRemark___tableOfContents = 'ingredients.childMarkdownRemark.tableOfContents',
  ingredients___childMarkdownRemark___wordCount___paragraphs = 'ingredients.childMarkdownRemark.wordCount.paragraphs',
  ingredients___childMarkdownRemark___wordCount___sentences = 'ingredients.childMarkdownRemark.wordCount.sentences',
  ingredients___childMarkdownRemark___wordCount___words = 'ingredients.childMarkdownRemark.wordCount.words',
  ingredients___childMarkdownRemark___parent___id = 'ingredients.childMarkdownRemark.parent.id',
  ingredients___childMarkdownRemark___parent___children = 'ingredients.childMarkdownRemark.parent.children',
  ingredients___childMarkdownRemark___children = 'ingredients.childMarkdownRemark.children',
  ingredients___childMarkdownRemark___children___id = 'ingredients.childMarkdownRemark.children.id',
  ingredients___childMarkdownRemark___children___children = 'ingredients.childMarkdownRemark.children.children',
  ingredients___childMarkdownRemark___internal___content = 'ingredients.childMarkdownRemark.internal.content',
  ingredients___childMarkdownRemark___internal___contentDigest = 'ingredients.childMarkdownRemark.internal.contentDigest',
  ingredients___childMarkdownRemark___internal___description = 'ingredients.childMarkdownRemark.internal.description',
  ingredients___childMarkdownRemark___internal___fieldOwners = 'ingredients.childMarkdownRemark.internal.fieldOwners',
  ingredients___childMarkdownRemark___internal___ignoreType = 'ingredients.childMarkdownRemark.internal.ignoreType',
  ingredients___childMarkdownRemark___internal___mediaType = 'ingredients.childMarkdownRemark.internal.mediaType',
  ingredients___childMarkdownRemark___internal___owner = 'ingredients.childMarkdownRemark.internal.owner',
  ingredients___childMarkdownRemark___internal___type = 'ingredients.childMarkdownRemark.internal.type',
  prepDirections___id = 'prepDirections.id',
  prepDirections___parent___id = 'prepDirections.parent.id',
  prepDirections___parent___parent___id = 'prepDirections.parent.parent.id',
  prepDirections___parent___parent___children = 'prepDirections.parent.parent.children',
  prepDirections___parent___children = 'prepDirections.parent.children',
  prepDirections___parent___children___id = 'prepDirections.parent.children.id',
  prepDirections___parent___children___children = 'prepDirections.parent.children.children',
  prepDirections___parent___internal___content = 'prepDirections.parent.internal.content',
  prepDirections___parent___internal___contentDigest = 'prepDirections.parent.internal.contentDigest',
  prepDirections___parent___internal___description = 'prepDirections.parent.internal.description',
  prepDirections___parent___internal___fieldOwners = 'prepDirections.parent.internal.fieldOwners',
  prepDirections___parent___internal___ignoreType = 'prepDirections.parent.internal.ignoreType',
  prepDirections___parent___internal___mediaType = 'prepDirections.parent.internal.mediaType',
  prepDirections___parent___internal___owner = 'prepDirections.parent.internal.owner',
  prepDirections___parent___internal___type = 'prepDirections.parent.internal.type',
  prepDirections___children = 'prepDirections.children',
  prepDirections___children___id = 'prepDirections.children.id',
  prepDirections___children___parent___id = 'prepDirections.children.parent.id',
  prepDirections___children___parent___children = 'prepDirections.children.parent.children',
  prepDirections___children___children = 'prepDirections.children.children',
  prepDirections___children___children___id = 'prepDirections.children.children.id',
  prepDirections___children___children___children = 'prepDirections.children.children.children',
  prepDirections___children___internal___content = 'prepDirections.children.internal.content',
  prepDirections___children___internal___contentDigest = 'prepDirections.children.internal.contentDigest',
  prepDirections___children___internal___description = 'prepDirections.children.internal.description',
  prepDirections___children___internal___fieldOwners = 'prepDirections.children.internal.fieldOwners',
  prepDirections___children___internal___ignoreType = 'prepDirections.children.internal.ignoreType',
  prepDirections___children___internal___mediaType = 'prepDirections.children.internal.mediaType',
  prepDirections___children___internal___owner = 'prepDirections.children.internal.owner',
  prepDirections___children___internal___type = 'prepDirections.children.internal.type',
  prepDirections___internal___content = 'prepDirections.internal.content',
  prepDirections___internal___contentDigest = 'prepDirections.internal.contentDigest',
  prepDirections___internal___description = 'prepDirections.internal.description',
  prepDirections___internal___fieldOwners = 'prepDirections.internal.fieldOwners',
  prepDirections___internal___ignoreType = 'prepDirections.internal.ignoreType',
  prepDirections___internal___mediaType = 'prepDirections.internal.mediaType',
  prepDirections___internal___owner = 'prepDirections.internal.owner',
  prepDirections___internal___type = 'prepDirections.internal.type',
  prepDirections___prepDirections = 'prepDirections.prepDirections',
  prepDirections___sys___type = 'prepDirections.sys.type',
  prepDirections___childrenMarkdownRemark = 'prepDirections.childrenMarkdownRemark',
  prepDirections___childrenMarkdownRemark___id = 'prepDirections.childrenMarkdownRemark.id',
  prepDirections___childrenMarkdownRemark___frontmatter___title = 'prepDirections.childrenMarkdownRemark.frontmatter.title',
  prepDirections___childrenMarkdownRemark___excerpt = 'prepDirections.childrenMarkdownRemark.excerpt',
  prepDirections___childrenMarkdownRemark___rawMarkdownBody = 'prepDirections.childrenMarkdownRemark.rawMarkdownBody',
  prepDirections___childrenMarkdownRemark___html = 'prepDirections.childrenMarkdownRemark.html',
  prepDirections___childrenMarkdownRemark___htmlAst = 'prepDirections.childrenMarkdownRemark.htmlAst',
  prepDirections___childrenMarkdownRemark___excerptAst = 'prepDirections.childrenMarkdownRemark.excerptAst',
  prepDirections___childrenMarkdownRemark___headings = 'prepDirections.childrenMarkdownRemark.headings',
  prepDirections___childrenMarkdownRemark___headings___id = 'prepDirections.childrenMarkdownRemark.headings.id',
  prepDirections___childrenMarkdownRemark___headings___value = 'prepDirections.childrenMarkdownRemark.headings.value',
  prepDirections___childrenMarkdownRemark___headings___depth = 'prepDirections.childrenMarkdownRemark.headings.depth',
  prepDirections___childrenMarkdownRemark___timeToRead = 'prepDirections.childrenMarkdownRemark.timeToRead',
  prepDirections___childrenMarkdownRemark___tableOfContents = 'prepDirections.childrenMarkdownRemark.tableOfContents',
  prepDirections___childrenMarkdownRemark___wordCount___paragraphs = 'prepDirections.childrenMarkdownRemark.wordCount.paragraphs',
  prepDirections___childrenMarkdownRemark___wordCount___sentences = 'prepDirections.childrenMarkdownRemark.wordCount.sentences',
  prepDirections___childrenMarkdownRemark___wordCount___words = 'prepDirections.childrenMarkdownRemark.wordCount.words',
  prepDirections___childrenMarkdownRemark___parent___id = 'prepDirections.childrenMarkdownRemark.parent.id',
  prepDirections___childrenMarkdownRemark___parent___children = 'prepDirections.childrenMarkdownRemark.parent.children',
  prepDirections___childrenMarkdownRemark___children = 'prepDirections.childrenMarkdownRemark.children',
  prepDirections___childrenMarkdownRemark___children___id = 'prepDirections.childrenMarkdownRemark.children.id',
  prepDirections___childrenMarkdownRemark___children___children = 'prepDirections.childrenMarkdownRemark.children.children',
  prepDirections___childrenMarkdownRemark___internal___content = 'prepDirections.childrenMarkdownRemark.internal.content',
  prepDirections___childrenMarkdownRemark___internal___contentDigest = 'prepDirections.childrenMarkdownRemark.internal.contentDigest',
  prepDirections___childrenMarkdownRemark___internal___description = 'prepDirections.childrenMarkdownRemark.internal.description',
  prepDirections___childrenMarkdownRemark___internal___fieldOwners = 'prepDirections.childrenMarkdownRemark.internal.fieldOwners',
  prepDirections___childrenMarkdownRemark___internal___ignoreType = 'prepDirections.childrenMarkdownRemark.internal.ignoreType',
  prepDirections___childrenMarkdownRemark___internal___mediaType = 'prepDirections.childrenMarkdownRemark.internal.mediaType',
  prepDirections___childrenMarkdownRemark___internal___owner = 'prepDirections.childrenMarkdownRemark.internal.owner',
  prepDirections___childrenMarkdownRemark___internal___type = 'prepDirections.childrenMarkdownRemark.internal.type',
  prepDirections___childMarkdownRemark___id = 'prepDirections.childMarkdownRemark.id',
  prepDirections___childMarkdownRemark___frontmatter___title = 'prepDirections.childMarkdownRemark.frontmatter.title',
  prepDirections___childMarkdownRemark___excerpt = 'prepDirections.childMarkdownRemark.excerpt',
  prepDirections___childMarkdownRemark___rawMarkdownBody = 'prepDirections.childMarkdownRemark.rawMarkdownBody',
  prepDirections___childMarkdownRemark___html = 'prepDirections.childMarkdownRemark.html',
  prepDirections___childMarkdownRemark___htmlAst = 'prepDirections.childMarkdownRemark.htmlAst',
  prepDirections___childMarkdownRemark___excerptAst = 'prepDirections.childMarkdownRemark.excerptAst',
  prepDirections___childMarkdownRemark___headings = 'prepDirections.childMarkdownRemark.headings',
  prepDirections___childMarkdownRemark___headings___id = 'prepDirections.childMarkdownRemark.headings.id',
  prepDirections___childMarkdownRemark___headings___value = 'prepDirections.childMarkdownRemark.headings.value',
  prepDirections___childMarkdownRemark___headings___depth = 'prepDirections.childMarkdownRemark.headings.depth',
  prepDirections___childMarkdownRemark___timeToRead = 'prepDirections.childMarkdownRemark.timeToRead',
  prepDirections___childMarkdownRemark___tableOfContents = 'prepDirections.childMarkdownRemark.tableOfContents',
  prepDirections___childMarkdownRemark___wordCount___paragraphs = 'prepDirections.childMarkdownRemark.wordCount.paragraphs',
  prepDirections___childMarkdownRemark___wordCount___sentences = 'prepDirections.childMarkdownRemark.wordCount.sentences',
  prepDirections___childMarkdownRemark___wordCount___words = 'prepDirections.childMarkdownRemark.wordCount.words',
  prepDirections___childMarkdownRemark___parent___id = 'prepDirections.childMarkdownRemark.parent.id',
  prepDirections___childMarkdownRemark___parent___children = 'prepDirections.childMarkdownRemark.parent.children',
  prepDirections___childMarkdownRemark___children = 'prepDirections.childMarkdownRemark.children',
  prepDirections___childMarkdownRemark___children___id = 'prepDirections.childMarkdownRemark.children.id',
  prepDirections___childMarkdownRemark___children___children = 'prepDirections.childMarkdownRemark.children.children',
  prepDirections___childMarkdownRemark___internal___content = 'prepDirections.childMarkdownRemark.internal.content',
  prepDirections___childMarkdownRemark___internal___contentDigest = 'prepDirections.childMarkdownRemark.internal.contentDigest',
  prepDirections___childMarkdownRemark___internal___description = 'prepDirections.childMarkdownRemark.internal.description',
  prepDirections___childMarkdownRemark___internal___fieldOwners = 'prepDirections.childMarkdownRemark.internal.fieldOwners',
  prepDirections___childMarkdownRemark___internal___ignoreType = 'prepDirections.childMarkdownRemark.internal.ignoreType',
  prepDirections___childMarkdownRemark___internal___mediaType = 'prepDirections.childMarkdownRemark.internal.mediaType',
  prepDirections___childMarkdownRemark___internal___owner = 'prepDirections.childMarkdownRemark.internal.owner',
  prepDirections___childMarkdownRemark___internal___type = 'prepDirections.childMarkdownRemark.internal.type',
  directions___id = 'directions.id',
  directions___parent___id = 'directions.parent.id',
  directions___parent___parent___id = 'directions.parent.parent.id',
  directions___parent___parent___children = 'directions.parent.parent.children',
  directions___parent___children = 'directions.parent.children',
  directions___parent___children___id = 'directions.parent.children.id',
  directions___parent___children___children = 'directions.parent.children.children',
  directions___parent___internal___content = 'directions.parent.internal.content',
  directions___parent___internal___contentDigest = 'directions.parent.internal.contentDigest',
  directions___parent___internal___description = 'directions.parent.internal.description',
  directions___parent___internal___fieldOwners = 'directions.parent.internal.fieldOwners',
  directions___parent___internal___ignoreType = 'directions.parent.internal.ignoreType',
  directions___parent___internal___mediaType = 'directions.parent.internal.mediaType',
  directions___parent___internal___owner = 'directions.parent.internal.owner',
  directions___parent___internal___type = 'directions.parent.internal.type',
  directions___children = 'directions.children',
  directions___children___id = 'directions.children.id',
  directions___children___parent___id = 'directions.children.parent.id',
  directions___children___parent___children = 'directions.children.parent.children',
  directions___children___children = 'directions.children.children',
  directions___children___children___id = 'directions.children.children.id',
  directions___children___children___children = 'directions.children.children.children',
  directions___children___internal___content = 'directions.children.internal.content',
  directions___children___internal___contentDigest = 'directions.children.internal.contentDigest',
  directions___children___internal___description = 'directions.children.internal.description',
  directions___children___internal___fieldOwners = 'directions.children.internal.fieldOwners',
  directions___children___internal___ignoreType = 'directions.children.internal.ignoreType',
  directions___children___internal___mediaType = 'directions.children.internal.mediaType',
  directions___children___internal___owner = 'directions.children.internal.owner',
  directions___children___internal___type = 'directions.children.internal.type',
  directions___internal___content = 'directions.internal.content',
  directions___internal___contentDigest = 'directions.internal.contentDigest',
  directions___internal___description = 'directions.internal.description',
  directions___internal___fieldOwners = 'directions.internal.fieldOwners',
  directions___internal___ignoreType = 'directions.internal.ignoreType',
  directions___internal___mediaType = 'directions.internal.mediaType',
  directions___internal___owner = 'directions.internal.owner',
  directions___internal___type = 'directions.internal.type',
  directions___directions = 'directions.directions',
  directions___sys___type = 'directions.sys.type',
  directions___childrenMarkdownRemark = 'directions.childrenMarkdownRemark',
  directions___childrenMarkdownRemark___id = 'directions.childrenMarkdownRemark.id',
  directions___childrenMarkdownRemark___frontmatter___title = 'directions.childrenMarkdownRemark.frontmatter.title',
  directions___childrenMarkdownRemark___excerpt = 'directions.childrenMarkdownRemark.excerpt',
  directions___childrenMarkdownRemark___rawMarkdownBody = 'directions.childrenMarkdownRemark.rawMarkdownBody',
  directions___childrenMarkdownRemark___html = 'directions.childrenMarkdownRemark.html',
  directions___childrenMarkdownRemark___htmlAst = 'directions.childrenMarkdownRemark.htmlAst',
  directions___childrenMarkdownRemark___excerptAst = 'directions.childrenMarkdownRemark.excerptAst',
  directions___childrenMarkdownRemark___headings = 'directions.childrenMarkdownRemark.headings',
  directions___childrenMarkdownRemark___headings___id = 'directions.childrenMarkdownRemark.headings.id',
  directions___childrenMarkdownRemark___headings___value = 'directions.childrenMarkdownRemark.headings.value',
  directions___childrenMarkdownRemark___headings___depth = 'directions.childrenMarkdownRemark.headings.depth',
  directions___childrenMarkdownRemark___timeToRead = 'directions.childrenMarkdownRemark.timeToRead',
  directions___childrenMarkdownRemark___tableOfContents = 'directions.childrenMarkdownRemark.tableOfContents',
  directions___childrenMarkdownRemark___wordCount___paragraphs = 'directions.childrenMarkdownRemark.wordCount.paragraphs',
  directions___childrenMarkdownRemark___wordCount___sentences = 'directions.childrenMarkdownRemark.wordCount.sentences',
  directions___childrenMarkdownRemark___wordCount___words = 'directions.childrenMarkdownRemark.wordCount.words',
  directions___childrenMarkdownRemark___parent___id = 'directions.childrenMarkdownRemark.parent.id',
  directions___childrenMarkdownRemark___parent___children = 'directions.childrenMarkdownRemark.parent.children',
  directions___childrenMarkdownRemark___children = 'directions.childrenMarkdownRemark.children',
  directions___childrenMarkdownRemark___children___id = 'directions.childrenMarkdownRemark.children.id',
  directions___childrenMarkdownRemark___children___children = 'directions.childrenMarkdownRemark.children.children',
  directions___childrenMarkdownRemark___internal___content = 'directions.childrenMarkdownRemark.internal.content',
  directions___childrenMarkdownRemark___internal___contentDigest = 'directions.childrenMarkdownRemark.internal.contentDigest',
  directions___childrenMarkdownRemark___internal___description = 'directions.childrenMarkdownRemark.internal.description',
  directions___childrenMarkdownRemark___internal___fieldOwners = 'directions.childrenMarkdownRemark.internal.fieldOwners',
  directions___childrenMarkdownRemark___internal___ignoreType = 'directions.childrenMarkdownRemark.internal.ignoreType',
  directions___childrenMarkdownRemark___internal___mediaType = 'directions.childrenMarkdownRemark.internal.mediaType',
  directions___childrenMarkdownRemark___internal___owner = 'directions.childrenMarkdownRemark.internal.owner',
  directions___childrenMarkdownRemark___internal___type = 'directions.childrenMarkdownRemark.internal.type',
  directions___childMarkdownRemark___id = 'directions.childMarkdownRemark.id',
  directions___childMarkdownRemark___frontmatter___title = 'directions.childMarkdownRemark.frontmatter.title',
  directions___childMarkdownRemark___excerpt = 'directions.childMarkdownRemark.excerpt',
  directions___childMarkdownRemark___rawMarkdownBody = 'directions.childMarkdownRemark.rawMarkdownBody',
  directions___childMarkdownRemark___html = 'directions.childMarkdownRemark.html',
  directions___childMarkdownRemark___htmlAst = 'directions.childMarkdownRemark.htmlAst',
  directions___childMarkdownRemark___excerptAst = 'directions.childMarkdownRemark.excerptAst',
  directions___childMarkdownRemark___headings = 'directions.childMarkdownRemark.headings',
  directions___childMarkdownRemark___headings___id = 'directions.childMarkdownRemark.headings.id',
  directions___childMarkdownRemark___headings___value = 'directions.childMarkdownRemark.headings.value',
  directions___childMarkdownRemark___headings___depth = 'directions.childMarkdownRemark.headings.depth',
  directions___childMarkdownRemark___timeToRead = 'directions.childMarkdownRemark.timeToRead',
  directions___childMarkdownRemark___tableOfContents = 'directions.childMarkdownRemark.tableOfContents',
  directions___childMarkdownRemark___wordCount___paragraphs = 'directions.childMarkdownRemark.wordCount.paragraphs',
  directions___childMarkdownRemark___wordCount___sentences = 'directions.childMarkdownRemark.wordCount.sentences',
  directions___childMarkdownRemark___wordCount___words = 'directions.childMarkdownRemark.wordCount.words',
  directions___childMarkdownRemark___parent___id = 'directions.childMarkdownRemark.parent.id',
  directions___childMarkdownRemark___parent___children = 'directions.childMarkdownRemark.parent.children',
  directions___childMarkdownRemark___children = 'directions.childMarkdownRemark.children',
  directions___childMarkdownRemark___children___id = 'directions.childMarkdownRemark.children.id',
  directions___childMarkdownRemark___children___children = 'directions.childMarkdownRemark.children.children',
  directions___childMarkdownRemark___internal___content = 'directions.childMarkdownRemark.internal.content',
  directions___childMarkdownRemark___internal___contentDigest = 'directions.childMarkdownRemark.internal.contentDigest',
  directions___childMarkdownRemark___internal___description = 'directions.childMarkdownRemark.internal.description',
  directions___childMarkdownRemark___internal___fieldOwners = 'directions.childMarkdownRemark.internal.fieldOwners',
  directions___childMarkdownRemark___internal___ignoreType = 'directions.childMarkdownRemark.internal.ignoreType',
  directions___childMarkdownRemark___internal___mediaType = 'directions.childMarkdownRemark.internal.mediaType',
  directions___childMarkdownRemark___internal___owner = 'directions.childMarkdownRemark.internal.owner',
  directions___childMarkdownRemark___internal___type = 'directions.childMarkdownRemark.internal.type',
  notes___id = 'notes.id',
  notes___parent___id = 'notes.parent.id',
  notes___parent___parent___id = 'notes.parent.parent.id',
  notes___parent___parent___children = 'notes.parent.parent.children',
  notes___parent___children = 'notes.parent.children',
  notes___parent___children___id = 'notes.parent.children.id',
  notes___parent___children___children = 'notes.parent.children.children',
  notes___parent___internal___content = 'notes.parent.internal.content',
  notes___parent___internal___contentDigest = 'notes.parent.internal.contentDigest',
  notes___parent___internal___description = 'notes.parent.internal.description',
  notes___parent___internal___fieldOwners = 'notes.parent.internal.fieldOwners',
  notes___parent___internal___ignoreType = 'notes.parent.internal.ignoreType',
  notes___parent___internal___mediaType = 'notes.parent.internal.mediaType',
  notes___parent___internal___owner = 'notes.parent.internal.owner',
  notes___parent___internal___type = 'notes.parent.internal.type',
  notes___children = 'notes.children',
  notes___children___id = 'notes.children.id',
  notes___children___parent___id = 'notes.children.parent.id',
  notes___children___parent___children = 'notes.children.parent.children',
  notes___children___children = 'notes.children.children',
  notes___children___children___id = 'notes.children.children.id',
  notes___children___children___children = 'notes.children.children.children',
  notes___children___internal___content = 'notes.children.internal.content',
  notes___children___internal___contentDigest = 'notes.children.internal.contentDigest',
  notes___children___internal___description = 'notes.children.internal.description',
  notes___children___internal___fieldOwners = 'notes.children.internal.fieldOwners',
  notes___children___internal___ignoreType = 'notes.children.internal.ignoreType',
  notes___children___internal___mediaType = 'notes.children.internal.mediaType',
  notes___children___internal___owner = 'notes.children.internal.owner',
  notes___children___internal___type = 'notes.children.internal.type',
  notes___internal___content = 'notes.internal.content',
  notes___internal___contentDigest = 'notes.internal.contentDigest',
  notes___internal___description = 'notes.internal.description',
  notes___internal___fieldOwners = 'notes.internal.fieldOwners',
  notes___internal___ignoreType = 'notes.internal.ignoreType',
  notes___internal___mediaType = 'notes.internal.mediaType',
  notes___internal___owner = 'notes.internal.owner',
  notes___internal___type = 'notes.internal.type',
  notes___notes = 'notes.notes',
  notes___sys___type = 'notes.sys.type',
  notes___childrenMarkdownRemark = 'notes.childrenMarkdownRemark',
  notes___childrenMarkdownRemark___id = 'notes.childrenMarkdownRemark.id',
  notes___childrenMarkdownRemark___frontmatter___title = 'notes.childrenMarkdownRemark.frontmatter.title',
  notes___childrenMarkdownRemark___excerpt = 'notes.childrenMarkdownRemark.excerpt',
  notes___childrenMarkdownRemark___rawMarkdownBody = 'notes.childrenMarkdownRemark.rawMarkdownBody',
  notes___childrenMarkdownRemark___html = 'notes.childrenMarkdownRemark.html',
  notes___childrenMarkdownRemark___htmlAst = 'notes.childrenMarkdownRemark.htmlAst',
  notes___childrenMarkdownRemark___excerptAst = 'notes.childrenMarkdownRemark.excerptAst',
  notes___childrenMarkdownRemark___headings = 'notes.childrenMarkdownRemark.headings',
  notes___childrenMarkdownRemark___headings___id = 'notes.childrenMarkdownRemark.headings.id',
  notes___childrenMarkdownRemark___headings___value = 'notes.childrenMarkdownRemark.headings.value',
  notes___childrenMarkdownRemark___headings___depth = 'notes.childrenMarkdownRemark.headings.depth',
  notes___childrenMarkdownRemark___timeToRead = 'notes.childrenMarkdownRemark.timeToRead',
  notes___childrenMarkdownRemark___tableOfContents = 'notes.childrenMarkdownRemark.tableOfContents',
  notes___childrenMarkdownRemark___wordCount___paragraphs = 'notes.childrenMarkdownRemark.wordCount.paragraphs',
  notes___childrenMarkdownRemark___wordCount___sentences = 'notes.childrenMarkdownRemark.wordCount.sentences',
  notes___childrenMarkdownRemark___wordCount___words = 'notes.childrenMarkdownRemark.wordCount.words',
  notes___childrenMarkdownRemark___parent___id = 'notes.childrenMarkdownRemark.parent.id',
  notes___childrenMarkdownRemark___parent___children = 'notes.childrenMarkdownRemark.parent.children',
  notes___childrenMarkdownRemark___children = 'notes.childrenMarkdownRemark.children',
  notes___childrenMarkdownRemark___children___id = 'notes.childrenMarkdownRemark.children.id',
  notes___childrenMarkdownRemark___children___children = 'notes.childrenMarkdownRemark.children.children',
  notes___childrenMarkdownRemark___internal___content = 'notes.childrenMarkdownRemark.internal.content',
  notes___childrenMarkdownRemark___internal___contentDigest = 'notes.childrenMarkdownRemark.internal.contentDigest',
  notes___childrenMarkdownRemark___internal___description = 'notes.childrenMarkdownRemark.internal.description',
  notes___childrenMarkdownRemark___internal___fieldOwners = 'notes.childrenMarkdownRemark.internal.fieldOwners',
  notes___childrenMarkdownRemark___internal___ignoreType = 'notes.childrenMarkdownRemark.internal.ignoreType',
  notes___childrenMarkdownRemark___internal___mediaType = 'notes.childrenMarkdownRemark.internal.mediaType',
  notes___childrenMarkdownRemark___internal___owner = 'notes.childrenMarkdownRemark.internal.owner',
  notes___childrenMarkdownRemark___internal___type = 'notes.childrenMarkdownRemark.internal.type',
  notes___childMarkdownRemark___id = 'notes.childMarkdownRemark.id',
  notes___childMarkdownRemark___frontmatter___title = 'notes.childMarkdownRemark.frontmatter.title',
  notes___childMarkdownRemark___excerpt = 'notes.childMarkdownRemark.excerpt',
  notes___childMarkdownRemark___rawMarkdownBody = 'notes.childMarkdownRemark.rawMarkdownBody',
  notes___childMarkdownRemark___html = 'notes.childMarkdownRemark.html',
  notes___childMarkdownRemark___htmlAst = 'notes.childMarkdownRemark.htmlAst',
  notes___childMarkdownRemark___excerptAst = 'notes.childMarkdownRemark.excerptAst',
  notes___childMarkdownRemark___headings = 'notes.childMarkdownRemark.headings',
  notes___childMarkdownRemark___headings___id = 'notes.childMarkdownRemark.headings.id',
  notes___childMarkdownRemark___headings___value = 'notes.childMarkdownRemark.headings.value',
  notes___childMarkdownRemark___headings___depth = 'notes.childMarkdownRemark.headings.depth',
  notes___childMarkdownRemark___timeToRead = 'notes.childMarkdownRemark.timeToRead',
  notes___childMarkdownRemark___tableOfContents = 'notes.childMarkdownRemark.tableOfContents',
  notes___childMarkdownRemark___wordCount___paragraphs = 'notes.childMarkdownRemark.wordCount.paragraphs',
  notes___childMarkdownRemark___wordCount___sentences = 'notes.childMarkdownRemark.wordCount.sentences',
  notes___childMarkdownRemark___wordCount___words = 'notes.childMarkdownRemark.wordCount.words',
  notes___childMarkdownRemark___parent___id = 'notes.childMarkdownRemark.parent.id',
  notes___childMarkdownRemark___parent___children = 'notes.childMarkdownRemark.parent.children',
  notes___childMarkdownRemark___children = 'notes.childMarkdownRemark.children',
  notes___childMarkdownRemark___children___id = 'notes.childMarkdownRemark.children.id',
  notes___childMarkdownRemark___children___children = 'notes.childMarkdownRemark.children.children',
  notes___childMarkdownRemark___internal___content = 'notes.childMarkdownRemark.internal.content',
  notes___childMarkdownRemark___internal___contentDigest = 'notes.childMarkdownRemark.internal.contentDigest',
  notes___childMarkdownRemark___internal___description = 'notes.childMarkdownRemark.internal.description',
  notes___childMarkdownRemark___internal___fieldOwners = 'notes.childMarkdownRemark.internal.fieldOwners',
  notes___childMarkdownRemark___internal___ignoreType = 'notes.childMarkdownRemark.internal.ignoreType',
  notes___childMarkdownRemark___internal___mediaType = 'notes.childMarkdownRemark.internal.mediaType',
  notes___childMarkdownRemark___internal___owner = 'notes.childMarkdownRemark.internal.owner',
  notes___childMarkdownRemark___internal___type = 'notes.childMarkdownRemark.internal.type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  sys___contentType___sys___type = 'sys.contentType.sys.type',
  sys___contentType___sys___linkType = 'sys.contentType.sys.linkType',
  sys___contentType___sys___id = 'sys.contentType.sys.id',
  ingredientTags = 'ingredientTags',
  foodTypeTags = 'foodTypeTags',
  gatsbyPath = 'gatsbyPath',
  childrenContentfulRecipeNotesTextNode = 'childrenContentfulRecipeNotesTextNode',
  childrenContentfulRecipeNotesTextNode___id = 'childrenContentfulRecipeNotesTextNode.id',
  childrenContentfulRecipeNotesTextNode___parent___id = 'childrenContentfulRecipeNotesTextNode.parent.id',
  childrenContentfulRecipeNotesTextNode___parent___parent___id = 'childrenContentfulRecipeNotesTextNode.parent.parent.id',
  childrenContentfulRecipeNotesTextNode___parent___parent___children = 'childrenContentfulRecipeNotesTextNode.parent.parent.children',
  childrenContentfulRecipeNotesTextNode___parent___children = 'childrenContentfulRecipeNotesTextNode.parent.children',
  childrenContentfulRecipeNotesTextNode___parent___children___id = 'childrenContentfulRecipeNotesTextNode.parent.children.id',
  childrenContentfulRecipeNotesTextNode___parent___children___children = 'childrenContentfulRecipeNotesTextNode.parent.children.children',
  childrenContentfulRecipeNotesTextNode___parent___internal___content = 'childrenContentfulRecipeNotesTextNode.parent.internal.content',
  childrenContentfulRecipeNotesTextNode___parent___internal___contentDigest = 'childrenContentfulRecipeNotesTextNode.parent.internal.contentDigest',
  childrenContentfulRecipeNotesTextNode___parent___internal___description = 'childrenContentfulRecipeNotesTextNode.parent.internal.description',
  childrenContentfulRecipeNotesTextNode___parent___internal___fieldOwners = 'childrenContentfulRecipeNotesTextNode.parent.internal.fieldOwners',
  childrenContentfulRecipeNotesTextNode___parent___internal___ignoreType = 'childrenContentfulRecipeNotesTextNode.parent.internal.ignoreType',
  childrenContentfulRecipeNotesTextNode___parent___internal___mediaType = 'childrenContentfulRecipeNotesTextNode.parent.internal.mediaType',
  childrenContentfulRecipeNotesTextNode___parent___internal___owner = 'childrenContentfulRecipeNotesTextNode.parent.internal.owner',
  childrenContentfulRecipeNotesTextNode___parent___internal___type = 'childrenContentfulRecipeNotesTextNode.parent.internal.type',
  childrenContentfulRecipeNotesTextNode___children = 'childrenContentfulRecipeNotesTextNode.children',
  childrenContentfulRecipeNotesTextNode___children___id = 'childrenContentfulRecipeNotesTextNode.children.id',
  childrenContentfulRecipeNotesTextNode___children___parent___id = 'childrenContentfulRecipeNotesTextNode.children.parent.id',
  childrenContentfulRecipeNotesTextNode___children___parent___children = 'childrenContentfulRecipeNotesTextNode.children.parent.children',
  childrenContentfulRecipeNotesTextNode___children___children = 'childrenContentfulRecipeNotesTextNode.children.children',
  childrenContentfulRecipeNotesTextNode___children___children___id = 'childrenContentfulRecipeNotesTextNode.children.children.id',
  childrenContentfulRecipeNotesTextNode___children___children___children = 'childrenContentfulRecipeNotesTextNode.children.children.children',
  childrenContentfulRecipeNotesTextNode___children___internal___content = 'childrenContentfulRecipeNotesTextNode.children.internal.content',
  childrenContentfulRecipeNotesTextNode___children___internal___contentDigest = 'childrenContentfulRecipeNotesTextNode.children.internal.contentDigest',
  childrenContentfulRecipeNotesTextNode___children___internal___description = 'childrenContentfulRecipeNotesTextNode.children.internal.description',
  childrenContentfulRecipeNotesTextNode___children___internal___fieldOwners = 'childrenContentfulRecipeNotesTextNode.children.internal.fieldOwners',
  childrenContentfulRecipeNotesTextNode___children___internal___ignoreType = 'childrenContentfulRecipeNotesTextNode.children.internal.ignoreType',
  childrenContentfulRecipeNotesTextNode___children___internal___mediaType = 'childrenContentfulRecipeNotesTextNode.children.internal.mediaType',
  childrenContentfulRecipeNotesTextNode___children___internal___owner = 'childrenContentfulRecipeNotesTextNode.children.internal.owner',
  childrenContentfulRecipeNotesTextNode___children___internal___type = 'childrenContentfulRecipeNotesTextNode.children.internal.type',
  childrenContentfulRecipeNotesTextNode___internal___content = 'childrenContentfulRecipeNotesTextNode.internal.content',
  childrenContentfulRecipeNotesTextNode___internal___contentDigest = 'childrenContentfulRecipeNotesTextNode.internal.contentDigest',
  childrenContentfulRecipeNotesTextNode___internal___description = 'childrenContentfulRecipeNotesTextNode.internal.description',
  childrenContentfulRecipeNotesTextNode___internal___fieldOwners = 'childrenContentfulRecipeNotesTextNode.internal.fieldOwners',
  childrenContentfulRecipeNotesTextNode___internal___ignoreType = 'childrenContentfulRecipeNotesTextNode.internal.ignoreType',
  childrenContentfulRecipeNotesTextNode___internal___mediaType = 'childrenContentfulRecipeNotesTextNode.internal.mediaType',
  childrenContentfulRecipeNotesTextNode___internal___owner = 'childrenContentfulRecipeNotesTextNode.internal.owner',
  childrenContentfulRecipeNotesTextNode___internal___type = 'childrenContentfulRecipeNotesTextNode.internal.type',
  childrenContentfulRecipeNotesTextNode___notes = 'childrenContentfulRecipeNotesTextNode.notes',
  childrenContentfulRecipeNotesTextNode___sys___type = 'childrenContentfulRecipeNotesTextNode.sys.type',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___id = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.id',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___frontmatter___title = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.frontmatter.title',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___excerpt = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.excerpt',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___html = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.html',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___htmlAst = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.htmlAst',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___excerptAst = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.excerptAst',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___headings = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.headings',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___headings___id = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.headings.id',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___headings___value = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.headings.value',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___headings___depth = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.headings.depth',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___timeToRead = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.timeToRead',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___tableOfContents = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.tableOfContents',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___wordCount___sentences = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.wordCount.sentences',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___wordCount___words = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.wordCount.words',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___parent___id = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.parent.id',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___parent___children = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.parent.children',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___children = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.children',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___children___id = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.children.id',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___children___children = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.children.children',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___internal___content = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.internal.content',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___internal___contentDigest = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.internal.contentDigest',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___internal___description = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.internal.description',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___internal___ignoreType = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.internal.ignoreType',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___internal___mediaType = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.internal.mediaType',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___internal___owner = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.internal.owner',
  childrenContentfulRecipeNotesTextNode___childrenMarkdownRemark___internal___type = 'childrenContentfulRecipeNotesTextNode.childrenMarkdownRemark.internal.type',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___id = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.id',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___frontmatter___title = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.frontmatter.title',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___excerpt = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.excerpt',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___rawMarkdownBody = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.rawMarkdownBody',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___html = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.html',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___htmlAst = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.htmlAst',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___excerptAst = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.excerptAst',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___headings = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.headings',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___headings___id = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.headings.id',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___headings___value = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.headings.value',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___headings___depth = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.headings.depth',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___timeToRead = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.timeToRead',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___tableOfContents = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.tableOfContents',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___wordCount___paragraphs = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.wordCount.paragraphs',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___wordCount___sentences = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.wordCount.sentences',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___wordCount___words = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.wordCount.words',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___parent___id = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.parent.id',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___parent___children = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.parent.children',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___children = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.children',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___children___id = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.children.id',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___children___children = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.children.children',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___internal___content = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.internal.content',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___internal___contentDigest = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.internal.contentDigest',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___internal___description = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.internal.description',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___internal___fieldOwners = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.internal.fieldOwners',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___internal___ignoreType = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.internal.ignoreType',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___internal___mediaType = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.internal.mediaType',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___internal___owner = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.internal.owner',
  childrenContentfulRecipeNotesTextNode___childMarkdownRemark___internal___type = 'childrenContentfulRecipeNotesTextNode.childMarkdownRemark.internal.type',
  childContentfulRecipeNotesTextNode___id = 'childContentfulRecipeNotesTextNode.id',
  childContentfulRecipeNotesTextNode___parent___id = 'childContentfulRecipeNotesTextNode.parent.id',
  childContentfulRecipeNotesTextNode___parent___parent___id = 'childContentfulRecipeNotesTextNode.parent.parent.id',
  childContentfulRecipeNotesTextNode___parent___parent___children = 'childContentfulRecipeNotesTextNode.parent.parent.children',
  childContentfulRecipeNotesTextNode___parent___children = 'childContentfulRecipeNotesTextNode.parent.children',
  childContentfulRecipeNotesTextNode___parent___children___id = 'childContentfulRecipeNotesTextNode.parent.children.id',
  childContentfulRecipeNotesTextNode___parent___children___children = 'childContentfulRecipeNotesTextNode.parent.children.children',
  childContentfulRecipeNotesTextNode___parent___internal___content = 'childContentfulRecipeNotesTextNode.parent.internal.content',
  childContentfulRecipeNotesTextNode___parent___internal___contentDigest = 'childContentfulRecipeNotesTextNode.parent.internal.contentDigest',
  childContentfulRecipeNotesTextNode___parent___internal___description = 'childContentfulRecipeNotesTextNode.parent.internal.description',
  childContentfulRecipeNotesTextNode___parent___internal___fieldOwners = 'childContentfulRecipeNotesTextNode.parent.internal.fieldOwners',
  childContentfulRecipeNotesTextNode___parent___internal___ignoreType = 'childContentfulRecipeNotesTextNode.parent.internal.ignoreType',
  childContentfulRecipeNotesTextNode___parent___internal___mediaType = 'childContentfulRecipeNotesTextNode.parent.internal.mediaType',
  childContentfulRecipeNotesTextNode___parent___internal___owner = 'childContentfulRecipeNotesTextNode.parent.internal.owner',
  childContentfulRecipeNotesTextNode___parent___internal___type = 'childContentfulRecipeNotesTextNode.parent.internal.type',
  childContentfulRecipeNotesTextNode___children = 'childContentfulRecipeNotesTextNode.children',
  childContentfulRecipeNotesTextNode___children___id = 'childContentfulRecipeNotesTextNode.children.id',
  childContentfulRecipeNotesTextNode___children___parent___id = 'childContentfulRecipeNotesTextNode.children.parent.id',
  childContentfulRecipeNotesTextNode___children___parent___children = 'childContentfulRecipeNotesTextNode.children.parent.children',
  childContentfulRecipeNotesTextNode___children___children = 'childContentfulRecipeNotesTextNode.children.children',
  childContentfulRecipeNotesTextNode___children___children___id = 'childContentfulRecipeNotesTextNode.children.children.id',
  childContentfulRecipeNotesTextNode___children___children___children = 'childContentfulRecipeNotesTextNode.children.children.children',
  childContentfulRecipeNotesTextNode___children___internal___content = 'childContentfulRecipeNotesTextNode.children.internal.content',
  childContentfulRecipeNotesTextNode___children___internal___contentDigest = 'childContentfulRecipeNotesTextNode.children.internal.contentDigest',
  childContentfulRecipeNotesTextNode___children___internal___description = 'childContentfulRecipeNotesTextNode.children.internal.description',
  childContentfulRecipeNotesTextNode___children___internal___fieldOwners = 'childContentfulRecipeNotesTextNode.children.internal.fieldOwners',
  childContentfulRecipeNotesTextNode___children___internal___ignoreType = 'childContentfulRecipeNotesTextNode.children.internal.ignoreType',
  childContentfulRecipeNotesTextNode___children___internal___mediaType = 'childContentfulRecipeNotesTextNode.children.internal.mediaType',
  childContentfulRecipeNotesTextNode___children___internal___owner = 'childContentfulRecipeNotesTextNode.children.internal.owner',
  childContentfulRecipeNotesTextNode___children___internal___type = 'childContentfulRecipeNotesTextNode.children.internal.type',
  childContentfulRecipeNotesTextNode___internal___content = 'childContentfulRecipeNotesTextNode.internal.content',
  childContentfulRecipeNotesTextNode___internal___contentDigest = 'childContentfulRecipeNotesTextNode.internal.contentDigest',
  childContentfulRecipeNotesTextNode___internal___description = 'childContentfulRecipeNotesTextNode.internal.description',
  childContentfulRecipeNotesTextNode___internal___fieldOwners = 'childContentfulRecipeNotesTextNode.internal.fieldOwners',
  childContentfulRecipeNotesTextNode___internal___ignoreType = 'childContentfulRecipeNotesTextNode.internal.ignoreType',
  childContentfulRecipeNotesTextNode___internal___mediaType = 'childContentfulRecipeNotesTextNode.internal.mediaType',
  childContentfulRecipeNotesTextNode___internal___owner = 'childContentfulRecipeNotesTextNode.internal.owner',
  childContentfulRecipeNotesTextNode___internal___type = 'childContentfulRecipeNotesTextNode.internal.type',
  childContentfulRecipeNotesTextNode___notes = 'childContentfulRecipeNotesTextNode.notes',
  childContentfulRecipeNotesTextNode___sys___type = 'childContentfulRecipeNotesTextNode.sys.type',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___id = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.id',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___frontmatter___title = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.frontmatter.title',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___excerpt = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.excerpt',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___html = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.html',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___htmlAst = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.htmlAst',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___excerptAst = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.excerptAst',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___headings = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.headings',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___headings___id = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.headings.id',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___headings___value = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.headings.value',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___headings___depth = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.headings.depth',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___timeToRead = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.timeToRead',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___tableOfContents = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.tableOfContents',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___wordCount___sentences = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.wordCount.sentences',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___wordCount___words = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.wordCount.words',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___parent___id = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.parent.id',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___parent___children = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.parent.children',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___children = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.children',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___children___id = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.children.id',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___children___children = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.children.children',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___internal___content = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.internal.content',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___internal___contentDigest = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.internal.contentDigest',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___internal___description = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.internal.description',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___internal___ignoreType = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.internal.ignoreType',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___internal___mediaType = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.internal.mediaType',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___internal___owner = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.internal.owner',
  childContentfulRecipeNotesTextNode___childrenMarkdownRemark___internal___type = 'childContentfulRecipeNotesTextNode.childrenMarkdownRemark.internal.type',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___id = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.id',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.frontmatter.title',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___excerpt = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.excerpt',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.rawMarkdownBody',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___html = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.html',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___htmlAst = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.htmlAst',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___excerptAst = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.excerptAst',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___headings = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.headings',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___headings___id = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.headings.id',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___headings___value = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.headings.value',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___headings___depth = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.headings.depth',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___timeToRead = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.timeToRead',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___tableOfContents = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.tableOfContents',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.wordCount.paragraphs',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.wordCount.sentences',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___wordCount___words = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.wordCount.words',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___parent___id = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.parent.id',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___parent___children = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.parent.children',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___children = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.children',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___children___id = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.children.id',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___children___children = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.children.children',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___internal___content = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.internal.content',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.internal.contentDigest',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___internal___description = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.internal.description',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.internal.fieldOwners',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.internal.ignoreType',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.internal.mediaType',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___internal___owner = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.internal.owner',
  childContentfulRecipeNotesTextNode___childMarkdownRemark___internal___type = 'childContentfulRecipeNotesTextNode.childMarkdownRemark.internal.type',
  childrenContentfulRecipeDirectionsTextNode = 'childrenContentfulRecipeDirectionsTextNode',
  childrenContentfulRecipeDirectionsTextNode___id = 'childrenContentfulRecipeDirectionsTextNode.id',
  childrenContentfulRecipeDirectionsTextNode___parent___id = 'childrenContentfulRecipeDirectionsTextNode.parent.id',
  childrenContentfulRecipeDirectionsTextNode___parent___parent___id = 'childrenContentfulRecipeDirectionsTextNode.parent.parent.id',
  childrenContentfulRecipeDirectionsTextNode___parent___parent___children = 'childrenContentfulRecipeDirectionsTextNode.parent.parent.children',
  childrenContentfulRecipeDirectionsTextNode___parent___children = 'childrenContentfulRecipeDirectionsTextNode.parent.children',
  childrenContentfulRecipeDirectionsTextNode___parent___children___id = 'childrenContentfulRecipeDirectionsTextNode.parent.children.id',
  childrenContentfulRecipeDirectionsTextNode___parent___children___children = 'childrenContentfulRecipeDirectionsTextNode.parent.children.children',
  childrenContentfulRecipeDirectionsTextNode___parent___internal___content = 'childrenContentfulRecipeDirectionsTextNode.parent.internal.content',
  childrenContentfulRecipeDirectionsTextNode___parent___internal___contentDigest = 'childrenContentfulRecipeDirectionsTextNode.parent.internal.contentDigest',
  childrenContentfulRecipeDirectionsTextNode___parent___internal___description = 'childrenContentfulRecipeDirectionsTextNode.parent.internal.description',
  childrenContentfulRecipeDirectionsTextNode___parent___internal___fieldOwners = 'childrenContentfulRecipeDirectionsTextNode.parent.internal.fieldOwners',
  childrenContentfulRecipeDirectionsTextNode___parent___internal___ignoreType = 'childrenContentfulRecipeDirectionsTextNode.parent.internal.ignoreType',
  childrenContentfulRecipeDirectionsTextNode___parent___internal___mediaType = 'childrenContentfulRecipeDirectionsTextNode.parent.internal.mediaType',
  childrenContentfulRecipeDirectionsTextNode___parent___internal___owner = 'childrenContentfulRecipeDirectionsTextNode.parent.internal.owner',
  childrenContentfulRecipeDirectionsTextNode___parent___internal___type = 'childrenContentfulRecipeDirectionsTextNode.parent.internal.type',
  childrenContentfulRecipeDirectionsTextNode___children = 'childrenContentfulRecipeDirectionsTextNode.children',
  childrenContentfulRecipeDirectionsTextNode___children___id = 'childrenContentfulRecipeDirectionsTextNode.children.id',
  childrenContentfulRecipeDirectionsTextNode___children___parent___id = 'childrenContentfulRecipeDirectionsTextNode.children.parent.id',
  childrenContentfulRecipeDirectionsTextNode___children___parent___children = 'childrenContentfulRecipeDirectionsTextNode.children.parent.children',
  childrenContentfulRecipeDirectionsTextNode___children___children = 'childrenContentfulRecipeDirectionsTextNode.children.children',
  childrenContentfulRecipeDirectionsTextNode___children___children___id = 'childrenContentfulRecipeDirectionsTextNode.children.children.id',
  childrenContentfulRecipeDirectionsTextNode___children___children___children = 'childrenContentfulRecipeDirectionsTextNode.children.children.children',
  childrenContentfulRecipeDirectionsTextNode___children___internal___content = 'childrenContentfulRecipeDirectionsTextNode.children.internal.content',
  childrenContentfulRecipeDirectionsTextNode___children___internal___contentDigest = 'childrenContentfulRecipeDirectionsTextNode.children.internal.contentDigest',
  childrenContentfulRecipeDirectionsTextNode___children___internal___description = 'childrenContentfulRecipeDirectionsTextNode.children.internal.description',
  childrenContentfulRecipeDirectionsTextNode___children___internal___fieldOwners = 'childrenContentfulRecipeDirectionsTextNode.children.internal.fieldOwners',
  childrenContentfulRecipeDirectionsTextNode___children___internal___ignoreType = 'childrenContentfulRecipeDirectionsTextNode.children.internal.ignoreType',
  childrenContentfulRecipeDirectionsTextNode___children___internal___mediaType = 'childrenContentfulRecipeDirectionsTextNode.children.internal.mediaType',
  childrenContentfulRecipeDirectionsTextNode___children___internal___owner = 'childrenContentfulRecipeDirectionsTextNode.children.internal.owner',
  childrenContentfulRecipeDirectionsTextNode___children___internal___type = 'childrenContentfulRecipeDirectionsTextNode.children.internal.type',
  childrenContentfulRecipeDirectionsTextNode___internal___content = 'childrenContentfulRecipeDirectionsTextNode.internal.content',
  childrenContentfulRecipeDirectionsTextNode___internal___contentDigest = 'childrenContentfulRecipeDirectionsTextNode.internal.contentDigest',
  childrenContentfulRecipeDirectionsTextNode___internal___description = 'childrenContentfulRecipeDirectionsTextNode.internal.description',
  childrenContentfulRecipeDirectionsTextNode___internal___fieldOwners = 'childrenContentfulRecipeDirectionsTextNode.internal.fieldOwners',
  childrenContentfulRecipeDirectionsTextNode___internal___ignoreType = 'childrenContentfulRecipeDirectionsTextNode.internal.ignoreType',
  childrenContentfulRecipeDirectionsTextNode___internal___mediaType = 'childrenContentfulRecipeDirectionsTextNode.internal.mediaType',
  childrenContentfulRecipeDirectionsTextNode___internal___owner = 'childrenContentfulRecipeDirectionsTextNode.internal.owner',
  childrenContentfulRecipeDirectionsTextNode___internal___type = 'childrenContentfulRecipeDirectionsTextNode.internal.type',
  childrenContentfulRecipeDirectionsTextNode___directions = 'childrenContentfulRecipeDirectionsTextNode.directions',
  childrenContentfulRecipeDirectionsTextNode___sys___type = 'childrenContentfulRecipeDirectionsTextNode.sys.type',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___id = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.id',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___frontmatter___title = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.frontmatter.title',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___excerpt = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.excerpt',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___html = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.html',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___htmlAst = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.htmlAst',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___excerptAst = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.excerptAst',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___headings = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.headings',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___headings___id = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.headings.id',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___headings___value = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.headings.value',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___headings___depth = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.headings.depth',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___timeToRead = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.timeToRead',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___tableOfContents = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.tableOfContents',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___wordCount___sentences = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.wordCount.sentences',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___wordCount___words = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.wordCount.words',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___parent___id = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.parent.id',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___parent___children = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.parent.children',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___children = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.children',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___children___id = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.children.id',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___children___children = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.children.children',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___internal___content = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.internal.content',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___internal___contentDigest = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.internal.contentDigest',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___internal___description = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.internal.description',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___internal___ignoreType = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.internal.ignoreType',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___internal___mediaType = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.internal.mediaType',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___internal___owner = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.internal.owner',
  childrenContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___internal___type = 'childrenContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.internal.type',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___id = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.id',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___frontmatter___title = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.frontmatter.title',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___excerpt = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.excerpt',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___rawMarkdownBody = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.rawMarkdownBody',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___html = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.html',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___htmlAst = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.htmlAst',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___excerptAst = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.excerptAst',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___headings = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.headings',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___headings___id = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.headings.id',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___headings___value = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.headings.value',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___headings___depth = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.headings.depth',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___timeToRead = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.timeToRead',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___tableOfContents = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.tableOfContents',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___wordCount___paragraphs = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.wordCount.paragraphs',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___wordCount___sentences = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.wordCount.sentences',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___wordCount___words = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.wordCount.words',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___parent___id = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.parent.id',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___parent___children = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.parent.children',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___children = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.children',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___children___id = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.children.id',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___children___children = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.children.children',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___internal___content = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.internal.content',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___internal___contentDigest = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.internal.contentDigest',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___internal___description = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.internal.description',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___internal___fieldOwners = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.internal.fieldOwners',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___internal___ignoreType = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.internal.ignoreType',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___internal___mediaType = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.internal.mediaType',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___internal___owner = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.internal.owner',
  childrenContentfulRecipeDirectionsTextNode___childMarkdownRemark___internal___type = 'childrenContentfulRecipeDirectionsTextNode.childMarkdownRemark.internal.type',
  childContentfulRecipeDirectionsTextNode___id = 'childContentfulRecipeDirectionsTextNode.id',
  childContentfulRecipeDirectionsTextNode___parent___id = 'childContentfulRecipeDirectionsTextNode.parent.id',
  childContentfulRecipeDirectionsTextNode___parent___parent___id = 'childContentfulRecipeDirectionsTextNode.parent.parent.id',
  childContentfulRecipeDirectionsTextNode___parent___parent___children = 'childContentfulRecipeDirectionsTextNode.parent.parent.children',
  childContentfulRecipeDirectionsTextNode___parent___children = 'childContentfulRecipeDirectionsTextNode.parent.children',
  childContentfulRecipeDirectionsTextNode___parent___children___id = 'childContentfulRecipeDirectionsTextNode.parent.children.id',
  childContentfulRecipeDirectionsTextNode___parent___children___children = 'childContentfulRecipeDirectionsTextNode.parent.children.children',
  childContentfulRecipeDirectionsTextNode___parent___internal___content = 'childContentfulRecipeDirectionsTextNode.parent.internal.content',
  childContentfulRecipeDirectionsTextNode___parent___internal___contentDigest = 'childContentfulRecipeDirectionsTextNode.parent.internal.contentDigest',
  childContentfulRecipeDirectionsTextNode___parent___internal___description = 'childContentfulRecipeDirectionsTextNode.parent.internal.description',
  childContentfulRecipeDirectionsTextNode___parent___internal___fieldOwners = 'childContentfulRecipeDirectionsTextNode.parent.internal.fieldOwners',
  childContentfulRecipeDirectionsTextNode___parent___internal___ignoreType = 'childContentfulRecipeDirectionsTextNode.parent.internal.ignoreType',
  childContentfulRecipeDirectionsTextNode___parent___internal___mediaType = 'childContentfulRecipeDirectionsTextNode.parent.internal.mediaType',
  childContentfulRecipeDirectionsTextNode___parent___internal___owner = 'childContentfulRecipeDirectionsTextNode.parent.internal.owner',
  childContentfulRecipeDirectionsTextNode___parent___internal___type = 'childContentfulRecipeDirectionsTextNode.parent.internal.type',
  childContentfulRecipeDirectionsTextNode___children = 'childContentfulRecipeDirectionsTextNode.children',
  childContentfulRecipeDirectionsTextNode___children___id = 'childContentfulRecipeDirectionsTextNode.children.id',
  childContentfulRecipeDirectionsTextNode___children___parent___id = 'childContentfulRecipeDirectionsTextNode.children.parent.id',
  childContentfulRecipeDirectionsTextNode___children___parent___children = 'childContentfulRecipeDirectionsTextNode.children.parent.children',
  childContentfulRecipeDirectionsTextNode___children___children = 'childContentfulRecipeDirectionsTextNode.children.children',
  childContentfulRecipeDirectionsTextNode___children___children___id = 'childContentfulRecipeDirectionsTextNode.children.children.id',
  childContentfulRecipeDirectionsTextNode___children___children___children = 'childContentfulRecipeDirectionsTextNode.children.children.children',
  childContentfulRecipeDirectionsTextNode___children___internal___content = 'childContentfulRecipeDirectionsTextNode.children.internal.content',
  childContentfulRecipeDirectionsTextNode___children___internal___contentDigest = 'childContentfulRecipeDirectionsTextNode.children.internal.contentDigest',
  childContentfulRecipeDirectionsTextNode___children___internal___description = 'childContentfulRecipeDirectionsTextNode.children.internal.description',
  childContentfulRecipeDirectionsTextNode___children___internal___fieldOwners = 'childContentfulRecipeDirectionsTextNode.children.internal.fieldOwners',
  childContentfulRecipeDirectionsTextNode___children___internal___ignoreType = 'childContentfulRecipeDirectionsTextNode.children.internal.ignoreType',
  childContentfulRecipeDirectionsTextNode___children___internal___mediaType = 'childContentfulRecipeDirectionsTextNode.children.internal.mediaType',
  childContentfulRecipeDirectionsTextNode___children___internal___owner = 'childContentfulRecipeDirectionsTextNode.children.internal.owner',
  childContentfulRecipeDirectionsTextNode___children___internal___type = 'childContentfulRecipeDirectionsTextNode.children.internal.type',
  childContentfulRecipeDirectionsTextNode___internal___content = 'childContentfulRecipeDirectionsTextNode.internal.content',
  childContentfulRecipeDirectionsTextNode___internal___contentDigest = 'childContentfulRecipeDirectionsTextNode.internal.contentDigest',
  childContentfulRecipeDirectionsTextNode___internal___description = 'childContentfulRecipeDirectionsTextNode.internal.description',
  childContentfulRecipeDirectionsTextNode___internal___fieldOwners = 'childContentfulRecipeDirectionsTextNode.internal.fieldOwners',
  childContentfulRecipeDirectionsTextNode___internal___ignoreType = 'childContentfulRecipeDirectionsTextNode.internal.ignoreType',
  childContentfulRecipeDirectionsTextNode___internal___mediaType = 'childContentfulRecipeDirectionsTextNode.internal.mediaType',
  childContentfulRecipeDirectionsTextNode___internal___owner = 'childContentfulRecipeDirectionsTextNode.internal.owner',
  childContentfulRecipeDirectionsTextNode___internal___type = 'childContentfulRecipeDirectionsTextNode.internal.type',
  childContentfulRecipeDirectionsTextNode___directions = 'childContentfulRecipeDirectionsTextNode.directions',
  childContentfulRecipeDirectionsTextNode___sys___type = 'childContentfulRecipeDirectionsTextNode.sys.type',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___id = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.id',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___frontmatter___title = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.frontmatter.title',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___excerpt = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.excerpt',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___html = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.html',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___htmlAst = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.htmlAst',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___excerptAst = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.excerptAst',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___headings = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.headings',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___headings___id = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.headings.id',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___headings___value = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.headings.value',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___headings___depth = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.headings.depth',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___timeToRead = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.timeToRead',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___tableOfContents = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.tableOfContents',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___wordCount___sentences = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.wordCount.sentences',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___wordCount___words = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.wordCount.words',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___parent___id = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.parent.id',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___parent___children = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.parent.children',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___children = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.children',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___children___id = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.children.id',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___children___children = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.children.children',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___internal___content = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.internal.content',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___internal___contentDigest = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.internal.contentDigest',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___internal___description = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.internal.description',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___internal___ignoreType = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.internal.ignoreType',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___internal___mediaType = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.internal.mediaType',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___internal___owner = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.internal.owner',
  childContentfulRecipeDirectionsTextNode___childrenMarkdownRemark___internal___type = 'childContentfulRecipeDirectionsTextNode.childrenMarkdownRemark.internal.type',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___id = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.id',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.frontmatter.title',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___excerpt = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.excerpt',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.rawMarkdownBody',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___html = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.html',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___htmlAst = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.htmlAst',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___excerptAst = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.excerptAst',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___headings = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.headings',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___headings___id = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.headings.id',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___headings___value = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.headings.value',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___headings___depth = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.headings.depth',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___timeToRead = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.timeToRead',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___tableOfContents = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.tableOfContents',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.wordCount.paragraphs',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.wordCount.sentences',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___wordCount___words = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.wordCount.words',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___parent___id = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.parent.id',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___parent___children = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.parent.children',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___children = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.children',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___children___id = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.children.id',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___children___children = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.children.children',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___internal___content = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.internal.content',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.internal.contentDigest',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___internal___description = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.internal.description',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.internal.fieldOwners',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.internal.ignoreType',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.internal.mediaType',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___internal___owner = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.internal.owner',
  childContentfulRecipeDirectionsTextNode___childMarkdownRemark___internal___type = 'childContentfulRecipeDirectionsTextNode.childMarkdownRemark.internal.type',
  childrenContentfulRecipePrepDirectionsTextNode = 'childrenContentfulRecipePrepDirectionsTextNode',
  childrenContentfulRecipePrepDirectionsTextNode___id = 'childrenContentfulRecipePrepDirectionsTextNode.id',
  childrenContentfulRecipePrepDirectionsTextNode___parent___id = 'childrenContentfulRecipePrepDirectionsTextNode.parent.id',
  childrenContentfulRecipePrepDirectionsTextNode___parent___parent___id = 'childrenContentfulRecipePrepDirectionsTextNode.parent.parent.id',
  childrenContentfulRecipePrepDirectionsTextNode___parent___parent___children = 'childrenContentfulRecipePrepDirectionsTextNode.parent.parent.children',
  childrenContentfulRecipePrepDirectionsTextNode___parent___children = 'childrenContentfulRecipePrepDirectionsTextNode.parent.children',
  childrenContentfulRecipePrepDirectionsTextNode___parent___children___id = 'childrenContentfulRecipePrepDirectionsTextNode.parent.children.id',
  childrenContentfulRecipePrepDirectionsTextNode___parent___children___children = 'childrenContentfulRecipePrepDirectionsTextNode.parent.children.children',
  childrenContentfulRecipePrepDirectionsTextNode___parent___internal___content = 'childrenContentfulRecipePrepDirectionsTextNode.parent.internal.content',
  childrenContentfulRecipePrepDirectionsTextNode___parent___internal___contentDigest = 'childrenContentfulRecipePrepDirectionsTextNode.parent.internal.contentDigest',
  childrenContentfulRecipePrepDirectionsTextNode___parent___internal___description = 'childrenContentfulRecipePrepDirectionsTextNode.parent.internal.description',
  childrenContentfulRecipePrepDirectionsTextNode___parent___internal___fieldOwners = 'childrenContentfulRecipePrepDirectionsTextNode.parent.internal.fieldOwners',
  childrenContentfulRecipePrepDirectionsTextNode___parent___internal___ignoreType = 'childrenContentfulRecipePrepDirectionsTextNode.parent.internal.ignoreType',
  childrenContentfulRecipePrepDirectionsTextNode___parent___internal___mediaType = 'childrenContentfulRecipePrepDirectionsTextNode.parent.internal.mediaType',
  childrenContentfulRecipePrepDirectionsTextNode___parent___internal___owner = 'childrenContentfulRecipePrepDirectionsTextNode.parent.internal.owner',
  childrenContentfulRecipePrepDirectionsTextNode___parent___internal___type = 'childrenContentfulRecipePrepDirectionsTextNode.parent.internal.type',
  childrenContentfulRecipePrepDirectionsTextNode___children = 'childrenContentfulRecipePrepDirectionsTextNode.children',
  childrenContentfulRecipePrepDirectionsTextNode___children___id = 'childrenContentfulRecipePrepDirectionsTextNode.children.id',
  childrenContentfulRecipePrepDirectionsTextNode___children___parent___id = 'childrenContentfulRecipePrepDirectionsTextNode.children.parent.id',
  childrenContentfulRecipePrepDirectionsTextNode___children___parent___children = 'childrenContentfulRecipePrepDirectionsTextNode.children.parent.children',
  childrenContentfulRecipePrepDirectionsTextNode___children___children = 'childrenContentfulRecipePrepDirectionsTextNode.children.children',
  childrenContentfulRecipePrepDirectionsTextNode___children___children___id = 'childrenContentfulRecipePrepDirectionsTextNode.children.children.id',
  childrenContentfulRecipePrepDirectionsTextNode___children___children___children = 'childrenContentfulRecipePrepDirectionsTextNode.children.children.children',
  childrenContentfulRecipePrepDirectionsTextNode___children___internal___content = 'childrenContentfulRecipePrepDirectionsTextNode.children.internal.content',
  childrenContentfulRecipePrepDirectionsTextNode___children___internal___contentDigest = 'childrenContentfulRecipePrepDirectionsTextNode.children.internal.contentDigest',
  childrenContentfulRecipePrepDirectionsTextNode___children___internal___description = 'childrenContentfulRecipePrepDirectionsTextNode.children.internal.description',
  childrenContentfulRecipePrepDirectionsTextNode___children___internal___fieldOwners = 'childrenContentfulRecipePrepDirectionsTextNode.children.internal.fieldOwners',
  childrenContentfulRecipePrepDirectionsTextNode___children___internal___ignoreType = 'childrenContentfulRecipePrepDirectionsTextNode.children.internal.ignoreType',
  childrenContentfulRecipePrepDirectionsTextNode___children___internal___mediaType = 'childrenContentfulRecipePrepDirectionsTextNode.children.internal.mediaType',
  childrenContentfulRecipePrepDirectionsTextNode___children___internal___owner = 'childrenContentfulRecipePrepDirectionsTextNode.children.internal.owner',
  childrenContentfulRecipePrepDirectionsTextNode___children___internal___type = 'childrenContentfulRecipePrepDirectionsTextNode.children.internal.type',
  childrenContentfulRecipePrepDirectionsTextNode___internal___content = 'childrenContentfulRecipePrepDirectionsTextNode.internal.content',
  childrenContentfulRecipePrepDirectionsTextNode___internal___contentDigest = 'childrenContentfulRecipePrepDirectionsTextNode.internal.contentDigest',
  childrenContentfulRecipePrepDirectionsTextNode___internal___description = 'childrenContentfulRecipePrepDirectionsTextNode.internal.description',
  childrenContentfulRecipePrepDirectionsTextNode___internal___fieldOwners = 'childrenContentfulRecipePrepDirectionsTextNode.internal.fieldOwners',
  childrenContentfulRecipePrepDirectionsTextNode___internal___ignoreType = 'childrenContentfulRecipePrepDirectionsTextNode.internal.ignoreType',
  childrenContentfulRecipePrepDirectionsTextNode___internal___mediaType = 'childrenContentfulRecipePrepDirectionsTextNode.internal.mediaType',
  childrenContentfulRecipePrepDirectionsTextNode___internal___owner = 'childrenContentfulRecipePrepDirectionsTextNode.internal.owner',
  childrenContentfulRecipePrepDirectionsTextNode___internal___type = 'childrenContentfulRecipePrepDirectionsTextNode.internal.type',
  childrenContentfulRecipePrepDirectionsTextNode___prepDirections = 'childrenContentfulRecipePrepDirectionsTextNode.prepDirections',
  childrenContentfulRecipePrepDirectionsTextNode___sys___type = 'childrenContentfulRecipePrepDirectionsTextNode.sys.type',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___id = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.id',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___frontmatter___title = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.frontmatter.title',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___excerpt = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.excerpt',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___html = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.html',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___htmlAst = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.htmlAst',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___excerptAst = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.excerptAst',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___headings = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.headings',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___headings___id = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.headings.id',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___headings___value = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.headings.value',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___headings___depth = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.headings.depth',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___timeToRead = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.timeToRead',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___tableOfContents = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.tableOfContents',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___wordCount___sentences = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.wordCount.sentences',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___wordCount___words = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.wordCount.words',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___parent___id = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.parent.id',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___parent___children = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.parent.children',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___children = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.children',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___children___id = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.children.id',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___children___children = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.children.children',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___internal___content = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.internal.content',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___internal___contentDigest = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.internal.contentDigest',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___internal___description = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.internal.description',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___internal___ignoreType = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.internal.ignoreType',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___internal___mediaType = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.internal.mediaType',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___internal___owner = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.internal.owner',
  childrenContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___internal___type = 'childrenContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.internal.type',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___id = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.id',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___frontmatter___title = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.frontmatter.title',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___excerpt = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.excerpt',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___rawMarkdownBody = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.rawMarkdownBody',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___html = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.html',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___htmlAst = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.htmlAst',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___excerptAst = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.excerptAst',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___headings = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.headings',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___headings___id = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.headings.id',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___headings___value = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.headings.value',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___headings___depth = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.headings.depth',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___timeToRead = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.timeToRead',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___tableOfContents = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.tableOfContents',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___wordCount___paragraphs = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.wordCount.paragraphs',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___wordCount___sentences = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.wordCount.sentences',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___wordCount___words = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.wordCount.words',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___parent___id = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.parent.id',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___parent___children = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.parent.children',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___children = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.children',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___children___id = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.children.id',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___children___children = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.children.children',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___internal___content = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.internal.content',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___internal___contentDigest = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.internal.contentDigest',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___internal___description = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.internal.description',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___internal___fieldOwners = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.internal.fieldOwners',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___internal___ignoreType = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.internal.ignoreType',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___internal___mediaType = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.internal.mediaType',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___internal___owner = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.internal.owner',
  childrenContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___internal___type = 'childrenContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.internal.type',
  childContentfulRecipePrepDirectionsTextNode___id = 'childContentfulRecipePrepDirectionsTextNode.id',
  childContentfulRecipePrepDirectionsTextNode___parent___id = 'childContentfulRecipePrepDirectionsTextNode.parent.id',
  childContentfulRecipePrepDirectionsTextNode___parent___parent___id = 'childContentfulRecipePrepDirectionsTextNode.parent.parent.id',
  childContentfulRecipePrepDirectionsTextNode___parent___parent___children = 'childContentfulRecipePrepDirectionsTextNode.parent.parent.children',
  childContentfulRecipePrepDirectionsTextNode___parent___children = 'childContentfulRecipePrepDirectionsTextNode.parent.children',
  childContentfulRecipePrepDirectionsTextNode___parent___children___id = 'childContentfulRecipePrepDirectionsTextNode.parent.children.id',
  childContentfulRecipePrepDirectionsTextNode___parent___children___children = 'childContentfulRecipePrepDirectionsTextNode.parent.children.children',
  childContentfulRecipePrepDirectionsTextNode___parent___internal___content = 'childContentfulRecipePrepDirectionsTextNode.parent.internal.content',
  childContentfulRecipePrepDirectionsTextNode___parent___internal___contentDigest = 'childContentfulRecipePrepDirectionsTextNode.parent.internal.contentDigest',
  childContentfulRecipePrepDirectionsTextNode___parent___internal___description = 'childContentfulRecipePrepDirectionsTextNode.parent.internal.description',
  childContentfulRecipePrepDirectionsTextNode___parent___internal___fieldOwners = 'childContentfulRecipePrepDirectionsTextNode.parent.internal.fieldOwners',
  childContentfulRecipePrepDirectionsTextNode___parent___internal___ignoreType = 'childContentfulRecipePrepDirectionsTextNode.parent.internal.ignoreType',
  childContentfulRecipePrepDirectionsTextNode___parent___internal___mediaType = 'childContentfulRecipePrepDirectionsTextNode.parent.internal.mediaType',
  childContentfulRecipePrepDirectionsTextNode___parent___internal___owner = 'childContentfulRecipePrepDirectionsTextNode.parent.internal.owner',
  childContentfulRecipePrepDirectionsTextNode___parent___internal___type = 'childContentfulRecipePrepDirectionsTextNode.parent.internal.type',
  childContentfulRecipePrepDirectionsTextNode___children = 'childContentfulRecipePrepDirectionsTextNode.children',
  childContentfulRecipePrepDirectionsTextNode___children___id = 'childContentfulRecipePrepDirectionsTextNode.children.id',
  childContentfulRecipePrepDirectionsTextNode___children___parent___id = 'childContentfulRecipePrepDirectionsTextNode.children.parent.id',
  childContentfulRecipePrepDirectionsTextNode___children___parent___children = 'childContentfulRecipePrepDirectionsTextNode.children.parent.children',
  childContentfulRecipePrepDirectionsTextNode___children___children = 'childContentfulRecipePrepDirectionsTextNode.children.children',
  childContentfulRecipePrepDirectionsTextNode___children___children___id = 'childContentfulRecipePrepDirectionsTextNode.children.children.id',
  childContentfulRecipePrepDirectionsTextNode___children___children___children = 'childContentfulRecipePrepDirectionsTextNode.children.children.children',
  childContentfulRecipePrepDirectionsTextNode___children___internal___content = 'childContentfulRecipePrepDirectionsTextNode.children.internal.content',
  childContentfulRecipePrepDirectionsTextNode___children___internal___contentDigest = 'childContentfulRecipePrepDirectionsTextNode.children.internal.contentDigest',
  childContentfulRecipePrepDirectionsTextNode___children___internal___description = 'childContentfulRecipePrepDirectionsTextNode.children.internal.description',
  childContentfulRecipePrepDirectionsTextNode___children___internal___fieldOwners = 'childContentfulRecipePrepDirectionsTextNode.children.internal.fieldOwners',
  childContentfulRecipePrepDirectionsTextNode___children___internal___ignoreType = 'childContentfulRecipePrepDirectionsTextNode.children.internal.ignoreType',
  childContentfulRecipePrepDirectionsTextNode___children___internal___mediaType = 'childContentfulRecipePrepDirectionsTextNode.children.internal.mediaType',
  childContentfulRecipePrepDirectionsTextNode___children___internal___owner = 'childContentfulRecipePrepDirectionsTextNode.children.internal.owner',
  childContentfulRecipePrepDirectionsTextNode___children___internal___type = 'childContentfulRecipePrepDirectionsTextNode.children.internal.type',
  childContentfulRecipePrepDirectionsTextNode___internal___content = 'childContentfulRecipePrepDirectionsTextNode.internal.content',
  childContentfulRecipePrepDirectionsTextNode___internal___contentDigest = 'childContentfulRecipePrepDirectionsTextNode.internal.contentDigest',
  childContentfulRecipePrepDirectionsTextNode___internal___description = 'childContentfulRecipePrepDirectionsTextNode.internal.description',
  childContentfulRecipePrepDirectionsTextNode___internal___fieldOwners = 'childContentfulRecipePrepDirectionsTextNode.internal.fieldOwners',
  childContentfulRecipePrepDirectionsTextNode___internal___ignoreType = 'childContentfulRecipePrepDirectionsTextNode.internal.ignoreType',
  childContentfulRecipePrepDirectionsTextNode___internal___mediaType = 'childContentfulRecipePrepDirectionsTextNode.internal.mediaType',
  childContentfulRecipePrepDirectionsTextNode___internal___owner = 'childContentfulRecipePrepDirectionsTextNode.internal.owner',
  childContentfulRecipePrepDirectionsTextNode___internal___type = 'childContentfulRecipePrepDirectionsTextNode.internal.type',
  childContentfulRecipePrepDirectionsTextNode___prepDirections = 'childContentfulRecipePrepDirectionsTextNode.prepDirections',
  childContentfulRecipePrepDirectionsTextNode___sys___type = 'childContentfulRecipePrepDirectionsTextNode.sys.type',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___id = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.id',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___frontmatter___title = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.frontmatter.title',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___excerpt = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.excerpt',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___html = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.html',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___htmlAst = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.htmlAst',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___excerptAst = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.excerptAst',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___headings = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.headings',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___headings___id = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.headings.id',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___headings___value = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.headings.value',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___headings___depth = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.headings.depth',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___timeToRead = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.timeToRead',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___tableOfContents = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.tableOfContents',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___wordCount___sentences = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.wordCount.sentences',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___wordCount___words = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.wordCount.words',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___parent___id = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.parent.id',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___parent___children = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.parent.children',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___children = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.children',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___children___id = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.children.id',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___children___children = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.children.children',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___internal___content = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.internal.content',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___internal___contentDigest = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.internal.contentDigest',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___internal___description = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.internal.description',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___internal___ignoreType = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.internal.ignoreType',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___internal___mediaType = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.internal.mediaType',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___internal___owner = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.internal.owner',
  childContentfulRecipePrepDirectionsTextNode___childrenMarkdownRemark___internal___type = 'childContentfulRecipePrepDirectionsTextNode.childrenMarkdownRemark.internal.type',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___id = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.id',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.frontmatter.title',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___excerpt = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.excerpt',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.rawMarkdownBody',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___html = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.html',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___htmlAst = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.htmlAst',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___excerptAst = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.excerptAst',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___headings = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.headings',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___headings___id = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.headings.id',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___headings___value = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.headings.value',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___headings___depth = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.headings.depth',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___timeToRead = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.timeToRead',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___tableOfContents = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.tableOfContents',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.wordCount.paragraphs',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.wordCount.sentences',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___wordCount___words = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.wordCount.words',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___parent___id = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.parent.id',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___parent___children = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.parent.children',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___children = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.children',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___children___id = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.children.id',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___children___children = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.children.children',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___internal___content = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.internal.content',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.internal.contentDigest',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___internal___description = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.internal.description',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.internal.fieldOwners',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.internal.ignoreType',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.internal.mediaType',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___internal___owner = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.internal.owner',
  childContentfulRecipePrepDirectionsTextNode___childMarkdownRemark___internal___type = 'childContentfulRecipePrepDirectionsTextNode.childMarkdownRemark.internal.type',
  childrenContentfulRecipeIngredientsTextNode = 'childrenContentfulRecipeIngredientsTextNode',
  childrenContentfulRecipeIngredientsTextNode___id = 'childrenContentfulRecipeIngredientsTextNode.id',
  childrenContentfulRecipeIngredientsTextNode___parent___id = 'childrenContentfulRecipeIngredientsTextNode.parent.id',
  childrenContentfulRecipeIngredientsTextNode___parent___parent___id = 'childrenContentfulRecipeIngredientsTextNode.parent.parent.id',
  childrenContentfulRecipeIngredientsTextNode___parent___parent___children = 'childrenContentfulRecipeIngredientsTextNode.parent.parent.children',
  childrenContentfulRecipeIngredientsTextNode___parent___children = 'childrenContentfulRecipeIngredientsTextNode.parent.children',
  childrenContentfulRecipeIngredientsTextNode___parent___children___id = 'childrenContentfulRecipeIngredientsTextNode.parent.children.id',
  childrenContentfulRecipeIngredientsTextNode___parent___children___children = 'childrenContentfulRecipeIngredientsTextNode.parent.children.children',
  childrenContentfulRecipeIngredientsTextNode___parent___internal___content = 'childrenContentfulRecipeIngredientsTextNode.parent.internal.content',
  childrenContentfulRecipeIngredientsTextNode___parent___internal___contentDigest = 'childrenContentfulRecipeIngredientsTextNode.parent.internal.contentDigest',
  childrenContentfulRecipeIngredientsTextNode___parent___internal___description = 'childrenContentfulRecipeIngredientsTextNode.parent.internal.description',
  childrenContentfulRecipeIngredientsTextNode___parent___internal___fieldOwners = 'childrenContentfulRecipeIngredientsTextNode.parent.internal.fieldOwners',
  childrenContentfulRecipeIngredientsTextNode___parent___internal___ignoreType = 'childrenContentfulRecipeIngredientsTextNode.parent.internal.ignoreType',
  childrenContentfulRecipeIngredientsTextNode___parent___internal___mediaType = 'childrenContentfulRecipeIngredientsTextNode.parent.internal.mediaType',
  childrenContentfulRecipeIngredientsTextNode___parent___internal___owner = 'childrenContentfulRecipeIngredientsTextNode.parent.internal.owner',
  childrenContentfulRecipeIngredientsTextNode___parent___internal___type = 'childrenContentfulRecipeIngredientsTextNode.parent.internal.type',
  childrenContentfulRecipeIngredientsTextNode___children = 'childrenContentfulRecipeIngredientsTextNode.children',
  childrenContentfulRecipeIngredientsTextNode___children___id = 'childrenContentfulRecipeIngredientsTextNode.children.id',
  childrenContentfulRecipeIngredientsTextNode___children___parent___id = 'childrenContentfulRecipeIngredientsTextNode.children.parent.id',
  childrenContentfulRecipeIngredientsTextNode___children___parent___children = 'childrenContentfulRecipeIngredientsTextNode.children.parent.children',
  childrenContentfulRecipeIngredientsTextNode___children___children = 'childrenContentfulRecipeIngredientsTextNode.children.children',
  childrenContentfulRecipeIngredientsTextNode___children___children___id = 'childrenContentfulRecipeIngredientsTextNode.children.children.id',
  childrenContentfulRecipeIngredientsTextNode___children___children___children = 'childrenContentfulRecipeIngredientsTextNode.children.children.children',
  childrenContentfulRecipeIngredientsTextNode___children___internal___content = 'childrenContentfulRecipeIngredientsTextNode.children.internal.content',
  childrenContentfulRecipeIngredientsTextNode___children___internal___contentDigest = 'childrenContentfulRecipeIngredientsTextNode.children.internal.contentDigest',
  childrenContentfulRecipeIngredientsTextNode___children___internal___description = 'childrenContentfulRecipeIngredientsTextNode.children.internal.description',
  childrenContentfulRecipeIngredientsTextNode___children___internal___fieldOwners = 'childrenContentfulRecipeIngredientsTextNode.children.internal.fieldOwners',
  childrenContentfulRecipeIngredientsTextNode___children___internal___ignoreType = 'childrenContentfulRecipeIngredientsTextNode.children.internal.ignoreType',
  childrenContentfulRecipeIngredientsTextNode___children___internal___mediaType = 'childrenContentfulRecipeIngredientsTextNode.children.internal.mediaType',
  childrenContentfulRecipeIngredientsTextNode___children___internal___owner = 'childrenContentfulRecipeIngredientsTextNode.children.internal.owner',
  childrenContentfulRecipeIngredientsTextNode___children___internal___type = 'childrenContentfulRecipeIngredientsTextNode.children.internal.type',
  childrenContentfulRecipeIngredientsTextNode___internal___content = 'childrenContentfulRecipeIngredientsTextNode.internal.content',
  childrenContentfulRecipeIngredientsTextNode___internal___contentDigest = 'childrenContentfulRecipeIngredientsTextNode.internal.contentDigest',
  childrenContentfulRecipeIngredientsTextNode___internal___description = 'childrenContentfulRecipeIngredientsTextNode.internal.description',
  childrenContentfulRecipeIngredientsTextNode___internal___fieldOwners = 'childrenContentfulRecipeIngredientsTextNode.internal.fieldOwners',
  childrenContentfulRecipeIngredientsTextNode___internal___ignoreType = 'childrenContentfulRecipeIngredientsTextNode.internal.ignoreType',
  childrenContentfulRecipeIngredientsTextNode___internal___mediaType = 'childrenContentfulRecipeIngredientsTextNode.internal.mediaType',
  childrenContentfulRecipeIngredientsTextNode___internal___owner = 'childrenContentfulRecipeIngredientsTextNode.internal.owner',
  childrenContentfulRecipeIngredientsTextNode___internal___type = 'childrenContentfulRecipeIngredientsTextNode.internal.type',
  childrenContentfulRecipeIngredientsTextNode___ingredients = 'childrenContentfulRecipeIngredientsTextNode.ingredients',
  childrenContentfulRecipeIngredientsTextNode___sys___type = 'childrenContentfulRecipeIngredientsTextNode.sys.type',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___id = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.id',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___frontmatter___title = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.frontmatter.title',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___excerpt = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.excerpt',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___html = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.html',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___htmlAst = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.htmlAst',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___excerptAst = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.excerptAst',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___headings = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.headings',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___headings___id = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.headings.id',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___headings___value = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.headings.value',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___headings___depth = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.headings.depth',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___timeToRead = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.timeToRead',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___tableOfContents = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.tableOfContents',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___wordCount___sentences = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.wordCount.sentences',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___wordCount___words = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.wordCount.words',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___parent___id = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.parent.id',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___parent___children = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.parent.children',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___children = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.children',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___children___id = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.children.id',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___children___children = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.children.children',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___internal___content = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.internal.content',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___internal___contentDigest = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.internal.contentDigest',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___internal___description = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.internal.description',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___internal___ignoreType = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.internal.ignoreType',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___internal___mediaType = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.internal.mediaType',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___internal___owner = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.internal.owner',
  childrenContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___internal___type = 'childrenContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.internal.type',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___id = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.id',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___frontmatter___title = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.frontmatter.title',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___excerpt = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.excerpt',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___rawMarkdownBody = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.rawMarkdownBody',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___html = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.html',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___htmlAst = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.htmlAst',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___excerptAst = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.excerptAst',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___headings = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.headings',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___headings___id = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.headings.id',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___headings___value = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.headings.value',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___headings___depth = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.headings.depth',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___timeToRead = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.timeToRead',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___tableOfContents = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.tableOfContents',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___wordCount___paragraphs = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.wordCount.paragraphs',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___wordCount___sentences = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.wordCount.sentences',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___wordCount___words = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.wordCount.words',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___parent___id = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.parent.id',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___parent___children = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.parent.children',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___children = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.children',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___children___id = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.children.id',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___children___children = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.children.children',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___internal___content = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.internal.content',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___internal___contentDigest = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.internal.contentDigest',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___internal___description = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.internal.description',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___internal___fieldOwners = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.internal.fieldOwners',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___internal___ignoreType = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.internal.ignoreType',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___internal___mediaType = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.internal.mediaType',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___internal___owner = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.internal.owner',
  childrenContentfulRecipeIngredientsTextNode___childMarkdownRemark___internal___type = 'childrenContentfulRecipeIngredientsTextNode.childMarkdownRemark.internal.type',
  childContentfulRecipeIngredientsTextNode___id = 'childContentfulRecipeIngredientsTextNode.id',
  childContentfulRecipeIngredientsTextNode___parent___id = 'childContentfulRecipeIngredientsTextNode.parent.id',
  childContentfulRecipeIngredientsTextNode___parent___parent___id = 'childContentfulRecipeIngredientsTextNode.parent.parent.id',
  childContentfulRecipeIngredientsTextNode___parent___parent___children = 'childContentfulRecipeIngredientsTextNode.parent.parent.children',
  childContentfulRecipeIngredientsTextNode___parent___children = 'childContentfulRecipeIngredientsTextNode.parent.children',
  childContentfulRecipeIngredientsTextNode___parent___children___id = 'childContentfulRecipeIngredientsTextNode.parent.children.id',
  childContentfulRecipeIngredientsTextNode___parent___children___children = 'childContentfulRecipeIngredientsTextNode.parent.children.children',
  childContentfulRecipeIngredientsTextNode___parent___internal___content = 'childContentfulRecipeIngredientsTextNode.parent.internal.content',
  childContentfulRecipeIngredientsTextNode___parent___internal___contentDigest = 'childContentfulRecipeIngredientsTextNode.parent.internal.contentDigest',
  childContentfulRecipeIngredientsTextNode___parent___internal___description = 'childContentfulRecipeIngredientsTextNode.parent.internal.description',
  childContentfulRecipeIngredientsTextNode___parent___internal___fieldOwners = 'childContentfulRecipeIngredientsTextNode.parent.internal.fieldOwners',
  childContentfulRecipeIngredientsTextNode___parent___internal___ignoreType = 'childContentfulRecipeIngredientsTextNode.parent.internal.ignoreType',
  childContentfulRecipeIngredientsTextNode___parent___internal___mediaType = 'childContentfulRecipeIngredientsTextNode.parent.internal.mediaType',
  childContentfulRecipeIngredientsTextNode___parent___internal___owner = 'childContentfulRecipeIngredientsTextNode.parent.internal.owner',
  childContentfulRecipeIngredientsTextNode___parent___internal___type = 'childContentfulRecipeIngredientsTextNode.parent.internal.type',
  childContentfulRecipeIngredientsTextNode___children = 'childContentfulRecipeIngredientsTextNode.children',
  childContentfulRecipeIngredientsTextNode___children___id = 'childContentfulRecipeIngredientsTextNode.children.id',
  childContentfulRecipeIngredientsTextNode___children___parent___id = 'childContentfulRecipeIngredientsTextNode.children.parent.id',
  childContentfulRecipeIngredientsTextNode___children___parent___children = 'childContentfulRecipeIngredientsTextNode.children.parent.children',
  childContentfulRecipeIngredientsTextNode___children___children = 'childContentfulRecipeIngredientsTextNode.children.children',
  childContentfulRecipeIngredientsTextNode___children___children___id = 'childContentfulRecipeIngredientsTextNode.children.children.id',
  childContentfulRecipeIngredientsTextNode___children___children___children = 'childContentfulRecipeIngredientsTextNode.children.children.children',
  childContentfulRecipeIngredientsTextNode___children___internal___content = 'childContentfulRecipeIngredientsTextNode.children.internal.content',
  childContentfulRecipeIngredientsTextNode___children___internal___contentDigest = 'childContentfulRecipeIngredientsTextNode.children.internal.contentDigest',
  childContentfulRecipeIngredientsTextNode___children___internal___description = 'childContentfulRecipeIngredientsTextNode.children.internal.description',
  childContentfulRecipeIngredientsTextNode___children___internal___fieldOwners = 'childContentfulRecipeIngredientsTextNode.children.internal.fieldOwners',
  childContentfulRecipeIngredientsTextNode___children___internal___ignoreType = 'childContentfulRecipeIngredientsTextNode.children.internal.ignoreType',
  childContentfulRecipeIngredientsTextNode___children___internal___mediaType = 'childContentfulRecipeIngredientsTextNode.children.internal.mediaType',
  childContentfulRecipeIngredientsTextNode___children___internal___owner = 'childContentfulRecipeIngredientsTextNode.children.internal.owner',
  childContentfulRecipeIngredientsTextNode___children___internal___type = 'childContentfulRecipeIngredientsTextNode.children.internal.type',
  childContentfulRecipeIngredientsTextNode___internal___content = 'childContentfulRecipeIngredientsTextNode.internal.content',
  childContentfulRecipeIngredientsTextNode___internal___contentDigest = 'childContentfulRecipeIngredientsTextNode.internal.contentDigest',
  childContentfulRecipeIngredientsTextNode___internal___description = 'childContentfulRecipeIngredientsTextNode.internal.description',
  childContentfulRecipeIngredientsTextNode___internal___fieldOwners = 'childContentfulRecipeIngredientsTextNode.internal.fieldOwners',
  childContentfulRecipeIngredientsTextNode___internal___ignoreType = 'childContentfulRecipeIngredientsTextNode.internal.ignoreType',
  childContentfulRecipeIngredientsTextNode___internal___mediaType = 'childContentfulRecipeIngredientsTextNode.internal.mediaType',
  childContentfulRecipeIngredientsTextNode___internal___owner = 'childContentfulRecipeIngredientsTextNode.internal.owner',
  childContentfulRecipeIngredientsTextNode___internal___type = 'childContentfulRecipeIngredientsTextNode.internal.type',
  childContentfulRecipeIngredientsTextNode___ingredients = 'childContentfulRecipeIngredientsTextNode.ingredients',
  childContentfulRecipeIngredientsTextNode___sys___type = 'childContentfulRecipeIngredientsTextNode.sys.type',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___id = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.id',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___frontmatter___title = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.frontmatter.title',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___excerpt = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.excerpt',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___html = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.html',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___htmlAst = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.htmlAst',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___excerptAst = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.excerptAst',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___headings = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.headings',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___headings___id = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.headings.id',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___headings___value = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.headings.value',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___headings___depth = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.headings.depth',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___timeToRead = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.timeToRead',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___tableOfContents = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.tableOfContents',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___wordCount___sentences = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.wordCount.sentences',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___wordCount___words = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.wordCount.words',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___parent___id = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.parent.id',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___parent___children = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.parent.children',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___children = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.children',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___children___id = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.children.id',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___children___children = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.children.children',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___internal___content = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.internal.content',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___internal___contentDigest = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.internal.contentDigest',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___internal___description = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.internal.description',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___internal___ignoreType = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.internal.ignoreType',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___internal___mediaType = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.internal.mediaType',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___internal___owner = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.internal.owner',
  childContentfulRecipeIngredientsTextNode___childrenMarkdownRemark___internal___type = 'childContentfulRecipeIngredientsTextNode.childrenMarkdownRemark.internal.type',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___id = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.id',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.frontmatter.title',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___excerpt = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.excerpt',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.rawMarkdownBody',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___html = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.html',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___htmlAst = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.htmlAst',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___excerptAst = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.excerptAst',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___headings = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.headings',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___headings___id = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.headings.id',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___headings___value = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.headings.value',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___headings___depth = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.headings.depth',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___timeToRead = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.timeToRead',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___tableOfContents = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.tableOfContents',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.wordCount.paragraphs',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.wordCount.sentences',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___wordCount___words = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.wordCount.words',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___parent___id = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.parent.id',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___parent___children = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.parent.children',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___children = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.children',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___children___id = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.children.id',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___children___children = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.children.children',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___internal___content = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.internal.content',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.internal.contentDigest',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___internal___description = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.internal.description',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.internal.fieldOwners',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.internal.ignoreType',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.internal.mediaType',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___internal___owner = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.internal.owner',
  childContentfulRecipeIngredientsTextNode___childMarkdownRemark___internal___type = 'childContentfulRecipeIngredientsTextNode.childMarkdownRemark.internal.type',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ContentfulRecipeFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly yield: Maybe<StringQueryOperatorInput>;
  readonly prepTime: Maybe<IntQueryOperatorInput>;
  readonly totalTime: Maybe<IntQueryOperatorInput>;
  readonly featured: Maybe<BooleanQueryOperatorInput>;
  readonly mainImage: Maybe<ContentfulAssetFilterInput>;
  readonly ingredients: Maybe<contentfulRecipeIngredientsTextNodeFilterInput>;
  readonly prepDirections: Maybe<contentfulRecipePrepDirectionsTextNodeFilterInput>;
  readonly directions: Maybe<contentfulRecipeDirectionsTextNodeFilterInput>;
  readonly notes: Maybe<contentfulRecipeNotesTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulRecipeSysFilterInput>;
  readonly ingredientTags: Maybe<StringQueryOperatorInput>;
  readonly foodTypeTags: Maybe<StringQueryOperatorInput>;
  readonly gatsbyPath: Maybe<StringQueryOperatorInput>;
  readonly childrenContentfulRecipeNotesTextNode: Maybe<contentfulRecipeNotesTextNodeFilterListInput>;
  readonly childContentfulRecipeNotesTextNode: Maybe<contentfulRecipeNotesTextNodeFilterInput>;
  readonly childrenContentfulRecipeDirectionsTextNode: Maybe<contentfulRecipeDirectionsTextNodeFilterListInput>;
  readonly childContentfulRecipeDirectionsTextNode: Maybe<contentfulRecipeDirectionsTextNodeFilterInput>;
  readonly childrenContentfulRecipePrepDirectionsTextNode: Maybe<contentfulRecipePrepDirectionsTextNodeFilterListInput>;
  readonly childContentfulRecipePrepDirectionsTextNode: Maybe<contentfulRecipePrepDirectionsTextNodeFilterInput>;
  readonly childrenContentfulRecipeIngredientsTextNode: Maybe<contentfulRecipeIngredientsTextNodeFilterListInput>;
  readonly childContentfulRecipeIngredientsTextNode: Maybe<contentfulRecipeIngredientsTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulRecipeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulRecipeEdge>;
  readonly nodes: ReadonlyArray<ContentfulRecipe>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulRecipeIngredientsTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly ingredients: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulRecipeIngredientsTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulRecipeIngredientsTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulRecipeIngredientsTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulRecipeIngredientsTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulRecipeIngredientsTextNodeGroupConnection>;
};


type contentfulRecipeIngredientsTextNodeConnection_distinctArgs = {
  field: contentfulRecipeIngredientsTextNodeFieldsEnum;
};


type contentfulRecipeIngredientsTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulRecipeIngredientsTextNodeFieldsEnum;
};

type contentfulRecipeIngredientsTextNodeEdge = {
  readonly next: Maybe<contentfulRecipeIngredientsTextNode>;
  readonly node: contentfulRecipeIngredientsTextNode;
  readonly previous: Maybe<contentfulRecipeIngredientsTextNode>;
};

enum contentfulRecipeIngredientsTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  ingredients = 'ingredients',
  sys___type = 'sys.type',
  childrenMarkdownRemark = 'childrenMarkdownRemark',
  childrenMarkdownRemark___id = 'childrenMarkdownRemark.id',
  childrenMarkdownRemark___frontmatter___title = 'childrenMarkdownRemark.frontmatter.title',
  childrenMarkdownRemark___excerpt = 'childrenMarkdownRemark.excerpt',
  childrenMarkdownRemark___rawMarkdownBody = 'childrenMarkdownRemark.rawMarkdownBody',
  childrenMarkdownRemark___html = 'childrenMarkdownRemark.html',
  childrenMarkdownRemark___htmlAst = 'childrenMarkdownRemark.htmlAst',
  childrenMarkdownRemark___excerptAst = 'childrenMarkdownRemark.excerptAst',
  childrenMarkdownRemark___headings = 'childrenMarkdownRemark.headings',
  childrenMarkdownRemark___headings___id = 'childrenMarkdownRemark.headings.id',
  childrenMarkdownRemark___headings___value = 'childrenMarkdownRemark.headings.value',
  childrenMarkdownRemark___headings___depth = 'childrenMarkdownRemark.headings.depth',
  childrenMarkdownRemark___timeToRead = 'childrenMarkdownRemark.timeToRead',
  childrenMarkdownRemark___tableOfContents = 'childrenMarkdownRemark.tableOfContents',
  childrenMarkdownRemark___wordCount___paragraphs = 'childrenMarkdownRemark.wordCount.paragraphs',
  childrenMarkdownRemark___wordCount___sentences = 'childrenMarkdownRemark.wordCount.sentences',
  childrenMarkdownRemark___wordCount___words = 'childrenMarkdownRemark.wordCount.words',
  childrenMarkdownRemark___parent___id = 'childrenMarkdownRemark.parent.id',
  childrenMarkdownRemark___parent___parent___id = 'childrenMarkdownRemark.parent.parent.id',
  childrenMarkdownRemark___parent___parent___children = 'childrenMarkdownRemark.parent.parent.children',
  childrenMarkdownRemark___parent___children = 'childrenMarkdownRemark.parent.children',
  childrenMarkdownRemark___parent___children___id = 'childrenMarkdownRemark.parent.children.id',
  childrenMarkdownRemark___parent___children___children = 'childrenMarkdownRemark.parent.children.children',
  childrenMarkdownRemark___parent___internal___content = 'childrenMarkdownRemark.parent.internal.content',
  childrenMarkdownRemark___parent___internal___contentDigest = 'childrenMarkdownRemark.parent.internal.contentDigest',
  childrenMarkdownRemark___parent___internal___description = 'childrenMarkdownRemark.parent.internal.description',
  childrenMarkdownRemark___parent___internal___fieldOwners = 'childrenMarkdownRemark.parent.internal.fieldOwners',
  childrenMarkdownRemark___parent___internal___ignoreType = 'childrenMarkdownRemark.parent.internal.ignoreType',
  childrenMarkdownRemark___parent___internal___mediaType = 'childrenMarkdownRemark.parent.internal.mediaType',
  childrenMarkdownRemark___parent___internal___owner = 'childrenMarkdownRemark.parent.internal.owner',
  childrenMarkdownRemark___parent___internal___type = 'childrenMarkdownRemark.parent.internal.type',
  childrenMarkdownRemark___children = 'childrenMarkdownRemark.children',
  childrenMarkdownRemark___children___id = 'childrenMarkdownRemark.children.id',
  childrenMarkdownRemark___children___parent___id = 'childrenMarkdownRemark.children.parent.id',
  childrenMarkdownRemark___children___parent___children = 'childrenMarkdownRemark.children.parent.children',
  childrenMarkdownRemark___children___children = 'childrenMarkdownRemark.children.children',
  childrenMarkdownRemark___children___children___id = 'childrenMarkdownRemark.children.children.id',
  childrenMarkdownRemark___children___children___children = 'childrenMarkdownRemark.children.children.children',
  childrenMarkdownRemark___children___internal___content = 'childrenMarkdownRemark.children.internal.content',
  childrenMarkdownRemark___children___internal___contentDigest = 'childrenMarkdownRemark.children.internal.contentDigest',
  childrenMarkdownRemark___children___internal___description = 'childrenMarkdownRemark.children.internal.description',
  childrenMarkdownRemark___children___internal___fieldOwners = 'childrenMarkdownRemark.children.internal.fieldOwners',
  childrenMarkdownRemark___children___internal___ignoreType = 'childrenMarkdownRemark.children.internal.ignoreType',
  childrenMarkdownRemark___children___internal___mediaType = 'childrenMarkdownRemark.children.internal.mediaType',
  childrenMarkdownRemark___children___internal___owner = 'childrenMarkdownRemark.children.internal.owner',
  childrenMarkdownRemark___children___internal___type = 'childrenMarkdownRemark.children.internal.type',
  childrenMarkdownRemark___internal___content = 'childrenMarkdownRemark.internal.content',
  childrenMarkdownRemark___internal___contentDigest = 'childrenMarkdownRemark.internal.contentDigest',
  childrenMarkdownRemark___internal___description = 'childrenMarkdownRemark.internal.description',
  childrenMarkdownRemark___internal___fieldOwners = 'childrenMarkdownRemark.internal.fieldOwners',
  childrenMarkdownRemark___internal___ignoreType = 'childrenMarkdownRemark.internal.ignoreType',
  childrenMarkdownRemark___internal___mediaType = 'childrenMarkdownRemark.internal.mediaType',
  childrenMarkdownRemark___internal___owner = 'childrenMarkdownRemark.internal.owner',
  childrenMarkdownRemark___internal___type = 'childrenMarkdownRemark.internal.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark.headings.id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type'
}

type contentfulRecipeIngredientsTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly ingredients: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulRecipeIngredientsTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulRecipeIngredientsTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulRecipeIngredientsTextNodeFilterInput>;
};

type contentfulRecipeIngredientsTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulRecipeIngredientsTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulRecipeIngredientsTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulRecipeIngredientsTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulRecipeIngredientsTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulRecipeIngredientsTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulRecipeIngredientsTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type contentfulRecipeNotesTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly notes: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulRecipeNotesTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulRecipeNotesTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulRecipeNotesTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulRecipeNotesTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulRecipeNotesTextNodeGroupConnection>;
};


type contentfulRecipeNotesTextNodeConnection_distinctArgs = {
  field: contentfulRecipeNotesTextNodeFieldsEnum;
};


type contentfulRecipeNotesTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulRecipeNotesTextNodeFieldsEnum;
};

type contentfulRecipeNotesTextNodeEdge = {
  readonly next: Maybe<contentfulRecipeNotesTextNode>;
  readonly node: contentfulRecipeNotesTextNode;
  readonly previous: Maybe<contentfulRecipeNotesTextNode>;
};

enum contentfulRecipeNotesTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  notes = 'notes',
  sys___type = 'sys.type',
  childrenMarkdownRemark = 'childrenMarkdownRemark',
  childrenMarkdownRemark___id = 'childrenMarkdownRemark.id',
  childrenMarkdownRemark___frontmatter___title = 'childrenMarkdownRemark.frontmatter.title',
  childrenMarkdownRemark___excerpt = 'childrenMarkdownRemark.excerpt',
  childrenMarkdownRemark___rawMarkdownBody = 'childrenMarkdownRemark.rawMarkdownBody',
  childrenMarkdownRemark___html = 'childrenMarkdownRemark.html',
  childrenMarkdownRemark___htmlAst = 'childrenMarkdownRemark.htmlAst',
  childrenMarkdownRemark___excerptAst = 'childrenMarkdownRemark.excerptAst',
  childrenMarkdownRemark___headings = 'childrenMarkdownRemark.headings',
  childrenMarkdownRemark___headings___id = 'childrenMarkdownRemark.headings.id',
  childrenMarkdownRemark___headings___value = 'childrenMarkdownRemark.headings.value',
  childrenMarkdownRemark___headings___depth = 'childrenMarkdownRemark.headings.depth',
  childrenMarkdownRemark___timeToRead = 'childrenMarkdownRemark.timeToRead',
  childrenMarkdownRemark___tableOfContents = 'childrenMarkdownRemark.tableOfContents',
  childrenMarkdownRemark___wordCount___paragraphs = 'childrenMarkdownRemark.wordCount.paragraphs',
  childrenMarkdownRemark___wordCount___sentences = 'childrenMarkdownRemark.wordCount.sentences',
  childrenMarkdownRemark___wordCount___words = 'childrenMarkdownRemark.wordCount.words',
  childrenMarkdownRemark___parent___id = 'childrenMarkdownRemark.parent.id',
  childrenMarkdownRemark___parent___parent___id = 'childrenMarkdownRemark.parent.parent.id',
  childrenMarkdownRemark___parent___parent___children = 'childrenMarkdownRemark.parent.parent.children',
  childrenMarkdownRemark___parent___children = 'childrenMarkdownRemark.parent.children',
  childrenMarkdownRemark___parent___children___id = 'childrenMarkdownRemark.parent.children.id',
  childrenMarkdownRemark___parent___children___children = 'childrenMarkdownRemark.parent.children.children',
  childrenMarkdownRemark___parent___internal___content = 'childrenMarkdownRemark.parent.internal.content',
  childrenMarkdownRemark___parent___internal___contentDigest = 'childrenMarkdownRemark.parent.internal.contentDigest',
  childrenMarkdownRemark___parent___internal___description = 'childrenMarkdownRemark.parent.internal.description',
  childrenMarkdownRemark___parent___internal___fieldOwners = 'childrenMarkdownRemark.parent.internal.fieldOwners',
  childrenMarkdownRemark___parent___internal___ignoreType = 'childrenMarkdownRemark.parent.internal.ignoreType',
  childrenMarkdownRemark___parent___internal___mediaType = 'childrenMarkdownRemark.parent.internal.mediaType',
  childrenMarkdownRemark___parent___internal___owner = 'childrenMarkdownRemark.parent.internal.owner',
  childrenMarkdownRemark___parent___internal___type = 'childrenMarkdownRemark.parent.internal.type',
  childrenMarkdownRemark___children = 'childrenMarkdownRemark.children',
  childrenMarkdownRemark___children___id = 'childrenMarkdownRemark.children.id',
  childrenMarkdownRemark___children___parent___id = 'childrenMarkdownRemark.children.parent.id',
  childrenMarkdownRemark___children___parent___children = 'childrenMarkdownRemark.children.parent.children',
  childrenMarkdownRemark___children___children = 'childrenMarkdownRemark.children.children',
  childrenMarkdownRemark___children___children___id = 'childrenMarkdownRemark.children.children.id',
  childrenMarkdownRemark___children___children___children = 'childrenMarkdownRemark.children.children.children',
  childrenMarkdownRemark___children___internal___content = 'childrenMarkdownRemark.children.internal.content',
  childrenMarkdownRemark___children___internal___contentDigest = 'childrenMarkdownRemark.children.internal.contentDigest',
  childrenMarkdownRemark___children___internal___description = 'childrenMarkdownRemark.children.internal.description',
  childrenMarkdownRemark___children___internal___fieldOwners = 'childrenMarkdownRemark.children.internal.fieldOwners',
  childrenMarkdownRemark___children___internal___ignoreType = 'childrenMarkdownRemark.children.internal.ignoreType',
  childrenMarkdownRemark___children___internal___mediaType = 'childrenMarkdownRemark.children.internal.mediaType',
  childrenMarkdownRemark___children___internal___owner = 'childrenMarkdownRemark.children.internal.owner',
  childrenMarkdownRemark___children___internal___type = 'childrenMarkdownRemark.children.internal.type',
  childrenMarkdownRemark___internal___content = 'childrenMarkdownRemark.internal.content',
  childrenMarkdownRemark___internal___contentDigest = 'childrenMarkdownRemark.internal.contentDigest',
  childrenMarkdownRemark___internal___description = 'childrenMarkdownRemark.internal.description',
  childrenMarkdownRemark___internal___fieldOwners = 'childrenMarkdownRemark.internal.fieldOwners',
  childrenMarkdownRemark___internal___ignoreType = 'childrenMarkdownRemark.internal.ignoreType',
  childrenMarkdownRemark___internal___mediaType = 'childrenMarkdownRemark.internal.mediaType',
  childrenMarkdownRemark___internal___owner = 'childrenMarkdownRemark.internal.owner',
  childrenMarkdownRemark___internal___type = 'childrenMarkdownRemark.internal.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark.headings.id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type'
}

type contentfulRecipeNotesTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly notes: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulRecipeNotesTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulRecipeNotesTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulRecipeNotesTextNodeFilterInput>;
};

type contentfulRecipeNotesTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulRecipeNotesTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulRecipeNotesTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulRecipeNotesTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulRecipeNotesTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulRecipeNotesTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulRecipeNotesTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type contentfulRecipePrepDirectionsTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly prepDirections: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulRecipePrepDirectionsTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulRecipePrepDirectionsTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulRecipePrepDirectionsTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulRecipePrepDirectionsTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulRecipePrepDirectionsTextNodeGroupConnection>;
};


type contentfulRecipePrepDirectionsTextNodeConnection_distinctArgs = {
  field: contentfulRecipePrepDirectionsTextNodeFieldsEnum;
};


type contentfulRecipePrepDirectionsTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulRecipePrepDirectionsTextNodeFieldsEnum;
};

type contentfulRecipePrepDirectionsTextNodeEdge = {
  readonly next: Maybe<contentfulRecipePrepDirectionsTextNode>;
  readonly node: contentfulRecipePrepDirectionsTextNode;
  readonly previous: Maybe<contentfulRecipePrepDirectionsTextNode>;
};

enum contentfulRecipePrepDirectionsTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  prepDirections = 'prepDirections',
  sys___type = 'sys.type',
  childrenMarkdownRemark = 'childrenMarkdownRemark',
  childrenMarkdownRemark___id = 'childrenMarkdownRemark.id',
  childrenMarkdownRemark___frontmatter___title = 'childrenMarkdownRemark.frontmatter.title',
  childrenMarkdownRemark___excerpt = 'childrenMarkdownRemark.excerpt',
  childrenMarkdownRemark___rawMarkdownBody = 'childrenMarkdownRemark.rawMarkdownBody',
  childrenMarkdownRemark___html = 'childrenMarkdownRemark.html',
  childrenMarkdownRemark___htmlAst = 'childrenMarkdownRemark.htmlAst',
  childrenMarkdownRemark___excerptAst = 'childrenMarkdownRemark.excerptAst',
  childrenMarkdownRemark___headings = 'childrenMarkdownRemark.headings',
  childrenMarkdownRemark___headings___id = 'childrenMarkdownRemark.headings.id',
  childrenMarkdownRemark___headings___value = 'childrenMarkdownRemark.headings.value',
  childrenMarkdownRemark___headings___depth = 'childrenMarkdownRemark.headings.depth',
  childrenMarkdownRemark___timeToRead = 'childrenMarkdownRemark.timeToRead',
  childrenMarkdownRemark___tableOfContents = 'childrenMarkdownRemark.tableOfContents',
  childrenMarkdownRemark___wordCount___paragraphs = 'childrenMarkdownRemark.wordCount.paragraphs',
  childrenMarkdownRemark___wordCount___sentences = 'childrenMarkdownRemark.wordCount.sentences',
  childrenMarkdownRemark___wordCount___words = 'childrenMarkdownRemark.wordCount.words',
  childrenMarkdownRemark___parent___id = 'childrenMarkdownRemark.parent.id',
  childrenMarkdownRemark___parent___parent___id = 'childrenMarkdownRemark.parent.parent.id',
  childrenMarkdownRemark___parent___parent___children = 'childrenMarkdownRemark.parent.parent.children',
  childrenMarkdownRemark___parent___children = 'childrenMarkdownRemark.parent.children',
  childrenMarkdownRemark___parent___children___id = 'childrenMarkdownRemark.parent.children.id',
  childrenMarkdownRemark___parent___children___children = 'childrenMarkdownRemark.parent.children.children',
  childrenMarkdownRemark___parent___internal___content = 'childrenMarkdownRemark.parent.internal.content',
  childrenMarkdownRemark___parent___internal___contentDigest = 'childrenMarkdownRemark.parent.internal.contentDigest',
  childrenMarkdownRemark___parent___internal___description = 'childrenMarkdownRemark.parent.internal.description',
  childrenMarkdownRemark___parent___internal___fieldOwners = 'childrenMarkdownRemark.parent.internal.fieldOwners',
  childrenMarkdownRemark___parent___internal___ignoreType = 'childrenMarkdownRemark.parent.internal.ignoreType',
  childrenMarkdownRemark___parent___internal___mediaType = 'childrenMarkdownRemark.parent.internal.mediaType',
  childrenMarkdownRemark___parent___internal___owner = 'childrenMarkdownRemark.parent.internal.owner',
  childrenMarkdownRemark___parent___internal___type = 'childrenMarkdownRemark.parent.internal.type',
  childrenMarkdownRemark___children = 'childrenMarkdownRemark.children',
  childrenMarkdownRemark___children___id = 'childrenMarkdownRemark.children.id',
  childrenMarkdownRemark___children___parent___id = 'childrenMarkdownRemark.children.parent.id',
  childrenMarkdownRemark___children___parent___children = 'childrenMarkdownRemark.children.parent.children',
  childrenMarkdownRemark___children___children = 'childrenMarkdownRemark.children.children',
  childrenMarkdownRemark___children___children___id = 'childrenMarkdownRemark.children.children.id',
  childrenMarkdownRemark___children___children___children = 'childrenMarkdownRemark.children.children.children',
  childrenMarkdownRemark___children___internal___content = 'childrenMarkdownRemark.children.internal.content',
  childrenMarkdownRemark___children___internal___contentDigest = 'childrenMarkdownRemark.children.internal.contentDigest',
  childrenMarkdownRemark___children___internal___description = 'childrenMarkdownRemark.children.internal.description',
  childrenMarkdownRemark___children___internal___fieldOwners = 'childrenMarkdownRemark.children.internal.fieldOwners',
  childrenMarkdownRemark___children___internal___ignoreType = 'childrenMarkdownRemark.children.internal.ignoreType',
  childrenMarkdownRemark___children___internal___mediaType = 'childrenMarkdownRemark.children.internal.mediaType',
  childrenMarkdownRemark___children___internal___owner = 'childrenMarkdownRemark.children.internal.owner',
  childrenMarkdownRemark___children___internal___type = 'childrenMarkdownRemark.children.internal.type',
  childrenMarkdownRemark___internal___content = 'childrenMarkdownRemark.internal.content',
  childrenMarkdownRemark___internal___contentDigest = 'childrenMarkdownRemark.internal.contentDigest',
  childrenMarkdownRemark___internal___description = 'childrenMarkdownRemark.internal.description',
  childrenMarkdownRemark___internal___fieldOwners = 'childrenMarkdownRemark.internal.fieldOwners',
  childrenMarkdownRemark___internal___ignoreType = 'childrenMarkdownRemark.internal.ignoreType',
  childrenMarkdownRemark___internal___mediaType = 'childrenMarkdownRemark.internal.mediaType',
  childrenMarkdownRemark___internal___owner = 'childrenMarkdownRemark.internal.owner',
  childrenMarkdownRemark___internal___type = 'childrenMarkdownRemark.internal.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark.headings.id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type'
}

type contentfulRecipePrepDirectionsTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly prepDirections: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulRecipePrepDirectionsTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulRecipePrepDirectionsTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulRecipePrepDirectionsTextNodeFilterInput>;
};

type contentfulRecipePrepDirectionsTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulRecipePrepDirectionsTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulRecipePrepDirectionsTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulRecipePrepDirectionsTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulRecipePrepDirectionsTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulRecipePrepDirectionsTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulRecipePrepDirectionsTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulRecipeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulRecipeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulRecipeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulRecipeSysContentType>;
};

type ContentfulRecipeSysContentType = {
  readonly sys: Maybe<ContentfulRecipeSysContentTypeSys>;
};

type ContentfulRecipeSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulRecipeSysContentTypeSysFilterInput>;
};

type ContentfulRecipeSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulRecipeSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulRecipeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulRecipeSysContentTypeFilterInput>;
};

type ContentfulReference = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
};

type ContentfulResize = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
};

type ContentfulResizeFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type ContentfulResolutions = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
};

type ContentfulResolutionsFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
};

type ContentfulSizes = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
};

type ContentfulSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
};


type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  childrenImageSharp = 'childrenImageSharp',
  childrenImageSharp___fixed___base64 = 'childrenImageSharp.fixed.base64',
  childrenImageSharp___fixed___tracedSVG = 'childrenImageSharp.fixed.tracedSVG',
  childrenImageSharp___fixed___aspectRatio = 'childrenImageSharp.fixed.aspectRatio',
  childrenImageSharp___fixed___width = 'childrenImageSharp.fixed.width',
  childrenImageSharp___fixed___height = 'childrenImageSharp.fixed.height',
  childrenImageSharp___fixed___src = 'childrenImageSharp.fixed.src',
  childrenImageSharp___fixed___srcSet = 'childrenImageSharp.fixed.srcSet',
  childrenImageSharp___fixed___srcWebp = 'childrenImageSharp.fixed.srcWebp',
  childrenImageSharp___fixed___srcSetWebp = 'childrenImageSharp.fixed.srcSetWebp',
  childrenImageSharp___fixed___originalName = 'childrenImageSharp.fixed.originalName',
  childrenImageSharp___resolutions___base64 = 'childrenImageSharp.resolutions.base64',
  childrenImageSharp___resolutions___tracedSVG = 'childrenImageSharp.resolutions.tracedSVG',
  childrenImageSharp___resolutions___aspectRatio = 'childrenImageSharp.resolutions.aspectRatio',
  childrenImageSharp___resolutions___width = 'childrenImageSharp.resolutions.width',
  childrenImageSharp___resolutions___height = 'childrenImageSharp.resolutions.height',
  childrenImageSharp___resolutions___src = 'childrenImageSharp.resolutions.src',
  childrenImageSharp___resolutions___srcSet = 'childrenImageSharp.resolutions.srcSet',
  childrenImageSharp___resolutions___srcWebp = 'childrenImageSharp.resolutions.srcWebp',
  childrenImageSharp___resolutions___srcSetWebp = 'childrenImageSharp.resolutions.srcSetWebp',
  childrenImageSharp___resolutions___originalName = 'childrenImageSharp.resolutions.originalName',
  childrenImageSharp___fluid___base64 = 'childrenImageSharp.fluid.base64',
  childrenImageSharp___fluid___tracedSVG = 'childrenImageSharp.fluid.tracedSVG',
  childrenImageSharp___fluid___aspectRatio = 'childrenImageSharp.fluid.aspectRatio',
  childrenImageSharp___fluid___src = 'childrenImageSharp.fluid.src',
  childrenImageSharp___fluid___srcSet = 'childrenImageSharp.fluid.srcSet',
  childrenImageSharp___fluid___srcWebp = 'childrenImageSharp.fluid.srcWebp',
  childrenImageSharp___fluid___srcSetWebp = 'childrenImageSharp.fluid.srcSetWebp',
  childrenImageSharp___fluid___sizes = 'childrenImageSharp.fluid.sizes',
  childrenImageSharp___fluid___originalImg = 'childrenImageSharp.fluid.originalImg',
  childrenImageSharp___fluid___originalName = 'childrenImageSharp.fluid.originalName',
  childrenImageSharp___fluid___presentationWidth = 'childrenImageSharp.fluid.presentationWidth',
  childrenImageSharp___fluid___presentationHeight = 'childrenImageSharp.fluid.presentationHeight',
  childrenImageSharp___sizes___base64 = 'childrenImageSharp.sizes.base64',
  childrenImageSharp___sizes___tracedSVG = 'childrenImageSharp.sizes.tracedSVG',
  childrenImageSharp___sizes___aspectRatio = 'childrenImageSharp.sizes.aspectRatio',
  childrenImageSharp___sizes___src = 'childrenImageSharp.sizes.src',
  childrenImageSharp___sizes___srcSet = 'childrenImageSharp.sizes.srcSet',
  childrenImageSharp___sizes___srcWebp = 'childrenImageSharp.sizes.srcWebp',
  childrenImageSharp___sizes___srcSetWebp = 'childrenImageSharp.sizes.srcSetWebp',
  childrenImageSharp___sizes___sizes = 'childrenImageSharp.sizes.sizes',
  childrenImageSharp___sizes___originalImg = 'childrenImageSharp.sizes.originalImg',
  childrenImageSharp___sizes___originalName = 'childrenImageSharp.sizes.originalName',
  childrenImageSharp___sizes___presentationWidth = 'childrenImageSharp.sizes.presentationWidth',
  childrenImageSharp___sizes___presentationHeight = 'childrenImageSharp.sizes.presentationHeight',
  childrenImageSharp___gatsbyImageData = 'childrenImageSharp.gatsbyImageData',
  childrenImageSharp___original___width = 'childrenImageSharp.original.width',
  childrenImageSharp___original___height = 'childrenImageSharp.original.height',
  childrenImageSharp___original___src = 'childrenImageSharp.original.src',
  childrenImageSharp___resize___src = 'childrenImageSharp.resize.src',
  childrenImageSharp___resize___tracedSVG = 'childrenImageSharp.resize.tracedSVG',
  childrenImageSharp___resize___width = 'childrenImageSharp.resize.width',
  childrenImageSharp___resize___height = 'childrenImageSharp.resize.height',
  childrenImageSharp___resize___aspectRatio = 'childrenImageSharp.resize.aspectRatio',
  childrenImageSharp___resize___originalName = 'childrenImageSharp.resize.originalName',
  childrenImageSharp___id = 'childrenImageSharp.id',
  childrenImageSharp___parent___id = 'childrenImageSharp.parent.id',
  childrenImageSharp___parent___parent___id = 'childrenImageSharp.parent.parent.id',
  childrenImageSharp___parent___parent___children = 'childrenImageSharp.parent.parent.children',
  childrenImageSharp___parent___children = 'childrenImageSharp.parent.children',
  childrenImageSharp___parent___children___id = 'childrenImageSharp.parent.children.id',
  childrenImageSharp___parent___children___children = 'childrenImageSharp.parent.children.children',
  childrenImageSharp___parent___internal___content = 'childrenImageSharp.parent.internal.content',
  childrenImageSharp___parent___internal___contentDigest = 'childrenImageSharp.parent.internal.contentDigest',
  childrenImageSharp___parent___internal___description = 'childrenImageSharp.parent.internal.description',
  childrenImageSharp___parent___internal___fieldOwners = 'childrenImageSharp.parent.internal.fieldOwners',
  childrenImageSharp___parent___internal___ignoreType = 'childrenImageSharp.parent.internal.ignoreType',
  childrenImageSharp___parent___internal___mediaType = 'childrenImageSharp.parent.internal.mediaType',
  childrenImageSharp___parent___internal___owner = 'childrenImageSharp.parent.internal.owner',
  childrenImageSharp___parent___internal___type = 'childrenImageSharp.parent.internal.type',
  childrenImageSharp___children = 'childrenImageSharp.children',
  childrenImageSharp___children___id = 'childrenImageSharp.children.id',
  childrenImageSharp___children___parent___id = 'childrenImageSharp.children.parent.id',
  childrenImageSharp___children___parent___children = 'childrenImageSharp.children.parent.children',
  childrenImageSharp___children___children = 'childrenImageSharp.children.children',
  childrenImageSharp___children___children___id = 'childrenImageSharp.children.children.id',
  childrenImageSharp___children___children___children = 'childrenImageSharp.children.children.children',
  childrenImageSharp___children___internal___content = 'childrenImageSharp.children.internal.content',
  childrenImageSharp___children___internal___contentDigest = 'childrenImageSharp.children.internal.contentDigest',
  childrenImageSharp___children___internal___description = 'childrenImageSharp.children.internal.description',
  childrenImageSharp___children___internal___fieldOwners = 'childrenImageSharp.children.internal.fieldOwners',
  childrenImageSharp___children___internal___ignoreType = 'childrenImageSharp.children.internal.ignoreType',
  childrenImageSharp___children___internal___mediaType = 'childrenImageSharp.children.internal.mediaType',
  childrenImageSharp___children___internal___owner = 'childrenImageSharp.children.internal.owner',
  childrenImageSharp___children___internal___type = 'childrenImageSharp.children.internal.type',
  childrenImageSharp___internal___content = 'childrenImageSharp.internal.content',
  childrenImageSharp___internal___contentDigest = 'childrenImageSharp.internal.contentDigest',
  childrenImageSharp___internal___description = 'childrenImageSharp.internal.description',
  childrenImageSharp___internal___fieldOwners = 'childrenImageSharp.internal.fieldOwners',
  childrenImageSharp___internal___ignoreType = 'childrenImageSharp.internal.ignoreType',
  childrenImageSharp___internal___mediaType = 'childrenImageSharp.internal.mediaType',
  childrenImageSharp___internal___owner = 'childrenImageSharp.internal.owner',
  childrenImageSharp___internal___type = 'childrenImageSharp.internal.type',
  childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp.fixed.width',
  childImageSharp___fixed___height = 'childImageSharp.fixed.height',
  childImageSharp___fixed___src = 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
  childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
  childImageSharp___gatsbyImageData = 'childImageSharp.gatsbyImageData',
  childImageSharp___original___width = 'childImageSharp.original.width',
  childImageSharp___original___height = 'childImageSharp.original.height',
  childImageSharp___original___src = 'childImageSharp.original.src',
  childImageSharp___resize___src = 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width = 'childImageSharp.resize.width',
  childImageSharp___resize___height = 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
  childImageSharp___id = 'childImageSharp.id',
  childImageSharp___parent___id = 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children = 'childImageSharp.parent.children',
  childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
  childImageSharp___children = 'childImageSharp.children',
  childImageSharp___children___id = 'childImageSharp.children.id',
  childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
  childImageSharp___children___children = 'childImageSharp.children.children',
  childImageSharp___children___children___id = 'childImageSharp.children.children.id',
  childImageSharp___children___children___children = 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
  childImageSharp___internal___content = 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description = 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner = 'childImageSharp.internal.owner',
  childImageSharp___internal___type = 'childImageSharp.internal.type',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

enum ImageCropFocus {
  CENTER = 0,
  NORTH = 1,
  NORTHEAST = 5,
  EAST = 2,
  SOUTHEAST = 6,
  SOUTH = 3,
  SOUTHWEST = 7,
  WEST = 4,
  NORTHWEST = 8,
  ENTROPY = 16,
  ATTENTION = 17
}

enum ImageFit {
  COVER = 'cover',
  CONTAIN = 'contain',
  FILL = 'fill',
  INSIDE = 'inside',
  OUTSIDE = 'outside'
}

enum ImageFormat {
  NO_CHANGE = '',
  AUTO = '',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp',
  AVIF = 'avif'
}

enum ImageLayout {
  FIXED = 'fixed',
  FULL_WIDTH = 'fullWidth',
  CONSTRAINED = 'constrained'
}

enum ImagePlaceholder {
  DOMINANT_COLOR = 'dominantColor',
  TRACED_SVG = 'tracedSVG',
  BLURRED = 'blurred',
  NONE = 'none'
}

enum ImageResizingBehavior {
  NO_CHANGE = '',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  PAD = 'pad',
  /** Crop a part of the original image to match the specified size. */
  CROP = 'crop',
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  FILL = 'fill',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  THUMB = 'thumb',
  /** Scale the image regardless of the original aspect ratio. */
  SCALE = 'scale'
}

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ImageSharpResolutions>;
  readonly fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ImageSharpSizes>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_resolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_sizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats?: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  background?: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fixed___originalName = 'fixed.originalName',
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  resolutions___originalName = 'resolutions.originalName',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  fluid___originalImg = 'fluid.originalImg',
  fluid___originalName = 'fluid.originalName',
  fluid___presentationWidth = 'fluid.presentationWidth',
  fluid___presentationHeight = 'fluid.presentationHeight',
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
  sizes___originalImg = 'sizes.originalImg',
  sizes___originalName = 'sizes.originalName',
  sizes___presentationWidth = 'sizes.presentationWidth',
  sizes___presentationHeight = 'sizes.presentationHeight',
  gatsbyImageData = 'gatsbyImageData',
  original___width = 'original.width',
  original___height = 'original.height',
  original___src = 'original.src',
  resize___src = 'resize.src',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  resize___originalName = 'resize.originalName',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes: Maybe<ImageSharpSizesFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResolutions = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResolutionsFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpSizes = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};


type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

enum MarkdownExcerptFormats {
  PLAIN = 'PLAIN',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN'
}

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

enum MarkdownHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

enum MarkdownRemarkFieldsEnum {
  id = 'id',
  frontmatter___title = 'frontmatter.title',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  html = 'html',
  htmlAst = 'htmlAst',
  excerptAst = 'excerptAst',
  headings = 'headings',
  headings___id = 'headings.id',
  headings___value = 'headings.value',
  headings___depth = 'headings.depth',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount.paragraphs',
  wordCount___sentences = 'wordCount.sentences',
  wordCount___words = 'wordCount.words',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority'
}

type Query = {
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly contentfulAsset: Maybe<ContentfulAsset>;
  readonly allContentfulAsset: ContentfulAssetConnection;
  readonly contentfulPerson: Maybe<ContentfulPerson>;
  readonly allContentfulPerson: ContentfulPersonConnection;
  readonly contentfulBlogPost: Maybe<ContentfulBlogPost>;
  readonly allContentfulBlogPost: ContentfulBlogPostConnection;
  readonly contentfulRecipe: Maybe<ContentfulRecipe>;
  readonly allContentfulRecipe: ContentfulRecipeConnection;
  readonly contentfulIngredient: Maybe<ContentfulIngredient>;
  readonly allContentfulIngredient: ContentfulIngredientConnection;
  readonly contentfulRecipeNotesTextNode: Maybe<contentfulRecipeNotesTextNode>;
  readonly allContentfulRecipeNotesTextNode: contentfulRecipeNotesTextNodeConnection;
  readonly contentfulRecipeDirectionsTextNode: Maybe<contentfulRecipeDirectionsTextNode>;
  readonly allContentfulRecipeDirectionsTextNode: contentfulRecipeDirectionsTextNodeConnection;
  readonly contentfulRecipePrepDirectionsTextNode: Maybe<contentfulRecipePrepDirectionsTextNode>;
  readonly allContentfulRecipePrepDirectionsTextNode: contentfulRecipePrepDirectionsTextNodeConnection;
  readonly contentfulRecipeIngredientsTextNode: Maybe<contentfulRecipeIngredientsTextNode>;
  readonly allContentfulRecipeIngredientsTextNode: contentfulRecipeIngredientsTextNodeConnection;
  readonly contentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNode>;
  readonly allContentfulBlogPostBodyTextNode: contentfulBlogPostBodyTextNodeConnection;
  readonly contentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNode>;
  readonly allContentfulBlogPostDescriptionTextNode: contentfulBlogPostDescriptionTextNodeConnection;
  readonly contentfulPersonShortBioTextNode: Maybe<contentfulPersonShortBioTextNode>;
  readonly allContentfulPersonShortBioTextNode: contentfulPersonShortBioTextNodeConnection;
  readonly contentfulContentType: Maybe<ContentfulContentType>;
  readonly allContentfulContentType: ContentfulContentTypeConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};


type Query_contentfulEntryArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
};


type Query_allContentfulEntryArgs = {
  filter: Maybe<ContentfulEntryFilterInput>;
  sort: Maybe<ContentfulEntrySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAssetArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  file: Maybe<ContentfulAssetFileFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulAssetSysFilterInput>;
  fixed: Maybe<ContentfulFixedFilterInput>;
  resolutions: Maybe<ContentfulResolutionsFilterInput>;
  fluid: Maybe<ContentfulFluidFilterInput>;
  sizes: Maybe<ContentfulSizesFilterInput>;
  resize: Maybe<ContentfulResizeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulAssetArgs = {
  filter: Maybe<ContentfulAssetFilterInput>;
  sort: Maybe<ContentfulAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPersonArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  company: Maybe<StringQueryOperatorInput>;
  email: Maybe<StringQueryOperatorInput>;
  phone: Maybe<StringQueryOperatorInput>;
  facebook: Maybe<StringQueryOperatorInput>;
  twitter: Maybe<StringQueryOperatorInput>;
  github: Maybe<StringQueryOperatorInput>;
  image: Maybe<ContentfulAssetFilterInput>;
  blog_post: Maybe<ContentfulBlogPostFilterListInput>;
  shortBio: Maybe<contentfulPersonShortBioTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulPersonSysFilterInput>;
  childrenContentfulPersonShortBioTextNode: Maybe<contentfulPersonShortBioTextNodeFilterListInput>;
  childContentfulPersonShortBioTextNode: Maybe<contentfulPersonShortBioTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulPersonArgs = {
  filter: Maybe<ContentfulPersonFilterInput>;
  sort: Maybe<ContentfulPersonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulBlogPostArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  publishDate: Maybe<DateQueryOperatorInput>;
  heroImage: Maybe<ContentfulAssetFilterInput>;
  description: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
  body: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulBlogPostSysFilterInput>;
  tags: Maybe<StringQueryOperatorInput>;
  author: Maybe<ContentfulPersonFilterInput>;
  gatsbyPath: Maybe<StringQueryOperatorInput>;
  childrenContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNodeFilterListInput>;
  childContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
  childrenContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNodeFilterListInput>;
  childContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulBlogPostArgs = {
  filter: Maybe<ContentfulBlogPostFilterInput>;
  sort: Maybe<ContentfulBlogPostSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulRecipeArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  yield: Maybe<StringQueryOperatorInput>;
  prepTime: Maybe<IntQueryOperatorInput>;
  totalTime: Maybe<IntQueryOperatorInput>;
  featured: Maybe<BooleanQueryOperatorInput>;
  mainImage: Maybe<ContentfulAssetFilterInput>;
  ingredients: Maybe<contentfulRecipeIngredientsTextNodeFilterInput>;
  prepDirections: Maybe<contentfulRecipePrepDirectionsTextNodeFilterInput>;
  directions: Maybe<contentfulRecipeDirectionsTextNodeFilterInput>;
  notes: Maybe<contentfulRecipeNotesTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulRecipeSysFilterInput>;
  ingredientTags: Maybe<StringQueryOperatorInput>;
  foodTypeTags: Maybe<StringQueryOperatorInput>;
  gatsbyPath: Maybe<StringQueryOperatorInput>;
  childrenContentfulRecipeNotesTextNode: Maybe<contentfulRecipeNotesTextNodeFilterListInput>;
  childContentfulRecipeNotesTextNode: Maybe<contentfulRecipeNotesTextNodeFilterInput>;
  childrenContentfulRecipeDirectionsTextNode: Maybe<contentfulRecipeDirectionsTextNodeFilterListInput>;
  childContentfulRecipeDirectionsTextNode: Maybe<contentfulRecipeDirectionsTextNodeFilterInput>;
  childrenContentfulRecipePrepDirectionsTextNode: Maybe<contentfulRecipePrepDirectionsTextNodeFilterListInput>;
  childContentfulRecipePrepDirectionsTextNode: Maybe<contentfulRecipePrepDirectionsTextNodeFilterInput>;
  childrenContentfulRecipeIngredientsTextNode: Maybe<contentfulRecipeIngredientsTextNodeFilterListInput>;
  childContentfulRecipeIngredientsTextNode: Maybe<contentfulRecipeIngredientsTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulRecipeArgs = {
  filter: Maybe<ContentfulRecipeFilterInput>;
  sort: Maybe<ContentfulRecipeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulIngredientArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  quantity: Maybe<FloatQueryOperatorInput>;
  unit: Maybe<StringQueryOperatorInput>;
  notes: Maybe<StringQueryOperatorInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulIngredientSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulIngredientArgs = {
  filter: Maybe<ContentfulIngredientFilterInput>;
  sort: Maybe<ContentfulIngredientSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulRecipeNotesTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  notes: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulRecipeNotesTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulRecipeNotesTextNodeArgs = {
  filter: Maybe<contentfulRecipeNotesTextNodeFilterInput>;
  sort: Maybe<contentfulRecipeNotesTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulRecipeDirectionsTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  directions: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulRecipeDirectionsTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulRecipeDirectionsTextNodeArgs = {
  filter: Maybe<contentfulRecipeDirectionsTextNodeFilterInput>;
  sort: Maybe<contentfulRecipeDirectionsTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulRecipePrepDirectionsTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  prepDirections: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulRecipePrepDirectionsTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulRecipePrepDirectionsTextNodeArgs = {
  filter: Maybe<contentfulRecipePrepDirectionsTextNodeFilterInput>;
  sort: Maybe<contentfulRecipePrepDirectionsTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulRecipeIngredientsTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  ingredients: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulRecipeIngredientsTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulRecipeIngredientsTextNodeArgs = {
  filter: Maybe<contentfulRecipeIngredientsTextNodeFilterInput>;
  sort: Maybe<contentfulRecipeIngredientsTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulBlogPostBodyTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  body: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulBlogPostBodyTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulBlogPostBodyTextNodeArgs = {
  filter: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
  sort: Maybe<contentfulBlogPostBodyTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulBlogPostDescriptionTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulBlogPostDescriptionTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulBlogPostDescriptionTextNodeArgs = {
  filter: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
  sort: Maybe<contentfulBlogPostDescriptionTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPersonShortBioTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  shortBio: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulPersonShortBioTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulPersonShortBioTextNodeArgs = {
  filter: Maybe<contentfulPersonShortBioTextNodeFilterInput>;
  sort: Maybe<contentfulPersonShortBioTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulContentTypeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  displayField: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulContentTypeSysFilterInput>;
};


type Query_allContentfulContentTypeArgs = {
  filter: Maybe<ContentfulContentTypeFilterInput>;
  sort: Maybe<ContentfulContentTypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  buildTime = 'buildTime'
}

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata.title',
  siteMetadata___description = 'siteMetadata.description',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageContext = {
  readonly id: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly _xparams: Maybe<SitePageContext_xparams>;
  readonly title: Maybe<Scalars['String']>;
};

type SitePageContext_xparams = {
  readonly slug: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
};

type SitePageContext_xparamsFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
};

type SitePageContextFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly _xparams: Maybe<SitePageContext_xparamsFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___id = 'context.id',
  context___slug = 'context.slug',
  context____xparams___slug = 'context._xparams.slug',
  context____xparams___title = 'context._xparams.title',
  context___title = 'context.title',
  pluginCreator___id = 'pluginCreator.id',
  pluginCreator___parent___id = 'pluginCreator.parent.id',
  pluginCreator___parent___parent___id = 'pluginCreator.parent.parent.id',
  pluginCreator___parent___parent___children = 'pluginCreator.parent.parent.children',
  pluginCreator___parent___children = 'pluginCreator.parent.children',
  pluginCreator___parent___children___id = 'pluginCreator.parent.children.id',
  pluginCreator___parent___children___children = 'pluginCreator.parent.children.children',
  pluginCreator___parent___internal___content = 'pluginCreator.parent.internal.content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator.parent.internal.contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator.parent.internal.description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator.parent.internal.fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator.parent.internal.ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator.parent.internal.mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator.parent.internal.owner',
  pluginCreator___parent___internal___type = 'pluginCreator.parent.internal.type',
  pluginCreator___children = 'pluginCreator.children',
  pluginCreator___children___id = 'pluginCreator.children.id',
  pluginCreator___children___parent___id = 'pluginCreator.children.parent.id',
  pluginCreator___children___parent___children = 'pluginCreator.children.parent.children',
  pluginCreator___children___children = 'pluginCreator.children.children',
  pluginCreator___children___children___id = 'pluginCreator.children.children.id',
  pluginCreator___children___children___children = 'pluginCreator.children.children.children',
  pluginCreator___children___internal___content = 'pluginCreator.children.internal.content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator.children.internal.contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator.children.internal.description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator.children.internal.fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator.children.internal.ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator.children.internal.mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator.children.internal.owner',
  pluginCreator___children___internal___type = 'pluginCreator.children.internal.type',
  pluginCreator___internal___content = 'pluginCreator.internal.content',
  pluginCreator___internal___contentDigest = 'pluginCreator.internal.contentDigest',
  pluginCreator___internal___description = 'pluginCreator.internal.description',
  pluginCreator___internal___fieldOwners = 'pluginCreator.internal.fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator.internal.ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator.internal.mediaType',
  pluginCreator___internal___owner = 'pluginCreator.internal.owner',
  pluginCreator___internal___type = 'pluginCreator.internal.type',
  pluginCreator___resolve = 'pluginCreator.resolve',
  pluginCreator___name = 'pluginCreator.name',
  pluginCreator___version = 'pluginCreator.version',
  pluginCreator___pluginOptions___base64Width = 'pluginCreator.pluginOptions.base64Width',
  pluginCreator___pluginOptions___stripMetadata = 'pluginCreator.pluginOptions.stripMetadata',
  pluginCreator___pluginOptions___defaultQuality = 'pluginCreator.pluginOptions.defaultQuality',
  pluginCreator___pluginOptions___failOnError = 'pluginCreator.pluginOptions.failOnError',
  pluginCreator___pluginOptions___name = 'pluginCreator.pluginOptions.name',
  pluginCreator___pluginOptions___short_name = 'pluginCreator.pluginOptions.short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator.pluginOptions.start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator.pluginOptions.background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator.pluginOptions.theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator.pluginOptions.display',
  pluginCreator___pluginOptions___icon = 'pluginCreator.pluginOptions.icon',
  pluginCreator___pluginOptions___legacy = 'pluginCreator.pluginOptions.legacy',
  pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator.pluginOptions.theme_color_in_head',
  pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator.pluginOptions.cache_busting_mode',
  pluginCreator___pluginOptions___crossOrigin = 'pluginCreator.pluginOptions.crossOrigin',
  pluginCreator___pluginOptions___include_favicon = 'pluginCreator.pluginOptions.include_favicon',
  pluginCreator___pluginOptions___cacheDigest = 'pluginCreator.pluginOptions.cacheDigest',
  pluginCreator___pluginOptions___isResettingCSS = 'pluginCreator.pluginOptions.isResettingCSS',
  pluginCreator___pluginOptions___spaceId = 'pluginCreator.pluginOptions.spaceId',
  pluginCreator___pluginOptions___accessToken = 'pluginCreator.pluginOptions.accessToken',
  pluginCreator___pluginOptions___host = 'pluginCreator.pluginOptions.host',
  pluginCreator___pluginOptions___environment = 'pluginCreator.pluginOptions.environment',
  pluginCreator___pluginOptions___downloadLocal = 'pluginCreator.pluginOptions.downloadLocal',
  pluginCreator___pluginOptions___forceFullSync = 'pluginCreator.pluginOptions.forceFullSync',
  pluginCreator___pluginOptions___pageLimit = 'pluginCreator.pluginOptions.pageLimit',
  pluginCreator___pluginOptions___assetDownloadWorkers = 'pluginCreator.pluginOptions.assetDownloadWorkers',
  pluginCreator___pluginOptions___useNameForId = 'pluginCreator.pluginOptions.useNameForId',
  pluginCreator___pluginOptions___outputPath = 'pluginCreator.pluginOptions.outputPath',
  pluginCreator___pluginOptions___path = 'pluginCreator.pluginOptions.path',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator.pluginOptions.pathCheck',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator.pluginOptions.allExtensions',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator.pluginOptions.isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator.pluginOptions.jsxPragma',
  pluginCreator___nodeAPIs = 'pluginCreator.nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator.browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator.ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator.pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator.packageJson.name',
  pluginCreator___packageJson___description = 'pluginCreator.packageJson.description',
  pluginCreator___packageJson___version = 'pluginCreator.packageJson.version',
  pluginCreator___packageJson___main = 'pluginCreator.packageJson.main',
  pluginCreator___packageJson___license = 'pluginCreator.packageJson.license',
  pluginCreator___packageJson___dependencies = 'pluginCreator.packageJson.dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator.packageJson.dependencies.name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator.packageJson.dependencies.version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator.packageJson.devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator.packageJson.devDependencies.name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator.packageJson.devDependencies.version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator.packageJson.peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator.packageJson.peerDependencies.name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator.packageJson.peerDependencies.version',
  pluginCreator___packageJson___keywords = 'pluginCreator.packageJson.keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___base64Width = 'pluginOptions.base64Width',
  pluginOptions___stripMetadata = 'pluginOptions.stripMetadata',
  pluginOptions___defaultQuality = 'pluginOptions.defaultQuality',
  pluginOptions___failOnError = 'pluginOptions.failOnError',
  pluginOptions___name = 'pluginOptions.name',
  pluginOptions___short_name = 'pluginOptions.short_name',
  pluginOptions___start_url = 'pluginOptions.start_url',
  pluginOptions___background_color = 'pluginOptions.background_color',
  pluginOptions___theme_color = 'pluginOptions.theme_color',
  pluginOptions___display = 'pluginOptions.display',
  pluginOptions___icon = 'pluginOptions.icon',
  pluginOptions___legacy = 'pluginOptions.legacy',
  pluginOptions___theme_color_in_head = 'pluginOptions.theme_color_in_head',
  pluginOptions___cache_busting_mode = 'pluginOptions.cache_busting_mode',
  pluginOptions___crossOrigin = 'pluginOptions.crossOrigin',
  pluginOptions___include_favicon = 'pluginOptions.include_favicon',
  pluginOptions___cacheDigest = 'pluginOptions.cacheDigest',
  pluginOptions___isResettingCSS = 'pluginOptions.isResettingCSS',
  pluginOptions___spaceId = 'pluginOptions.spaceId',
  pluginOptions___accessToken = 'pluginOptions.accessToken',
  pluginOptions___host = 'pluginOptions.host',
  pluginOptions___environment = 'pluginOptions.environment',
  pluginOptions___downloadLocal = 'pluginOptions.downloadLocal',
  pluginOptions___forceFullSync = 'pluginOptions.forceFullSync',
  pluginOptions___pageLimit = 'pluginOptions.pageLimit',
  pluginOptions___assetDownloadWorkers = 'pluginOptions.assetDownloadWorkers',
  pluginOptions___useNameForId = 'pluginOptions.useNameForId',
  pluginOptions___outputPath = 'pluginOptions.outputPath',
  pluginOptions___path = 'pluginOptions.path',
  pluginOptions___pathCheck = 'pluginOptions.pathCheck',
  pluginOptions___allExtensions = 'pluginOptions.allExtensions',
  pluginOptions___isTSX = 'pluginOptions.isTSX',
  pluginOptions___jsxPragma = 'pluginOptions.jsxPragma',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson.name',
  packageJson___description = 'packageJson.description',
  packageJson___version = 'packageJson.version',
  packageJson___main = 'packageJson.main',
  packageJson___license = 'packageJson.license',
  packageJson___dependencies = 'packageJson.dependencies',
  packageJson___dependencies___name = 'packageJson.dependencies.name',
  packageJson___dependencies___version = 'packageJson.dependencies.version',
  packageJson___devDependencies = 'packageJson.devDependencies',
  packageJson___devDependencies___name = 'packageJson.devDependencies.name',
  packageJson___devDependencies___version = 'packageJson.devDependencies.version',
  packageJson___peerDependencies = 'packageJson.peerDependencies',
  packageJson___peerDependencies___name = 'packageJson.peerDependencies.name',
  packageJson___peerDependencies___version = 'packageJson.peerDependencies.version',
  packageJson___keywords = 'packageJson.keywords'
}

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPluginOptions = {
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly name: Maybe<Scalars['String']>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly isResettingCSS: Maybe<Scalars['Boolean']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly accessToken: Maybe<Scalars['String']>;
  readonly host: Maybe<Scalars['String']>;
  readonly environment: Maybe<Scalars['String']>;
  readonly downloadLocal: Maybe<Scalars['Boolean']>;
  readonly forceFullSync: Maybe<Scalars['Boolean']>;
  readonly pageLimit: Maybe<Scalars['Int']>;
  readonly assetDownloadWorkers: Maybe<Scalars['Int']>;
  readonly useNameForId: Maybe<Scalars['Boolean']>;
  readonly outputPath: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly isResettingCSS: Maybe<BooleanQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly accessToken: Maybe<StringQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly environment: Maybe<StringQueryOperatorInput>;
  readonly downloadLocal: Maybe<BooleanQueryOperatorInput>;
  readonly forceFullSync: Maybe<BooleanQueryOperatorInput>;
  readonly pageLimit: Maybe<IntQueryOperatorInput>;
  readonly assetDownloadWorkers: Maybe<IntQueryOperatorInput>;
  readonly useNameForId: Maybe<BooleanQueryOperatorInput>;
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type ArticlePreviewFragment = (
  Pick<ContentfulBlogPost, 'title' | 'slug' | 'publishDate' | 'tags'>
  & { readonly heroImage: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluidFragment> }>, readonly description: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }> }
);

type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type BlogIndexQueryQueryVariables = Exact<{ [key: string]: never; }>;


type BlogIndexQueryQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, readonly allContentfulBlogPost: { readonly nodes: ReadonlyArray<ArticlePreviewFragment> } };

type DonationQueryQueryVariables = Exact<{ [key: string]: never; }>;


type DonationQueryQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

type HeroFragment = (
  Pick<ContentfulPerson, 'name' | 'title'>
  & { readonly shortBio: Maybe<Pick<contentfulPersonShortBioTextNode, 'shortBio'>>, readonly image: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluidFragment> }> }
);

type HomeQueryQueryVariables = Exact<{ [key: string]: never; }>;


type HomeQueryQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, readonly allContentfulBlogPost: { readonly edges: ReadonlyArray<{ readonly node: ArticlePreviewFragment }> }, readonly allContentfulPerson: { readonly nodes: ReadonlyArray<HeroFragment> } };

type RecipeCardFragment = (
  Pick<ContentfulRecipe, 'id' | 'prepTime' | 'title' | 'totalTime' | 'updatedAt' | 'yield'>
  & { readonly mainImage: Maybe<(
    Pick<ContentfulAsset, 'description'>
    & { readonly fluid: Maybe<GatsbyContentfulFluidFragment> }
  )> }
);

type RecipeQueryQueryVariables = Exact<{ [key: string]: never; }>;


type RecipeQueryQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, readonly allContentfulRecipe: { readonly nodes: ReadonlyArray<RecipeCardFragment> } };

type BlogPostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type BlogPostBySlugQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, readonly contentfulBlogPost: Maybe<(
    Pick<ContentfulBlogPost, 'title' | 'publishDate'>
    & { readonly heroImage: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluidFragment> }>, readonly body: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }> }
  )> };

type RecipeByTitleQueryVariables = Exact<{
  title: Scalars['String'];
}>;


type RecipeByTitleQuery = { readonly contentfulRecipe: Maybe<(
    Pick<ContentfulRecipe, 'title' | 'totalTime' | 'prepTime' | 'yield'>
    & { readonly mainImage: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluidFragment> }>, readonly ingredients: Maybe<Pick<contentfulRecipeIngredientsTextNode, 'ingredients'>>, readonly directions: Maybe<Pick<contentfulRecipeDirectionsTextNode, 'directions'>>, readonly prepDirections: Maybe<Pick<contentfulRecipePrepDirectionsTextNode, 'prepDirections'>>, readonly notes: Maybe<Pick<contentfulRecipeNotesTextNode, 'notes'>> }
  )> };

type FooterQueryVariables = Exact<{ [key: string]: never; }>;


type FooterQuery = { readonly contentfulAsset: Maybe<(
    Pick<ContentfulAsset, 'description'>
    & { readonly fluid: Maybe<GatsbyContentfulFluidFragment> }
  )> };

type HeaderQueryVariables = Exact<{ [key: string]: never; }>;


type HeaderQuery = { readonly contentfulAsset: Maybe<(
    Pick<ContentfulAsset, 'description'>
    & { readonly fluid: Maybe<GatsbyContentfulFluidFragment> }
  )> };

}