import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddBundleProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<BundleProductCartItemInput>>;
};

export type AddBundleProductsToCartOutput = {
  __typename?: 'AddBundleProductsToCartOutput';
  cart: Cart;
};

export type AddConfigurableProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<ConfigurableProductCartItemInput>>;
};

export type AddConfigurableProductsToCartOutput = {
  __typename?: 'AddConfigurableProductsToCartOutput';
  cart: Cart;
};

export type AddDownloadableProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<DownloadableProductCartItemInput>>;
};

export type AddDownloadableProductsToCartOutput = {
  __typename?: 'AddDownloadableProductsToCartOutput';
  cart: Cart;
};

export type AddMpGiftCardProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<MpGiftCardProductCartItemInput>>;
};

export type AddMpGiftCardProductsToCartOutput = {
  __typename?: 'AddMpGiftCardProductsToCartOutput';
  cart: Cart;
};

export type AddProductsToCartOutput = {
  __typename?: 'AddProductsToCartOutput';
  /** The cart after products have been added */
  cart: Cart;
  /** An error encountered while adding an item to the cart. */
  user_errors: Array<Maybe<CartUserInputError>>;
};

export type AddProductsToCompareListInput = {
  /** An array of product IDs to add to the compare list */
  products: Array<InputMaybe<Scalars['ID']>>;
  /** The unique identifier of the compare list to modify */
  uid: Scalars['ID'];
};

/** Contains the customer's wish list and any errors encountered */
export type AddProductsToWishlistOutput = {
  __typename?: 'AddProductsToWishlistOutput';
  /** An array of errors encountered while adding products to a wish list */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully added */
  wishlist: Wishlist;
};

export type AddSimpleProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<SimpleProductCartItemInput>>;
};

export type AddSimpleProductsToCartOutput = {
  __typename?: 'AddSimpleProductsToCartOutput';
  cart: Cart;
};

export type AddVirtualProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<VirtualProductCartItemInput>>;
};

export type AddVirtualProductsToCartOutput = {
  __typename?: 'AddVirtualProductsToCartOutput';
  cart: Cart;
};

export type AddWishlistItemsToCartOutput = {
  __typename?: 'AddWishlistItemsToCartOutput';
  /** An array of errors encountered while adding products to the customer's cart */
  add_wishlist_items_to_cart_user_errors: Array<Maybe<WishlistCartUserInputError>>;
  /** Indicates whether the attempt to add items to the customer's cart was successful */
  status: Scalars['Boolean'];
  /** Contains the wish list with all items that were successfully added */
  wishlist: Wishlist;
};

/** A bucket that contains information for each filterable option (such as price, category `UID`, and custom attributes). */
export type Aggregation = {
  __typename?: 'Aggregation';
  /** Attribute code of the aggregation group. */
  attribute_code: Scalars['String'];
  /** The number of options in the aggregation group. */
  count?: Maybe<Scalars['Int']>;
  is_swatch?: Maybe<Scalars['Boolean']>;
  /** The aggregation display name. */
  label?: Maybe<Scalars['String']>;
  /** Array of options for the aggregation. */
  options?: Maybe<Array<Maybe<AggregationOption>>>;
  /** The relative position of the attribute in a layered navigation block */
  position?: Maybe<Scalars['Int']>;
};

export type AggregationOption = AggregationOptionInterface & {
  __typename?: 'AggregationOption';
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']>;
  /** Aggregation option display label. */
  label?: Maybe<Scalars['String']>;
  swatch_data?: Maybe<SwatchData>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String'];
};

export type AggregationOptionInterface = {
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']>;
  /** Aggregation option display label. */
  label?: Maybe<Scalars['String']>;
  swatch_data?: Maybe<SwatchData>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String'];
};

export type Album = {
  __typename?: 'Album';
  brides_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  grooms_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  mobilenumber?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type AppliedCoupon = {
  __typename?: 'AppliedCoupon';
  code: Scalars['String'];
};

export type ApplyCouponToCartInput = {
  cart_id: Scalars['String'];
  coupon_code: Scalars['String'];
};

export type ApplyCouponToCartOutput = {
  __typename?: 'ApplyCouponToCartOutput';
  cart: Cart;
};

/** AreaInput defines the parameters which will be used for filter by specified location. */
export type AreaInput = {
  /** The radius for the search in KM. */
  radius: Scalars['Int'];
  /** The country code where search must be performed. Required parameter together with region, city or postcode. */
  search_term: Scalars['String'];
};

export type Assets = {
  __typename?: 'Assets';
  /** The payment method logo url (descriptive) */
  descriptive?: Maybe<Scalars['String']>;
  /** The payment method logo url (standard) */
  standard?: Maybe<Scalars['String']>;
};

export type AssignCompareListToCustomerOutput = {
  __typename?: 'AssignCompareListToCustomerOutput';
  /** The contents of the customer's compare list */
  compare_list?: Maybe<CompareList>;
  result: Scalars['Boolean'];
};

/** Attribute contains the attribute_type of the specified attribute_code and entity_type */
export type Attribute = {
  __typename?: 'Attribute';
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: Maybe<Scalars['String']>;
  /** Attribute options list. */
  attribute_options?: Maybe<Array<Maybe<AttributeOption>>>;
  /** The data type of the attribute */
  attribute_type?: Maybe<Scalars['String']>;
  /** The type of entity that defines the attribute */
  entity_type?: Maybe<Scalars['String']>;
  /** The frontend input type of the attribute */
  input_type?: Maybe<Scalars['String']>;
  /** Contains details about the storefront properties configured for the attribute */
  storefront_properties?: Maybe<StorefrontProperties>;
};

/** AttributeInput specifies the attribute_code and entity_type to search */
export type AttributeInput = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: InputMaybe<Scalars['String']>;
  /** The type of entity that defines the attribute */
  entity_type?: InputMaybe<Scalars['String']>;
};

/** Attribute option. */
export type AttributeOption = {
  __typename?: 'AttributeOption';
  /** Attribute option label. */
  label?: Maybe<Scalars['String']>;
  /** Attribute option value. */
  value?: Maybe<Scalars['String']>;
};

export type AuthenticateCustomerWithSocialLogin = {
  __typename?: 'AuthenticateCustomerWithSocialLogin';
  /** Token */
  token?: Maybe<Scalars['String']>;
};

export type AvailablePaymentMethod = {
  __typename?: 'AvailablePaymentMethod';
  /** The payment method code */
  code: Scalars['String'];
  /** The payment method title. */
  title: Scalars['String'];
};

export type AvailableShippingMethod = {
  __typename?: 'AvailableShippingMethod';
  amount: Money;
  available: Scalars['Boolean'];
  /** @deprecated The field should not be used on the storefront */
  base_amount?: Maybe<Money>;
  carrier_code: Scalars['String'];
  carrier_title: Scalars['String'];
  error_message?: Maybe<Scalars['String']>;
  /** Could be null if method is not available */
  method_code?: Maybe<Scalars['String']>;
  /** Could be null if method is not available */
  method_title?: Maybe<Scalars['String']>;
  price_excl_tax: Money;
  price_incl_tax: Money;
};

export type BannerBlock = Block & {
  __typename?: 'BannerBlock';
  banner_items?: Maybe<Array<Maybe<BannerItems>>>;
  name?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
};

export type BannerItems = {
  __typename?: 'BannerItems';
  caption?: Maybe<Scalars['String']>;
  image_desktop?: Maybe<Scalars['String']>;
  image_mobile?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BestSellerBlock = Block & {
  __typename?: 'BestSellerBlock';
  best_seller_products?: Maybe<Array<Maybe<BestSellerProducts>>>;
  name?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
};

export type BestSellerProducts = {
  __typename?: 'BestSellerProducts';
  category?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['Int']>;
  products?: Maybe<Array<Maybe<ProductInterface>>>;
};

export type BestsellersProductOutput = {
  __typename?: 'BestsellersProductOutput';
  /** Currency */
  currency?: Maybe<Scalars['String']>;
  /** Period. */
  period?: Maybe<Scalars['String']>;
  /** Product ID */
  product_id?: Maybe<Scalars['String']>;
  /** Product Image URL */
  product_image_url?: Maybe<Scalars['String']>;
  /** Product Name */
  product_name?: Maybe<Scalars['String']>;
  /** Product Price */
  product_price?: Maybe<Scalars['String']>;
  /** Product SKU */
  product_sku?: Maybe<Scalars['String']>;
  /** Product URL */
  product_url?: Maybe<Scalars['String']>;
  /** Order Quantity. */
  qty_ordered?: Maybe<Scalars['Int']>;
};

export type BillingAddressInput = {
  address?: InputMaybe<CartAddressInput>;
  customer_address_id?: InputMaybe<Scalars['Int']>;
  /** Set billing address same as shipping */
  same_as_shipping?: InputMaybe<Scalars['Boolean']>;
  /** Deprecated: use `same_as_shipping` field instead */
  use_for_shipping?: InputMaybe<Scalars['Boolean']>;
};

export type BillingCartAddress = CartAddressInterface & {
  __typename?: 'BillingCartAddress';
  address_label?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: CartAddressCountry;
  /** @deprecated The field is used only in shipping address */
  customer_notes?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<CartAddressRegion>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

export type Block = {
  name?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
};

export type BlogAuthor = {
  __typename?: 'BlogAuthor';
  /** Id of the Blog Post Author */
  author_id?: Maybe<Scalars['Int']>;
  /** Blog Author Author url */
  author_url?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  /** Blog Author Created */
  creation_time?: Maybe<Scalars['String']>;
  custom_layout?: Maybe<Scalars['String']>;
  custom_layout_update_xml?: Maybe<Scalars['String']>;
  custom_theme?: Maybe<Scalars['String']>;
  custom_theme_from?: Maybe<Scalars['String']>;
  custom_theme_to?: Maybe<Scalars['String']>;
  facebook_page_url?: Maybe<Scalars['String']>;
  featured_image?: Maybe<Scalars['String']>;
  filtered_content?: Maybe<Scalars['String']>;
  /** URL key of Blog Author */
  identifier?: Maybe<Scalars['String']>;
  instagram_page_url?: Maybe<Scalars['String']>;
  /** Blog Author Is active */
  is_active?: Maybe<Scalars['Int']>;
  layout_update_xml?: Maybe<Scalars['String']>;
  linkedin_page_url?: Maybe<Scalars['String']>;
  /** Blog Author Meta description */
  meta_description?: Maybe<Scalars['String']>;
  /** Blog Author Meta title */
  meta_title?: Maybe<Scalars['String']>;
  /** Blog Author Name */
  name?: Maybe<Scalars['String']>;
  page_layout?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  short_content?: Maybe<Scalars['String']>;
  short_filtered_content?: Maybe<Scalars['String']>;
  /** Blog Author title */
  title?: Maybe<Scalars['String']>;
  twitter_page_url?: Maybe<Scalars['String']>;
  /** Blog Author Url */
  url?: Maybe<Scalars['String']>;
};

export type BlogCategory = {
  __typename?: 'BlogCategory';
  /** Breadcrumbs, parent categories info. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** Blog Category Canonical URL */
  canonical_url?: Maybe<Scalars['String']>;
  /** Id of the Blog Post Category */
  category_id?: Maybe<Scalars['Int']>;
  /** Category Level */
  category_level?: Maybe<Scalars['Int']>;
  /** URL of the Blog Post Category */
  category_url?: Maybe<Scalars['String']>;
  /** Relative URL of the Blog Post Category */
  category_url_path?: Maybe<Scalars['String']>;
  /** Blog Category content */
  content?: Maybe<Scalars['String']>;
  /** Blog Category Content heading */
  content_heading?: Maybe<Scalars['String']>;
  /** Blog Category Custom layout */
  custom_layout?: Maybe<Scalars['String']>;
  /** Blog Category Custom layout update xml */
  custom_layout_update_xml?: Maybe<Scalars['String']>;
  /** Blog Category Custom theme */
  custom_theme?: Maybe<Scalars['String']>;
  /** Blog Category Custom theme from */
  custom_theme_from?: Maybe<Scalars['String']>;
  /** Blog Category Custom theme to */
  custom_theme_to?: Maybe<Scalars['String']>;
  /** Blog Category Display mode */
  display_mode?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  /** URL key of Blog Category */
  identifier?: Maybe<Scalars['String']>;
  /** Blog Category Include in menu */
  include_in_menu?: Maybe<Scalars['Int']>;
  /** Blog Category Is active */
  is_active?: Maybe<Scalars['Int']>;
  /** Blog Category Layout update xml */
  layout_update_xml?: Maybe<Scalars['String']>;
  /** Blog Category Meta description */
  meta_description?: Maybe<Scalars['String']>;
  /** Blog Category Meta keywords */
  meta_keywords?: Maybe<Scalars['String']>;
  /** Blog Category Meta title */
  meta_title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** Blog Category Page_layout */
  page_layout?: Maybe<Scalars['String']>;
  /** Id of the Blog Post Parent Category */
  parent_category_id?: Maybe<Scalars['Int']>;
  /** Blog Category Path */
  path?: Maybe<Scalars['String']>;
  /** Blog Category Position */
  position?: Maybe<Scalars['Int']>;
  /** Blog Category Posts Count */
  posts_count?: Maybe<Scalars['Int']>;
  /** Blog Category Posts sort by */
  posts_sort_by?: Maybe<Scalars['Int']>;
  /** Blog Category title */
  title?: Maybe<Scalars['String']>;
};

export type BlogComment = {
  __typename?: 'BlogComment';
  /** Blog  Comment Admin id */
  admin_id?: Maybe<Scalars['Int']>;
  /** Blog Comment Author email */
  author_email?: Maybe<Scalars['String']>;
  /** Blog Comment Author nickname */
  author_nickname?: Maybe<Scalars['String']>;
  /** Blog Comment Author type */
  author_type?: Maybe<Scalars['Int']>;
  /** Blog  Comment Comment id */
  comment_id?: Maybe<Scalars['Int']>;
  /** Blog Comment Creation time */
  creation_time?: Maybe<Scalars['String']>;
  /** Blog  Comment Customer id */
  customer_id?: Maybe<Scalars['Int']>;
  /** Blog  Comment Parent id */
  parent_id?: Maybe<Scalars['Int']>;
  /** Blog  Comment Comment id */
  post_id?: Maybe<Scalars['Int']>;
  /** Blog Comment Replies */
  replies?: Maybe<Array<Maybe<BlogComment>>>;
  /** Blog Comment Is active */
  status?: Maybe<Scalars['Int']>;
  /** Blog Comment Text */
  text?: Maybe<Scalars['String']>;
  /** Blog Comment Update time */
  update_time?: Maybe<Scalars['String']>;
};

export type BlogCommentsFilterInput = {
  /** The keyword required to perform a logical OR comparison */
  or?: InputMaybe<BlogCommentsFilterInput>;
  post_id?: InputMaybe<FilterTypeInput>;
};

export type BlogPost = {
  __typename?: 'BlogPost';
  /** Blog Post Author */
  author?: Maybe<BlogAuthor>;
  /** Blog Post Author Id */
  author_id?: Maybe<Scalars['Int']>;
  /** Blog Post Canonical URL */
  canonical_url?: Maybe<Scalars['String']>;
  /** An array of related categories */
  categories?: Maybe<Array<Maybe<BlogCategory>>>;
  /** Blog Post Category Id */
  category_id?: Maybe<Scalars['Int']>;
  /** Blog Post content */
  content?: Maybe<Scalars['String']>;
  /** Blog Post Content heading */
  content_heading?: Maybe<Scalars['String']>;
  /** Blog Post Creation time */
  creation_time?: Maybe<Scalars['String']>;
  /** Blog Post Custom layout */
  custom_layout?: Maybe<Scalars['String']>;
  /** Blog Post Custom layout update xml */
  custom_layout_update_xml?: Maybe<Scalars['String']>;
  /** Blog Post Custom theme */
  custom_theme?: Maybe<Scalars['String']>;
  /** Blog Post Custom theme from */
  custom_theme_from?: Maybe<Scalars['String']>;
  /** Blog Post Custom theme to */
  custom_theme_to?: Maybe<Scalars['String']>;
  /** Blog Post Featured image */
  featured_image?: Maybe<Scalars['String']>;
  /** Blog Post filtered content */
  filtered_content?: Maybe<Scalars['String']>;
  /** Blog Post first image */
  first_image?: Maybe<Scalars['String']>;
  /** URL key of Blog Post */
  identifier?: Maybe<Scalars['String']>;
  /** Blog Post Include in recent */
  include_in_recent?: Maybe<Scalars['Int']>;
  /** Blog Post Is active */
  is_active?: Maybe<Scalars['Int']>;
  /** Blog Post Is recent posts skip */
  is_recent_posts_skip?: Maybe<Scalars['Int']>;
  /** Blog Post Layout update xml */
  layout_update_xml?: Maybe<Scalars['String']>;
  /** Blog Post Media gallery */
  media_gallery?: Maybe<Scalars['String']>;
  /** Blog Post Meta description */
  meta_description?: Maybe<Scalars['String']>;
  /** Blog Post Meta keywords */
  meta_keywords?: Maybe<Scalars['String']>;
  /** Blog Post Meta title */
  meta_title?: Maybe<Scalars['String']>;
  /** Blog Post Og description */
  og_description?: Maybe<Scalars['String']>;
  /** Blog Post Og image */
  og_image?: Maybe<Scalars['String']>;
  /** Blog Post Og title */
  og_title?: Maybe<Scalars['String']>;
  /** Blog Post Og type */
  og_type?: Maybe<Scalars['String']>;
  /** Blog Post Page_layout */
  page_layout?: Maybe<Scalars['String']>;
  /** Blog Post Position */
  position?: Maybe<Scalars['Int']>;
  /** Id of the Blog Post */
  post_id?: Maybe<Scalars['Int']>;
  /** Blog Post URL */
  post_url?: Maybe<Scalars['String']>;
  /** Blog Post Publish time */
  publish_time?: Maybe<Scalars['String']>;
  /** Blog Related posts */
  related_posts?: Maybe<Array<Maybe<BlogPost>>>;
  /** Blog Related products */
  related_products?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Id of the Related Product (This attribute used only in filter) */
  relatedproduct_id?: Maybe<Scalars['Int']>;
  /** Blog Post Search Term */
  search?: Maybe<Scalars['String']>;
  /** Blog Post Secret */
  secret?: Maybe<Scalars['String']>;
  /** Blog Post Short content */
  short_content?: Maybe<Scalars['String']>;
  /** Blog Post short filtered content */
  short_filtered_content?: Maybe<Scalars['String']>;
  /** Blog Post Author Id */
  tag_id?: Maybe<Scalars['Int']>;
  /** An array of related tags */
  tags?: Maybe<Array<Maybe<BlogTag>>>;
  /** Blog Post title */
  title?: Maybe<Scalars['String']>;
  /** Blog Post Update time */
  update_time?: Maybe<Scalars['String']>;
  /** Blog Post Views count */
  views_count?: Maybe<Scalars['Int']>;
};

export type BlogPosts = {
  __typename?: 'BlogPosts';
  author_id?: Maybe<Scalars['Int']>;
  comment_count?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  content_heading?: Maybe<Scalars['String']>;
  featured_image?: Maybe<Scalars['String']>;
  featured_image_alt?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['Boolean']>;
  media_gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  position?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  short_content?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  view_count?: Maybe<Scalars['Int']>;
};

export type BlogPostsFilterInput = {
  author_id?: InputMaybe<FilterTypeInput>;
  category_id?: InputMaybe<FilterTypeInput>;
  content?: InputMaybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison */
  or?: InputMaybe<BlogPostsFilterInput>;
  post_id?: InputMaybe<FilterTypeInput>;
  publish_time?: InputMaybe<FilterTypeInput>;
  relatedproduct_id?: InputMaybe<FilterTypeInput>;
  search?: InputMaybe<FilterTypeInput>;
  tag_id?: InputMaybe<FilterTypeInput>;
  title?: InputMaybe<FilterTypeInput>;
};

export type BlogTag = {
  __typename?: 'BlogTag';
  /** Blog Tag content */
  content?: Maybe<Scalars['String']>;
  /** Blog Tag Custom layout */
  custom_layout?: Maybe<Scalars['String']>;
  /** Blog Tag Custom layout update xml */
  custom_layout_update_xml?: Maybe<Scalars['String']>;
  /** Blog Tag Custom theme */
  custom_theme?: Maybe<Scalars['String']>;
  /** Blog Tag Custom theme from */
  custom_theme_from?: Maybe<Scalars['String']>;
  /** Blog Tag Custom theme to */
  custom_theme_to?: Maybe<Scalars['String']>;
  /** URL key of Blog Tag */
  identifier?: Maybe<Scalars['String']>;
  /** Blog Tag Is active */
  is_active?: Maybe<Scalars['Int']>;
  /** Blog Tag Layout update xml */
  layout_update_xml?: Maybe<Scalars['String']>;
  /** Blog Tag Meta description */
  meta_description?: Maybe<Scalars['String']>;
  /** Blog Tag Meta keywords */
  meta_keywords?: Maybe<Scalars['String']>;
  /** Blog Tag Meta robots */
  meta_robots?: Maybe<Scalars['String']>;
  /** Blog Tag Meta title */
  meta_title?: Maybe<Scalars['String']>;
  /** Blog Tag Page_layout */
  page_layout?: Maybe<Scalars['String']>;
  /** Id of the Blog Post Tag */
  tag_id?: Maybe<Scalars['Int']>;
  /** URL of Blog Tag */
  tag_url?: Maybe<Scalars['String']>;
  /** Blog Tag title */
  title?: Maybe<Scalars['String']>;
};

export type Blogs = {
  __typename?: 'Blogs';
  blogposts?: Maybe<Array<Maybe<BlogPosts>>>;
  category?: Maybe<BlogCategory>;
};

export type BraintreeCcVaultInput = {
  device_data?: InputMaybe<Scalars['String']>;
  public_hash: Scalars['String'];
};

export type BraintreeInput = {
  /** Contains a fingerprint provided by Braintree JS SDK and should be sent with sale transaction details to the Braintree payment gateway. Should be specified only in a case if Kount (advanced fraud protection) is enabled for Braintree payment integration. */
  device_data?: InputMaybe<Scalars['String']>;
  /** States whether an entered by a customer credit/debit card should be tokenized for later usage. Required only if Vault is enabled for Braintree payment integration. */
  is_active_payment_token_enabler: Scalars['Boolean'];
  /** The one-time payment token generated by Braintree payment gateway based on card details. Required field to make sale transaction. */
  payment_method_nonce: Scalars['String'];
};

/** Breadcrumb item. */
export type Breadcrumb = {
  __typename?: 'Breadcrumb';
  /**
   * Category ID.
   * @deprecated Use the `category_uid` argument instead.
   */
  category_id?: Maybe<Scalars['Int']>;
  /** Category level. */
  category_level?: Maybe<Scalars['Int']>;
  /** Category name. */
  category_name?: Maybe<Scalars['String']>;
  /** The unique ID for a `Breadcrumb` object. */
  category_uid: Scalars['ID'];
  /** Category URL key. */
  category_url_key?: Maybe<Scalars['String']>;
  /** Category URL path. */
  category_url_path?: Maybe<Scalars['String']>;
};

export type BundleCartItem = CartItemInterface & {
  __typename?: 'BundleCartItem';
  bundle_options: Array<Maybe<SelectedBundleOption>>;
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** Current stock */
  exception?: Maybe<Scalars['String']>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  /** Is salable */
  is_salable?: Maybe<Scalars['Boolean']>;
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** Sellable qty */
  sellable_qty?: Maybe<Scalars['Int']>;
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

export type BundleCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'BundleCreditMemoItem';
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

export type BundleInvoiceItem = InvoiceItemInterface & {
  __typename?: 'BundleInvoiceItem';
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** BundleItem defines an individual item in a bundle product. */
export type BundleItem = {
  __typename?: 'BundleItem';
  /**
   * An ID assigned to each type of item in a bundle product.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** An array of additional options for this bundle item. */
  options?: Maybe<Array<Maybe<BundleItemOption>>>;
  /** he relative position of this item compared to the other bundle items. */
  position?: Maybe<Scalars['Int']>;
  /** Indicates whether the item must be included in the bundle. */
  required?: Maybe<Scalars['Boolean']>;
  /** The SKU of the bundle product. */
  sku?: Maybe<Scalars['String']>;
  /** The display name of the item. */
  title?: Maybe<Scalars['String']>;
  /** The input type that the customer uses to select the item. Examples include radio button and checkbox. */
  type?: Maybe<Scalars['String']>;
  /** The unique ID for a `BundleItem` object. */
  uid?: Maybe<Scalars['ID']>;
};

/** BundleItemOption defines characteristics and options for a specific bundle item. */
export type BundleItemOption = {
  __typename?: 'BundleItemOption';
  /** Indicates whether the customer can change the number of items for this option. */
  can_change_quantity?: Maybe<Scalars['Boolean']>;
  /**
   * The ID assigned to the bundled item option.
   * @deprecated Use `uid` instead
   */
  id?: Maybe<Scalars['Int']>;
  /** Indicates whether this option is the default option. */
  is_default?: Maybe<Scalars['Boolean']>;
  /** The text that identifies the bundled item option. */
  label?: Maybe<Scalars['String']>;
  /** When a bundle item contains multiple options, the relative position of this option compared to the other options. */
  position?: Maybe<Scalars['Int']>;
  /** The price of the selected option. */
  price?: Maybe<Scalars['Float']>;
  /** One of FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** Contains details about this product option. */
  product?: Maybe<ProductInterface>;
  /**
   * Indicates the quantity of this specific bundle item.
   * @deprecated The `qty` is deprecated. Use `quantity` instead.
   */
  qty?: Maybe<Scalars['Float']>;
  /** Indicates the quantity of this specific bundle item. */
  quantity?: Maybe<Scalars['Float']>;
  /** The unique ID for a `BundleItemOption` object. */
  uid: Scalars['ID'];
};

export type BundleOptionInput = {
  id: Scalars['Int'];
  quantity: Scalars['Float'];
  value: Array<InputMaybe<Scalars['String']>>;
};

export type BundleOrderItem = OrderItemInterface & {
  __typename?: 'BundleOrderItem';
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/** Defines basic features of a bundle product and contains multiple BundleItems */
export type BundleProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'BundleProduct';
  allow_amount_range?: Maybe<Scalars['Int']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  brands?: Maybe<Scalars['Int']>;
  can_redeem?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** Indicates whether the bundle product has a dynamic price. */
  dynamic_price?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the bundle product has a dynamic SK. */
  dynamic_sku?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the bundle product has a dynamically calculated weight. */
  dynamic_weight?: Maybe<Scalars['Boolean']>;
  expire_after_day?: Maybe<Scalars['String']>;
  fabric?: Maybe<Scalars['Int']>;
  facebook_age_group?: Maybe<Scalars['String']>;
  facebook_age_range?: Maybe<Scalars['String']>;
  facebook_baby_food_stage?: Maybe<Scalars['String']>;
  facebook_capacity?: Maybe<Scalars['String']>;
  facebook_color?: Maybe<Scalars['String']>;
  facebook_compatible_devices?: Maybe<Scalars['String']>;
  facebook_decor_style?: Maybe<Scalars['String']>;
  facebook_digital_zoom?: Maybe<Scalars['String']>;
  facebook_display_technology?: Maybe<Scalars['String']>;
  facebook_finish?: Maybe<Scalars['String']>;
  facebook_gemstone?: Maybe<Scalars['String']>;
  facebook_gender?: Maybe<Scalars['String']>;
  facebook_health_concern?: Maybe<Scalars['String']>;
  facebook_ingredients?: Maybe<Scalars['String']>;
  facebook_is_assembly_required?: Maybe<Scalars['String']>;
  facebook_material?: Maybe<Scalars['String']>;
  facebook_maximum_weight?: Maybe<Scalars['String']>;
  facebook_megapixels?: Maybe<Scalars['String']>;
  facebook_minimum_weight?: Maybe<Scalars['String']>;
  facebook_model?: Maybe<Scalars['String']>;
  facebook_number_of_licenses?: Maybe<Scalars['String']>;
  facebook_operating_system?: Maybe<Scalars['String']>;
  facebook_optical_zoom?: Maybe<Scalars['String']>;
  facebook_package_quantity?: Maybe<Scalars['String']>;
  facebook_pattern?: Maybe<Scalars['String']>;
  facebook_product_depth?: Maybe<Scalars['String']>;
  facebook_product_form?: Maybe<Scalars['String']>;
  facebook_product_height?: Maybe<Scalars['String']>;
  facebook_product_length?: Maybe<Scalars['String']>;
  facebook_product_weight?: Maybe<Scalars['String']>;
  facebook_product_width?: Maybe<Scalars['String']>;
  facebook_recommended_use?: Maybe<Scalars['String']>;
  facebook_resolution?: Maybe<Scalars['String']>;
  facebook_scent?: Maybe<Scalars['String']>;
  facebook_screen_size?: Maybe<Scalars['String']>;
  facebook_shoe_width?: Maybe<Scalars['String']>;
  facebook_size?: Maybe<Scalars['String']>;
  facebook_storage_capacity?: Maybe<Scalars['String']>;
  facebook_style?: Maybe<Scalars['String']>;
  facebook_system_requirements?: Maybe<Scalars['String']>;
  facebook_thread_count?: Maybe<Scalars['String']>;
  facebook_video_game_platform?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  gift_card_amounts?: Maybe<Scalars['String']>;
  gift_card_type?: Maybe<Scalars['Int']>;
  gift_code_pattern?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  gift_product_template?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** An array containing information about individual bundle items. */
  items?: Maybe<Array<Maybe<BundleItem>>>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  max_amount?: Maybe<Scalars['Float']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  min_amount?: Maybe<Scalars['Float']>;
  mpgiftcard_conditions?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  price_rate?: Maybe<Scalars['Float']>;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** One of PRICE_RANGE or AS_LOW_AS. */
  price_view?: Maybe<PriceViewEnum>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** Indicates whether to ship bundle items together or individually. */
  ship_bundle_items?: Maybe<ShipBundleItemsEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
  /** The CheckWishlistProduct  */
  wishlistData?: Maybe<WishlistData>;
};


/** Defines basic features of a bundle product and contains multiple BundleItems */
export type BundleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type BundleProductCartItemInput = {
  bundle_options: Array<InputMaybe<BundleOptionInput>>;
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  data: CartItemInput;
};

export type BundleShipmentItem = ShipmentItemInterface & {
  __typename?: 'BundleShipmentItem';
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The unique ID for a `ShipmentItemInterface` object */
  id: Scalars['ID'];
  /** Associated order item */
  order_item?: Maybe<OrderItemInterface>;
  /** Name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** Sale price for the base product */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** Number of shipped items */
  quantity_shipped: Scalars['Float'];
};

export type BundleWishlistItem = WishlistItemInterface & {
  __typename?: 'BundleWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** An array containing information about the selected bundle items */
  bundle_options?: Maybe<Array<Maybe<SelectedBundleOption>>>;
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

export type Cart = {
  __typename?: 'Cart';
  /**
   * An array of coupons that have been applied to the cart
   * @deprecated Use applied_coupons instead
   */
  applied_coupon?: Maybe<AppliedCoupon>;
  /** An array of `AppliedCoupon` objects. Each object contains the `code` text attribute, which specifies the coupon code */
  applied_coupons?: Maybe<Array<Maybe<AppliedCoupon>>>;
  /** Available payment methods */
  available_payment_methods?: Maybe<Array<Maybe<AvailablePaymentMethod>>>;
  billing_address?: Maybe<BillingCartAddress>;
  email?: Maybe<Scalars['String']>;
  /** The entered gift message for the cart */
  gift_message?: Maybe<GiftMessage>;
  /** The unique ID for a `Cart` object */
  id: Scalars['ID'];
  is_virtual: Scalars['Boolean'];
  items?: Maybe<Array<Maybe<CartItemInterface>>>;
  mp_giftcard_config?: Maybe<MpGiftCardConfig>;
  prices?: Maybe<CartPrices>;
  selected_payment_method?: Maybe<SelectedPaymentMethod>;
  shipping_addresses: Array<Maybe<ShippingCartAddress>>;
  total_quantity: Scalars['Float'];
};

export type CartAddressCountry = {
  __typename?: 'CartAddressCountry';
  code: Scalars['String'];
  label: Scalars['String'];
};

export type CartAddressInput = {
  address_label?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  company?: InputMaybe<Scalars['String']>;
  country_code: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  postcode?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  region_id?: InputMaybe<Scalars['Int']>;
  /** Determines whether to save the address in the customer's address book. The default value is true */
  save_in_address_book?: InputMaybe<Scalars['Boolean']>;
  street: Array<InputMaybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

export type CartAddressInterface = {
  address_label?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: CartAddressCountry;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<CartAddressRegion>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

export type CartAddressRegion = {
  __typename?: 'CartAddressRegion';
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  region_id?: Maybe<Scalars['Int']>;
};

export type CartDiscount = {
  __typename?: 'CartDiscount';
  amount: Money;
  label: Array<Maybe<Scalars['String']>>;
};

export type CartItemInput = {
  /** An array of entered options for the base product, such as personalization text */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For child products, the SKU of its parent product */
  parent_sku?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Float'];
  /** The selected options for the base product, such as color or size with  unique ID for a `CustomizableRadioOption`, `CustomizableDropDownOption`, `ConfigurableProductOptionsValues`, etc. objects */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sku: Scalars['String'];
};

export type CartItemInterface = {
  /** Current stock */
  exception?: Maybe<Scalars['String']>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  /** Is salable */
  is_salable?: Maybe<Scalars['Boolean']>;
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** Sellable qty */
  sellable_qty?: Maybe<Scalars['Int']>;
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

export type CartItemPrices = {
  __typename?: 'CartItemPrices';
  /** An array of discounts to be applied to the cart item */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Applied FPT to the cart item. */
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  price: Money;
  row_total: Money;
  row_total_including_tax: Money;
  /** The total of all discounts applied to the item */
  total_item_discount?: Maybe<Money>;
};

/** Deprecated: `cart_items` field of `ShippingCartAddress` returns now  `CartItemInterface` instead of `CartItemQuantity` */
export type CartItemQuantity = {
  __typename?: 'CartItemQuantity';
  /** @deprecated `cart_items` field of `ShippingCartAddress` returns now `CartItemInterface` instead of `CartItemQuantity` */
  cart_item_id: Scalars['Int'];
  /** @deprecated `cart_items` field of `ShippingCartAddress` returns now `CartItemInterface` instead of `CartItemQuantity` */
  quantity: Scalars['Float'];
};

export type CartItemSelectedOptionValuePrice = {
  __typename?: 'CartItemSelectedOptionValuePrice';
  type: PriceTypeEnum;
  units: Scalars['String'];
  value: Scalars['Float'];
};

export type CartItemUpdateInput = {
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']>;
  /** The unique ID for a `CartItemInterface` object */
  cart_item_uid?: InputMaybe<Scalars['ID']>;
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** Gift message details for the cart item */
  gift_message?: InputMaybe<GiftMessageInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type CartPrices = {
  __typename?: 'CartPrices';
  applied_taxes?: Maybe<Array<Maybe<CartTaxItem>>>;
  /** @deprecated Use discounts instead  */
  discount?: Maybe<CartDiscount>;
  /** An array of applied discounts */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  gift_card?: Maybe<MpGiftCardDiscounts>;
  gift_credit?: Maybe<Money>;
  grand_total?: Maybe<Money>;
  subtotal_excluding_tax?: Maybe<Money>;
  subtotal_including_tax?: Maybe<Money>;
  subtotal_with_discount_excluding_tax?: Maybe<Money>;
};

export type CartTaxItem = {
  __typename?: 'CartTaxItem';
  amount: Money;
  label: Scalars['String'];
};

/** An error encountered while adding an item to the the cart. */
export type CartUserInputError = {
  __typename?: 'CartUserInputError';
  /** Cart-specific error code */
  code: CartUserInputErrorType;
  /** A localized error message */
  message: Scalars['String'];
};

export enum CartUserInputErrorType {
  /** @deprecated  */
  InsufficientStock = 'INSUFFICIENT_STOCK',
  /** @deprecated  */
  NotSalable = 'NOT_SALABLE',
  /** @deprecated  */
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

export type Categories = {
  __typename?: 'Categories';
  /** The payment method assets */
  asset_urls?: Maybe<Array<Maybe<Assets>>>;
  /** The payment method identifier */
  identifier: Scalars['String'];
  /** The payment method name */
  name: Scalars['String'];
};

export type CategoryBlock = Block & {
  __typename?: 'CategoryBlock';
  categories?: Maybe<Array<Maybe<CategoryBlockTree>>>;
  name?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
};

export type CategoryBlockTree = {
  __typename?: 'CategoryBlockTree';
  category_id?: Maybe<Scalars['String']>;
  category_image?: Maybe<Scalars['String']>;
  category_name?: Maybe<Scalars['String']>;
  category_url_key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

/** CategoryFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type CategoryFilterInput = {
  /** Filter by the unique category ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use 'category_uid' to filter uniquely identifiers of categories. */
  ids?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the display name of the category. */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the part of the URL that identifies the category. */
  url_key?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the URL path for the category. */
  url_path?: InputMaybe<FilterEqualTypeInput>;
};

/** CategoryInterface contains the full set of attributes that can be returned in a category search. */
export type CategoryInterface = {
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Breadcrumbs, parent categories info. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  children_count?: Maybe<Scalars['String']>;
  /** Category CMS Block. */
  cms_block?: Maybe<CmsBlock>;
  /**
   * Timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  custom_layout_update_file?: Maybe<Scalars['String']>;
  /** The attribute to use for sorting. */
  default_sort_by?: Maybe<Scalars['String']>;
  /** An optional description of the category. */
  description?: Maybe<Scalars['String']>;
  display_mode?: Maybe<Scalars['String']>;
  filter_price_range?: Maybe<Scalars['Float']>;
  gst_cat_source?: Maybe<Scalars['String']>;
  gst_cat_source_after_minprice?: Maybe<Scalars['String']>;
  gst_cat_source_minprice?: Maybe<Scalars['Float']>;
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use the `uid` argument instead.
   */
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  include_in_menu?: Maybe<Scalars['Int']>;
  is_anchor?: Maybe<Scalars['Int']>;
  landing_page?: Maybe<Scalars['Int']>;
  /** Indicates the depth of the category within the tree. */
  level?: Maybe<Scalars['Int']>;
  magic_image?: Maybe<Scalars['String']>;
  magic_label?: Maybe<Scalars['String']>;
  magic_thumbnail?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  /** The display name of the category. */
  name?: Maybe<Scalars['String']>;
  /** Category Path. */
  path?: Maybe<Scalars['String']>;
  /** Category path in store. */
  path_in_store?: Maybe<Scalars['String']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position?: Maybe<Scalars['Int']>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count?: Maybe<Scalars['Int']>;
  /** The list of products assigned to the category. */
  products?: Maybe<CategoryProducts>;
  sync_to_facebook_catalog?: Maybe<Scalars['Int']>;
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** The url key assigned to the category. */
  url_key?: Maybe<Scalars['String']>;
  /** The url path assigned to the category. */
  url_path?: Maybe<Scalars['String']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
};


/** CategoryInterface contains the full set of attributes that can be returned in a category search. */
export type CategoryInterfaceProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};

/** The category products object returned in the Category query. */
export type CategoryProducts = {
  __typename?: 'CategoryProducts';
  /** An array of products that are assigned to the category. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']>;
};

/** A collection of CategoryTree objects and pagination information. */
export type CategoryResult = {
  __typename?: 'CategoryResult';
  /** A list of categories that match the filter criteria. */
  items?: Maybe<Array<Maybe<CategoryTree>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total number of categories that match the criteria. */
  total_count?: Maybe<Scalars['Int']>;
};

/** Category tree implementation */
export type CategoryTree = CategoryInterface & RoutableInterface & {
  __typename?: 'CategoryTree';
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Breadcrumbs, parent categories info. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** Child categories tree. */
  children?: Maybe<Array<Maybe<CategoryTree>>>;
  children_count?: Maybe<Scalars['String']>;
  /** Category CMS Block. */
  cms_block?: Maybe<CmsBlock>;
  /**
   * Timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  custom_layout_update_file?: Maybe<Scalars['String']>;
  /** The attribute to use for sorting. */
  default_sort_by?: Maybe<Scalars['String']>;
  /** An optional description of the category. */
  description?: Maybe<Scalars['String']>;
  display_mode?: Maybe<Scalars['String']>;
  filter_price_range?: Maybe<Scalars['Float']>;
  gst_cat_source?: Maybe<Scalars['String']>;
  gst_cat_source_after_minprice?: Maybe<Scalars['String']>;
  gst_cat_source_minprice?: Maybe<Scalars['Float']>;
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use the `uid` argument instead.
   */
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  include_in_menu?: Maybe<Scalars['Int']>;
  is_anchor?: Maybe<Scalars['Int']>;
  landing_page?: Maybe<Scalars['Int']>;
  /** Indicates the depth of the category within the tree. */
  level?: Maybe<Scalars['Int']>;
  magic_image?: Maybe<Scalars['String']>;
  magic_label?: Maybe<Scalars['String']>;
  magic_thumbnail?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  /** The display name of the category. */
  name?: Maybe<Scalars['String']>;
  /** Category Path. */
  path?: Maybe<Scalars['String']>;
  /** Category path in store. */
  path_in_store?: Maybe<Scalars['String']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position?: Maybe<Scalars['Int']>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count?: Maybe<Scalars['Int']>;
  /** The list of products assigned to the category. */
  products?: Maybe<CategoryProducts>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect */
  redirect_code: Scalars['Int'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  sync_to_facebook_catalog?: Maybe<Scalars['Int']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** The url key assigned to the category. */
  url_key?: Maybe<Scalars['String']>;
  /** The url path assigned to the category. */
  url_path?: Maybe<Scalars['String']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
};


/** Category tree implementation */
export type CategoryTreeProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};

export type ChatBoxInput = {
  /** customer comment. */
  comment?: InputMaybe<Scalars['String']>;
  /** customer email. */
  email: Scalars['String'];
  /** customer name. */
  name: Scalars['String'];
  /** customer phone number. */
  phone?: InputMaybe<Scalars['String']>;
  /** customer subject */
  subject?: InputMaybe<Scalars['String']>;
};

export type ChatBoxOutput = {
  __typename?: 'ChatBoxOutput';
  message?: Maybe<Scalars['String']>;
};

export type ChatData = {
  __typename?: 'ChatData';
  /** API space id */
  api_space_id?: Maybe<Scalars['String']>;
  /** Cookie name */
  cookie_name?: Maybe<Scalars['String']>;
  /** Is chat enabled */
  is_enabled?: Maybe<Scalars['Boolean']>;
};

export type CheckGiftCodeOutput = {
  __typename?: 'CheckGiftCodeOutput';
  balance?: Maybe<Scalars['String']>;
  balance_formatted?: Maybe<Scalars['String']>;
  expired_at?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  status_label?: Maybe<Scalars['String']>;
};

/** Defines all Checkout Agreement information */
export type CheckoutAgreement = {
  __typename?: 'CheckoutAgreement';
  /** Checkout Agreement identifier */
  agreement_id: Scalars['Int'];
  /** Checkout Agreement checkbox text */
  checkbox_text: Scalars['String'];
  /** Checkout Agreement content */
  content: Scalars['String'];
  /** Checkout Agreement content height */
  content_height?: Maybe<Scalars['String']>;
  /** Is Checkout Agreement content in HTML format */
  is_html: Scalars['Boolean'];
  mode: CheckoutAgreementMode;
  /** Checkout Agreement name */
  name: Scalars['String'];
};

export enum CheckoutAgreementMode {
  /** @deprecated  */
  Auto = 'AUTO',
  /** @deprecated  */
  Manual = 'MANUAL'
}

/** An error encountered while adding an item the the cart. */
export type CheckoutUserInputError = {
  __typename?: 'CheckoutUserInputError';
  /** Checkout-specific error code */
  code: CheckoutUserInputErrorCodes;
  /** Localized error message */
  message: Scalars['String'];
  /** Path to the input field that caused an error. See the GraphQL specification about path errors for details: http://spec.graphql.org/draft/#sec-Errors */
  path: Array<Maybe<Scalars['String']>>;
};

export enum CheckoutUserInputErrorCodes {
  /** @deprecated  */
  InsufficientStock = 'INSUFFICIENT_STOCK',
  /** @deprecated  */
  NotSalable = 'NOT_SALABLE',
  /** @deprecated  */
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  ReorderNotAvailable = 'REORDER_NOT_AVAILABLE',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

/** CMS block defines all CMS block information */
export type CmsBlock = {
  __typename?: 'CmsBlock';
  /** CMS block content */
  content?: Maybe<Scalars['String']>;
  /** CMS block identifier */
  identifier?: Maybe<Scalars['String']>;
  /** CMS block title */
  title?: Maybe<Scalars['String']>;
};

/** CMS blocks information */
export type CmsBlocks = {
  __typename?: 'CmsBlocks';
  /** An array of CMS blocks */
  items?: Maybe<Array<Maybe<CmsBlock>>>;
};

/** CMS page defines all CMS page information */
export type CmsPage = RoutableInterface & {
  __typename?: 'CmsPage';
  /** CMS page content */
  content?: Maybe<Scalars['String']>;
  /** CMS page content heading */
  content_heading?: Maybe<Scalars['String']>;
  /** Identifier of the CMS page */
  identifier?: Maybe<Scalars['String']>;
  /** CMS page meta description */
  meta_description?: Maybe<Scalars['String']>;
  /** CMS page meta keywords */
  meta_keywords?: Maybe<Scalars['String']>;
  /** CMS page meta title */
  meta_title?: Maybe<Scalars['String']>;
  /** CMS page content heading */
  page_layout?: Maybe<Scalars['String']>;
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect */
  redirect_code: Scalars['Int'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** CMS page title */
  title?: Maybe<Scalars['String']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /** URL key of CMS page */
  url_key?: Maybe<Scalars['String']>;
};

export type ColorSwatchData = SwatchDataInterface & {
  __typename?: 'ColorSwatchData';
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
};

export type ComparableAttribute = {
  __typename?: 'ComparableAttribute';
  /** An attribute code that is enabled for product comparisons */
  code: Scalars['String'];
  /** The label of the attribute code */
  label: Scalars['String'];
};

export type ComparableItem = {
  __typename?: 'ComparableItem';
  /** An array of product attributes that can be used to compare products */
  attributes: Array<Maybe<ProductAttribute>>;
  /** Contains details about a product in a compare list */
  product: ProductInterface;
  /** The unique ID of an item in a compare list */
  uid: Scalars['ID'];
};

export type CompareList = {
  __typename?: 'CompareList';
  /** An array of attributes that can be used for comparing products */
  attributes?: Maybe<Array<Maybe<ComparableAttribute>>>;
  /** The number of items in the compare list */
  item_count: Scalars['Int'];
  /** An array of products to compare */
  items?: Maybe<Array<Maybe<ComparableItem>>>;
  /** The unique ID assigned to the compare list */
  uid: Scalars['ID'];
};

export type ComplexTextValue = {
  __typename?: 'ComplexTextValue';
  /** HTML format */
  html: Scalars['String'];
};

/** ConfigurableAttributeOption contains the value_index (and other related information) assigned to a configurable product option */
export type ConfigurableAttributeOption = {
  __typename?: 'ConfigurableAttributeOption';
  /** The ID assigned to the attribute */
  code?: Maybe<Scalars['String']>;
  /** A string that describes the configurable attribute option */
  label?: Maybe<Scalars['String']>;
  /** The unique ID for a `ConfigurableAttributeOption` object */
  uid: Scalars['ID'];
  /** A unique index number assigned to the configurable product option */
  value_index?: Maybe<Scalars['Int']>;
};

export type ConfigurableCartItem = CartItemInterface & {
  __typename?: 'ConfigurableCartItem';
  configurable_options: Array<Maybe<SelectedConfigurableOption>>;
  /** Product details of the cart item */
  configured_variant: ProductInterface;
  customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>;
  /** Current stock */
  exception?: Maybe<Scalars['String']>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  /** Is salable */
  is_salable?: Maybe<Scalars['Boolean']>;
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** Sellable qty */
  sellable_qty?: Maybe<Scalars['Int']>;
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

/** Configurable option available for further selection based on current selection. */
export type ConfigurableOptionAvailableForSelection = {
  __typename?: 'ConfigurableOptionAvailableForSelection';
  /** Attribute code that uniquely identifies configurable option. */
  attribute_code: Scalars['String'];
  /** Configurable option values available for further selection. */
  option_value_uids: Array<Maybe<Scalars['ID']>>;
};

/** ConfigurableProduct defines basic features of a configurable product and its simple product variants */
export type ConfigurableProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'ConfigurableProduct';
  allow_amount_range?: Maybe<Scalars['Int']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  brands?: Maybe<Scalars['Int']>;
  can_redeem?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** An array of linked simple product items */
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOptions>>>;
  /** Specified configurable product options selection */
  configurable_product_options_selection?: Maybe<ConfigurableProductOptionsSelection>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  expire_after_day?: Maybe<Scalars['String']>;
  fabric?: Maybe<Scalars['Int']>;
  facebook_age_group?: Maybe<Scalars['String']>;
  facebook_age_range?: Maybe<Scalars['String']>;
  facebook_baby_food_stage?: Maybe<Scalars['String']>;
  facebook_capacity?: Maybe<Scalars['String']>;
  facebook_color?: Maybe<Scalars['String']>;
  facebook_compatible_devices?: Maybe<Scalars['String']>;
  facebook_decor_style?: Maybe<Scalars['String']>;
  facebook_digital_zoom?: Maybe<Scalars['String']>;
  facebook_display_technology?: Maybe<Scalars['String']>;
  facebook_finish?: Maybe<Scalars['String']>;
  facebook_gemstone?: Maybe<Scalars['String']>;
  facebook_gender?: Maybe<Scalars['String']>;
  facebook_health_concern?: Maybe<Scalars['String']>;
  facebook_ingredients?: Maybe<Scalars['String']>;
  facebook_is_assembly_required?: Maybe<Scalars['String']>;
  facebook_material?: Maybe<Scalars['String']>;
  facebook_maximum_weight?: Maybe<Scalars['String']>;
  facebook_megapixels?: Maybe<Scalars['String']>;
  facebook_minimum_weight?: Maybe<Scalars['String']>;
  facebook_model?: Maybe<Scalars['String']>;
  facebook_number_of_licenses?: Maybe<Scalars['String']>;
  facebook_operating_system?: Maybe<Scalars['String']>;
  facebook_optical_zoom?: Maybe<Scalars['String']>;
  facebook_package_quantity?: Maybe<Scalars['String']>;
  facebook_pattern?: Maybe<Scalars['String']>;
  facebook_product_depth?: Maybe<Scalars['String']>;
  facebook_product_form?: Maybe<Scalars['String']>;
  facebook_product_height?: Maybe<Scalars['String']>;
  facebook_product_length?: Maybe<Scalars['String']>;
  facebook_product_weight?: Maybe<Scalars['String']>;
  facebook_product_width?: Maybe<Scalars['String']>;
  facebook_recommended_use?: Maybe<Scalars['String']>;
  facebook_resolution?: Maybe<Scalars['String']>;
  facebook_scent?: Maybe<Scalars['String']>;
  facebook_screen_size?: Maybe<Scalars['String']>;
  facebook_shoe_width?: Maybe<Scalars['String']>;
  facebook_size?: Maybe<Scalars['String']>;
  facebook_storage_capacity?: Maybe<Scalars['String']>;
  facebook_style?: Maybe<Scalars['String']>;
  facebook_system_requirements?: Maybe<Scalars['String']>;
  facebook_thread_count?: Maybe<Scalars['String']>;
  facebook_video_game_platform?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  gift_card_amounts?: Maybe<Scalars['String']>;
  gift_card_type?: Maybe<Scalars['Int']>;
  gift_code_pattern?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  gift_product_template?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  max_amount?: Maybe<Scalars['Float']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  min_amount?: Maybe<Scalars['Float']>;
  mpgiftcard_conditions?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  price_rate?: Maybe<Scalars['Float']>;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /** An array of variants of products */
  variants?: Maybe<Array<Maybe<ConfigurableVariant>>>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
  /** The CheckWishlistProduct  */
  wishlistData?: Maybe<WishlistData>;
};


/** ConfigurableProduct defines basic features of a configurable product and its simple product variants */
export type ConfigurableProductConfigurable_Product_Options_SelectionArgs = {
  configurableOptionValueUids?: InputMaybe<Array<Scalars['ID']>>;
};


/** ConfigurableProduct defines basic features of a configurable product and its simple product variants */
export type ConfigurableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ConfigurableProductCartItemInput = {
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  data: CartItemInput;
  /** Configurable product SKU. */
  parent_sku?: InputMaybe<Scalars['String']>;
  /** Deprecated. Use CartItemInput.sku instead. */
  variant_sku?: InputMaybe<Scalars['String']>;
};

export type ConfigurableProductOption = {
  __typename?: 'ConfigurableProductOption';
  attribute_code: Scalars['String'];
  label: Scalars['String'];
  uid: Scalars['ID'];
  values?: Maybe<Array<Maybe<ConfigurableProductOptionValue>>>;
};

export type ConfigurableProductOptionValue = {
  __typename?: 'ConfigurableProductOptionValue';
  is_available: Scalars['Boolean'];
  is_use_default: Scalars['Boolean'];
  label: Scalars['String'];
  swatch?: Maybe<SwatchDataInterface>;
  uid: Scalars['ID'];
};

/** ConfigurableProductOptions defines configurable attributes for the specified product */
export type ConfigurableProductOptions = {
  __typename?: 'ConfigurableProductOptions';
  /** A string that identifies the attribute */
  attribute_code?: Maybe<Scalars['String']>;
  /**
   * The ID assigned to the attribute
   * @deprecated Use attribute_uid instead
   */
  attribute_id?: Maybe<Scalars['String']>;
  /**
   * The ID assigned to the attribute
   * @deprecated Use attribute_uid instead
   */
  attribute_id_v2?: Maybe<Scalars['Int']>;
  /** The unique ID for a `Attribute` object */
  attribute_uid: Scalars['ID'];
  /**
   * The configurable option ID number assigned by the system
   * @deprecated Use uid instead
   */
  id?: Maybe<Scalars['Int']>;
  /** A string that describes the configurable product option, which is displayed on the UI */
  label?: Maybe<Scalars['String']>;
  /** A number that indicates the order in which the attribute is displayed */
  position?: Maybe<Scalars['Int']>;
  /**
   * This is the same as a product's id field
   * @deprecated `product_id` is not needed and can be obtained from it's parent
   */
  product_id?: Maybe<Scalars['Int']>;
  /** The unique ID for a `ConfigurableProductOptions` object */
  uid: Scalars['ID'];
  /** Indicates whether the option is the default */
  use_default?: Maybe<Scalars['Boolean']>;
  /** An array that defines the value_index codes assigned to the configurable product */
  values?: Maybe<Array<Maybe<ConfigurableProductOptionsValues>>>;
};

/** Metadata corresponding to the configurable options selection. */
export type ConfigurableProductOptionsSelection = {
  __typename?: 'ConfigurableProductOptionsSelection';
  /** Configurable options available for further selection based on current selection. */
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOption>>>;
  /** Product images and videos corresponding to the specified configurable options selection. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /** Configurable options available for further selection based on current selection. */
  options_available_for_selection?: Maybe<Array<Maybe<ConfigurableOptionAvailableForSelection>>>;
  /** Variant represented by the specified configurable options selection. It is expected to be null, until selections are made for each configurable option. */
  variant?: Maybe<SimpleProduct>;
};

/** ConfigurableProductOptionsValues contains the index number assigned to a configurable product option */
export type ConfigurableProductOptionsValues = {
  __typename?: 'ConfigurableProductOptionsValues';
  /** The label of the product on the default store */
  default_label?: Maybe<Scalars['String']>;
  /** The label of the product */
  label?: Maybe<Scalars['String']>;
  /** The label of the product on the current store */
  store_label?: Maybe<Scalars['String']>;
  /** Swatch data for configurable product option */
  swatch_data?: Maybe<SwatchDataInterface>;
  /** The unique ID for a `ConfigurableProductOptionsValues` object */
  uid?: Maybe<Scalars['ID']>;
  /** Indicates whether to use the default_label */
  use_default_value?: Maybe<Scalars['Boolean']>;
  /**
   * A unique index number assigned to the configurable product option
   * @deprecated Use `uid` instead
   */
  value_index?: Maybe<Scalars['Int']>;
};

/** An array containing all the simple product variants of a configurable product */
export type ConfigurableVariant = {
  __typename?: 'ConfigurableVariant';
  attributes?: Maybe<Array<Maybe<ConfigurableAttributeOption>>>;
  product?: Maybe<SimpleProduct>;
};

/** A configurable product wish list item */
export type ConfigurableWishlistItem = WishlistItemInterface & {
  __typename?: 'ConfigurableWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** The SKU of the simple product corresponding to a set of selected configurable options */
  child_sku: Scalars['String'];
  /** An array of selected configurable options */
  configurable_options?: Maybe<Array<Maybe<SelectedConfigurableOption>>>;
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

export type Country = {
  __typename?: 'Country';
  available_regions?: Maybe<Array<Maybe<Region>>>;
  full_name_english?: Maybe<Scalars['String']>;
  full_name_locale?: Maybe<Scalars['String']>;
  /** The unique ID for a `Country` object. */
  id?: Maybe<Scalars['String']>;
  three_letter_abbreviation?: Maybe<Scalars['String']>;
  two_letter_abbreviation?: Maybe<Scalars['String']>;
};

/** The list of countries codes */
export enum CountryCodeEnum {
  /**
   * Andorra
   * @deprecated
   */
  Ad = 'AD',
  /**
   * United Arab Emirates
   * @deprecated
   */
  Ae = 'AE',
  /**
   * Afghanistan
   * @deprecated
   */
  Af = 'AF',
  /**
   * Antigua & Barbuda
   * @deprecated
   */
  Ag = 'AG',
  /**
   * Anguilla
   * @deprecated
   */
  Ai = 'AI',
  /**
   * Albania
   * @deprecated
   */
  Al = 'AL',
  /**
   * Armenia
   * @deprecated
   */
  Am = 'AM',
  /**
   * Netherlands Antilles
   * @deprecated
   */
  An = 'AN',
  /**
   * Angola
   * @deprecated
   */
  Ao = 'AO',
  /**
   * Antarctica
   * @deprecated
   */
  Aq = 'AQ',
  /**
   * Argentina
   * @deprecated
   */
  Ar = 'AR',
  /**
   * American Samoa
   * @deprecated
   */
  As = 'AS',
  /**
   * Austria
   * @deprecated
   */
  At = 'AT',
  /**
   * Australia
   * @deprecated
   */
  Au = 'AU',
  /**
   * Aruba
   * @deprecated
   */
  Aw = 'AW',
  /**
   * Åland Islands
   * @deprecated
   */
  Ax = 'AX',
  /**
   * Azerbaijan
   * @deprecated
   */
  Az = 'AZ',
  /**
   * Bosnia & Herzegovina
   * @deprecated
   */
  Ba = 'BA',
  /**
   * Barbados
   * @deprecated
   */
  Bb = 'BB',
  /**
   * Bangladesh
   * @deprecated
   */
  Bd = 'BD',
  /**
   * Belgium
   * @deprecated
   */
  Be = 'BE',
  /**
   * Burkina Faso
   * @deprecated
   */
  Bf = 'BF',
  /**
   * Bulgaria
   * @deprecated
   */
  Bg = 'BG',
  /**
   * Bahrain
   * @deprecated
   */
  Bh = 'BH',
  /**
   * Burundi
   * @deprecated
   */
  Bi = 'BI',
  /**
   * Benin
   * @deprecated
   */
  Bj = 'BJ',
  /**
   * St. Barthélemy
   * @deprecated
   */
  Bl = 'BL',
  /**
   * Bermuda
   * @deprecated
   */
  Bm = 'BM',
  /**
   * Brunei
   * @deprecated
   */
  Bn = 'BN',
  /**
   * Bolivia
   * @deprecated
   */
  Bo = 'BO',
  /**
   * Brazil
   * @deprecated
   */
  Br = 'BR',
  /**
   * Bahamas
   * @deprecated
   */
  Bs = 'BS',
  /**
   * Bhutan
   * @deprecated
   */
  Bt = 'BT',
  /**
   * Bouvet Island
   * @deprecated
   */
  Bv = 'BV',
  /**
   * Botswana
   * @deprecated
   */
  Bw = 'BW',
  /**
   * Belarus
   * @deprecated
   */
  By = 'BY',
  /**
   * Belize
   * @deprecated
   */
  Bz = 'BZ',
  /**
   * Canada
   * @deprecated
   */
  Ca = 'CA',
  /**
   * Cocos (Keeling) Islands
   * @deprecated
   */
  Cc = 'CC',
  /**
   * Congo-Kinshasa
   * @deprecated
   */
  Cd = 'CD',
  /**
   * Central African Republic
   * @deprecated
   */
  Cf = 'CF',
  /**
   * Congo-Brazzaville
   * @deprecated
   */
  Cg = 'CG',
  /**
   * Switzerland
   * @deprecated
   */
  Ch = 'CH',
  /**
   * Côte d’Ivoire
   * @deprecated
   */
  Ci = 'CI',
  /**
   * Cook Islands
   * @deprecated
   */
  Ck = 'CK',
  /**
   * Chile
   * @deprecated
   */
  Cl = 'CL',
  /**
   * Cameroon
   * @deprecated
   */
  Cm = 'CM',
  /**
   * China
   * @deprecated
   */
  Cn = 'CN',
  /**
   * Colombia
   * @deprecated
   */
  Co = 'CO',
  /**
   * Costa Rica
   * @deprecated
   */
  Cr = 'CR',
  /**
   * Cuba
   * @deprecated
   */
  Cu = 'CU',
  /**
   * Cape Verde
   * @deprecated
   */
  Cv = 'CV',
  /**
   * Christmas Island
   * @deprecated
   */
  Cx = 'CX',
  /**
   * Cyprus
   * @deprecated
   */
  Cy = 'CY',
  /**
   * Czech Republic
   * @deprecated
   */
  Cz = 'CZ',
  /**
   * Germany
   * @deprecated
   */
  De = 'DE',
  /**
   * Djibouti
   * @deprecated
   */
  Dj = 'DJ',
  /**
   * Denmark
   * @deprecated
   */
  Dk = 'DK',
  /**
   * Dominica
   * @deprecated
   */
  Dm = 'DM',
  /**
   * Dominican Republic
   * @deprecated
   */
  Do = 'DO',
  /**
   * Algeria
   * @deprecated
   */
  Dz = 'DZ',
  /**
   * Ecuador
   * @deprecated
   */
  Ec = 'EC',
  /**
   * Estonia
   * @deprecated
   */
  Ee = 'EE',
  /**
   * Egypt
   * @deprecated
   */
  Eg = 'EG',
  /**
   * Western Sahara
   * @deprecated
   */
  Eh = 'EH',
  /**
   * Eritrea
   * @deprecated
   */
  Er = 'ER',
  /**
   * Spain
   * @deprecated
   */
  Es = 'ES',
  /**
   * Ethiopia
   * @deprecated
   */
  Et = 'ET',
  /**
   * Finland
   * @deprecated
   */
  Fi = 'FI',
  /**
   * Fiji
   * @deprecated
   */
  Fj = 'FJ',
  /**
   * Falkland Islands
   * @deprecated
   */
  Fk = 'FK',
  /**
   * Micronesia
   * @deprecated
   */
  Fm = 'FM',
  /**
   * Faroe Islands
   * @deprecated
   */
  Fo = 'FO',
  /**
   * France
   * @deprecated
   */
  Fr = 'FR',
  /**
   * Gabon
   * @deprecated
   */
  Ga = 'GA',
  /**
   * United Kingdom
   * @deprecated
   */
  Gb = 'GB',
  /**
   * Grenada
   * @deprecated
   */
  Gd = 'GD',
  /**
   * Georgia
   * @deprecated
   */
  Ge = 'GE',
  /**
   * French Guiana
   * @deprecated
   */
  Gf = 'GF',
  /**
   * Guernsey
   * @deprecated
   */
  Gg = 'GG',
  /**
   * Ghana
   * @deprecated
   */
  Gh = 'GH',
  /**
   * Gibraltar
   * @deprecated
   */
  Gi = 'GI',
  /**
   * Greenland
   * @deprecated
   */
  Gl = 'GL',
  /**
   * Gambia
   * @deprecated
   */
  Gm = 'GM',
  /**
   * Guinea
   * @deprecated
   */
  Gn = 'GN',
  /**
   * Guadeloupe
   * @deprecated
   */
  Gp = 'GP',
  /**
   * Equatorial Guinea
   * @deprecated
   */
  Gq = 'GQ',
  /**
   * Greece
   * @deprecated
   */
  Gr = 'GR',
  /**
   * South Georgia & South Sandwich Islands
   * @deprecated
   */
  Gs = 'GS',
  /**
   * Guatemala
   * @deprecated
   */
  Gt = 'GT',
  /**
   * Guam
   * @deprecated
   */
  Gu = 'GU',
  /**
   * Guinea-Bissau
   * @deprecated
   */
  Gw = 'GW',
  /**
   * Guyana
   * @deprecated
   */
  Gy = 'GY',
  /**
   * Hong Kong SAR China
   * @deprecated
   */
  Hk = 'HK',
  /**
   * Heard &amp; McDonald Islands
   * @deprecated
   */
  Hm = 'HM',
  /**
   * Honduras
   * @deprecated
   */
  Hn = 'HN',
  /**
   * Croatia
   * @deprecated
   */
  Hr = 'HR',
  /**
   * Haiti
   * @deprecated
   */
  Ht = 'HT',
  /**
   * Hungary
   * @deprecated
   */
  Hu = 'HU',
  /**
   * Indonesia
   * @deprecated
   */
  Id = 'ID',
  /**
   * Ireland
   * @deprecated
   */
  Ie = 'IE',
  /**
   * Israel
   * @deprecated
   */
  Il = 'IL',
  /**
   * Isle of Man
   * @deprecated
   */
  Im = 'IM',
  /**
   * India
   * @deprecated
   */
  In = 'IN',
  /**
   * British Indian Ocean Territory
   * @deprecated
   */
  Io = 'IO',
  /**
   * Iraq
   * @deprecated
   */
  Iq = 'IQ',
  /**
   * Iran
   * @deprecated
   */
  Ir = 'IR',
  /**
   * Iceland
   * @deprecated
   */
  Is = 'IS',
  /**
   * Italy
   * @deprecated
   */
  It = 'IT',
  /**
   * Jersey
   * @deprecated
   */
  Je = 'JE',
  /**
   * Jamaica
   * @deprecated
   */
  Jm = 'JM',
  /**
   * Jordan
   * @deprecated
   */
  Jo = 'JO',
  /**
   * Japan
   * @deprecated
   */
  Jp = 'JP',
  /**
   * Kenya
   * @deprecated
   */
  Ke = 'KE',
  /**
   * Kyrgyzstan
   * @deprecated
   */
  Kg = 'KG',
  /**
   * Cambodia
   * @deprecated
   */
  Kh = 'KH',
  /**
   * Kiribati
   * @deprecated
   */
  Ki = 'KI',
  /**
   * Comoros
   * @deprecated
   */
  Km = 'KM',
  /**
   * St. Kitts & Nevis
   * @deprecated
   */
  Kn = 'KN',
  /**
   * North Korea
   * @deprecated
   */
  Kp = 'KP',
  /**
   * South Korea
   * @deprecated
   */
  Kr = 'KR',
  /**
   * Kuwait
   * @deprecated
   */
  Kw = 'KW',
  /**
   * Cayman Islands
   * @deprecated
   */
  Ky = 'KY',
  /**
   * Kazakhstan
   * @deprecated
   */
  Kz = 'KZ',
  /**
   * Laos
   * @deprecated
   */
  La = 'LA',
  /**
   * Lebanon
   * @deprecated
   */
  Lb = 'LB',
  /**
   * St. Lucia
   * @deprecated
   */
  Lc = 'LC',
  /**
   * Liechtenstein
   * @deprecated
   */
  Li = 'LI',
  /**
   * Sri Lanka
   * @deprecated
   */
  Lk = 'LK',
  /**
   * Liberia
   * @deprecated
   */
  Lr = 'LR',
  /**
   * Lesotho
   * @deprecated
   */
  Ls = 'LS',
  /**
   * Lithuania
   * @deprecated
   */
  Lt = 'LT',
  /**
   * Luxembourg
   * @deprecated
   */
  Lu = 'LU',
  /**
   * Latvia
   * @deprecated
   */
  Lv = 'LV',
  /**
   * Libya
   * @deprecated
   */
  Ly = 'LY',
  /**
   * Morocco
   * @deprecated
   */
  Ma = 'MA',
  /**
   * Monaco
   * @deprecated
   */
  Mc = 'MC',
  /**
   * Moldova
   * @deprecated
   */
  Md = 'MD',
  /**
   * Montenegro
   * @deprecated
   */
  Me = 'ME',
  /**
   * St. Martin
   * @deprecated
   */
  Mf = 'MF',
  /**
   * Madagascar
   * @deprecated
   */
  Mg = 'MG',
  /**
   * Marshall Islands
   * @deprecated
   */
  Mh = 'MH',
  /**
   * Macedonia
   * @deprecated
   */
  Mk = 'MK',
  /**
   * Mali
   * @deprecated
   */
  Ml = 'ML',
  /**
   * Myanmar (Burma)
   * @deprecated
   */
  Mm = 'MM',
  /**
   * Mongolia
   * @deprecated
   */
  Mn = 'MN',
  /**
   * Macau SAR China
   * @deprecated
   */
  Mo = 'MO',
  /**
   * Northern Mariana Islands
   * @deprecated
   */
  Mp = 'MP',
  /**
   * Martinique
   * @deprecated
   */
  Mq = 'MQ',
  /**
   * Mauritania
   * @deprecated
   */
  Mr = 'MR',
  /**
   * Montserrat
   * @deprecated
   */
  Ms = 'MS',
  /**
   * Malta
   * @deprecated
   */
  Mt = 'MT',
  /**
   * Mauritius
   * @deprecated
   */
  Mu = 'MU',
  /**
   * Maldives
   * @deprecated
   */
  Mv = 'MV',
  /**
   * Malawi
   * @deprecated
   */
  Mw = 'MW',
  /**
   * Mexico
   * @deprecated
   */
  Mx = 'MX',
  /**
   * Malaysia
   * @deprecated
   */
  My = 'MY',
  /**
   * Mozambique
   * @deprecated
   */
  Mz = 'MZ',
  /**
   * Namibia
   * @deprecated
   */
  Na = 'NA',
  /**
   * New Caledonia
   * @deprecated
   */
  Nc = 'NC',
  /**
   * Niger
   * @deprecated
   */
  Ne = 'NE',
  /**
   * Norfolk Island
   * @deprecated
   */
  Nf = 'NF',
  /**
   * Nigeria
   * @deprecated
   */
  Ng = 'NG',
  /**
   * Nicaragua
   * @deprecated
   */
  Ni = 'NI',
  /**
   * Netherlands
   * @deprecated
   */
  Nl = 'NL',
  /**
   * Norway
   * @deprecated
   */
  No = 'NO',
  /**
   * Nepal
   * @deprecated
   */
  Np = 'NP',
  /**
   * Nauru
   * @deprecated
   */
  Nr = 'NR',
  /**
   * Niue
   * @deprecated
   */
  Nu = 'NU',
  /**
   * New Zealand
   * @deprecated
   */
  Nz = 'NZ',
  /**
   * Oman
   * @deprecated
   */
  Om = 'OM',
  /**
   * Panama
   * @deprecated
   */
  Pa = 'PA',
  /**
   * Peru
   * @deprecated
   */
  Pe = 'PE',
  /**
   * French Polynesia
   * @deprecated
   */
  Pf = 'PF',
  /**
   * Papua New Guinea
   * @deprecated
   */
  Pg = 'PG',
  /**
   * Philippines
   * @deprecated
   */
  Ph = 'PH',
  /**
   * Pakistan
   * @deprecated
   */
  Pk = 'PK',
  /**
   * Poland
   * @deprecated
   */
  Pl = 'PL',
  /**
   * St. Pierre & Miquelon
   * @deprecated
   */
  Pm = 'PM',
  /**
   * Pitcairn Islands
   * @deprecated
   */
  Pn = 'PN',
  /**
   * Palestinian Territories
   * @deprecated
   */
  Ps = 'PS',
  /**
   * Portugal
   * @deprecated
   */
  Pt = 'PT',
  /**
   * Palau
   * @deprecated
   */
  Pw = 'PW',
  /**
   * Paraguay
   * @deprecated
   */
  Py = 'PY',
  /**
   * Qatar
   * @deprecated
   */
  Qa = 'QA',
  /**
   * Réunion
   * @deprecated
   */
  Re = 'RE',
  /**
   * Romania
   * @deprecated
   */
  Ro = 'RO',
  /**
   * Serbia
   * @deprecated
   */
  Rs = 'RS',
  /**
   * Russia
   * @deprecated
   */
  Ru = 'RU',
  /**
   * Rwanda
   * @deprecated
   */
  Rw = 'RW',
  /**
   * Saudi Arabia
   * @deprecated
   */
  Sa = 'SA',
  /**
   * Solomon Islands
   * @deprecated
   */
  Sb = 'SB',
  /**
   * Seychelles
   * @deprecated
   */
  Sc = 'SC',
  /**
   * Sudan
   * @deprecated
   */
  Sd = 'SD',
  /**
   * Sweden
   * @deprecated
   */
  Se = 'SE',
  /**
   * Singapore
   * @deprecated
   */
  Sg = 'SG',
  /**
   * St. Helena
   * @deprecated
   */
  Sh = 'SH',
  /**
   * Slovenia
   * @deprecated
   */
  Si = 'SI',
  /**
   * Svalbard & Jan Mayen
   * @deprecated
   */
  Sj = 'SJ',
  /**
   * Slovakia
   * @deprecated
   */
  Sk = 'SK',
  /**
   * Sierra Leone
   * @deprecated
   */
  Sl = 'SL',
  /**
   * San Marino
   * @deprecated
   */
  Sm = 'SM',
  /**
   * Senegal
   * @deprecated
   */
  Sn = 'SN',
  /**
   * Somalia
   * @deprecated
   */
  So = 'SO',
  /**
   * Suriname
   * @deprecated
   */
  Sr = 'SR',
  /**
   * São Tomé & Príncipe
   * @deprecated
   */
  St = 'ST',
  /**
   * El Salvador
   * @deprecated
   */
  Sv = 'SV',
  /**
   * Syria
   * @deprecated
   */
  Sy = 'SY',
  /**
   * Swaziland
   * @deprecated
   */
  Sz = 'SZ',
  /**
   * Turks & Caicos Islands
   * @deprecated
   */
  Tc = 'TC',
  /**
   * Chad
   * @deprecated
   */
  Td = 'TD',
  /**
   * French Southern Territories
   * @deprecated
   */
  Tf = 'TF',
  /**
   * Togo
   * @deprecated
   */
  Tg = 'TG',
  /**
   * Thailand
   * @deprecated
   */
  Th = 'TH',
  /**
   * Tajikistan
   * @deprecated
   */
  Tj = 'TJ',
  /**
   * Tokelau
   * @deprecated
   */
  Tk = 'TK',
  /**
   * Timor-Leste
   * @deprecated
   */
  Tl = 'TL',
  /**
   * Turkmenistan
   * @deprecated
   */
  Tm = 'TM',
  /**
   * Tunisia
   * @deprecated
   */
  Tn = 'TN',
  /**
   * Tonga
   * @deprecated
   */
  To = 'TO',
  /**
   * Turkey
   * @deprecated
   */
  Tr = 'TR',
  /**
   * Trinidad & Tobago
   * @deprecated
   */
  Tt = 'TT',
  /**
   * Tuvalu
   * @deprecated
   */
  Tv = 'TV',
  /**
   * Taiwan
   * @deprecated
   */
  Tw = 'TW',
  /**
   * Tanzania
   * @deprecated
   */
  Tz = 'TZ',
  /**
   * Ukraine
   * @deprecated
   */
  Ua = 'UA',
  /**
   * Uganda
   * @deprecated
   */
  Ug = 'UG',
  /**
   * U.S. Outlying Islands
   * @deprecated
   */
  Um = 'UM',
  /**
   * United States
   * @deprecated
   */
  Us = 'US',
  /**
   * Uruguay
   * @deprecated
   */
  Uy = 'UY',
  /**
   * Uzbekistan
   * @deprecated
   */
  Uz = 'UZ',
  /**
   * Vatican City
   * @deprecated
   */
  Va = 'VA',
  /**
   * St. Vincent & Grenadines
   * @deprecated
   */
  Vc = 'VC',
  /**
   * Venezuela
   * @deprecated
   */
  Ve = 'VE',
  /**
   * British Virgin Islands
   * @deprecated
   */
  Vg = 'VG',
  /**
   * U.S. Virgin Islands
   * @deprecated
   */
  Vi = 'VI',
  /**
   * Vietnam
   * @deprecated
   */
  Vn = 'VN',
  /**
   * Vanuatu
   * @deprecated
   */
  Vu = 'VU',
  /**
   * Wallis & Futuna
   * @deprecated
   */
  Wf = 'WF',
  /**
   * Samoa
   * @deprecated
   */
  Ws = 'WS',
  /**
   * Yemen
   * @deprecated
   */
  Ye = 'YE',
  /**
   * Mayotte
   * @deprecated
   */
  Yt = 'YT',
  /**
   * South Africa
   * @deprecated
   */
  Za = 'ZA',
  /**
   * Zambia
   * @deprecated
   */
  Zm = 'ZM',
  /**
   * Zimbabwe
   * @deprecated
   */
  Zw = 'ZW'
}

export type CreateAlbumInput = {
  /** Bride Name. */
  brides_name?: InputMaybe<Scalars['String']>;
  /** image description. */
  description?: InputMaybe<Scalars['String']>;
  /** Email. */
  email: Scalars['String'];
  /** Grooms Name. */
  grooms_name?: InputMaybe<Scalars['String']>;
  /** Mobile Number. */
  mobilenumber: Scalars['String'];
};

export type CreateAlbumOutput = {
  __typename?: 'CreateAlbumOutput';
  album_id?: Maybe<Scalars['Int']>;
};

export type CreateCompareListInput = {
  /** An array of product IDs to add to the compare list */
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type CreatePayflowProTokenOutput = {
  __typename?: 'CreatePayflowProTokenOutput';
  response_message: Scalars['String'];
  result: Scalars['Int'];
  result_code: Scalars['Int'];
  secure_token: Scalars['String'];
  secure_token_id: Scalars['String'];
};

export type CreateProductReviewInput = {
  /** The customer's nickname. Defaults to the customer name, if logged in */
  nickname: Scalars['String'];
  /** Ratings details by category. e.g price: 5, quality: 4 etc */
  ratings: Array<InputMaybe<ProductReviewRatingInput>>;
  /** The SKU of the reviewed product */
  sku: Scalars['String'];
  /** The summary (title) of the review */
  summary: Scalars['String'];
  /** The review text. */
  text: Scalars['String'];
};

export type CreateProductReviewOutput = {
  __typename?: 'CreateProductReviewOutput';
  /** Contains the completed product review */
  review: ProductReview;
};

/** Required fields for Payflow Pro and Payments Pro credit card payments */
export type CreditCardDetailsInput = {
  /** Credit card expiration month */
  cc_exp_month: Scalars['Int'];
  /** Credit card expiration year */
  cc_exp_year: Scalars['Int'];
  /** Last 4 digits of the credit card */
  cc_last_4: Scalars['Int'];
  /** Credit card type */
  cc_type: Scalars['String'];
};

/** Credit memo details */
export type CreditMemo = {
  __typename?: 'CreditMemo';
  /** Comments on the credit memo */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `CreditMemo` object */
  id: Scalars['ID'];
  /** An array containing details about refunded items */
  items?: Maybe<Array<Maybe<CreditMemoItemInterface>>>;
  /** The sequential credit memo number */
  number: Scalars['String'];
  /** Contains details about the total refunded amount */
  total?: Maybe<CreditMemoTotal>;
};

export type CreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'CreditMemoItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

/** Credit memo item details */
export type CreditMemoItemInterface = {
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

/** Credit memo price details */
export type CreditMemoTotal = {
  __typename?: 'CreditMemoTotal';
  /** An adjustment manually applied to the order */
  adjustment: Money;
  /** The final base grand total amount in the base currency */
  base_grand_total: Money;
  /** The applied discounts to the credit memo */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes */
  grand_total: Money;
  /** Contains details about the shipping and handling costs for the credit memo */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes */
  subtotal: Money;
  /** The credit memo tax details */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the credit memo */
  total_shipping: Money;
  /** The amount of tax applied to the credit memo */
  total_tax: Money;
};

export type Currency = {
  __typename?: 'Currency';
  available_currency_codes?: Maybe<Array<Maybe<Scalars['String']>>>;
  base_currency_code?: Maybe<Scalars['String']>;
  base_currency_symbol?: Maybe<Scalars['String']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_code?: Maybe<Scalars['String']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_symbol`. */
  default_display_currecy_symbol?: Maybe<Scalars['String']>;
  default_display_currency_code?: Maybe<Scalars['String']>;
  default_display_currency_symbol?: Maybe<Scalars['String']>;
  exchange_rates?: Maybe<Array<Maybe<ExchangeRate>>>;
};

/** The list of available currency codes */
export enum CurrencyEnum {
  /** @deprecated  */
  Aed = 'AED',
  /** @deprecated  */
  Afn = 'AFN',
  /** @deprecated  */
  All = 'ALL',
  /** @deprecated  */
  Amd = 'AMD',
  /** @deprecated  */
  Ang = 'ANG',
  /** @deprecated  */
  Aoa = 'AOA',
  /** @deprecated  */
  Ars = 'ARS',
  /** @deprecated  */
  Aud = 'AUD',
  /** @deprecated  */
  Awg = 'AWG',
  /** @deprecated  */
  Azm = 'AZM',
  /** @deprecated  */
  Azn = 'AZN',
  /** @deprecated  */
  Bam = 'BAM',
  /** @deprecated  */
  Bbd = 'BBD',
  /** @deprecated  */
  Bdt = 'BDT',
  /** @deprecated  */
  Bgn = 'BGN',
  /** @deprecated  */
  Bhd = 'BHD',
  /** @deprecated  */
  Bif = 'BIF',
  /** @deprecated  */
  Bmd = 'BMD',
  /** @deprecated  */
  Bnd = 'BND',
  /** @deprecated  */
  Bob = 'BOB',
  /** @deprecated  */
  Brl = 'BRL',
  /** @deprecated  */
  Bsd = 'BSD',
  /** @deprecated  */
  Btn = 'BTN',
  /** @deprecated  */
  Buk = 'BUK',
  /** @deprecated  */
  Bwp = 'BWP',
  /** @deprecated  */
  Byn = 'BYN',
  /** @deprecated  */
  Bzd = 'BZD',
  /** @deprecated  */
  Cad = 'CAD',
  /** @deprecated  */
  Cdf = 'CDF',
  /** @deprecated  */
  Che = 'CHE',
  /** @deprecated  */
  Chf = 'CHF',
  /** @deprecated  */
  Chw = 'CHW',
  /** @deprecated  */
  Clp = 'CLP',
  /** @deprecated  */
  Cny = 'CNY',
  /** @deprecated  */
  Cop = 'COP',
  /** @deprecated  */
  Crc = 'CRC',
  /** @deprecated  */
  Cup = 'CUP',
  /** @deprecated  */
  Cve = 'CVE',
  /** @deprecated  */
  Czk = 'CZK',
  /** @deprecated  */
  Djf = 'DJF',
  /** @deprecated  */
  Dkk = 'DKK',
  /** @deprecated  */
  Dop = 'DOP',
  /** @deprecated  */
  Dzd = 'DZD',
  /** @deprecated  */
  Eek = 'EEK',
  /** @deprecated  */
  Egp = 'EGP',
  /** @deprecated  */
  Ern = 'ERN',
  /** @deprecated  */
  Etb = 'ETB',
  /** @deprecated  */
  Eur = 'EUR',
  /** @deprecated  */
  Fjd = 'FJD',
  /** @deprecated  */
  Fkp = 'FKP',
  /** @deprecated  */
  Gbp = 'GBP',
  /** @deprecated  */
  Gek = 'GEK',
  /** @deprecated  */
  Gel = 'GEL',
  /** @deprecated  */
  Ghs = 'GHS',
  /** @deprecated  */
  Gip = 'GIP',
  /** @deprecated  */
  Gmd = 'GMD',
  /** @deprecated  */
  Gnf = 'GNF',
  /** @deprecated  */
  Gqe = 'GQE',
  /** @deprecated  */
  Gtq = 'GTQ',
  /** @deprecated  */
  Gyd = 'GYD',
  /** @deprecated  */
  Hkd = 'HKD',
  /** @deprecated  */
  Hnl = 'HNL',
  /** @deprecated  */
  Hrk = 'HRK',
  /** @deprecated  */
  Htg = 'HTG',
  /** @deprecated  */
  Huf = 'HUF',
  /** @deprecated  */
  Idr = 'IDR',
  /** @deprecated  */
  Ils = 'ILS',
  /** @deprecated  */
  Inr = 'INR',
  /** @deprecated  */
  Iqd = 'IQD',
  /** @deprecated  */
  Irr = 'IRR',
  /** @deprecated  */
  Isk = 'ISK',
  /** @deprecated  */
  Jmd = 'JMD',
  /** @deprecated  */
  Jod = 'JOD',
  /** @deprecated  */
  Jpy = 'JPY',
  /** @deprecated  */
  Kes = 'KES',
  /** @deprecated  */
  Kgs = 'KGS',
  /** @deprecated  */
  Khr = 'KHR',
  /** @deprecated  */
  Kmf = 'KMF',
  /** @deprecated  */
  Kpw = 'KPW',
  /** @deprecated  */
  Krw = 'KRW',
  /** @deprecated  */
  Kwd = 'KWD',
  /** @deprecated  */
  Kyd = 'KYD',
  /** @deprecated  */
  Kzt = 'KZT',
  /** @deprecated  */
  Lak = 'LAK',
  /** @deprecated  */
  Lbp = 'LBP',
  /** @deprecated  */
  Lkr = 'LKR',
  /** @deprecated  */
  Lrd = 'LRD',
  /** @deprecated  */
  Lsl = 'LSL',
  /** @deprecated  */
  Lsm = 'LSM',
  /** @deprecated  */
  Ltl = 'LTL',
  /** @deprecated  */
  Lvl = 'LVL',
  /** @deprecated  */
  Lyd = 'LYD',
  /** @deprecated  */
  Mad = 'MAD',
  /** @deprecated  */
  Mdl = 'MDL',
  /** @deprecated  */
  Mga = 'MGA',
  /** @deprecated  */
  Mkd = 'MKD',
  /** @deprecated  */
  Mmk = 'MMK',
  /** @deprecated  */
  Mnt = 'MNT',
  /** @deprecated  */
  Mop = 'MOP',
  /** @deprecated  */
  Mro = 'MRO',
  /** @deprecated  */
  Mur = 'MUR',
  /** @deprecated  */
  Mvr = 'MVR',
  /** @deprecated  */
  Mwk = 'MWK',
  /** @deprecated  */
  Mxn = 'MXN',
  /** @deprecated  */
  Myr = 'MYR',
  /** @deprecated  */
  Mzn = 'MZN',
  /** @deprecated  */
  Nad = 'NAD',
  /** @deprecated  */
  Ngn = 'NGN',
  /** @deprecated  */
  Nic = 'NIC',
  /** @deprecated  */
  Nok = 'NOK',
  /** @deprecated  */
  Npr = 'NPR',
  /** @deprecated  */
  Nzd = 'NZD',
  /** @deprecated  */
  Omr = 'OMR',
  /** @deprecated  */
  Pab = 'PAB',
  /** @deprecated  */
  Pen = 'PEN',
  /** @deprecated  */
  Pgk = 'PGK',
  /** @deprecated  */
  Php = 'PHP',
  /** @deprecated  */
  Pkr = 'PKR',
  /** @deprecated  */
  Pln = 'PLN',
  /** @deprecated  */
  Pyg = 'PYG',
  /** @deprecated  */
  Qar = 'QAR',
  /** @deprecated  */
  Rhd = 'RHD',
  /** @deprecated  */
  Rol = 'ROL',
  /** @deprecated  */
  Ron = 'RON',
  /** @deprecated  */
  Rsd = 'RSD',
  /** @deprecated  */
  Rub = 'RUB',
  /** @deprecated  */
  Rwf = 'RWF',
  /** @deprecated  */
  Sar = 'SAR',
  /** @deprecated  */
  Sbd = 'SBD',
  /** @deprecated  */
  Scr = 'SCR',
  /** @deprecated  */
  Sdg = 'SDG',
  /** @deprecated  */
  Sek = 'SEK',
  /** @deprecated  */
  Sgd = 'SGD',
  /** @deprecated  */
  Shp = 'SHP',
  /** @deprecated  */
  Skk = 'SKK',
  /** @deprecated  */
  Sll = 'SLL',
  /** @deprecated  */
  Sos = 'SOS',
  /** @deprecated  */
  Srd = 'SRD',
  /** @deprecated  */
  Std = 'STD',
  /** @deprecated  */
  Svc = 'SVC',
  /** @deprecated  */
  Syp = 'SYP',
  /** @deprecated  */
  Szl = 'SZL',
  /** @deprecated  */
  Thb = 'THB',
  /** @deprecated  */
  Tjs = 'TJS',
  /** @deprecated  */
  Tmm = 'TMM',
  /** @deprecated  */
  Tnd = 'TND',
  /** @deprecated  */
  Top = 'TOP',
  /** @deprecated  */
  Trl = 'TRL',
  /** @deprecated  */
  Try = 'TRY',
  /** @deprecated  */
  Ttd = 'TTD',
  /** @deprecated  */
  Twd = 'TWD',
  /** @deprecated  */
  Tzs = 'TZS',
  /** @deprecated  */
  Uah = 'UAH',
  /** @deprecated  */
  Ugx = 'UGX',
  /** @deprecated  */
  Usd = 'USD',
  /** @deprecated  */
  Uyu = 'UYU',
  /** @deprecated  */
  Uzs = 'UZS',
  /** @deprecated  */
  Veb = 'VEB',
  /** @deprecated  */
  Vef = 'VEF',
  /** @deprecated  */
  Vnd = 'VND',
  /** @deprecated  */
  Vuv = 'VUV',
  /** @deprecated  */
  Wst = 'WST',
  /** @deprecated  */
  Xcd = 'XCD',
  /** @deprecated  */
  Xof = 'XOF',
  /** @deprecated  */
  Xpf = 'XPF',
  /** @deprecated  */
  Yer = 'YER',
  /** @deprecated  */
  Ytl = 'YTL',
  /** @deprecated  */
  Zar = 'ZAR',
  /** @deprecated  */
  Zmk = 'ZMK',
  /** @deprecated  */
  Zwd = 'ZWD'
}

/** CustomAttributeMetadata defines an array of attribute_codes and entity_types */
export type CustomAttributeMetadata = {
  __typename?: 'CustomAttributeMetadata';
  /** An array of attributes */
  items?: Maybe<Array<Maybe<Attribute>>>;
};

/** Customer defines the customer name and address and other details */
export type Customer = {
  __typename?: 'Customer';
  /** An array containing the customer's shipping and billing addresses */
  addresses?: Maybe<Array<Maybe<CustomerAddress>>>;
  /** Indicates whether the customer has enabled remote shopping assistance */
  allow_remote_shopping_assistance: Scalars['Boolean'];
  /** The contents of the customer's compare list */
  compare_list?: Maybe<CompareList>;
  /** Timestamp indicating when the account was created */
  created_at?: Maybe<Scalars['String']>;
  /** The customer's date of birth */
  date_of_birth?: Maybe<Scalars['String']>;
  /** The ID assigned to the billing address */
  default_billing?: Maybe<Scalars['String']>;
  /** The ID assigned to the shipping address */
  default_shipping?: Maybe<Scalars['String']>;
  /**
   * The customer's date of birth
   * @deprecated Use `date_of_birth` instead
   */
  dob?: Maybe<Scalars['String']>;
  /** The customer's email address. Required */
  email?: Maybe<Scalars['String']>;
  /** The customer's first name */
  firstname?: Maybe<Scalars['String']>;
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: Maybe<Scalars['Int']>;
  /** @deprecated Customer group should not be exposed in the storefront scenarios */
  group_id?: Maybe<Scalars['Int']>;
  /**
   * The ID assigned to the customer
   * @deprecated id is not needed as part of Customer because on server side it can be identified based on customer token used for authentication. There is no need to know customer ID on the client side.
   */
  id?: Maybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: Maybe<Scalars['Boolean']>;
  /** The customer's family name */
  lastname?: Maybe<Scalars['String']>;
  /** The customer's middle name */
  middlename?: Maybe<Scalars['String']>;
  mobilenumber?: Maybe<Scalars['String']>;
  orders?: Maybe<CustomerOrders>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** Contains the customer's product reviews */
  reviews: ProductReviews;
  /** A value such as Sr., Jr., or III */
  suffix?: Maybe<Scalars['String']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers) */
  taxvat?: Maybe<Scalars['String']>;
  /**
   * Contains a customer's wish lists
   * @deprecated Use `Customer.wishlists` or `Customer.wishlist_v2`
   */
  wishlist: Wishlist;
  /** Retrieve the specified wish list identified by the unique ID for a `Wishlist` object */
  wishlist_v2?: Maybe<Wishlist>;
  /** An array of wishlists. In Magento Open Source, customers are limited to one wish list. The number of wish lists is configurable for Magento Commerce */
  wishlists: Array<Maybe<Wishlist>>;
};


/** Customer defines the customer name and address and other details */
export type CustomerOrdersArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<CustomerOrdersFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


/** Customer defines the customer name and address and other details */
export type CustomerReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


/** Customer defines the customer name and address and other details */
export type CustomerWishlist_V2Args = {
  id: Scalars['ID'];
};


/** Customer defines the customer name and address and other details */
export type CustomerWishlistsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** CustomerAddress contains detailed information about a customer's billing and shipping addresses */
export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  address_label?: Maybe<Scalars['String']>;
  /** The city or town */
  city?: Maybe<Scalars['String']>;
  /** The customer's company */
  company?: Maybe<Scalars['String']>;
  /** The customer's country */
  country_code?: Maybe<CountryCodeEnum>;
  /**
   * The customer's country
   * @deprecated Use `country_code` instead.
   */
  country_id?: Maybe<Scalars['String']>;
  /** @deprecated Custom attributes should not be put into container */
  custom_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /**
   * The customer ID
   * @deprecated customer_id is not needed as part of CustomerAddress, address ID (id) is unique identifier for the addresses.
   */
  customer_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the address is the default billing address */
  default_billing?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the address is the default shipping address */
  default_shipping?: Maybe<Scalars['Boolean']>;
  /** Address extension attributes */
  extension_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /** The fax number */
  fax?: Maybe<Scalars['String']>;
  /** The first name of the person associated with the shipping/billing address */
  firstname?: Maybe<Scalars['String']>;
  /** The ID assigned to the address object */
  id?: Maybe<Scalars['Int']>;
  /** The family name of the person associated with the shipping/billing address */
  lastname?: Maybe<Scalars['String']>;
  /** The middle name of the person associated with the shipping/billing address */
  middlename?: Maybe<Scalars['String']>;
  /** The customer's ZIP or postal code */
  postcode?: Maybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** An object containing the region name, region code, and region ID */
  region?: Maybe<CustomerAddressRegion>;
  /** The unique ID for a pre-defined region */
  region_id?: Maybe<Scalars['Int']>;
  /** An array of strings that define the street number and name */
  street?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A value such as Sr., Jr., or III */
  suffix?: Maybe<Scalars['String']>;
  /** The telephone number */
  telephone?: Maybe<Scalars['String']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers) */
  vat_id?: Maybe<Scalars['String']>;
};

export type CustomerAddressAttribute = {
  __typename?: 'CustomerAddressAttribute';
  /** Attribute code */
  attribute_code?: Maybe<Scalars['String']>;
  /** Attribute value */
  value?: Maybe<Scalars['String']>;
};

export type CustomerAddressAttributeInput = {
  /** Attribute code */
  attribute_code: Scalars['String'];
  /** Attribute value */
  value: Scalars['String'];
};

export type CustomerAddressInput = {
  address_label?: InputMaybe<Scalars['String']>;
  /** The city or town */
  city?: InputMaybe<Scalars['String']>;
  /** The customer's company */
  company?: InputMaybe<Scalars['String']>;
  /** The customer's country */
  country_code?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: use `country_code` instead. */
  country_id?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: Custom attributes should not be put into container. */
  custom_attributes?: InputMaybe<Array<InputMaybe<CustomerAddressAttributeInput>>>;
  /** Indicates whether the address is the default billing address */
  default_billing?: InputMaybe<Scalars['Boolean']>;
  /** Indicates whether the address is the default shipping address */
  default_shipping?: InputMaybe<Scalars['Boolean']>;
  /** The fax number */
  fax?: InputMaybe<Scalars['String']>;
  /** The first name of the person associated with the shipping/billing address */
  firstname?: InputMaybe<Scalars['String']>;
  /** The family name of the person associated with the shipping/billing address */
  lastname?: InputMaybe<Scalars['String']>;
  /** The middle name of the person associated with the shipping/billing address */
  middlename?: InputMaybe<Scalars['String']>;
  /** The customer's ZIP or postal code */
  postcode?: InputMaybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']>;
  /** An object containing the region name, region code, and region ID */
  region?: InputMaybe<CustomerAddressRegionInput>;
  /** An array of strings that define the street number and name */
  street?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A value such as Sr., Jr., or III */
  suffix?: InputMaybe<Scalars['String']>;
  /** The telephone number */
  telephone?: InputMaybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  vat_id?: InputMaybe<Scalars['String']>;
};

/** CustomerAddressRegion defines the customer's state or province */
export type CustomerAddressRegion = {
  __typename?: 'CustomerAddressRegion';
  /** The state or province name */
  region?: Maybe<Scalars['String']>;
  /** The address region code */
  region_code?: Maybe<Scalars['String']>;
  /** The unique ID for a pre-defined region */
  region_id?: Maybe<Scalars['Int']>;
};

/** CustomerAddressRegionInput defines the customer's state or province */
export type CustomerAddressRegionInput = {
  /** The state or province name */
  region?: InputMaybe<Scalars['String']>;
  /** The address region code */
  region_code?: InputMaybe<Scalars['String']>;
  /** The unique ID for a pre-defined region */
  region_id?: InputMaybe<Scalars['Int']>;
};

export type CustomerCreateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance */
  allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']>;
  /** The customer's date of birth */
  date_of_birth?: InputMaybe<Scalars['String']>;
  /** Deprecated: Use `date_of_birth` instead */
  dob?: InputMaybe<Scalars['String']>;
  /** The customer's email address. Required for customer creation */
  email: Scalars['String'];
  /** The customer's first name */
  firstname: Scalars['String'];
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: InputMaybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: InputMaybe<Scalars['Boolean']>;
  /** The customer's family name */
  lastname: Scalars['String'];
  /** The customer's middle name */
  middlename?: InputMaybe<Scalars['String']>;
  /** The customer's password */
  password?: InputMaybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']>;
  /** A value such as Sr., Jr., or III */
  suffix?: InputMaybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  taxvat?: InputMaybe<Scalars['String']>;
};

export type CustomerDownloadableProduct = {
  __typename?: 'CustomerDownloadableProduct';
  date?: Maybe<Scalars['String']>;
  download_url?: Maybe<Scalars['String']>;
  order_increment_id?: Maybe<Scalars['String']>;
  remaining_downloads?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type CustomerDownloadableProducts = {
  __typename?: 'CustomerDownloadableProducts';
  /** List of purchased downloadable items */
  items?: Maybe<Array<Maybe<CustomerDownloadableProduct>>>;
};

export type CustomerInput = {
  /** The customer's date of birth */
  date_of_birth?: InputMaybe<Scalars['String']>;
  /** Deprecated: Use `date_of_birth` instead */
  dob?: InputMaybe<Scalars['String']>;
  /** The customer's email address */
  email?: InputMaybe<Scalars['String']>;
  /** The customer's first name */
  firstname?: InputMaybe<Scalars['String']>;
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: InputMaybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: InputMaybe<Scalars['Boolean']>;
  /** The customer's family name */
  lastname?: InputMaybe<Scalars['String']>;
  /** The customer's middle name */
  middlename?: InputMaybe<Scalars['String']>;
  /** The customer's password */
  password?: InputMaybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']>;
  /** The customer Social Id. Required */
  socialId?: InputMaybe<Scalars['String']>;
  /** The customer Social Login Type. Required */
  socialLoginType?: InputMaybe<Scalars['String']>;
  /** A value such as Sr., Jr., or III */
  suffix?: InputMaybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  taxvat?: InputMaybe<Scalars['String']>;
};

/** Contains details about each of the customer's orders */
export type CustomerOrder = {
  __typename?: 'CustomerOrder';
  /** The billing address for the order */
  billing_address?: Maybe<OrderAddress>;
  /** The shipping carrier for the order delivery */
  carrier?: Maybe<Scalars['String']>;
  /** Comments about the order */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** @deprecated Use the order_date attribute instead */
  created_at?: Maybe<Scalars['String']>;
  /** A list of credit memos */
  credit_memos?: Maybe<Array<Maybe<CreditMemo>>>;
  /** The entered gift message for the order */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use the totals.grand_total attribute instead */
  grand_total?: Maybe<Scalars['Float']>;
  /** The unique ID for a `CustomerOrder` object */
  id: Scalars['ID'];
  /** @deprecated Use the id attribute instead */
  increment_id?: Maybe<Scalars['String']>;
  /** A list of invoices for the order */
  invoices: Array<Maybe<Invoice>>;
  /** An array containing the items purchased in this order */
  items?: Maybe<Array<Maybe<OrderItemInterface>>>;
  /** The order number */
  number: Scalars['String'];
  /** The date the order was placed */
  order_date: Scalars['String'];
  /** @deprecated Use the number attribute instead */
  order_number: Scalars['String'];
  /** Payment details for the order */
  payment_methods?: Maybe<Array<Maybe<OrderPaymentMethod>>>;
  /** A list of shipments for the order */
  shipments?: Maybe<Array<Maybe<OrderShipment>>>;
  /** The shipping address for the order */
  shipping_address?: Maybe<OrderAddress>;
  /** The delivery method for the order */
  shipping_method?: Maybe<Scalars['String']>;
  /** The current status of the order */
  status: Scalars['String'];
  /** Contains details about the calculated totals for this order */
  total?: Maybe<OrderTotal>;
};

/** The collection of orders that match the conditions defined in the filter */
export type CustomerOrders = {
  __typename?: 'CustomerOrders';
  /** An array of customer orders */
  items: Array<Maybe<CustomerOrder>>;
  /** An object that includes the current_page, page_info, and page_size values specified in the query */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total count of customer orders */
  total_count?: Maybe<Scalars['Int']>;
};

/** Identifies the filter to use for filtering orders. */
export type CustomerOrdersFilterInput = {
  /** Filters by order number. */
  number?: InputMaybe<FilterStringTypeInput>;
};

export type CustomerOutput = {
  __typename?: 'CustomerOutput';
  customer: Customer;
};

export type CustomerPaymentTokens = {
  __typename?: 'CustomerPaymentTokens';
  /** An array of payment tokens */
  items: Array<Maybe<PaymentToken>>;
};

export type CustomerToken = {
  __typename?: 'CustomerToken';
  /** The customer token */
  token?: Maybe<Scalars['String']>;
};

export type CustomerUpdateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance */
  allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']>;
  /** The customer's date of birth */
  date_of_birth?: InputMaybe<Scalars['String']>;
  /** Deprecated: Use `date_of_birth` instead */
  dob?: InputMaybe<Scalars['String']>;
  /** The customer's first name */
  firstname?: InputMaybe<Scalars['String']>;
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: InputMaybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: InputMaybe<Scalars['Boolean']>;
  /** The customer's family name */
  lastname?: InputMaybe<Scalars['String']>;
  /** The customer's middle name */
  middlename?: InputMaybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']>;
  /** A value such as Sr., Jr., or III */
  suffix?: InputMaybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  taxvat?: InputMaybe<Scalars['String']>;
};

/** CustomizableAreaOption contains information about a text area that is defined as part of a customizable option. */
export type CustomizableAreaOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableAreaOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An object that defines a text area. */
  value?: Maybe<CustomizableAreaValue>;
};

/** CustomizableAreaValue defines the price and sku of a product whose page contains a customized text area. */
export type CustomizableAreaValue = {
  __typename?: 'CustomizableAreaValue';
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableAreaValue` object. */
  uid: Scalars['ID'];
};

/** CustomizableCheckbbixOption contains information about a set of checkbox values that are defined as part of a customizable option. */
export type CustomizableCheckboxOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableCheckboxOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An array that defines a set of checkbox values. */
  value?: Maybe<Array<Maybe<CustomizableCheckboxValue>>>;
};

/** CustomizableCheckboxValue defines the price and sku of a product whose page contains a customized set of checkbox values. */
export type CustomizableCheckboxValue = {
  __typename?: 'CustomizableCheckboxValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the checkbox value is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableCheckboxValue` object. */
  uid: Scalars['ID'];
};

/** CustomizableDateOption contains information about a date picker that is defined as part of a customizable option. */
export type CustomizableDateOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDateOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An object that defines a date field in a customizable option. */
  value?: Maybe<CustomizableDateValue>;
};

/** This enumeration customizable date type. */
export enum CustomizableDateTypeEnum {
  /** @deprecated  */
  Date = 'DATE',
  /** @deprecated  */
  DateTime = 'DATE_TIME',
  /** @deprecated  */
  Time = 'TIME'
}

/** CustomizableDateValue defines the price and sku of a product whose page contains a customized date picker. */
export type CustomizableDateValue = {
  __typename?: 'CustomizableDateValue';
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** DATE, DATE_TIME or TIME */
  type?: Maybe<CustomizableDateTypeEnum>;
  /** The unique ID for a `CustomizableDateValue` object. */
  uid: Scalars['ID'];
};

/** CustomizableDropDownOption contains information about a drop down menu that is defined as part of a customizable option. */
export type CustomizableDropDownOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDropDownOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An array that defines the set of options for a drop down menu. */
  value?: Maybe<Array<Maybe<CustomizableDropDownValue>>>;
};

/** CustomizableDropDownValue defines the price and sku of a product whose page contains a customized drop down menu. */
export type CustomizableDropDownValue = {
  __typename?: 'CustomizableDropDownValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableDropDownValue` object. */
  uid: Scalars['ID'];
};

/** CustomizableFieldOption contains information about a text field that is defined as part of a customizable option. */
export type CustomizableFieldOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFieldOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An object that defines a text field. */
  value?: Maybe<CustomizableFieldValue>;
};

/** CustomizableFieldValue defines the price and sku of a product whose page contains a customized text field. */
export type CustomizableFieldValue = {
  __typename?: 'CustomizableFieldValue';
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']>;
  /** The price of the custom value. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableFieldValue` object. */
  uid: Scalars['ID'];
};

/** CustomizableFileOption contains information about a file picker that is defined as part of a customizable option. */
export type CustomizableFileOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFileOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An object that defines a file value. */
  value?: Maybe<CustomizableFileValue>;
};

/** CustomizableFileValue defines the price and sku of a product whose page contains a customized file picker. */
export type CustomizableFileValue = {
  __typename?: 'CustomizableFileValue';
  /** The file extension to accept. */
  file_extension?: Maybe<Scalars['String']>;
  /** The maximum width of an image. */
  image_size_x?: Maybe<Scalars['Int']>;
  /** The maximum height of an image. */
  image_size_y?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableFileValue` object. */
  uid: Scalars['ID'];
};

/** CustomizableMultipleOption contains information about a multiselect that is defined as part of a customizable option. */
export type CustomizableMultipleOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableMultipleOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An array that defines the set of options for a multiselect. */
  value?: Maybe<Array<Maybe<CustomizableMultipleValue>>>;
};

/** CustomizableMultipleValue defines the price and sku of a product whose page contains a customized multiselect. */
export type CustomizableMultipleValue = {
  __typename?: 'CustomizableMultipleValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableMultipleValue` object. */
  uid: Scalars['ID'];
};

export type CustomizableOptionInput = {
  /** The customizable option id of the product */
  id?: InputMaybe<Scalars['Int']>;
  /** The string value of the option */
  value_string: Scalars['String'];
};

/** The CustomizableOptionInterface contains basic information about a customizable option. It can be implemented by several types of configurable options. */
export type CustomizableOptionInterface = {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
};

/** CustomizableProductInterface contains information about customizable product options. */
export type CustomizableProductInterface = {
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
};

/** CustomizableRadioOption contains information about a set of radio buttons that are defined as part of a customizable option. */
export type CustomizableRadioOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableRadioOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An array that defines a set of radio buttons. */
  value?: Maybe<Array<Maybe<CustomizableRadioValue>>>;
};

/** CustomizableRadioValue defines the price and sku of a product whose page contains a customized set of radio buttons. */
export type CustomizableRadioValue = {
  __typename?: 'CustomizableRadioValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the radio button is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableRadioValue` object. */
  uid: Scalars['ID'];
};

export type DeleteCompareListOutput = {
  __typename?: 'DeleteCompareListOutput';
  /** Indicates whether the compare list was successfully deleted */
  result: Scalars['Boolean'];
};

export type DeletePaymentTokenOutput = {
  __typename?: 'DeletePaymentTokenOutput';
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  result: Scalars['Boolean'];
};

/** Defines an individual discount. A discount can be applied to the cart as a whole or to an item. */
export type Discount = {
  __typename?: 'Discount';
  /** The amount of the discount */
  amount: Money;
  /** A description of the discount */
  label: Scalars['String'];
};

/** Downloadable Cart Item */
export type DownloadableCartItem = CartItemInterface & {
  __typename?: 'DownloadableCartItem';
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** Current stock */
  exception?: Maybe<Scalars['String']>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  /** Is salable */
  is_salable?: Maybe<Scalars['Boolean']>;
  /** An array containing information about the links for the added to cart downloadable product */
  links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** DownloadableProductSamples defines characteristics of a downloadable product */
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  /** Sellable qty */
  sellable_qty?: Maybe<Scalars['Int']>;
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

export type DownloadableCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'DownloadableCreditMemoItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are refunded from the downloadable product */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

export enum DownloadableFileTypeEnum {
  /** @deprecated `sample_url` serves to get the downloadable sample */
  File = 'FILE',
  /** @deprecated `sample_url` serves to get the downloadable sample */
  Url = 'URL'
}

export type DownloadableInvoiceItem = InvoiceItemInterface & {
  __typename?: 'DownloadableInvoiceItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are invoiced from the downloadable product */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** DownloadableProductLinks defines characteristics of a downloadable product */
export type DownloadableItemsLinks = {
  __typename?: 'DownloadableItemsLinks';
  /** A number indicating the sort order */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the link */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `DownloadableItemsLinks` object. */
  uid: Scalars['ID'];
};

export type DownloadableOrderItem = OrderItemInterface & {
  __typename?: 'DownloadableOrderItem';
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are ordered from the downloadable product */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/** DownloadableProduct defines a product that the shopper downloads */
export type DownloadableProduct = CustomizableProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'DownloadableProduct';
  allow_amount_range?: Maybe<Scalars['Int']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  brands?: Maybe<Scalars['Int']>;
  can_redeem?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** An array containing information about the links for this downloadable product */
  downloadable_product_links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** An array containing information about samples of this downloadable product. */
  downloadable_product_samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  expire_after_day?: Maybe<Scalars['String']>;
  fabric?: Maybe<Scalars['Int']>;
  facebook_age_group?: Maybe<Scalars['String']>;
  facebook_age_range?: Maybe<Scalars['String']>;
  facebook_baby_food_stage?: Maybe<Scalars['String']>;
  facebook_capacity?: Maybe<Scalars['String']>;
  facebook_color?: Maybe<Scalars['String']>;
  facebook_compatible_devices?: Maybe<Scalars['String']>;
  facebook_decor_style?: Maybe<Scalars['String']>;
  facebook_digital_zoom?: Maybe<Scalars['String']>;
  facebook_display_technology?: Maybe<Scalars['String']>;
  facebook_finish?: Maybe<Scalars['String']>;
  facebook_gemstone?: Maybe<Scalars['String']>;
  facebook_gender?: Maybe<Scalars['String']>;
  facebook_health_concern?: Maybe<Scalars['String']>;
  facebook_ingredients?: Maybe<Scalars['String']>;
  facebook_is_assembly_required?: Maybe<Scalars['String']>;
  facebook_material?: Maybe<Scalars['String']>;
  facebook_maximum_weight?: Maybe<Scalars['String']>;
  facebook_megapixels?: Maybe<Scalars['String']>;
  facebook_minimum_weight?: Maybe<Scalars['String']>;
  facebook_model?: Maybe<Scalars['String']>;
  facebook_number_of_licenses?: Maybe<Scalars['String']>;
  facebook_operating_system?: Maybe<Scalars['String']>;
  facebook_optical_zoom?: Maybe<Scalars['String']>;
  facebook_package_quantity?: Maybe<Scalars['String']>;
  facebook_pattern?: Maybe<Scalars['String']>;
  facebook_product_depth?: Maybe<Scalars['String']>;
  facebook_product_form?: Maybe<Scalars['String']>;
  facebook_product_height?: Maybe<Scalars['String']>;
  facebook_product_length?: Maybe<Scalars['String']>;
  facebook_product_weight?: Maybe<Scalars['String']>;
  facebook_product_width?: Maybe<Scalars['String']>;
  facebook_recommended_use?: Maybe<Scalars['String']>;
  facebook_resolution?: Maybe<Scalars['String']>;
  facebook_scent?: Maybe<Scalars['String']>;
  facebook_screen_size?: Maybe<Scalars['String']>;
  facebook_shoe_width?: Maybe<Scalars['String']>;
  facebook_size?: Maybe<Scalars['String']>;
  facebook_storage_capacity?: Maybe<Scalars['String']>;
  facebook_style?: Maybe<Scalars['String']>;
  facebook_system_requirements?: Maybe<Scalars['String']>;
  facebook_thread_count?: Maybe<Scalars['String']>;
  facebook_video_game_platform?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  gift_card_amounts?: Maybe<Scalars['String']>;
  gift_card_type?: Maybe<Scalars['Int']>;
  gift_code_pattern?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  gift_product_template?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A value of 1 indicates that each link in the array must be purchased separately */
  links_purchased_separately?: Maybe<Scalars['Int']>;
  /** The heading above the list of downloadable products */
  links_title?: Maybe<Scalars['String']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  max_amount?: Maybe<Scalars['Float']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  min_amount?: Maybe<Scalars['Float']>;
  mpgiftcard_conditions?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  price_rate?: Maybe<Scalars['Float']>;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The CheckWishlistProduct  */
  wishlistData?: Maybe<WishlistData>;
};


/** DownloadableProduct defines a product that the shopper downloads */
export type DownloadableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type DownloadableProductCartItemInput = {
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  data: CartItemInput;
  downloadable_product_links?: InputMaybe<Array<InputMaybe<DownloadableProductLinksInput>>>;
};

/** DownloadableProductLinks defines characteristics of a downloadable product */
export type DownloadableProductLinks = {
  __typename?: 'DownloadableProductLinks';
  /** @deprecated This information should not be exposed on frontend */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated This information should not be exposed on frontend */
  is_shareable?: Maybe<Scalars['Boolean']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  link_type?: Maybe<DownloadableFileTypeEnum>;
  /** @deprecated This information should not be exposed on frontend */
  number_of_downloads?: Maybe<Scalars['Int']>;
  /** The price of the downloadable product */
  price?: Maybe<Scalars['Float']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** URL to the downloadable sample */
  sample_url?: Maybe<Scalars['String']>;
  /** A number indicating the sort order */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the link */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `DownloadableProductLinks` object. */
  uid: Scalars['ID'];
};

export type DownloadableProductLinksInput = {
  link_id: Scalars['Int'];
};

/** DownloadableProductSamples defines characteristics of a downloadable product */
export type DownloadableProductSamples = {
  __typename?: 'DownloadableProductSamples';
  /** @deprecated This information should not be exposed on frontend */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** URL to the downloadable sample */
  sample_url?: Maybe<Scalars['String']>;
  /** A number indicating the sort order */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the sample */
  title?: Maybe<Scalars['String']>;
};

/** A downloadable product wish list item */
export type DownloadableWishlistItem = WishlistItemInterface & {
  __typename?: 'DownloadableWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** An array containing information about the selected links */
  links_v2?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
  /** An array containing information about the selected samples */
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
};

/** Defines a customer-entered option */
export type EnteredOptionInput = {
  /** The unique ID for a `CustomizableFieldOption`, `CustomizableFileOption`, `CustomizableAreaOption`, etc. of `CustomizableOptionInterface` objects */
  uid: Scalars['ID'];
  /** Text the customer entered */
  value: Scalars['String'];
};

/** EntityUrl is an output object containing the `id`, `relative_url`, and `type` attributes */
export type EntityUrl = {
  __typename?: 'EntityUrl';
  /** @deprecated The canonical_url field is deprecated, use relative_url instead. */
  canonical_url?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface`, `CategoryInterface`, `CmsPage`, etc. object associated with the specified url. This could be a product UID, category UID, or cms page UID. */
  entity_uid?: Maybe<Scalars['ID']>;
  /**
   * The ID assigned to the object associated with the specified url. This could be a product ID, category ID, or page ID.
   * @deprecated Use `entity_uid` instead.
   */
  id?: Maybe<Scalars['String']>;
  /** 301 or 302 HTTP code for url permanent or temporary redirect or 0 for the 200 no redirect */
  redirectCode?: Maybe<Scalars['Int']>;
  /** The internal relative URL. If the specified  url is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  currency_to?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
};

export type FaqGroups = {
  __typename?: 'FaqGroups';
  /** Id of the Faq Group */
  id?: Maybe<Scalars['String']>;
  /** Faq Items */
  items?: Maybe<Array<Maybe<FaqItems>>>;
  /** Title of the Faq Group */
  title?: Maybe<Scalars['String']>;
};

export type FaqItems = {
  __typename?: 'FaqItems';
  /** Content of the Faq Item */
  content?: Maybe<Scalars['String']>;
  /** Title of the Faq Item */
  title?: Maybe<Scalars['String']>;
};

/** Defines a filter that matches the input exactly. */
export type FilterEqualTypeInput = {
  /** A string to filter on */
  eq?: InputMaybe<Scalars['String']>;
  /** An array of values to filter on */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Defines a filter that performs a fuzzy search. */
export type FilterMatchTypeInput = {
  /** One or more words to filter on */
  match?: InputMaybe<Scalars['String']>;
};

/** Defines a filter that matches a range of values, such as prices or dates. */
export type FilterRangeTypeInput = {
  /** The beginning of the range */
  from?: InputMaybe<Scalars['String']>;
  /** The end of the range */
  to?: InputMaybe<Scalars['String']>;
};

/** Defines a filter for an input string. */
export type FilterStringTypeInput = {
  /** Filters items that are exactly the same as the specified string. */
  eq?: InputMaybe<Scalars['String']>;
  /** Filters items that are exactly the same as entries specified in an array of strings. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Defines a filter that performs a fuzzy search using the specified string. */
  match?: InputMaybe<Scalars['String']>;
};

/** FilterTypeInput specifies which action will be performed in a query  */
export type FilterTypeInput = {
  /** Equals */
  eq?: InputMaybe<Scalars['String']>;
  finset?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** From. Must be used with 'to' */
  from?: InputMaybe<Scalars['String']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to */
  gteq?: InputMaybe<Scalars['String']>;
  /** In. The value can contain a set of comma-separated values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters */
  like?: InputMaybe<Scalars['String']>;
  /** Less than */
  lt?: InputMaybe<Scalars['String']>;
  /** Less than or equal to */
  lteq?: InputMaybe<Scalars['String']>;
  /** More than or equal to */
  moreq?: InputMaybe<Scalars['String']>;
  /** Not equal to */
  neq?: InputMaybe<Scalars['String']>;
  /** Not in. The value can contain a set of comma-separated values */
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Not null */
  notnull?: InputMaybe<Scalars['String']>;
  /** Is null */
  null?: InputMaybe<Scalars['String']>;
  /** To. Must be used with 'from' */
  to?: InputMaybe<Scalars['String']>;
};

/** A single FPT that can be applied to a product price. */
export type FixedProductTax = {
  __typename?: 'FixedProductTax';
  /** Amount of the FPT as a money object. */
  amount?: Maybe<Money>;
  /** The label assigned to the FPT to be displayed on the frontend. */
  label?: Maybe<Scalars['String']>;
};

/** This enumeration display settings for the fixed product tax */
export enum FixedProductTaxDisplaySettings {
  /**
   * The displayed price does not include the FPT amount. The values of ProductPrice.fixed_product_taxes and the price including the FPT are displayed separately. This value corresponds to 'Excluding FPT, Including FPT description and final price'
   * @deprecated
   */
  ExcludeFptAndIncludeWithDetails = 'EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS',
  /**
   * The displayed price does not include the FPT amount. The values from ProductPrice.fixed_product_taxes are not displayed. This value corresponds to 'Excluding FPT'
   * @deprecated
   */
  ExcludeFptWithoutDetails = 'EXCLUDE_FPT_WITHOUT_DETAILS',
  /**
   * The FPT feature is not enabled. You can omit  ProductPrice.fixed_product_taxes from your query
   * @deprecated
   */
  FptDisabled = 'FPT_DISABLED',
  /**
   * The displayed price includes the FPT amount without displaying the ProductPrice.fixed_product_taxes values. This value corresponds to 'Including FPT only'
   * @deprecated
   */
  IncludeFptWithoutDetails = 'INCLUDE_FPT_WITHOUT_DETAILS',
  /**
   * The displayed price includes the FPT amount while displaying the values of ProductPrice.fixed_product_taxes separately. This value corresponds to 'Including FPT and FPT description'
   * @deprecated
   */
  IncludeFptWithDetails = 'INCLUDE_FPT_WITH_DETAILS'
}

export type GenerateCustomerTokenAsAdminInput = {
  /** The email address of the customer requesting remote shopping assistance */
  customer_email: Scalars['String'];
};

export type GenerateCustomerTokenAsAdminOutput = {
  __typename?: 'GenerateCustomerTokenAsAdminOutput';
  /** The generated customer token */
  customer_token: Scalars['String'];
};

export type GetAlbumIdInput = {
  eq?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type GetAlbumInput = {
  album_id?: InputMaybe<GetAlbumIdInput>;
  page_number?: InputMaybe<Scalars['Int']>;
  page_size?: InputMaybe<Scalars['Int']>;
};

export type GiftCardRedeemDetail = {
  __typename?: 'GiftCardRedeemDetail';
  /** Customer's balance after redeeming gift code. */
  customer_balance?: Maybe<Scalars['String']>;
};

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessage = {
  __typename?: 'GiftMessage';
  /** Sender name */
  from: Scalars['String'];
  /** Gift message text */
  message: Scalars['String'];
  /** Recipient name */
  to: Scalars['String'];
};

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessageInput = {
  /** Sender name */
  from: Scalars['String'];
  /** Gift message text */
  message: Scalars['String'];
  /** Recipient name */
  to: Scalars['String'];
};

/** A grouped product consists of simple standalone products that are presented as a group */
export type GroupedProduct = PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'GroupedProduct';
  allow_amount_range?: Maybe<Scalars['Int']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  brands?: Maybe<Scalars['Int']>;
  can_redeem?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  expire_after_day?: Maybe<Scalars['String']>;
  fabric?: Maybe<Scalars['Int']>;
  facebook_age_group?: Maybe<Scalars['String']>;
  facebook_age_range?: Maybe<Scalars['String']>;
  facebook_baby_food_stage?: Maybe<Scalars['String']>;
  facebook_capacity?: Maybe<Scalars['String']>;
  facebook_color?: Maybe<Scalars['String']>;
  facebook_compatible_devices?: Maybe<Scalars['String']>;
  facebook_decor_style?: Maybe<Scalars['String']>;
  facebook_digital_zoom?: Maybe<Scalars['String']>;
  facebook_display_technology?: Maybe<Scalars['String']>;
  facebook_finish?: Maybe<Scalars['String']>;
  facebook_gemstone?: Maybe<Scalars['String']>;
  facebook_gender?: Maybe<Scalars['String']>;
  facebook_health_concern?: Maybe<Scalars['String']>;
  facebook_ingredients?: Maybe<Scalars['String']>;
  facebook_is_assembly_required?: Maybe<Scalars['String']>;
  facebook_material?: Maybe<Scalars['String']>;
  facebook_maximum_weight?: Maybe<Scalars['String']>;
  facebook_megapixels?: Maybe<Scalars['String']>;
  facebook_minimum_weight?: Maybe<Scalars['String']>;
  facebook_model?: Maybe<Scalars['String']>;
  facebook_number_of_licenses?: Maybe<Scalars['String']>;
  facebook_operating_system?: Maybe<Scalars['String']>;
  facebook_optical_zoom?: Maybe<Scalars['String']>;
  facebook_package_quantity?: Maybe<Scalars['String']>;
  facebook_pattern?: Maybe<Scalars['String']>;
  facebook_product_depth?: Maybe<Scalars['String']>;
  facebook_product_form?: Maybe<Scalars['String']>;
  facebook_product_height?: Maybe<Scalars['String']>;
  facebook_product_length?: Maybe<Scalars['String']>;
  facebook_product_weight?: Maybe<Scalars['String']>;
  facebook_product_width?: Maybe<Scalars['String']>;
  facebook_recommended_use?: Maybe<Scalars['String']>;
  facebook_resolution?: Maybe<Scalars['String']>;
  facebook_scent?: Maybe<Scalars['String']>;
  facebook_screen_size?: Maybe<Scalars['String']>;
  facebook_shoe_width?: Maybe<Scalars['String']>;
  facebook_size?: Maybe<Scalars['String']>;
  facebook_storage_capacity?: Maybe<Scalars['String']>;
  facebook_style?: Maybe<Scalars['String']>;
  facebook_system_requirements?: Maybe<Scalars['String']>;
  facebook_thread_count?: Maybe<Scalars['String']>;
  facebook_video_game_platform?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  gift_card_amounts?: Maybe<Scalars['String']>;
  gift_card_type?: Maybe<Scalars['Int']>;
  gift_code_pattern?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  gift_product_template?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** An array containing grouped product items */
  items?: Maybe<Array<Maybe<GroupedProductItem>>>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  max_amount?: Maybe<Scalars['Float']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  min_amount?: Maybe<Scalars['Float']>;
  mpgiftcard_conditions?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  price_rate?: Maybe<Scalars['Float']>;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
  /** The CheckWishlistProduct  */
  wishlistData?: Maybe<WishlistData>;
};


/** A grouped product consists of simple standalone products that are presented as a group */
export type GroupedProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** GroupedProductItem contains information about an individual grouped product item */
export type GroupedProductItem = {
  __typename?: 'GroupedProductItem';
  /** The relative position of this item compared to the other group items */
  position?: Maybe<Scalars['Int']>;
  /** The ProductInterface object, which contains details about this product option */
  product?: Maybe<ProductInterface>;
  /** The quantity of this grouped product item */
  qty?: Maybe<Scalars['Float']>;
};

/** A grouped product wish list item */
export type GroupedProductWishlistItem = WishlistItemInterface & {
  __typename?: 'GroupedProductWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

export type HomePageContent = {
  __typename?: 'HomePageContent';
  blocks?: Maybe<Array<Maybe<Block>>>;
  /** The Blogs graphql */
  blogs?: Maybe<Blogs>;
  magicslider?: Maybe<MagicSlider>;
  magicslider2?: Maybe<MagicSlider>;
  testimonial?: Maybe<Testimonial>;
};

/** A set of relative URLs that PayPal will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method. */
export type HostedProInput = {
  /** The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String'];
  /** The relative URL of the final confirmation page that PayPal will redirect to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String'];
};

/** Contains secure URL used for Payments Pro Hosted Solution payment method. */
export type HostedProUrl = {
  __typename?: 'HostedProUrl';
  /** Secure Url generated by PayPal */
  secure_form_url?: Maybe<Scalars['String']>;
};

/** The required input to request the secure URL for Payments Pro Hosted Solution payment. */
export type HostedProUrlInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
};

/** The object details of target path parameters */
export type HttpQueryParameter = {
  __typename?: 'HttpQueryParameter';
  /** Parameter name */
  name?: Maybe<Scalars['String']>;
  /** Parameter value */
  value?: Maybe<Scalars['String']>;
};

export type ImageSwatchData = SwatchDataInterface & {
  __typename?: 'ImageSwatchData';
  /** Thumbnail swatch image URL */
  thumbnail?: Maybe<Scalars['String']>;
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
};

/** Invoice details */
export type Invoice = {
  __typename?: 'Invoice';
  /** Comments on the invoice */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `Invoice` object */
  id: Scalars['ID'];
  /** Invoiced product details */
  items?: Maybe<Array<Maybe<InvoiceItemInterface>>>;
  /** Sequential invoice number */
  number: Scalars['String'];
  /** Invoice total amount details */
  total?: Maybe<InvoiceTotal>;
};

export type InvoiceItem = InvoiceItemInterface & {
  __typename?: 'InvoiceItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** Invoice item details */
export type InvoiceItemInterface = {
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** Contains price details from an invoice */
export type InvoiceTotal = {
  __typename?: 'InvoiceTotal';
  /** The final base grand total amount in the base currency */
  base_grand_total: Money;
  /** The applied discounts to the invoice */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes */
  grand_total: Money;
  /** Contains details about the shipping and handling costs for the invoice */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes */
  subtotal: Money;
  /** The invoice tax details */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the invoice */
  total_shipping: Money;
  /** The amount of tax applied to the invoice */
  total_tax: Money;
};

export type IsConfigSettingEnabledOutput = {
  __typename?: 'IsConfigSettingEnabledOutput';
  /** Is config setting enabled */
  is_enabled?: Maybe<Scalars['Boolean']>;
};

export type IsEmailAvailableOutput = {
  __typename?: 'IsEmailAvailableOutput';
  /** Is email availabel value */
  is_email_available?: Maybe<Scalars['Boolean']>;
};

/** A list of options of the selected bundle product */
export type ItemSelectedBundleOption = {
  __typename?: 'ItemSelectedBundleOption';
  /**
   * The unique ID for a `ItemSelectedBundleOption` object
   * @deprecated Use `uid` instead
   */
  id: Scalars['ID'];
  /** The label of the option */
  label: Scalars['String'];
  /** The unique ID for a `ItemSelectedBundleOption` object */
  uid: Scalars['ID'];
  /** A list of products that represent the values of the parent option */
  values?: Maybe<Array<Maybe<ItemSelectedBundleOptionValue>>>;
};

/** A list of values for the selected bundle product */
export type ItemSelectedBundleOptionValue = {
  __typename?: 'ItemSelectedBundleOptionValue';
  /**
   * The unique ID for a `ItemSelectedBundleOptionValue` object
   * @deprecated Use `uid` instead
   */
  id: Scalars['ID'];
  /** The price of the child bundle product */
  price: Money;
  /** The name of the child bundle product */
  product_name: Scalars['String'];
  /** The SKU of the child bundle product */
  product_sku: Scalars['String'];
  /** Indicates how many of this bundle product were ordered */
  quantity: Scalars['Float'];
  /** The unique ID for a `ItemSelectedBundleOptionValue` object */
  uid: Scalars['ID'];
};

export type Items = {
  __typename?: 'Items';
  caption?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** The key-value type */
export type KeyValue = {
  __typename?: 'KeyValue';
  /** The name part of the name/value pair */
  name?: Maybe<Scalars['String']>;
  /** The value part of the name/value pair */
  value?: Maybe<Scalars['String']>;
};

export type KlarnaInput = {
  /** The authorization token must be provided to set any Klarna Payments method */
  authorization_token: Scalars['String'];
};

export type LayerFilter = {
  __typename?: 'LayerFilter';
  /**
   * Array of filter items.
   * @deprecated Use Aggregation.options instead.
   */
  filter_items?: Maybe<Array<Maybe<LayerFilterItemInterface>>>;
  /**
   * Count of filter items in filter group.
   * @deprecated Use Aggregation.count instead.
   */
  filter_items_count?: Maybe<Scalars['Int']>;
  /**
   * Layered navigation filter name.
   * @deprecated Use Aggregation.label instead.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Request variable name for filter query.
   * @deprecated Use Aggregation.attribute_code instead.
   */
  request_var?: Maybe<Scalars['String']>;
};

export type LayerFilterItem = LayerFilterItemInterface & {
  __typename?: 'LayerFilterItem';
  /**
   * Count of items by filter.
   * @deprecated Use AggregationOption.count instead.
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * Filter label.
   * @deprecated Use AggregationOption.label instead.
   */
  label?: Maybe<Scalars['String']>;
  /**
   * Value for filter request variable to be used in query.
   * @deprecated Use AggregationOption.value instead.
   */
  value_string?: Maybe<Scalars['String']>;
};

export type LayerFilterItemInterface = {
  /**
   * Count of items by filter.
   * @deprecated Use AggregationOption.count instead.
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * Filter label.
   * @deprecated Use AggregationOption.label instead.
   */
  label?: Maybe<Scalars['String']>;
  /**
   * Value for filter request variable to be used in query.
   * @deprecated Use AggregationOption.value instead.
   */
  value_string?: Maybe<Scalars['String']>;
};

export type MagicSlider = {
  __typename?: 'MagicSlider';
  mobile?: Maybe<Array<Maybe<Items>>>;
  title?: Maybe<Scalars['String']>;
  web?: Maybe<Array<Maybe<Items>>>;
};

/** MediaGalleryEntry defines characteristics about images and videos associated with a specific product. */
export type MediaGalleryEntry = {
  __typename?: 'MediaGalleryEntry';
  /** Contains a ProductMediaGalleryEntriesContent object. */
  content?: Maybe<ProductMediaGalleryEntriesContent>;
  /** Whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The path of the image on the server. */
  file?: Maybe<Scalars['String']>;
  /**
   * The identifier assigned to the object.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The alt text displayed on the UI when the user points to the image. */
  label?: Maybe<Scalars['String']>;
  /** image or video. */
  media_type?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** Array of image types. It can have the following values: image, small_image, thumbnail. */
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique ID for a `MediaGalleryEntry` object. */
  uid: Scalars['ID'];
  /** Contains a ProductMediaGalleryEntriesVideoContent object. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** Contains basic information about a product image or video. */
export type MediaGalleryInterface = {
  /** Whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>;
};

export type MobileCreateAccountOtpOutput = {
  __typename?: 'MobileCreateAccountOtpOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type MobileCreateCustomerAccountOutput = {
  __typename?: 'MobileCreateCustomerAccountOutput';
  customer: Customer;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type MobileForgotPassworOtpOutput = {
  __typename?: 'MobileForgotPassworOTPOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type MobileForgotPassworOtpVerifyOtpOutput = {
  __typename?: 'MobileForgotPassworOTPVerifyOtpOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type MobileLoginOtpOutput = {
  __typename?: 'MobileLoginOtpOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type MobileLoginVerifyOtpOutput = {
  __typename?: 'MobileLoginVerifyOtpOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type MobileResetPassworOutput = {
  __typename?: 'MobileResetPassworOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

/** A Money object defines a monetary value, including a numeric value and a currency code. */
export type Money = {
  __typename?: 'Money';
  /** A three-letter currency code, such as USD or EUR */
  currency?: Maybe<CurrencyEnum>;
  /** A number expressing a monetary value */
  value?: Maybe<Scalars['Float']>;
};

export type MpFilters = {
  /** Filter From Date. */
  from: Scalars['String'];
  /** Period. */
  period_type?: InputMaybe<Scalars['String']>;
  /** Show Empty Rows. */
  show_empty_rows?: InputMaybe<Scalars['Boolean']>;
  /** Filter Store Id. */
  store_id?: InputMaybe<Scalars['Int']>;
  /** Filter To Date. */
  to: Scalars['String'];
};

export type MpGiftCardAmount = {
  __typename?: 'MpGiftCardAmount';
  /** Amount */
  amount?: Maybe<Scalars['String']>;
  /** Price */
  price?: Maybe<Scalars['String']>;
  /** Amount ID */
  record_id?: Maybe<Scalars['String']>;
};

export type MpGiftCardCartItem = CartItemInterface & {
  __typename?: 'MpGiftCardCartItem';
  /** Current stock */
  exception?: Maybe<Scalars['String']>;
  giftcard_options: Array<Maybe<SelectedGiftCardOption>>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  /** Is salable */
  is_salable?: Maybe<Scalars['Boolean']>;
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** Sellable qty */
  sellable_qty?: Maybe<Scalars['Int']>;
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

export type MpGiftCardConfig = {
  __typename?: 'MpGiftCardConfig';
  balance?: Maybe<Scalars['Float']>;
  canShowDetail?: Maybe<Scalars['Boolean']>;
  creditUsed?: Maybe<Scalars['Float']>;
  css?: Maybe<Array<Maybe<Scalars['String']>>>;
  enableGiftCard?: Maybe<Scalars['Boolean']>;
  enableGiftCredit?: Maybe<Scalars['Boolean']>;
  enableMultiple?: Maybe<Scalars['Boolean']>;
  giftCardUsed?: Maybe<Array<Maybe<MpGiftCardUsed>>>;
  listGiftCard?: Maybe<Array<Maybe<MpGiftCardList>>>;
  maxUsed?: Maybe<Scalars['Float']>;
};

export type MpGiftCardDashboardConfigNotification = {
  __typename?: 'MpGiftCardDashboardConfigNotification';
  creditEnable?: Maybe<Scalars['String']>;
  creditNotification?: Maybe<Scalars['Boolean']>;
  enable?: Maybe<Scalars['String']>;
  giftcardNotification?: Maybe<Scalars['Boolean']>;
};

export type MpGiftCardDashboardConfigOutput = {
  __typename?: 'MpGiftCardDashboardConfigOutput';
  balance?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  customerEmail?: Maybe<Scalars['String']>;
  giftCardLists?: Maybe<Array<Maybe<MpGiftCardDashboardGiftCard>>>;
  isEnableCredit?: Maybe<Scalars['Boolean']>;
  notification?: Maybe<MpGiftCardDashboardConfigNotification>;
  transactions?: Maybe<Array<Maybe<MpGiftCardTransaction>>>;
};

export type MpGiftCardDashboardGiftCard = {
  __typename?: 'MpGiftCardDashboardGiftCard';
  balance?: Maybe<Scalars['String']>;
  balance_formatted?: Maybe<Scalars['String']>;
  can_redeem?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  conditions_serialized?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  customer_ids?: Maybe<Scalars['String']>;
  delivery_address?: Maybe<Scalars['String']>;
  delivery_date?: Maybe<Scalars['String']>;
  delivery_method?: Maybe<Scalars['String']>;
  expired_at?: Maybe<Scalars['String']>;
  expired_at_formatted?: Maybe<Scalars['String']>;
  extra_content?: Maybe<Scalars['String']>;
  giftcard_id?: Maybe<Scalars['String']>;
  hidden_code?: Maybe<Scalars['String']>;
  histories?: Maybe<Array<Maybe<MpGiftCardHistory>>>;
  image?: Maybe<Scalars['String']>;
  init_balance?: Maybe<Scalars['String']>;
  is_sent?: Maybe<Scalars['String']>;
  order_increment_id?: Maybe<Scalars['String']>;
  order_item_id?: Maybe<Scalars['String']>;
  pool_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  status_label?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['String']>;
  template_fields?: Maybe<Scalars['String']>;
  template_id?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
};

export type MpGiftCardDelivery = {
  __typename?: 'MpGiftCardDelivery';
  fields?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
};

export type MpGiftCardDiscounts = {
  __typename?: 'MpGiftCardDiscounts';
  currency?: Maybe<Scalars['String']>;
  gift_cards?: Maybe<Array<Maybe<MpGiftCardDiscountsDetail>>>;
  value?: Maybe<Scalars['Float']>;
};

export type MpGiftCardDiscountsDetail = {
  __typename?: 'MpGiftCardDiscountsDetail';
  code?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type MpGiftCardHistory = {
  __typename?: 'MpGiftCardHistory';
  action?: Maybe<Scalars['String']>;
  action_detail?: Maybe<Scalars['String']>;
  action_label?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  amount_formatted?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  created_at_formatted?: Maybe<Scalars['String']>;
  extra_content?: Maybe<Scalars['String']>;
  giftcard_id?: Maybe<Scalars['String']>;
  history_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  status_label?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['String']>;
};

export type MpGiftCardList = {
  __typename?: 'MpGiftCardList';
  balance?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['String']>;
};

export type MpGiftCardOpenAmount = {
  __typename?: 'MpGiftCardOpenAmount';
  max?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['String']>;
};

export type MpGiftCardOptionInput = {
  amount?: InputMaybe<Scalars['String']>;
  delivery?: InputMaybe<Scalars['Int']>;
  delivery_date?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  range_amount?: InputMaybe<Scalars['Boolean']>;
  template?: InputMaybe<Scalars['Int']>;
  timezone?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
};

export type MpGiftCardPreview = {
  __typename?: 'MpGiftCardPreview';
  preview?: Maybe<Scalars['String']>;
};

export type MpGiftCardPriceFormat = {
  __typename?: 'MpGiftCardPriceFormat';
  decimalSymbol?: Maybe<Scalars['String']>;
  groupLength?: Maybe<Scalars['Int']>;
  groupSymbol?: Maybe<Scalars['String']>;
  integerRequired?: Maybe<Scalars['Boolean']>;
  pattern?: Maybe<Scalars['String']>;
  precision?: Maybe<Scalars['Int']>;
  requiredPrecision?: Maybe<Scalars['Int']>;
};

/** MpGiftCardProduct defines basic features of a gift card product and its simple product variants */
export type MpGiftCardProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'MpGiftCardProduct';
  allow_amount_range?: Maybe<Scalars['Int']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  brands?: Maybe<Scalars['Int']>;
  can_redeem?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  expire_after_day?: Maybe<Scalars['String']>;
  fabric?: Maybe<Scalars['Int']>;
  facebook_age_group?: Maybe<Scalars['String']>;
  facebook_age_range?: Maybe<Scalars['String']>;
  facebook_baby_food_stage?: Maybe<Scalars['String']>;
  facebook_capacity?: Maybe<Scalars['String']>;
  facebook_color?: Maybe<Scalars['String']>;
  facebook_compatible_devices?: Maybe<Scalars['String']>;
  facebook_decor_style?: Maybe<Scalars['String']>;
  facebook_digital_zoom?: Maybe<Scalars['String']>;
  facebook_display_technology?: Maybe<Scalars['String']>;
  facebook_finish?: Maybe<Scalars['String']>;
  facebook_gemstone?: Maybe<Scalars['String']>;
  facebook_gender?: Maybe<Scalars['String']>;
  facebook_health_concern?: Maybe<Scalars['String']>;
  facebook_ingredients?: Maybe<Scalars['String']>;
  facebook_is_assembly_required?: Maybe<Scalars['String']>;
  facebook_material?: Maybe<Scalars['String']>;
  facebook_maximum_weight?: Maybe<Scalars['String']>;
  facebook_megapixels?: Maybe<Scalars['String']>;
  facebook_minimum_weight?: Maybe<Scalars['String']>;
  facebook_model?: Maybe<Scalars['String']>;
  facebook_number_of_licenses?: Maybe<Scalars['String']>;
  facebook_operating_system?: Maybe<Scalars['String']>;
  facebook_optical_zoom?: Maybe<Scalars['String']>;
  facebook_package_quantity?: Maybe<Scalars['String']>;
  facebook_pattern?: Maybe<Scalars['String']>;
  facebook_product_depth?: Maybe<Scalars['String']>;
  facebook_product_form?: Maybe<Scalars['String']>;
  facebook_product_height?: Maybe<Scalars['String']>;
  facebook_product_length?: Maybe<Scalars['String']>;
  facebook_product_weight?: Maybe<Scalars['String']>;
  facebook_product_width?: Maybe<Scalars['String']>;
  facebook_recommended_use?: Maybe<Scalars['String']>;
  facebook_resolution?: Maybe<Scalars['String']>;
  facebook_scent?: Maybe<Scalars['String']>;
  facebook_screen_size?: Maybe<Scalars['String']>;
  facebook_shoe_width?: Maybe<Scalars['String']>;
  facebook_size?: Maybe<Scalars['String']>;
  facebook_storage_capacity?: Maybe<Scalars['String']>;
  facebook_style?: Maybe<Scalars['String']>;
  facebook_system_requirements?: Maybe<Scalars['String']>;
  facebook_thread_count?: Maybe<Scalars['String']>;
  facebook_video_game_platform?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  gift_card_amounts?: Maybe<Scalars['String']>;
  gift_card_type?: Maybe<Scalars['Int']>;
  gift_code_pattern?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  gift_product_template?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** Gift Card product information */
  information?: Maybe<MpGiftCardProductInfo>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  max_amount?: Maybe<Scalars['Float']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  min_amount?: Maybe<Scalars['Float']>;
  mpgiftcard_conditions?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  price_rate?: Maybe<Scalars['Float']>;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** An array of linked simple product items */
  template?: Maybe<Array<Maybe<MpGiftCardProductTemplate>>>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
  /** The CheckWishlistProduct  */
  wishlistData?: Maybe<WishlistData>;
};


/** MpGiftCardProduct defines basic features of a gift card product and its simple product variants */
export type MpGiftCardProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type MpGiftCardProductCartItemInput = {
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  data: CartItemInput;
  giftcard_options: MpGiftCardOptionInput;
};

export type MpGiftCardProductInfo = {
  __typename?: 'MpGiftCardProductInfo';
  /** An array of amount information */
  amounts?: Maybe<Array<Maybe<MpGiftCardAmount>>>;
  currencyRate?: Maybe<Scalars['Float']>;
  /** An array of delivery method */
  delivery?: Maybe<Array<Maybe<MpGiftCardDelivery>>>;
  enableDeliveryDate?: Maybe<Scalars['Boolean']>;
  expire_after?: Maybe<Scalars['String']>;
  fileUploadUrl?: Maybe<Scalars['String']>;
  messageMaxChar?: Maybe<Scalars['Int']>;
  openAmount?: Maybe<MpGiftCardOpenAmount>;
  priceFormat?: Maybe<MpGiftCardPriceFormat>;
  productId?: Maybe<Scalars['String']>;
  timezone?: Maybe<MpGiftCardTimeZone>;
  uploadTooltip?: Maybe<Scalars['String']>;
};

export type MpGiftCardProductTemplate = {
  __typename?: 'MpGiftCardProductTemplate';
  canUpload?: Maybe<Scalars['Boolean']>;
  card?: Maybe<Scalars['String']>;
  design?: Maybe<Scalars['String']>;
  font?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<Array<Maybe<MpGiftCardProductTemplateImage>>>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type MpGiftCardProductTemplateImage = {
  __typename?: 'MpGiftCardProductTemplateImage';
  alt?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
};

export type MpGiftCardTimeZone = {
  __typename?: 'MpGiftCardTimeZone';
  enable?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Array<Maybe<MpGiftCardTimeZoneOption>>>;
};

export type MpGiftCardTimeZoneOption = {
  __typename?: 'MpGiftCardTimeZoneOption';
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MpGiftCardTransaction = {
  __typename?: 'MpGiftCardTransaction';
  action?: Maybe<Scalars['String']>;
  action_detail?: Maybe<Scalars['String']>;
  action_label?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  amount_formatted?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  created_at_formatted?: Maybe<Scalars['String']>;
  credit_id?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['String']>;
  extra_content?: Maybe<Scalars['String']>;
  transaction_id?: Maybe<Scalars['String']>;
  website_id?: Maybe<Scalars['String']>;
};

export type MpGiftCardUsed = {
  __typename?: 'MpGiftCardUsed';
  amount?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
};

export type MpGiftcardPreviewInput = {
  balance: Scalars['Int'];
  delivery_method: Scalars['Int'];
  expire_after: Scalars['Int'];
  image: Scalars['String'];
  template_fields: Scalars['String'];
  template_id: Scalars['Int'];
  timezone: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBundleProductsToCart?: Maybe<AddBundleProductsToCartOutput>;
  addCommentToPost?: Maybe<AddCommentToPostOutput>;
  addConfigurableProductsToCart?: Maybe<AddConfigurableProductsToCartOutput>;
  addDownloadableProductsToCart?: Maybe<AddDownloadableProductsToCartOutput>;
  /** Add gift card code for customer */
  addMpGiftCardList?: Maybe<Array<Maybe<MpGiftCardDashboardGiftCard>>>;
  addMpGiftCardProductsToCart?: Maybe<AddMpGiftCardProductsToCartOutput>;
  /** Add any type of product to the cart */
  addProductsToCart?: Maybe<AddProductsToCartOutput>;
  /** Add products to the specified compare list */
  addProductsToCompareList?: Maybe<CompareList>;
  /** Adds one or more products to the specified wish list. This mutation supports all product types */
  addProductsToWishlist?: Maybe<AddProductsToWishlistOutput>;
  addSimpleProductsToCart?: Maybe<AddSimpleProductsToCartOutput>;
  addVirtualProductsToCart?: Maybe<AddVirtualProductsToCartOutput>;
  /** Add items in the specified wishlist to the customer's cart */
  addWishlistItemsToCart?: Maybe<AddWishlistItemsToCartOutput>;
  /** AddtoRecentlyviewed */
  addtoRecentlyviewed?: Maybe<Scalars['Boolean']>;
  applyCouponToCart?: Maybe<ApplyCouponToCartOutput>;
  /** Apply for a job */
  applyjobForm?: Maybe<AppliedjobOutput>;
  /** Assign the specified compare list to the logged in customer */
  assignCompareListToCustomer?: Maybe<AssignCompareListToCustomerOutput>;
  /** Authenticate Customer With SocialLogin */
  authenticateCustomerWithSocialLogin?: Maybe<AuthenticateCustomerWithSocialLogin>;
  /** Changes the password for the logged-in customer */
  changeCustomerPassword?: Maybe<Customer>;
  /** chat box. */
  chatBox?: Maybe<ChatBoxOutput>;
  /** Send Mobile OTP to create an Account */
  createAccountOTP?: Maybe<MobileCreateAccountOtpOutput>;
  /** create album id. */
  createAlbum?: Maybe<CreateAlbumOutput>;
  /** Creates Client Token for Braintree Javascript SDK initialization. */
  createBraintreeClientToken: Scalars['String'];
  /** Creates a new compare list. The compare list is saved for logged in customers */
  createCompareList?: Maybe<CompareList>;
  /** Create customer account */
  createCustomer?: Maybe<CustomerOutput>;
  /** Create an Account */
  createCustomerAccount?: Maybe<MobileCreateCustomerAccountOutput>;
  /** Create customer address */
  createCustomerAddress?: Maybe<CustomerAddress>;
  /** Create customer account */
  createCustomerV2?: Maybe<CustomerOutput>;
  /** Creates an empty shopping cart for a guest or logged in user */
  createEmptyCart?: Maybe<Scalars['String']>;
  /** Creates a Klarna Payments Session. */
  createKlarnaPaymentsSession?: Maybe<CreateKlarnaPaymentsSessionOutput>;
  /** Initiates a transaction and receives a token. Use this mutation for Payflow Pro and Payments Pro payment methods */
  createPayflowProToken?: Maybe<CreatePayflowProTokenOutput>;
  /** Initiates an Express Checkout transaction and receives a token. Use this mutation for Express Checkout and Payments Standard payment methods. */
  createPaypalExpressToken?: Maybe<PaypalExpressTokenOutput>;
  /** Creates a product review for the specified SKU */
  createProductReview: CreateProductReviewOutput;
  /** Delete the specified compare list */
  deleteCompareList?: Maybe<DeleteCompareListOutput>;
  /** Delete customer address */
  deleteCustomerAddress?: Maybe<Scalars['Boolean']>;
  /** Delete a customer payment token */
  deletePaymentToken?: Maybe<DeletePaymentTokenOutput>;
  /** Send Forgot Password OTP */
  forgotPassworOTP?: Maybe<MobileForgotPassworOtpOutput>;
  /** Retrieve the customer token */
  generateCustomerToken?: Maybe<CustomerToken>;
  /** Request a customer token so that an administrator can perform remote shopping assistance */
  generateCustomerTokenAsAdmin?: Maybe<GenerateCustomerTokenAsAdminOutput>;
  /** Generate Uid */
  generateUid?: Maybe<Scalars['String']>;
  generateotpForMyAccount?: Maybe<MyAccountOtpOutput>;
  googleTokenAuth?: Maybe<AuthenticateCustomerWithSocialLogin>;
  /** Handles payment response and saves payment in Quote. Use this mutations for Payflow Pro and Payments Pro payment methods. */
  handlePayflowProResponse?: Maybe<PayflowProResponseOutput>;
  /** Send Mobile OTP */
  loginOTP?: Maybe<MobileLoginOtpOutput>;
  /** Merges the source cart into the destination cart */
  mergeCarts: Cart;
  myAccountOtpVerify?: Maybe<MyAccountOtpOutput>;
  placeOrder?: Maybe<PlaceOrderOutput>;
  /** Place Razorpay Order with cart amount and currency to generate RZP order ID. */
  placeRazorpayOrder?: Maybe<RazorpayOrder>;
  /** Redeem gift card code for customer */
  redeemMpGiftCard?: Maybe<GiftCardRedeemDetail>;
  removeCouponFromCart?: Maybe<RemoveCouponFromCartOutput>;
  removeItemFromCart?: Maybe<RemoveItemFromCartOutput>;
  /** Remove gift card code */
  removeMpGiftCardCodeFromCart?: Maybe<Scalars['Boolean']>;
  /** Remove gift card code for customer */
  removeMpGiftCardFromList?: Maybe<Array<Maybe<MpGiftCardDashboardGiftCard>>>;
  /** Remove products from the specified compare list */
  removeProductsFromCompareList?: Maybe<CompareList>;
  /** Removes one or more products from the specified wish list */
  removeProductsFromWishlist?: Maybe<RemoveProductsFromWishlistOutput>;
  /** Adds all products from a customer's previous order to the cart. */
  reorderItems?: Maybe<ReorderItemsOutput>;
  /** Request an email with a reset password token for the registered customer identified by the specified email. */
  requestPasswordResetEmail?: Maybe<Scalars['Boolean']>;
  /** Reset a customer's password using the reset password token that the customer received in an email after requesting it using requestPasswordResetEmail. */
  resetPassword?: Maybe<Scalars['Boolean']>;
  /** Reset Password */
  resetPasswordOtp?: Maybe<MobileResetPassworOutput>;
  /** Revoke the customer token */
  revokeCustomerToken?: Maybe<RevokeCustomerTokenOutput>;
  /** Save Notification Setting */
  saveMpGiftCardDashBoardNotificationSettings?: Maybe<Scalars['Boolean']>;
  /** Recommends Product by Sending Single/Multiple Email */
  sendEmailToFriend?: Maybe<SendEmailToFriendOutput>;
  setBillingAddressOnCart?: Maybe<SetBillingAddressOnCartOutput>;
  setGuestEmailOnCart?: Maybe<SetGuestEmailOnCartOutput>;
  /** Apply gift card code */
  setMpGiftCardCodeToCart?: Maybe<Scalars['Boolean']>;
  /** Apply gift credit amount */
  setMpGiftCardCreditToCart?: Maybe<Scalars['Boolean']>;
  /** @deprecated Should use setPaymentMethodOnCart and placeOrder mutations in single request. */
  setPaymentMethodAndPlaceOrder?: Maybe<PlaceOrderOutput>;
  setPaymentMethodOnCart?: Maybe<SetPaymentMethodOnCartOutput>;
  setRzpPaymentDetailsOnCart?: Maybe<SetRzpPaymentDetailsOnCartOutput>;
  setShippingAddressesOnCart?: Maybe<SetShippingAddressesOnCartOutput>;
  setShippingMethodsOnCart?: Maybe<SetShippingMethodsOnCartOutput>;
  /** Subscribes the specified email to a newsletter */
  subscribeEmailToNewsletter?: Maybe<SubscribeEmailToNewsletterOutput>;
  updateCartItems?: Maybe<UpdateCartItemsOutput>;
  /** Sends chat profile data to Engagement Cloud. */
  updateChatProfile?: Maybe<Scalars['Boolean']>;
  /** Deprecated. Use UpdateCustomerV2 instead. */
  updateCustomer?: Maybe<CustomerOutput>;
  /** Update customer address */
  updateCustomerAddress?: Maybe<CustomerAddress>;
  updateCustomerEmail?: Maybe<CustomerOutput>;
  /** Update the customer's personal information */
  updateCustomerV2?: Maybe<CustomerOutput>;
  /** Updates one or more products in the specified wish list */
  updateProductsInWishlist?: Maybe<UpdateProductsInWishlistOutput>;
  /** Updates the email address of a quote. */
  updateQuoteEmail?: Maybe<Scalars['Boolean']>;
  /** upload image to album. */
  uploadImage?: Maybe<UploadImageOutput>;
  uploadMpGiftCardImage?: Maybe<UploadMpGiftCardImageOutput>;
};


export type MutationAddBundleProductsToCartArgs = {
  input?: InputMaybe<AddBundleProductsToCartInput>;
};


export type MutationAddCommentToPostArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<AddCommentToPostInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type MutationAddConfigurableProductsToCartArgs = {
  input?: InputMaybe<AddConfigurableProductsToCartInput>;
};


export type MutationAddDownloadableProductsToCartArgs = {
  input?: InputMaybe<AddDownloadableProductsToCartInput>;
};


export type MutationAddMpGiftCardListArgs = {
  code: Scalars['String'];
};


export type MutationAddMpGiftCardProductsToCartArgs = {
  input?: InputMaybe<AddMpGiftCardProductsToCartInput>;
};


export type MutationAddProductsToCartArgs = {
  cartId: Scalars['String'];
  cartItems: Array<CartItemInput>;
};


export type MutationAddProductsToCompareListArgs = {
  input?: InputMaybe<AddProductsToCompareListInput>;
};


export type MutationAddProductsToWishlistArgs = {
  wishlistId: Scalars['ID'];
  wishlistItems: Array<WishlistItemInput>;
};


export type MutationAddSimpleProductsToCartArgs = {
  input?: InputMaybe<AddSimpleProductsToCartInput>;
};


export type MutationAddVirtualProductsToCartArgs = {
  input?: InputMaybe<AddVirtualProductsToCartInput>;
};


export type MutationAddWishlistItemsToCartArgs = {
  wishlistId: Scalars['ID'];
  wishlistItemIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationAddtoRecentlyviewedArgs = {
  product: Scalars['Int'];
  uid?: InputMaybe<Scalars['String']>;
};


export type MutationApplyCouponToCartArgs = {
  input?: InputMaybe<ApplyCouponToCartInput>;
};


export type MutationApplyjobFormArgs = {
  input: AppliedjobInput;
};


export type MutationAssignCompareListToCustomerArgs = {
  uid: Scalars['ID'];
};


export type MutationAuthenticateCustomerWithSocialLoginArgs = {
  input: CustomerInput;
};


export type MutationChangeCustomerPasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationChatBoxArgs = {
  input: ChatBoxInput;
};


export type MutationCreateAccountOtpArgs = {
  mobileNumber?: InputMaybe<Scalars['String']>;
  websiteId?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateAlbumArgs = {
  input: CreateAlbumInput;
};


export type MutationCreateCompareListArgs = {
  input?: InputMaybe<CreateCompareListInput>;
};


export type MutationCreateCustomerArgs = {
  input: CustomerInput;
};


export type MutationCreateCustomerAccountArgs = {
  input: CustomerInput;
  mobileNumber?: InputMaybe<Scalars['String']>;
  otp?: InputMaybe<Scalars['String']>;
  websiteId?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateCustomerAddressArgs = {
  input: CustomerAddressInput;
};


export type MutationCreateCustomerV2Args = {
  input: CustomerCreateInput;
};


export type MutationCreateEmptyCartArgs = {
  input?: InputMaybe<CreateEmptyCartInput>;
};


export type MutationCreateKlarnaPaymentsSessionArgs = {
  input?: InputMaybe<CreateKlarnaPaymentsSessionInput>;
};


export type MutationCreatePayflowProTokenArgs = {
  input: PayflowProTokenInput;
};


export type MutationCreatePaypalExpressTokenArgs = {
  input: PaypalExpressTokenInput;
};


export type MutationCreateProductReviewArgs = {
  input: CreateProductReviewInput;
};


export type MutationDeleteCompareListArgs = {
  uid: Scalars['ID'];
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePaymentTokenArgs = {
  public_hash: Scalars['String'];
};


export type MutationForgotPassworOtpArgs = {
  mobileNumber?: InputMaybe<Scalars['String']>;
  websiteId?: InputMaybe<Scalars['Int']>;
};


export type MutationGenerateCustomerTokenArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationGenerateCustomerTokenAsAdminArgs = {
  input: GenerateCustomerTokenAsAdminInput;
};


export type MutationGenerateUidArgs = {
  uid?: InputMaybe<Scalars['String']>;
};


export type MutationGenerateotpForMyAccountArgs = {
  input: MyAccountOtpInput;
};


export type MutationGoogleTokenAuthArgs = {
  access_token: Scalars['String'];
};


export type MutationHandlePayflowProResponseArgs = {
  input: PayflowProResponseInput;
};


export type MutationLoginOtpArgs = {
  mobileNumber?: InputMaybe<Scalars['String']>;
  websiteId?: InputMaybe<Scalars['Int']>;
};


export type MutationMergeCartsArgs = {
  destination_cart_id?: InputMaybe<Scalars['String']>;
  source_cart_id: Scalars['String'];
};


export type MutationMyAccountOtpVerifyArgs = {
  mobileNumber: Scalars['String'];
  otp: Scalars['String'];
  websiteId?: InputMaybe<Scalars['Int']>;
};


export type MutationPlaceOrderArgs = {
  input?: InputMaybe<PlaceOrderInput>;
};


export type MutationPlaceRazorpayOrderArgs = {
  cart_id?: InputMaybe<Scalars['String']>;
};


export type MutationRedeemMpGiftCardArgs = {
  code: Scalars['String'];
};


export type MutationRemoveCouponFromCartArgs = {
  input?: InputMaybe<RemoveCouponFromCartInput>;
};


export type MutationRemoveItemFromCartArgs = {
  input?: InputMaybe<RemoveItemFromCartInput>;
};


export type MutationRemoveMpGiftCardCodeFromCartArgs = {
  cartId: Scalars['String'];
  code: Scalars['String'];
};


export type MutationRemoveMpGiftCardFromListArgs = {
  code: Scalars['String'];
};


export type MutationRemoveProductsFromCompareListArgs = {
  input?: InputMaybe<RemoveProductsFromCompareListInput>;
};


export type MutationRemoveProductsFromWishlistArgs = {
  wishlistId: Scalars['ID'];
  wishlistItemsIds: Array<Scalars['ID']>;
};


export type MutationReorderItemsArgs = {
  orderNumber: Scalars['String'];
};


export type MutationRequestPasswordResetEmailArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  resetPasswordToken: Scalars['String'];
};


export type MutationResetPasswordOtpArgs = {
  mobileNumber?: InputMaybe<Scalars['String']>;
  otp?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  websiteId?: InputMaybe<Scalars['Int']>;
};


export type MutationSaveMpGiftCardDashBoardNotificationSettingsArgs = {
  credit_notification?: InputMaybe<Scalars['Boolean']>;
  giftcard_notification?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSendEmailToFriendArgs = {
  input?: InputMaybe<SendEmailToFriendInput>;
};


export type MutationSetBillingAddressOnCartArgs = {
  input?: InputMaybe<SetBillingAddressOnCartInput>;
};


export type MutationSetGuestEmailOnCartArgs = {
  input?: InputMaybe<SetGuestEmailOnCartInput>;
};


export type MutationSetMpGiftCardCodeToCartArgs = {
  cartId: Scalars['String'];
  code: Scalars['String'];
};


export type MutationSetMpGiftCardCreditToCartArgs = {
  amount: Scalars['String'];
  cartId: Scalars['String'];
};


export type MutationSetPaymentMethodAndPlaceOrderArgs = {
  input?: InputMaybe<SetPaymentMethodAndPlaceOrderInput>;
};


export type MutationSetPaymentMethodOnCartArgs = {
  input?: InputMaybe<SetPaymentMethodOnCartInput>;
};


export type MutationSetRzpPaymentDetailsOnCartArgs = {
  input?: InputMaybe<SetRzpPaymentDetailsOnCartInput>;
};


export type MutationSetShippingAddressesOnCartArgs = {
  input?: InputMaybe<SetShippingAddressesOnCartInput>;
};


export type MutationSetShippingMethodsOnCartArgs = {
  input?: InputMaybe<SetShippingMethodsOnCartInput>;
};


export type MutationSubscribeEmailToNewsletterArgs = {
  email: Scalars['String'];
};


export type MutationUpdateCartItemsArgs = {
  input?: InputMaybe<UpdateCartItemsInput>;
};


export type MutationUpdateChatProfileArgs = {
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  profileId: Scalars['String'];
};


export type MutationUpdateCustomerArgs = {
  input: CustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  id: Scalars['Int'];
  input?: InputMaybe<CustomerAddressInput>;
};


export type MutationUpdateCustomerEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateCustomerV2Args = {
  input: CustomerUpdateInput;
};


export type MutationUpdateProductsInWishlistArgs = {
  wishlistId: Scalars['ID'];
  wishlistItems: Array<WishlistItemUpdateInput>;
};


export type MutationUpdateQuoteEmailArgs = {
  cartId: Scalars['String'];
  email: Scalars['String'];
};


export type MutationUploadImageArgs = {
  input: UploadImageInput;
};


export type MutationUploadMpGiftCardImageArgs = {
  base64_encoded_data: Scalars['String'];
  name: Scalars['String'];
};

/** Contains details about the requested order */
export type Order = {
  __typename?: 'Order';
  /** An array containing the items purchased in this order */
  items?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated The order_id field is deprecated, use order_number instead. */
  order_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `Order` object. */
  order_number: Scalars['String'];
  /** Contains the calculated total for this order */
  total?: Maybe<Scalars['String']>;
};

/** OrderAddress contains detailed information about an order's billing and shipping addresses */
export type OrderAddress = {
  __typename?: 'OrderAddress';
  address_label?: Maybe<Scalars['String']>;
  /** The city or town */
  city: Scalars['String'];
  /** The customer's company */
  company?: Maybe<Scalars['String']>;
  /** The customer's country */
  country_code?: Maybe<CountryCodeEnum>;
  /** The fax number */
  fax?: Maybe<Scalars['String']>;
  /** The first name of the person associated with the shipping/billing address */
  firstname: Scalars['String'];
  /** The family name of the person associated with the shipping/billing address */
  lastname: Scalars['String'];
  /** The middle name of the person associated with the shipping/billing address */
  middlename?: Maybe<Scalars['String']>;
  /** The customer's order ZIP or postal code */
  postcode?: Maybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** The state or province name */
  region?: Maybe<Scalars['String']>;
  /** The unique ID for a `Region` object of a pre-defined region */
  region_id?: Maybe<Scalars['ID']>;
  /** An array of strings that define the street number and name */
  street: Array<Maybe<Scalars['String']>>;
  /** A value such as Sr., Jr., or III */
  suffix?: Maybe<Scalars['String']>;
  /** The telephone number */
  telephone: Scalars['String'];
  /** The customer's Value-added tax (VAT) number (for corporate customers) */
  vat_id?: Maybe<Scalars['String']>;
};

export type OrderItem = OrderItemInterface & {
  __typename?: 'OrderItem';
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/** Order item details */
export type OrderItemInterface = {
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/** Represents order item options like selected or entered */
export type OrderItemOption = {
  __typename?: 'OrderItemOption';
  /** The name of the option */
  label: Scalars['String'];
  /** The value of the option */
  value: Scalars['String'];
};

/** Contains details about the payment method used to pay for the order */
export type OrderPaymentMethod = {
  __typename?: 'OrderPaymentMethod';
  /** Additional data per payment method type */
  additional_data?: Maybe<Array<Maybe<KeyValue>>>;
  /** The label that describes the payment method */
  name: Scalars['String'];
  /** The payment method code that indicates how the order was paid for */
  type: Scalars['String'];
};

/** Order shipment details */
export type OrderShipment = {
  __typename?: 'OrderShipment';
  /** Comments added to the shipment */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `OrderShipment` object */
  id: Scalars['ID'];
  /** Contains items included in the shipment */
  items?: Maybe<Array<Maybe<ShipmentItemInterface>>>;
  /** The sequential credit shipment number */
  number: Scalars['String'];
  /** Contains shipment tracking details */
  tracking?: Maybe<Array<Maybe<ShipmentTracking>>>;
};

/** Contains details about the sales total amounts used to calculate the final price */
export type OrderTotal = {
  __typename?: 'OrderTotal';
  /** The final base grand total amount in the base currency */
  base_grand_total: Money;
  /** The applied discounts to the order */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes */
  grand_total: Money;
  /** Contains details about the shipping and handling costs for the order */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the order, excluding shipping, discounts, and taxes */
  subtotal: Money;
  /** The order tax details */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the order */
  total_shipping: Money;
  /** The amount of tax applied to the order */
  total_tax: Money;
};

/** Required input for Payflow Express Checkout payments */
export type PayflowExpressInput = {
  /** The unique ID of the PayPal user */
  payer_id: Scalars['String'];
  /** The token returned by the createPaypalExpressToken mutation */
  token: Scalars['String'];
};

/** A set of relative URLs that PayPal will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkInput = {
  /** The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String'];
  /** The relative URL of the transaction error page that PayPal will redirect to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String'];
  /** The relative URL of the order confirmation page that PayPal will redirect to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String'];
};

/** Mode for payment: TEST or LIVE. Applies to Payflow Link and Payments Advanced payment methods. */
export enum PayflowLinkMode {
  /** @deprecated  */
  Live = 'LIVE',
  /** @deprecated  */
  Test = 'TEST'
}

/** Contains information used to generate PayPal iframe for transaction. Applies to Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkToken = {
  __typename?: 'PayflowLinkToken';
  /** Mode for Payflow transaction */
  mode?: Maybe<PayflowLinkMode>;
  /** PayPal URL used for requesting Payflow form */
  paypal_url?: Maybe<Scalars['String']>;
  /** Secure token generated by PayPal */
  secure_token?: Maybe<Scalars['String']>;
  /** Secure token ID generated by PayPal */
  secure_token_id?: Maybe<Scalars['String']>;
};

/** Input required to fetch payment token information for Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkTokenInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
};

/** Required input for Payflow Pro and Payments Pro payment methods. */
export type PayflowProInput = {
  /** Required input for credit card related information */
  cc_details: CreditCardDetailsInput;
  /** States whether details about the customer's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for PayPal Payflow Pro payment integration. */
  is_active_payment_token_enabler?: InputMaybe<Scalars['Boolean']>;
};

/** Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProResponseInput = {
  cart_id: Scalars['String'];
  paypal_payload: Scalars['String'];
};

export type PayflowProResponseOutput = {
  __typename?: 'PayflowProResponseOutput';
  cart: Cart;
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProToken = {
  __typename?: 'PayflowProToken';
  response_message: Scalars['String'];
  result: Scalars['Int'];
  result_code: Scalars['Int'];
  secure_token: Scalars['String'];
  secure_token_id: Scalars['String'];
};

/** Input required to fetch payment token information for Payflow Pro and Payments Pro payment methods. */
export type PayflowProTokenInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
  /** A set of relative URLs that PayPal uses for callback. */
  urls: PayflowProUrlInput;
};

/** A set of relative URLs that PayPal will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Pro and Payment Pro payment methods. */
export type PayflowProUrlInput = {
  /** The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String'];
  /** The relative URL of the transaction error page that PayPal will redirect to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String'];
  /** The relative URL of the final confirmation page that PayPal will redirect to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String'];
};

export type PaymentMethodInput = {
  braintree?: InputMaybe<BraintreeInput>;
  braintree_cc_vault?: InputMaybe<BraintreeCcVaultInput>;
  /** Payment method code */
  code: Scalars['String'];
  /** Required input for PayPal Hosted pro payments */
  hosted_pro?: InputMaybe<HostedProInput>;
  klarna?: InputMaybe<KlarnaInput>;
  /** Required input for Payflow Express Checkout payments */
  payflow_express?: InputMaybe<PayflowExpressInput>;
  /** Required input for PayPal Payflow Link and Payments Advanced payments */
  payflow_link?: InputMaybe<PayflowLinkInput>;
  /** Required input type for PayPal Payflow Pro and Payment Pro payments */
  payflowpro?: InputMaybe<PayflowProInput>;
  /** Required input type for PayPal Payflow Pro vault payments */
  payflowpro_cc_vault?: InputMaybe<VaultTokenInput>;
  /** Required input for Express Checkout and Payments Standard payments */
  paypal_express?: InputMaybe<PaypalExpressInput>;
  /** Purchase order number */
  purchase_order_number?: InputMaybe<Scalars['String']>;
};

/** The stored payment method available to the customer */
export type PaymentToken = {
  __typename?: 'PaymentToken';
  /** Stored account details */
  details?: Maybe<Scalars['String']>;
  /** The payment method code associated with the token */
  payment_method_code: Scalars['String'];
  /** The public hash of the token */
  public_hash: Scalars['String'];
  type: PaymentTokenTypeEnum;
};

/** The list of available payment token types */
export enum PaymentTokenTypeEnum {
  /** @deprecated  */
  Account = 'account',
  /** @deprecated  */
  Card = 'card'
}

/** Required input for Express Checkout and Payments Standard payments */
export type PaypalExpressInput = {
  /** The unique ID of the PayPal user */
  payer_id: Scalars['String'];
  /** The token returned by the createPaypalExpressToken mutation */
  token: Scalars['String'];
};

/** Deprecated: use type `PaypalExpressTokenOutput` instead */
export type PaypalExpressToken = {
  __typename?: 'PaypalExpressToken';
  /**
   * A set of URLs that allow the buyer to authorize payment and adjust checkout details
   * @deprecated Use field `paypal_urls` of type `PaypalExpressTokenOutput` instead
   */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /**
   * The token returned by PayPal
   * @deprecated Use field `token` of type `PaypalExpressTokenOutput` instead
   */
  token?: Maybe<Scalars['String']>;
};

/** Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
  /** Payment method code */
  code: Scalars['String'];
  /** Indicates whether the buyer selected the quick checkout button. The default value is false */
  express_button?: InputMaybe<Scalars['Boolean']>;
  /** A set of relative URLs that PayPal uses in response to various actions during the authorization process */
  urls: PaypalExpressUrlsInput;
  /** Indicates whether the buyer clicked the PayPal credit button. The default value is false */
  use_paypal_credit?: InputMaybe<Scalars['Boolean']>;
};

/** Contains the token returned by PayPal and a set of URLs that allow the buyer to authorize payment and adjust checkout details. Applies to Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenOutput = {
  __typename?: 'PaypalExpressTokenOutput';
  /** A set of URLs that allow the buyer to authorize payment and adjust checkout details */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /** The token returned by PayPal */
  token?: Maybe<Scalars['String']>;
};

/** A set of URLs that allow the buyer to authorize payment and adjust checkout details for Express Checkout and Payments Standard transactions. */
export type PaypalExpressUrlList = {
  __typename?: 'PaypalExpressUrlList';
  /** The PayPal URL that allows the buyer to edit their checkout details */
  edit?: Maybe<Scalars['String']>;
  /** The URL to the PayPal login page */
  start?: Maybe<Scalars['String']>;
};

/** A set of relative URLs that PayPal will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressUrlsInput = {
  /** The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String'];
  /** The relative URL of the page that PayPal will redirect to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html.  */
  pending_url?: InputMaybe<Scalars['String']>;
  /** The relative URL of the final confirmation page that PayPal will redirect to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String'];
  /** The relative URL of the order confirmation page that PayPal will redirect to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html. */
  success_url?: InputMaybe<Scalars['String']>;
};

/** PhysicalProductInterface contains attributes specific to tangible products. */
export type PhysicalProductInterface = {
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};

/** Defines Pickup Location information. */
export type PickupLocation = {
  __typename?: 'PickupLocation';
  city?: Maybe<Scalars['String']>;
  contact_name?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  pickup_location_code?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  region_id?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** PickupLocationFilterInput defines the list of attributes and filters for the search. */
export type PickupLocationFilterInput = {
  /** Filter by city. */
  city?: InputMaybe<FilterTypeInput>;
  /** Filter by country. */
  country_id?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location name. */
  name?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location code. */
  pickup_location_code?: InputMaybe<FilterTypeInput>;
  /** Filter by postcode. */
  postcode?: InputMaybe<FilterTypeInput>;
  /** Filter by region. */
  region?: InputMaybe<FilterTypeInput>;
  /** Filter by region id. */
  region_id?: InputMaybe<FilterTypeInput>;
  /** Filter by street. */
  street?: InputMaybe<FilterTypeInput>;
};

/** PickupLocationSortInput specifies attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type PickupLocationSortInput = {
  /** City where pickup location is placed. */
  city?: InputMaybe<SortEnum>;
  /** Name of the contact person. */
  contact_name?: InputMaybe<SortEnum>;
  /** Id of the country in two letters. */
  country_id?: InputMaybe<SortEnum>;
  /** Description of the pickup location. */
  description?: InputMaybe<SortEnum>;
  /** Distance to the address, requested by distance filter. Applicable only with distance filter. If distance sort order is present, all other sort orders will be ignored. */
  distance?: InputMaybe<SortEnum>;
  /** Contact email of the pickup location. */
  email?: InputMaybe<SortEnum>;
  /** Contact fax of the pickup location. */
  fax?: InputMaybe<SortEnum>;
  /** Geographic latitude where pickup location is placed. */
  latitude?: InputMaybe<SortEnum>;
  /** Geographic longitude where pickup location is placed. */
  longitude?: InputMaybe<SortEnum>;
  /** The pickup location name. Customer use this to identify the pickup location. */
  name?: InputMaybe<SortEnum>;
  /** Contact phone number of the pickup location. */
  phone?: InputMaybe<SortEnum>;
  /** A code assigned to pickup location to identify the source. */
  pickup_location_code?: InputMaybe<SortEnum>;
  /** Postcode where pickup location is placed. */
  postcode?: InputMaybe<SortEnum>;
  /** Name of the region. */
  region?: InputMaybe<SortEnum>;
  /** Id of the region. */
  region_id?: InputMaybe<SortEnum>;
  /** Street where pickup location is placed. */
  street?: InputMaybe<SortEnum>;
};

/** Top level object returned in a pickup locations search. */
export type PickupLocations = {
  __typename?: 'PickupLocations';
  /** An array of pickup locations that match the specific search request. */
  items?: Maybe<Array<Maybe<PickupLocation>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products returned. */
  total_count?: Maybe<Scalars['Int']>;
};

export type PlaceOrderInput = {
  cart_id: Scalars['String'];
};

export type PlaceOrderOutput = {
  __typename?: 'PlaceOrderOutput';
  order: Order;
};

/** Price is deprecated, replaced by ProductPrice. The Price object defines the price of a product as well as any tax-related adjustments. */
export type Price = {
  __typename?: 'Price';
  /**
   * An array that provides information about tax, weee, or weee_tax adjustments.
   * @deprecated Price is deprecated, use ProductPrice.
   */
  adjustments?: Maybe<Array<Maybe<PriceAdjustment>>>;
  /**
   * The price of a product plus a three-letter currency code.
   * @deprecated Price is deprecated, use ProductPrice.
   */
  amount?: Maybe<Money>;
};

/** PriceAdjustment is deprecated. Taxes will be included or excluded in the price. The PricedAdjustment object defines the amount of money to apply as an adjustment, the type of adjustment to apply, and whether the item is included or excluded from the adjustment. */
export type PriceAdjustment = {
  __typename?: 'PriceAdjustment';
  /** The amount of the price adjustment and its currency code. */
  amount?: Maybe<Money>;
  /**
   * Indicates whether the adjustment involves tax, weee, or weee_tax.
   * @deprecated PriceAdjustment is deprecated.
   */
  code?: Maybe<PriceAdjustmentCodesEnum>;
  /**
   * Indicates whether the entity described by the code attribute is included or excluded from the adjustment.
   * @deprecated PriceAdjustment is deprecated.
   */
  description?: Maybe<PriceAdjustmentDescriptionEnum>;
};

/** PriceAdjustment.code is deprecated. This enumeration contains values defined in modules other than the Catalog module. */
export enum PriceAdjustmentCodesEnum {
  /** @deprecated PriceAdjustmentCodesEnum is deprecated. Tax is included or excluded in price. Tax is not shown separtely in Catalog */
  Tax = 'TAX',
  /** @deprecated WEEE code is deprecated, use fixed_product_taxes.label */
  Weee = 'WEEE',
  /** @deprecated Use fixed_product_taxes. PriceAdjustmentCodesEnum is deprecated. Tax is included or excluded in price. Tax is not shown separtely in Catalog */
  WeeeTax = 'WEEE_TAX'
}

/** PriceAdjustmentDescriptionEnum is deprecated. This enumeration states whether a price adjustment is included or excluded. */
export enum PriceAdjustmentDescriptionEnum {
  /** @deprecated  */
  Excluded = 'EXCLUDED',
  /** @deprecated  */
  Included = 'INCLUDED'
}

/** Price range for a product. If the product has a single price, the minimum and maximum price will be the same. */
export type PriceRange = {
  __typename?: 'PriceRange';
  /** The highest possible price for the product. */
  maximum_price?: Maybe<ProductPrice>;
  /** The lowest possible price for the product. */
  minimum_price: ProductPrice;
};

/** This enumeration the price type. */
export enum PriceTypeEnum {
  /** @deprecated  */
  Dynamic = 'DYNAMIC',
  /** @deprecated  */
  Fixed = 'FIXED',
  /** @deprecated  */
  Percent = 'PERCENT'
}

/** This enumeration defines whether a bundle product's price is displayed as the lowest possible value or as a range. */
export enum PriceViewEnum {
  /** @deprecated  */
  AsLowAs = 'AS_LOW_AS',
  /** @deprecated  */
  PriceRange = 'PRICE_RANGE'
}

export type ProductAttribute = {
  __typename?: 'ProductAttribute';
  /** The unique identifier for a product attribute code. */
  code: Scalars['String'];
  /** The display value of the attribute */
  value: Scalars['String'];
};

/** ProductAttributeFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductAttributeFilterInput = {
  /** Attribute label: Brands */
  brands?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use `category_uid` to filter product by category id. */
  category_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter product by the unique ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Color */
  color?: InputMaybe<FilterEqualTypeInput>;
  created_at?: InputMaybe<FilterTypeInput>;
  /** Attribute label: Description */
  description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Fabric */
  fabric?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Product Name */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Filter product by news_from_date. */
  news_from_date?: InputMaybe<FilterTypeInput>;
  /** Filter product by news_to_date. */
  news_to_date?: InputMaybe<FilterTypeInput>;
  /** Attribute label: Pattern */
  pattern?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Price */
  price?: InputMaybe<FilterRangeTypeInput>;
  /** Attribute label: Short Description */
  short_description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Size */
  size?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: SKU */
  sku?: InputMaybe<FilterEqualTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterEqualTypeInput>;
};

/** ProductAttributeSortInput specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option */
export type ProductAttributeSortInput = {
  /** Attribute label: Product Name */
  name?: InputMaybe<SortEnum>;
  /** Sort by the position assigned to each product. */
  position?: InputMaybe<SortEnum>;
  /** Attribute label: Price */
  price?: InputMaybe<SortEnum>;
  /** Sort by the search relevance score (default). */
  relevance?: InputMaybe<SortEnum>;
  /** Attribute label: Size */
  size?: InputMaybe<SortEnum>;
};

export type ProductBlock = Block & {
  __typename?: 'ProductBlock';
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  name?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
};

/** A discount applied to a product price. */
export type ProductDiscount = {
  __typename?: 'ProductDiscount';
  /** The actual value of the discount. */
  amount_off?: Maybe<Scalars['Float']>;
  /** The discount expressed a percentage. */
  percent_off?: Maybe<Scalars['Float']>;
};

/** ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductFilterInput = {
  /** Category ID the product belongs to. */
  category_id?: InputMaybe<FilterTypeInput>;
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<FilterTypeInput>;
  /** Timestamp indicating when the product was created. */
  created_at?: InputMaybe<FilterTypeInput>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<FilterTypeInput>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<FilterTypeInput>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<FilterTypeInput>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<FilterTypeInput>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<FilterTypeInput>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<FilterTypeInput>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<FilterTypeInput>;
  /** The numeric maximal price of the product. Do not include the currency code. */
  max_price?: InputMaybe<FilterTypeInput>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<FilterTypeInput>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<FilterTypeInput>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<FilterTypeInput>;
  /** The numeric minimal price of the product. Do not include the currency code. */
  min_price?: InputMaybe<FilterTypeInput>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<FilterTypeInput>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<FilterTypeInput>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<FilterTypeInput>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison. */
  or?: InputMaybe<ProductFilterInput>;
  /** The price of an item. */
  price?: InputMaybe<FilterTypeInput>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<FilterTypeInput>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<FilterTypeInput>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<FilterTypeInput>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<FilterTypeInput>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<FilterTypeInput>;
  /** The discounted price of the product. Do not include the currency code. */
  special_price?: InputMaybe<FilterTypeInput>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<FilterTypeInput>;
  /** The file name of a swatch image */
  swatch_image?: InputMaybe<FilterTypeInput>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<FilterTypeInput>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<FilterTypeInput>;
  /** Timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<FilterTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterTypeInput>;
  url_path?: InputMaybe<FilterTypeInput>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<FilterTypeInput>;
};

/** Product image information. Contains the image URL and label. */
export type ProductImage = MediaGalleryInterface & {
  __typename?: 'ProductImage';
  /** Whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>;
};

/** Product Information used for Pickup Locations search. */
export type ProductInfoInput = {
  /** Product SKU. */
  sku: Scalars['String'];
};

/** The ProductInterface contains attributes that are common to all types of products. Note that descriptions may not be available for custom and EAV attributes. */
export type ProductInterface = {
  allow_amount_range?: Maybe<Scalars['Int']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  brands?: Maybe<Scalars['Int']>;
  can_redeem?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  expire_after_day?: Maybe<Scalars['String']>;
  fabric?: Maybe<Scalars['Int']>;
  facebook_age_group?: Maybe<Scalars['String']>;
  facebook_age_range?: Maybe<Scalars['String']>;
  facebook_baby_food_stage?: Maybe<Scalars['String']>;
  facebook_capacity?: Maybe<Scalars['String']>;
  facebook_color?: Maybe<Scalars['String']>;
  facebook_compatible_devices?: Maybe<Scalars['String']>;
  facebook_decor_style?: Maybe<Scalars['String']>;
  facebook_digital_zoom?: Maybe<Scalars['String']>;
  facebook_display_technology?: Maybe<Scalars['String']>;
  facebook_finish?: Maybe<Scalars['String']>;
  facebook_gemstone?: Maybe<Scalars['String']>;
  facebook_gender?: Maybe<Scalars['String']>;
  facebook_health_concern?: Maybe<Scalars['String']>;
  facebook_ingredients?: Maybe<Scalars['String']>;
  facebook_is_assembly_required?: Maybe<Scalars['String']>;
  facebook_material?: Maybe<Scalars['String']>;
  facebook_maximum_weight?: Maybe<Scalars['String']>;
  facebook_megapixels?: Maybe<Scalars['String']>;
  facebook_minimum_weight?: Maybe<Scalars['String']>;
  facebook_model?: Maybe<Scalars['String']>;
  facebook_number_of_licenses?: Maybe<Scalars['String']>;
  facebook_operating_system?: Maybe<Scalars['String']>;
  facebook_optical_zoom?: Maybe<Scalars['String']>;
  facebook_package_quantity?: Maybe<Scalars['String']>;
  facebook_pattern?: Maybe<Scalars['String']>;
  facebook_product_depth?: Maybe<Scalars['String']>;
  facebook_product_form?: Maybe<Scalars['String']>;
  facebook_product_height?: Maybe<Scalars['String']>;
  facebook_product_length?: Maybe<Scalars['String']>;
  facebook_product_weight?: Maybe<Scalars['String']>;
  facebook_product_width?: Maybe<Scalars['String']>;
  facebook_recommended_use?: Maybe<Scalars['String']>;
  facebook_resolution?: Maybe<Scalars['String']>;
  facebook_scent?: Maybe<Scalars['String']>;
  facebook_screen_size?: Maybe<Scalars['String']>;
  facebook_shoe_width?: Maybe<Scalars['String']>;
  facebook_size?: Maybe<Scalars['String']>;
  facebook_storage_capacity?: Maybe<Scalars['String']>;
  facebook_style?: Maybe<Scalars['String']>;
  facebook_system_requirements?: Maybe<Scalars['String']>;
  facebook_thread_count?: Maybe<Scalars['String']>;
  facebook_video_game_platform?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  gift_card_amounts?: Maybe<Scalars['String']>;
  gift_card_type?: Maybe<Scalars['Int']>;
  gift_code_pattern?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  gift_product_template?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  max_amount?: Maybe<Scalars['Float']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  min_amount?: Maybe<Scalars['Float']>;
  mpgiftcard_conditions?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  price_rate?: Maybe<Scalars['Float']>;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The CheckWishlistProduct  */
  wishlistData?: Maybe<WishlistData>;
};


/** The ProductInterface contains attributes that are common to all types of products. Note that descriptions may not be available for custom and EAV attributes. */
export type ProductInterfaceReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** ProductLinks is an implementation of ProductLinksInterface. */
export type ProductLinks = ProductLinksInterface & {
  __typename?: 'ProductLinks';
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']>;
};

/** ProductLinks contains information about linked products, including the link type and product type of each item. */
export type ProductLinksInterface = {
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']>;
};

/** ProductMediaGalleryEntriesContent contains an image in base64 format and basic information about the image. */
export type ProductMediaGalleryEntriesContent = {
  __typename?: 'ProductMediaGalleryEntriesContent';
  /** The image in base64 format. */
  base64_encoded_data?: Maybe<Scalars['String']>;
  /** The file name of the image. */
  name?: Maybe<Scalars['String']>;
  /** The MIME type of the file, such as image/png. */
  type?: Maybe<Scalars['String']>;
};

/** ProductMediaGalleryEntriesVideoContent contains a link to a video file and basic information about the video. */
export type ProductMediaGalleryEntriesVideoContent = {
  __typename?: 'ProductMediaGalleryEntriesVideoContent';
  /** Must be external-video. */
  media_type?: Maybe<Scalars['String']>;
  /** A description of the video. */
  video_description?: Maybe<Scalars['String']>;
  /** Optional data about the video. */
  video_metadata?: Maybe<Scalars['String']>;
  /** Describes the video source. */
  video_provider?: Maybe<Scalars['String']>;
  /** The title of the video. */
  video_title?: Maybe<Scalars['String']>;
  /** The URL to the video. */
  video_url?: Maybe<Scalars['String']>;
};

/** Represents a product price. */
export type ProductPrice = {
  __typename?: 'ProductPrice';
  /** The price discount. Represents the difference between the regular and final price. */
  discount?: Maybe<ProductDiscount>;
  /** The final price of the product after discounts applied. */
  final_price: Money;
  /** The multiple FPTs that can be applied to a product price. */
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  /** The regular price of the product. */
  regular_price: Money;
};

/** ProductPrices is deprecated, replaced by PriceRange. The ProductPrices object contains the regular price of an item, as well as its minimum and maximum prices. Only composite products, which include bundle, configurable, and grouped products, can contain a minimum and maximum price. */
export type ProductPrices = {
  __typename?: 'ProductPrices';
  /**
   * The highest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the to value.
   * @deprecated Use PriceRange.maximum_price.
   */
  maximalPrice?: Maybe<Price>;
  /**
   * The lowest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the from value.
   * @deprecated Use PriceRange.minimum_price.
   */
  minimalPrice?: Maybe<Price>;
  /**
   * The base price of a product.
   * @deprecated Use regular_price from PriceRange.minimum_price or PriceRange.maximum_price.
   */
  regularPrice?: Maybe<Price>;
};

/** Details of a product review */
export type ProductReview = {
  __typename?: 'ProductReview';
  /** The average rating for product review. */
  average_rating: Scalars['Float'];
  /** Date indicating when the review was created. */
  created_at: Scalars['String'];
  /** The customer's nickname. Defaults to the customer name, if logged in */
  nickname: Scalars['String'];
  /** Contains details about the reviewed product */
  product: ProductInterface;
  /** An array of ratings by rating category, such as quality, price, and value */
  ratings_breakdown: Array<Maybe<ProductReviewRating>>;
  /** The summary (title) of the review */
  summary: Scalars['String'];
  /** The review text. */
  text: Scalars['String'];
};

export type ProductReviewRating = {
  __typename?: 'ProductReviewRating';
  /** The label assigned to an aspect of a product that is being rated, such as quality or price */
  name: Scalars['String'];
  /** The rating value given by customer. By default, possible values range from 1 to 5. */
  value: Scalars['String'];
};

export type ProductReviewRatingInput = {
  /** An encoded rating ID. */
  id: Scalars['String'];
  /** An encoded rating value id. */
  value_id: Scalars['String'];
};

export type ProductReviewRatingMetadata = {
  __typename?: 'ProductReviewRatingMetadata';
  /** An encoded rating ID. */
  id: Scalars['String'];
  /** The label assigned to an aspect of a product that is being rated, such as quality or price */
  name: Scalars['String'];
  /** List of product review ratings sorted by position. */
  values: Array<Maybe<ProductReviewRatingValueMetadata>>;
};

export type ProductReviewRatingValueMetadata = {
  __typename?: 'ProductReviewRatingValueMetadata';
  /** A ratings scale, such as the number of stars awarded */
  value: Scalars['String'];
  /** An encoded rating value id. */
  value_id: Scalars['String'];
};

export type ProductReviewRatingsMetadata = {
  __typename?: 'ProductReviewRatingsMetadata';
  /** List of product reviews sorted by position */
  items: Array<Maybe<ProductReviewRatingMetadata>>;
};

export type ProductReviews = {
  __typename?: 'ProductReviews';
  /** An array of product reviews. */
  items: Array<Maybe<ProductReview>>;
  /** Metadata for pagination rendering. */
  page_info: SearchResultPageInfo;
};

/** ProductSortInput is deprecated, use @ProductAttributeSortInput instead. ProductSortInput specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type ProductSortInput = {
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<SortEnum>;
  /** Timestamp indicating when the product was created. */
  created_at?: InputMaybe<SortEnum>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<SortEnum>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<SortEnum>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<SortEnum>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<SortEnum>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<SortEnum>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<SortEnum>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<SortEnum>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<SortEnum>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<SortEnum>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<SortEnum>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<SortEnum>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<SortEnum>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<SortEnum>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<SortEnum>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<SortEnum>;
  /** The price of the item. */
  price?: InputMaybe<SortEnum>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<SortEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<SortEnum>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<SortEnum>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<SortEnum>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<SortEnum>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<SortEnum>;
  /** The discounted price of the product. */
  special_price?: InputMaybe<SortEnum>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<SortEnum>;
  /** The file name of a swatch image */
  swatch_image?: InputMaybe<SortEnum>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<SortEnum>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<SortEnum>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<SortEnum>;
  /** Timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<SortEnum>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<SortEnum>;
  url_path?: InputMaybe<SortEnum>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<SortEnum>;
};

/** This enumeration states whether a product stock status is in stock or out of stock */
export enum ProductStockStatus {
  /** @deprecated  */
  InStock = 'IN_STOCK',
  /** @deprecated  */
  OutOfStock = 'OUT_OF_STOCK'
}

/** ProductTierPrices is deprecated and has been replaced by TierPrice. The ProductTierPrices object defines a tier price, which is a quantity discount offered to a specific customer group. */
export type ProductTierPrices = {
  __typename?: 'ProductTierPrices';
  /**
   * The ID of the customer group.
   * @deprecated customer_group_id is not relevant for storefront.
   */
  customer_group_id?: Maybe<Scalars['String']>;
  /**
   * The percentage discount of the item.
   * @deprecated ProductTierPrices is deprecated. Use TierPrice.discount.
   */
  percentage_value?: Maybe<Scalars['Float']>;
  /**
   * The number of items that must be purchased to qualify for tier pricing.
   * @deprecated ProductTierPrices is deprecated, use TierPrice.quantity.
   */
  qty?: Maybe<Scalars['Float']>;
  /**
   * The price of the fixed price item.
   * @deprecated ProductTierPrices is deprecated. Use TierPrice.final_price
   */
  value?: Maybe<Scalars['Float']>;
  /**
   * The ID assigned to the website.
   * @deprecated website_id is not relevant for storefront.
   */
  website_id?: Maybe<Scalars['Float']>;
};

/** Contains information about a product video. */
export type ProductVideo = MediaGalleryInterface & {
  __typename?: 'ProductVideo';
  /** Whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>;
  /** Contains a ProductMediaGalleryEntriesVideoContent object. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** The Products object is the top-level object returned in a product search. */
export type Products = {
  __typename?: 'Products';
  /** Layered navigation aggregations. */
  aggregations?: Maybe<Array<Maybe<Aggregation>>>;
  /**
   * Layered navigation filters array.
   * @deprecated Use aggregations instead
   */
  filters?: Maybe<Array<Maybe<LayerFilter>>>;
  /** An array of products that match the specified search criteria. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** An object that includes the default sort field and all available sort fields. */
  sort_fields?: Maybe<SortFields>;
  /** The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  /** The MpGiftCardPreview  */
  MpGiftcardPreview?: Maybe<MpGiftCardPreview>;
  /** Track Order */
  TrackMyOrder?: Maybe<Track>;
  /** Get a list of available store views and their config information. */
  availableStores?: Maybe<Array<Maybe<StoreConfig>>>;
  blogAuthor?: Maybe<BlogAuthor>;
  blogCategories?: Maybe<BlogCategoriesOutput>;
  blogCategory?: Maybe<BlogCategory>;
  /** The comments query searches for posts that match the criteria specified in the search and filter attributes */
  blogComments?: Maybe<BlogCommentsOutput>;
  blogPost?: Maybe<BlogPost>;
  /** The posts query searches for posts that match the criteria specified in the search and filter attributes */
  blogPosts?: Maybe<BlogPostsOutput>;
  blogTag?: Maybe<BlogTag>;
  blogTags?: Maybe<BlogTagsOutput>;
  /** Get job details. */
  careerform?: Maybe<Array<Maybe<JobDetails>>>;
  /** Returns information about shopping cart */
  cart?: Maybe<Cart>;
  categories?: Maybe<CategoryResult>;
  /**
   * The category query searches for categories that match the criteria specified in the search and filter attributes.
   * @deprecated Use 'categoryList' query instead of 'category' query
   */
  category?: Maybe<CategoryTree>;
  /** Returns an array of categories based on the specified filters. */
  categoryList?: Maybe<Array<Maybe<CategoryTree>>>;
  /** Retrieves an array of configuration data for the chat widget. */
  chatData?: Maybe<ChatData>;
  /** The Checkout Agreements information */
  checkoutAgreements?: Maybe<Array<Maybe<CheckoutAgreement>>>;
  /** The CMS block query returns information about CMS blocks */
  cmsBlocks?: Maybe<CmsBlocks>;
  /** The CMS page query returns information about a CMS page */
  cmsPage?: Maybe<CmsPage>;
  /** Return products that have been added to the specified compare list */
  compareList?: Maybe<CompareList>;
  /** The countries query provides information for all countries. */
  countries?: Maybe<Array<Maybe<Country>>>;
  /** The countries query provides information for a single country. */
  country?: Maybe<Country>;
  /** Verify Forgpt Password OTP */
  createAccountOTPVerify?: Maybe<MobileForgotPassworOtpVerifyOtpOutput>;
  /** The currency query returns information about store currency. */
  currency?: Maybe<Currency>;
  /** The customAttributeMetadata query returns the attribute type, given an attribute code and entity type */
  customAttributeMetadata?: Maybe<CustomAttributeMetadata>;
  /** The customer query returns information about a customer account */
  customer?: Maybe<Customer>;
  /** Returns information about the customer shopping cart */
  customerCart: Cart;
  /** The query returns the contents of a customer's downloadable products */
  customerDownloadableProducts?: Maybe<CustomerDownloadableProducts>;
  /** @deprecated Use orders from customer instead */
  customerOrders?: Maybe<CustomerOrders>;
  /** Return a list of customer payment tokens */
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  /** Returns status of Easy Email Capture for Checkout. */
  emailCaptureCheckout?: Maybe<IsConfigSettingEnabledOutput>;
  /** Returns status of Easy Email Capture for Newsletter. */
  emailCaptureNewsletter?: Maybe<IsConfigSettingEnabledOutput>;
  /** Verify Forgpt Password OTP */
  forgotPassworOTPVerify?: Maybe<MobileForgotPassworOtpVerifyOtpOutput>;
  /** Get All  Faqs */
  getFaqData?: Maybe<Array<Maybe<FaqGroups>>>;
  /** Retrieve secure PayPal url for Payments Pro Hosted Solution transaction. */
  getHostedProUrl?: Maybe<HostedProUrl>;
  /** Retrieve payment credentials for transaction. Use this query for Payflow Link and Payments Advanced payment methods. */
  getPayflowLinkToken?: Maybe<PayflowLinkToken>;
  /** The Homepage graphql */
  homepage?: Maybe<HomePageContent>;
  isEmailAvailable?: Maybe<IsEmailAvailableOutput>;
  /** Verify Mobile OTP */
  loginOTPVerify?: Maybe<MobileLoginVerifyOtpOutput>;
  /** Check code information */
  mpGiftCardCheckCode?: Maybe<CheckGiftCodeOutput>;
  /** Get My Gift Cards Page config data */
  mpGiftCardDashboardConfig?: Maybe<MpGiftCardDashboardConfigOutput>;
  /** Searches for Best Sellers information matches the filter. */
  mpSmtpBestsellers?: Maybe<SmtpBestsellersOutput>;
  /** Retrieves information about an order by order id. */
  orderData?: Maybe<Order>;
  /** The pickup locations query searches for locations that match the search request requirements. */
  pickupLocations?: Maybe<PickupLocations>;
  /** Retrieves metadata required by clients to render the Reviews section. */
  productReviewRatingsMetadata: ProductReviewRatingsMetadata;
  /** The products query searches for products that match the criteria specified in the search and filter attributes. */
  products?: Maybe<Products>;
  /** Recentlyviewed */
  recentlyViewed?: Maybe<Recentlyviewed>;
  /** Return the full details for a specified product, category, or CMS page given the specified url_key, appended by the url_suffix, if one exists */
  route?: Maybe<RoutableInterface>;
  /** The store config query */
  storeConfig?: Maybe<StoreConfig>;
  /** Retrieves an array of configuration data for different types of tracking. */
  trackingData?: Maybe<TrackingData>;
  /**
   * The urlResolver query returns the relative URL for a specified product, category or CMS page, using as input a url_key appended by the url_suffix, if one exists
   * @deprecated Use the 'route' query instead
   */
  urlResolver?: Maybe<EntityUrl>;
  /** wedding album. */
  wedding_album?: Maybe<WeddingAlbum>;
  /**
   * The wishlist query returns the contents of a customer's wish list
   * @deprecated Moved under `Customer` `wishlist`
   */
  wishlist?: Maybe<WishlistOutput>;
};


export type QueryMpGiftcardPreviewArgs = {
  input: MpGiftcardPreviewInput;
};


export type QueryTrackMyOrderArgs = {
  order_number?: InputMaybe<Scalars['String']>;
};


export type QueryAvailableStoresArgs = {
  useCurrentGroup?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBlogAuthorArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryBlogCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryBlogCommentsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<BlogCommentsFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryBlogPostArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryBlogPostsArgs = {
  allPosts?: InputMaybe<Scalars['Boolean']>;
  currentPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<BlogPostsFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sortFiled?: InputMaybe<Scalars['String']>;
};


export type QueryBlogTagArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryCartArgs = {
  cart_id: Scalars['String'];
};


export type QueryCategoriesArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filters?: InputMaybe<CategoryFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryCategoryListArgs = {
  filters?: InputMaybe<CategoryFilterInput>;
};


export type QueryCmsBlocksArgs = {
  identifiers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCmsPageArgs = {
  id?: InputMaybe<Scalars['Int']>;
  identifier?: InputMaybe<Scalars['String']>;
};


export type QueryCompareListArgs = {
  uid: Scalars['ID'];
};


export type QueryCountryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryCreateAccountOtpVerifyArgs = {
  mobileNumber?: InputMaybe<Scalars['String']>;
  otp?: InputMaybe<Scalars['String']>;
  websiteId?: InputMaybe<Scalars['Int']>;
};


export type QueryCustomAttributeMetadataArgs = {
  attributes: Array<AttributeInput>;
};


export type QueryForgotPassworOtpVerifyArgs = {
  mobileNumber?: InputMaybe<Scalars['String']>;
  otp?: InputMaybe<Scalars['String']>;
  websiteId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetHostedProUrlArgs = {
  input: HostedProUrlInput;
};


export type QueryGetPayflowLinkTokenArgs = {
  input: PayflowLinkTokenInput;
};


export type QueryIsEmailAvailableArgs = {
  email: Scalars['String'];
};


export type QueryLoginOtpVerifyArgs = {
  mobileNumber?: InputMaybe<Scalars['String']>;
  otp?: InputMaybe<Scalars['String']>;
  websiteId?: InputMaybe<Scalars['Int']>;
};


export type QueryMpGiftCardCheckCodeArgs = {
  code: Scalars['String'];
};


export type QueryMpSmtpBestsellersArgs = {
  app_id: Scalars['String'];
  filters?: InputMaybe<MpFilters>;
  secret_key: Scalars['String'];
};


export type QueryOrderDataArgs = {
  orderId: Scalars['String'];
};


export type QueryPickupLocationsArgs = {
  area?: InputMaybe<AreaInput>;
  currentPage?: InputMaybe<Scalars['Int']>;
  filters?: InputMaybe<PickupLocationFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
  productsInfo?: InputMaybe<Array<InputMaybe<ProductInfoInput>>>;
  sort?: InputMaybe<PickupLocationSortInput>;
};


export type QueryProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<ProductAttributeFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};


export type QueryRecentlyViewedArgs = {
  filter?: InputMaybe<RecentlyviewedFilterInput>;
};


export type QueryRouteArgs = {
  url: Scalars['String'];
};


export type QueryUrlResolverArgs = {
  url: Scalars['String'];
};


export type QueryWedding_AlbumArgs = {
  input?: InputMaybe<GetAlbumInput>;
};

export type RazorpayOrder = {
  __typename?: 'RazorpayOrder';
  amount?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  order_quote_id?: Maybe<Scalars['String']>;
  rzp_order_id?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type Recentlyviewed = {
  __typename?: 'Recentlyviewed';
  products?: Maybe<Array<Maybe<ProductInterface>>>;
};

export type RecentlyviewedFilterInput = {
  uid?: InputMaybe<Scalars['String']>;
};

export type Region = {
  __typename?: 'Region';
  code?: Maybe<Scalars['String']>;
  /** The unique ID for a `Region` object. */
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type RemoveCouponFromCartInput = {
  cart_id: Scalars['String'];
};

export type RemoveCouponFromCartOutput = {
  __typename?: 'RemoveCouponFromCartOutput';
  cart?: Maybe<Cart>;
};

export type RemoveItemFromCartInput = {
  cart_id: Scalars['String'];
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']>;
  /** Required field. The unique ID for a `CartItemInterface` object */
  cart_item_uid?: InputMaybe<Scalars['ID']>;
};

export type RemoveItemFromCartOutput = {
  __typename?: 'RemoveItemFromCartOutput';
  cart: Cart;
};

export type RemoveProductsFromCompareListInput = {
  /** An array of product IDs to remove from the compare list */
  products: Array<InputMaybe<Scalars['ID']>>;
  /** The unique identifier of the compare list to modify */
  uid: Scalars['ID'];
};

/** Contains the customer's wish list and any errors encountered */
export type RemoveProductsFromWishlistOutput = {
  __typename?: 'RemoveProductsFromWishlistOutput';
  /** An array of errors encountered while deleting products from a wish list */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with after items were successfully deleted */
  wishlist: Wishlist;
};

export type ReorderItemsOutput = {
  __typename?: 'ReorderItemsOutput';
  /** Contains detailed information about the customer's cart. */
  cart: Cart;
  /** An array of reordering errors. */
  userInputErrors: Array<Maybe<CheckoutUserInputError>>;
};

export type RevokeCustomerTokenOutput = {
  __typename?: 'RevokeCustomerTokenOutput';
  result: Scalars['Boolean'];
};

/** Routable entities serve as the model for a rendered page */
export type RoutableInterface = {
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect */
  redirect_code: Scalars['Int'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

/** Comment item details */
export type SalesCommentItem = {
  __typename?: 'SalesCommentItem';
  /** The text of the message */
  message: Scalars['String'];
  /** The timestamp of the comment */
  timestamp: Scalars['String'];
};

export type SalesItemInterface = {
  __typename?: 'SalesItemInterface';
  /** The entered gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
};

/** SearchResultPageInfo provides navigation for the query response */
export type SearchResultPageInfo = {
  __typename?: 'SearchResultPageInfo';
  /** Specifies which page of results to return */
  current_page?: Maybe<Scalars['Int']>;
  /** Specifies the maximum number of items to return */
  page_size?: Maybe<Scalars['Int']>;
  /** Total pages */
  total_pages?: Maybe<Scalars['Int']>;
};

export type SelectedBundleOption = {
  __typename?: 'SelectedBundleOption';
  /** @deprecated Use `uid` instead */
  id: Scalars['Int'];
  label: Scalars['String'];
  type: Scalars['String'];
  /** The unique ID for a `SelectedBundleOption` object */
  uid: Scalars['ID'];
  values: Array<Maybe<SelectedBundleOptionValue>>;
};

export type SelectedBundleOptionValue = {
  __typename?: 'SelectedBundleOptionValue';
  /** Use `uid` instead */
  id: Scalars['Int'];
  label: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  /** The unique ID for a `SelectedBundleOptionValue` object */
  uid: Scalars['ID'];
};

export type SelectedConfigurableOption = {
  __typename?: 'SelectedConfigurableOption';
  /** The unique ID for a `ConfigurableProductOptions` object */
  configurable_product_option_uid: Scalars['ID'];
  /** The unique ID for a `ConfigurableProductOptionsValues` object */
  configurable_product_option_value_uid: Scalars['ID'];
  /** @deprecated Use SelectedConfigurableOption.configurable_product_option_uid instead */
  id: Scalars['Int'];
  option_label: Scalars['String'];
  /** @deprecated Use SelectedConfigurableOption.configurable_product_option_value_uid instead */
  value_id: Scalars['Int'];
  value_label: Scalars['String'];
};

export type SelectedCustomizableOption = {
  __typename?: 'SelectedCustomizableOption';
  /** The unique ID for a `CustomizableRadioOption`, `CustomizableDropDownOption`, `CustomizableMultipleOption`, etc. of `CustomizableOptionInterface` objects */
  customizable_option_uid: Scalars['ID'];
  /** @deprecated Use SelectedCustomizableOption.customizable_option_uid instead */
  id: Scalars['Int'];
  is_required: Scalars['Boolean'];
  label: Scalars['String'];
  sort_order: Scalars['Int'];
  type: Scalars['String'];
  values: Array<Maybe<SelectedCustomizableOptionValue>>;
};

export type SelectedCustomizableOptionValue = {
  __typename?: 'SelectedCustomizableOptionValue';
  /** The unique ID for a `CustomizableMultipleValue`, `CustomizableRadioValue`, `CustomizableCheckboxValue`, `CustomizableDropDownValue`, etc. objects */
  customizable_option_value_uid: Scalars['ID'];
  /** @deprecated Use SelectedCustomizableOptionValue.customizable_option_value_uid instead */
  id: Scalars['Int'];
  label: Scalars['String'];
  price: CartItemSelectedOptionValuePrice;
  value: Scalars['String'];
};

export type SelectedGiftCardOption = {
  __typename?: 'SelectedGiftCardOption';
  code?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['String']>;
  option_id?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type SelectedPaymentMethod = {
  __typename?: 'SelectedPaymentMethod';
  /** The payment method code */
  code: Scalars['String'];
  /** The purchase order number. */
  purchase_order_number?: Maybe<Scalars['String']>;
  /** The payment method title. */
  title: Scalars['String'];
};

export type SelectedShippingMethod = {
  __typename?: 'SelectedShippingMethod';
  amount: Money;
  /** @deprecated The field should not be used on the storefront */
  base_amount?: Maybe<Money>;
  carrier_code: Scalars['String'];
  carrier_title: Scalars['String'];
  method_code: Scalars['String'];
  method_title: Scalars['String'];
};

export type SendEmailToFriendInput = {
  product_id: Scalars['Int'];
  recipients: Array<InputMaybe<SendEmailToFriendRecipientInput>>;
  sender: SendEmailToFriendSenderInput;
};

export type SendEmailToFriendOutput = {
  __typename?: 'SendEmailToFriendOutput';
  recipients?: Maybe<Array<Maybe<SendEmailToFriendRecipient>>>;
  sender?: Maybe<SendEmailToFriendSender>;
};

export type SendEmailToFriendRecipient = {
  __typename?: 'SendEmailToFriendRecipient';
  email: Scalars['String'];
  name: Scalars['String'];
};

export type SendEmailToFriendRecipientInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type SendEmailToFriendSender = {
  __typename?: 'SendEmailToFriendSender';
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
};

export type SendEmailToFriendSenderInput = {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
};

export type SendFriendConfiguration = {
  __typename?: 'SendFriendConfiguration';
  /** Indicates whether the Email to a Friend feature is enabled. */
  enabled_for_customers: Scalars['Boolean'];
  /** Indicates whether the Email to a Friend feature is enabled for guests. */
  enabled_for_guests: Scalars['Boolean'];
};

export type SetBillingAddressOnCartInput = {
  billing_address: BillingAddressInput;
  cart_id: Scalars['String'];
};

export type SetBillingAddressOnCartOutput = {
  __typename?: 'SetBillingAddressOnCartOutput';
  cart: Cart;
};

export type SetGuestEmailOnCartInput = {
  cart_id: Scalars['String'];
  email: Scalars['String'];
};

export type SetGuestEmailOnCartOutput = {
  __typename?: 'SetGuestEmailOnCartOutput';
  cart: Cart;
};

export type SetPaymentMethodAndPlaceOrderInput = {
  cart_id: Scalars['String'];
  payment_method: PaymentMethodInput;
};

export type SetPaymentMethodOnCartInput = {
  cart_id: Scalars['String'];
  payment_method: PaymentMethodInput;
};

export type SetPaymentMethodOnCartOutput = {
  __typename?: 'SetPaymentMethodOnCartOutput';
  cart: Cart;
};

export type SetRzpPaymentDetailsOnCartInput = {
  cart_id: Scalars['String'];
  rzp_order_id: Scalars['String'];
  rzp_payment_id: Scalars['String'];
  rzp_signature: Scalars['String'];
};

export type SetRzpPaymentDetailsOnCartOutput = {
  __typename?: 'SetRzpPaymentDetailsOnCartOutput';
  cart: Cart;
};

export type SetShippingAddressesOnCartInput = {
  cart_id: Scalars['String'];
  shipping_addresses: Array<InputMaybe<ShippingAddressInput>>;
};

export type SetShippingAddressesOnCartOutput = {
  __typename?: 'SetShippingAddressesOnCartOutput';
  cart: Cart;
};

export type SetShippingMethodsOnCartInput = {
  cart_id: Scalars['String'];
  shipping_methods: Array<InputMaybe<ShippingMethodInput>>;
};

export type SetShippingMethodsOnCartOutput = {
  __typename?: 'SetShippingMethodsOnCartOutput';
  cart: Cart;
};

/** This enumeration defines whether bundle items must be shipped together. */
export enum ShipBundleItemsEnum {
  /** @deprecated  */
  Separately = 'SEPARATELY',
  /** @deprecated  */
  Together = 'TOGETHER'
}

export type ShipmentItem = ShipmentItemInterface & {
  __typename?: 'ShipmentItem';
  /** The unique ID for a `ShipmentItemInterface` object */
  id: Scalars['ID'];
  /** Associated order item */
  order_item?: Maybe<OrderItemInterface>;
  /** Name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** Sale price for the base product */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** Number of shipped items */
  quantity_shipped: Scalars['Float'];
};

/** Order shipment item details */
export type ShipmentItemInterface = {
  /** The unique ID for a `ShipmentItemInterface` object */
  id: Scalars['ID'];
  /** Associated order item */
  order_item?: Maybe<OrderItemInterface>;
  /** Name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** Sale price for the base product */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** Number of shipped items */
  quantity_shipped: Scalars['Float'];
};

/** Order shipment tracking details */
export type ShipmentTracking = {
  __typename?: 'ShipmentTracking';
  /** The shipping carrier for the order delivery */
  carrier: Scalars['String'];
  /** The tracking number of the order shipment */
  number?: Maybe<Scalars['String']>;
  /** The shipment tracking title */
  title: Scalars['String'];
};

export type ShippingAddressInput = {
  address?: InputMaybe<CartAddressInput>;
  customer_address_id?: InputMaybe<Scalars['Int']>;
  customer_notes?: InputMaybe<Scalars['String']>;
  /** The code of Pickup Location which will be used for In-Store Pickup. */
  pickup_location_code?: InputMaybe<Scalars['String']>;
};

export type ShippingCartAddress = CartAddressInterface & {
  __typename?: 'ShippingCartAddress';
  address_label?: Maybe<Scalars['String']>;
  available_shipping_methods?: Maybe<Array<Maybe<AvailableShippingMethod>>>;
  /** @deprecated `cart_items_v2` should be used instead */
  cart_items?: Maybe<Array<Maybe<CartItemQuantity>>>;
  cart_items_v2?: Maybe<Array<Maybe<CartItemInterface>>>;
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: CartAddressCountry;
  customer_notes?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  /** @deprecated This information shoud not be exposed on frontend */
  items_weight?: Maybe<Scalars['Float']>;
  lastname: Scalars['String'];
  pickup_location_code?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<CartAddressRegion>;
  selected_shipping_method?: Maybe<SelectedShippingMethod>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

/** Defines an individual shipping discount. This discount can be applied to shipping. */
export type ShippingDiscount = {
  __typename?: 'ShippingDiscount';
  /** The amount of the discount */
  amount: Money;
};

/** The Shipping handling details */
export type ShippingHandling = {
  __typename?: 'ShippingHandling';
  /** The shipping amount, excluding tax */
  amount_excluding_tax?: Maybe<Money>;
  /** The shipping amount, including tax */
  amount_including_tax?: Maybe<Money>;
  /** The applied discounts to the shipping */
  discounts?: Maybe<Array<Maybe<ShippingDiscount>>>;
  /** Contains details about taxes applied for shipping */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The total amount for shipping */
  total_amount: Money;
};

export type ShippingMethodInput = {
  carrier_code: Scalars['String'];
  method_code: Scalars['String'];
};

/** Simple Cart Item */
export type SimpleCartItem = CartItemInterface & {
  __typename?: 'SimpleCartItem';
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** Current stock */
  exception?: Maybe<Scalars['String']>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  /** Is salable */
  is_salable?: Maybe<Scalars['Boolean']>;
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** Sellable qty */
  sellable_qty?: Maybe<Scalars['Int']>;
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

/** A simple product is tangible and is usually sold in single units or in fixed quantities */
export type SimpleProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'SimpleProduct';
  allow_amount_range?: Maybe<Scalars['Int']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  brands?: Maybe<Scalars['Int']>;
  can_redeem?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  expire_after_day?: Maybe<Scalars['String']>;
  fabric?: Maybe<Scalars['Int']>;
  facebook_age_group?: Maybe<Scalars['String']>;
  facebook_age_range?: Maybe<Scalars['String']>;
  facebook_baby_food_stage?: Maybe<Scalars['String']>;
  facebook_capacity?: Maybe<Scalars['String']>;
  facebook_color?: Maybe<Scalars['String']>;
  facebook_compatible_devices?: Maybe<Scalars['String']>;
  facebook_decor_style?: Maybe<Scalars['String']>;
  facebook_digital_zoom?: Maybe<Scalars['String']>;
  facebook_display_technology?: Maybe<Scalars['String']>;
  facebook_finish?: Maybe<Scalars['String']>;
  facebook_gemstone?: Maybe<Scalars['String']>;
  facebook_gender?: Maybe<Scalars['String']>;
  facebook_health_concern?: Maybe<Scalars['String']>;
  facebook_ingredients?: Maybe<Scalars['String']>;
  facebook_is_assembly_required?: Maybe<Scalars['String']>;
  facebook_material?: Maybe<Scalars['String']>;
  facebook_maximum_weight?: Maybe<Scalars['String']>;
  facebook_megapixels?: Maybe<Scalars['String']>;
  facebook_minimum_weight?: Maybe<Scalars['String']>;
  facebook_model?: Maybe<Scalars['String']>;
  facebook_number_of_licenses?: Maybe<Scalars['String']>;
  facebook_operating_system?: Maybe<Scalars['String']>;
  facebook_optical_zoom?: Maybe<Scalars['String']>;
  facebook_package_quantity?: Maybe<Scalars['String']>;
  facebook_pattern?: Maybe<Scalars['String']>;
  facebook_product_depth?: Maybe<Scalars['String']>;
  facebook_product_form?: Maybe<Scalars['String']>;
  facebook_product_height?: Maybe<Scalars['String']>;
  facebook_product_length?: Maybe<Scalars['String']>;
  facebook_product_weight?: Maybe<Scalars['String']>;
  facebook_product_width?: Maybe<Scalars['String']>;
  facebook_recommended_use?: Maybe<Scalars['String']>;
  facebook_resolution?: Maybe<Scalars['String']>;
  facebook_scent?: Maybe<Scalars['String']>;
  facebook_screen_size?: Maybe<Scalars['String']>;
  facebook_shoe_width?: Maybe<Scalars['String']>;
  facebook_size?: Maybe<Scalars['String']>;
  facebook_storage_capacity?: Maybe<Scalars['String']>;
  facebook_style?: Maybe<Scalars['String']>;
  facebook_system_requirements?: Maybe<Scalars['String']>;
  facebook_thread_count?: Maybe<Scalars['String']>;
  facebook_video_game_platform?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  gift_card_amounts?: Maybe<Scalars['String']>;
  gift_card_type?: Maybe<Scalars['Int']>;
  gift_code_pattern?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  gift_product_template?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  max_amount?: Maybe<Scalars['Float']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  min_amount?: Maybe<Scalars['Float']>;
  mpgiftcard_conditions?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  price_rate?: Maybe<Scalars['Float']>;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
  /** The CheckWishlistProduct  */
  wishlistData?: Maybe<WishlistData>;
};


/** A simple product is tangible and is usually sold in single units or in fixed quantities */
export type SimpleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type SimpleProductCartItemInput = {
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  data: CartItemInput;
};

/** A simple product wish list Item */
export type SimpleWishlistItem = WishlistItemInterface & {
  __typename?: 'SimpleWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

export type SmtpBestsellersOutput = {
  __typename?: 'SmtpBestsellersOutput';
  /** Bestsellers Product Information. */
  mpBestsellers?: Maybe<Array<Maybe<BestsellersProductOutput>>>;
};

/** This enumeration indicates whether to return results in ascending or descending order */
export enum SortEnum {
  /** @deprecated  */
  Asc = 'ASC',
  /** @deprecated  */
  Desc = 'DESC'
}

export type SortField = {
  __typename?: 'SortField';
  /** Label of sort field. */
  label?: Maybe<Scalars['String']>;
  /** Attribute code of sort field. */
  value?: Maybe<Scalars['String']>;
};

/** SortFields contains a default value for sort fields and all available sort fields. */
export type SortFields = {
  __typename?: 'SortFields';
  /** Default value of sort fields. */
  default?: Maybe<Scalars['String']>;
  /** Available sort fields. */
  options?: Maybe<Array<Maybe<SortField>>>;
};

/** The type contains information about a store config */
export type StoreConfig = {
  __typename?: 'StoreConfig';
  /** Footer Miscellaneous HTML */
  absolute_footer?: Maybe<Scalars['String']>;
  /** Allow guest checkout */
  allow_guest_checkout?: Maybe<Scalars['Boolean']>;
  /** Indicates whether guest users can write product reviews. Possible values: 1 (Yes) and 0 (No) */
  allow_guests_to_write_product_reviews?: Maybe<Scalars['String']>;
  /** The value of the Allow Gift Messages for Order Items option */
  allow_items?: Maybe<Scalars['String']>;
  /** The value of the Allow Gift Messages on Order Level option */
  allow_order?: Maybe<Scalars['String']>;
  /** Enable autocomplete on login and forgot password forms */
  autocomplete_on_storefront?: Maybe<Scalars['Boolean']>;
  /** Base currency code */
  base_currency_code?: Maybe<Scalars['String']>;
  /** Base link URL for the store */
  base_link_url?: Maybe<Scalars['String']>;
  /** Base media URL for the store */
  base_media_url?: Maybe<Scalars['String']>;
  /** Base static URL for the store */
  base_static_url?: Maybe<Scalars['String']>;
  /** Base URL for the store */
  base_url?: Maybe<Scalars['String']>;
  /** Braintree cc vault status. */
  braintree_cc_vault_active?: Maybe<Scalars['String']>;
  /** Default Sort By. */
  catalog_default_sort_by?: Maybe<Scalars['String']>;
  /** Corresponds to the 'Display Prices In Product Lists' field. It indicates how FPT information is displayed on category pages */
  category_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** Category URL Suffix. */
  category_url_suffix?: Maybe<Scalars['String']>;
  /** CMS Home Page */
  cms_home_page?: Maybe<Scalars['String']>;
  /** CMS No Cookies Page */
  cms_no_cookies?: Maybe<Scalars['String']>;
  /** CMS No Route Page */
  cms_no_route?: Maybe<Scalars['String']>;
  /**
   * A code assigned to the store to identify it
   * @deprecated Use `store_code` instead.
   */
  code?: Maybe<Scalars['String']>;
  /** The configuration setting determines which thumbnail should be used in the cart for configurable products. */
  configurable_thumbnail_source?: Maybe<Scalars['String']>;
  /** Copyright */
  copyright?: Maybe<Scalars['String']>;
  /** Default Meta Description */
  default_description?: Maybe<Scalars['String']>;
  /** Default display currency code */
  default_display_currency_code?: Maybe<Scalars['String']>;
  /** Default Meta Keywords */
  default_keywords?: Maybe<Scalars['String']>;
  /** Default Page Title */
  default_title?: Maybe<Scalars['String']>;
  /** Display Demo Store Notice */
  demonotice?: Maybe<Scalars['Int']>;
  /** Default Web URL */
  front?: Maybe<Scalars['String']>;
  /** Products per Page on Grid Default Value. */
  grid_per_page?: Maybe<Scalars['Int']>;
  /** Products per Page on Grid Allowed Values. */
  grid_per_page_values?: Maybe<Scalars['String']>;
  /** Scripts and Style Sheets */
  head_includes?: Maybe<Scalars['String']>;
  /** Favicon Icon */
  head_shortcut_icon?: Maybe<Scalars['String']>;
  /** Logo Image */
  header_logo_src?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the store
   * @deprecated Use `store_code` instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** Indicates whether the store view has been designated as the default within the store group */
  is_default_store?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the store group has been designated as the default within the website */
  is_default_store_group?: Maybe<Scalars['Boolean']>;
  /** List Mode. */
  list_mode?: Maybe<Scalars['String']>;
  /** Products per Page on List Default Value. */
  list_per_page?: Maybe<Scalars['Int']>;
  /** Products per Page on List Allowed Values. */
  list_per_page_values?: Maybe<Scalars['String']>;
  /** Store locale */
  locale?: Maybe<Scalars['String']>;
  /** Logo Image Alt */
  logo_alt?: Maybe<Scalars['String']>;
  /** Logo Attribute Height */
  logo_height?: Maybe<Scalars['Int']>;
  /** Allow guest checkout */
  logo_url?: Maybe<Scalars['String']>;
  /** Logo Attribute Width */
  logo_width?: Maybe<Scalars['Int']>;
  /** Indicates whether wishlists are enabled (1) or disabled (0) */
  magento_wishlist_general_is_enabled?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/advanced_permalink/archive_path_schema */
  mfblog_advanced_permalink_archive_path_schema?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/advanced_permalink/blog_route */
  mfblog_advanced_permalink_blog_route?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/advanced_permalink/enabled */
  mfblog_advanced_permalink_enabled?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/advanced_permalink/redirect_to_no_slash */
  mfblog_advanced_permalink_redirect_to_no_slash?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/advanced_permalink/search_path_schema */
  mfblog_advanced_permalink_search_path_schema?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/author/enabled */
  mfblog_author_enabled?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/author/page_enabled */
  mfblog_author_page_enabled?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/author/robots */
  mfblog_author_robots?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/design/format_date */
  mfblog_design_format_date?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/design/publication_date */
  mfblog_design_publication_date?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/index_page/meta_description */
  mfblog_index_page_meta_description?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/index_page/meta_keywords */
  mfblog_index_page_meta_keywords?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/index_page/meta_title */
  mfblog_index_page_meta_title?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/index_page/posts_sort_by */
  mfblog_index_page_posts_sort_by?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/index_page/title */
  mfblog_index_page_title?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/permalink/archive_route */
  mfblog_permalink_archive_route?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/permalink/author_route */
  mfblog_permalink_author_route?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/permalink/author_sufix */
  mfblog_permalink_author_sufix?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/permalink/category_route */
  mfblog_permalink_category_route?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/permalink/category_sufix */
  mfblog_permalink_category_sufix?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/permalink/category_use_categories */
  mfblog_permalink_category_use_categories?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/permalink/post_route */
  mfblog_permalink_post_route?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/permalink/post_sufix */
  mfblog_permalink_post_sufix?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/permalink/post_use_categories */
  mfblog_permalink_post_use_categories?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/permalink/redirect_to_no_slash */
  mfblog_permalink_redirect_to_no_slash?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/permalink/route */
  mfblog_permalink_route?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/permalink/search_route */
  mfblog_permalink_search_route?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/permalink/tag_route */
  mfblog_permalink_tag_route?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/permalink/tag_sufix */
  mfblog_permalink_tag_sufix?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/permalink/type */
  mfblog_permalink_type?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/post_list/posts_per_page */
  mfblog_post_list_posts_per_page?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/post_view/comments/default_status */
  mfblog_post_view_comments_default_status?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/post_view/comments/display_privacy_policy_checkbox */
  mfblog_post_view_comments_display_privacy_policy_checkbox?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/post_view/comments/disqus_forum_shortname */
  mfblog_post_view_comments_disqus_forum_shortname?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/post_view/comments/fb_app_id */
  mfblog_post_view_comments_fb_app_id?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/post_view/comments/fb_app_id_header */
  mfblog_post_view_comments_fb_app_id_header?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/post_view/comments/format_date */
  mfblog_post_view_comments_format_date?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/post_view/comments/guest_comments */
  mfblog_post_view_comments_guest_comments?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/post_view/comments/number_of_comments */
  mfblog_post_view_comments_number_of_comments?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/post_view/comments/number_of_replies */
  mfblog_post_view_comments_number_of_replies?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/post_view/comments/type */
  mfblog_post_view_comments_type?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/post_view/nextprev/enabled */
  mfblog_post_view_nextprev_enabled?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/post_view/related_posts/enabled */
  mfblog_post_view_related_posts_enabled?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/post_view/related_posts/number_of_posts */
  mfblog_post_view_related_posts_number_of_posts?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/post_view/related_products/enabled */
  mfblog_post_view_related_products_enabled?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/post_view/related_products/number_of_products */
  mfblog_post_view_related_products_number_of_products?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/product_page/number_of_related_posts */
  mfblog_product_page_number_of_related_posts?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/product_page/related_posts_enabled */
  mfblog_product_page_related_posts_enabled?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/search/robots */
  mfblog_search_robots?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/seo/use_canonical_meta_tag_for */
  mfblog_seo_use_canonical_meta_tag_for?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/sidebar/archive/enabled */
  mfblog_sidebar_archive_enabled?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/archive/format_date */
  mfblog_sidebar_archive_format_date?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/sidebar/archive/sort_order */
  mfblog_sidebar_archive_sort_order?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/categories/enabled */
  mfblog_sidebar_categories_enabled?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/categories/max_depth */
  mfblog_sidebar_categories_max_depth?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/categories/show_posts_count */
  mfblog_sidebar_categories_show_posts_count?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/categories/sort_order */
  mfblog_sidebar_categories_sort_order?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/custom2/enabled */
  mfblog_sidebar_custom2_enabled?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/custom2/html */
  mfblog_sidebar_custom2_html?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/sidebar/custom2/sort_order */
  mfblog_sidebar_custom2_sort_order?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/custom/enabled */
  mfblog_sidebar_custom_enabled?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/custom/html */
  mfblog_sidebar_custom_html?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/sidebar/custom/sort_order */
  mfblog_sidebar_custom_sort_order?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/featured_posts/enabled */
  mfblog_sidebar_featured_posts_enabled?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/featured_posts/posts_ids */
  mfblog_sidebar_featured_posts_posts_ids?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/sidebar/featured_posts/sort_order */
  mfblog_sidebar_featured_posts_sort_order?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/popular_posts/enabled */
  mfblog_sidebar_popular_posts_enabled?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/popular_posts/posts_per_page */
  mfblog_sidebar_popular_posts_posts_per_page?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/popular_posts/sort_order */
  mfblog_sidebar_popular_posts_sort_order?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/recent_posts/enabled */
  mfblog_sidebar_recent_posts_enabled?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/recent_posts/posts_per_page */
  mfblog_sidebar_recent_posts_posts_per_page?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/recent_posts/sort_order */
  mfblog_sidebar_recent_posts_sort_ordere?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/rss_feed/description */
  mfblog_sidebar_rss_feed_description?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/sidebar/rss_feed/enabled */
  mfblog_sidebar_rss_feed_enabled?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/rss_feed/sort_order */
  mfblog_sidebar_rss_feed_sort_order?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/rss_feed/title */
  mfblog_sidebar_rss_feed_title?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/sidebar/search/enabled */
  mfblog_sidebar_search_enabled?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/search/sort_order */
  mfblog_sidebar_search_sort_order?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/tag_claud/enabled */
  mfblog_sidebar_tag_claud_enabled?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/tag_claud/sort_order */
  mfblog_sidebar_tag_claud_sort_order?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/sidebar/tag_claud/tag_count */
  mfblog_sidebar_tag_claud_tag_count?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/social/add_this_enabled */
  mfblog_social_add_this_enabled?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/social/add_this_language */
  mfblog_social_add_this_language?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/social/add_this_pubid */
  mfblog_social_add_this_pubid?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/tag/robots */
  mfblog_tag_robots?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/top_menu/include_categories */
  mfblog_top_menu_include_categories?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/top_menu/item_text */
  mfblog_top_menu_item_text?: Maybe<Scalars['String']>;
  /** Extended Config Data - mfblog/top_menu/max_depth */
  mfblog_top_menu_max_depth?: Maybe<Scalars['Int']>;
  /** Extended Config Data - mfblog/top_menu/show_item */
  mfblog_top_menu_show_item?: Maybe<Scalars['Int']>;
  /** The minimum number of characters required for a valid password. */
  minimum_password_length?: Maybe<Scalars['String']>;
  /** Default No-route URL */
  no_route?: Maybe<Scalars['String']>;
  /** Payflow Pro vault status. */
  payment_payflowpro_cc_vault_active?: Maybe<Scalars['String']>;
  /** Corresponds to the 'Display Prices On Product View Page' field. It indicates how FPT information is displayed on product pages */
  product_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** Indicates whether product reviews are enabled. Possible values: 1 (Yes) and 0 (No) */
  product_reviews_enabled?: Maybe<Scalars['String']>;
  /** Product URL Suffix. */
  product_url_suffix?: Maybe<Scalars['String']>;
  /** Razorpay API Key ID */
  razorpay_key_id?: Maybe<Scalars['String']>;
  /** Razorpay Merchange Name Override */
  razorpay_merchant_name_override?: Maybe<Scalars['String']>;
  /** The number of different character classes required in a password (lowercase, uppercase, digits, special characters). */
  required_character_classes_number?: Maybe<Scalars['String']>;
  /**
   * The ID of the root category
   * @deprecated Use `root_category_uid` instead
   */
  root_category_id?: Maybe<Scalars['Int']>;
  /** The unique ID for a `CategoryInterface` object. */
  root_category_uid?: Maybe<Scalars['ID']>;
  /** Corresponds to the 'Display Prices In Sales Modules' field. It indicates how FPT information is displayed on cart, checkout, and order pages */
  sales_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** Secure base link URL for the store */
  secure_base_link_url?: Maybe<Scalars['String']>;
  /** Secure base media URL for the store */
  secure_base_media_url?: Maybe<Scalars['String']>;
  /** Secure base static URL for the store */
  secure_base_static_url?: Maybe<Scalars['String']>;
  /** Secure base URL for the store */
  secure_base_url?: Maybe<Scalars['String']>;
  /** Email to a Friend configuration. */
  send_friend?: Maybe<SendFriendConfiguration>;
  /** Show Breadcrumbs for CMS Pages */
  show_cms_breadcrumbs?: Maybe<Scalars['Int']>;
  /** The unique ID of the store view. In the Admin, this is called the Store View Code. When making a GraphQL call, assign this value to the `Store` header to provide the scope */
  store_code?: Maybe<Scalars['ID']>;
  /** Social login */
  store_config_data?: Maybe<StoreConfigData>;
  /** The unique ID assigned to the store group. In the Admin, this is called the Store Name */
  store_group_code?: Maybe<Scalars['ID']>;
  /** The label assigned to the store group */
  store_group_name?: Maybe<Scalars['String']>;
  /** The label assigned to the store view */
  store_name?: Maybe<Scalars['String']>;
  /** The store view sort order */
  store_sort_order?: Maybe<Scalars['Int']>;
  /** Timezone of the store */
  timezone?: Maybe<Scalars['String']>;
  /** Page Title Prefix */
  title_prefix?: Maybe<Scalars['String']>;
  /** Page Title Separator. */
  title_separator?: Maybe<Scalars['String']>;
  /** Page Title Suffix */
  title_suffix?: Maybe<Scalars['String']>;
  /** The configuration determines if the store code should be used in the URL */
  use_store_in_url?: Maybe<Scalars['Boolean']>;
  /** The unique ID for the website */
  website_code?: Maybe<Scalars['ID']>;
  /**
   * The ID number assigned to the website store
   * @deprecated The field should not be used on the storefront
   */
  website_id?: Maybe<Scalars['Int']>;
  /** The label assigned to the website */
  website_name?: Maybe<Scalars['String']>;
  /** The unit of weight */
  weight_unit?: Maybe<Scalars['String']>;
  /** Welcome Text */
  welcome?: Maybe<Scalars['String']>;
};

export type StoreConfigData = {
  __typename?: 'StoreConfigData';
  facebook_app_id?: Maybe<Scalars['String']>;
  google_client_id?: Maybe<Scalars['String']>;
};

export type StorefrontProperties = {
  __typename?: 'StorefrontProperties';
  /** The relative position of the attribute in the layered navigation block */
  position?: Maybe<Scalars['Int']>;
  /** Indicates whether the attribute is filterable with results, without results, or not at all */
  use_in_layered_navigation?: Maybe<UseInLayeredNavigationOptions>;
  /** Indicates whether the attribute is displayed in product listings */
  use_in_product_listing?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the attribute can be used in layered navigation on search results pages */
  use_in_search_results_layered_navigation?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the attribute is displayed on product pages */
  visible_on_catalog_pages?: Maybe<Scalars['Boolean']>;
};

export type SubscribeEmailToNewsletterOutput = {
  __typename?: 'SubscribeEmailToNewsletterOutput';
  /** Returns the status of the subscription request */
  status?: Maybe<SubscriptionStatusesEnum>;
};

export enum SubscriptionStatusesEnum {
  /** @deprecated  */
  NotActive = 'NOT_ACTIVE',
  /** @deprecated  */
  Subscribed = 'SUBSCRIBED',
  /** @deprecated  */
  Unconfirmed = 'UNCONFIRMED',
  /** @deprecated  */
  Unsubscribed = 'UNSUBSCRIBED'
}

export type SwatchData = {
  /** Type of swatch filter item: 1 - text, 2 - image */
  type?: Maybe<Scalars['String']>;
  /** Value for swatch item (text or image link) */
  value?: Maybe<Scalars['String']>;
};

export type SwatchDataInterface = {
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
};

export type SwatchImageData = SwatchData & {
  __typename?: 'SwatchImageData';
  color_type?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  /** Type of swatch filter item: 1 - text, 2 - image */
  type?: Maybe<Scalars['String']>;
  /** Value for swatch item (text or image link) */
  value?: Maybe<Scalars['String']>;
};

export type SwatchLayerFilterItem = LayerFilterItemInterface & SwatchLayerFilterItemInterface & {
  __typename?: 'SwatchLayerFilterItem';
  /**
   * Count of items by filter.
   * @deprecated Use AggregationOption.count instead.
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * Filter label.
   * @deprecated Use AggregationOption.label instead.
   */
  label?: Maybe<Scalars['String']>;
  /** Data required to render swatch filter item */
  swatch_data?: Maybe<SwatchData>;
  /**
   * Value for filter request variable to be used in query.
   * @deprecated Use AggregationOption.value instead.
   */
  value_string?: Maybe<Scalars['String']>;
};

export type SwatchLayerFilterItemInterface = {
  /** Data required to render swatch filter item */
  swatch_data?: Maybe<SwatchData>;
};

export type SwatchTextData = SwatchData & {
  __typename?: 'SwatchTextData';
  label?: Maybe<Scalars['String']>;
  /** Type of swatch filter item: 1 - text, 2 - image */
  type?: Maybe<Scalars['String']>;
  /** Value for swatch item (text or image link) */
  value?: Maybe<Scalars['String']>;
};

/** The tax item details */
export type TaxItem = {
  __typename?: 'TaxItem';
  /** The amount of tax applied to the item */
  amount: Money;
  /** The rate used to calculate the tax */
  rate: Scalars['Float'];
  /** A title that describes the tax */
  title: Scalars['String'];
};

export type Testimonial = {
  __typename?: 'Testimonial';
  configuration?: Maybe<TestimonialConfiguration>;
  items?: Maybe<Array<Maybe<TestimonialContent>>>;
};

export type TestimonialConfiguration = {
  __typename?: 'TestimonialConfiguration';
  general?: Maybe<TestimonialGeneral>;
  setting_responsive?: Maybe<TestimonialSettingResponsive>;
  setting_slider?: Maybe<TestimonialSettingSlider>;
};

export type TestimonialContent = {
  __typename?: 'TestimonialContent';
  company?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  job?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rating_summary?: Maybe<Scalars['Int']>;
  stores?: Maybe<Scalars['String']>;
  testimonial_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type TestimonialGeneral = {
  __typename?: 'TestimonialGeneral';
  allow_guest?: Maybe<Scalars['Boolean']>;
  auto_approve?: Maybe<Scalars['Boolean']>;
  customer_submit?: Maybe<Scalars['Boolean']>;
  enable_slider?: Maybe<Scalars['Boolean']>;
  per_page?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type TestimonialSettingResponsive = {
  __typename?: 'TestimonialSettingResponsive';
  max_width_360?: Maybe<Scalars['Int']>;
  max_width_480?: Maybe<Scalars['Int']>;
  max_width_640?: Maybe<Scalars['Int']>;
  max_width_768?: Maybe<Scalars['Int']>;
  max_width_991?: Maybe<Scalars['Int']>;
  max_width_1199?: Maybe<Scalars['Int']>;
  max_width_1919?: Maybe<Scalars['Int']>;
  max_width_1920?: Maybe<Scalars['Int']>;
};

export type TestimonialSettingSlider = {
  __typename?: 'TestimonialSettingSlider';
  arrows?: Maybe<Scalars['Boolean']>;
  auto_play?: Maybe<Scalars['Boolean']>;
  dots?: Maybe<Scalars['Boolean']>;
  fade?: Maybe<Scalars['Boolean']>;
  infinite?: Maybe<Scalars['Boolean']>;
  padding?: Maybe<Scalars['Int']>;
  rows?: Maybe<Scalars['String']>;
  slide?: Maybe<Scalars['Boolean']>;
  slide_vertical?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type TextSwatchData = SwatchDataInterface & {
  __typename?: 'TextSwatchData';
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
};

/** A price based on the quantity purchased. */
export type TierPrice = {
  __typename?: 'TierPrice';
  /** The price discount that this tier represents. */
  discount?: Maybe<ProductDiscount>;
  final_price?: Maybe<Money>;
  /** The minimum number of items that must be purchased to qualify for this price tier. */
  quantity?: Maybe<Scalars['Float']>;
};

export type Track = {
  __typename?: 'Track';
  /** Order Date */
  order_date?: Maybe<Scalars['String']>;
  /** Order Number */
  ordernumber?: Maybe<Scalars['String']>;
  /** Order Status */
  status?: Maybe<Scalars['String']>;
};

export type TrackingData = {
  __typename?: 'TrackingData';
  /** Is Page Tracking enabled */
  page_tracking_enabled?: Maybe<Scalars['Boolean']>;
  /** dotdigital region prefix */
  region_prefix?: Maybe<Scalars['String']>;
  /** Is ROI Tracking enabled */
  roi_tracking_enabled?: Maybe<Scalars['Boolean']>;
  /** Web Behaviour Tracking profile ID */
  wbt_profile_id?: Maybe<Scalars['String']>;
};

export type UpdateCartItemsInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<CartItemUpdateInput>>;
};

export type UpdateCartItemsOutput = {
  __typename?: 'UpdateCartItemsOutput';
  cart: Cart;
};

/** Contains the customer's wish list and any errors encountered */
export type UpdateProductsInWishlistOutput = {
  __typename?: 'UpdateProductsInWishlistOutput';
  /** An array of errors encountered while updating products in a wish list */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully updated */
  wishlist: Wishlist;
};

export type UploadImageInput = {
  /** album id. */
  album_id: Scalars['Int'];
  /** image description. */
  base64_encoded_file: Scalars['String'];
  /** image description. */
  image_name: Scalars['String'];
};

export type UploadImageOutput = {
  __typename?: 'UploadImageOutput';
  album_id?: Maybe<Scalars['Int']>;
  image_name?: Maybe<Scalars['String']>;
};

/** The object contains URL rewrite details */
export type UrlRewrite = {
  __typename?: 'UrlRewrite';
  /** Request parameters */
  parameters?: Maybe<Array<Maybe<HttpQueryParameter>>>;
  /** Request URL */
  url?: Maybe<Scalars['String']>;
};

/** This enumeration defines the entity type. */
export enum UrlRewriteEntityTypeEnum {
  /** @deprecated  */
  Category = 'CATEGORY',
  /** @deprecated  */
  CmsPage = 'CMS_PAGE',
  /** @deprecated  */
  MfBlogArchive = 'MF_BLOG_ARCHIVE',
  /** @deprecated  */
  MfBlogAuthor = 'MF_BLOG_AUTHOR',
  /** @deprecated  */
  MfBlogCategory = 'MF_BLOG_CATEGORY',
  /** @deprecated  */
  MfBlogComment = 'MF_BLOG_COMMENT',
  /** @deprecated  */
  MfBlogIndex = 'MF_BLOG_INDEX',
  /** @deprecated  */
  MfBlogPost = 'MF_BLOG_POST',
  /** @deprecated  */
  MfBlogSearch = 'MF_BLOG_SEARCH',
  /** @deprecated  */
  MfBlogTag = 'MF_BLOG_TAG',
  /** @deprecated  */
  Product = 'PRODUCT'
}

export enum UseInLayeredNavigationOptions {
  /** @deprecated  */
  FilterableNoResult = 'FILTERABLE_NO_RESULT',
  /** @deprecated  */
  FilterableWithResults = 'FILTERABLE_WITH_RESULTS',
  /** @deprecated  */
  No = 'NO'
}

/** Required input for payment methods with Vault support. */
export type VaultTokenInput = {
  /** The public hash of the payment token */
  public_hash: Scalars['String'];
};

/** Virtual Cart Item */
export type VirtualCartItem = CartItemInterface & {
  __typename?: 'VirtualCartItem';
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** Current stock */
  exception?: Maybe<Scalars['String']>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  /** Is salable */
  is_salable?: Maybe<Scalars['Boolean']>;
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** Sellable qty */
  sellable_qty?: Maybe<Scalars['Int']>;
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

/** A virtual product is a non-tangible product that does not require shipping and is not kept in inventory */
export type VirtualProduct = CustomizableProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'VirtualProduct';
  allow_amount_range?: Maybe<Scalars['Int']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  brands?: Maybe<Scalars['Int']>;
  can_redeem?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  expire_after_day?: Maybe<Scalars['String']>;
  fabric?: Maybe<Scalars['Int']>;
  facebook_age_group?: Maybe<Scalars['String']>;
  facebook_age_range?: Maybe<Scalars['String']>;
  facebook_baby_food_stage?: Maybe<Scalars['String']>;
  facebook_capacity?: Maybe<Scalars['String']>;
  facebook_color?: Maybe<Scalars['String']>;
  facebook_compatible_devices?: Maybe<Scalars['String']>;
  facebook_decor_style?: Maybe<Scalars['String']>;
  facebook_digital_zoom?: Maybe<Scalars['String']>;
  facebook_display_technology?: Maybe<Scalars['String']>;
  facebook_finish?: Maybe<Scalars['String']>;
  facebook_gemstone?: Maybe<Scalars['String']>;
  facebook_gender?: Maybe<Scalars['String']>;
  facebook_health_concern?: Maybe<Scalars['String']>;
  facebook_ingredients?: Maybe<Scalars['String']>;
  facebook_is_assembly_required?: Maybe<Scalars['String']>;
  facebook_material?: Maybe<Scalars['String']>;
  facebook_maximum_weight?: Maybe<Scalars['String']>;
  facebook_megapixels?: Maybe<Scalars['String']>;
  facebook_minimum_weight?: Maybe<Scalars['String']>;
  facebook_model?: Maybe<Scalars['String']>;
  facebook_number_of_licenses?: Maybe<Scalars['String']>;
  facebook_operating_system?: Maybe<Scalars['String']>;
  facebook_optical_zoom?: Maybe<Scalars['String']>;
  facebook_package_quantity?: Maybe<Scalars['String']>;
  facebook_pattern?: Maybe<Scalars['String']>;
  facebook_product_depth?: Maybe<Scalars['String']>;
  facebook_product_form?: Maybe<Scalars['String']>;
  facebook_product_height?: Maybe<Scalars['String']>;
  facebook_product_length?: Maybe<Scalars['String']>;
  facebook_product_weight?: Maybe<Scalars['String']>;
  facebook_product_width?: Maybe<Scalars['String']>;
  facebook_recommended_use?: Maybe<Scalars['String']>;
  facebook_resolution?: Maybe<Scalars['String']>;
  facebook_scent?: Maybe<Scalars['String']>;
  facebook_screen_size?: Maybe<Scalars['String']>;
  facebook_shoe_width?: Maybe<Scalars['String']>;
  facebook_size?: Maybe<Scalars['String']>;
  facebook_storage_capacity?: Maybe<Scalars['String']>;
  facebook_style?: Maybe<Scalars['String']>;
  facebook_system_requirements?: Maybe<Scalars['String']>;
  facebook_thread_count?: Maybe<Scalars['String']>;
  facebook_video_game_platform?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  gift_card_amounts?: Maybe<Scalars['String']>;
  gift_card_type?: Maybe<Scalars['Int']>;
  gift_code_pattern?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  gift_product_template?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  max_amount?: Maybe<Scalars['Float']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  min_amount?: Maybe<Scalars['Float']>;
  mpgiftcard_conditions?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  price_rate?: Maybe<Scalars['Float']>;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The CheckWishlistProduct  */
  wishlistData?: Maybe<WishlistData>;
};


/** A virtual product is a non-tangible product that does not require shipping and is not kept in inventory */
export type VirtualProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type VirtualProductCartItemInput = {
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  data: CartItemInput;
};

/** A virtual product wish list item */
export type VirtualWishlistItem = WishlistItemInterface & {
  __typename?: 'VirtualWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

/** Website is deprecated because it is should not be used on storefront. The type contains information about a website */
export type Website = {
  __typename?: 'Website';
  /**
   * A code assigned to the website to identify it
   * @deprecated The field should not be used on the storefront.
   */
  code?: Maybe<Scalars['String']>;
  /**
   * The default group ID that the website has
   * @deprecated The field should not be used on the storefront.
   */
  default_group_id?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the website
   * @deprecated The field should not be used on the storefront.
   */
  id?: Maybe<Scalars['Int']>;
  /**
   * Specifies if this is the default website
   * @deprecated The field should not be used on the storefront.
   */
  is_default?: Maybe<Scalars['Boolean']>;
  /**
   * The website name. Websites use this name to identify it easier.
   * @deprecated The field should not be used on the storefront.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The attribute to use for sorting websites
   * @deprecated The field should not be used on the storefront.
   */
  sort_order?: Maybe<Scalars['Int']>;
};

export type WeddingAlbum = {
  __typename?: 'WeddingAlbum';
  albums?: Maybe<Array<Maybe<Album>>>;
  cms_block?: Maybe<Scalars['String']>;
  page_info?: Maybe<SearchResultPageInfo>;
  title?: Maybe<Scalars['String']>;
};

/** An error encountered while performing operations with WishList. */
export type WishListUserInputError = {
  __typename?: 'WishListUserInputError';
  /** Wishlist-specific error code */
  code: WishListUserInputErrorType;
  /** A localized error message */
  message: Scalars['String'];
};

export enum WishListUserInputErrorType {
  /** @deprecated  */
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

export type Wishlist = {
  __typename?: 'Wishlist';
  /** The unique ID for a `Wishlist` object */
  id?: Maybe<Scalars['ID']>;
  /** @deprecated Use field `items_v2` from type `Wishlist` instead */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /** The number of items in the wish list */
  items_count?: Maybe<Scalars['Int']>;
  /** An array of items in the customer's wish list */
  items_v2?: Maybe<WishlistItems>;
  /** An encrypted code that Magento uses to link to the wish list */
  sharing_code?: Maybe<Scalars['String']>;
  /** The time of the last modification to the wish list */
  updated_at?: Maybe<Scalars['String']>;
};


export type WishlistItems_V2Args = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type WishlistCartUserInputError = {
  __typename?: 'WishlistCartUserInputError';
  /** An error code that describes the error encountered */
  code: WishlistCartUserInputErrorType;
  /** A localized error message */
  message: Scalars['String'];
  /** The unique ID of the `Wishlist` object containing an error */
  wishlistId: Scalars['ID'];
  /** The unique ID of the wish list item containing an error */
  wishlistItemId: Scalars['ID'];
};

export enum WishlistCartUserInputErrorType {
  /** @deprecated  */
  InsufficientStock = 'INSUFFICIENT_STOCK',
  /** @deprecated  */
  NotSalable = 'NOT_SALABLE',
  /** @deprecated  */
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  Undefined = 'UNDEFINED'
}

export type WishlistData = {
  __typename?: 'WishlistData';
  wishlistItem?: Maybe<Scalars['Int']>;
};

export type WishlistItem = {
  __typename?: 'WishlistItem';
  /** The time when the customer added the item to the wish list */
  added_at?: Maybe<Scalars['String']>;
  /** The customer's comment about this item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItem` object */
  id?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  qty?: Maybe<Scalars['Float']>;
};

/** Defines the items to add to a wish list */
export type WishlistItemInput = {
  /** An array of options that the customer entered */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For complex product types, the SKU of the parent product */
  parent_sku?: InputMaybe<Scalars['String']>;
  /** The amount or number of items to add */
  quantity: Scalars['Float'];
  /** An array of strings corresponding to options the customer selected */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** The SKU of the product to add. For complex product types, specify the child product SKU */
  sku: Scalars['String'];
};

export type WishlistItemInterface = {
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

/** Defines updates to items in a wish list */
export type WishlistItemUpdateInput = {
  /** Customer-entered comments about the item */
  description?: InputMaybe<Scalars['String']>;
  /** An array of options that the customer entered */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** The new amount or number of this item */
  quantity?: InputMaybe<Scalars['Float']>;
  /** An array of strings corresponding to options the customer selected */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** The unique ID for a `WishlistItemInterface` object */
  wishlist_item_id: Scalars['ID'];
};

export type WishlistItems = {
  __typename?: 'WishlistItems';
  /** A list of items in the wish list */
  items: Array<Maybe<WishlistItemInterface>>;
  /** Contains pagination metadata */
  page_info?: Maybe<SearchResultPageInfo>;
};

/** Deprecated: `Wishlist` type should be used instead */
export type WishlistOutput = {
  __typename?: 'WishlistOutput';
  /**
   * An array of items in the customer's wish list
   * @deprecated Use field `items` from type `Wishlist` instead
   */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /**
   * The number of items in the wish list
   * @deprecated Use field `items_count` from type `Wishlist` instead
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * When multiple wish lists are enabled, the name the customer assigns to the wishlist
   * @deprecated This field is related to Commerce functionality and is always `null` in Open Source edition
   */
  name?: Maybe<Scalars['String']>;
  /**
   * An encrypted code that Magento uses to link to the wish list
   * @deprecated Use field `sharing_code` from type `Wishlist` instead
   */
  sharing_code?: Maybe<Scalars['String']>;
  /**
   * The time of the last modification to the wish list
   * @deprecated Use field `updated_at` from type `Wishlist` instead
   */
  updated_at?: Maybe<Scalars['String']>;
};

export type AddCommentToPostInput = {
  author_email: Scalars['String'];
  author_nickname: Scalars['String'];
  parent_id: Scalars['Int'];
  post_id: Scalars['Int'];
  text: Scalars['String'];
};

export type AddCommentToPostOutput = {
  __typename?: 'addCommentToPostOutput';
  comments?: Maybe<Array<Maybe<BlogComment>>>;
  total_count?: Maybe<Scalars['Int']>;
  total_pages?: Maybe<Scalars['Int']>;
};

export type AppliedjobInput = {
  base64_encoded_file?: InputMaybe<Scalars['String']>;
  /** The customer's CV */
  candidate_cv: Scalars['String'];
  /** The Customer Email */
  candidate_email: Scalars['String'];
  /** The customer First Name */
  candidate_fname: Scalars['String'];
  /** The customer Last Name */
  candidate_lname: Scalars['String'];
  /** The Candidate Message */
  candidate_message?: InputMaybe<Scalars['String']>;
  /** The customer's Mobile Number */
  candidate_phone: Scalars['String'];
  /** The primary key in the ceymox_job_list table */
  job_id: Scalars['Int'];
  /** The Job Location */
  job_location?: InputMaybe<Scalars['Int']>;
};

export type AppliedjobOutput = {
  __typename?: 'appliedjobOutput';
  /** Success Message */
  success_message?: Maybe<Scalars['String']>;
};

export type BlogCategoriesOutput = {
  __typename?: 'blogCategoriesOutput';
  /** The featured blog category id. */
  featured_blog_category?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<BlogCategory>>>;
  total_count?: Maybe<Scalars['Int']>;
};

export type BlogCommentsOutput = {
  __typename?: 'blogCommentsOutput';
  /** The current page. */
  current_page?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<BlogComment>>>;
  total_count?: Maybe<Scalars['Int']>;
  total_pages?: Maybe<Scalars['Int']>;
};

export type BlogPostsOutput = {
  __typename?: 'blogPostsOutput';
  /** The current page. */
  current_page?: Maybe<Scalars['Int']>;
  /** An array of Blog posts */
  items?: Maybe<Array<Maybe<BlogPost>>>;
  total_count?: Maybe<Scalars['Int']>;
  total_pages?: Maybe<Scalars['Int']>;
};

export type BlogTagsOutput = {
  __typename?: 'blogTagsOutput';
  items?: Maybe<Array<Maybe<BlogTag>>>;
  total_count?: Maybe<Scalars['Int']>;
};

export type CreateEmptyCartInput = {
  cart_id?: InputMaybe<Scalars['String']>;
};

export type CreateKlarnaPaymentsSessionInput = {
  cart_id: Scalars['String'];
};

export type CreateKlarnaPaymentsSessionOutput = {
  __typename?: 'createKlarnaPaymentsSessionOutput';
  /** The payment method client token */
  client_token?: Maybe<Scalars['String']>;
  /** The payment method categories */
  payment_method_categories?: Maybe<Array<Maybe<Categories>>>;
};

export type JobDetails = {
  __typename?: 'jobDetails';
  /** The Job Created Date */
  created_at?: Maybe<Scalars['String']>;
  /** The Job Description */
  job_description?: Maybe<Scalars['String']>;
  /** The primary key in the ceymox_job_list table */
  job_id?: Maybe<Scalars['Int']>;
  /** The Job Location */
  job_location?: Maybe<Array<Maybe<JobLocation>>>;
  /** The Job Title */
  job_title?: Maybe<Scalars['String']>;
  /** The Job Vacancy */
  job_vaccancy?: Maybe<Scalars['String']>;
  /** The Job Status */
  status?: Maybe<Scalars['String']>;
};

export type JobLocation = {
  __typename?: 'jobLocation';
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
};

export type MyAccountOtpInput = {
  mobileNumber: Scalars['String'];
  /** Website Id */
  websiteId?: InputMaybe<Scalars['Int']>;
};

export type MyAccountOtpOutput = {
  __typename?: 'myAccountOtpOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type UploadMpGiftCardImageOutput = {
  __typename?: 'uploadMpGiftCardImageOutput';
  error?: Maybe<Scalars['Int']>;
  file?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddBundleProductsToCartInput: AddBundleProductsToCartInput;
  AddBundleProductsToCartOutput: ResolverTypeWrapper<AddBundleProductsToCartOutput>;
  AddConfigurableProductsToCartInput: AddConfigurableProductsToCartInput;
  AddConfigurableProductsToCartOutput: ResolverTypeWrapper<AddConfigurableProductsToCartOutput>;
  AddDownloadableProductsToCartInput: AddDownloadableProductsToCartInput;
  AddDownloadableProductsToCartOutput: ResolverTypeWrapper<AddDownloadableProductsToCartOutput>;
  AddMpGiftCardProductsToCartInput: AddMpGiftCardProductsToCartInput;
  AddMpGiftCardProductsToCartOutput: ResolverTypeWrapper<AddMpGiftCardProductsToCartOutput>;
  AddProductsToCartOutput: ResolverTypeWrapper<AddProductsToCartOutput>;
  AddProductsToCompareListInput: AddProductsToCompareListInput;
  AddProductsToWishlistOutput: ResolverTypeWrapper<AddProductsToWishlistOutput>;
  AddSimpleProductsToCartInput: AddSimpleProductsToCartInput;
  AddSimpleProductsToCartOutput: ResolverTypeWrapper<AddSimpleProductsToCartOutput>;
  AddVirtualProductsToCartInput: AddVirtualProductsToCartInput;
  AddVirtualProductsToCartOutput: ResolverTypeWrapper<AddVirtualProductsToCartOutput>;
  AddWishlistItemsToCartOutput: ResolverTypeWrapper<AddWishlistItemsToCartOutput>;
  Aggregation: ResolverTypeWrapper<Aggregation>;
  AggregationOption: ResolverTypeWrapper<AggregationOption>;
  AggregationOptionInterface: ResolversTypes['AggregationOption'];
  Album: ResolverTypeWrapper<Album>;
  AppliedCoupon: ResolverTypeWrapper<AppliedCoupon>;
  ApplyCouponToCartInput: ApplyCouponToCartInput;
  ApplyCouponToCartOutput: ResolverTypeWrapper<ApplyCouponToCartOutput>;
  AreaInput: AreaInput;
  Assets: ResolverTypeWrapper<Assets>;
  AssignCompareListToCustomerOutput: ResolverTypeWrapper<AssignCompareListToCustomerOutput>;
  Attribute: ResolverTypeWrapper<Attribute>;
  AttributeInput: AttributeInput;
  AttributeOption: ResolverTypeWrapper<AttributeOption>;
  AuthenticateCustomerWithSocialLogin: ResolverTypeWrapper<AuthenticateCustomerWithSocialLogin>;
  AvailablePaymentMethod: ResolverTypeWrapper<AvailablePaymentMethod>;
  AvailableShippingMethod: ResolverTypeWrapper<AvailableShippingMethod>;
  BannerBlock: ResolverTypeWrapper<BannerBlock>;
  BannerItems: ResolverTypeWrapper<BannerItems>;
  BestSellerBlock: ResolverTypeWrapper<BestSellerBlock>;
  BestSellerProducts: ResolverTypeWrapper<BestSellerProducts>;
  BestsellersProductOutput: ResolverTypeWrapper<BestsellersProductOutput>;
  BillingAddressInput: BillingAddressInput;
  BillingCartAddress: ResolverTypeWrapper<BillingCartAddress>;
  Block: ResolversTypes['BannerBlock'] | ResolversTypes['BestSellerBlock'] | ResolversTypes['CategoryBlock'] | ResolversTypes['ProductBlock'];
  BlogAuthor: ResolverTypeWrapper<BlogAuthor>;
  BlogCategory: ResolverTypeWrapper<BlogCategory>;
  BlogComment: ResolverTypeWrapper<BlogComment>;
  BlogCommentsFilterInput: BlogCommentsFilterInput;
  BlogPost: ResolverTypeWrapper<BlogPost>;
  BlogPosts: ResolverTypeWrapper<BlogPosts>;
  BlogPostsFilterInput: BlogPostsFilterInput;
  BlogTag: ResolverTypeWrapper<BlogTag>;
  Blogs: ResolverTypeWrapper<Blogs>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BraintreeCcVaultInput: BraintreeCcVaultInput;
  BraintreeInput: BraintreeInput;
  Breadcrumb: ResolverTypeWrapper<Breadcrumb>;
  BundleCartItem: ResolverTypeWrapper<BundleCartItem>;
  BundleCreditMemoItem: ResolverTypeWrapper<BundleCreditMemoItem>;
  BundleInvoiceItem: ResolverTypeWrapper<BundleInvoiceItem>;
  BundleItem: ResolverTypeWrapper<BundleItem>;
  BundleItemOption: ResolverTypeWrapper<BundleItemOption>;
  BundleOptionInput: BundleOptionInput;
  BundleOrderItem: ResolverTypeWrapper<BundleOrderItem>;
  BundleProduct: ResolverTypeWrapper<BundleProduct>;
  BundleProductCartItemInput: BundleProductCartItemInput;
  BundleShipmentItem: ResolverTypeWrapper<BundleShipmentItem>;
  BundleWishlistItem: ResolverTypeWrapper<BundleWishlistItem>;
  Cart: ResolverTypeWrapper<Cart>;
  CartAddressCountry: ResolverTypeWrapper<CartAddressCountry>;
  CartAddressInput: CartAddressInput;
  CartAddressInterface: ResolversTypes['BillingCartAddress'] | ResolversTypes['ShippingCartAddress'];
  CartAddressRegion: ResolverTypeWrapper<CartAddressRegion>;
  CartDiscount: ResolverTypeWrapper<CartDiscount>;
  CartItemInput: CartItemInput;
  CartItemInterface: ResolversTypes['BundleCartItem'] | ResolversTypes['ConfigurableCartItem'] | ResolversTypes['DownloadableCartItem'] | ResolversTypes['MpGiftCardCartItem'] | ResolversTypes['SimpleCartItem'] | ResolversTypes['VirtualCartItem'];
  CartItemPrices: ResolverTypeWrapper<CartItemPrices>;
  CartItemQuantity: ResolverTypeWrapper<CartItemQuantity>;
  CartItemSelectedOptionValuePrice: ResolverTypeWrapper<CartItemSelectedOptionValuePrice>;
  CartItemUpdateInput: CartItemUpdateInput;
  CartPrices: ResolverTypeWrapper<CartPrices>;
  CartTaxItem: ResolverTypeWrapper<CartTaxItem>;
  CartUserInputError: ResolverTypeWrapper<CartUserInputError>;
  CartUserInputErrorType: CartUserInputErrorType;
  Categories: ResolverTypeWrapper<Categories>;
  CategoryBlock: ResolverTypeWrapper<CategoryBlock>;
  CategoryBlockTree: ResolverTypeWrapper<CategoryBlockTree>;
  CategoryFilterInput: CategoryFilterInput;
  CategoryInterface: ResolversTypes['CategoryTree'];
  CategoryProducts: ResolverTypeWrapper<CategoryProducts>;
  CategoryResult: ResolverTypeWrapper<CategoryResult>;
  CategoryTree: ResolverTypeWrapper<CategoryTree>;
  ChatBoxInput: ChatBoxInput;
  ChatBoxOutput: ResolverTypeWrapper<ChatBoxOutput>;
  ChatData: ResolverTypeWrapper<ChatData>;
  CheckGiftCodeOutput: ResolverTypeWrapper<CheckGiftCodeOutput>;
  CheckoutAgreement: ResolverTypeWrapper<CheckoutAgreement>;
  CheckoutAgreementMode: CheckoutAgreementMode;
  CheckoutUserInputError: ResolverTypeWrapper<CheckoutUserInputError>;
  CheckoutUserInputErrorCodes: CheckoutUserInputErrorCodes;
  CmsBlock: ResolverTypeWrapper<CmsBlock>;
  CmsBlocks: ResolverTypeWrapper<CmsBlocks>;
  CmsPage: ResolverTypeWrapper<CmsPage>;
  ColorSwatchData: ResolverTypeWrapper<ColorSwatchData>;
  ComparableAttribute: ResolverTypeWrapper<ComparableAttribute>;
  ComparableItem: ResolverTypeWrapper<ComparableItem>;
  CompareList: ResolverTypeWrapper<CompareList>;
  ComplexTextValue: ResolverTypeWrapper<ComplexTextValue>;
  ConfigurableAttributeOption: ResolverTypeWrapper<ConfigurableAttributeOption>;
  ConfigurableCartItem: ResolverTypeWrapper<ConfigurableCartItem>;
  ConfigurableOptionAvailableForSelection: ResolverTypeWrapper<ConfigurableOptionAvailableForSelection>;
  ConfigurableProduct: ResolverTypeWrapper<ConfigurableProduct>;
  ConfigurableProductCartItemInput: ConfigurableProductCartItemInput;
  ConfigurableProductOption: ResolverTypeWrapper<ConfigurableProductOption>;
  ConfigurableProductOptionValue: ResolverTypeWrapper<ConfigurableProductOptionValue>;
  ConfigurableProductOptions: ResolverTypeWrapper<ConfigurableProductOptions>;
  ConfigurableProductOptionsSelection: ResolverTypeWrapper<ConfigurableProductOptionsSelection>;
  ConfigurableProductOptionsValues: ResolverTypeWrapper<ConfigurableProductOptionsValues>;
  ConfigurableVariant: ResolverTypeWrapper<ConfigurableVariant>;
  ConfigurableWishlistItem: ResolverTypeWrapper<ConfigurableWishlistItem>;
  Country: ResolverTypeWrapper<Country>;
  CountryCodeEnum: CountryCodeEnum;
  CreateAlbumInput: CreateAlbumInput;
  CreateAlbumOutput: ResolverTypeWrapper<CreateAlbumOutput>;
  CreateCompareListInput: CreateCompareListInput;
  CreatePayflowProTokenOutput: ResolverTypeWrapper<CreatePayflowProTokenOutput>;
  CreateProductReviewInput: CreateProductReviewInput;
  CreateProductReviewOutput: ResolverTypeWrapper<CreateProductReviewOutput>;
  CreditCardDetailsInput: CreditCardDetailsInput;
  CreditMemo: ResolverTypeWrapper<CreditMemo>;
  CreditMemoItem: ResolverTypeWrapper<CreditMemoItem>;
  CreditMemoItemInterface: ResolversTypes['BundleCreditMemoItem'] | ResolversTypes['CreditMemoItem'] | ResolversTypes['DownloadableCreditMemoItem'];
  CreditMemoTotal: ResolverTypeWrapper<CreditMemoTotal>;
  Currency: ResolverTypeWrapper<Currency>;
  CurrencyEnum: CurrencyEnum;
  CustomAttributeMetadata: ResolverTypeWrapper<CustomAttributeMetadata>;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerAddress: ResolverTypeWrapper<CustomerAddress>;
  CustomerAddressAttribute: ResolverTypeWrapper<CustomerAddressAttribute>;
  CustomerAddressAttributeInput: CustomerAddressAttributeInput;
  CustomerAddressInput: CustomerAddressInput;
  CustomerAddressRegion: ResolverTypeWrapper<CustomerAddressRegion>;
  CustomerAddressRegionInput: CustomerAddressRegionInput;
  CustomerCreateInput: CustomerCreateInput;
  CustomerDownloadableProduct: ResolverTypeWrapper<CustomerDownloadableProduct>;
  CustomerDownloadableProducts: ResolverTypeWrapper<CustomerDownloadableProducts>;
  CustomerInput: CustomerInput;
  CustomerOrder: ResolverTypeWrapper<CustomerOrder>;
  CustomerOrders: ResolverTypeWrapper<CustomerOrders>;
  CustomerOrdersFilterInput: CustomerOrdersFilterInput;
  CustomerOutput: ResolverTypeWrapper<CustomerOutput>;
  CustomerPaymentTokens: ResolverTypeWrapper<CustomerPaymentTokens>;
  CustomerToken: ResolverTypeWrapper<CustomerToken>;
  CustomerUpdateInput: CustomerUpdateInput;
  CustomizableAreaOption: ResolverTypeWrapper<CustomizableAreaOption>;
  CustomizableAreaValue: ResolverTypeWrapper<CustomizableAreaValue>;
  CustomizableCheckboxOption: ResolverTypeWrapper<CustomizableCheckboxOption>;
  CustomizableCheckboxValue: ResolverTypeWrapper<CustomizableCheckboxValue>;
  CustomizableDateOption: ResolverTypeWrapper<CustomizableDateOption>;
  CustomizableDateTypeEnum: CustomizableDateTypeEnum;
  CustomizableDateValue: ResolverTypeWrapper<CustomizableDateValue>;
  CustomizableDropDownOption: ResolverTypeWrapper<CustomizableDropDownOption>;
  CustomizableDropDownValue: ResolverTypeWrapper<CustomizableDropDownValue>;
  CustomizableFieldOption: ResolverTypeWrapper<CustomizableFieldOption>;
  CustomizableFieldValue: ResolverTypeWrapper<CustomizableFieldValue>;
  CustomizableFileOption: ResolverTypeWrapper<CustomizableFileOption>;
  CustomizableFileValue: ResolverTypeWrapper<CustomizableFileValue>;
  CustomizableMultipleOption: ResolverTypeWrapper<CustomizableMultipleOption>;
  CustomizableMultipleValue: ResolverTypeWrapper<CustomizableMultipleValue>;
  CustomizableOptionInput: CustomizableOptionInput;
  CustomizableOptionInterface: ResolversTypes['CustomizableAreaOption'] | ResolversTypes['CustomizableCheckboxOption'] | ResolversTypes['CustomizableDateOption'] | ResolversTypes['CustomizableDropDownOption'] | ResolversTypes['CustomizableFieldOption'] | ResolversTypes['CustomizableFileOption'] | ResolversTypes['CustomizableMultipleOption'] | ResolversTypes['CustomizableRadioOption'];
  CustomizableProductInterface: ResolversTypes['BundleProduct'] | ResolversTypes['ConfigurableProduct'] | ResolversTypes['DownloadableProduct'] | ResolversTypes['MpGiftCardProduct'] | ResolversTypes['SimpleProduct'] | ResolversTypes['VirtualProduct'];
  CustomizableRadioOption: ResolverTypeWrapper<CustomizableRadioOption>;
  CustomizableRadioValue: ResolverTypeWrapper<CustomizableRadioValue>;
  DeleteCompareListOutput: ResolverTypeWrapper<DeleteCompareListOutput>;
  DeletePaymentTokenOutput: ResolverTypeWrapper<DeletePaymentTokenOutput>;
  Discount: ResolverTypeWrapper<Discount>;
  DownloadableCartItem: ResolverTypeWrapper<DownloadableCartItem>;
  DownloadableCreditMemoItem: ResolverTypeWrapper<DownloadableCreditMemoItem>;
  DownloadableFileTypeEnum: DownloadableFileTypeEnum;
  DownloadableInvoiceItem: ResolverTypeWrapper<DownloadableInvoiceItem>;
  DownloadableItemsLinks: ResolverTypeWrapper<DownloadableItemsLinks>;
  DownloadableOrderItem: ResolverTypeWrapper<DownloadableOrderItem>;
  DownloadableProduct: ResolverTypeWrapper<DownloadableProduct>;
  DownloadableProductCartItemInput: DownloadableProductCartItemInput;
  DownloadableProductLinks: ResolverTypeWrapper<DownloadableProductLinks>;
  DownloadableProductLinksInput: DownloadableProductLinksInput;
  DownloadableProductSamples: ResolverTypeWrapper<DownloadableProductSamples>;
  DownloadableWishlistItem: ResolverTypeWrapper<DownloadableWishlistItem>;
  EnteredOptionInput: EnteredOptionInput;
  EntityUrl: ResolverTypeWrapper<EntityUrl>;
  ExchangeRate: ResolverTypeWrapper<ExchangeRate>;
  FaqGroups: ResolverTypeWrapper<FaqGroups>;
  FaqItems: ResolverTypeWrapper<FaqItems>;
  FilterEqualTypeInput: FilterEqualTypeInput;
  FilterMatchTypeInput: FilterMatchTypeInput;
  FilterRangeTypeInput: FilterRangeTypeInput;
  FilterStringTypeInput: FilterStringTypeInput;
  FilterTypeInput: FilterTypeInput;
  FixedProductTax: ResolverTypeWrapper<FixedProductTax>;
  FixedProductTaxDisplaySettings: FixedProductTaxDisplaySettings;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GenerateCustomerTokenAsAdminInput: GenerateCustomerTokenAsAdminInput;
  GenerateCustomerTokenAsAdminOutput: ResolverTypeWrapper<GenerateCustomerTokenAsAdminOutput>;
  GetAlbumIdInput: GetAlbumIdInput;
  GetAlbumInput: GetAlbumInput;
  GiftCardRedeemDetail: ResolverTypeWrapper<GiftCardRedeemDetail>;
  GiftMessage: ResolverTypeWrapper<GiftMessage>;
  GiftMessageInput: GiftMessageInput;
  GroupedProduct: ResolverTypeWrapper<GroupedProduct>;
  GroupedProductItem: ResolverTypeWrapper<GroupedProductItem>;
  GroupedProductWishlistItem: ResolverTypeWrapper<GroupedProductWishlistItem>;
  HomePageContent: ResolverTypeWrapper<HomePageContent>;
  HostedProInput: HostedProInput;
  HostedProUrl: ResolverTypeWrapper<HostedProUrl>;
  HostedProUrlInput: HostedProUrlInput;
  HttpQueryParameter: ResolverTypeWrapper<HttpQueryParameter>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  ImageSwatchData: ResolverTypeWrapper<ImageSwatchData>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Invoice: ResolverTypeWrapper<Invoice>;
  InvoiceItem: ResolverTypeWrapper<InvoiceItem>;
  InvoiceItemInterface: ResolversTypes['BundleInvoiceItem'] | ResolversTypes['DownloadableInvoiceItem'] | ResolversTypes['InvoiceItem'];
  InvoiceTotal: ResolverTypeWrapper<InvoiceTotal>;
  IsConfigSettingEnabledOutput: ResolverTypeWrapper<IsConfigSettingEnabledOutput>;
  IsEmailAvailableOutput: ResolverTypeWrapper<IsEmailAvailableOutput>;
  ItemSelectedBundleOption: ResolverTypeWrapper<ItemSelectedBundleOption>;
  ItemSelectedBundleOptionValue: ResolverTypeWrapper<ItemSelectedBundleOptionValue>;
  Items: ResolverTypeWrapper<Items>;
  KeyValue: ResolverTypeWrapper<KeyValue>;
  KlarnaInput: KlarnaInput;
  LayerFilter: ResolverTypeWrapper<LayerFilter>;
  LayerFilterItem: ResolverTypeWrapper<LayerFilterItem>;
  LayerFilterItemInterface: ResolversTypes['LayerFilterItem'] | ResolversTypes['SwatchLayerFilterItem'];
  MagicSlider: ResolverTypeWrapper<MagicSlider>;
  MediaGalleryEntry: ResolverTypeWrapper<MediaGalleryEntry>;
  MediaGalleryInterface: ResolversTypes['ProductImage'] | ResolversTypes['ProductVideo'];
  MobileCreateAccountOtpOutput: ResolverTypeWrapper<MobileCreateAccountOtpOutput>;
  MobileCreateCustomerAccountOutput: ResolverTypeWrapper<MobileCreateCustomerAccountOutput>;
  MobileForgotPassworOTPOutput: ResolverTypeWrapper<MobileForgotPassworOtpOutput>;
  MobileForgotPassworOTPVerifyOtpOutput: ResolverTypeWrapper<MobileForgotPassworOtpVerifyOtpOutput>;
  MobileLoginOtpOutput: ResolverTypeWrapper<MobileLoginOtpOutput>;
  MobileLoginVerifyOtpOutput: ResolverTypeWrapper<MobileLoginVerifyOtpOutput>;
  MobileResetPassworOutput: ResolverTypeWrapper<MobileResetPassworOutput>;
  Money: ResolverTypeWrapper<Money>;
  MpFilters: MpFilters;
  MpGiftCardAmount: ResolverTypeWrapper<MpGiftCardAmount>;
  MpGiftCardCartItem: ResolverTypeWrapper<MpGiftCardCartItem>;
  MpGiftCardConfig: ResolverTypeWrapper<MpGiftCardConfig>;
  MpGiftCardDashboardConfigNotification: ResolverTypeWrapper<MpGiftCardDashboardConfigNotification>;
  MpGiftCardDashboardConfigOutput: ResolverTypeWrapper<MpGiftCardDashboardConfigOutput>;
  MpGiftCardDashboardGiftCard: ResolverTypeWrapper<MpGiftCardDashboardGiftCard>;
  MpGiftCardDelivery: ResolverTypeWrapper<MpGiftCardDelivery>;
  MpGiftCardDiscounts: ResolverTypeWrapper<MpGiftCardDiscounts>;
  MpGiftCardDiscountsDetail: ResolverTypeWrapper<MpGiftCardDiscountsDetail>;
  MpGiftCardHistory: ResolverTypeWrapper<MpGiftCardHistory>;
  MpGiftCardList: ResolverTypeWrapper<MpGiftCardList>;
  MpGiftCardOpenAmount: ResolverTypeWrapper<MpGiftCardOpenAmount>;
  MpGiftCardOptionInput: MpGiftCardOptionInput;
  MpGiftCardPreview: ResolverTypeWrapper<MpGiftCardPreview>;
  MpGiftCardPriceFormat: ResolverTypeWrapper<MpGiftCardPriceFormat>;
  MpGiftCardProduct: ResolverTypeWrapper<MpGiftCardProduct>;
  MpGiftCardProductCartItemInput: MpGiftCardProductCartItemInput;
  MpGiftCardProductInfo: ResolverTypeWrapper<MpGiftCardProductInfo>;
  MpGiftCardProductTemplate: ResolverTypeWrapper<MpGiftCardProductTemplate>;
  MpGiftCardProductTemplateImage: ResolverTypeWrapper<MpGiftCardProductTemplateImage>;
  MpGiftCardTimeZone: ResolverTypeWrapper<MpGiftCardTimeZone>;
  MpGiftCardTimeZoneOption: ResolverTypeWrapper<MpGiftCardTimeZoneOption>;
  MpGiftCardTransaction: ResolverTypeWrapper<MpGiftCardTransaction>;
  MpGiftCardUsed: ResolverTypeWrapper<MpGiftCardUsed>;
  MpGiftcardPreviewInput: MpGiftcardPreviewInput;
  Mutation: ResolverTypeWrapper<{}>;
  Order: ResolverTypeWrapper<Order>;
  OrderAddress: ResolverTypeWrapper<OrderAddress>;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  OrderItemInterface: ResolversTypes['BundleOrderItem'] | ResolversTypes['DownloadableOrderItem'] | ResolversTypes['OrderItem'];
  OrderItemOption: ResolverTypeWrapper<OrderItemOption>;
  OrderPaymentMethod: ResolverTypeWrapper<OrderPaymentMethod>;
  OrderShipment: ResolverTypeWrapper<OrderShipment>;
  OrderTotal: ResolverTypeWrapper<OrderTotal>;
  PayflowExpressInput: PayflowExpressInput;
  PayflowLinkInput: PayflowLinkInput;
  PayflowLinkMode: PayflowLinkMode;
  PayflowLinkToken: ResolverTypeWrapper<PayflowLinkToken>;
  PayflowLinkTokenInput: PayflowLinkTokenInput;
  PayflowProInput: PayflowProInput;
  PayflowProResponseInput: PayflowProResponseInput;
  PayflowProResponseOutput: ResolverTypeWrapper<PayflowProResponseOutput>;
  PayflowProToken: ResolverTypeWrapper<PayflowProToken>;
  PayflowProTokenInput: PayflowProTokenInput;
  PayflowProUrlInput: PayflowProUrlInput;
  PaymentMethodInput: PaymentMethodInput;
  PaymentToken: ResolverTypeWrapper<PaymentToken>;
  PaymentTokenTypeEnum: PaymentTokenTypeEnum;
  PaypalExpressInput: PaypalExpressInput;
  PaypalExpressToken: ResolverTypeWrapper<PaypalExpressToken>;
  PaypalExpressTokenInput: PaypalExpressTokenInput;
  PaypalExpressTokenOutput: ResolverTypeWrapper<PaypalExpressTokenOutput>;
  PaypalExpressUrlList: ResolverTypeWrapper<PaypalExpressUrlList>;
  PaypalExpressUrlsInput: PaypalExpressUrlsInput;
  PhysicalProductInterface: ResolversTypes['BundleProduct'] | ResolversTypes['ConfigurableProduct'] | ResolversTypes['GroupedProduct'] | ResolversTypes['MpGiftCardProduct'] | ResolversTypes['SimpleProduct'];
  PickupLocation: ResolverTypeWrapper<PickupLocation>;
  PickupLocationFilterInput: PickupLocationFilterInput;
  PickupLocationSortInput: PickupLocationSortInput;
  PickupLocations: ResolverTypeWrapper<PickupLocations>;
  PlaceOrderInput: PlaceOrderInput;
  PlaceOrderOutput: ResolverTypeWrapper<PlaceOrderOutput>;
  Price: ResolverTypeWrapper<Price>;
  PriceAdjustment: ResolverTypeWrapper<PriceAdjustment>;
  PriceAdjustmentCodesEnum: PriceAdjustmentCodesEnum;
  PriceAdjustmentDescriptionEnum: PriceAdjustmentDescriptionEnum;
  PriceRange: ResolverTypeWrapper<PriceRange>;
  PriceTypeEnum: PriceTypeEnum;
  PriceViewEnum: PriceViewEnum;
  ProductAttribute: ResolverTypeWrapper<ProductAttribute>;
  ProductAttributeFilterInput: ProductAttributeFilterInput;
  ProductAttributeSortInput: ProductAttributeSortInput;
  ProductBlock: ResolverTypeWrapper<ProductBlock>;
  ProductDiscount: ResolverTypeWrapper<ProductDiscount>;
  ProductFilterInput: ProductFilterInput;
  ProductImage: ResolverTypeWrapper<ProductImage>;
  ProductInfoInput: ProductInfoInput;
  ProductInterface: ResolversTypes['BundleProduct'] | ResolversTypes['ConfigurableProduct'] | ResolversTypes['DownloadableProduct'] | ResolversTypes['GroupedProduct'] | ResolversTypes['MpGiftCardProduct'] | ResolversTypes['SimpleProduct'] | ResolversTypes['VirtualProduct'];
  ProductLinks: ResolverTypeWrapper<ProductLinks>;
  ProductLinksInterface: ResolversTypes['ProductLinks'];
  ProductMediaGalleryEntriesContent: ResolverTypeWrapper<ProductMediaGalleryEntriesContent>;
  ProductMediaGalleryEntriesVideoContent: ResolverTypeWrapper<ProductMediaGalleryEntriesVideoContent>;
  ProductPrice: ResolverTypeWrapper<ProductPrice>;
  ProductPrices: ResolverTypeWrapper<ProductPrices>;
  ProductReview: ResolverTypeWrapper<ProductReview>;
  ProductReviewRating: ResolverTypeWrapper<ProductReviewRating>;
  ProductReviewRatingInput: ProductReviewRatingInput;
  ProductReviewRatingMetadata: ResolverTypeWrapper<ProductReviewRatingMetadata>;
  ProductReviewRatingValueMetadata: ResolverTypeWrapper<ProductReviewRatingValueMetadata>;
  ProductReviewRatingsMetadata: ResolverTypeWrapper<ProductReviewRatingsMetadata>;
  ProductReviews: ResolverTypeWrapper<ProductReviews>;
  ProductSortInput: ProductSortInput;
  ProductStockStatus: ProductStockStatus;
  ProductTierPrices: ResolverTypeWrapper<ProductTierPrices>;
  ProductVideo: ResolverTypeWrapper<ProductVideo>;
  Products: ResolverTypeWrapper<Products>;
  Query: ResolverTypeWrapper<{}>;
  RazorpayOrder: ResolverTypeWrapper<RazorpayOrder>;
  Recentlyviewed: ResolverTypeWrapper<Recentlyviewed>;
  RecentlyviewedFilterInput: RecentlyviewedFilterInput;
  Region: ResolverTypeWrapper<Region>;
  RemoveCouponFromCartInput: RemoveCouponFromCartInput;
  RemoveCouponFromCartOutput: ResolverTypeWrapper<RemoveCouponFromCartOutput>;
  RemoveItemFromCartInput: RemoveItemFromCartInput;
  RemoveItemFromCartOutput: ResolverTypeWrapper<RemoveItemFromCartOutput>;
  RemoveProductsFromCompareListInput: RemoveProductsFromCompareListInput;
  RemoveProductsFromWishlistOutput: ResolverTypeWrapper<RemoveProductsFromWishlistOutput>;
  ReorderItemsOutput: ResolverTypeWrapper<ReorderItemsOutput>;
  RevokeCustomerTokenOutput: ResolverTypeWrapper<RevokeCustomerTokenOutput>;
  RoutableInterface: ResolversTypes['BundleProduct'] | ResolversTypes['CategoryTree'] | ResolversTypes['CmsPage'] | ResolversTypes['ConfigurableProduct'] | ResolversTypes['DownloadableProduct'] | ResolversTypes['GroupedProduct'] | ResolversTypes['MpGiftCardProduct'] | ResolversTypes['SimpleProduct'] | ResolversTypes['VirtualProduct'];
  SalesCommentItem: ResolverTypeWrapper<SalesCommentItem>;
  SalesItemInterface: ResolverTypeWrapper<SalesItemInterface>;
  SearchResultPageInfo: ResolverTypeWrapper<SearchResultPageInfo>;
  SelectedBundleOption: ResolverTypeWrapper<SelectedBundleOption>;
  SelectedBundleOptionValue: ResolverTypeWrapper<SelectedBundleOptionValue>;
  SelectedConfigurableOption: ResolverTypeWrapper<SelectedConfigurableOption>;
  SelectedCustomizableOption: ResolverTypeWrapper<SelectedCustomizableOption>;
  SelectedCustomizableOptionValue: ResolverTypeWrapper<SelectedCustomizableOptionValue>;
  SelectedGiftCardOption: ResolverTypeWrapper<SelectedGiftCardOption>;
  SelectedPaymentMethod: ResolverTypeWrapper<SelectedPaymentMethod>;
  SelectedShippingMethod: ResolverTypeWrapper<SelectedShippingMethod>;
  SendEmailToFriendInput: SendEmailToFriendInput;
  SendEmailToFriendOutput: ResolverTypeWrapper<SendEmailToFriendOutput>;
  SendEmailToFriendRecipient: ResolverTypeWrapper<SendEmailToFriendRecipient>;
  SendEmailToFriendRecipientInput: SendEmailToFriendRecipientInput;
  SendEmailToFriendSender: ResolverTypeWrapper<SendEmailToFriendSender>;
  SendEmailToFriendSenderInput: SendEmailToFriendSenderInput;
  SendFriendConfiguration: ResolverTypeWrapper<SendFriendConfiguration>;
  SetBillingAddressOnCartInput: SetBillingAddressOnCartInput;
  SetBillingAddressOnCartOutput: ResolverTypeWrapper<SetBillingAddressOnCartOutput>;
  SetGuestEmailOnCartInput: SetGuestEmailOnCartInput;
  SetGuestEmailOnCartOutput: ResolverTypeWrapper<SetGuestEmailOnCartOutput>;
  SetPaymentMethodAndPlaceOrderInput: SetPaymentMethodAndPlaceOrderInput;
  SetPaymentMethodOnCartInput: SetPaymentMethodOnCartInput;
  SetPaymentMethodOnCartOutput: ResolverTypeWrapper<SetPaymentMethodOnCartOutput>;
  SetRzpPaymentDetailsOnCartInput: SetRzpPaymentDetailsOnCartInput;
  SetRzpPaymentDetailsOnCartOutput: ResolverTypeWrapper<SetRzpPaymentDetailsOnCartOutput>;
  SetShippingAddressesOnCartInput: SetShippingAddressesOnCartInput;
  SetShippingAddressesOnCartOutput: ResolverTypeWrapper<SetShippingAddressesOnCartOutput>;
  SetShippingMethodsOnCartInput: SetShippingMethodsOnCartInput;
  SetShippingMethodsOnCartOutput: ResolverTypeWrapper<SetShippingMethodsOnCartOutput>;
  ShipBundleItemsEnum: ShipBundleItemsEnum;
  ShipmentItem: ResolverTypeWrapper<ShipmentItem>;
  ShipmentItemInterface: ResolversTypes['BundleShipmentItem'] | ResolversTypes['ShipmentItem'];
  ShipmentTracking: ResolverTypeWrapper<ShipmentTracking>;
  ShippingAddressInput: ShippingAddressInput;
  ShippingCartAddress: ResolverTypeWrapper<ShippingCartAddress>;
  ShippingDiscount: ResolverTypeWrapper<ShippingDiscount>;
  ShippingHandling: ResolverTypeWrapper<ShippingHandling>;
  ShippingMethodInput: ShippingMethodInput;
  SimpleCartItem: ResolverTypeWrapper<SimpleCartItem>;
  SimpleProduct: ResolverTypeWrapper<SimpleProduct>;
  SimpleProductCartItemInput: SimpleProductCartItemInput;
  SimpleWishlistItem: ResolverTypeWrapper<SimpleWishlistItem>;
  SmtpBestsellersOutput: ResolverTypeWrapper<SmtpBestsellersOutput>;
  SortEnum: SortEnum;
  SortField: ResolverTypeWrapper<SortField>;
  SortFields: ResolverTypeWrapper<SortFields>;
  StoreConfig: ResolverTypeWrapper<StoreConfig>;
  StoreConfigData: ResolverTypeWrapper<StoreConfigData>;
  StorefrontProperties: ResolverTypeWrapper<StorefrontProperties>;
  String: ResolverTypeWrapper<Scalars['String']>;
  SubscribeEmailToNewsletterOutput: ResolverTypeWrapper<SubscribeEmailToNewsletterOutput>;
  SubscriptionStatusesEnum: SubscriptionStatusesEnum;
  SwatchData: ResolversTypes['SwatchImageData'] | ResolversTypes['SwatchTextData'];
  SwatchDataInterface: ResolversTypes['ColorSwatchData'] | ResolversTypes['ImageSwatchData'] | ResolversTypes['TextSwatchData'];
  SwatchImageData: ResolverTypeWrapper<SwatchImageData>;
  SwatchLayerFilterItem: ResolverTypeWrapper<SwatchLayerFilterItem>;
  SwatchLayerFilterItemInterface: ResolversTypes['SwatchLayerFilterItem'];
  SwatchTextData: ResolverTypeWrapper<SwatchTextData>;
  TaxItem: ResolverTypeWrapper<TaxItem>;
  Testimonial: ResolverTypeWrapper<Testimonial>;
  TestimonialConfiguration: ResolverTypeWrapper<TestimonialConfiguration>;
  TestimonialContent: ResolverTypeWrapper<TestimonialContent>;
  TestimonialGeneral: ResolverTypeWrapper<TestimonialGeneral>;
  TestimonialSettingResponsive: ResolverTypeWrapper<TestimonialSettingResponsive>;
  TestimonialSettingSlider: ResolverTypeWrapper<TestimonialSettingSlider>;
  TextSwatchData: ResolverTypeWrapper<TextSwatchData>;
  TierPrice: ResolverTypeWrapper<TierPrice>;
  Track: ResolverTypeWrapper<Track>;
  TrackingData: ResolverTypeWrapper<TrackingData>;
  UpdateCartItemsInput: UpdateCartItemsInput;
  UpdateCartItemsOutput: ResolverTypeWrapper<UpdateCartItemsOutput>;
  UpdateProductsInWishlistOutput: ResolverTypeWrapper<UpdateProductsInWishlistOutput>;
  UploadImageInput: UploadImageInput;
  UploadImageOutput: ResolverTypeWrapper<UploadImageOutput>;
  UrlRewrite: ResolverTypeWrapper<UrlRewrite>;
  UrlRewriteEntityTypeEnum: UrlRewriteEntityTypeEnum;
  UseInLayeredNavigationOptions: UseInLayeredNavigationOptions;
  VaultTokenInput: VaultTokenInput;
  VirtualCartItem: ResolverTypeWrapper<VirtualCartItem>;
  VirtualProduct: ResolverTypeWrapper<VirtualProduct>;
  VirtualProductCartItemInput: VirtualProductCartItemInput;
  VirtualWishlistItem: ResolverTypeWrapper<VirtualWishlistItem>;
  Website: ResolverTypeWrapper<Website>;
  WeddingAlbum: ResolverTypeWrapper<WeddingAlbum>;
  WishListUserInputError: ResolverTypeWrapper<WishListUserInputError>;
  WishListUserInputErrorType: WishListUserInputErrorType;
  Wishlist: ResolverTypeWrapper<Wishlist>;
  WishlistCartUserInputError: ResolverTypeWrapper<WishlistCartUserInputError>;
  WishlistCartUserInputErrorType: WishlistCartUserInputErrorType;
  WishlistData: ResolverTypeWrapper<WishlistData>;
  WishlistItem: ResolverTypeWrapper<WishlistItem>;
  WishlistItemInput: WishlistItemInput;
  WishlistItemInterface: ResolversTypes['BundleWishlistItem'] | ResolversTypes['ConfigurableWishlistItem'] | ResolversTypes['DownloadableWishlistItem'] | ResolversTypes['GroupedProductWishlistItem'] | ResolversTypes['SimpleWishlistItem'] | ResolversTypes['VirtualWishlistItem'];
  WishlistItemUpdateInput: WishlistItemUpdateInput;
  WishlistItems: ResolverTypeWrapper<WishlistItems>;
  WishlistOutput: ResolverTypeWrapper<WishlistOutput>;
  addCommentToPostInput: AddCommentToPostInput;
  addCommentToPostOutput: ResolverTypeWrapper<AddCommentToPostOutput>;
  appliedjobInput: AppliedjobInput;
  appliedjobOutput: ResolverTypeWrapper<AppliedjobOutput>;
  blogCategoriesOutput: ResolverTypeWrapper<BlogCategoriesOutput>;
  blogCommentsOutput: ResolverTypeWrapper<BlogCommentsOutput>;
  blogPostsOutput: ResolverTypeWrapper<BlogPostsOutput>;
  blogTagsOutput: ResolverTypeWrapper<BlogTagsOutput>;
  createEmptyCartInput: CreateEmptyCartInput;
  createKlarnaPaymentsSessionInput: CreateKlarnaPaymentsSessionInput;
  createKlarnaPaymentsSessionOutput: ResolverTypeWrapper<CreateKlarnaPaymentsSessionOutput>;
  jobDetails: ResolverTypeWrapper<JobDetails>;
  jobLocation: ResolverTypeWrapper<JobLocation>;
  myAccountOtpInput: MyAccountOtpInput;
  myAccountOtpOutput: ResolverTypeWrapper<MyAccountOtpOutput>;
  uploadMpGiftCardImageOutput: ResolverTypeWrapper<UploadMpGiftCardImageOutput>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddBundleProductsToCartInput: AddBundleProductsToCartInput;
  AddBundleProductsToCartOutput: AddBundleProductsToCartOutput;
  AddConfigurableProductsToCartInput: AddConfigurableProductsToCartInput;
  AddConfigurableProductsToCartOutput: AddConfigurableProductsToCartOutput;
  AddDownloadableProductsToCartInput: AddDownloadableProductsToCartInput;
  AddDownloadableProductsToCartOutput: AddDownloadableProductsToCartOutput;
  AddMpGiftCardProductsToCartInput: AddMpGiftCardProductsToCartInput;
  AddMpGiftCardProductsToCartOutput: AddMpGiftCardProductsToCartOutput;
  AddProductsToCartOutput: AddProductsToCartOutput;
  AddProductsToCompareListInput: AddProductsToCompareListInput;
  AddProductsToWishlistOutput: AddProductsToWishlistOutput;
  AddSimpleProductsToCartInput: AddSimpleProductsToCartInput;
  AddSimpleProductsToCartOutput: AddSimpleProductsToCartOutput;
  AddVirtualProductsToCartInput: AddVirtualProductsToCartInput;
  AddVirtualProductsToCartOutput: AddVirtualProductsToCartOutput;
  AddWishlistItemsToCartOutput: AddWishlistItemsToCartOutput;
  Aggregation: Aggregation;
  AggregationOption: AggregationOption;
  AggregationOptionInterface: ResolversParentTypes['AggregationOption'];
  Album: Album;
  AppliedCoupon: AppliedCoupon;
  ApplyCouponToCartInput: ApplyCouponToCartInput;
  ApplyCouponToCartOutput: ApplyCouponToCartOutput;
  AreaInput: AreaInput;
  Assets: Assets;
  AssignCompareListToCustomerOutput: AssignCompareListToCustomerOutput;
  Attribute: Attribute;
  AttributeInput: AttributeInput;
  AttributeOption: AttributeOption;
  AuthenticateCustomerWithSocialLogin: AuthenticateCustomerWithSocialLogin;
  AvailablePaymentMethod: AvailablePaymentMethod;
  AvailableShippingMethod: AvailableShippingMethod;
  BannerBlock: BannerBlock;
  BannerItems: BannerItems;
  BestSellerBlock: BestSellerBlock;
  BestSellerProducts: BestSellerProducts;
  BestsellersProductOutput: BestsellersProductOutput;
  BillingAddressInput: BillingAddressInput;
  BillingCartAddress: BillingCartAddress;
  Block: ResolversParentTypes['BannerBlock'] | ResolversParentTypes['BestSellerBlock'] | ResolversParentTypes['CategoryBlock'] | ResolversParentTypes['ProductBlock'];
  BlogAuthor: BlogAuthor;
  BlogCategory: BlogCategory;
  BlogComment: BlogComment;
  BlogCommentsFilterInput: BlogCommentsFilterInput;
  BlogPost: BlogPost;
  BlogPosts: BlogPosts;
  BlogPostsFilterInput: BlogPostsFilterInput;
  BlogTag: BlogTag;
  Blogs: Blogs;
  Boolean: Scalars['Boolean'];
  BraintreeCcVaultInput: BraintreeCcVaultInput;
  BraintreeInput: BraintreeInput;
  Breadcrumb: Breadcrumb;
  BundleCartItem: BundleCartItem;
  BundleCreditMemoItem: BundleCreditMemoItem;
  BundleInvoiceItem: BundleInvoiceItem;
  BundleItem: BundleItem;
  BundleItemOption: BundleItemOption;
  BundleOptionInput: BundleOptionInput;
  BundleOrderItem: BundleOrderItem;
  BundleProduct: BundleProduct;
  BundleProductCartItemInput: BundleProductCartItemInput;
  BundleShipmentItem: BundleShipmentItem;
  BundleWishlistItem: BundleWishlistItem;
  Cart: Cart;
  CartAddressCountry: CartAddressCountry;
  CartAddressInput: CartAddressInput;
  CartAddressInterface: ResolversParentTypes['BillingCartAddress'] | ResolversParentTypes['ShippingCartAddress'];
  CartAddressRegion: CartAddressRegion;
  CartDiscount: CartDiscount;
  CartItemInput: CartItemInput;
  CartItemInterface: ResolversParentTypes['BundleCartItem'] | ResolversParentTypes['ConfigurableCartItem'] | ResolversParentTypes['DownloadableCartItem'] | ResolversParentTypes['MpGiftCardCartItem'] | ResolversParentTypes['SimpleCartItem'] | ResolversParentTypes['VirtualCartItem'];
  CartItemPrices: CartItemPrices;
  CartItemQuantity: CartItemQuantity;
  CartItemSelectedOptionValuePrice: CartItemSelectedOptionValuePrice;
  CartItemUpdateInput: CartItemUpdateInput;
  CartPrices: CartPrices;
  CartTaxItem: CartTaxItem;
  CartUserInputError: CartUserInputError;
  Categories: Categories;
  CategoryBlock: CategoryBlock;
  CategoryBlockTree: CategoryBlockTree;
  CategoryFilterInput: CategoryFilterInput;
  CategoryInterface: ResolversParentTypes['CategoryTree'];
  CategoryProducts: CategoryProducts;
  CategoryResult: CategoryResult;
  CategoryTree: CategoryTree;
  ChatBoxInput: ChatBoxInput;
  ChatBoxOutput: ChatBoxOutput;
  ChatData: ChatData;
  CheckGiftCodeOutput: CheckGiftCodeOutput;
  CheckoutAgreement: CheckoutAgreement;
  CheckoutUserInputError: CheckoutUserInputError;
  CmsBlock: CmsBlock;
  CmsBlocks: CmsBlocks;
  CmsPage: CmsPage;
  ColorSwatchData: ColorSwatchData;
  ComparableAttribute: ComparableAttribute;
  ComparableItem: ComparableItem;
  CompareList: CompareList;
  ComplexTextValue: ComplexTextValue;
  ConfigurableAttributeOption: ConfigurableAttributeOption;
  ConfigurableCartItem: ConfigurableCartItem;
  ConfigurableOptionAvailableForSelection: ConfigurableOptionAvailableForSelection;
  ConfigurableProduct: ConfigurableProduct;
  ConfigurableProductCartItemInput: ConfigurableProductCartItemInput;
  ConfigurableProductOption: ConfigurableProductOption;
  ConfigurableProductOptionValue: ConfigurableProductOptionValue;
  ConfigurableProductOptions: ConfigurableProductOptions;
  ConfigurableProductOptionsSelection: ConfigurableProductOptionsSelection;
  ConfigurableProductOptionsValues: ConfigurableProductOptionsValues;
  ConfigurableVariant: ConfigurableVariant;
  ConfigurableWishlistItem: ConfigurableWishlistItem;
  Country: Country;
  CreateAlbumInput: CreateAlbumInput;
  CreateAlbumOutput: CreateAlbumOutput;
  CreateCompareListInput: CreateCompareListInput;
  CreatePayflowProTokenOutput: CreatePayflowProTokenOutput;
  CreateProductReviewInput: CreateProductReviewInput;
  CreateProductReviewOutput: CreateProductReviewOutput;
  CreditCardDetailsInput: CreditCardDetailsInput;
  CreditMemo: CreditMemo;
  CreditMemoItem: CreditMemoItem;
  CreditMemoItemInterface: ResolversParentTypes['BundleCreditMemoItem'] | ResolversParentTypes['CreditMemoItem'] | ResolversParentTypes['DownloadableCreditMemoItem'];
  CreditMemoTotal: CreditMemoTotal;
  Currency: Currency;
  CustomAttributeMetadata: CustomAttributeMetadata;
  Customer: Customer;
  CustomerAddress: CustomerAddress;
  CustomerAddressAttribute: CustomerAddressAttribute;
  CustomerAddressAttributeInput: CustomerAddressAttributeInput;
  CustomerAddressInput: CustomerAddressInput;
  CustomerAddressRegion: CustomerAddressRegion;
  CustomerAddressRegionInput: CustomerAddressRegionInput;
  CustomerCreateInput: CustomerCreateInput;
  CustomerDownloadableProduct: CustomerDownloadableProduct;
  CustomerDownloadableProducts: CustomerDownloadableProducts;
  CustomerInput: CustomerInput;
  CustomerOrder: CustomerOrder;
  CustomerOrders: CustomerOrders;
  CustomerOrdersFilterInput: CustomerOrdersFilterInput;
  CustomerOutput: CustomerOutput;
  CustomerPaymentTokens: CustomerPaymentTokens;
  CustomerToken: CustomerToken;
  CustomerUpdateInput: CustomerUpdateInput;
  CustomizableAreaOption: CustomizableAreaOption;
  CustomizableAreaValue: CustomizableAreaValue;
  CustomizableCheckboxOption: CustomizableCheckboxOption;
  CustomizableCheckboxValue: CustomizableCheckboxValue;
  CustomizableDateOption: CustomizableDateOption;
  CustomizableDateValue: CustomizableDateValue;
  CustomizableDropDownOption: CustomizableDropDownOption;
  CustomizableDropDownValue: CustomizableDropDownValue;
  CustomizableFieldOption: CustomizableFieldOption;
  CustomizableFieldValue: CustomizableFieldValue;
  CustomizableFileOption: CustomizableFileOption;
  CustomizableFileValue: CustomizableFileValue;
  CustomizableMultipleOption: CustomizableMultipleOption;
  CustomizableMultipleValue: CustomizableMultipleValue;
  CustomizableOptionInput: CustomizableOptionInput;
  CustomizableOptionInterface: ResolversParentTypes['CustomizableAreaOption'] | ResolversParentTypes['CustomizableCheckboxOption'] | ResolversParentTypes['CustomizableDateOption'] | ResolversParentTypes['CustomizableDropDownOption'] | ResolversParentTypes['CustomizableFieldOption'] | ResolversParentTypes['CustomizableFileOption'] | ResolversParentTypes['CustomizableMultipleOption'] | ResolversParentTypes['CustomizableRadioOption'];
  CustomizableProductInterface: ResolversParentTypes['BundleProduct'] | ResolversParentTypes['ConfigurableProduct'] | ResolversParentTypes['DownloadableProduct'] | ResolversParentTypes['MpGiftCardProduct'] | ResolversParentTypes['SimpleProduct'] | ResolversParentTypes['VirtualProduct'];
  CustomizableRadioOption: CustomizableRadioOption;
  CustomizableRadioValue: CustomizableRadioValue;
  DeleteCompareListOutput: DeleteCompareListOutput;
  DeletePaymentTokenOutput: DeletePaymentTokenOutput;
  Discount: Discount;
  DownloadableCartItem: DownloadableCartItem;
  DownloadableCreditMemoItem: DownloadableCreditMemoItem;
  DownloadableInvoiceItem: DownloadableInvoiceItem;
  DownloadableItemsLinks: DownloadableItemsLinks;
  DownloadableOrderItem: DownloadableOrderItem;
  DownloadableProduct: DownloadableProduct;
  DownloadableProductCartItemInput: DownloadableProductCartItemInput;
  DownloadableProductLinks: DownloadableProductLinks;
  DownloadableProductLinksInput: DownloadableProductLinksInput;
  DownloadableProductSamples: DownloadableProductSamples;
  DownloadableWishlistItem: DownloadableWishlistItem;
  EnteredOptionInput: EnteredOptionInput;
  EntityUrl: EntityUrl;
  ExchangeRate: ExchangeRate;
  FaqGroups: FaqGroups;
  FaqItems: FaqItems;
  FilterEqualTypeInput: FilterEqualTypeInput;
  FilterMatchTypeInput: FilterMatchTypeInput;
  FilterRangeTypeInput: FilterRangeTypeInput;
  FilterStringTypeInput: FilterStringTypeInput;
  FilterTypeInput: FilterTypeInput;
  FixedProductTax: FixedProductTax;
  Float: Scalars['Float'];
  GenerateCustomerTokenAsAdminInput: GenerateCustomerTokenAsAdminInput;
  GenerateCustomerTokenAsAdminOutput: GenerateCustomerTokenAsAdminOutput;
  GetAlbumIdInput: GetAlbumIdInput;
  GetAlbumInput: GetAlbumInput;
  GiftCardRedeemDetail: GiftCardRedeemDetail;
  GiftMessage: GiftMessage;
  GiftMessageInput: GiftMessageInput;
  GroupedProduct: GroupedProduct;
  GroupedProductItem: GroupedProductItem;
  GroupedProductWishlistItem: GroupedProductWishlistItem;
  HomePageContent: HomePageContent;
  HostedProInput: HostedProInput;
  HostedProUrl: HostedProUrl;
  HostedProUrlInput: HostedProUrlInput;
  HttpQueryParameter: HttpQueryParameter;
  ID: Scalars['ID'];
  ImageSwatchData: ImageSwatchData;
  Int: Scalars['Int'];
  Invoice: Invoice;
  InvoiceItem: InvoiceItem;
  InvoiceItemInterface: ResolversParentTypes['BundleInvoiceItem'] | ResolversParentTypes['DownloadableInvoiceItem'] | ResolversParentTypes['InvoiceItem'];
  InvoiceTotal: InvoiceTotal;
  IsConfigSettingEnabledOutput: IsConfigSettingEnabledOutput;
  IsEmailAvailableOutput: IsEmailAvailableOutput;
  ItemSelectedBundleOption: ItemSelectedBundleOption;
  ItemSelectedBundleOptionValue: ItemSelectedBundleOptionValue;
  Items: Items;
  KeyValue: KeyValue;
  KlarnaInput: KlarnaInput;
  LayerFilter: LayerFilter;
  LayerFilterItem: LayerFilterItem;
  LayerFilterItemInterface: ResolversParentTypes['LayerFilterItem'] | ResolversParentTypes['SwatchLayerFilterItem'];
  MagicSlider: MagicSlider;
  MediaGalleryEntry: MediaGalleryEntry;
  MediaGalleryInterface: ResolversParentTypes['ProductImage'] | ResolversParentTypes['ProductVideo'];
  MobileCreateAccountOtpOutput: MobileCreateAccountOtpOutput;
  MobileCreateCustomerAccountOutput: MobileCreateCustomerAccountOutput;
  MobileForgotPassworOTPOutput: MobileForgotPassworOtpOutput;
  MobileForgotPassworOTPVerifyOtpOutput: MobileForgotPassworOtpVerifyOtpOutput;
  MobileLoginOtpOutput: MobileLoginOtpOutput;
  MobileLoginVerifyOtpOutput: MobileLoginVerifyOtpOutput;
  MobileResetPassworOutput: MobileResetPassworOutput;
  Money: Money;
  MpFilters: MpFilters;
  MpGiftCardAmount: MpGiftCardAmount;
  MpGiftCardCartItem: MpGiftCardCartItem;
  MpGiftCardConfig: MpGiftCardConfig;
  MpGiftCardDashboardConfigNotification: MpGiftCardDashboardConfigNotification;
  MpGiftCardDashboardConfigOutput: MpGiftCardDashboardConfigOutput;
  MpGiftCardDashboardGiftCard: MpGiftCardDashboardGiftCard;
  MpGiftCardDelivery: MpGiftCardDelivery;
  MpGiftCardDiscounts: MpGiftCardDiscounts;
  MpGiftCardDiscountsDetail: MpGiftCardDiscountsDetail;
  MpGiftCardHistory: MpGiftCardHistory;
  MpGiftCardList: MpGiftCardList;
  MpGiftCardOpenAmount: MpGiftCardOpenAmount;
  MpGiftCardOptionInput: MpGiftCardOptionInput;
  MpGiftCardPreview: MpGiftCardPreview;
  MpGiftCardPriceFormat: MpGiftCardPriceFormat;
  MpGiftCardProduct: MpGiftCardProduct;
  MpGiftCardProductCartItemInput: MpGiftCardProductCartItemInput;
  MpGiftCardProductInfo: MpGiftCardProductInfo;
  MpGiftCardProductTemplate: MpGiftCardProductTemplate;
  MpGiftCardProductTemplateImage: MpGiftCardProductTemplateImage;
  MpGiftCardTimeZone: MpGiftCardTimeZone;
  MpGiftCardTimeZoneOption: MpGiftCardTimeZoneOption;
  MpGiftCardTransaction: MpGiftCardTransaction;
  MpGiftCardUsed: MpGiftCardUsed;
  MpGiftcardPreviewInput: MpGiftcardPreviewInput;
  Mutation: {};
  Order: Order;
  OrderAddress: OrderAddress;
  OrderItem: OrderItem;
  OrderItemInterface: ResolversParentTypes['BundleOrderItem'] | ResolversParentTypes['DownloadableOrderItem'] | ResolversParentTypes['OrderItem'];
  OrderItemOption: OrderItemOption;
  OrderPaymentMethod: OrderPaymentMethod;
  OrderShipment: OrderShipment;
  OrderTotal: OrderTotal;
  PayflowExpressInput: PayflowExpressInput;
  PayflowLinkInput: PayflowLinkInput;
  PayflowLinkToken: PayflowLinkToken;
  PayflowLinkTokenInput: PayflowLinkTokenInput;
  PayflowProInput: PayflowProInput;
  PayflowProResponseInput: PayflowProResponseInput;
  PayflowProResponseOutput: PayflowProResponseOutput;
  PayflowProToken: PayflowProToken;
  PayflowProTokenInput: PayflowProTokenInput;
  PayflowProUrlInput: PayflowProUrlInput;
  PaymentMethodInput: PaymentMethodInput;
  PaymentToken: PaymentToken;
  PaypalExpressInput: PaypalExpressInput;
  PaypalExpressToken: PaypalExpressToken;
  PaypalExpressTokenInput: PaypalExpressTokenInput;
  PaypalExpressTokenOutput: PaypalExpressTokenOutput;
  PaypalExpressUrlList: PaypalExpressUrlList;
  PaypalExpressUrlsInput: PaypalExpressUrlsInput;
  PhysicalProductInterface: ResolversParentTypes['BundleProduct'] | ResolversParentTypes['ConfigurableProduct'] | ResolversParentTypes['GroupedProduct'] | ResolversParentTypes['MpGiftCardProduct'] | ResolversParentTypes['SimpleProduct'];
  PickupLocation: PickupLocation;
  PickupLocationFilterInput: PickupLocationFilterInput;
  PickupLocationSortInput: PickupLocationSortInput;
  PickupLocations: PickupLocations;
  PlaceOrderInput: PlaceOrderInput;
  PlaceOrderOutput: PlaceOrderOutput;
  Price: Price;
  PriceAdjustment: PriceAdjustment;
  PriceRange: PriceRange;
  ProductAttribute: ProductAttribute;
  ProductAttributeFilterInput: ProductAttributeFilterInput;
  ProductAttributeSortInput: ProductAttributeSortInput;
  ProductBlock: ProductBlock;
  ProductDiscount: ProductDiscount;
  ProductFilterInput: ProductFilterInput;
  ProductImage: ProductImage;
  ProductInfoInput: ProductInfoInput;
  ProductInterface: ResolversParentTypes['BundleProduct'] | ResolversParentTypes['ConfigurableProduct'] | ResolversParentTypes['DownloadableProduct'] | ResolversParentTypes['GroupedProduct'] | ResolversParentTypes['MpGiftCardProduct'] | ResolversParentTypes['SimpleProduct'] | ResolversParentTypes['VirtualProduct'];
  ProductLinks: ProductLinks;
  ProductLinksInterface: ResolversParentTypes['ProductLinks'];
  ProductMediaGalleryEntriesContent: ProductMediaGalleryEntriesContent;
  ProductMediaGalleryEntriesVideoContent: ProductMediaGalleryEntriesVideoContent;
  ProductPrice: ProductPrice;
  ProductPrices: ProductPrices;
  ProductReview: ProductReview;
  ProductReviewRating: ProductReviewRating;
  ProductReviewRatingInput: ProductReviewRatingInput;
  ProductReviewRatingMetadata: ProductReviewRatingMetadata;
  ProductReviewRatingValueMetadata: ProductReviewRatingValueMetadata;
  ProductReviewRatingsMetadata: ProductReviewRatingsMetadata;
  ProductReviews: ProductReviews;
  ProductSortInput: ProductSortInput;
  ProductTierPrices: ProductTierPrices;
  ProductVideo: ProductVideo;
  Products: Products;
  Query: {};
  RazorpayOrder: RazorpayOrder;
  Recentlyviewed: Recentlyviewed;
  RecentlyviewedFilterInput: RecentlyviewedFilterInput;
  Region: Region;
  RemoveCouponFromCartInput: RemoveCouponFromCartInput;
  RemoveCouponFromCartOutput: RemoveCouponFromCartOutput;
  RemoveItemFromCartInput: RemoveItemFromCartInput;
  RemoveItemFromCartOutput: RemoveItemFromCartOutput;
  RemoveProductsFromCompareListInput: RemoveProductsFromCompareListInput;
  RemoveProductsFromWishlistOutput: RemoveProductsFromWishlistOutput;
  ReorderItemsOutput: ReorderItemsOutput;
  RevokeCustomerTokenOutput: RevokeCustomerTokenOutput;
  RoutableInterface: ResolversParentTypes['BundleProduct'] | ResolversParentTypes['CategoryTree'] | ResolversParentTypes['CmsPage'] | ResolversParentTypes['ConfigurableProduct'] | ResolversParentTypes['DownloadableProduct'] | ResolversParentTypes['GroupedProduct'] | ResolversParentTypes['MpGiftCardProduct'] | ResolversParentTypes['SimpleProduct'] | ResolversParentTypes['VirtualProduct'];
  SalesCommentItem: SalesCommentItem;
  SalesItemInterface: SalesItemInterface;
  SearchResultPageInfo: SearchResultPageInfo;
  SelectedBundleOption: SelectedBundleOption;
  SelectedBundleOptionValue: SelectedBundleOptionValue;
  SelectedConfigurableOption: SelectedConfigurableOption;
  SelectedCustomizableOption: SelectedCustomizableOption;
  SelectedCustomizableOptionValue: SelectedCustomizableOptionValue;
  SelectedGiftCardOption: SelectedGiftCardOption;
  SelectedPaymentMethod: SelectedPaymentMethod;
  SelectedShippingMethod: SelectedShippingMethod;
  SendEmailToFriendInput: SendEmailToFriendInput;
  SendEmailToFriendOutput: SendEmailToFriendOutput;
  SendEmailToFriendRecipient: SendEmailToFriendRecipient;
  SendEmailToFriendRecipientInput: SendEmailToFriendRecipientInput;
  SendEmailToFriendSender: SendEmailToFriendSender;
  SendEmailToFriendSenderInput: SendEmailToFriendSenderInput;
  SendFriendConfiguration: SendFriendConfiguration;
  SetBillingAddressOnCartInput: SetBillingAddressOnCartInput;
  SetBillingAddressOnCartOutput: SetBillingAddressOnCartOutput;
  SetGuestEmailOnCartInput: SetGuestEmailOnCartInput;
  SetGuestEmailOnCartOutput: SetGuestEmailOnCartOutput;
  SetPaymentMethodAndPlaceOrderInput: SetPaymentMethodAndPlaceOrderInput;
  SetPaymentMethodOnCartInput: SetPaymentMethodOnCartInput;
  SetPaymentMethodOnCartOutput: SetPaymentMethodOnCartOutput;
  SetRzpPaymentDetailsOnCartInput: SetRzpPaymentDetailsOnCartInput;
  SetRzpPaymentDetailsOnCartOutput: SetRzpPaymentDetailsOnCartOutput;
  SetShippingAddressesOnCartInput: SetShippingAddressesOnCartInput;
  SetShippingAddressesOnCartOutput: SetShippingAddressesOnCartOutput;
  SetShippingMethodsOnCartInput: SetShippingMethodsOnCartInput;
  SetShippingMethodsOnCartOutput: SetShippingMethodsOnCartOutput;
  ShipmentItem: ShipmentItem;
  ShipmentItemInterface: ResolversParentTypes['BundleShipmentItem'] | ResolversParentTypes['ShipmentItem'];
  ShipmentTracking: ShipmentTracking;
  ShippingAddressInput: ShippingAddressInput;
  ShippingCartAddress: ShippingCartAddress;
  ShippingDiscount: ShippingDiscount;
  ShippingHandling: ShippingHandling;
  ShippingMethodInput: ShippingMethodInput;
  SimpleCartItem: SimpleCartItem;
  SimpleProduct: SimpleProduct;
  SimpleProductCartItemInput: SimpleProductCartItemInput;
  SimpleWishlistItem: SimpleWishlistItem;
  SmtpBestsellersOutput: SmtpBestsellersOutput;
  SortField: SortField;
  SortFields: SortFields;
  StoreConfig: StoreConfig;
  StoreConfigData: StoreConfigData;
  StorefrontProperties: StorefrontProperties;
  String: Scalars['String'];
  SubscribeEmailToNewsletterOutput: SubscribeEmailToNewsletterOutput;
  SwatchData: ResolversParentTypes['SwatchImageData'] | ResolversParentTypes['SwatchTextData'];
  SwatchDataInterface: ResolversParentTypes['ColorSwatchData'] | ResolversParentTypes['ImageSwatchData'] | ResolversParentTypes['TextSwatchData'];
  SwatchImageData: SwatchImageData;
  SwatchLayerFilterItem: SwatchLayerFilterItem;
  SwatchLayerFilterItemInterface: ResolversParentTypes['SwatchLayerFilterItem'];
  SwatchTextData: SwatchTextData;
  TaxItem: TaxItem;
  Testimonial: Testimonial;
  TestimonialConfiguration: TestimonialConfiguration;
  TestimonialContent: TestimonialContent;
  TestimonialGeneral: TestimonialGeneral;
  TestimonialSettingResponsive: TestimonialSettingResponsive;
  TestimonialSettingSlider: TestimonialSettingSlider;
  TextSwatchData: TextSwatchData;
  TierPrice: TierPrice;
  Track: Track;
  TrackingData: TrackingData;
  UpdateCartItemsInput: UpdateCartItemsInput;
  UpdateCartItemsOutput: UpdateCartItemsOutput;
  UpdateProductsInWishlistOutput: UpdateProductsInWishlistOutput;
  UploadImageInput: UploadImageInput;
  UploadImageOutput: UploadImageOutput;
  UrlRewrite: UrlRewrite;
  VaultTokenInput: VaultTokenInput;
  VirtualCartItem: VirtualCartItem;
  VirtualProduct: VirtualProduct;
  VirtualProductCartItemInput: VirtualProductCartItemInput;
  VirtualWishlistItem: VirtualWishlistItem;
  Website: Website;
  WeddingAlbum: WeddingAlbum;
  WishListUserInputError: WishListUserInputError;
  Wishlist: Wishlist;
  WishlistCartUserInputError: WishlistCartUserInputError;
  WishlistData: WishlistData;
  WishlistItem: WishlistItem;
  WishlistItemInput: WishlistItemInput;
  WishlistItemInterface: ResolversParentTypes['BundleWishlistItem'] | ResolversParentTypes['ConfigurableWishlistItem'] | ResolversParentTypes['DownloadableWishlistItem'] | ResolversParentTypes['GroupedProductWishlistItem'] | ResolversParentTypes['SimpleWishlistItem'] | ResolversParentTypes['VirtualWishlistItem'];
  WishlistItemUpdateInput: WishlistItemUpdateInput;
  WishlistItems: WishlistItems;
  WishlistOutput: WishlistOutput;
  addCommentToPostInput: AddCommentToPostInput;
  addCommentToPostOutput: AddCommentToPostOutput;
  appliedjobInput: AppliedjobInput;
  appliedjobOutput: AppliedjobOutput;
  blogCategoriesOutput: BlogCategoriesOutput;
  blogCommentsOutput: BlogCommentsOutput;
  blogPostsOutput: BlogPostsOutput;
  blogTagsOutput: BlogTagsOutput;
  createEmptyCartInput: CreateEmptyCartInput;
  createKlarnaPaymentsSessionInput: CreateKlarnaPaymentsSessionInput;
  createKlarnaPaymentsSessionOutput: CreateKlarnaPaymentsSessionOutput;
  jobDetails: JobDetails;
  jobLocation: JobLocation;
  myAccountOtpInput: MyAccountOtpInput;
  myAccountOtpOutput: MyAccountOtpOutput;
  uploadMpGiftCardImageOutput: UploadMpGiftCardImageOutput;
};

export type AddBundleProductsToCartOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddBundleProductsToCartOutput'] = ResolversParentTypes['AddBundleProductsToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddConfigurableProductsToCartOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddConfigurableProductsToCartOutput'] = ResolversParentTypes['AddConfigurableProductsToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddDownloadableProductsToCartOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddDownloadableProductsToCartOutput'] = ResolversParentTypes['AddDownloadableProductsToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddMpGiftCardProductsToCartOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddMpGiftCardProductsToCartOutput'] = ResolversParentTypes['AddMpGiftCardProductsToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddProductsToCartOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddProductsToCartOutput'] = ResolversParentTypes['AddProductsToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  user_errors?: Resolver<Array<Maybe<ResolversTypes['CartUserInputError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddProductsToWishlistOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddProductsToWishlistOutput'] = ResolversParentTypes['AddProductsToWishlistOutput']> = {
  user_errors?: Resolver<Array<Maybe<ResolversTypes['WishListUserInputError']>>, ParentType, ContextType>;
  wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddSimpleProductsToCartOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddSimpleProductsToCartOutput'] = ResolversParentTypes['AddSimpleProductsToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddVirtualProductsToCartOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddVirtualProductsToCartOutput'] = ResolversParentTypes['AddVirtualProductsToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddWishlistItemsToCartOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddWishlistItemsToCartOutput'] = ResolversParentTypes['AddWishlistItemsToCartOutput']> = {
  add_wishlist_items_to_cart_user_errors?: Resolver<Array<Maybe<ResolversTypes['WishlistCartUserInputError']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Aggregation'] = ResolversParentTypes['Aggregation']> = {
  attribute_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_swatch?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['AggregationOption']>>>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregationOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregationOption'] = ResolversParentTypes['AggregationOption']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_data?: Resolver<Maybe<ResolversTypes['SwatchData']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregationOptionInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregationOptionInterface'] = ResolversParentTypes['AggregationOptionInterface']> = {
  __resolveType: TypeResolveFn<'AggregationOption', ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_data?: Resolver<Maybe<ResolversTypes['SwatchData']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  brides_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  grooms_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  mobilenumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppliedCouponResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppliedCoupon'] = ResolversParentTypes['AppliedCoupon']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplyCouponToCartOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplyCouponToCartOutput'] = ResolversParentTypes['ApplyCouponToCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Assets'] = ResolversParentTypes['Assets']> = {
  descriptive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  standard?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssignCompareListToCustomerOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssignCompareListToCustomerOutput'] = ResolversParentTypes['AssignCompareListToCustomerOutput']> = {
  compare_list?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType>;
  result?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = {
  attribute_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['AttributeOption']>>>, ParentType, ContextType>;
  attribute_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  input_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storefront_properties?: Resolver<Maybe<ResolversTypes['StorefrontProperties']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttributeOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AttributeOption'] = ResolversParentTypes['AttributeOption']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticateCustomerWithSocialLoginResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticateCustomerWithSocialLogin'] = ResolversParentTypes['AuthenticateCustomerWithSocialLogin']> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvailablePaymentMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvailablePaymentMethod'] = ResolversParentTypes['AvailablePaymentMethod']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvailableShippingMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvailableShippingMethod'] = ResolversParentTypes['AvailableShippingMethod']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  available?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  base_amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  carrier_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  carrier_title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  error_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  method_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  method_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price_excl_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  price_incl_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BannerBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['BannerBlock'] = ResolversParentTypes['BannerBlock']> = {
  banner_items?: Resolver<Maybe<Array<Maybe<ResolversTypes['BannerItems']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BannerItemsResolvers<ContextType = any, ParentType extends ResolversParentTypes['BannerItems'] = ResolversParentTypes['BannerItems']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_desktop?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_mobile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  layout?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BestSellerBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['BestSellerBlock'] = ResolversParentTypes['BestSellerBlock']> = {
  best_seller_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['BestSellerProducts']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BestSellerProductsResolvers<ContextType = any, ParentType extends ResolversParentTypes['BestSellerProducts'] = ResolversParentTypes['BestSellerProducts']> = {
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BestsellersProductOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['BestsellersProductOutput'] = ResolversParentTypes['BestsellersProductOutput']> = {
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qty_ordered?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BillingCartAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['BillingCartAddress'] = ResolversParentTypes['BillingCartAddress']> = {
  address_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['CartAddressCountry'], ParentType, ContextType>;
  customer_notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['CartAddressRegion']>, ParentType, ContextType>;
  street?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  telephone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['Block'] = ResolversParentTypes['Block']> = {
  __resolveType: TypeResolveFn<'BannerBlock' | 'BestSellerBlock' | 'CategoryBlock' | 'ProductBlock', ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type BlogAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogAuthor'] = ResolversParentTypes['BlogAuthor']> = {
  author_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  author_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creation_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_layout_update_xml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_theme?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_theme_from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_theme_to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_page_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featured_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filtered_content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instagram_page_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  layout_update_xml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedin_page_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  short_content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  short_filtered_content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter_page_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogCategory'] = ResolversParentTypes['BlogCategory']> = {
  breadcrumbs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Breadcrumb']>>>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  category_level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  category_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_heading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_layout_update_xml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_theme?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_theme_from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_theme_to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_mode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  include_in_menu?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  layout_update_xml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent_category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  posts_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  posts_sort_by?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogCommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogComment'] = ResolversParentTypes['BlogComment']> = {
  admin_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  author_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author_nickname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comment_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creation_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customer_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parent_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  post_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  replies?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogComment']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  update_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogPostResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogPost'] = ResolversParentTypes['BlogPost']> = {
  author?: Resolver<Maybe<ResolversTypes['BlogAuthor']>, ParentType, ContextType>;
  author_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogCategory']>>>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_heading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creation_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_layout_update_xml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_theme?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_theme_from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_theme_to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featured_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filtered_content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  include_in_recent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_recent_posts_skip?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  layout_update_xml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  og_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  og_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  og_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  og_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  post_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  post_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publish_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  related_posts?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogPost']>>>, ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  relatedproduct_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  search?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  short_content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  short_filtered_content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tag_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogTag']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  update_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  views_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogPostsResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogPosts'] = ResolversParentTypes['BlogPosts']> = {
  author_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comment_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_heading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featured_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featured_image_alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  post_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  short_content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  view_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogTag'] = ResolversParentTypes['BlogTag']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_layout_update_xml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_theme?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_theme_from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_theme_to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  layout_update_xml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_robots?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tag_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tag_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Blogs'] = ResolversParentTypes['Blogs']> = {
  blogposts?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogPosts']>>>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['BlogCategory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BreadcrumbResolvers<ContextType = any, ParentType extends ResolversParentTypes['Breadcrumb'] = ResolversParentTypes['Breadcrumb']> = {
  category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  category_level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  category_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  category_url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleCartItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['BundleCartItem'] = ResolversParentTypes['BundleCartItem']> = {
  bundle_options?: Resolver<Array<Maybe<ResolversTypes['SelectedBundleOption']>>, ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  exception?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_salable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sellable_qty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleCreditMemoItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['BundleCreditMemoItem'] = ResolversParentTypes['BundleCreditMemoItem']> = {
  bundle_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSelectedBundleOption']>>>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleInvoiceItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['BundleInvoiceItem'] = ResolversParentTypes['BundleInvoiceItem']> = {
  bundle_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSelectedBundleOption']>>>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['BundleItem'] = ResolversParentTypes['BundleItem']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['BundleItemOption']>>>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleItemOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BundleItemOption'] = ResolversParentTypes['BundleItemOption']> = {
  can_change_quantity?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleOrderItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['BundleOrderItem'] = ResolversParentTypes['BundleOrderItem']> = {
  bundle_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSelectedBundleOption']>>>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['BundleProduct'] = ResolversParentTypes['BundleProduct']> = {
  allow_amount_range?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brands?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  can_redeem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  dynamic_price?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dynamic_sku?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dynamic_weight?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  expire_after_day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  facebook_age_group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_age_range?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_baby_food_stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_compatible_devices?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_decor_style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_digital_zoom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_display_technology?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_finish?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_gemstone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_health_concern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_ingredients?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_is_assembly_required?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_maximum_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_megapixels?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_minimum_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_number_of_licenses?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_operating_system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_optical_zoom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_package_quantity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_depth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_form?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_recommended_use?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_resolution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_scent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_screen_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_shoe_width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_storage_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_system_requirements?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_thread_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_video_game_platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featured?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gift_card_amounts?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_card_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gift_code_pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_product_template?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['BundleItem']>>>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  min_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mpgiftcard_conditions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  price_view?: Resolver<Maybe<ResolversTypes['PriceViewEnum']>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<BundleProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  ship_bundle_items?: Resolver<Maybe<ResolversTypes['ShipBundleItemsEnum']>, ParentType, ContextType>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wishlistData?: Resolver<Maybe<ResolversTypes['WishlistData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleShipmentItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['BundleShipmentItem'] = ResolversParentTypes['BundleShipmentItem']> = {
  bundle_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSelectedBundleOption']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_shipped?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleWishlistItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['BundleWishlistItem'] = ResolversParentTypes['BundleWishlistItem']> = {
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bundle_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['SelectedBundleOption']>>>, ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = {
  applied_coupon?: Resolver<Maybe<ResolversTypes['AppliedCoupon']>, ParentType, ContextType>;
  applied_coupons?: Resolver<Maybe<Array<Maybe<ResolversTypes['AppliedCoupon']>>>, ParentType, ContextType>;
  available_payment_methods?: Resolver<Maybe<Array<Maybe<ResolversTypes['AvailablePaymentMethod']>>>, ParentType, ContextType>;
  billing_address?: Resolver<Maybe<ResolversTypes['BillingCartAddress']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_virtual?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemInterface']>>>, ParentType, ContextType>;
  mp_giftcard_config?: Resolver<Maybe<ResolversTypes['MpGiftCardConfig']>, ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartPrices']>, ParentType, ContextType>;
  selected_payment_method?: Resolver<Maybe<ResolversTypes['SelectedPaymentMethod']>, ParentType, ContextType>;
  shipping_addresses?: Resolver<Array<Maybe<ResolversTypes['ShippingCartAddress']>>, ParentType, ContextType>;
  total_quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartAddressCountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartAddressCountry'] = ResolversParentTypes['CartAddressCountry']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartAddressInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartAddressInterface'] = ResolversParentTypes['CartAddressInterface']> = {
  __resolveType: TypeResolveFn<'BillingCartAddress' | 'ShippingCartAddress', ParentType, ContextType>;
  address_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['CartAddressCountry'], ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['CartAddressRegion']>, ParentType, ContextType>;
  street?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  telephone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CartAddressRegionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartAddressRegion'] = ResolversParentTypes['CartAddressRegion']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartDiscountResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartDiscount'] = ResolversParentTypes['CartDiscount']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  label?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartItemInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartItemInterface'] = ResolversParentTypes['CartItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleCartItem' | 'ConfigurableCartItem' | 'DownloadableCartItem' | 'MpGiftCardCartItem' | 'SimpleCartItem' | 'VirtualCartItem', ParentType, ContextType>;
  exception?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_salable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sellable_qty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type CartItemPricesResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartItemPrices'] = ResolversParentTypes['CartItemPrices']> = {
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  fixed_product_taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['FixedProductTax']>>>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  row_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  row_total_including_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  total_item_discount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartItemQuantityResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartItemQuantity'] = ResolversParentTypes['CartItemQuantity']> = {
  cart_item_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartItemSelectedOptionValuePriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartItemSelectedOptionValuePrice'] = ResolversParentTypes['CartItemSelectedOptionValuePrice']> = {
  type?: Resolver<ResolversTypes['PriceTypeEnum'], ParentType, ContextType>;
  units?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartPricesResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartPrices'] = ResolversParentTypes['CartPrices']> = {
  applied_taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartTaxItem']>>>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['CartDiscount']>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  gift_card?: Resolver<Maybe<ResolversTypes['MpGiftCardDiscounts']>, ParentType, ContextType>;
  gift_credit?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  grand_total?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  subtotal_excluding_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  subtotal_including_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  subtotal_with_discount_excluding_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartTaxItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartTaxItem'] = ResolversParentTypes['CartTaxItem']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartUserInputErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartUserInputError'] = ResolversParentTypes['CartUserInputError']> = {
  code?: Resolver<ResolversTypes['CartUserInputErrorType'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Categories'] = ResolversParentTypes['Categories']> = {
  asset_urls?: Resolver<Maybe<Array<Maybe<ResolversTypes['Assets']>>>, ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryBlock'] = ResolversParentTypes['CategoryBlock']> = {
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryBlockTree']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryBlockTreeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryBlockTree'] = ResolversParentTypes['CategoryBlockTree']> = {
  category_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryInterface'] = ResolversParentTypes['CategoryInterface']> = {
  __resolveType: TypeResolveFn<'CategoryTree', ParentType, ContextType>;
  available_sort_by?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  breadcrumbs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Breadcrumb']>>>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cms_block?: Resolver<Maybe<ResolversTypes['CmsBlock']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_layout_update_file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_sort_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filter_price_range?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gst_cat_source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gst_cat_source_after_minprice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gst_cat_source_minprice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  include_in_menu?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_anchor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  landing_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  magic_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magic_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magic_thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path_in_store?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  products?: Resolver<Maybe<ResolversTypes['CategoryProducts']>, ParentType, ContextType, RequireFields<CategoryInterfaceProductsArgs, 'currentPage' | 'pageSize'>>;
  sync_to_facebook_catalog?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type CategoryProductsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryProducts'] = ResolversParentTypes['CategoryProducts']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryResult'] = ResolversParentTypes['CategoryResult']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryTree']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryTreeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryTree'] = ResolversParentTypes['CategoryTree']> = {
  available_sort_by?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  breadcrumbs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Breadcrumb']>>>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryTree']>>>, ParentType, ContextType>;
  children_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cms_block?: Resolver<Maybe<ResolversTypes['CmsBlock']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_layout_update_file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_sort_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filter_price_range?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gst_cat_source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gst_cat_source_after_minprice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gst_cat_source_minprice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  include_in_menu?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_anchor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  landing_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  magic_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magic_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magic_thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path_in_store?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  products?: Resolver<Maybe<ResolversTypes['CategoryProducts']>, ParentType, ContextType, RequireFields<CategoryTreeProductsArgs, 'currentPage' | 'pageSize'>>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sync_to_facebook_catalog?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChatBoxOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChatBoxOutput'] = ResolversParentTypes['ChatBoxOutput']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChatDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChatData'] = ResolversParentTypes['ChatData']> = {
  api_space_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cookie_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckGiftCodeOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckGiftCodeOutput'] = ResolversParentTypes['CheckGiftCodeOutput']> = {
  balance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  balance_formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expired_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutAgreementResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutAgreement'] = ResolversParentTypes['CheckoutAgreement']> = {
  agreement_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  checkbox_text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content_height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_html?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['CheckoutAgreementMode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutUserInputErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutUserInputError'] = ResolversParentTypes['CheckoutUserInputError']> = {
  code?: Resolver<ResolversTypes['CheckoutUserInputErrorCodes'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CmsBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['CmsBlock'] = ResolversParentTypes['CmsBlock']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CmsBlocksResolvers<ContextType = any, ParentType extends ResolversParentTypes['CmsBlocks'] = ResolversParentTypes['CmsBlocks']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CmsBlock']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CmsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CmsPage'] = ResolversParentTypes['CmsPage']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_heading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColorSwatchDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ColorSwatchData'] = ResolversParentTypes['ColorSwatchData']> = {
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComparableAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComparableAttribute'] = ResolversParentTypes['ComparableAttribute']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComparableItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComparableItem'] = ResolversParentTypes['ComparableItem']> = {
  attributes?: Resolver<Array<Maybe<ResolversTypes['ProductAttribute']>>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompareListResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompareList'] = ResolversParentTypes['CompareList']> = {
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComparableAttribute']>>>, ParentType, ContextType>;
  item_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComparableItem']>>>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComplexTextValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComplexTextValue'] = ResolversParentTypes['ComplexTextValue']> = {
  html?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableAttributeOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfigurableAttributeOption'] = ResolversParentTypes['ConfigurableAttributeOption']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value_index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableCartItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfigurableCartItem'] = ResolversParentTypes['ConfigurableCartItem']> = {
  configurable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedConfigurableOption']>>, ParentType, ContextType>;
  configured_variant?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  customizable_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>>, ParentType, ContextType>;
  exception?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_salable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sellable_qty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableOptionAvailableForSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfigurableOptionAvailableForSelection'] = ResolversParentTypes['ConfigurableOptionAvailableForSelection']> = {
  attribute_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  option_value_uids?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfigurableProduct'] = ResolversParentTypes['ConfigurableProduct']> = {
  allow_amount_range?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brands?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  can_redeem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  configurable_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableProductOptions']>>>, ParentType, ContextType>;
  configurable_product_options_selection?: Resolver<Maybe<ResolversTypes['ConfigurableProductOptionsSelection']>, ParentType, ContextType, Partial<ConfigurableProductConfigurable_Product_Options_SelectionArgs>>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  expire_after_day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  facebook_age_group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_age_range?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_baby_food_stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_compatible_devices?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_decor_style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_digital_zoom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_display_technology?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_finish?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_gemstone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_health_concern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_ingredients?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_is_assembly_required?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_maximum_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_megapixels?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_minimum_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_number_of_licenses?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_operating_system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_optical_zoom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_package_quantity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_depth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_form?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_recommended_use?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_resolution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_scent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_screen_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_shoe_width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_storage_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_system_requirements?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_thread_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_video_game_platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featured?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gift_card_amounts?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_card_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gift_code_pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_product_template?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  min_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mpgiftcard_conditions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<ConfigurableProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variants?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableVariant']>>>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wishlistData?: Resolver<Maybe<ResolversTypes['WishlistData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableProductOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfigurableProductOption'] = ResolversParentTypes['ConfigurableProductOption']> = {
  attribute_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableProductOptionValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableProductOptionValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfigurableProductOptionValue'] = ResolversParentTypes['ConfigurableProductOptionValue']> = {
  is_available?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  is_use_default?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swatch?: Resolver<Maybe<ResolversTypes['SwatchDataInterface']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableProductOptionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfigurableProductOptions'] = ResolversParentTypes['ConfigurableProductOptions']> = {
  attribute_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_id_v2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  attribute_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  use_default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableProductOptionsValues']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableProductOptionsSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfigurableProductOptionsSelection'] = ResolversParentTypes['ConfigurableProductOptionsSelection']> = {
  configurable_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableProductOption']>>>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  options_available_for_selection?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableOptionAvailableForSelection']>>>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['SimpleProduct']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableProductOptionsValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfigurableProductOptionsValues'] = ResolversParentTypes['ConfigurableProductOptionsValues']> = {
  default_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_data?: Resolver<Maybe<ResolversTypes['SwatchDataInterface']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  use_default_value?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  value_index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableVariantResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfigurableVariant'] = ResolversParentTypes['ConfigurableVariant']> = {
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurableAttributeOption']>>>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['SimpleProduct']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableWishlistItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfigurableWishlistItem'] = ResolversParentTypes['ConfigurableWishlistItem']> = {
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  child_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  configurable_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['SelectedConfigurableOption']>>>, ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  available_regions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Region']>>>, ParentType, ContextType>;
  full_name_english?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full_name_locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  three_letter_abbreviation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  two_letter_abbreviation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAlbumOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateAlbumOutput'] = ResolversParentTypes['CreateAlbumOutput']> = {
  album_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePayflowProTokenOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatePayflowProTokenOutput'] = ResolversParentTypes['CreatePayflowProTokenOutput']> = {
  response_message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  result?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  secure_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secure_token_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateProductReviewOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateProductReviewOutput'] = ResolversParentTypes['CreateProductReviewOutput']> = {
  review?: Resolver<ResolversTypes['ProductReview'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreditMemoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditMemo'] = ResolversParentTypes['CreditMemo']> = {
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['SalesCommentItem']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CreditMemoItemInterface']>>>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['CreditMemoTotal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreditMemoItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditMemoItem'] = ResolversParentTypes['CreditMemoItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreditMemoItemInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditMemoItemInterface'] = ResolversParentTypes['CreditMemoItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleCreditMemoItem' | 'CreditMemoItem' | 'DownloadableCreditMemoItem', ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type CreditMemoTotalResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditMemoTotal'] = ResolversParentTypes['CreditMemoTotal']> = {
  adjustment?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  base_grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  shipping_handling?: Resolver<Maybe<ResolversTypes['ShippingHandling']>, ParentType, ContextType>;
  subtotal?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxItem']>>>, ParentType, ContextType>;
  total_shipping?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  total_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = {
  available_currency_codes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  base_currency_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base_currency_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currecy_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currecy_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currency_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currency_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exchange_rates?: Resolver<Maybe<Array<Maybe<ResolversTypes['ExchangeRate']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomAttributeMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomAttributeMetadata'] = ResolversParentTypes['CustomAttributeMetadata']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attribute']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  addresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomerAddress']>>>, ParentType, ContextType>;
  allow_remote_shopping_assistance?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  compare_list?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date_of_birth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_billing?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_shipping?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  group_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_subscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middlename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mobilenumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orders?: Resolver<Maybe<ResolversTypes['CustomerOrders']>, ParentType, ContextType, RequireFields<CustomerOrdersArgs, 'currentPage' | 'pageSize'>>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<CustomerReviewsArgs, 'currentPage' | 'pageSize'>>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taxvat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  wishlist_v2?: Resolver<Maybe<ResolversTypes['Wishlist']>, ParentType, ContextType, RequireFields<CustomerWishlist_V2Args, 'id'>>;
  wishlists?: Resolver<Array<Maybe<ResolversTypes['Wishlist']>>, ParentType, ContextType, RequireFields<CustomerWishlistsArgs, 'currentPage' | 'pageSize'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddress'] = ResolversParentTypes['CustomerAddress']> = {
  address_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['CountryCodeEnum']>, ParentType, ContextType>;
  country_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomerAddressAttribute']>>>, ParentType, ContextType>;
  customer_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  default_billing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  default_shipping?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  extension_attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomerAddressAttribute']>>>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middlename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['CustomerAddressRegion']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  street?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vat_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAddressAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddressAttribute'] = ResolversParentTypes['CustomerAddressAttribute']> = {
  attribute_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAddressRegionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddressRegion'] = ResolversParentTypes['CustomerAddressRegion']> = {
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerDownloadableProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerDownloadableProduct'] = ResolversParentTypes['CustomerDownloadableProduct']> = {
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  download_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order_increment_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remaining_downloads?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerDownloadableProductsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerDownloadableProducts'] = ResolversParentTypes['CustomerDownloadableProducts']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomerDownloadableProduct']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerOrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerOrder'] = ResolversParentTypes['CustomerOrder']> = {
  billing_address?: Resolver<Maybe<ResolversTypes['OrderAddress']>, ParentType, ContextType>;
  carrier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['SalesCommentItem']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  credit_memos?: Resolver<Maybe<Array<Maybe<ResolversTypes['CreditMemo']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  grand_total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  increment_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invoices?: Resolver<Array<Maybe<ResolversTypes['Invoice']>>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemInterface']>>>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payment_methods?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderPaymentMethod']>>>, ParentType, ContextType>;
  shipments?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderShipment']>>>, ParentType, ContextType>;
  shipping_address?: Resolver<Maybe<ResolversTypes['OrderAddress']>, ParentType, ContextType>;
  shipping_method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['OrderTotal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerOrdersResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerOrders'] = ResolversParentTypes['CustomerOrders']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['CustomerOrder']>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerOutput'] = ResolversParentTypes['CustomerOutput']> = {
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerPaymentTokensResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerPaymentTokens'] = ResolversParentTypes['CustomerPaymentTokens']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['PaymentToken']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerToken'] = ResolversParentTypes['CustomerToken']> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableAreaOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableAreaOption'] = ResolversParentTypes['CustomizableAreaOption']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['CustomizableAreaValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableAreaValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableAreaValue'] = ResolversParentTypes['CustomizableAreaValue']> = {
  max_characters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableCheckboxOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableCheckboxOption'] = ResolversParentTypes['CustomizableCheckboxOption']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableCheckboxValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableCheckboxValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableCheckboxValue'] = ResolversParentTypes['CustomizableCheckboxValue']> = {
  option_type_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableDateOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableDateOption'] = ResolversParentTypes['CustomizableDateOption']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['CustomizableDateValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableDateValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableDateValue'] = ResolversParentTypes['CustomizableDateValue']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CustomizableDateTypeEnum']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableDropDownOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableDropDownOption'] = ResolversParentTypes['CustomizableDropDownOption']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableDropDownValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableDropDownValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableDropDownValue'] = ResolversParentTypes['CustomizableDropDownValue']> = {
  option_type_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableFieldOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableFieldOption'] = ResolversParentTypes['CustomizableFieldOption']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['CustomizableFieldValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableFieldValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableFieldValue'] = ResolversParentTypes['CustomizableFieldValue']> = {
  max_characters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableFileOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableFileOption'] = ResolversParentTypes['CustomizableFileOption']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['CustomizableFileValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableFileValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableFileValue'] = ResolversParentTypes['CustomizableFileValue']> = {
  file_extension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_size_x?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image_size_y?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableMultipleOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableMultipleOption'] = ResolversParentTypes['CustomizableMultipleOption']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableMultipleValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableMultipleValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableMultipleValue'] = ResolversParentTypes['CustomizableMultipleValue']> = {
  option_type_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableOptionInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableOptionInterface'] = ResolversParentTypes['CustomizableOptionInterface']> = {
  __resolveType: TypeResolveFn<'CustomizableAreaOption' | 'CustomizableCheckboxOption' | 'CustomizableDateOption' | 'CustomizableDropDownOption' | 'CustomizableFieldOption' | 'CustomizableFileOption' | 'CustomizableMultipleOption' | 'CustomizableRadioOption', ParentType, ContextType>;
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type CustomizableProductInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableProductInterface'] = ResolversParentTypes['CustomizableProductInterface']> = {
  __resolveType: TypeResolveFn<'BundleProduct' | 'ConfigurableProduct' | 'DownloadableProduct' | 'MpGiftCardProduct' | 'SimpleProduct' | 'VirtualProduct', ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
};

export type CustomizableRadioOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableRadioOption'] = ResolversParentTypes['CustomizableRadioOption']> = {
  option_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableRadioValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizableRadioValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizableRadioValue'] = ResolversParentTypes['CustomizableRadioValue']> = {
  option_type_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteCompareListOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteCompareListOutput'] = ResolversParentTypes['DeleteCompareListOutput']> = {
  result?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeletePaymentTokenOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeletePaymentTokenOutput'] = ResolversParentTypes['DeletePaymentTokenOutput']> = {
  customerPaymentTokens?: Resolver<Maybe<ResolversTypes['CustomerPaymentTokens']>, ParentType, ContextType>;
  result?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiscountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Discount'] = ResolversParentTypes['Discount']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableCartItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['DownloadableCartItem'] = ResolversParentTypes['DownloadableCartItem']> = {
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  exception?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_salable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductLinks']>>>, ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  samples?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductSamples']>>>, ParentType, ContextType>;
  sellable_qty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableCreditMemoItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['DownloadableCreditMemoItem'] = ResolversParentTypes['DownloadableCreditMemoItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  downloadable_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableItemsLinks']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableInvoiceItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['DownloadableInvoiceItem'] = ResolversParentTypes['DownloadableInvoiceItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  downloadable_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableItemsLinks']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableItemsLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['DownloadableItemsLinks'] = ResolversParentTypes['DownloadableItemsLinks']> = {
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableOrderItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['DownloadableOrderItem'] = ResolversParentTypes['DownloadableOrderItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  downloadable_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableItemsLinks']>>>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['DownloadableProduct'] = ResolversParentTypes['DownloadableProduct']> = {
  allow_amount_range?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brands?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  can_redeem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  downloadable_product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductLinks']>>>, ParentType, ContextType>;
  downloadable_product_samples?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductSamples']>>>, ParentType, ContextType>;
  expire_after_day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  facebook_age_group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_age_range?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_baby_food_stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_compatible_devices?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_decor_style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_digital_zoom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_display_technology?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_finish?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_gemstone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_health_concern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_ingredients?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_is_assembly_required?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_maximum_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_megapixels?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_minimum_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_number_of_licenses?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_operating_system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_optical_zoom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_package_quantity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_depth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_form?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_recommended_use?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_resolution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_scent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_screen_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_shoe_width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_storage_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_system_requirements?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_thread_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_video_game_platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featured?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gift_card_amounts?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_card_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gift_code_pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_product_template?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  links_purchased_separately?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  links_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  min_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mpgiftcard_conditions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<DownloadableProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  wishlistData?: Resolver<Maybe<ResolversTypes['WishlistData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableProductLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['DownloadableProductLinks'] = ResolversParentTypes['DownloadableProductLinks']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_shareable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  link_type?: Resolver<Maybe<ResolversTypes['DownloadableFileTypeEnum']>, ParentType, ContextType>;
  number_of_downloads?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sample_file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sample_type?: Resolver<Maybe<ResolversTypes['DownloadableFileTypeEnum']>, ParentType, ContextType>;
  sample_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableProductSamplesResolvers<ContextType = any, ParentType extends ResolversParentTypes['DownloadableProductSamples'] = ResolversParentTypes['DownloadableProductSamples']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sample_file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sample_type?: Resolver<Maybe<ResolversTypes['DownloadableFileTypeEnum']>, ParentType, ContextType>;
  sample_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DownloadableWishlistItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['DownloadableWishlistItem'] = ResolversParentTypes['DownloadableWishlistItem']> = {
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  links_v2?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductLinks']>>>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  samples?: Resolver<Maybe<Array<Maybe<ResolversTypes['DownloadableProductSamples']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityUrlResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityUrl'] = ResolversParentTypes['EntityUrl']> = {
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity_uid?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  redirectCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExchangeRateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExchangeRate'] = ResolversParentTypes['ExchangeRate']> = {
  currency_to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaqGroupsResolvers<ContextType = any, ParentType extends ResolversParentTypes['FaqGroups'] = ResolversParentTypes['FaqGroups']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['FaqItems']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaqItemsResolvers<ContextType = any, ParentType extends ResolversParentTypes['FaqItems'] = ResolversParentTypes['FaqItems']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FixedProductTaxResolvers<ContextType = any, ParentType extends ResolversParentTypes['FixedProductTax'] = ResolversParentTypes['FixedProductTax']> = {
  amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenerateCustomerTokenAsAdminOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenerateCustomerTokenAsAdminOutput'] = ResolversParentTypes['GenerateCustomerTokenAsAdminOutput']> = {
  customer_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftCardRedeemDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['GiftCardRedeemDetail'] = ResolversParentTypes['GiftCardRedeemDetail']> = {
  customer_balance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GiftMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['GiftMessage'] = ResolversParentTypes['GiftMessage']> = {
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupedProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupedProduct'] = ResolversParentTypes['GroupedProduct']> = {
  allow_amount_range?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brands?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  can_redeem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  expire_after_day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  facebook_age_group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_age_range?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_baby_food_stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_compatible_devices?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_decor_style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_digital_zoom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_display_technology?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_finish?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_gemstone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_health_concern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_ingredients?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_is_assembly_required?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_maximum_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_megapixels?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_minimum_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_number_of_licenses?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_operating_system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_optical_zoom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_package_quantity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_depth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_form?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_recommended_use?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_resolution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_scent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_screen_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_shoe_width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_storage_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_system_requirements?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_thread_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_video_game_platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featured?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gift_card_amounts?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_card_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gift_code_pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_product_template?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['GroupedProductItem']>>>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  min_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mpgiftcard_conditions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<GroupedProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wishlistData?: Resolver<Maybe<ResolversTypes['WishlistData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupedProductItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupedProductItem'] = ResolversParentTypes['GroupedProductItem']> = {
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupedProductWishlistItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupedProductWishlistItem'] = ResolversParentTypes['GroupedProductWishlistItem']> = {
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomePageContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['HomePageContent'] = ResolversParentTypes['HomePageContent']> = {
  blocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Block']>>>, ParentType, ContextType>;
  blogs?: Resolver<Maybe<ResolversTypes['Blogs']>, ParentType, ContextType>;
  magicslider?: Resolver<Maybe<ResolversTypes['MagicSlider']>, ParentType, ContextType>;
  magicslider2?: Resolver<Maybe<ResolversTypes['MagicSlider']>, ParentType, ContextType>;
  testimonial?: Resolver<Maybe<ResolversTypes['Testimonial']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HostedProUrlResolvers<ContextType = any, ParentType extends ResolversParentTypes['HostedProUrl'] = ResolversParentTypes['HostedProUrl']> = {
  secure_form_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HttpQueryParameterResolvers<ContextType = any, ParentType extends ResolversParentTypes['HttpQueryParameter'] = ResolversParentTypes['HttpQueryParameter']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSwatchDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSwatchData'] = ResolversParentTypes['ImageSwatchData']> = {
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Invoice'] = ResolversParentTypes['Invoice']> = {
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['SalesCommentItem']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['InvoiceItemInterface']>>>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['InvoiceTotal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvoiceItem'] = ResolversParentTypes['InvoiceItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceItemInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvoiceItemInterface'] = ResolversParentTypes['InvoiceItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleInvoiceItem' | 'DownloadableInvoiceItem' | 'InvoiceItem', ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type InvoiceTotalResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvoiceTotal'] = ResolversParentTypes['InvoiceTotal']> = {
  base_grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  shipping_handling?: Resolver<Maybe<ResolversTypes['ShippingHandling']>, ParentType, ContextType>;
  subtotal?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxItem']>>>, ParentType, ContextType>;
  total_shipping?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  total_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IsConfigSettingEnabledOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['IsConfigSettingEnabledOutput'] = ResolversParentTypes['IsConfigSettingEnabledOutput']> = {
  is_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IsEmailAvailableOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['IsEmailAvailableOutput'] = ResolversParentTypes['IsEmailAvailableOutput']> = {
  is_email_available?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemSelectedBundleOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemSelectedBundleOption'] = ResolversParentTypes['ItemSelectedBundleOption']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSelectedBundleOptionValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemSelectedBundleOptionValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemSelectedBundleOptionValue'] = ResolversParentTypes['ItemSelectedBundleOptionValue']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Items'] = ResolversParentTypes['Items']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeyValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeyValue'] = ResolversParentTypes['KeyValue']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LayerFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['LayerFilter'] = ResolversParentTypes['LayerFilter']> = {
  filter_items?: Resolver<Maybe<Array<Maybe<ResolversTypes['LayerFilterItemInterface']>>>, ParentType, ContextType>;
  filter_items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  request_var?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LayerFilterItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['LayerFilterItem'] = ResolversParentTypes['LayerFilterItem']> = {
  items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value_string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LayerFilterItemInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['LayerFilterItemInterface'] = ResolversParentTypes['LayerFilterItemInterface']> = {
  __resolveType: TypeResolveFn<'LayerFilterItem' | 'SwatchLayerFilterItem', ParentType, ContextType>;
  items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value_string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type MagicSliderResolvers<ContextType = any, ParentType extends ResolversParentTypes['MagicSlider'] = ResolversParentTypes['MagicSlider']> = {
  mobile?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  web?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaGalleryEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaGalleryEntry'] = ResolversParentTypes['MediaGalleryEntry']> = {
  content?: Resolver<Maybe<ResolversTypes['ProductMediaGalleryEntriesContent']>, ParentType, ContextType>;
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  types?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  video_content?: Resolver<Maybe<ResolversTypes['ProductMediaGalleryEntriesVideoContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaGalleryInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaGalleryInterface'] = ResolversParentTypes['MediaGalleryInterface']> = {
  __resolveType: TypeResolveFn<'ProductImage' | 'ProductVideo', ParentType, ContextType>;
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type MobileCreateAccountOtpOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['MobileCreateAccountOtpOutput'] = ResolversParentTypes['MobileCreateAccountOtpOutput']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MobileCreateCustomerAccountOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['MobileCreateCustomerAccountOutput'] = ResolversParentTypes['MobileCreateCustomerAccountOutput']> = {
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MobileForgotPassworOtpOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['MobileForgotPassworOTPOutput'] = ResolversParentTypes['MobileForgotPassworOTPOutput']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MobileForgotPassworOtpVerifyOtpOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['MobileForgotPassworOTPVerifyOtpOutput'] = ResolversParentTypes['MobileForgotPassworOTPVerifyOtpOutput']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MobileLoginOtpOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['MobileLoginOtpOutput'] = ResolversParentTypes['MobileLoginOtpOutput']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MobileLoginVerifyOtpOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['MobileLoginVerifyOtpOutput'] = ResolversParentTypes['MobileLoginVerifyOtpOutput']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MobileResetPassworOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['MobileResetPassworOutput'] = ResolversParentTypes['MobileResetPassworOutput']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoneyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money'] = ResolversParentTypes['Money']> = {
  currency?: Resolver<Maybe<ResolversTypes['CurrencyEnum']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardAmountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardAmount'] = ResolversParentTypes['MpGiftCardAmount']> = {
  amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  record_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardCartItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardCartItem'] = ResolversParentTypes['MpGiftCardCartItem']> = {
  exception?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  giftcard_options?: Resolver<Array<Maybe<ResolversTypes['SelectedGiftCardOption']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_salable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sellable_qty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardConfig'] = ResolversParentTypes['MpGiftCardConfig']> = {
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  canShowDetail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  creditUsed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  css?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  enableGiftCard?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  enableGiftCredit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  enableMultiple?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  giftCardUsed?: Resolver<Maybe<Array<Maybe<ResolversTypes['MpGiftCardUsed']>>>, ParentType, ContextType>;
  listGiftCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['MpGiftCardList']>>>, ParentType, ContextType>;
  maxUsed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardDashboardConfigNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardDashboardConfigNotification'] = ResolversParentTypes['MpGiftCardDashboardConfigNotification']> = {
  creditEnable?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creditNotification?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  enable?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  giftcardNotification?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardDashboardConfigOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardDashboardConfigOutput'] = ResolversParentTypes['MpGiftCardDashboardConfigOutput']> = {
  balance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  giftCardLists?: Resolver<Maybe<Array<Maybe<ResolversTypes['MpGiftCardDashboardGiftCard']>>>, ParentType, ContextType>;
  isEnableCredit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  notification?: Resolver<Maybe<ResolversTypes['MpGiftCardDashboardConfigNotification']>, ParentType, ContextType>;
  transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['MpGiftCardTransaction']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardDashboardGiftCardResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardDashboardGiftCard'] = ResolversParentTypes['MpGiftCardDashboardGiftCard']> = {
  balance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  balance_formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  can_redeem?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conditions_serialized?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customer_ids?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  delivery_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  delivery_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  delivery_method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expired_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expired_at_formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra_content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  giftcard_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hidden_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  histories?: Resolver<Maybe<Array<Maybe<ResolversTypes['MpGiftCardHistory']>>>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  init_balance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_sent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order_increment_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order_item_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pool_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  template_fields?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  template_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardDeliveryResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardDelivery'] = ResolversParentTypes['MpGiftCardDelivery']> = {
  fields?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardDiscountsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardDiscounts'] = ResolversParentTypes['MpGiftCardDiscounts']> = {
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_cards?: Resolver<Maybe<Array<Maybe<ResolversTypes['MpGiftCardDiscountsDetail']>>>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardDiscountsDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardDiscountsDetail'] = ResolversParentTypes['MpGiftCardDiscountsDetail']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardHistory'] = ResolversParentTypes['MpGiftCardHistory']> = {
  action?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  action_detail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  action_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount_formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  balance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at_formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra_content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  giftcard_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  history_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardListResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardList'] = ResolversParentTypes['MpGiftCardList']> = {
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hidden?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardOpenAmountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardOpenAmount'] = ResolversParentTypes['MpGiftCardOpenAmount']> = {
  max?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardPreviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardPreview'] = ResolversParentTypes['MpGiftCardPreview']> = {
  preview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardPriceFormatResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardPriceFormat'] = ResolversParentTypes['MpGiftCardPriceFormat']> = {
  decimalSymbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  groupLength?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  groupSymbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  integerRequired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  precision?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  requiredPrecision?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardProduct'] = ResolversParentTypes['MpGiftCardProduct']> = {
  allow_amount_range?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brands?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  can_redeem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  expire_after_day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  facebook_age_group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_age_range?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_baby_food_stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_compatible_devices?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_decor_style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_digital_zoom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_display_technology?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_finish?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_gemstone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_health_concern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_ingredients?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_is_assembly_required?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_maximum_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_megapixels?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_minimum_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_number_of_licenses?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_operating_system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_optical_zoom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_package_quantity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_depth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_form?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_recommended_use?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_resolution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_scent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_screen_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_shoe_width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_storage_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_system_requirements?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_thread_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_video_game_platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featured?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gift_card_amounts?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_card_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gift_code_pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_product_template?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  information?: Resolver<Maybe<ResolversTypes['MpGiftCardProductInfo']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  min_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mpgiftcard_conditions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<MpGiftCardProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  template?: Resolver<Maybe<Array<Maybe<ResolversTypes['MpGiftCardProductTemplate']>>>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wishlistData?: Resolver<Maybe<ResolversTypes['WishlistData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardProductInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardProductInfo'] = ResolversParentTypes['MpGiftCardProductInfo']> = {
  amounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['MpGiftCardAmount']>>>, ParentType, ContextType>;
  currencyRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  delivery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MpGiftCardDelivery']>>>, ParentType, ContextType>;
  enableDeliveryDate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  expire_after?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileUploadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  messageMaxChar?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  openAmount?: Resolver<Maybe<ResolversTypes['MpGiftCardOpenAmount']>, ParentType, ContextType>;
  priceFormat?: Resolver<Maybe<ResolversTypes['MpGiftCardPriceFormat']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['MpGiftCardTimeZone']>, ParentType, ContextType>;
  uploadTooltip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardProductTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardProductTemplate'] = ResolversParentTypes['MpGiftCardProductTemplate']> = {
  canUpload?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  card?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  design?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  font?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['MpGiftCardProductTemplateImage']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardProductTemplateImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardProductTemplateImage'] = ResolversParentTypes['MpGiftCardProductTemplateImage']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardTimeZoneResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardTimeZone'] = ResolversParentTypes['MpGiftCardTimeZone']> = {
  enable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['MpGiftCardTimeZoneOption']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardTimeZoneOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardTimeZoneOption'] = ResolversParentTypes['MpGiftCardTimeZoneOption']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardTransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardTransaction'] = ResolversParentTypes['MpGiftCardTransaction']> = {
  action?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  action_detail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  action_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount_formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  balance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at_formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  credit_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customer_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra_content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MpGiftCardUsedResolvers<ContextType = any, ParentType extends ResolversParentTypes['MpGiftCardUsed'] = ResolversParentTypes['MpGiftCardUsed']> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addBundleProductsToCart?: Resolver<Maybe<ResolversTypes['AddBundleProductsToCartOutput']>, ParentType, ContextType, Partial<MutationAddBundleProductsToCartArgs>>;
  addCommentToPost?: Resolver<Maybe<ResolversTypes['addCommentToPostOutput']>, ParentType, ContextType, RequireFields<MutationAddCommentToPostArgs, 'currentPage' | 'pageSize'>>;
  addConfigurableProductsToCart?: Resolver<Maybe<ResolversTypes['AddConfigurableProductsToCartOutput']>, ParentType, ContextType, Partial<MutationAddConfigurableProductsToCartArgs>>;
  addDownloadableProductsToCart?: Resolver<Maybe<ResolversTypes['AddDownloadableProductsToCartOutput']>, ParentType, ContextType, Partial<MutationAddDownloadableProductsToCartArgs>>;
  addMpGiftCardList?: Resolver<Maybe<Array<Maybe<ResolversTypes['MpGiftCardDashboardGiftCard']>>>, ParentType, ContextType, RequireFields<MutationAddMpGiftCardListArgs, 'code'>>;
  addMpGiftCardProductsToCart?: Resolver<Maybe<ResolversTypes['AddMpGiftCardProductsToCartOutput']>, ParentType, ContextType, Partial<MutationAddMpGiftCardProductsToCartArgs>>;
  addProductsToCart?: Resolver<Maybe<ResolversTypes['AddProductsToCartOutput']>, ParentType, ContextType, RequireFields<MutationAddProductsToCartArgs, 'cartId' | 'cartItems'>>;
  addProductsToCompareList?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType, Partial<MutationAddProductsToCompareListArgs>>;
  addProductsToWishlist?: Resolver<Maybe<ResolversTypes['AddProductsToWishlistOutput']>, ParentType, ContextType, RequireFields<MutationAddProductsToWishlistArgs, 'wishlistId' | 'wishlistItems'>>;
  addSimpleProductsToCart?: Resolver<Maybe<ResolversTypes['AddSimpleProductsToCartOutput']>, ParentType, ContextType, Partial<MutationAddSimpleProductsToCartArgs>>;
  addVirtualProductsToCart?: Resolver<Maybe<ResolversTypes['AddVirtualProductsToCartOutput']>, ParentType, ContextType, Partial<MutationAddVirtualProductsToCartArgs>>;
  addWishlistItemsToCart?: Resolver<Maybe<ResolversTypes['AddWishlistItemsToCartOutput']>, ParentType, ContextType, RequireFields<MutationAddWishlistItemsToCartArgs, 'wishlistId'>>;
  addtoRecentlyviewed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationAddtoRecentlyviewedArgs, 'product'>>;
  applyCouponToCart?: Resolver<Maybe<ResolversTypes['ApplyCouponToCartOutput']>, ParentType, ContextType, Partial<MutationApplyCouponToCartArgs>>;
  applyjobForm?: Resolver<Maybe<ResolversTypes['appliedjobOutput']>, ParentType, ContextType, RequireFields<MutationApplyjobFormArgs, 'input'>>;
  assignCompareListToCustomer?: Resolver<Maybe<ResolversTypes['AssignCompareListToCustomerOutput']>, ParentType, ContextType, RequireFields<MutationAssignCompareListToCustomerArgs, 'uid'>>;
  authenticateCustomerWithSocialLogin?: Resolver<Maybe<ResolversTypes['AuthenticateCustomerWithSocialLogin']>, ParentType, ContextType, RequireFields<MutationAuthenticateCustomerWithSocialLoginArgs, 'input'>>;
  changeCustomerPassword?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationChangeCustomerPasswordArgs, 'currentPassword' | 'newPassword'>>;
  chatBox?: Resolver<Maybe<ResolversTypes['ChatBoxOutput']>, ParentType, ContextType, RequireFields<MutationChatBoxArgs, 'input'>>;
  createAccountOTP?: Resolver<Maybe<ResolversTypes['MobileCreateAccountOtpOutput']>, ParentType, ContextType, RequireFields<MutationCreateAccountOtpArgs, 'websiteId'>>;
  createAlbum?: Resolver<Maybe<ResolversTypes['CreateAlbumOutput']>, ParentType, ContextType, RequireFields<MutationCreateAlbumArgs, 'input'>>;
  createBraintreeClientToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createCompareList?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType, Partial<MutationCreateCompareListArgs>>;
  createCustomer?: Resolver<Maybe<ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<MutationCreateCustomerArgs, 'input'>>;
  createCustomerAccount?: Resolver<Maybe<ResolversTypes['MobileCreateCustomerAccountOutput']>, ParentType, ContextType, RequireFields<MutationCreateCustomerAccountArgs, 'input' | 'websiteId'>>;
  createCustomerAddress?: Resolver<Maybe<ResolversTypes['CustomerAddress']>, ParentType, ContextType, RequireFields<MutationCreateCustomerAddressArgs, 'input'>>;
  createCustomerV2?: Resolver<Maybe<ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<MutationCreateCustomerV2Args, 'input'>>;
  createEmptyCart?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationCreateEmptyCartArgs>>;
  createKlarnaPaymentsSession?: Resolver<Maybe<ResolversTypes['createKlarnaPaymentsSessionOutput']>, ParentType, ContextType, Partial<MutationCreateKlarnaPaymentsSessionArgs>>;
  createPayflowProToken?: Resolver<Maybe<ResolversTypes['CreatePayflowProTokenOutput']>, ParentType, ContextType, RequireFields<MutationCreatePayflowProTokenArgs, 'input'>>;
  createPaypalExpressToken?: Resolver<Maybe<ResolversTypes['PaypalExpressTokenOutput']>, ParentType, ContextType, RequireFields<MutationCreatePaypalExpressTokenArgs, 'input'>>;
  createProductReview?: Resolver<ResolversTypes['CreateProductReviewOutput'], ParentType, ContextType, RequireFields<MutationCreateProductReviewArgs, 'input'>>;
  deleteCompareList?: Resolver<Maybe<ResolversTypes['DeleteCompareListOutput']>, ParentType, ContextType, RequireFields<MutationDeleteCompareListArgs, 'uid'>>;
  deleteCustomerAddress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteCustomerAddressArgs, 'id'>>;
  deletePaymentToken?: Resolver<Maybe<ResolversTypes['DeletePaymentTokenOutput']>, ParentType, ContextType, RequireFields<MutationDeletePaymentTokenArgs, 'public_hash'>>;
  forgotPassworOTP?: Resolver<Maybe<ResolversTypes['MobileForgotPassworOTPOutput']>, ParentType, ContextType, RequireFields<MutationForgotPassworOtpArgs, 'websiteId'>>;
  generateCustomerToken?: Resolver<Maybe<ResolversTypes['CustomerToken']>, ParentType, ContextType, RequireFields<MutationGenerateCustomerTokenArgs, 'email' | 'password'>>;
  generateCustomerTokenAsAdmin?: Resolver<Maybe<ResolversTypes['GenerateCustomerTokenAsAdminOutput']>, ParentType, ContextType, RequireFields<MutationGenerateCustomerTokenAsAdminArgs, 'input'>>;
  generateUid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationGenerateUidArgs>>;
  generateotpForMyAccount?: Resolver<Maybe<ResolversTypes['myAccountOtpOutput']>, ParentType, ContextType, RequireFields<MutationGenerateotpForMyAccountArgs, 'input'>>;
  googleTokenAuth?: Resolver<Maybe<ResolversTypes['AuthenticateCustomerWithSocialLogin']>, ParentType, ContextType, RequireFields<MutationGoogleTokenAuthArgs, 'access_token'>>;
  handlePayflowProResponse?: Resolver<Maybe<ResolversTypes['PayflowProResponseOutput']>, ParentType, ContextType, RequireFields<MutationHandlePayflowProResponseArgs, 'input'>>;
  loginOTP?: Resolver<Maybe<ResolversTypes['MobileLoginOtpOutput']>, ParentType, ContextType, RequireFields<MutationLoginOtpArgs, 'websiteId'>>;
  mergeCarts?: Resolver<ResolversTypes['Cart'], ParentType, ContextType, RequireFields<MutationMergeCartsArgs, 'source_cart_id'>>;
  myAccountOtpVerify?: Resolver<Maybe<ResolversTypes['myAccountOtpOutput']>, ParentType, ContextType, RequireFields<MutationMyAccountOtpVerifyArgs, 'mobileNumber' | 'otp' | 'websiteId'>>;
  placeOrder?: Resolver<Maybe<ResolversTypes['PlaceOrderOutput']>, ParentType, ContextType, Partial<MutationPlaceOrderArgs>>;
  placeRazorpayOrder?: Resolver<Maybe<ResolversTypes['RazorpayOrder']>, ParentType, ContextType, Partial<MutationPlaceRazorpayOrderArgs>>;
  redeemMpGiftCard?: Resolver<Maybe<ResolversTypes['GiftCardRedeemDetail']>, ParentType, ContextType, RequireFields<MutationRedeemMpGiftCardArgs, 'code'>>;
  removeCouponFromCart?: Resolver<Maybe<ResolversTypes['RemoveCouponFromCartOutput']>, ParentType, ContextType, Partial<MutationRemoveCouponFromCartArgs>>;
  removeItemFromCart?: Resolver<Maybe<ResolversTypes['RemoveItemFromCartOutput']>, ParentType, ContextType, Partial<MutationRemoveItemFromCartArgs>>;
  removeMpGiftCardCodeFromCart?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveMpGiftCardCodeFromCartArgs, 'cartId' | 'code'>>;
  removeMpGiftCardFromList?: Resolver<Maybe<Array<Maybe<ResolversTypes['MpGiftCardDashboardGiftCard']>>>, ParentType, ContextType, RequireFields<MutationRemoveMpGiftCardFromListArgs, 'code'>>;
  removeProductsFromCompareList?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType, Partial<MutationRemoveProductsFromCompareListArgs>>;
  removeProductsFromWishlist?: Resolver<Maybe<ResolversTypes['RemoveProductsFromWishlistOutput']>, ParentType, ContextType, RequireFields<MutationRemoveProductsFromWishlistArgs, 'wishlistId' | 'wishlistItemsIds'>>;
  reorderItems?: Resolver<Maybe<ResolversTypes['ReorderItemsOutput']>, ParentType, ContextType, RequireFields<MutationReorderItemsArgs, 'orderNumber'>>;
  requestPasswordResetEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRequestPasswordResetEmailArgs, 'email'>>;
  resetPassword?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'email' | 'newPassword' | 'resetPasswordToken'>>;
  resetPasswordOtp?: Resolver<Maybe<ResolversTypes['MobileResetPassworOutput']>, ParentType, ContextType, RequireFields<MutationResetPasswordOtpArgs, 'websiteId'>>;
  revokeCustomerToken?: Resolver<Maybe<ResolversTypes['RevokeCustomerTokenOutput']>, ParentType, ContextType>;
  saveMpGiftCardDashBoardNotificationSettings?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationSaveMpGiftCardDashBoardNotificationSettingsArgs>>;
  sendEmailToFriend?: Resolver<Maybe<ResolversTypes['SendEmailToFriendOutput']>, ParentType, ContextType, Partial<MutationSendEmailToFriendArgs>>;
  setBillingAddressOnCart?: Resolver<Maybe<ResolversTypes['SetBillingAddressOnCartOutput']>, ParentType, ContextType, Partial<MutationSetBillingAddressOnCartArgs>>;
  setGuestEmailOnCart?: Resolver<Maybe<ResolversTypes['SetGuestEmailOnCartOutput']>, ParentType, ContextType, Partial<MutationSetGuestEmailOnCartArgs>>;
  setMpGiftCardCodeToCart?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationSetMpGiftCardCodeToCartArgs, 'cartId' | 'code'>>;
  setMpGiftCardCreditToCart?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationSetMpGiftCardCreditToCartArgs, 'amount' | 'cartId'>>;
  setPaymentMethodAndPlaceOrder?: Resolver<Maybe<ResolversTypes['PlaceOrderOutput']>, ParentType, ContextType, Partial<MutationSetPaymentMethodAndPlaceOrderArgs>>;
  setPaymentMethodOnCart?: Resolver<Maybe<ResolversTypes['SetPaymentMethodOnCartOutput']>, ParentType, ContextType, Partial<MutationSetPaymentMethodOnCartArgs>>;
  setRzpPaymentDetailsOnCart?: Resolver<Maybe<ResolversTypes['SetRzpPaymentDetailsOnCartOutput']>, ParentType, ContextType, Partial<MutationSetRzpPaymentDetailsOnCartArgs>>;
  setShippingAddressesOnCart?: Resolver<Maybe<ResolversTypes['SetShippingAddressesOnCartOutput']>, ParentType, ContextType, Partial<MutationSetShippingAddressesOnCartArgs>>;
  setShippingMethodsOnCart?: Resolver<Maybe<ResolversTypes['SetShippingMethodsOnCartOutput']>, ParentType, ContextType, Partial<MutationSetShippingMethodsOnCartArgs>>;
  subscribeEmailToNewsletter?: Resolver<Maybe<ResolversTypes['SubscribeEmailToNewsletterOutput']>, ParentType, ContextType, RequireFields<MutationSubscribeEmailToNewsletterArgs, 'email'>>;
  updateCartItems?: Resolver<Maybe<ResolversTypes['UpdateCartItemsOutput']>, ParentType, ContextType, Partial<MutationUpdateCartItemsArgs>>;
  updateChatProfile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationUpdateChatProfileArgs, 'profileId'>>;
  updateCustomer?: Resolver<Maybe<ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<MutationUpdateCustomerArgs, 'input'>>;
  updateCustomerAddress?: Resolver<Maybe<ResolversTypes['CustomerAddress']>, ParentType, ContextType, RequireFields<MutationUpdateCustomerAddressArgs, 'id'>>;
  updateCustomerEmail?: Resolver<Maybe<ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<MutationUpdateCustomerEmailArgs, 'email' | 'password'>>;
  updateCustomerV2?: Resolver<Maybe<ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<MutationUpdateCustomerV2Args, 'input'>>;
  updateProductsInWishlist?: Resolver<Maybe<ResolversTypes['UpdateProductsInWishlistOutput']>, ParentType, ContextType, RequireFields<MutationUpdateProductsInWishlistArgs, 'wishlistId' | 'wishlistItems'>>;
  updateQuoteEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationUpdateQuoteEmailArgs, 'cartId' | 'email'>>;
  uploadImage?: Resolver<Maybe<ResolversTypes['UploadImageOutput']>, ParentType, ContextType, RequireFields<MutationUploadImageArgs, 'input'>>;
  uploadMpGiftCardImage?: Resolver<Maybe<ResolversTypes['uploadMpGiftCardImageOutput']>, ParentType, ContextType, RequireFields<MutationUploadMpGiftCardImageArgs, 'base64_encoded_data' | 'name'>>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  order_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderAddress'] = ResolversParentTypes['OrderAddress']> = {
  address_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['CountryCodeEnum']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middlename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  street?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telephone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vat_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderItem'] = ResolversParentTypes['OrderItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderItemInterface'] = ResolversParentTypes['OrderItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleOrderItem' | 'DownloadableOrderItem' | 'OrderItem', ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type OrderItemOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderItemOption'] = ResolversParentTypes['OrderItemOption']> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderPaymentMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderPaymentMethod'] = ResolversParentTypes['OrderPaymentMethod']> = {
  additional_data?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyValue']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderShipmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderShipment'] = ResolversParentTypes['OrderShipment']> = {
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['SalesCommentItem']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShipmentItemInterface']>>>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tracking?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShipmentTracking']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderTotalResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderTotal'] = ResolversParentTypes['OrderTotal']> = {
  base_grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType>;
  grand_total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  shipping_handling?: Resolver<Maybe<ResolversTypes['ShippingHandling']>, ParentType, ContextType>;
  subtotal?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxItem']>>>, ParentType, ContextType>;
  total_shipping?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  total_tax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayflowLinkTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['PayflowLinkToken'] = ResolversParentTypes['PayflowLinkToken']> = {
  mode?: Resolver<Maybe<ResolversTypes['PayflowLinkMode']>, ParentType, ContextType>;
  paypal_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secure_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secure_token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayflowProResponseOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PayflowProResponseOutput'] = ResolversParentTypes['PayflowProResponseOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayflowProTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['PayflowProToken'] = ResolversParentTypes['PayflowProToken']> = {
  response_message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  result?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  secure_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secure_token_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentToken'] = ResolversParentTypes['PaymentToken']> = {
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment_method_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  public_hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['PaymentTokenTypeEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaypalExpressTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaypalExpressToken'] = ResolversParentTypes['PaypalExpressToken']> = {
  paypal_urls?: Resolver<Maybe<ResolversTypes['PaypalExpressUrlList']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaypalExpressTokenOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaypalExpressTokenOutput'] = ResolversParentTypes['PaypalExpressTokenOutput']> = {
  paypal_urls?: Resolver<Maybe<ResolversTypes['PaypalExpressUrlList']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaypalExpressUrlListResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaypalExpressUrlList'] = ResolversParentTypes['PaypalExpressUrlList']> = {
  edit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PhysicalProductInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['PhysicalProductInterface'] = ResolversParentTypes['PhysicalProductInterface']> = {
  __resolveType: TypeResolveFn<'BundleProduct' | 'ConfigurableProduct' | 'GroupedProduct' | 'MpGiftCardProduct' | 'SimpleProduct', ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type PickupLocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['PickupLocation'] = ResolversParentTypes['PickupLocation']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pickup_location_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PickupLocationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PickupLocations'] = ResolversParentTypes['PickupLocations']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['PickupLocation']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlaceOrderOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaceOrderOutput'] = ResolversParentTypes['PlaceOrderOutput']> = {
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Price'] = ResolversParentTypes['Price']> = {
  adjustments?: Resolver<Maybe<Array<Maybe<ResolversTypes['PriceAdjustment']>>>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceAdjustmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['PriceAdjustment'] = ResolversParentTypes['PriceAdjustment']> = {
  amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['PriceAdjustmentCodesEnum']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['PriceAdjustmentDescriptionEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceRangeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PriceRange'] = ResolversParentTypes['PriceRange']> = {
  maximum_price?: Resolver<Maybe<ResolversTypes['ProductPrice']>, ParentType, ContextType>;
  minimum_price?: Resolver<ResolversTypes['ProductPrice'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductAttribute'] = ResolversParentTypes['ProductAttribute']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductBlock'] = ResolversParentTypes['ProductBlock']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductDiscountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductDiscount'] = ResolversParentTypes['ProductDiscount']> = {
  amount_off?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  percent_off?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductImage'] = ResolversParentTypes['ProductImage']> = {
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductInterface'] = ResolversParentTypes['ProductInterface']> = {
  __resolveType: TypeResolveFn<'BundleProduct' | 'ConfigurableProduct' | 'DownloadableProduct' | 'GroupedProduct' | 'MpGiftCardProduct' | 'SimpleProduct' | 'VirtualProduct', ParentType, ContextType>;
  allow_amount_range?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brands?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  can_redeem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  expire_after_day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  facebook_age_group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_age_range?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_baby_food_stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_compatible_devices?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_decor_style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_digital_zoom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_display_technology?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_finish?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_gemstone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_health_concern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_ingredients?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_is_assembly_required?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_maximum_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_megapixels?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_minimum_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_number_of_licenses?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_operating_system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_optical_zoom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_package_quantity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_depth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_form?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_recommended_use?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_resolution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_scent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_screen_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_shoe_width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_storage_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_system_requirements?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_thread_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_video_game_platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featured?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gift_card_amounts?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_card_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gift_code_pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_product_template?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  min_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mpgiftcard_conditions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<ProductInterfaceReviewsArgs, 'currentPage' | 'pageSize'>>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  wishlistData?: Resolver<Maybe<ResolversTypes['WishlistData']>, ParentType, ContextType>;
};

export type ProductLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductLinks'] = ResolversParentTypes['ProductLinks']> = {
  link_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linked_product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linked_product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductLinksInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductLinksInterface'] = ResolversParentTypes['ProductLinksInterface']> = {
  __resolveType: TypeResolveFn<'ProductLinks', ParentType, ContextType>;
  link_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linked_product_sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linked_product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ProductMediaGalleryEntriesContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMediaGalleryEntriesContent'] = ResolversParentTypes['ProductMediaGalleryEntriesContent']> = {
  base64_encoded_data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMediaGalleryEntriesVideoContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMediaGalleryEntriesVideoContent'] = ResolversParentTypes['ProductMediaGalleryEntriesVideoContent']> = {
  media_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPrice'] = ResolversParentTypes['ProductPrice']> = {
  discount?: Resolver<Maybe<ResolversTypes['ProductDiscount']>, ParentType, ContextType>;
  final_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  fixed_product_taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['FixedProductTax']>>>, ParentType, ContextType>;
  regular_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPricesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPrices'] = ResolversParentTypes['ProductPrices']> = {
  maximalPrice?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType>;
  minimalPrice?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType>;
  regularPrice?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductReview'] = ResolversParentTypes['ProductReview']> = {
  average_rating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nickname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  ratings_breakdown?: Resolver<Array<Maybe<ResolversTypes['ProductReviewRating']>>, ParentType, ContextType>;
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductReviewRatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductReviewRating'] = ResolversParentTypes['ProductReviewRating']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductReviewRatingMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductReviewRatingMetadata'] = ResolversParentTypes['ProductReviewRatingMetadata']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Array<Maybe<ResolversTypes['ProductReviewRatingValueMetadata']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductReviewRatingValueMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductReviewRatingValueMetadata'] = ResolversParentTypes['ProductReviewRatingValueMetadata']> = {
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductReviewRatingsMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductReviewRatingsMetadata'] = ResolversParentTypes['ProductReviewRatingsMetadata']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ProductReviewRatingMetadata']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductReviewsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductReviews'] = ResolversParentTypes['ProductReviews']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ProductReview']>>, ParentType, ContextType>;
  page_info?: Resolver<ResolversTypes['SearchResultPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductTierPricesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTierPrices'] = ResolversParentTypes['ProductTierPrices']> = {
  customer_group_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  percentage_value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  website_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVideo'] = ResolversParentTypes['ProductVideo']> = {
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_content?: Resolver<Maybe<ResolversTypes['ProductMediaGalleryEntriesVideoContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Products'] = ResolversParentTypes['Products']> = {
  aggregations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Aggregation']>>>, ParentType, ContextType>;
  filters?: Resolver<Maybe<Array<Maybe<ResolversTypes['LayerFilter']>>>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  sort_fields?: Resolver<Maybe<ResolversTypes['SortFields']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  MpGiftcardPreview?: Resolver<Maybe<ResolversTypes['MpGiftCardPreview']>, ParentType, ContextType, RequireFields<QueryMpGiftcardPreviewArgs, 'input'>>;
  TrackMyOrder?: Resolver<Maybe<ResolversTypes['Track']>, ParentType, ContextType, Partial<QueryTrackMyOrderArgs>>;
  availableStores?: Resolver<Maybe<Array<Maybe<ResolversTypes['StoreConfig']>>>, ParentType, ContextType, Partial<QueryAvailableStoresArgs>>;
  blogAuthor?: Resolver<Maybe<ResolversTypes['BlogAuthor']>, ParentType, ContextType, Partial<QueryBlogAuthorArgs>>;
  blogCategories?: Resolver<Maybe<ResolversTypes['blogCategoriesOutput']>, ParentType, ContextType>;
  blogCategory?: Resolver<Maybe<ResolversTypes['BlogCategory']>, ParentType, ContextType, Partial<QueryBlogCategoryArgs>>;
  blogComments?: Resolver<Maybe<ResolversTypes['blogCommentsOutput']>, ParentType, ContextType, RequireFields<QueryBlogCommentsArgs, 'currentPage' | 'pageSize'>>;
  blogPost?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType, Partial<QueryBlogPostArgs>>;
  blogPosts?: Resolver<Maybe<ResolversTypes['blogPostsOutput']>, ParentType, ContextType, RequireFields<QueryBlogPostsArgs, 'currentPage' | 'pageSize' | 'sortFiled'>>;
  blogTag?: Resolver<Maybe<ResolversTypes['BlogTag']>, ParentType, ContextType, Partial<QueryBlogTagArgs>>;
  blogTags?: Resolver<Maybe<ResolversTypes['blogTagsOutput']>, ParentType, ContextType>;
  careerform?: Resolver<Maybe<Array<Maybe<ResolversTypes['jobDetails']>>>, ParentType, ContextType>;
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryCartArgs, 'cart_id'>>;
  categories?: Resolver<Maybe<ResolversTypes['CategoryResult']>, ParentType, ContextType, RequireFields<QueryCategoriesArgs, 'currentPage' | 'pageSize'>>;
  category?: Resolver<Maybe<ResolversTypes['CategoryTree']>, ParentType, ContextType, Partial<QueryCategoryArgs>>;
  categoryList?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryTree']>>>, ParentType, ContextType, Partial<QueryCategoryListArgs>>;
  chatData?: Resolver<Maybe<ResolversTypes['ChatData']>, ParentType, ContextType>;
  checkoutAgreements?: Resolver<Maybe<Array<Maybe<ResolversTypes['CheckoutAgreement']>>>, ParentType, ContextType>;
  cmsBlocks?: Resolver<Maybe<ResolversTypes['CmsBlocks']>, ParentType, ContextType, Partial<QueryCmsBlocksArgs>>;
  cmsPage?: Resolver<Maybe<ResolversTypes['CmsPage']>, ParentType, ContextType, Partial<QueryCmsPageArgs>>;
  compareList?: Resolver<Maybe<ResolversTypes['CompareList']>, ParentType, ContextType, RequireFields<QueryCompareListArgs, 'uid'>>;
  countries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, Partial<QueryCountryArgs>>;
  createAccountOTPVerify?: Resolver<Maybe<ResolversTypes['MobileForgotPassworOTPVerifyOtpOutput']>, ParentType, ContextType, RequireFields<QueryCreateAccountOtpVerifyArgs, 'websiteId'>>;
  currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
  customAttributeMetadata?: Resolver<Maybe<ResolversTypes['CustomAttributeMetadata']>, ParentType, ContextType, RequireFields<QueryCustomAttributeMetadataArgs, 'attributes'>>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  customerCart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  customerDownloadableProducts?: Resolver<Maybe<ResolversTypes['CustomerDownloadableProducts']>, ParentType, ContextType>;
  customerOrders?: Resolver<Maybe<ResolversTypes['CustomerOrders']>, ParentType, ContextType>;
  customerPaymentTokens?: Resolver<Maybe<ResolversTypes['CustomerPaymentTokens']>, ParentType, ContextType>;
  emailCaptureCheckout?: Resolver<Maybe<ResolversTypes['IsConfigSettingEnabledOutput']>, ParentType, ContextType>;
  emailCaptureNewsletter?: Resolver<Maybe<ResolversTypes['IsConfigSettingEnabledOutput']>, ParentType, ContextType>;
  forgotPassworOTPVerify?: Resolver<Maybe<ResolversTypes['MobileForgotPassworOTPVerifyOtpOutput']>, ParentType, ContextType, RequireFields<QueryForgotPassworOtpVerifyArgs, 'websiteId'>>;
  getFaqData?: Resolver<Maybe<Array<Maybe<ResolversTypes['FaqGroups']>>>, ParentType, ContextType>;
  getHostedProUrl?: Resolver<Maybe<ResolversTypes['HostedProUrl']>, ParentType, ContextType, RequireFields<QueryGetHostedProUrlArgs, 'input'>>;
  getPayflowLinkToken?: Resolver<Maybe<ResolversTypes['PayflowLinkToken']>, ParentType, ContextType, RequireFields<QueryGetPayflowLinkTokenArgs, 'input'>>;
  homepage?: Resolver<Maybe<ResolversTypes['HomePageContent']>, ParentType, ContextType>;
  isEmailAvailable?: Resolver<Maybe<ResolversTypes['IsEmailAvailableOutput']>, ParentType, ContextType, RequireFields<QueryIsEmailAvailableArgs, 'email'>>;
  loginOTPVerify?: Resolver<Maybe<ResolversTypes['MobileLoginVerifyOtpOutput']>, ParentType, ContextType, RequireFields<QueryLoginOtpVerifyArgs, 'websiteId'>>;
  mpGiftCardCheckCode?: Resolver<Maybe<ResolversTypes['CheckGiftCodeOutput']>, ParentType, ContextType, RequireFields<QueryMpGiftCardCheckCodeArgs, 'code'>>;
  mpGiftCardDashboardConfig?: Resolver<Maybe<ResolversTypes['MpGiftCardDashboardConfigOutput']>, ParentType, ContextType>;
  mpSmtpBestsellers?: Resolver<Maybe<ResolversTypes['SmtpBestsellersOutput']>, ParentType, ContextType, RequireFields<QueryMpSmtpBestsellersArgs, 'app_id' | 'secret_key'>>;
  orderData?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderDataArgs, 'orderId'>>;
  pickupLocations?: Resolver<Maybe<ResolversTypes['PickupLocations']>, ParentType, ContextType, RequireFields<QueryPickupLocationsArgs, 'currentPage' | 'pageSize'>>;
  productReviewRatingsMetadata?: Resolver<ResolversTypes['ProductReviewRatingsMetadata'], ParentType, ContextType>;
  products?: Resolver<Maybe<ResolversTypes['Products']>, ParentType, ContextType, RequireFields<QueryProductsArgs, 'currentPage' | 'pageSize'>>;
  recentlyViewed?: Resolver<Maybe<ResolversTypes['Recentlyviewed']>, ParentType, ContextType, Partial<QueryRecentlyViewedArgs>>;
  route?: Resolver<Maybe<ResolversTypes['RoutableInterface']>, ParentType, ContextType, RequireFields<QueryRouteArgs, 'url'>>;
  storeConfig?: Resolver<Maybe<ResolversTypes['StoreConfig']>, ParentType, ContextType>;
  trackingData?: Resolver<Maybe<ResolversTypes['TrackingData']>, ParentType, ContextType>;
  urlResolver?: Resolver<Maybe<ResolversTypes['EntityUrl']>, ParentType, ContextType, RequireFields<QueryUrlResolverArgs, 'url'>>;
  wedding_album?: Resolver<Maybe<ResolversTypes['WeddingAlbum']>, ParentType, ContextType, Partial<QueryWedding_AlbumArgs>>;
  wishlist?: Resolver<Maybe<ResolversTypes['WishlistOutput']>, ParentType, ContextType>;
};

export type RazorpayOrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['RazorpayOrder'] = ResolversParentTypes['RazorpayOrder']> = {
  amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order_quote_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rzp_order_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RecentlyviewedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Recentlyviewed'] = ResolversParentTypes['Recentlyviewed']> = {
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveCouponFromCartOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoveCouponFromCartOutput'] = ResolversParentTypes['RemoveCouponFromCartOutput']> = {
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveItemFromCartOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoveItemFromCartOutput'] = ResolversParentTypes['RemoveItemFromCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveProductsFromWishlistOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoveProductsFromWishlistOutput'] = ResolversParentTypes['RemoveProductsFromWishlistOutput']> = {
  user_errors?: Resolver<Array<Maybe<ResolversTypes['WishListUserInputError']>>, ParentType, ContextType>;
  wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReorderItemsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReorderItemsOutput'] = ResolversParentTypes['ReorderItemsOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  userInputErrors?: Resolver<Array<Maybe<ResolversTypes['CheckoutUserInputError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RevokeCustomerTokenOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['RevokeCustomerTokenOutput'] = ResolversParentTypes['RevokeCustomerTokenOutput']> = {
  result?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoutableInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoutableInterface'] = ResolversParentTypes['RoutableInterface']> = {
  __resolveType: TypeResolveFn<'BundleProduct' | 'CategoryTree' | 'CmsPage' | 'ConfigurableProduct' | 'DownloadableProduct' | 'GroupedProduct' | 'MpGiftCardProduct' | 'SimpleProduct' | 'VirtualProduct', ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
};

export type SalesCommentItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalesCommentItem'] = ResolversParentTypes['SalesCommentItem']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalesItemInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalesItemInterface'] = ResolversParentTypes['SalesItemInterface']> = {
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResultPageInfo'] = ResolversParentTypes['SearchResultPageInfo']> = {
  current_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  page_size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total_pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectedBundleOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectedBundleOption'] = ResolversParentTypes['SelectedBundleOption']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  values?: Resolver<Array<Maybe<ResolversTypes['SelectedBundleOptionValue']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectedBundleOptionValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectedBundleOptionValue'] = ResolversParentTypes['SelectedBundleOptionValue']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectedConfigurableOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectedConfigurableOption'] = ResolversParentTypes['SelectedConfigurableOption']> = {
  configurable_product_option_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  configurable_product_option_value_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  option_label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value_label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectedCustomizableOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectedCustomizableOption'] = ResolversParentTypes['SelectedCustomizableOption']> = {
  customizable_option_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sort_order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOptionValue']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectedCustomizableOptionValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectedCustomizableOptionValue'] = ResolversParentTypes['SelectedCustomizableOptionValue']> = {
  customizable_option_value_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['CartItemSelectedOptionValuePrice'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectedGiftCardOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectedGiftCardOption'] = ResolversParentTypes['SelectedGiftCardOption']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  option_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectedPaymentMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectedPaymentMethod'] = ResolversParentTypes['SelectedPaymentMethod']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purchase_order_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectedShippingMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectedShippingMethod'] = ResolversParentTypes['SelectedShippingMethod']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  base_amount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  carrier_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  carrier_title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  method_title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendEmailToFriendOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SendEmailToFriendOutput'] = ResolversParentTypes['SendEmailToFriendOutput']> = {
  recipients?: Resolver<Maybe<Array<Maybe<ResolversTypes['SendEmailToFriendRecipient']>>>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['SendEmailToFriendSender']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendEmailToFriendRecipientResolvers<ContextType = any, ParentType extends ResolversParentTypes['SendEmailToFriendRecipient'] = ResolversParentTypes['SendEmailToFriendRecipient']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendEmailToFriendSenderResolvers<ContextType = any, ParentType extends ResolversParentTypes['SendEmailToFriendSender'] = ResolversParentTypes['SendEmailToFriendSender']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendFriendConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['SendFriendConfiguration'] = ResolversParentTypes['SendFriendConfiguration']> = {
  enabled_for_customers?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enabled_for_guests?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetBillingAddressOnCartOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetBillingAddressOnCartOutput'] = ResolversParentTypes['SetBillingAddressOnCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetGuestEmailOnCartOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetGuestEmailOnCartOutput'] = ResolversParentTypes['SetGuestEmailOnCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetPaymentMethodOnCartOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetPaymentMethodOnCartOutput'] = ResolversParentTypes['SetPaymentMethodOnCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetRzpPaymentDetailsOnCartOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetRzpPaymentDetailsOnCartOutput'] = ResolversParentTypes['SetRzpPaymentDetailsOnCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetShippingAddressesOnCartOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetShippingAddressesOnCartOutput'] = ResolversParentTypes['SetShippingAddressesOnCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetShippingMethodsOnCartOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetShippingMethodsOnCartOutput'] = ResolversParentTypes['SetShippingMethodsOnCartOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShipmentItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShipmentItem'] = ResolversParentTypes['ShipmentItem']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_shipped?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShipmentItemInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShipmentItemInterface'] = ResolversParentTypes['ShipmentItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleShipmentItem' | 'ShipmentItem', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity_shipped?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
};

export type ShipmentTrackingResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShipmentTracking'] = ResolversParentTypes['ShipmentTracking']> = {
  carrier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingCartAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingCartAddress'] = ResolversParentTypes['ShippingCartAddress']> = {
  address_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  available_shipping_methods?: Resolver<Maybe<Array<Maybe<ResolversTypes['AvailableShippingMethod']>>>, ParentType, ContextType>;
  cart_items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemQuantity']>>>, ParentType, ContextType>;
  cart_items_v2?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItemInterface']>>>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['CartAddressCountry'], ParentType, ContextType>;
  customer_notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items_weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pickup_location_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['CartAddressRegion']>, ParentType, ContextType>;
  selected_shipping_method?: Resolver<Maybe<ResolversTypes['SelectedShippingMethod']>, ParentType, ContextType>;
  street?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  telephone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingDiscountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingDiscount'] = ResolversParentTypes['ShippingDiscount']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingHandlingResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingHandling'] = ResolversParentTypes['ShippingHandling']> = {
  amount_excluding_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  amount_including_tax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShippingDiscount']>>>, ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxItem']>>>, ParentType, ContextType>;
  total_amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SimpleCartItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['SimpleCartItem'] = ResolversParentTypes['SimpleCartItem']> = {
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  exception?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_salable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sellable_qty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SimpleProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['SimpleProduct'] = ResolversParentTypes['SimpleProduct']> = {
  allow_amount_range?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brands?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  can_redeem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  expire_after_day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  facebook_age_group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_age_range?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_baby_food_stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_compatible_devices?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_decor_style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_digital_zoom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_display_technology?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_finish?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_gemstone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_health_concern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_ingredients?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_is_assembly_required?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_maximum_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_megapixels?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_minimum_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_number_of_licenses?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_operating_system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_optical_zoom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_package_quantity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_depth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_form?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_recommended_use?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_resolution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_scent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_screen_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_shoe_width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_storage_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_system_requirements?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_thread_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_video_game_platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featured?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gift_card_amounts?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_card_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gift_code_pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_product_template?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  min_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mpgiftcard_conditions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<SimpleProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wishlistData?: Resolver<Maybe<ResolversTypes['WishlistData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SimpleWishlistItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['SimpleWishlistItem'] = ResolversParentTypes['SimpleWishlistItem']> = {
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SmtpBestsellersOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SmtpBestsellersOutput'] = ResolversParentTypes['SmtpBestsellersOutput']> = {
  mpBestsellers?: Resolver<Maybe<Array<Maybe<ResolversTypes['BestsellersProductOutput']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SortFieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['SortField'] = ResolversParentTypes['SortField']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SortFieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SortFields'] = ResolversParentTypes['SortFields']> = {
  default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['SortField']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['StoreConfig'] = ResolversParentTypes['StoreConfig']> = {
  absolute_footer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allow_guest_checkout?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  allow_guests_to_write_product_reviews?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allow_items?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allow_order?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  autocomplete_on_storefront?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  base_currency_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base_link_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base_media_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base_static_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  braintree_cc_vault_active?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  catalog_default_sort_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_fixed_product_tax_display_setting?: Resolver<Maybe<ResolversTypes['FixedProductTaxDisplaySettings']>, ParentType, ContextType>;
  category_url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cms_home_page?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cms_no_cookies?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cms_no_route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  configurable_thumbnail_source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  copyright?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currency_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  demonotice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  front?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  grid_per_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  grid_per_page_values?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  head_includes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  head_shortcut_icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  header_logo_src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_default_store?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_default_store_group?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  list_mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  list_per_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  list_per_page_values?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo_alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo_height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  logo_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo_width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  magento_wishlist_general_is_enabled?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_advanced_permalink_archive_path_schema?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_advanced_permalink_blog_route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_advanced_permalink_enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_advanced_permalink_redirect_to_no_slash?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_advanced_permalink_search_path_schema?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_author_enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_author_page_enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_author_robots?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_design_format_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_design_publication_date?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_index_page_meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_index_page_meta_keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_index_page_meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_index_page_posts_sort_by?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_index_page_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_permalink_archive_route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_permalink_author_route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_permalink_author_sufix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_permalink_category_route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_permalink_category_sufix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_permalink_category_use_categories?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_permalink_post_route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_permalink_post_sufix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_permalink_post_use_categories?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_permalink_redirect_to_no_slash?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_permalink_route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_permalink_search_route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_permalink_tag_route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_permalink_tag_sufix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_permalink_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_post_list_posts_per_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_post_view_comments_default_status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_post_view_comments_display_privacy_policy_checkbox?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_post_view_comments_disqus_forum_shortname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_post_view_comments_fb_app_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_post_view_comments_fb_app_id_header?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_post_view_comments_format_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_post_view_comments_guest_comments?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_post_view_comments_number_of_comments?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_post_view_comments_number_of_replies?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_post_view_comments_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_post_view_nextprev_enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_post_view_related_posts_enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_post_view_related_posts_number_of_posts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_post_view_related_products_enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_post_view_related_products_number_of_products?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_product_page_number_of_related_posts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_product_page_related_posts_enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_search_robots?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_seo_use_canonical_meta_tag_for?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_sidebar_archive_enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_archive_format_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_sidebar_archive_sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_categories_enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_categories_max_depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_categories_show_posts_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_categories_sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_custom2_enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_custom2_html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_sidebar_custom2_sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_custom_enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_custom_html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_sidebar_custom_sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_featured_posts_enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_featured_posts_posts_ids?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_sidebar_featured_posts_sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_popular_posts_enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_popular_posts_posts_per_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_popular_posts_sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_recent_posts_enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_recent_posts_posts_per_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_recent_posts_sort_ordere?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_rss_feed_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_sidebar_rss_feed_enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_rss_feed_sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_rss_feed_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_sidebar_search_enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_search_sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_tag_claud_enabled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_tag_claud_sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_sidebar_tag_claud_tag_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_social_add_this_enabled?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_social_add_this_language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_social_add_this_pubid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_tag_robots?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_top_menu_include_categories?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_top_menu_item_text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mfblog_top_menu_max_depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mfblog_top_menu_show_item?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minimum_password_length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  no_route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment_payflowpro_cc_vault_active?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_fixed_product_tax_display_setting?: Resolver<Maybe<ResolversTypes['FixedProductTaxDisplaySettings']>, ParentType, ContextType>;
  product_reviews_enabled?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  razorpay_key_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  razorpay_merchant_name_override?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  required_character_classes_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  root_category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  root_category_uid?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  sales_fixed_product_tax_display_setting?: Resolver<Maybe<ResolversTypes['FixedProductTaxDisplaySettings']>, ParentType, ContextType>;
  secure_base_link_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secure_base_media_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secure_base_static_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secure_base_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  send_friend?: Resolver<Maybe<ResolversTypes['SendFriendConfiguration']>, ParentType, ContextType>;
  show_cms_breadcrumbs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  store_code?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  store_config_data?: Resolver<Maybe<ResolversTypes['StoreConfigData']>, ParentType, ContextType>;
  store_group_code?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  store_group_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store_sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title_prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title_separator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  use_store_in_url?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  website_code?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  website_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  website_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight_unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  welcome?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreConfigDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['StoreConfigData'] = ResolversParentTypes['StoreConfigData']> = {
  facebook_app_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  google_client_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StorefrontPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['StorefrontProperties'] = ResolversParentTypes['StorefrontProperties']> = {
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  use_in_layered_navigation?: Resolver<Maybe<ResolversTypes['UseInLayeredNavigationOptions']>, ParentType, ContextType>;
  use_in_product_listing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  use_in_search_results_layered_navigation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  visible_on_catalog_pages?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscribeEmailToNewsletterOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscribeEmailToNewsletterOutput'] = ResolversParentTypes['SubscribeEmailToNewsletterOutput']> = {
  status?: Resolver<Maybe<ResolversTypes['SubscriptionStatusesEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SwatchDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['SwatchData'] = ResolversParentTypes['SwatchData']> = {
  __resolveType: TypeResolveFn<'SwatchImageData' | 'SwatchTextData', ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type SwatchDataInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['SwatchDataInterface'] = ResolversParentTypes['SwatchDataInterface']> = {
  __resolveType: TypeResolveFn<'ColorSwatchData' | 'ImageSwatchData' | 'TextSwatchData', ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type SwatchImageDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['SwatchImageData'] = ResolversParentTypes['SwatchImageData']> = {
  color_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SwatchLayerFilterItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['SwatchLayerFilterItem'] = ResolversParentTypes['SwatchLayerFilterItem']> = {
  items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_data?: Resolver<Maybe<ResolversTypes['SwatchData']>, ParentType, ContextType>;
  value_string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SwatchLayerFilterItemInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['SwatchLayerFilterItemInterface'] = ResolversParentTypes['SwatchLayerFilterItemInterface']> = {
  __resolveType: TypeResolveFn<'SwatchLayerFilterItem', ParentType, ContextType>;
  swatch_data?: Resolver<Maybe<ResolversTypes['SwatchData']>, ParentType, ContextType>;
};

export type SwatchTextDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['SwatchTextData'] = ResolversParentTypes['SwatchTextData']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaxItem'] = ResolversParentTypes['TaxItem']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TestimonialResolvers<ContextType = any, ParentType extends ResolversParentTypes['Testimonial'] = ResolversParentTypes['Testimonial']> = {
  configuration?: Resolver<Maybe<ResolversTypes['TestimonialConfiguration']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['TestimonialContent']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TestimonialConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['TestimonialConfiguration'] = ResolversParentTypes['TestimonialConfiguration']> = {
  general?: Resolver<Maybe<ResolversTypes['TestimonialGeneral']>, ParentType, ContextType>;
  setting_responsive?: Resolver<Maybe<ResolversTypes['TestimonialSettingResponsive']>, ParentType, ContextType>;
  setting_slider?: Resolver<Maybe<ResolversTypes['TestimonialSettingSlider']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TestimonialContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['TestimonialContent'] = ResolversParentTypes['TestimonialContent']> = {
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  job?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating_summary?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stores?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  testimonial_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TestimonialGeneralResolvers<ContextType = any, ParentType extends ResolversParentTypes['TestimonialGeneral'] = ResolversParentTypes['TestimonialGeneral']> = {
  allow_guest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  auto_approve?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  customer_submit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  enable_slider?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  per_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TestimonialSettingResponsiveResolvers<ContextType = any, ParentType extends ResolversParentTypes['TestimonialSettingResponsive'] = ResolversParentTypes['TestimonialSettingResponsive']> = {
  max_width_360?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_width_480?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_width_640?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_width_768?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_width_991?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_width_1199?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_width_1919?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_width_1920?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TestimonialSettingSliderResolvers<ContextType = any, ParentType extends ResolversParentTypes['TestimonialSettingSlider'] = ResolversParentTypes['TestimonialSettingSlider']> = {
  arrows?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  auto_play?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dots?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  fade?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  infinite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  padding?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rows?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slide?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  slide_vertical?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  speed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextSwatchDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextSwatchData'] = ResolversParentTypes['TextSwatchData']> = {
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TierPriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['TierPrice'] = ResolversParentTypes['TierPrice']> = {
  discount?: Resolver<Maybe<ResolversTypes['ProductDiscount']>, ParentType, ContextType>;
  final_price?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  order_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ordernumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackingDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['TrackingData'] = ResolversParentTypes['TrackingData']> = {
  page_tracking_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  region_prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roi_tracking_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  wbt_profile_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCartItemsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCartItemsOutput'] = ResolversParentTypes['UpdateCartItemsOutput']> = {
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateProductsInWishlistOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateProductsInWishlistOutput'] = ResolversParentTypes['UpdateProductsInWishlistOutput']> = {
  user_errors?: Resolver<Array<Maybe<ResolversTypes['WishListUserInputError']>>, ParentType, ContextType>;
  wishlist?: Resolver<ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadImageOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadImageOutput'] = ResolversParentTypes['UploadImageOutput']> = {
  album_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UrlRewriteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UrlRewrite'] = ResolversParentTypes['UrlRewrite']> = {
  parameters?: Resolver<Maybe<Array<Maybe<ResolversTypes['HttpQueryParameter']>>>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VirtualCartItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['VirtualCartItem'] = ResolversParentTypes['VirtualCartItem']> = {
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  exception?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_salable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sellable_qty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VirtualProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['VirtualProduct'] = ResolversParentTypes['VirtualProduct']> = {
  allow_amount_range?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brands?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  can_redeem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  expire_after_day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fabric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  facebook_age_group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_age_range?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_baby_food_stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_compatible_devices?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_decor_style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_digital_zoom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_display_technology?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_finish?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_gemstone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_health_concern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_ingredients?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_is_assembly_required?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_maximum_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_megapixels?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_minimum_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_number_of_licenses?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_operating_system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_optical_zoom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_package_quantity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_depth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_form?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_product_width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_recommended_use?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_resolution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_scent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_screen_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_shoe_width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_storage_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_system_requirements?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_thread_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_video_game_platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featured?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gift_card_amounts?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_card_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gift_code_pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gift_product_template?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  max_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  min_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mpgiftcard_conditions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<VirtualProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  short_description?: Resolver<Maybe<ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock_status?: Resolver<Maybe<ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Website']>>>, ParentType, ContextType>;
  wishlistData?: Resolver<Maybe<ResolversTypes['WishlistData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VirtualWishlistItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['VirtualWishlistItem'] = ResolversParentTypes['VirtualWishlistItem']> = {
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WebsiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Website'] = ResolversParentTypes['Website']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_group_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WeddingAlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['WeddingAlbum'] = ResolversParentTypes['WeddingAlbum']> = {
  albums?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType>;
  cms_block?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WishListUserInputErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['WishListUserInputError'] = ResolversParentTypes['WishListUserInputError']> = {
  code?: Resolver<ResolversTypes['WishListUserInputErrorType'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WishlistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Wishlist'] = ResolversParentTypes['Wishlist']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['WishlistItem']>>>, ParentType, ContextType>;
  items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items_v2?: Resolver<Maybe<ResolversTypes['WishlistItems']>, ParentType, ContextType, RequireFields<WishlistItems_V2Args, 'currentPage' | 'pageSize'>>;
  sharing_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WishlistCartUserInputErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['WishlistCartUserInputError'] = ResolversParentTypes['WishlistCartUserInputError']> = {
  code?: Resolver<ResolversTypes['WishlistCartUserInputErrorType'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wishlistId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  wishlistItemId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WishlistDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['WishlistData'] = ResolversParentTypes['WishlistData']> = {
  wishlistItem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WishlistItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['WishlistItem'] = ResolversParentTypes['WishlistItem']> = {
  added_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WishlistItemInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['WishlistItemInterface'] = ResolversParentTypes['WishlistItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleWishlistItem' | 'ConfigurableWishlistItem' | 'DownloadableWishlistItem' | 'GroupedProductWishlistItem' | 'SimpleWishlistItem' | 'VirtualWishlistItem', ParentType, ContextType>;
  added_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
};

export type WishlistItemsResolvers<ContextType = any, ParentType extends ResolversParentTypes['WishlistItems'] = ResolversParentTypes['WishlistItems']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['WishlistItemInterface']>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WishlistOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['WishlistOutput'] = ResolversParentTypes['WishlistOutput']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['WishlistItem']>>>, ParentType, ContextType>;
  items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sharing_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddCommentToPostOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['addCommentToPostOutput'] = ResolversParentTypes['addCommentToPostOutput']> = {
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogComment']>>>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total_pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppliedjobOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['appliedjobOutput'] = ResolversParentTypes['appliedjobOutput']> = {
  success_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogCategoriesOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['blogCategoriesOutput'] = ResolversParentTypes['blogCategoriesOutput']> = {
  featured_blog_category?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogCategory']>>>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogCommentsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['blogCommentsOutput'] = ResolversParentTypes['blogCommentsOutput']> = {
  current_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogComment']>>>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total_pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogPostsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['blogPostsOutput'] = ResolversParentTypes['blogPostsOutput']> = {
  current_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogPost']>>>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total_pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogTagsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['blogTagsOutput'] = ResolversParentTypes['blogTagsOutput']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogTag']>>>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateKlarnaPaymentsSessionOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['createKlarnaPaymentsSessionOutput'] = ResolversParentTypes['createKlarnaPaymentsSessionOutput']> = {
  client_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment_method_categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Categories']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['jobDetails'] = ResolversParentTypes['jobDetails']> = {
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  job_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  job_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  job_location?: Resolver<Maybe<Array<Maybe<ResolversTypes['jobLocation']>>>, ParentType, ContextType>;
  job_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  job_vaccancy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobLocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['jobLocation'] = ResolversParentTypes['jobLocation']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MyAccountOtpOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['myAccountOtpOutput'] = ResolversParentTypes['myAccountOtpOutput']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadMpGiftCardImageOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['uploadMpGiftCardImageOutput'] = ResolversParentTypes['uploadMpGiftCardImageOutput']> = {
  error?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AddBundleProductsToCartOutput?: AddBundleProductsToCartOutputResolvers<ContextType>;
  AddConfigurableProductsToCartOutput?: AddConfigurableProductsToCartOutputResolvers<ContextType>;
  AddDownloadableProductsToCartOutput?: AddDownloadableProductsToCartOutputResolvers<ContextType>;
  AddMpGiftCardProductsToCartOutput?: AddMpGiftCardProductsToCartOutputResolvers<ContextType>;
  AddProductsToCartOutput?: AddProductsToCartOutputResolvers<ContextType>;
  AddProductsToWishlistOutput?: AddProductsToWishlistOutputResolvers<ContextType>;
  AddSimpleProductsToCartOutput?: AddSimpleProductsToCartOutputResolvers<ContextType>;
  AddVirtualProductsToCartOutput?: AddVirtualProductsToCartOutputResolvers<ContextType>;
  AddWishlistItemsToCartOutput?: AddWishlistItemsToCartOutputResolvers<ContextType>;
  Aggregation?: AggregationResolvers<ContextType>;
  AggregationOption?: AggregationOptionResolvers<ContextType>;
  AggregationOptionInterface?: AggregationOptionInterfaceResolvers<ContextType>;
  Album?: AlbumResolvers<ContextType>;
  AppliedCoupon?: AppliedCouponResolvers<ContextType>;
  ApplyCouponToCartOutput?: ApplyCouponToCartOutputResolvers<ContextType>;
  Assets?: AssetsResolvers<ContextType>;
  AssignCompareListToCustomerOutput?: AssignCompareListToCustomerOutputResolvers<ContextType>;
  Attribute?: AttributeResolvers<ContextType>;
  AttributeOption?: AttributeOptionResolvers<ContextType>;
  AuthenticateCustomerWithSocialLogin?: AuthenticateCustomerWithSocialLoginResolvers<ContextType>;
  AvailablePaymentMethod?: AvailablePaymentMethodResolvers<ContextType>;
  AvailableShippingMethod?: AvailableShippingMethodResolvers<ContextType>;
  BannerBlock?: BannerBlockResolvers<ContextType>;
  BannerItems?: BannerItemsResolvers<ContextType>;
  BestSellerBlock?: BestSellerBlockResolvers<ContextType>;
  BestSellerProducts?: BestSellerProductsResolvers<ContextType>;
  BestsellersProductOutput?: BestsellersProductOutputResolvers<ContextType>;
  BillingCartAddress?: BillingCartAddressResolvers<ContextType>;
  Block?: BlockResolvers<ContextType>;
  BlogAuthor?: BlogAuthorResolvers<ContextType>;
  BlogCategory?: BlogCategoryResolvers<ContextType>;
  BlogComment?: BlogCommentResolvers<ContextType>;
  BlogPost?: BlogPostResolvers<ContextType>;
  BlogPosts?: BlogPostsResolvers<ContextType>;
  BlogTag?: BlogTagResolvers<ContextType>;
  Blogs?: BlogsResolvers<ContextType>;
  Breadcrumb?: BreadcrumbResolvers<ContextType>;
  BundleCartItem?: BundleCartItemResolvers<ContextType>;
  BundleCreditMemoItem?: BundleCreditMemoItemResolvers<ContextType>;
  BundleInvoiceItem?: BundleInvoiceItemResolvers<ContextType>;
  BundleItem?: BundleItemResolvers<ContextType>;
  BundleItemOption?: BundleItemOptionResolvers<ContextType>;
  BundleOrderItem?: BundleOrderItemResolvers<ContextType>;
  BundleProduct?: BundleProductResolvers<ContextType>;
  BundleShipmentItem?: BundleShipmentItemResolvers<ContextType>;
  BundleWishlistItem?: BundleWishlistItemResolvers<ContextType>;
  Cart?: CartResolvers<ContextType>;
  CartAddressCountry?: CartAddressCountryResolvers<ContextType>;
  CartAddressInterface?: CartAddressInterfaceResolvers<ContextType>;
  CartAddressRegion?: CartAddressRegionResolvers<ContextType>;
  CartDiscount?: CartDiscountResolvers<ContextType>;
  CartItemInterface?: CartItemInterfaceResolvers<ContextType>;
  CartItemPrices?: CartItemPricesResolvers<ContextType>;
  CartItemQuantity?: CartItemQuantityResolvers<ContextType>;
  CartItemSelectedOptionValuePrice?: CartItemSelectedOptionValuePriceResolvers<ContextType>;
  CartPrices?: CartPricesResolvers<ContextType>;
  CartTaxItem?: CartTaxItemResolvers<ContextType>;
  CartUserInputError?: CartUserInputErrorResolvers<ContextType>;
  Categories?: CategoriesResolvers<ContextType>;
  CategoryBlock?: CategoryBlockResolvers<ContextType>;
  CategoryBlockTree?: CategoryBlockTreeResolvers<ContextType>;
  CategoryInterface?: CategoryInterfaceResolvers<ContextType>;
  CategoryProducts?: CategoryProductsResolvers<ContextType>;
  CategoryResult?: CategoryResultResolvers<ContextType>;
  CategoryTree?: CategoryTreeResolvers<ContextType>;
  ChatBoxOutput?: ChatBoxOutputResolvers<ContextType>;
  ChatData?: ChatDataResolvers<ContextType>;
  CheckGiftCodeOutput?: CheckGiftCodeOutputResolvers<ContextType>;
  CheckoutAgreement?: CheckoutAgreementResolvers<ContextType>;
  CheckoutUserInputError?: CheckoutUserInputErrorResolvers<ContextType>;
  CmsBlock?: CmsBlockResolvers<ContextType>;
  CmsBlocks?: CmsBlocksResolvers<ContextType>;
  CmsPage?: CmsPageResolvers<ContextType>;
  ColorSwatchData?: ColorSwatchDataResolvers<ContextType>;
  ComparableAttribute?: ComparableAttributeResolvers<ContextType>;
  ComparableItem?: ComparableItemResolvers<ContextType>;
  CompareList?: CompareListResolvers<ContextType>;
  ComplexTextValue?: ComplexTextValueResolvers<ContextType>;
  ConfigurableAttributeOption?: ConfigurableAttributeOptionResolvers<ContextType>;
  ConfigurableCartItem?: ConfigurableCartItemResolvers<ContextType>;
  ConfigurableOptionAvailableForSelection?: ConfigurableOptionAvailableForSelectionResolvers<ContextType>;
  ConfigurableProduct?: ConfigurableProductResolvers<ContextType>;
  ConfigurableProductOption?: ConfigurableProductOptionResolvers<ContextType>;
  ConfigurableProductOptionValue?: ConfigurableProductOptionValueResolvers<ContextType>;
  ConfigurableProductOptions?: ConfigurableProductOptionsResolvers<ContextType>;
  ConfigurableProductOptionsSelection?: ConfigurableProductOptionsSelectionResolvers<ContextType>;
  ConfigurableProductOptionsValues?: ConfigurableProductOptionsValuesResolvers<ContextType>;
  ConfigurableVariant?: ConfigurableVariantResolvers<ContextType>;
  ConfigurableWishlistItem?: ConfigurableWishlistItemResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  CreateAlbumOutput?: CreateAlbumOutputResolvers<ContextType>;
  CreatePayflowProTokenOutput?: CreatePayflowProTokenOutputResolvers<ContextType>;
  CreateProductReviewOutput?: CreateProductReviewOutputResolvers<ContextType>;
  CreditMemo?: CreditMemoResolvers<ContextType>;
  CreditMemoItem?: CreditMemoItemResolvers<ContextType>;
  CreditMemoItemInterface?: CreditMemoItemInterfaceResolvers<ContextType>;
  CreditMemoTotal?: CreditMemoTotalResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  CustomAttributeMetadata?: CustomAttributeMetadataResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  CustomerAddress?: CustomerAddressResolvers<ContextType>;
  CustomerAddressAttribute?: CustomerAddressAttributeResolvers<ContextType>;
  CustomerAddressRegion?: CustomerAddressRegionResolvers<ContextType>;
  CustomerDownloadableProduct?: CustomerDownloadableProductResolvers<ContextType>;
  CustomerDownloadableProducts?: CustomerDownloadableProductsResolvers<ContextType>;
  CustomerOrder?: CustomerOrderResolvers<ContextType>;
  CustomerOrders?: CustomerOrdersResolvers<ContextType>;
  CustomerOutput?: CustomerOutputResolvers<ContextType>;
  CustomerPaymentTokens?: CustomerPaymentTokensResolvers<ContextType>;
  CustomerToken?: CustomerTokenResolvers<ContextType>;
  CustomizableAreaOption?: CustomizableAreaOptionResolvers<ContextType>;
  CustomizableAreaValue?: CustomizableAreaValueResolvers<ContextType>;
  CustomizableCheckboxOption?: CustomizableCheckboxOptionResolvers<ContextType>;
  CustomizableCheckboxValue?: CustomizableCheckboxValueResolvers<ContextType>;
  CustomizableDateOption?: CustomizableDateOptionResolvers<ContextType>;
  CustomizableDateValue?: CustomizableDateValueResolvers<ContextType>;
  CustomizableDropDownOption?: CustomizableDropDownOptionResolvers<ContextType>;
  CustomizableDropDownValue?: CustomizableDropDownValueResolvers<ContextType>;
  CustomizableFieldOption?: CustomizableFieldOptionResolvers<ContextType>;
  CustomizableFieldValue?: CustomizableFieldValueResolvers<ContextType>;
  CustomizableFileOption?: CustomizableFileOptionResolvers<ContextType>;
  CustomizableFileValue?: CustomizableFileValueResolvers<ContextType>;
  CustomizableMultipleOption?: CustomizableMultipleOptionResolvers<ContextType>;
  CustomizableMultipleValue?: CustomizableMultipleValueResolvers<ContextType>;
  CustomizableOptionInterface?: CustomizableOptionInterfaceResolvers<ContextType>;
  CustomizableProductInterface?: CustomizableProductInterfaceResolvers<ContextType>;
  CustomizableRadioOption?: CustomizableRadioOptionResolvers<ContextType>;
  CustomizableRadioValue?: CustomizableRadioValueResolvers<ContextType>;
  DeleteCompareListOutput?: DeleteCompareListOutputResolvers<ContextType>;
  DeletePaymentTokenOutput?: DeletePaymentTokenOutputResolvers<ContextType>;
  Discount?: DiscountResolvers<ContextType>;
  DownloadableCartItem?: DownloadableCartItemResolvers<ContextType>;
  DownloadableCreditMemoItem?: DownloadableCreditMemoItemResolvers<ContextType>;
  DownloadableInvoiceItem?: DownloadableInvoiceItemResolvers<ContextType>;
  DownloadableItemsLinks?: DownloadableItemsLinksResolvers<ContextType>;
  DownloadableOrderItem?: DownloadableOrderItemResolvers<ContextType>;
  DownloadableProduct?: DownloadableProductResolvers<ContextType>;
  DownloadableProductLinks?: DownloadableProductLinksResolvers<ContextType>;
  DownloadableProductSamples?: DownloadableProductSamplesResolvers<ContextType>;
  DownloadableWishlistItem?: DownloadableWishlistItemResolvers<ContextType>;
  EntityUrl?: EntityUrlResolvers<ContextType>;
  ExchangeRate?: ExchangeRateResolvers<ContextType>;
  FaqGroups?: FaqGroupsResolvers<ContextType>;
  FaqItems?: FaqItemsResolvers<ContextType>;
  FixedProductTax?: FixedProductTaxResolvers<ContextType>;
  GenerateCustomerTokenAsAdminOutput?: GenerateCustomerTokenAsAdminOutputResolvers<ContextType>;
  GiftCardRedeemDetail?: GiftCardRedeemDetailResolvers<ContextType>;
  GiftMessage?: GiftMessageResolvers<ContextType>;
  GroupedProduct?: GroupedProductResolvers<ContextType>;
  GroupedProductItem?: GroupedProductItemResolvers<ContextType>;
  GroupedProductWishlistItem?: GroupedProductWishlistItemResolvers<ContextType>;
  HomePageContent?: HomePageContentResolvers<ContextType>;
  HostedProUrl?: HostedProUrlResolvers<ContextType>;
  HttpQueryParameter?: HttpQueryParameterResolvers<ContextType>;
  ImageSwatchData?: ImageSwatchDataResolvers<ContextType>;
  Invoice?: InvoiceResolvers<ContextType>;
  InvoiceItem?: InvoiceItemResolvers<ContextType>;
  InvoiceItemInterface?: InvoiceItemInterfaceResolvers<ContextType>;
  InvoiceTotal?: InvoiceTotalResolvers<ContextType>;
  IsConfigSettingEnabledOutput?: IsConfigSettingEnabledOutputResolvers<ContextType>;
  IsEmailAvailableOutput?: IsEmailAvailableOutputResolvers<ContextType>;
  ItemSelectedBundleOption?: ItemSelectedBundleOptionResolvers<ContextType>;
  ItemSelectedBundleOptionValue?: ItemSelectedBundleOptionValueResolvers<ContextType>;
  Items?: ItemsResolvers<ContextType>;
  KeyValue?: KeyValueResolvers<ContextType>;
  LayerFilter?: LayerFilterResolvers<ContextType>;
  LayerFilterItem?: LayerFilterItemResolvers<ContextType>;
  LayerFilterItemInterface?: LayerFilterItemInterfaceResolvers<ContextType>;
  MagicSlider?: MagicSliderResolvers<ContextType>;
  MediaGalleryEntry?: MediaGalleryEntryResolvers<ContextType>;
  MediaGalleryInterface?: MediaGalleryInterfaceResolvers<ContextType>;
  MobileCreateAccountOtpOutput?: MobileCreateAccountOtpOutputResolvers<ContextType>;
  MobileCreateCustomerAccountOutput?: MobileCreateCustomerAccountOutputResolvers<ContextType>;
  MobileForgotPassworOTPOutput?: MobileForgotPassworOtpOutputResolvers<ContextType>;
  MobileForgotPassworOTPVerifyOtpOutput?: MobileForgotPassworOtpVerifyOtpOutputResolvers<ContextType>;
  MobileLoginOtpOutput?: MobileLoginOtpOutputResolvers<ContextType>;
  MobileLoginVerifyOtpOutput?: MobileLoginVerifyOtpOutputResolvers<ContextType>;
  MobileResetPassworOutput?: MobileResetPassworOutputResolvers<ContextType>;
  Money?: MoneyResolvers<ContextType>;
  MpGiftCardAmount?: MpGiftCardAmountResolvers<ContextType>;
  MpGiftCardCartItem?: MpGiftCardCartItemResolvers<ContextType>;
  MpGiftCardConfig?: MpGiftCardConfigResolvers<ContextType>;
  MpGiftCardDashboardConfigNotification?: MpGiftCardDashboardConfigNotificationResolvers<ContextType>;
  MpGiftCardDashboardConfigOutput?: MpGiftCardDashboardConfigOutputResolvers<ContextType>;
  MpGiftCardDashboardGiftCard?: MpGiftCardDashboardGiftCardResolvers<ContextType>;
  MpGiftCardDelivery?: MpGiftCardDeliveryResolvers<ContextType>;
  MpGiftCardDiscounts?: MpGiftCardDiscountsResolvers<ContextType>;
  MpGiftCardDiscountsDetail?: MpGiftCardDiscountsDetailResolvers<ContextType>;
  MpGiftCardHistory?: MpGiftCardHistoryResolvers<ContextType>;
  MpGiftCardList?: MpGiftCardListResolvers<ContextType>;
  MpGiftCardOpenAmount?: MpGiftCardOpenAmountResolvers<ContextType>;
  MpGiftCardPreview?: MpGiftCardPreviewResolvers<ContextType>;
  MpGiftCardPriceFormat?: MpGiftCardPriceFormatResolvers<ContextType>;
  MpGiftCardProduct?: MpGiftCardProductResolvers<ContextType>;
  MpGiftCardProductInfo?: MpGiftCardProductInfoResolvers<ContextType>;
  MpGiftCardProductTemplate?: MpGiftCardProductTemplateResolvers<ContextType>;
  MpGiftCardProductTemplateImage?: MpGiftCardProductTemplateImageResolvers<ContextType>;
  MpGiftCardTimeZone?: MpGiftCardTimeZoneResolvers<ContextType>;
  MpGiftCardTimeZoneOption?: MpGiftCardTimeZoneOptionResolvers<ContextType>;
  MpGiftCardTransaction?: MpGiftCardTransactionResolvers<ContextType>;
  MpGiftCardUsed?: MpGiftCardUsedResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderAddress?: OrderAddressResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  OrderItemInterface?: OrderItemInterfaceResolvers<ContextType>;
  OrderItemOption?: OrderItemOptionResolvers<ContextType>;
  OrderPaymentMethod?: OrderPaymentMethodResolvers<ContextType>;
  OrderShipment?: OrderShipmentResolvers<ContextType>;
  OrderTotal?: OrderTotalResolvers<ContextType>;
  PayflowLinkToken?: PayflowLinkTokenResolvers<ContextType>;
  PayflowProResponseOutput?: PayflowProResponseOutputResolvers<ContextType>;
  PayflowProToken?: PayflowProTokenResolvers<ContextType>;
  PaymentToken?: PaymentTokenResolvers<ContextType>;
  PaypalExpressToken?: PaypalExpressTokenResolvers<ContextType>;
  PaypalExpressTokenOutput?: PaypalExpressTokenOutputResolvers<ContextType>;
  PaypalExpressUrlList?: PaypalExpressUrlListResolvers<ContextType>;
  PhysicalProductInterface?: PhysicalProductInterfaceResolvers<ContextType>;
  PickupLocation?: PickupLocationResolvers<ContextType>;
  PickupLocations?: PickupLocationsResolvers<ContextType>;
  PlaceOrderOutput?: PlaceOrderOutputResolvers<ContextType>;
  Price?: PriceResolvers<ContextType>;
  PriceAdjustment?: PriceAdjustmentResolvers<ContextType>;
  PriceRange?: PriceRangeResolvers<ContextType>;
  ProductAttribute?: ProductAttributeResolvers<ContextType>;
  ProductBlock?: ProductBlockResolvers<ContextType>;
  ProductDiscount?: ProductDiscountResolvers<ContextType>;
  ProductImage?: ProductImageResolvers<ContextType>;
  ProductInterface?: ProductInterfaceResolvers<ContextType>;
  ProductLinks?: ProductLinksResolvers<ContextType>;
  ProductLinksInterface?: ProductLinksInterfaceResolvers<ContextType>;
  ProductMediaGalleryEntriesContent?: ProductMediaGalleryEntriesContentResolvers<ContextType>;
  ProductMediaGalleryEntriesVideoContent?: ProductMediaGalleryEntriesVideoContentResolvers<ContextType>;
  ProductPrice?: ProductPriceResolvers<ContextType>;
  ProductPrices?: ProductPricesResolvers<ContextType>;
  ProductReview?: ProductReviewResolvers<ContextType>;
  ProductReviewRating?: ProductReviewRatingResolvers<ContextType>;
  ProductReviewRatingMetadata?: ProductReviewRatingMetadataResolvers<ContextType>;
  ProductReviewRatingValueMetadata?: ProductReviewRatingValueMetadataResolvers<ContextType>;
  ProductReviewRatingsMetadata?: ProductReviewRatingsMetadataResolvers<ContextType>;
  ProductReviews?: ProductReviewsResolvers<ContextType>;
  ProductTierPrices?: ProductTierPricesResolvers<ContextType>;
  ProductVideo?: ProductVideoResolvers<ContextType>;
  Products?: ProductsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RazorpayOrder?: RazorpayOrderResolvers<ContextType>;
  Recentlyviewed?: RecentlyviewedResolvers<ContextType>;
  Region?: RegionResolvers<ContextType>;
  RemoveCouponFromCartOutput?: RemoveCouponFromCartOutputResolvers<ContextType>;
  RemoveItemFromCartOutput?: RemoveItemFromCartOutputResolvers<ContextType>;
  RemoveProductsFromWishlistOutput?: RemoveProductsFromWishlistOutputResolvers<ContextType>;
  ReorderItemsOutput?: ReorderItemsOutputResolvers<ContextType>;
  RevokeCustomerTokenOutput?: RevokeCustomerTokenOutputResolvers<ContextType>;
  RoutableInterface?: RoutableInterfaceResolvers<ContextType>;
  SalesCommentItem?: SalesCommentItemResolvers<ContextType>;
  SalesItemInterface?: SalesItemInterfaceResolvers<ContextType>;
  SearchResultPageInfo?: SearchResultPageInfoResolvers<ContextType>;
  SelectedBundleOption?: SelectedBundleOptionResolvers<ContextType>;
  SelectedBundleOptionValue?: SelectedBundleOptionValueResolvers<ContextType>;
  SelectedConfigurableOption?: SelectedConfigurableOptionResolvers<ContextType>;
  SelectedCustomizableOption?: SelectedCustomizableOptionResolvers<ContextType>;
  SelectedCustomizableOptionValue?: SelectedCustomizableOptionValueResolvers<ContextType>;
  SelectedGiftCardOption?: SelectedGiftCardOptionResolvers<ContextType>;
  SelectedPaymentMethod?: SelectedPaymentMethodResolvers<ContextType>;
  SelectedShippingMethod?: SelectedShippingMethodResolvers<ContextType>;
  SendEmailToFriendOutput?: SendEmailToFriendOutputResolvers<ContextType>;
  SendEmailToFriendRecipient?: SendEmailToFriendRecipientResolvers<ContextType>;
  SendEmailToFriendSender?: SendEmailToFriendSenderResolvers<ContextType>;
  SendFriendConfiguration?: SendFriendConfigurationResolvers<ContextType>;
  SetBillingAddressOnCartOutput?: SetBillingAddressOnCartOutputResolvers<ContextType>;
  SetGuestEmailOnCartOutput?: SetGuestEmailOnCartOutputResolvers<ContextType>;
  SetPaymentMethodOnCartOutput?: SetPaymentMethodOnCartOutputResolvers<ContextType>;
  SetRzpPaymentDetailsOnCartOutput?: SetRzpPaymentDetailsOnCartOutputResolvers<ContextType>;
  SetShippingAddressesOnCartOutput?: SetShippingAddressesOnCartOutputResolvers<ContextType>;
  SetShippingMethodsOnCartOutput?: SetShippingMethodsOnCartOutputResolvers<ContextType>;
  ShipmentItem?: ShipmentItemResolvers<ContextType>;
  ShipmentItemInterface?: ShipmentItemInterfaceResolvers<ContextType>;
  ShipmentTracking?: ShipmentTrackingResolvers<ContextType>;
  ShippingCartAddress?: ShippingCartAddressResolvers<ContextType>;
  ShippingDiscount?: ShippingDiscountResolvers<ContextType>;
  ShippingHandling?: ShippingHandlingResolvers<ContextType>;
  SimpleCartItem?: SimpleCartItemResolvers<ContextType>;
  SimpleProduct?: SimpleProductResolvers<ContextType>;
  SimpleWishlistItem?: SimpleWishlistItemResolvers<ContextType>;
  SmtpBestsellersOutput?: SmtpBestsellersOutputResolvers<ContextType>;
  SortField?: SortFieldResolvers<ContextType>;
  SortFields?: SortFieldsResolvers<ContextType>;
  StoreConfig?: StoreConfigResolvers<ContextType>;
  StoreConfigData?: StoreConfigDataResolvers<ContextType>;
  StorefrontProperties?: StorefrontPropertiesResolvers<ContextType>;
  SubscribeEmailToNewsletterOutput?: SubscribeEmailToNewsletterOutputResolvers<ContextType>;
  SwatchData?: SwatchDataResolvers<ContextType>;
  SwatchDataInterface?: SwatchDataInterfaceResolvers<ContextType>;
  SwatchImageData?: SwatchImageDataResolvers<ContextType>;
  SwatchLayerFilterItem?: SwatchLayerFilterItemResolvers<ContextType>;
  SwatchLayerFilterItemInterface?: SwatchLayerFilterItemInterfaceResolvers<ContextType>;
  SwatchTextData?: SwatchTextDataResolvers<ContextType>;
  TaxItem?: TaxItemResolvers<ContextType>;
  Testimonial?: TestimonialResolvers<ContextType>;
  TestimonialConfiguration?: TestimonialConfigurationResolvers<ContextType>;
  TestimonialContent?: TestimonialContentResolvers<ContextType>;
  TestimonialGeneral?: TestimonialGeneralResolvers<ContextType>;
  TestimonialSettingResponsive?: TestimonialSettingResponsiveResolvers<ContextType>;
  TestimonialSettingSlider?: TestimonialSettingSliderResolvers<ContextType>;
  TextSwatchData?: TextSwatchDataResolvers<ContextType>;
  TierPrice?: TierPriceResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
  TrackingData?: TrackingDataResolvers<ContextType>;
  UpdateCartItemsOutput?: UpdateCartItemsOutputResolvers<ContextType>;
  UpdateProductsInWishlistOutput?: UpdateProductsInWishlistOutputResolvers<ContextType>;
  UploadImageOutput?: UploadImageOutputResolvers<ContextType>;
  UrlRewrite?: UrlRewriteResolvers<ContextType>;
  VirtualCartItem?: VirtualCartItemResolvers<ContextType>;
  VirtualProduct?: VirtualProductResolvers<ContextType>;
  VirtualWishlistItem?: VirtualWishlistItemResolvers<ContextType>;
  Website?: WebsiteResolvers<ContextType>;
  WeddingAlbum?: WeddingAlbumResolvers<ContextType>;
  WishListUserInputError?: WishListUserInputErrorResolvers<ContextType>;
  Wishlist?: WishlistResolvers<ContextType>;
  WishlistCartUserInputError?: WishlistCartUserInputErrorResolvers<ContextType>;
  WishlistData?: WishlistDataResolvers<ContextType>;
  WishlistItem?: WishlistItemResolvers<ContextType>;
  WishlistItemInterface?: WishlistItemInterfaceResolvers<ContextType>;
  WishlistItems?: WishlistItemsResolvers<ContextType>;
  WishlistOutput?: WishlistOutputResolvers<ContextType>;
  addCommentToPostOutput?: AddCommentToPostOutputResolvers<ContextType>;
  appliedjobOutput?: AppliedjobOutputResolvers<ContextType>;
  blogCategoriesOutput?: BlogCategoriesOutputResolvers<ContextType>;
  blogCommentsOutput?: BlogCommentsOutputResolvers<ContextType>;
  blogPostsOutput?: BlogPostsOutputResolvers<ContextType>;
  blogTagsOutput?: BlogTagsOutputResolvers<ContextType>;
  createKlarnaPaymentsSessionOutput?: CreateKlarnaPaymentsSessionOutputResolvers<ContextType>;
  jobDetails?: JobDetailsResolvers<ContextType>;
  jobLocation?: JobLocationResolvers<ContextType>;
  myAccountOtpOutput?: MyAccountOtpOutputResolvers<ContextType>;
  uploadMpGiftCardImageOutput?: UploadMpGiftCardImageOutputResolvers<ContextType>;
};

