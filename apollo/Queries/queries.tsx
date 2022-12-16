import { gql } from "@apollo/client";
import { CART_FRAGMENT, CATEGORIES_FRAGMENT, GIFT_CARD_FRAGMENT_WITH_TEMPLATES } from "./fragment";

export const QUERY = gql`
  query Countries {
    countries {
      available_regions {
        code
        id
        name
      }
      full_name_english
      full_name_locale
      id
      three_letter_abbreviation
      two_letter_abbreviation
    }
  }
`;

export const STORE_CONFIG = gql`
  ${CATEGORIES_FRAGMENT}
  ${GIFT_CARD_FRAGMENT_WITH_TEMPLATES}
  query storeConfig($isAuthenticated: Boolean!) {
    storeConfig {
      store_config_data {
        facebook_app_id
        google_client_id
      }
      absolute_footer
      allow_guest_checkout
      allow_guests_to_write_product_reviews
      allow_items
      allow_order
      autocomplete_on_storefront
      base_currency_code
      base_link_url
      base_media_url
      base_static_url
      base_url
      catalog_default_sort_by
      category_fixed_product_tax_display_setting
      category_url_suffix
      cms_home_page
      cms_no_cookies
      cms_no_route
      configurable_thumbnail_source
      copyright
      default_description
      default_display_currency_code
      default_keywords
      default_title
      demonotice
      front
      grid_per_page
      grid_per_page_values
      head_includes
      head_shortcut_icon
      header_logo_src
      is_default_store
      is_default_store_group
      list_mode
      list_per_page
      list_per_page_values
      locale
      logo_alt
      logo_height
      logo_width
      magento_wishlist_general_is_enabled
      minimum_password_length
      no_route
      payment_payflowpro_cc_vault_active
      product_fixed_product_tax_display_setting
      product_reviews_enabled
      product_url_suffix
      required_character_classes_number
      root_category_uid
      sales_fixed_product_tax_display_setting
      secure_base_link_url
      secure_base_media_url
      secure_base_static_url
      secure_base_url
      send_friend {
        enabled_for_customers
        enabled_for_guests
      }
      show_cms_breadcrumbs
      store_code
      store_group_code
      store_group_name
      store_name
      store_sort_order
      timezone
      title_prefix
      title_separator
      title_suffix
      use_store_in_url
      website_code
      website_name
      weight_unit
      welcome
    }
    productReviewRatingsMetadata {
      items {
        id
        name
        values {
          value
          value_id
        }
      }
    }
    mpGiftCardDashboardConfig @include(if: $isAuthenticated) {
      ...GiftCardConfig
    }
    currency {
      default_display_currency_symbol
    }
    countries {
      id
      full_name_english
      full_name_locale
      three_letter_abbreviation
      two_letter_abbreviation
      available_regions {
        code
        id
        name
      }
    }
    categories {
      total_count
      items {
        ...CategoryItem
      }
    }
  }
`;

export const GET_USER = gql`
  query GetCustomerInformation {
    customer {
      firstname
      lastname
      email
    }
    customerCart{
      id
    }
  }
`;



export const GET_PRODUCTS = gql`
query products(
  $search: String
  $filter: ProductAttributeFilterInput
  $sort: ProductAttributeSortInput
  $currentPage: Int
  $pageSize: Int
) {
  products(
    search: $search
    filter: $filter
    sort: $sort
    currentPage: $currentPage
    pageSize: $pageSize
  ) {
    items {
     
      image {
        url
      }
      name
      sku
      uid
    }
  }
}
`;

// export const PRODUCTS = gql`
//   ${PRODUCTS_FRAGMENT}
//   query Products(
//     $search: String
//     $filter: ProductAttributeFilterInput
//     $pageSize: Int
//     $currentPage: Int
//     $sort: ProductAttributeSortInput
//   ) {
//     products(
//       search: $search
//       filter: $filter
//       pageSize: $pageSize
//       currentPage: $currentPage
//       sort: $sort
//     ) {
//       sort_fields {
//         default
//         options {
//           label
//           value
//         }
//       }
//       aggregations {
//         attribute_code
//         count
//         label
//         options {
//           count
//           label
//           value
//           icon_image
//         }
//       }
//       items {
//         ...ProductItem
//       }
//       total_count
//       page_info {
//         current_page
//         page_size
//         total_pages
//       }
//     }
//   }
// `;